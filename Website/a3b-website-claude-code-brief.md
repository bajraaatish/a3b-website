# a3b Website — Apple-Inspired Enhancement Brief

*For Claude Code. Read this fully before making any changes.*

---

## Context

You have already scaffolded a basic a3b website. This brief upgrades it to feel Apple-inspired — restrained, considered, scroll-driven, premium. **Do not rebuild from scratch.** Extend what exists. Where existing components conflict with this brief, refactor them; where they don't, leave them alone.

The owner is Aatish — a 19-year-old video editor based in Australia. The site is his portfolio and primary sales tool. It must look like it was made by a studio with a six-figure budget, not by a teenager working at a minimum-wage day job.

Videos and finished work do not yet exist. **Every video placement in this brief uses a placeholder component the owner will populate later.** The site must look polished and complete even before any videos are added.

---

## Brand specifications (lock these — do not deviate)

### Colours (these only, in these roles)

```css
:root {
  --bone:  #F4F1EB;  /* primary background */
  --ink:   #1A1F1C;  /* primary text and dark backgrounds */
  --sage:  #7A8B6F;  /* accent only — surgical use */
  --mist:  #C9CFC4;  /* dividers, borders, disabled */
}
```

Strict rule: **Sage may not exceed 5% of any screen.** It appears on the `3` in the wordmark, on one CTA per section (maximum), and on active/focused states. Nowhere else.

### Typography

Load Geist and Geist Mono via fontsource (already in the project — verify and add if missing):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist@5.1.1/400.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist@5.1.1/500.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.1.1/400.css">
```

Permitted weights: **400 and 500 only.** Never bold (700), never italic, never light.

Type scale:

| Use | Size | Weight | Letter-spacing | Line-height |
|-----|------|--------|----------------|-------------|
| Display hero | clamp(64px, 9vw, 144px) | 500 | -0.05em | 1.0 |
| Section heading | clamp(40px, 5vw, 72px) | 500 | -0.035em | 1.05 |
| Subsection | clamp(24px, 2.5vw, 36px) | 500 | -0.025em | 1.1 |
| Body large | 20px | 400 | -0.01em | 1.5 |
| Body | 17px | 400 | 0 | 1.65 |
| Caption | 14px | 400 | 0 | 1.5 |
| Mono | 12px | 400 (mono) | +0.04em | 1.4 |

Letter-spacing tightens as size grows — this is the rule that separates premium typography from amateur typography. Do not skip it.

### Logo

The wordmark is `a3b` in Geist Medium. The `a` and `b` are `--ink` on light backgrounds, `--bone` on dark. The `3` is always `--sage`. Letter-spacing -0.05em.

Place a small wordmark in the top-left of every section except the hero (where it appears full-size as the hero element).

### Voice (apply to all copy)

- Maximum sentence length: 14 words. Break longer ones.
- No exclamation points. Anywhere. Not even in error messages.
- No hype words: "unleash", "supercharge", "next-level", "game-changing", "world-class", "elevate", "revolutionary".
- No corporate filler: "We're passionate about", "Innovative solutions", "Take your X to the next level".
- Sentence case for all headings. Never title case. Never all caps (except `<code>` and intentional mono labels which remain lowercase).
- Numerals as numerals (`3` not "three") in body copy — the brand writes its own name with the digit, the rest of the site follows.

---

## Tech stack

If the existing project does not use these, migrate where reasonable; if not reasonable, replicate the equivalent behaviour:

- **Framework:** Next.js (App Router) or Astro
- **Styling:** Tailwind CSS with CSS variables for the brand colours
- **Animation:** GSAP + ScrollTrigger (for choreographed scroll), Lenis (for smooth scrolling)
- **Video:** Native `<video>` tags with proper preload strategies; Vimeo Player for hosted reels (do not use YouTube embeds — they show related videos and break the feel)
- **Hosting:** Vercel
- **No images of stock people. No abstract decorative shapes. No gradient backgrounds. Period.**

Install these packages if not already present:

```bash
npm install gsap lenis
```

GSAP's ScrollTrigger is now free for all use as of 2025 — no license needed.

---

## Scroll system (foundational — set this up first)

Before building any sections, set up the global scroll system. This is what makes the site feel Apple-inspired rather than generic.

### Lenis smooth scrolling

In your root layout, initialise Lenis to provide buttery smooth scrolling globally:

```js
import Lenis from 'lenis';

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,  // touch devices keep native scroll — feels weird otherwise
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);
```

### GSAP + ScrollTrigger setup

Register ScrollTrigger globally. Sync it with Lenis so scroll-driven animations stay smooth:

```js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### Respect prefers-reduced-motion

