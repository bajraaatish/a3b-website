# a3b — Brand Guidelines

*Version 2.0 — the authoritative reference. When in doubt, this document wins.*

---

## 01 — Brand Name

The name is **a3b**. Three characters. Lowercase. No spaces, no hyphens, no separators.

### Casing rules (strict)

- **Always lowercase, in every context, including at the start of a sentence.** "a3b creates calm video" is correct. "A3b creates calm video" is wrong, even when grammar tradition says capitalise.
- **Never use A3B, A3b, a3B, or A.3.B.** These are not acceptable variants.
- **The `3` is a numeral, not the word "three".** Do not write "a-three-b" or "athreeb" anywhere — not in URLs, not in alt text, not in transcripts.

### Where the name appears

| Context | Format |
|---------|--------|
| Body text | `a3b` |
| Sentence start | `a3b` (still lowercase) |
| URLs / handles | `a3b` / `@a3b` |
| File names | `a3b-{descriptor}.{ext}` |
| Verbal pronunciation | "ay-three-bee" |
| Possessive form | `a3b's work` |

### Forbidden constructions

- ❌ "A3B Studios", "a3b Studios", "a3b Productions" — the name stands alone, no suffixes
- ❌ "Team a3b", "By a3b" — write "a3b" cleanly without prefixes
- ❌ Trademark symbols (™, ®) appended to the name in design assets

---

## 02 — Mission & Voice

### Mission

> a3b creates minimal, calm video content for people who value craft over noise. The work respects the viewer's attention and rewards it.

### Voice principles (in order of importance)

1. **Brevity over completeness.** If a sentence can be cut in half, cut it.
2. **Confidence over hype.** State what is true. Do not promise, hype, or beg.
3. **Calm over urgency.** Never use scarcity, fear, or pressure language.
4. **Specific over abstract.** "Three-minute brand films" beats "compelling video content".
5. **Human over corporate.** Write like a person who knows their craft, not a marketing department.

### Approved phrasings (use freely)

- "Made for focused viewing."
- "Less, but better."
- "One story at a time."
- "Quiet work, loud results."
- "Considered craft."
- "Watch what matters."

### Forbidden phrasings (never under any circumstances)

- ❌ Any sentence with an exclamation point
- ❌ "Unleash", "supercharge", "next-level", "game-changing", "10x", "world-class"
- ❌ "We're passionate about…"
- ❌ "Don't miss out", "limited time", "act now"
- ❌ Emojis in formal copy (allowed sparingly in casual social DMs only)
- ❌ All-caps for emphasis (use weight or color instead)

### Tone calibration

| Context | Tone |
|---------|------|
| Website hero | Confident, declarative, 5–10 word sentences |
| Pitch deck | Direct, evidence-backed, no fluff |
| Client emails | Warm but unhurried, professional |
| Social captions | Quiet, observational, no hashtags-as-sentences |
| Invoices / legal | Neutral, clear, transactional |

---

## 03 — Color System

### Palette (authoritative values)

| Name | Hex | RGB (0–255) | RGB (0–1) | Role |
|------|-----|-------------|-----------|------|
| **Bone** | `#F4F1EB` | 244, 241, 235 | 0.957, 0.945, 0.922 | Primary light background |
| **Ink** | `#1A1F1C` | 26, 31, 28 | 0.102, 0.122, 0.110 | Primary text & dark background |
| **Sage** | `#7A8B6F` | 122, 139, 111 | 0.478, 0.545, 0.435 | Accent — strictly limited use |
| **Mist** | `#C9CFC4` | 201, 207, 196 | 0.788, 0.812, 0.769 | Borders, dividers, disabled states |

### Color dominance rule (60–30–9–1)

- **60%** of any composition: Bone or Ink (the dominant neutral)
- **30%** of any composition: the opposing neutral (Ink on Bone layouts, Bone on Ink layouts)
- **9%** of any composition: Mist (structural quiet elements)
- **1%** of any composition: Sage (the accent — and only the accent)

If Sage exceeds 5% of any frame, layout, or composition, the design is wrong. Reduce it.

### Sage usage — strict rules

Sage may **only** appear in these contexts:

