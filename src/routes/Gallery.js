import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Gallery.css';

const DISPLAY_EDGE = 2400;
const NUMERALS = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

const roman = (n) => NUMERALS.reduce((out, [value, glyph]) => {
    while (n >= value) {
        out += glyph;
        n -= value;
    }
    return out;
}, '');

const sources = (slug, photo) => {
    const base = `/galleries/${slug}/${photo.id}`;
    const displayWidth = Math.min(DISPLAY_EDGE, photo.width >= photo.height ? photo.width : Math.round((photo.width * DISPLAY_EDGE) / photo.height));
    return {
        full: `${base}.jpg`,
        display: `${base}-${DISPLAY_EDGE}.webp`,
        srcSet: `${base}-${DISPLAY_EDGE}.webp ${displayWidth}w, ${base}.jpg ${photo.width}w`,
    };
};

function Lightbox({ slug, photos, index, onClose, onStep }) {
    const [zoomed, setZoomed] = useState(false);
    const photo = photos[index];
    const { full, display } = sources(slug, photo);

    useEffect(() => setZoomed(false), [index]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onStep(1);
            if (e.key === 'ArrowLeft') onStep(-1);
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onStep]);

    return (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={onClose}>
            <div className={`gallery-lightbox-stage${zoomed ? ' is-zoomed' : ''}`}>
                <img
                    src={full}
                    alt={photo.caption}
                    width={photo.width}
                    height={photo.height}
                    style={{ backgroundImage: `url(${display})` }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoomed((z) => !z);
                    }}
                />
            </div>
            <div className="gallery-lightbox-bar" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={() => onStep(-1)} aria-label="Previous">←</button>
                <span className="gallery-lightbox-caption">
                    <span className="gallery-numeral">{roman(index + 1)}</span>
                    {photo.caption}
                </span>
                <button type="button" onClick={() => onStep(1)} aria-label="Next">→</button>
                <button type="button" onClick={onClose} aria-label="Close">✕</button>
            </div>
        </div>
    );
}

function Gallery({ gallery }) {
    const { slug, title, subtitle, photos } = gallery;
    const [open, setOpen] = useState(null);
    const close = useCallback(() => setOpen(null), []);
    const step = useCallback((delta) => setOpen((i) => (i + delta + photos.length) % photos.length), [photos.length]);

    return (
        <div className="gallery">
            <Helmet>
                <title>{title}</title>
                <meta name="robots" content="noindex, nofollow, noimageindex, noarchive" />
                <meta name="googlebot" content="noindex, nofollow, noimageindex, noarchive" />
                <meta name="theme-color" content="#f5efe4" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Inter:wght@400;500;600&display=swap"
                />
            </Helmet>

            <header className="gallery-hero">
                <div className="gallery-kicker">
                    <span>Fotografie</span>
                    <span className="gallery-rule" />
                    <span>{roman(photos.length)} · {photos.length} {photos.length === 1 ? 'photo' : 'photos'}</span>
                </div>
                <h1 className="gallery-title">{title}</h1>
                <div className="gallery-band" aria-hidden="true" />
                {subtitle && <p className="gallery-subtitle">{subtitle}</p>}
            </header>

            <main className="gallery-plates">
                {photos.map((photo, i) => {
                    const { display, srcSet } = sources(slug, photo);
                    const portrait = photo.height > photo.width;
                    return (
                        <figure key={photo.id} className={`gallery-plate${portrait ? ' is-portrait' : ''}`}>
                            <button type="button" className="gallery-frame" onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}>
                                <img
                                    src={display}
                                    srcSet={srcSet}
                                    sizes={portrait ? '(max-width: 900px) 100vw, 62vh' : '(max-width: 1500px) 100vw, 1500px'}
                                    width={photo.width}
                                    height={photo.height}
                                    alt={photo.caption}
                                    loading={i < 2 ? 'eager' : 'lazy'}
                                    decoding="async"
                                />
                            </button>
                            <figcaption>
                                <span className="gallery-numeral">{roman(i + 1)}</span>
                                {photo.caption && <span className="gallery-caption">{photo.caption}</span>}
                            </figcaption>
                        </figure>
                    );
                })}
            </main>

            <footer className="gallery-fine">
                <span className="gallery-rule" />
                <span>Fine</span>
                <span className="gallery-rule" />
            </footer>

            {open !== null && <Lightbox slug={slug} photos={photos} index={open} onClose={close} onStep={step} />}
        </div>
    );
}

export default Gallery;
