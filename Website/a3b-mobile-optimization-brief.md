# a3b Website — Mobile-First Optimisation Brief

*For Claude Code. Read this fully before making any changes. This builds on the existing site, not a rebuild.*

---

## Context

The a3b website is an Astro project running locally. The desktop version is built and working. This brief is dedicated entirely to bringing the mobile experience up to the same Apple-inspired standard as desktop — not a degraded desktop, but its own intentional design.

The owner has confirmed mobile traffic will be the majority of visitors (real-estate agents on the move, content creators on phones, small-business owners scrolling between meetings). Mobile is the primary experience for this site, not the fallback.

**Audit every section, fix what's broken, leave what works. Do not rebuild components that are already mobile-ready.**

---

## Mobile-first principles (apply globally)

Before touching any specific section, internalise these principles. They are the lens for every change.

1. **Single column by default.** Multi-column is the exception. If a section has columns on desktop, the mobile default is vertical stack — top to bottom, full width.
2. **Touch targets minimum 44×44 pixels.** Every button, link, and tappable element. Smaller than this is unusable on a phone, no matter how it looks.
3. **No hover-dependent interactions.** Hover doesn't exist on touch devices. Any interaction that only appears on hover must have a tap-friendly alternative on mobile.
4. **Type sizing scales down, never up, from mobile.** Start at 14–17px for body, 32–48px for headings on mobile. Larger sizes are bonuses on bigger screens.
5. **Every element justifies its existence.** Mobile has no room for "nice to have." If removing it doesn't damage the experience, remove it on mobile.
6. **Performance on mobile networks is non-negotiable.** Assume slow 4G as the baseline. If it doesn't work there, it doesn't work.
7. **Test on a real phone, not dev tools.** Browser dev-tool mobile views lie about scroll feel, font rendering, and touch behaviour. Always verify on a real device.

---

## Brand specifications (unchanged from main brief)

Colours, fonts, voice rules, and brand specifications remain identical to the desktop site. The only thing changing here is layout, sizing, and interaction. If anything in this brief conflicts with the brand specifications, the brand specifications win.

- Colours: `--bone #F4F1EB`, `--ink #1A1F1C`, `--sage #7A8B6F`, `--mist #C9CFC4`
- Fonts: Geist 400 and 500, Geist Mono 400 only
- Sage limit: 5% of any screen, surgical use only
- No exclamation points, no hype language, sentence case headings

---

## Breakpoints (use these exact values)

```css
/* Mobile-first — base styles target mobile */
/* No media query needed for mobile */

/* Tablet — for landscape phones and small tablets */
@media (min-width: 640px) { ... }

/* Small desktop — most laptops */
@media (min-width: 1024px) { ... }

/* Large desktop */
@media (min-width: 1280px) { ... }

/* Extra large */
@media (min-width: 1536px) { ... }
```

In Tailwind, this maps to:
- Base (no prefix) = mobile
- `sm:` = 640px+
- `lg:` = 1024px+
- `xl:` = 1280px+
- `2xl:` = 1536px+

**Write base styles for mobile. Add `sm:`, `lg:`, `xl:` prefixes only when desktop needs different behaviour.** Never the reverse.

---

## Section-by-section audit

For each section, check the listed items and fix anything that fails. Skip items that are already correct.

### Section 01 — Hero