- ✅ The `3` in the wordmark
- ✅ The fill of the secondary mark (the chip)
- ✅ Primary CTA buttons (one per screen maximum)
- ✅ Active/focused states in UI
- ✅ A single accent line, dot, or underline per composition

Sage may **never** appear:

- ❌ As a background fill for any large area
- ❌ As body text color
- ❌ As a gradient or blended color
- ❌ Alongside any other accent color (it is the only accent)

### Forbidden colors

The following colors are **explicitly banned** from all brand applications:

- Pure white (`#FFFFFF`) — always use Bone instead
- Pure black (`#000000`) — always use Ink instead
- Saturated blue, red, yellow, purple — these contradict the calm system
- Any gradient between two brand colors
- Drop-shadow tints, glows, or color-blended overlays

### Accessibility minimums

All text must meet **WCAG AA contrast** at minimum:

- Ink on Bone: 14.8:1 ✅ (AAA)
- Bone on Ink: 14.8:1 ✅ (AAA)
- Sage on Bone: 3.4:1 — display sizes (24px+) only, never body
- Bone on Sage: 3.4:1 — display sizes only

---

## 04 — Typography

### Type stack (no substitutions permitted)

**Primary — Geist**
- Used for: wordmark, all headings, body copy, UI text
- Permitted weights: **Regular 400, Medium 500**
- Never use: Light, Thin, Bold (700), Black, Italic
- Download: [vercel.com/font](https://vercel.com/font)

**Secondary — Geist Mono**
- Used for: timestamps, version numbers, status pills, code, file paths, technical metadata
- Permitted weight: **Regular 400 only**
- Never use Mono for: body copy, headings, taglines, marketing prose

### Forbidden substitutions

If Geist cannot be loaded in a context (legal documents, third-party tools), the **only** approved fallback is **Inter** (Regular 400 / Medium 500). Never substitute with:

- ❌ Arial, Helvetica, Calibri, Times, Roboto, Open Sans
- ❌ Any serif typeface, in any context
- ❌ Any display/decorative typeface

### Type scale (locked values)

| Use | Size | Weight | Line-height | Letter-spacing |
|-----|------|--------|-------------|----------------|
| Wordmark (display) | 96–120px | 500 | 1.0 | −0.05em |
| Display heading | 48px | 500 | 1.05 | −0.035em |
| Section heading | 32px | 500 | 1.10 | −0.025em |
| Subsection | 20px | 500 | 1.30 | −0.015em |
| Body | 16px | 400 | 1.55 | 0 |
| Caption | 13px | 400 | 1.50 | 0 |
| Mono label | 11px | 400 (mono) | 1.40 | +0.04em |

**Letter-spacing rule:** tighter at display sizes, neutral at body, slightly opened at small mono labels. Never deviate from these tracking values without justification.

### Paragraph rules

- Maximum line length: **65 characters** (use a `max-width` constraint)
- Body text never sits on a fully justified margin — left-aligned only
- Never use orphans (single-word last lines) — adjust line breaks manually in finals
- No double-spaces, ever
- No underlines except on actual hyperlinks
- No italics for emphasis — use Medium weight or Sage color sparingly

---

## 05 — Logo System

### Primary — Wordmark

The wordmark is `a3b` set in Geist Medium 500 at a letter-spacing of −0.05em. The `3` is filled with Sage (`#7A8B6F`). The `a` and `b` use Ink on light backgrounds, Bone on dark backgrounds.

The wordmark is the default mark. Use it whenever there is horizontal room.

### Secondary — Mark

A Sage rounded square (corner radius = 22% of side length) containing the numeral `3` in Geist Medium, set in Bone. Used **only** when the wordmark cannot read — square avatars, favicons, app icons, watermarks at small scale.

### Clear space (strict)

Minimum padding on **all four sides** of the wordmark equals `1x`, where `1x` is the cap height of the lowercase `a` in the wordmark.

If you cannot provide 1x of clear space, the slot is too small for the wordmark — use the mark instead.

### Minimum size table

| Context | Wordmark min width | Mark min size |
|---------|--------------------|----|
| Print | 25mm | 8mm |
| Desktop screen | 80px | 24px |
| Mobile screen | 60px | 20px |
| Favicon / system tray | — | 16px |
| Video lower-third | 120px | 40px |

Below these minimums, swap to the next-smaller variant or do not place the logo.

### Approved variations (these four only)

1. **Default** — Ink wordmark + Sage `3` on Bone background
2. **Dark mode** — Bone wordmark + Sage `3` on Ink background *(preferred for video work)*
3. **Monochrome Ink** — all-Ink wordmark, no Sage, on Bone (single-color print)
4. **Monochrome Bone** — all-Bone wordmark, no Sage, on Ink (reverse single-color)

No other variations exist or may be created.

### Forbidden treatments (zero tolerance)

| ❌ Never | Why |
|---------|-----|
| Stretch, squash, skew, or distort | Breaks letterform proportions |
| Rotate at any angle | The wordmark is always horizontal |
| Recolor any letter | Sage is locked to the `3`, neutrals to the letters |
| Change weight (Bold, Black, Light, etc.) | Only Medium 500 is permitted |
| Apply drop shadow, glow, blur, outline, bevel | The system is flat, always |
| Apply gradient fills | Brand colors are solid, never blended |
| Place on busy photo backgrounds | Use a Bone or Ink card behind it |
| Place on Sage backgrounds | Sage cannot frame itself |
| Replace the `3` with the word "three" | The numeral is the brand |
| Add containers, badges, or borders | The wordmark stands alone |
| Combine with another wordmark inline | Use separation, not adjacency |
| Animate any part except as a single fade | No bouncing, sliding, or stretching |

---

## 06 — Video Style (the work itself)

### Editing principles

- **Cut on stillness, not on action.** Lets the eye rest.
- **Minimum shot duration: 1.2 seconds.** Anything shorter is a flash, not a frame.
- **No transitions except straight cuts and the occasional cross-dissolve.** Never use wipes, zooms, spins, or page-curls.
- **Audio leads picture.** Sound design and music decisions are made before the cut, not after.
- **One idea per scene.** If a scene is doing two things, split it.

### Color grade

- Slightly desaturated by default (around −15 saturation as a baseline)
- Lifted blacks toward Ink (`#1A1F1C`) — never crushed pure black
- Highlights pulled toward Bone — never blown pure white
- Skin tones protected — calm grade applies to environment, not faces
- Optional sage tint in shadows for branded sequences (subtle, max 5% blend)

### Lower thirds & on-screen text

- All on-screen text uses Geist Medium 500
- Maximum 2 lines per lower third
- Position: lower-left, 8% padding from left and bottom edges
- Color: Bone on a 60%-opacity Ink rounded-rectangle behind it
- Animation: simple fade in, fade out — no slide-ins

### End cards

- Wordmark centered, Bone-on-Ink (dark mode variant)
- Hold for minimum 1.5 seconds before cut to black
- No music swell, no sound effects on the logo reveal

---

## 07 — Application

### Social avatar (Instagram, X, LinkedIn, etc.)

- Use the **secondary mark** (Sage chip + Bone `3`)
- Center the chip inside a Bone safe area with 10% padding on all sides
- Never use the wordmark as a circular avatar — it crops badly

### Email signature

```
{Full name}
a3b — minimal video, considered craft
{email} · {site}
```

- Set in Geist Medium 500 / Regular 400
- No images, no logo embedded — the wordmark in plain text is the signature

### Watermark on video

- Bottom-right corner, 4% padding from edges
- Bone wordmark at 40% opacity
- Never animate the watermark in or out — it appears on the first frame, disappears with the cut

### File naming convention

```
a3b-{project}-{descriptor}-v{n}.{ext}
```

Example: `a3b-client-acme-pitch-v3.mp4`

---

## 08 — Enforcement

These guidelines are not suggestions. They exist because consistency is what makes a small brand feel large.

**Before publishing anything carrying the a3b name, check:**

1. Is the name correctly cased? (`a3b`, not anything else)
2. Is Sage limited to ≤5% of the composition, and only on permitted elements?
3. Are fonts strictly Geist 400/500 or Geist Mono 400?
4. Does the logo have ≥1x clear space?
5. Is the work calm — no exclamation points, no hype words, no decorative effects?

If any answer is no, the work is off-brand. Fix before publishing.

---

*a3b — quiet work, loud results.*

*Version 2.0 · Maintained by Aatish*
