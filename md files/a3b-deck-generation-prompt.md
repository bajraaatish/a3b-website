# Prompt — Generate the a3b pitch deck

*Copy everything below the line into a new Claude conversation. The prompt is self-contained; Claude won't need any other context.*

---

## Role

You are an expert presentation designer building a 10-slide client-facing pitch deck for a brand called **a3b**. The deck will be shown to small-business owners, real-estate agents, content creators, and design-led brands as part of cold outreach and sales conversations. It needs to look like a real, premium brand artefact — not a template, not a corporate slide deck.

Build the deck as a single self-contained HTML artefact with reveal.js for slide navigation. The deck should render full-screen, navigate with arrow keys, and look identical in light and dark surroundings.

---

## About a3b

**a3b** is a one-person freelance video editing brand specialising in minimal, calm, considered video work. The aesthetic neighbourhood is Apple product films, "Her" (2013), Korean silent vlogs, documentary-style brand films. The anti-aesthetic is CapCut transition packs, MrBeast retention edits, zoom-bounce TikTok template work.

Positioning line: **quiet work, loud results.**

Target clients: small businesses, premium real-estate agents, content creators with taste, design-led brands, founder-led businesses with origin stories, boutique hospitality and architecture firms. Not: gaming content, high-energy social ads, viral hook-driven edits.

---

## Brand specifications (strict — do not deviate)

### Colours (use only these values, in these roles)

- **Bone** `#F4F1EB` — primary background
- **Ink** `#1A1F1C` — primary text and dark backgrounds
- **Sage** `#7A8B6F` — accent only, used surgically (single CTA per slide, brand logo `3`, active states)
- **Mist** `#C9CFC4` — dividers, borders, disabled states

Strict rule: Sage may not exceed 5% of any slide. If a slide has a Sage button, it cannot also have Sage decorative elements. Sage is the accent, not a colour palette member you cycle through.

### Typography (load via @fontsource via jsdelivr)

Load these in the `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist@5.1.1/400.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist@5.1.1/500.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.1.1/400.css">
```

- **Primary:** Geist (Medium 500 for headings, wordmark, display; Regular 400 for body)
- **Secondary:** Geist Mono (Regular 400 only — for timestamps, version labels, slide numbers, technical metadata)

Permitted weights: 400 and 500. Never use Bold (700), Light, Italic, or any other weight.

### Type scale

- Display heading: 56px / weight 500 / letter-spacing −0.035em / line-height 1.05
- Section heading: 36px / weight 500 / letter-spacing −0.025em / line-height 1.1
- Sub-heading: 22px / weight 500 / letter-spacing −0.015em
- Body: 18px / weight 400 / line-height 1.6
- Caption: 14px / weight 400 / line-height 1.5
- Mono label: 12px / Geist Mono / letter-spacing +0.04em / lowercase only

### Logo