Wrap all GSAP animations with a check. Users with reduced-motion preference get the content but not the choreography:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  // initialise animations
}
```

This is non-negotiable for an Apple-level site.

---

## Page structure

The home page is a single long scroll containing these sections in order:

1. Hero
2. Mission statement
3. Reel showcase
4. Approach (4-step process)
5. Selected work (project grid)
6. About / origin story
7. Services
8. Testimonials placeholder
9. Contact / CTA

Each section gets full viewport height (`min-height: 100vh`) and at least 8rem of internal vertical padding. Apple-level sites are vertical — give every idea its own screen.

---

## Section 01 — Hero

### What it does

The hero is the entire first viewport. Loud-quiet: a single confident statement, no visual noise.

### Structure

Centred vertically and horizontally:

- **Wordmark:** `a3b` at display size (clamp 96px → 200px). `a` and `b` in `--ink`, the `3` in `--sage`.
- **Tagline:** Directly below, in 24px Geist Regular: *Quiet work, loud results.*
- **Scroll indicator:** Small Geist Mono caption at the bottom of the viewport: `scroll` with a thin 1px sage line beneath it, animating downward subtly.

### Animation

On page load, the wordmark fades and rises into position over 1.2s with `cubic-bezier(0.16, 1, 0.3, 1)` easing (Apple's ease). The tagline follows 200ms later. The scroll indicator appears 600ms after that.

On scroll, the wordmark stays pinned for ~50% of the first viewport, then fades out as the user scrolls past it. Use ScrollTrigger pinning:

```js
ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  end: '+=50%',
  pin: true,
  pinSpacing: true,
});

gsap.to('.hero-content', {
  opacity: 0,
  y: -50,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=50%',
    scrub: 1,
  },
});
```

### Background

`--bone`. No image, no video, no gradient. The wordmark is the entire hero. **This is the Apple move — restraint where competitors put noise.**

---

## Section 02 — Mission statement

### Purpose

The reason the brand exists, in one large sentence.

### Layout

Full viewport. Single centred line, max-width ~900px. 56px Geist Medium, `--ink`. No subtitle, no image.

> Most brand video looks like everyone else's brand video. We make video that doesn't.

Below the statement, with 80px of breathing space, a small Geist Mono caption reads `the position — 01 / 09` (use as section progress indicator throughout the site).

### Animation

Each word of the headline fades and slides up by 12px, staggered 40ms apart, triggered when the section enters the viewport. Use GSAP SplitText (or a manual split if SplitText isn't available — GSAP's free version doesn't include SplitText, so use a manual word split):

```js
const words = headlineEl.textContent.split(' ');
headlineEl.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');

