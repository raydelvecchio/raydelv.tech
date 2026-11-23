#!/usr/bin/env bun
// Photo curator: bun scripts/curate/server.js <photo folder> <slug> [--title "Gaeta"] [--subtitle "Lazio, Italia"] [--port 4747]
import { readdirSync, existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve, extname, basename } from 'node:path';
import { tmpdir } from 'node:os';

const args = process.argv.slice(2);
const flag = (name, fallback) => {
    const i = args.indexOf(`--${name}`);
    if (i === -1) return fallback;
    const [value] = args.splice(i, 2).slice(1);
    return value;
};
const titleArg = flag('title');
const subtitleArg = flag('subtitle');
const port = Number(flag('port', '4747'));
const [sourceArg, slug] = args;

if (!sourceArg || !slug || !/^[a-z0-9-]+$/.test(slug)) {
    console.error('usage: bun scripts/curate/server.js <photo folder> <slug> [--title "Gaeta"] [--subtitle "Lazio, Italia"] [--port 4747]');
    process.exit(1);
}

const REPO = resolve(import.meta.dir, '../..');
const SOURCE = resolve(sourceArg.replace(/^~/, process.env.HOME));
const GALLERY_JSON = join(REPO, 'src/galleries', `${slug}.json`);
const OUT_DIR = join(REPO, 'public/galleries', slug);
const HEADERS_FILE = join(REPO, 'public/_headers');
const STATE_FILE = join(SOURCE, `.gallery-curator-${slug}.json`);
const CACHE = join(tmpdir(), 'gallery-curator', slug);
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.heic', '.heif', '.tif', '.tiff', '.cr2', '.cr3', '.nef', '.arw', '.dng', '.raf', '.orf', '.rw2']);
const BROWSER_SAFE = new Set(['.jpg', '.jpeg', '.png']);
const FULL_QUALITY = 88;
const DISPLAY_EDGE = 2400;
const DISPLAY_QUALITY = 82;
const PREVIEW_EDGE = 2000;

if (!existsSync(SOURCE)) {
    console.error(`no such folder: ${SOURCE}`);
    process.exit(1);
}
mkdirSync(CACHE, { recursive: true });

const readJson = (file, fallback) => (existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : fallback);
const writeJson = (file, data) => writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);

const titleCase = (s) => s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

const loadGallery = () => {
    const gallery = readJson(GALLERY_JSON, { title: titleCase(slug), subtitle: '', photos: [] });
    if (titleArg) gallery.title = titleArg;
    if (subtitleArg !== undefined) gallery.subtitle = subtitleArg;
    return gallery;
};
const saveGallery = (gallery) => {
    mkdirSync(join(REPO, 'src/galleries'), { recursive: true });
    writeJson(GALLERY_JSON, gallery);
};
const loadState = () => readJson(STATE_FILE, { skipped: [], history: [] });
const saveState = (state) => writeJson(STATE_FILE, state);

const ensureNoIndexHeaders = () => {
    const existing = existsSync(HEADERS_FILE) ? readFileSync(HEADERS_FILE, 'utf8') : '';
    const blocks = [
        [`/${slug}`, 'X-Robots-Tag: noindex, nofollow, noimageindex, noarchive'],
        [`/galleries/${slug}/*`, 'X-Robots-Tag: noindex, noimageindex'],
    ].filter(([path]) => !existing.split('\n').includes(path));
    if (!blocks.length) return;
    const add = blocks.map(([path, header]) => `${path}\n  ${header}\n`).join('\n');
    writeFileSync(HEADERS_FILE, existing ? `${existing.trimEnd()}\n\n${add}` : add);
};

const sources = () => {
    const files = readdirSync(SOURCE).filter((f) => !f.startsWith('.') && IMAGE_EXT.has(extname(f).toLowerCase()));
    const byId = new Map();
    for (const file of files.sort()) {
        const id = basename(file, extname(file));
        const current = byId.get(id);
        if (!current || BROWSER_SAFE.has(extname(file).toLowerCase())) byId.set(id, file);
    }
    return byId;
};

const queue = () => {
    const kept = new Set(loadGallery().photos.map((p) => p.id));
    const { skipped } = loadState();
    const skippedSet = new Set(skipped);
    return [...sources().keys()].filter((id) => !kept.has(id) && !skippedSet.has(id));
};

const run = async (cmd) => {
    const proc = Bun.spawn(cmd, { stdout: 'pipe', stderr: 'pipe' });
    const [out, err, code] = await Promise.all([new Response(proc.stdout).text(), new Response(proc.stderr).text(), proc.exited]);
    if (code !== 0) throw new Error(`${cmd[0]} failed: ${err || out}`);
    return out.trim();
};

