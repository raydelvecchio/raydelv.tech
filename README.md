# Ray Del Vecchio's Website
Website found at [raydelv.tech](https://raydelv.tech). Made with React. 

# Notes
* `raydelv.tech/public/_redirects` tells Netlify to use React router's default redirect, not Netlify's
* `raydelv.tech/public/robots.txt` defines how bots/crawlers/scrapers interact with the site
# Photo galleries
Unlisted galleries live at `raydelv.tech/<slug>`: no links, no sitemap entry, `noindex` via meta tags and `public/_headers`.

* `bun run curate ~/Pictures/Travel/Gaeta gaeta --title "Gaeta" --subtitle "Lazio, Italia"` opens a curator at http://localhost:4747
* Each photo: type an optional caption, then **Yes** (Enter) to publish it or **No** (⌘⌫) to skip it; ⌘Z undoes the last decision
* Kept photos go to `public/galleries/<slug>/` (full-resolution JPEG plus a 2400px WebP) and `src/galleries/<slug>.json` (order, captions, sizes); edit captions there afterwards
* Skips are remembered in `.gallery-curator-<slug>.json` inside the photo folder, so re-running picks up where you left off and new photos dropped into the folder show up automatically
* Originals are never modified or deleted