gsap.from('.word', {
  opacity: 0,
  y: 12,
  duration: 0.8,
  stagger: 0.04,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: headlineEl,
    start: 'top 75%',
  },
});
```

---

## Section 03 — Reel showcase (the biggest video placeholder)

### Purpose

A single, dominant video that demonstrates a3b's aesthetic in 60–90 seconds. This is the most important content on the site.

### Layout

Full-width 16:9 video container, with 8% horizontal margin on each side (so it doesn't bleed to the screen edge — that looks budget). Bone background framing it.

Above the video, small Geist Mono caption: `the reel — 60 seconds of a3b`

Below the video, a single line in 17px: *Sound on, ideally.*

### Placeholder component

The video doesn't exist yet. Build a placeholder component called `<ReelPlaceholder>` that:

- Renders an `--ink` rectangle at the correct 16:9 aspect ratio
- Shows a centred sage play icon (`▶`) inside a sage-outline circle, 64px
- Has a Geist Mono label below: `reel.mp4 — replace with final file at /public/videos/reel.mp4`
- When the actual file exists at the expected path, the component swaps to a real `<video>` element

```jsx
function ReelPlaceholder({ src = '/videos/reel.mp4', poster = '/images/reel-poster.jpg' }) {
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    fetch(src, { method: 'HEAD' })
      .then(r => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, [src]);

  if (hasVideo) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        className="w-full aspect-video"
      />
    );
  }

  return (
    <div className="w-full aspect-video bg-[var(--ink)] flex items-center justify-center relative">
      <div className="w-16 h-16 border-2 border-[var(--sage)] rounded-full flex items-center justify-center">
        <div className="w-0 h-0 border-l-[14px] border-l-[var(--sage)] border-y-[10px] border-y-transparent ml-1" />
      </div>
      <p className="absolute bottom-4 left-4 font-mono text-xs text-[var(--mist)] tracking-wider">
        reel.mp4 — drop final at /public/videos/reel.mp4
      </p>
    </div>
  );
}
```

Use this same pattern for every other video placement on the site — fetch HEAD, swap when present.

### Animation

Section enters with the video container scaling from 0.94 to 1.0 over 1s, easing `power3.out`. The mono label fades in 300ms before the video container animates.

---

## Section 04 — Approach (the 4-step process)

### Purpose

Show the workflow. Builds trust by demystifying the process.

### Layout

Horizontal scrolling section pinned to the viewport for the duration of the scroll. As the user scrolls vertically, four cards slide through horizontally. This is the most Apple-like single piece of choreography in the site.

Each card occupies the full viewport. Each card has:

- A large Geist Mono number in the top-left: `01`, `02`, `03`, `04`
- A heading in 56px Geist Medium
- A 17px paragraph beneath, max-width 480px
- A 16:9 video placeholder on the right side (use `<ReelPlaceholder>` with paths `/videos/approach-01.mp4` through `/videos/approach-04.mp4`)

Content for each card:

| # | Heading | Body |
|---|---------|------|
| 01 | **Brief.** | Twenty minutes. We learn what matters, what to cut, what the work has to do. |
| 02 | **Cut.** | First draft within seven days. Considered, not rushed. The rhythm is found here. |
| 03 | **Refine.** | Two rounds of revisions. No surprises. No hidden rounds. No scope creep. |
| 04 | **Deliver.** | Final files in every format you need. Master, social, vertical, archive. |

### Implementation

```js
const cards = gsap.utils.toArray('.approach-card');
const horizontalScroll = gsap.to(cards, {
  xPercent: -100 * (cards.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.approach-section',
    pin: true,
    scrub: 1,
    snap: 1 / (cards.length - 1),
    end: () => `+=${document.querySelector('.approach-section').offsetWidth}`,
  },
});
```

Add a thin progress bar at the bottom of the viewport during this section showing horizontal scroll progress, in `--sage`.

### Mobile fallback

On mobile (below 768px), do not horizontally pin. Stack the four cards vertically as standard sections. The pinned horizontal pattern feels wrong on touch devices.

---

## Section 05 — Selected work (project grid)

### Purpose

Showcase 6–12 video projects with cinematic thumbnails. This is where the portfolio lives.

### Layout

A 3-column grid on desktop, 2 columns on tablet, 1 column on mobile. Each cell:

- 16:9 aspect ratio video placeholder (use a smaller `<ReelPlaceholder>` variant — same component, smaller proportions)
- Below the thumbnail: project title (20px Geist Medium), client name (14px Geist Regular `--ink-60`), year (Geist Mono 12px)
- 24px gap between rows, 16px gap between columns

Build a `<ProjectCard>` component that accepts: `title`, `client`, `year`, `videoSrc`, `posterSrc`.

The component shows `<ReelPlaceholder>` until a video file exists at the path. Owner will populate later.

### Default project entries (placeholders the owner will replace)

```js
const projects = [
  { title: 'Coming soon', client: 'Project 01', year: '2026', videoSrc: '/videos/projects/01.mp4' },
  { title: 'Coming soon', client: 'Project 02', year: '2026', videoSrc: '/videos/projects/02.mp4' },
  { title: 'Coming soon', client: 'Project 03', year: '2026', videoSrc: '/videos/projects/03.mp4' },
  { title: 'Coming soon', client: 'Project 04', year: '2026', videoSrc: '/videos/projects/04.mp4' },
  { title: 'Coming soon', client: 'Project 05', year: '2026', videoSrc: '/videos/projects/05.mp4' },
  { title: 'Coming soon', client: 'Project 06', year: '2026', videoSrc: '/videos/projects/06.mp4' },
];
```

Until the owner has real work to add, the placeholders themselves look intentional and considered.

### Hover behaviour

On desktop hover over a card:
- The thumbnail subtly scales to 1.02 over 400ms with `cubic-bezier(0.16, 1, 0.3, 1)`
- A `<video muted autoplay loop>` preview plays (if the real video exists)
- A tiny sage play indicator appears in the bottom-right corner

On mobile, no hover behaviour — taps go directly to a detail view.

### Reveal animation

Cards fade and rise into view as the grid enters the viewport, staggered 80ms apart, 600ms duration each.

---

## Section 06 — About / origin story

### Purpose

The most personal section. Aatish's story is part of the brand. He's 19, in Australia, self-taught, working a day job, building toward freelance.

### Layout

Two-column layout on desktop:

- **Left column (40%):** A single vertical 9:16 video placeholder (`<ReelPlaceholder>` configured for vertical aspect) at path `/videos/about.mp4`. This is for Aatish to drop a short personal piece-to-camera.
- **Right column (60%):** Text content.

### Content

```
Heading (56px): One person, one taste.