The wordmark is the word `a3b`, all lowercase, in Geist Medium 500. The `a` and `b` are Ink (`#1A1F1C`), the `3` is Sage (`#7A8B6F`). Letter-spacing −0.05em. This appears in the top-left of every slide except the title slide (where it's the centred hero).

### Voice rules (apply to all copy in the deck)

- Short sentences. Never run more than ~14 words.
- No exclamation points anywhere.
- No hype words: "unleash", "supercharge", "next-level", "game-changing", "world-class".
- No corporate filler: "We're passionate about…", "Innovative solutions".
- Sentence case for all headings. Never title case. Never all caps.
- Numerals are numerals (`3` not "three") in body, the same way the brand writes its own name.

### Design constraints (strict)

- No gradients, no drop shadows, no glow, no blur, no neon.
- No bullet points unless absolutely required. Use paragraph prose where possible.
- No icons except sparingly, monochrome, line-weight.
- No images of stock-photo people, no abstract patterns, no decorative shapes.
- Generous whitespace. If a slide feels crowded, remove something.
- Slide padding: 80px on all sides minimum.
- Each slide has a slide number in the bottom-right corner in Geist Mono 12px Mist colour, formatted as `01 / 10`.

---

## The 10 slides

For each slide, copy and visual structure below. Build exactly these slides in this order.

### Slide 01 — Title

- Centred a3b wordmark, very large (120px size)
- Single line tagline directly below in 22px Geist Regular: *Quiet work, loud results.*
- Bottom-right: Geist Mono caption — `pitch deck · 2026`
- Bone background

### Slide 02 — The problem (one sentence, large)

Centred display text on Bone background, 56px Geist Medium:

> *Most brand video looks like everyone else's brand video.*

Below, in 18px Geist Regular Ink, max-width 480px, left-aligned to centre column:

> Zoom-bounces, whip pans, neon subtitles, the same five CapCut transitions. It's loud because everyone is loud. And it stops working as soon as the next post scrolls past.

### Slide 03 — The position

Two-column layout. Left column: Geist Mono caption "what we make" then a single sentence in 36px Geist Medium: *Calm, considered, documentary-style edits.*

Right column: Geist Mono caption "what we don't make" then a single sentence in 36px Geist Medium Mist colour: *Anything that needs an exclamation point to work.*

Underneath, full-width, 18px Geist Regular: a3b makes video for brands and people who want their work to be remembered, not just watched.

### Slide 04 — What this actually looks like

A 2x2 grid of four reference principles. Each cell: Geist Mono label at top, then a one-line principle in 22px Geist Medium, then a single sentence of body copy in 14px.

Cells:
1. **Pacing** — Cuts hold longer than expected. The viewer's eye gets to rest.
2. **Palette** — Muted, cohesive, one accent. Never a rainbow.
3. **Sound** — Ambient, considered, sometimes silent. Music never overpowers.
4. **Composition** — Single focal point, negative space, intentional framing.

### Slide 05 — What you get

Three service tiers in a horizontal row, equal columns, each in its own Mist-bordered card with 24px internal padding.

**Card 1 — The short film**
Mono label "01" at top. Heading: "Single brand story". Body: One considered piece — 60 to 180 seconds. Founder story, product hero, brand reveal. From AUD $1,200.

**Card 2 — The content set**
Mono label "02". Heading: "Multi-piece campaign". Body: Three to ten coordinated edits across formats. Hero film, social cutdowns, vertical variants. From AUD $3,500.

**Card 3 — The retainer**
Mono label "03". Heading: "Ongoing editing partner". Body: Dedicated editor for your brand. Defined deliverables, predictable turnaround. From AUD $2,500 per month.

Below the row, smaller mono caption: *All prices in AUD. Final quotes after a 20-minute brief.*

### Slide 06 — How we work

A four-step process shown horizontally, with mono labels "01" through "04" and short headings:

1. **Brief** — 20 minutes. We learn what matters, what to cut.
2. **Cut** — First draft within seven days. Considered, not rushed.
3. **Refine** — Two rounds of revisions, always.
4. **Deliver** — Final files in every format you need.

Below the row, a single line: *No surprises. No hidden rounds. No scope creep.*

### Slide 07 — Aesthetic references

Heading at top: "The neighbourhood." Below it, 18px paragraph:

> a3b sits next to the work that respects the viewer's attention. Apple product films. *Her* (2013). Documentary-style brand work. Korean silent vlogs. Anything where restraint is the differentiator.

Below the paragraph, a three-column row of small reference cards, each showing a single text reference (no images — keep type-only for now), with a one-line description:

- **Apple product films** — Negative space, controlled light, no rush.
- **Quiet vlogs (YEJIN, Choki, Her 86m2)** — Silence as a creative choice.
- **Founder-led brand documentaries** — Authenticity over polish.

### Slide 08 — Why a3b

Single-column slide. Heading: "Three reasons to work with us."

Three numbered points, each with a mono number and a 22px Geist Medium one-liner, with a 14px body line beneath:

1. **One person, one taste.** No team to second-guess. The edit you see is the edit you signed off on.
2. **Restraint as a discipline, not a limitation.** Every choice removes noise. The result is more memorable, not less.
3. **Brand polish around the work.** Premium delivery, premium files, premium experience. The whole engagement looks the way the videos look.

### Slide 09 — A note on price

Single-paragraph slide, centred, 22px Geist Regular, max-width 600px:

> a3b is priced for clients who understand the difference between cheap and inexpensive. The work takes longer, holds longer, and gets used longer. If the budget pressure is on volume, we're not the right fit — and we'll tell you that directly.

Below, smaller Geist Mono: *Honesty saves everyone time.*

### Slide 10 — Contact

Centred a3b wordmark (smaller than title — 80px). Below in 22px Geist Regular: *Want to see if your project fits?*

Below that, a single Sage rounded-rect button (the only Sage element on this slide besides the `3` in the wordmark) — text: "Book a 20-minute brief →" in Bone colour, Geist Medium 16px.

Bottom of slide: contact line in mono — `hello@a3b.video · @a3b.studio` (use these as placeholders — note in the deck that the user should replace with real contact details).

---

## Output requirements

Output a single HTML artefact that includes:

1. The `<link>` tags for Geist and Geist Mono via jsdelivr
2. reveal.js loaded from `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.0/reveal.min.js` and its stylesheet
3. A `<style>` block with the brand CSS — using CSS custom properties for the four colours and clean per-slide styles
4. Ten `<section>` elements inside `<div class="slides">`, one per slide, matching the structure above
5. Arrow-key navigation between slides via reveal.js defaults
6. Slide numbers in mono in the bottom-right of every slide except the title

The deck should be presentable in full-screen mode (`reveal.js` handles this). Test that arrow keys move between slides and that each slide is visually balanced.

---

## Quality bar — how to know it's done

Before finishing, check the deck against this list. If any answer is no, revise:

- Could this deck be confused with any other brand's deck? (It should look unmistakeably a3b.)
- Is Sage used on five percent or less of every slide?
- Are all headings in Geist Medium 500 and all body in Geist Regular 400?
- Are there zero exclamation points anywhere?
- Is the wordmark present on every slide except the title?
- Does every slide have generous whitespace, with nothing crowded?
- Are slide numbers present in Geist Mono in the bottom-right of every slide except the title?
- Is the language calm, confident, and unhurried throughout?

Build the deck.
