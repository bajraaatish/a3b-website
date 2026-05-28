# a3b — website

The marketing site for **a3b** — minimal video, considered craft.
Built straight on the a3b brand system v2.0: Bone / Ink / Sage / Mist,
Geist + Geist Mono, weights 400 and 500 only, no shadows, no gradients,
Sage used surgically. Structure and rhythm take after apple.com — large
calm hero, alternating full-bleed sections, generous whitespace, quiet
scroll reveals — rendered in the a3b skin.

## Pages

| File            | Purpose                                                        |
|-----------------|----------------------------------------------------------------|
| `index.html`    | Home — hero, the problem, the position, craft principles, work preview, services, process, references, price note, CTA |
| `work.html`     | Selected work grid, the editorial through-line, anti-reference |
| `services.html` | Three pricing tiers, process, why a3b, a note on price, FAQ    |
| `about.html`    | The person behind a3b, the system in numbers, the approach     |
| `contact.html`  | Book-a-brief form, contact details, honest notes               |

## Structure

```
Website/
├── index.html  work.html  services.html  about.html  contact.html
├── css/style.css      — full brand system + components, one file
├── js/main.js         — nav, mobile drawer, scroll reveals, FAQ, form
└── assets/
    ├── fonts/         — Geist + Geist Mono (Regular 400, Medium 500)
    └── logos/         — wordmark (ink/bone), mark, original
```

No build step. It is plain HTML/CSS/JS — open `index.html` in a browser,
or serve the folder with any static host.

## Design notes

- **The "video" identity** comes from a frame motif — letterboxed 16:9
  panels, Geist Mono timecodes, and a thin Sage scrubber — so the site
  reads as a video editor's without using stock footage (which the brand
  forbids). Replace these frames with real stills/reels as work lands.
- **Sage** appears only on the wordmark `3`, CTA buttons, the scrubber,
  eyebrow ticks, and small mono accents — well under the 5% rule.
- **Motion** is a single fade-up on scroll, one easing, and a slow
  marquee. All of it stops under `prefers-reduced-motion`.

## Before going live — replace these placeholders

- `hello@a3b.video` and `@a3b.studio` — swap for the real handles
  (used in nav, footers, contact page, and CTA bands).
- The six tiles in `work.html` are stand-in frames — drop in real
  thumbnails/links once the reel exists.
- The contact form is front-end only (`js/main.js` shows a demo notice).
  Wire it to a real handler (Formspree, a serverless function, etc.)
  or keep the `mailto:` fallback.
- Add a real domain to the `og:` / canonical tags as needed.