Body (17px, max-width 520px):
a3b is one editor. No team to second-guess. The edit you see is the edit
you signed off on.

Made by Aatish, 19, in Australia. Trained on too many hours of reference
work. Believes restraint is the most underrated skill in modern editing.

Working with brands and creators who want their work to be remembered,
not just watched.
```

Below the body, a small mono link: `more about the approach →` linking to a dedicated `/about` page (build this page as a placeholder — single line of text saying "coming soon" with the wordmark, the owner will write it later).

---

## Section 07 — Services

### Purpose

Service tiers. Sets pricing expectations before the contact form.

### Layout

Three cards in a row on desktop, stacked on mobile. Each card has:

- A Geist Mono number at the top (`01`, `02`, `03`)
- A name in 24px Geist Medium
- A one-line description in 17px
- A starting price in 20px Geist Medium with `from` in 12px mono before it
- A `--mist` border, 1px

### Content

```
Card 01 — The short film
"A single considered piece. 60 to 180 seconds. Founder story, product hero, brand reveal."
from AUD $1,200

Card 02 — The content set
"Three to ten coordinated edits across formats. Hero film, social cutdowns, vertical variants."
from AUD $3,500

Card 03 — The retainer
"Dedicated editor for your brand. Defined deliverables, predictable turnaround. Monthly."
from AUD $2,500 / month
```

Below the row, a single line: *All prices in AUD. Final quotes after a 20-minute brief.*

---

## Section 08 — Testimonials placeholder

### Purpose

Social proof. Doesn't exist yet — Aatish will fill it as he books clients.

### Layout

A horizontally scrolling row of testimonial cards. Three cards visible at once on desktop, one on mobile.

Each card:
- A short quote (max 30 words) in 22px Geist Regular
- Below the quote: client name, role, company in Geist Mono 12px

### Placeholder

Build a `<TestimonialCard>` component that accepts `quote`, `name`, `role`. Until testimonials exist, render three placeholder cards with this exact content:

```
Card 01:
"Coming after the first three projects."
— placeholder · awaiting first testimonial

Card 02:
"Coming after the first three projects."
— placeholder · awaiting first testimonial

Card 03:
"Coming after the first three projects."
— placeholder · awaiting first testimonial
```

The placeholders are honest, not embarrassing. Once real testimonials exist, they replace these cards directly.

---

## Section 09 — Contact / CTA

### Purpose

The conversion moment. Single clear next step.

### Layout

Full viewport. Centred content:

- Small wordmark `a3b` at 80px
- Heading at 56px Geist Medium: *Want to see if your project fits?*
- Below in 17px: *A twenty-minute brief is the only commitment. We figure out the rest together.*
- A single Sage button — the only Sage element on this section other than the wordmark `3`. Text: `Book a brief →`. Padding 16px 28px. `border-radius` 8px. Hover state: opacity 0.85, no other change.
- Below the button: contact line in mono — `hello@a3b.video · @a3b.studio` (placeholder — owner will replace)

### Animation

Section fades in as user enters. The button has a subtle continuous hover-attract: scale from 1.0 to 1.015 every 4 seconds, easing `power1.inOut`. This is the only continuous animation on the site — restraint everywhere else.

---

## Global navigation

A thin top bar that appears after scrolling past the hero. Contents:

- Left: small wordmark (40px)
- Right: anchor links — `work`, `approach`, `about`, `contact` — Geist Mono 12px, lowercase, `--ink` colour, no underlines, 200ms hover transition to `--sage`

The bar has:
- `--bone` background with `backdrop-filter: blur(20px)` and `background-color: rgba(244, 241, 235, 0.85)` for an Apple-style frosted effect
- A 1px bottom border in `--mist`
- Slides down from the top on first scroll, easing `power3.out` over 400ms
- Stays sticky from that point forward

Build this as a separate `<NavBar>` component that uses ScrollTrigger to detect when to appear.

---

## Performance budget

These targets are non-negotiable. Test before shipping:

- **Largest Contentful Paint:** under 2.5 seconds on fast 4G
- **First Input Delay:** under 100ms
- **Cumulative Layout Shift:** under 0.1
- **Total JavaScript bundle:** under 300KB gzipped (excluding video assets)
- **Lighthouse score:** 95+ Performance, 100 Accessibility, 100 Best Practices

Implementation rules to hit those targets:

- Lazy-load all videos below the fold using `loading="lazy"` and IntersectionObserver
- Preload only the hero reel and the first project thumbnail
- Use `<video preload="metadata">` so only the poster frame downloads until interaction
- Serve images as AVIF with WebP fallback, JPEG as last resort
- Code-split GSAP plugins — only import what each section uses
- Inline critical CSS, defer the rest
- Self-host Geist fonts in production (currently loaded via jsdelivr — fine for development, but for production speed, copy the .woff2 files into `/public/fonts` and load locally with `font-display: swap`)

---

## Accessibility

WCAG 2.2 AA minimum. Specific requirements:

- All videos have text descriptions on adjacent labels
- All images have meaningful alt text (or empty alt for decorative)
- Focus states visible on every interactive element — use a 2px sage outline at 2px offset
- Keyboard navigation works through the entire site without a mouse
- Color contrast checked: `--ink` on `--bone` is 14.8:1 (AAA), `--sage` on `--bone` is 3.4:1 (AA for display text 24px+ only — never use sage for body text)
- `prefers-reduced-motion` skips all GSAP animations but keeps the content fully usable
- Skip-to-content link at the top of the page for screen readers

---

## File structure (expected after this work)

```
/app
  /layout.tsx              # root layout with Lenis init and font loading
  /page.tsx                # the long-scroll home page
  /about
    /page.tsx              # placeholder about page
  /components
    /sections
      Hero.tsx
      Mission.tsx
      Reel.tsx
      Approach.tsx
      Work.tsx
      About.tsx
      Services.tsx
      Testimonials.tsx
      Contact.tsx
    /ui
      NavBar.tsx
      ReelPlaceholder.tsx
      ProjectCard.tsx
      TestimonialCard.tsx
    /motion
      useLenis.ts
      useScrollReveal.ts
      useHeadlineSplit.ts
  /lib
    /gsap.ts               # GSAP and ScrollTrigger registration