const decodable = async (id) => {
    const file = sources().get(id);
    if (!file) throw new Error(`unknown photo ${id}`);
    const path = join(SOURCE, file);
    if (BROWSER_SAFE.has(extname(file).toLowerCase())) return path;
    const tiff = join(CACHE, `${id}.tif`);
    if (!existsSync(tiff)) await run(['sips', '-s', 'format', 'tiff', path, '--out', tiff]);
    return tiff;
};

const previews = new Map();
const preview = (id) => {
    const out = join(CACHE, `${id}-preview.jpg`);
    if (existsSync(out)) return Promise.resolve(out);
    if (!previews.has(id)) {
        previews.set(id, (async () => {
            const input = await decodable(id);
            await run(['magick', input, '-auto-orient', '-resize', `${PREVIEW_EDGE}x${PREVIEW_EDGE}>`, '-quality', '80', out]);
            return out;
        })().finally(() => previews.delete(id)));
    }
    return previews.get(id);
};

const publish = async (id) => {
    mkdirSync(OUT_DIR, { recursive: true });
    const input = await decodable(id);
    const full = join(OUT_DIR, `${id}.jpg`);
    const display = join(OUT_DIR, `${id}-${DISPLAY_EDGE}.webp`);
    await run(['magick', input, '-auto-orient', '-strip', '-quality', String(FULL_QUALITY), '-interlace', 'JPEG', full]);
    await run(['magick', full, '-resize', `${DISPLAY_EDGE}x${DISPLAY_EDGE}>`, '-quality', String(DISPLAY_QUALITY), display]);
    const [width, height] = (await run(['magick', 'identify', '-format', '%w %h', full])).split(' ').map(Number);
    return { width, height };
};

const unpublish = (id) => {
    rmSync(join(OUT_DIR, `${id}.jpg`), { force: true });
    rmSync(join(OUT_DIR, `${id}-${DISPLAY_EDGE}.webp`), { force: true });
};

const status = () => {
    const gallery = loadGallery();
    const pending = queue();
    const state = loadState();
    return {
        slug,
        title: gallery.title,
        total: sources().size,
        kept: gallery.photos.length,
        skipped: state.skipped.length,
        pending,
        canUndo: state.history.length > 0,
        lastAction: state.history.at(-1) ?? null,
    };
};

let busy = Promise.resolve();
const serial = (fn) => {
    const next = busy.then(fn, fn);
    busy = next.catch(() => {});
    return next;
};

const keep = (id, caption) => serial(async () => {
    if (!queue().includes(id)) throw new Error(`${id} is not pending`);
    const size = await publish(id);
    const gallery = loadGallery();
    gallery.photos.push({ id, caption: caption.trim(), ...size });
    saveGallery(gallery);
    ensureNoIndexHeaders();
    const state = loadState();
    state.history.push({ type: 'keep', id });
    saveState(state);
});

const skip = (id) => serial(async () => {
    if (!queue().includes(id)) throw new Error(`${id} is not pending`);
    const state = loadState();
    state.skipped.push(id);
    state.history.push({ type: 'skip', id });
    saveState(state);
});

const undo = () => serial(async () => {
    const state = loadState();
    const last = state.history.pop();
    if (!last) return null;
    if (last.type === 'skip') {
        state.skipped = state.skipped.filter((s) => s !== last.id);
    } else {
        const gallery = loadGallery();
        const photo = gallery.photos.find((p) => p.id === last.id);
        gallery.photos = gallery.photos.filter((p) => p.id !== last.id);
        saveGallery(gallery);
        unpublish(last.id);
        last.caption = photo?.caption ?? '';
    }
    saveState(state);
    return last;
});

const json = (data, status = 200) => Response.json(data, { status });

Bun.serve({
    port,
    idleTimeout: 120,
    async fetch(req) {
        const url = new URL(req.url);
        try {
            if (url.pathname === '/') return new Response(Bun.file(join(import.meta.dir, 'index.html')));
            if (url.pathname === '/api/status') return json(status());
            if (url.pathname.startsWith('/preview/')) {
                const id = decodeURIComponent(url.pathname.slice('/preview/'.length));
                return new Response(Bun.file(await preview(id)), { headers: { 'Cache-Control': 'no-store' } });
            }
            if (req.method === 'POST' && url.pathname === '/api/keep') {
                const { id, caption = '' } = await req.json();
                await keep(id, caption);
                return json(status());
            }
            if (req.method === 'POST' && url.pathname === '/api/skip') {
                const { id } = await req.json();
                await skip(id);
                return json(status());
            }
            if (req.method === 'POST' && url.pathname === '/api/undo') {
                const undone = await undo();
                return json({ ...status(), undone });
            }
            return new Response('not found', { status: 404 });
        } catch (error) {
            return json({ error: error.message }, 500);
        }
    },
});

console.log(`Curating ${SOURCE} -> raydelv.tech/${slug}`);
console.log(`Open http://localhost:${port}`);