- **Wordmark size:** On mobile, the hero wordmark should sit between 88px and 120px. If it's still rendering at desktop sizes (160px+), the clamp values need adjusting. Target: `clamp(88px, 22vw, 200px)`.
- **Tagline size:** On mobile, 18–20px. If it's 24px+, reduce it. Mobile body type needs less weight than desktop body type.
- **Vertical centring:** The hero must be centred in the actual mobile viewport — accounting for mobile browser chrome (Safari's URL bar). Use `min-height: 100svh` (small viewport height) instead of `100vh`, which over-extends on iOS Safari.
- **Scroll indicator:** The "scroll" mono caption at the bottom must clear the iOS home indicator area. Add `padding-bottom: max(2rem, env(safe-area-inset-bottom))` to the bottom of the hero.
- **Pin behaviour:** On mobile, disable the ScrollTrigger pin for the hero (it feels janky on touch scroll). Use a simple fade-out instead. Add `pin: window.innerWidth >= 1024` to the relevant ScrollTrigger config.

### Section 02 — Mission statement

- **Headline size:** Mobile max should be 36–40px, not 56px. Use `clamp(32px, 8vw, 56px)`.
- **Max-width:** Reduce from 900px desktop to 100% on mobile, with 24px horizontal padding from the screen edges.
- **Word-by-word animation:** Keep the staggered word-reveal animation but reduce the y-offset from 12px to 6px on mobile. Smaller screens, smaller motion.

### Section 03 — Reel showcase

- **Video margins:** Desktop uses 8% horizontal margin. On mobile, reduce to 16px on each side — anything more wastes precious horizontal space.
- **Video controls:** Native `<video>` controls are tiny and ugly on iOS. Build a custom play overlay that's at least 80×80px, sage outline, centred. On tap, hide the overlay and start native playback.
- **Below-video caption:** "Sound on, ideally" should remain — but reduce size to 15px on mobile so it doesn't dominate.
- **Autoplay:** Do not autoplay on mobile. Mobile users on cellular data resent autoplay videos. Always require tap-to-play. Use `playsInline` to prevent iOS from going fullscreen on play.

### Section 04 — Approach (CRITICAL — most likely to break on mobile)

This is the section most likely to feel broken on mobile if not handled carefully.

The desktop version uses a horizontal-scrolling pinned section. **On mobile (below 1024px) this must NOT pin.** Instead:

- Render the four approach cards as a vertical stack
- Each card is full-width, with 16px horizontal padding
- Each card has minimum height of 70vh (not 100vh — mobile users get tired of full-screen scroll sections)
- The large mono number (`01`, `02`, etc.) sits at the top of each card
- The heading and body stack below
- The video placeholder sits at the bottom of each card, full-width
- Vertical gap between cards: 4rem

Implementation:

```js
// Only run horizontal scroll pin on screens 1024px and up
const isDesktop = window.innerWidth >= 1024;

if (isDesktop) {
  // existing horizontal pin code
} else {
  // do nothing — let the CSS-driven vertical layout handle it
}

// Also listen for resize and re-check
window.addEventListener('resize', () => {
  // GSAP ScrollTrigger.refresh() to recalculate
  ScrollTrigger.refresh();
});
```

- **Progress bar:** The horizontal scroll progress bar from desktop should NOT appear on mobile. Hide it via `hidden lg:block`.

### Section 05 — Selected work (project grid)

- **Column count:** 1 column on mobile (below 640px), 2 columns on tablet (640–1024px), 3 columns on desktop. The existing brief specifies this but verify.
- **Aspect ratio:** Keep 16:9 thumbnails on mobile. Don't change to square or vertical — consistency matters.
- **Gap between cards:** 24px on mobile, not 32px. Tighter spacing reads as more curated.
- **Hover preview behaviour:** Disable on mobile entirely. Mobile users don't hover, and trying to autoplay on touch breaks accessibility. Replace with: on tap, navigate to project detail page (or open the video in a lightbox if no detail page exists).
- **Reveal animation:** The staggered fade-in still applies but reduce the stagger from 80ms to 40ms on mobile (faster, less waiting).

### Section 06 — About / origin story

- **Two-column layout:** Stacks vertically on mobile. Video on top (9:16 vertical, full-width), text below.
- **Vertical video:** Critical — make sure the vertical aspect ratio is preserved on mobile. Use `aspect-ratio: 9/16` and `width: 100%` so the video sits naturally in the mobile viewport without letterboxing.
- **Heading size:** Reduce to `clamp(28px, 7vw, 56px)`.
- **Body max-width:** Remove the 520px constraint on mobile — let it use full width with 24px padding.

### Section 07 — Services

- **Card layout:** Stack vertically on mobile. Each card full-width, 24px horizontal padding.
- **Card padding:** Internal padding 24px on mobile, not 32px. Smaller screens need tighter internal spacing.
- **Pricing visibility:** The "from AUD $1,200" line is the most important content on each card. Make sure it's clearly visible without scrolling within the card. If cards are getting too tall, reduce body copy.
- **Gap between cards:** 16px on mobile. Tight vertical rhythm.

### Section 08 — Testimonials

- **Horizontal scroll:** Change from "three visible at once" desktop to "one full-width card at a time" on mobile.
- **Scroll behaviour:** Use CSS scroll-snap for native, smooth horizontal scrolling. Avoid JavaScript-driven scroll on mobile — it conflicts with native touch momentum.

```css
.testimonials-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.testimonials-container > * {
  flex: 0 0 100%;
  scroll-snap-align: center;
}
.testimonials-container::-webkit-scrollbar {
  display: none;
}
```

- **Pagination dots:** Add small mono dots below the testimonials carousel showing position. Tap to jump. On desktop, remove these.

### Section 09 — Contact / CTA

- **Heading size:** `clamp(28px, 7vw, 56px)` — same scaling as About.
- **Button:** The single sage CTA button must be at minimum 56px tall on mobile (above the 44px minimum, because it's the most important interaction on the site). Padding: 18px 32px.
- **Button width:** Full-width on mobile up to a max-width of 320px, centred. Easier thumb reach than narrow buttons.
- **Contact line:** The mono email/handle line — make sure each item is its own tappable line (not space-separated inline), with the email as a `mailto:` link and the handle as an Instagram URL. Both at least 44px tall tap target.

---

## Navigation

The frosted-glass nav bar from the desktop brief needs mobile-specific handling.

### On mobile (below 1024px)

- The wordmark stays in the top-left as on desktop
- The four anchor links (`work`, `approach`, `about`, `contact`) collapse into a hamburger menu icon in the top-right
- The hamburger icon is 44×44px, centred inside, with a thin sage line for the icon (3 lines, 24px wide each, 2px stroke)
- Tap the hamburger → full-screen overlay slides in from the right with the four links stacked vertically, large (24px Geist Medium), generous spacing between them
- The overlay has `--bone` background with `backdrop-filter: blur(20px)`
- A close button (×) sits in the same position as the hamburger, sage colour, 44×44px
- Tap any link → overlay closes and scrolls to the section

```jsx
function MobileNav({ isOpen, onClose, sections }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bone)]/95 backdrop-blur-xl">
      <button onClick={onClose} className="absolute top-6 right-6 w-11 h-11 text-[var(--sage)]">
        ×
      </button>
      <nav className="flex flex-col items-start justify-center h-full px-8 gap-8">
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={onClose}
            className="text-2xl font-medium text-[var(--ink)]"
          >
            {section.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
```

### Safe area handling

iPhones with home indicators have a "safe area" at the bottom. Any sticky element near the bottom (like a floating CTA, if one is added) must respect this. Use:

```css
padding-bottom: max(1rem, env(safe-area-inset-bottom));
```

---

## Typography rules for mobile

Body copy on mobile needs different treatment than desktop. Specific rules:

- **Body text:** 16px minimum, 17px ideal. Never below 16px — it forces zoom on iOS Safari.
- **Line-height:** Increase to 1.65–1.7 on mobile (desktop was 1.65). Longer line-height on small screens improves readability.
- **Line length:** Max ~50 characters per line on mobile, not 65–75 like desktop. Use shorter `max-width` on body containers.
- **Letter-spacing:** Headings still tighten as size grows, but slightly less aggressively on mobile. At 32px heading, use −0.025em instead of −0.035em.
- **Paragraph spacing:** Increase to 1.5em between paragraphs on mobile (desktop was 1em). Vertical rhythm matters more when content stacks.

---

## Video and image handling

### Video specs for mobile delivery

When the owner adds real videos to `/public/videos/`, they should be encoded for mobile-friendly delivery:

- **Mobile-specific encodes:** Provide a 720p version (1280×720) as well as the 1080p master. Serve based on viewport:

```jsx
<video poster="/images/reel-poster.jpg" controls playsInline preload="metadata">
  <source src="/videos/reel-720.mp4" media="(max-width: 768px)" type="video/mp4" />
  <source src="/videos/reel.mp4" type="video/mp4" />
</video>
```

- **Bitrate:** Target 2–3 Mbps for the 720p mobile encode. Anything higher wastes mobile data and stalls on weak connections.
- **Codec:** H.264 (baseline profile) for maximum device compatibility. AV1 or H.265 for newer devices is a bonus but H.264 is the floor.
- **Poster frames:** Mandatory. A high-quality JPG poster image at every video means the video container isn't black until playback starts.

### Image responsive sources

Use Astro's `<Image />` component (from `astro:assets`) for all images — it handles responsive sources automatically. For raw `<img>` tags, use `srcset`:

```html
<img
  src="/images/example-480.jpg"
  srcset="/images/example-480.jpg 480w, /images/example-960.jpg 960w, /images/example-1920.jpg 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="..."
  loading="lazy"
/>
```

---

## Performance — mobile-specific budgets

These targets must pass on a real mid-range Android phone over 4G, not just on dev hardware.

| Metric | Target | Notes |
|--------|--------|-------|
| Largest Contentful Paint | under 2.5s | The hero wordmark must paint within this window |
| First Input Delay | under 100ms | Mobile JS execution is slower — minimise main-thread work |
| Cumulative Layout Shift | under 0.1 | No jumping content as fonts load or images appear |
| Total page weight | under 1.5MB | Excluding videos, which load on-demand |
| Initial JS bundle | under 200KB gzipped | Defer everything non-critical |

### Specific mobile optimisations

- **Lazy-load below-fold sections:** Astro's component islands make this easy. Wrap non-critical components in `client:visible` so they hydrate only when they enter the viewport.
- **Reduce GSAP footprint:** GSAP's full bundle is heavy. Only import the plugins each section uses — don't import the whole library globally.
- **Self-host fonts in production:** The fontsource CDN loading via jsdelivr is fine for dev but adds latency in production. Copy `Geist-Regular.woff2`, `Geist-Medium.woff2`, and `GeistMono-Regular.woff2` into `/public/fonts/` and load locally with `font-display: swap`.
- **Preload critical assets:** Add to the `<head>`:
  ```html
  <link rel="preload" href="/fonts/Geist-Medium.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/images/reel-poster.jpg" as="image">
  ```
- **Connection-aware loading:** On slow connections, skip the GSAP animations entirely:
  ```js
  const connection = navigator.connection;
  if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
    // skip GSAP, use plain CSS transitions only
  }
  ```

---

## Touch interaction patterns

Mobile is a touch device, not a mouse-with-fingers. Specific rules:

- **No 300ms tap delay:** Add `touch-action: manipulation` to the body to disable double-tap-to-zoom on interactive elements:
  ```css
  body { touch-action: manipulation; }
  ```
- **Active states, not hover states:** Replace hover effects with `:active` states for tactile feedback on tap:
  ```css
  .button:active {
    transform: scale(0.98);
    transition: transform 100ms;
  }
  ```
- **No tooltips on tap:** Tooltips that appear on hover should be inline text on mobile, always visible.
- **Swipe gestures only where natural:** Carousels can use horizontal swipe. Don't add custom swipe gestures for navigation — they're not discoverable.

---

## Lenis smooth scroll on mobile

The Lenis smooth scroll is great on desktop but feels uncanny on mobile (touch scroll already has native momentum). The existing setup should have `smoothTouch: false` — verify this is the case. If not, set it:

```js
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false,  // CRITICAL — native touch scroll on mobile
});
```

Native iOS and Android scroll feel is excellent. Don't override it.

---

## Reduced motion

Users who've enabled "Reduce Motion" in iOS or Android settings must get a fully usable site with no GSAP animations.

Wrap all animation code in the check:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // initialise all GSAP and ScrollTrigger animations
}
```

For CSS-driven animations, use the media query:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Astro-specific mobile considerations

- **View transitions:** Astro has built-in View Transitions API support. Enable it in the root layout for smooth page-to-page transitions on the about page link:
  ```astro
  ---
  import { ViewTransitions } from 'astro:transitions';
  ---
  <head>
    <ViewTransitions />
  </head>
  ```
- **Client directives:** Use `client:visible` for components that only need to be interactive when scrolled into view (Approach section, project grid). Reduces initial JS load on mobile significantly.
- **Image component:** Use Astro's `<Image />` component with `format="webp"` and `loading="lazy"` for all non-hero images. Hero images can use `loading="eager"` and `fetchpriority="high"`.

---

## Testing protocol

After all changes, run through this checklist on a real mobile device (your phone, ideally over cellular data, not Wi-Fi):

### Visual checks
- [ ] Hero loads in under 2 seconds
- [ ] Wordmark is sized appropriately for the screen — not too big, not too small
- [ ] All sections feel intentional, not crowded or sparse
- [ ] Every section is centred and balanced
- [ ] No horizontal scrolling on the page itself (only in designated carousels)
- [ ] Type is readable without zooming
- [ ] Sage accents are surgical, not splashed everywhere

### Interaction checks
- [ ] All buttons and links are tap-friendly (no missed taps)
- [ ] The hamburger menu opens and closes smoothly
- [ ] The Approach section scrolls vertically (not horizontally) on mobile
- [ ] Project grid is single-column
- [ ] Testimonials horizontally swipe with native momentum
- [ ] Video play buttons are large enough to tap easily
- [ ] No accidental zooming when tapping
- [ ] Scroll feels natural (no fighting Lenis)

### Performance checks
- [ ] Initial paint under 2.5s on cellular
- [ ] No layout shift as fonts load
- [ ] No JavaScript errors in console
- [ ] Lighthouse Mobile Performance score 90+
- [ ] Battery doesn't drain noticeably during a 2-minute scroll

### Cross-device checks
- [ ] Works on iOS Safari (iPhone)
- [ ] Works on Chrome on Android
- [ ] Works on Samsung Internet (still ~15% of Android usage)
- [ ] Works in portrait AND landscape
- [ ] Works on a tablet (iPad Mini, iPad Pro, both portrait and landscape)

If any check fails, fix the failure before moving on.

---

## What NOT to do on mobile

- Do not auto-play any video without explicit user tap
- Do not add a "tap here to enable sound" prompt — let the native controls handle it
- Do not add floating action buttons that obscure content
- Do not add sticky footer CTAs (a3b is one page, the contact section is the CTA)
- Do not add "swipe up to see more" indicators — let users scroll naturally
- Do not change layouts mid-scroll (no transforming nav bars beyond the initial slide-in)
- Do not show desktop-only animations on mobile (horizontal pinning, parallax effects, cursor effects all hidden via media queries)
- Do not request location, notifications, or any permissions on page load
- Do not show a cookie banner unless legally required, and if required, make it tasteful
- Do not load Lenis smooth-scroll on mobile (already disabled via `smoothTouch: false`)

---

## After this work is done

The mobile experience should feel like its own intentional design — not a smaller version of desktop. A visitor on a phone should never think "this would be better on a laptop." Both versions should feel complete.

When in doubt about a mobile decision, ask: "Would a real estate agent checking this on their phone between viewings find this clear, fast, and considered?" If not, fix it.

---

*Quiet work, loud results.*