/public
  /videos
    /reel.mp4              # owner will add — main showreel
    /about.mp4             # owner will add — vertical piece to camera
    /approach-01.mp4       # owner will add
    /approach-02.mp4       # owner will add
    /approach-03.mp4       # owner will add
    /approach-04.mp4       # owner will add
    /projects
      /01.mp4              # owner will add — through /06.mp4
  /images
    /reel-poster.jpg       # poster frame for main reel
    /projects
      /01.jpg              # poster frames for each project
  /fonts
    /Geist-Regular.woff2   # for production
    /Geist-Medium.woff2
    /GeistMono-Regular.woff2
```

---

## What "done" looks like — quality checklist

Run through this list before committing. Every answer must be yes.

- The hero loads in under 1.5 seconds on a fast connection and feels considered, not rushed
- Scroll feels physically smooth on a Mac trackpad, on Windows scroll wheel, and on iOS touch
- Every section breathes — none feel crowded or rushed
- No exclamation points anywhere in the codebase, including in alt text and error states
- Geist is loading correctly (not falling back to system sans — verify in DevTools)
- Sage appears on five percent or less of every section
- Every video placeholder has a clear caption telling Aatish where to drop the actual file
- The site looks complete and intentional even with all placeholders still in place
- `prefers-reduced-motion` removes all motion but keeps the site fully usable
- The mobile experience is not a degraded desktop experience — it's its own considered design
- Lighthouse Performance score is 95 or higher
- No console errors, no console warnings

---

## What NOT to do

Things that would break the Apple-inspired feel. Do not introduce any of these, even if they seem helpful:

- Carousel libraries with dot indicators
- "Hero overlay" gradients on top of videos
- Animated background patterns or particles
- Drop shadows on cards (Apple sites use spacing and contrast, not shadows)
- Multi-coloured CTAs or "primary/secondary" button distinctions — the brand has one accent
- Newsletter signup popups, exit-intent popups, or chat widgets
- Stock photo people, abstract decorative SVGs, gradient buttons
- Loading spinners — use skeleton states or graceful fades instead
- "Scroll to top" buttons (the site is one page, the nav handles this)
- Cookie banners unless legally required, and if required, make them tasteful
- Auto-playing audio anywhere

---

## After this work is done

Once the site matches this brief, the owner will:

1. Record and edit the hero reel (60–90s, the most important asset)
2. Drop project videos into `/public/videos/projects/`
3. Replace placeholder testimonials as clients accumulate
4. Add real contact details
5. Write the `/about` page

The site must remain beautiful and intentional through every phase of population. If a placeholder ever looks embarrassing or unfinished, the design has failed — fix the placeholder, not the missing content.

---

*Quiet work, loud results.*
