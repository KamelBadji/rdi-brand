# RDI — Brand Guidelines

_Reality Driven Intelligence · A sub-brand of Evercam · v1.0 draft_

_Brand owner: **Kamel Badji**, Ux / Ui / Brand designer · kamel.badji@evercam.io_

These guidelines apply to **every surface that carries the RDI name** — the portal, sales decks, technical documentation, social media, slides, internal tooling, signage, print collateral, video, photography direction, merchandising, and any co-branding with Evercam. They are the source of truth for the brand. When in doubt, this document wins.

This is the **brand book**. It is intentionally broad — it defines who RDI is and how it shows up everywhere. The **engineering counterpart**, [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md), translates these rules into tokens, CSS variables, and component patterns for the portal codebase. Brand decisions live here. Implementation decisions live there.

The **visual companion** to this document is [`brand-bible.html`](./brand-bible.html) — open it in a browser to see every rule below illustrated with examples, mockups, and specimens.

---

## Table of contents

1. Essence
2. Identity principles
3. The mark (logo)
4. Color
5. Typography
6. The Red Line — signature pattern
7. Iconography
8. Photography & imagery
9. Motion & video
10. Voice & tone
11. Print
12. Social media
13. Co-branding with Evercam
14. Events
15. Environment & merchandising
16. Governance

---

## 1. Essence

**Reality Driven Intelligence** is the discipline of turning continuous site reality — captured by cameras, sensors, and the people on the ground — into structured intelligence that machines and decision-makers can both use.

It is not a product line. It is a way of working.

### Personality

Grounded. Precise. Quietly authoritative. We speak in observations and evidence, not slogans. We earn trust by being legible.

### Aperture

We frame what matters and leave the rest. Wide enough to see context, narrow enough to act. Every page, every frame, every line of copy is a viewfinder — purposeful, attributed, dated.

---

## 2. Identity principles

These are the four principles every brand decision must serve. If a creative direction can't be justified against at least one, it doesn't ship.

1. **Clarity over decoration.** If an element doesn't qualify a message, remove it. The brand reads as discipline because we don't crowd the page.
2. **Observation before assertion.** Show the data, the frame, the timestamp. Then make the claim. Reversing this order — claim first, evidence later — undermines trust.
3. **Structure is the aesthetic.** Grids, rules, type rhythm, the red line — these are not styling. They are the brand. Honor them in every medium.
4. **Restraint multiplies emphasis.** One red line on a page is powerful. Four red lines is a website circa 2008. Use brand assets sparingly.

---

## 3. The mark (logo)

The wordmark **REALITY DRIVEN INTELLIGENCE** is paired with a five-facet geometric mark. The lower-right facet carries the Signature Red — the active aperture, the angle currently in focus. The remaining four facets are Ink. The composition reads as a closed-iris symbol rotating into clarity.

Master files: `D:\Evercam rdi\brand\assets\rdi-logo.svg` (full lockup), `D:\Evercam rdi\brand\assets\rdi-favicon.svg` (mark-only). Always reference these — never re-trace, re-color, or re-export from screenshots.

### Authorized lockups — the colourway rule

The default logo is **always black + red** — the brand colours, on any light surface. Two darktheme variants exist; which one you use is determined by the background. Never pick by taste — the background dictates the rule.

| Lockup | Background | Wordmark | Mark facets | Red wedge |
|---|---|---|---|---|
| **Default** | Paper / Paper Soft | Ink `#231F20` | 4 × Ink | Red `#C3161C` |
| **Reverse · Ink** | Ink `#231F20` | White | 4 × White | Red `#C3161C` |
| **Reverse · Navy** | Navy `#0C1322` | White | 4 × White | Red `#C3161C` |
| **Reverse · Signature** | Red `#C3161C` | Ink `#231F20` | 4 × Ink | White |

Two darktheme colourways:

- **"White + red"** — wordmark white, wedge red. Used on Ink and Navy backgrounds. The Signature Red wedge stays its brand colour because it reads cleanly on dark.
- **"Black + white"** — wordmark black, wedge white. Used on Signature Red backgrounds. The wedge must flip to white because red on red would disappear; the wordmark stays Ink because it preserves the brand's two-tone identity and reads as a deliberate inversion rather than a missing element.

Implementation note: the master SVG is two-toned through CSS custom properties (`--rdi-logo-ink`, `--rdi-logo-red`). The defaults are the brand colours. Override one or both on a host container to flip the lockup. Class-based selectors do **not** cross the SVG `<use>` shadow boundary — only custom properties do. Brand audits should verify every logo placement against this rule.

### Clearspace

Minimum clearspace on every side equals the height of one facet of the mark. No other element — text, image, edge, rule — may enter that zone.

### Minimum sizes

- Mark only: 24px tall on screen, 6mm tall in print.
- Full lockup: 120px wide on screen, 30mm wide in print.

Below these sizes, switch to the mark-only variant or omit the brand entirely. Never use the wordmark without the mark, except for the favicon.

### Don'ts

- Don't recolor the wordmark or any facet outside the four authorized lockups.
- Don't stretch, skew, rotate, or apply effects (drop shadow, glow, bevel, gradient).
- Don't place the lockup on busy imagery without a contrast scrim or a solid surface beneath it.
- Don't use the mark and wordmark separately as if they were two logos. They are one identity in two configurations.
- Don't reconstruct the mark from primitives. Use the master SVG.

### Authenticity — every logo, every time

Brand work is checked against this list every time the mark — RDI's or a co-brand partner's — appears:

- **No placeholder marks in shipped work.** The portal currently ships `src/components/Logo/Logo.tsx` rendering the Payload CMS template logo from a public GitHub URL. The `public/favicon.svg` is a chevron from the same template. Both must be replaced with the RDI master SVGs before any release.
- **No fabricated wordmarks.** Never approximate a logo in CSS or HTML — no fake "ever[c]am" text, no recreations of partner marks from memory, no AI-generated wordmarks. If the master SVG isn't available, render a clearly-labeled placeholder ("Evercam logo · awaiting master SVG") and request the file. The brand bible §13 demonstrates the placeholder pattern.
- **Authentic co-brand assets.** Co-branding renderings of Evercam, partners, or clients must come from each brand's own master SVG. We do not trace, redraw, or approximate. If the partner has not supplied a file, we wait or we use a labeled placeholder.
- **Verify on all four authorized backgrounds.** The wordmark must remain legible on Paper, Ink, Navy, and Signature Red. If only the red facet shows on a dark surface and the wordmark is invisible, the SVG color path is broken (usually a CSS class that doesn't cross the `<use>` shadow boundary — the fix is CSS custom properties on the host).
- **Master file only.** Logos pulled from screenshots, traced from images, or re-exported from secondary editors are not acceptable sources. The master SVGs at `D:\Evercam rdi\brand\assets\` are the only ones we ship.

---

## 4. Color

### 4.1 The Red — house rule

Red is the brand's signature color. It is **structural, not textual**. This rule applies brand-wide — print, web, video, signage, social, packaging. No exceptions without explicit sign-off from the brand owner.

**Red appears as:**
- A solid fill (primary CTAs, the red facet of the mark, badges)
- A border or rule — see §6, the Red Line
- An icon fill in non-text contexts
- A wedge accent on charts, dividers, section breaks

**Red never appears as:**
- Body text, headings, eyebrows, links, captions, alert messages
- Display type, no matter how hero-scale
- Logo wordmark
- Background of an entire surface where text needs to read (except the Reverse Signature lockup, where the only content is the white wordmark)

For error states: use a red border + Red Soft background fill with **Ink-color text inside**. The text inside an error is never red.

### 4.2 Palette

| Token | Hex | Role |
|---|---|---|
| `color.brand.red` | `#C3161C` | Signature — fills only |
| `color.brand.red-strong` | `#A0121A` | Hover / pressed state |
| `color.brand.red-soft` | `#FBEBEC` | Tinted backgrounds |
| `color.brand.ink` | `#231F20` | Primary text, dark surfaces |
| `color.brand.navy` | `#0C1322` | Marketing covers, dark theme base |
| `color.brand.black` | `#000000` | High-emphasis dark blocks |
| `color.neutral.paper` | `#FFFFFF` | Primary background |
| `color.neutral.paper-soft` | `#F7F7F5` | Subdued sections, cards |
| `color.neutral.paper-warm` | `#F2EFEA` | Editorial / print warmth |
| `color.neutral.muted` | `#6B7280` | Secondary text |
| `color.neutral.soft` | `#9CA0A6` | Tertiary text, placeholders |
| `color.neutral.rule` | `#E5E7EB` | Default border / divider |
| `color.neutral.rule-strong` | `#D1D5DB` | Emphasized border |
| `color.signal.success` | `#1F8A6D` | Success state |
| `color.signal.warning` | `#C77A0B` | Warning state |
| `color.signal.error` | `#9A1014` | Error — held distinct from brand red |
| `color.dark.red` | `#E5363D` | Red on dark surfaces (lightened for contrast) |

The full machine-readable token set, including dark-mode variants, shadows, radii, and spacing, lives in [`rdi-tokens.tokens.json`](./rdi-tokens.tokens.json) — Tokens Studio / W3C DTCG format.

### 4.3 Print color management

For print, convert hex to the closest CMYK build using the production house's color profile. Approximate CMYK builds (Coated Fogra39):

- Signature Red: `C 12 / M 100 / Y 100 / K 4`
- Ink: `C 0 / M 5 / Y 0 / K 95`
- Navy: `C 95 / M 85 / Y 50 / K 60`

For premium runs, specify Signature Red as a Pantone spot — closest match is **Pantone 1797 C**. Get a press proof before committing to spot color across a large run.

### 4.4 Contrast minimums

Every text/background pairing on every surface must meet WCAG AA (4.5:1 for normal text, 3:1 for large text ≥18pt). Signature Red on Navy = 3.1:1 — fails AA, never put red text there. The no-red-text rule covers this anyway, but it's worth saying twice.

---

## 5. Typography

### 5.1 Type stack

- **Display & Body:** Inter (Google Fonts, OFL)
- **Mono / data:** JetBrains Mono (OFL)

Inter is used for all editorial type from hero display down to captions. JetBrains Mono is used for numbers, dates, coordinates, IDs, code, file paths — anything that must not lie or be skimmed inaccurately.

### 5.2 Scale

| Style | Weight | Size | Line | Letter |
|---|---|---|---|---|
| Display | 800 | 96px | 1.0 | -0.04em |
| H1 | 700 | 48px | 1.15 | -0.025em |
| H2 | 600 | 30px | 1.15 | -0.02em |
| H3 | 600 | 22px | 1.25 | -0.01em |
| Lead | 400 | 20px | 1.55 | 0 |
| Body | 400 | 16px | 1.65 | 0 |
| Small | 400 | 13px | 1.55 | 0 |
| Eyebrow | 700 | 11px | 1.0 | 0.08em uppercase |
| Mono | 400 | 13px | 1.45 | 0 |

### 5.3 Print sizes

For A4/Letter print collateral:

| Style | Size (pt) | Use |
|---|---|---|
| Display | 64 pt | Cover hero |
| H1 | 32 pt | Section opener |
| H2 | 22 pt | Subsection |
| Body | 10 pt | Running text |
| Caption | 8 pt | Footnotes, metadata |

### 5.4 Pairings

- Display sits over Lead.
- H1 sits over Body.
- H2 follows an Eyebrow (uppercase capitals) and is followed by the **red line** (see §6).
- Mono is used inline for any token-like value — never as a substitute for body type in long-form copy.

---

### 5.5 The dot-grid background — a supporting pattern

A light grey dot grid appears as a background pattern in the brand source. It is **not** a decorative element for general use. The grid is reserved for **technical-drawing contexts** where the dots act as measurement reference — anatomy diagrams of the mark, clearspace specifications, grid construction drawings, alignment guides.

- Pattern: light grey dots (`#D1D5DB` / `--rdi-rule-strong`) at **16px intervals** on Paper background.
- When to use: anatomy of the mark, clearspace diagrams, icon grid construction, measurement spec sheets.
- When not to use: regular content pages, hero sections, photography frames, lockup previews, social posts, print covers, type specimens. The grid is reference notation — using it everywhere reduces it to decoration.

In code: `.dot-grid` utility applies the pattern. In Figma: the same pattern is on the Brand Bible technical-drawing artboards.

---

## 6. The Red Line — signature pattern

The red line is the brand's most distinctive visual gesture. It is a thin red rectangle, used in three configurations and only three. It is **the only way red touches the type system**.

**Brand rule on uppercase titles.** Never duplicate a section name as both a folio indicator and an eyebrow above the same H2. If the page already carries a top-of-page label like "02 · Principles" in mono uppercase, the eyebrow above the title repeating "Principles" is redundant. Keep only the first one — the light-grey folio at the top. The H2 with the red line under it carries the rest.

**Restraint rule on the red line.** The red line is a *singular* gesture. Its power comes from being one on the surface — that's literally Principle #4. **One red line per page** is the working maximum. Concretely:

- A page's H2 with its red rule below it is usually the page's red moment.
- When you have a list of items that each "wants" a rail (principles, governance cards, customer logos, partner names), do **not** put a rail on every item. Four red rails on a "Restraint multiplies emphasis" page is a self-contradiction. Use big numbers, bold titles, horizontal dividers, whitespace — any structural signal that isn't red.
- Mockups of brand surfaces *inside* the bible (business-card mockups, social-post mockups, lockup cards) are exempt: those are previews of independent surfaces, each carrying its own one-red-line moment.
- The §06 Red Line page itself is exempt as a catalog — it shows the variants side-by-side.

If you're about to add a second red rail to a surface, stop and ask: is the H2 line already there? Then this rail is multiplying. Find another cue.

### 6.1 Horizontal under main titles

A 64px × 3px (on screen) or 24mm × 1mm (in print) red rule sits directly below the section's main title (H1 or H2). The eyebrow above is plain uppercase Ink text — the red line lives under the title, never beside the eyebrow.

```
ESSENCE                        ← eyebrow, plain capitals
Bridging the gap between       ← main title (H2)
physical site capture and
artificial intelligence.
▬▬▬▬▬▬▬                        ← red line, 64×3px, 18px gap below title
```

Position: 16–20px gap directly under the title's baseline, left-aligned to the title. Color: Signature Red on light surfaces; lightened `#E5363D` on dark surfaces.

Never above the eyebrow. Never inline. Never repeated on the same heading.

### 6.2 Vertical on the left of a title container

A red rail sits on the **left edge of a title's container** — the block element that holds a title and its immediately-related body together as a single unit. The rail belongs to the container, not to the title element alone: it spans the full height of the block, anchored at the top-left.

```
│  Personality            ← rail spans the container...
│  Grounded, precise,        from the top of the title
│  quietly authoritative.    to the bottom of the body
```

- Dimensions: **3px wide**, full height of the container, 18–21px padding between rail and text.
- Used on: pillars (mission/values), sidebar callouts, governance cards, principle items, pull-quotes, active vertical-nav items.
- The rail is placed on the **container element** (the wrapper), not the title element itself. In HTML this is the `<div>` that holds both the title and the body, not the `<h3>` alone. Putting the rail on the title alone makes it look "over-margined" — floating off-edge of its visual block. The rail anchors the whole content unit.
- For nested layouts where a leading icon or number is followed by a content block (e.g. "01 — Title — Body"), the rail goes on the content block to the right of the icon, not on the row as a whole. The icon stays in its own column.
- One-sided only — never bracketed by a second rail on the right.

**Where the rail does NOT belong.** Beside a paragraph in running text. Beside a section heading that has no related body block following it (use the horizontal rule under the title instead). Around a four-sided framed block.

**Animation direction.** When the vertical rail animates (on reveal, on page load, in motion graphics, in transitions), it draws **top-to-bottom** in 400–600ms with ease-out soft. This mirrors the horizontal red line's **left-to-right** motion: both follow reading direction (start at top-left, travel along the natural axis of the type). A rail that draws bottom-to-top or middle-out reads as a different gesture and is off-brand.

### 6.3 Hover and active states

On interactive elements, the red line appears or thickens to signal interactivity.

- Inline links: **no underline by default**. On hover, a 2px red line approximately **2.5ch wide** (about three letters, matching the red-line-under-titles ratio) animates **left-to-right** beneath the link with the ease-out soft curve at 200ms. The line is anchored to the left edge of the link, never full text width — links inherit the red-line pattern at link scale, they don't introduce a new underline aesthetic.
- Nav tabs / menu items: 2px red rail slides in from the left (or under, for horizontal tabs) on hover and locks when active.
- Buttons (ghost variant): bottom border transitions from transparent → 2px red on hover. Primary buttons darken the fill to Red Strong instead.

Timing: 120ms ease-in. Never longer or more elaborate.

### 6.4 The red line in motion

In video, the red line is a **draw-on animation**. It enters from the left, draws horizontally to its final width (or top, drawing down to full height for vertical variants), and locks. Duration: 400–600ms with an `ease-out` curve. It does **not** pulse, blink, fade in/out, or otherwise call attention to itself beyond the initial draw.

### 6.5 Don'ts

- Not a four-sided frame. Ever.
- Not decorative — must qualify something (a title, a state, a section).
- Not mid-body-copy as a separator. Use whitespace or a neutral rule (`color.neutral.rule`).
- Not dashed, dotted, gradient, or animated beyond the 120ms hover and 400–600ms draw-on.

---

## 7. Iconography

### 7.1 Philosophy

Icons in RDI are **structural**, like the mark. They are not illustrations. They name a noun or a verb and step out of the way.

### 7.2 Style rules

- **Geometry:** built on a 24×24 grid with 2px keylines. Corners are sharp (no radius on terminals) except for genuinely round shapes (clock, sun, lens).
- **Line weight:** 2px stroke, no fills except where a shape genuinely needs interior color (e.g. a filled state, an alert dot).
- **Color:** Ink by default. Red is used **only** for active/selected states on toggle icons, alerts that are not text-bearing, and the dot indicator (see §7.3). Never red icons for non-state decoration.
- **Caps and joins:** square caps, miter joins. Not rounded.
- **Negative space:** preserve at least 2px of breathing room between strokes inside the 24×24 box. Icons don't compress.

### 7.3 The dot indicator

For state-bearing icons (active, in-progress, focused), the icon carries a **small red dot** in the upper-right quadrant. This is the icon-level equivalent of the red line: a structural cue that something is the current focus.

A dot — not a triangle. The wedge shape belongs to the logo and to larger decorative graphic devices; at icon scale a 6–8px solid circle reads more cleanly, doesn't compete with the icon's own geometry, and won't be mistaken for an arrowhead, play button, or chevron.

Use sparingly. One dot per icon. Never two adjacent icons with dots — pick the single most-focused state per row.

### 7.4 Library

The portal currently uses `lucide-react` (Lucide icon library, OFL). Lucide's defaults match the style rules above (2px stroke, square caps, 24px grid). When extending, custom icons must follow the same rules.

A bespoke RDI icon set for marketing surfaces (illustrating workflows, maturity-model stages, the methodology pipeline) is a v2 deliverable. Until it exists, use Lucide and accept the constraint.

### 7.5 Don'ts

- No emojis as functional icons (decorative use in informal copy is fine).
- No multi-color icons. Monochrome only, plus the optional wedge.
- No filled bubble/badge icons unless the icon represents a count or alert.
- No icon-only buttons without a visible label or tooltip. Accessibility wins.

---

## 8. Photography & imagery

### 8.1 What we show

- Real construction sites, real cameras, real conditions.
- Process: pours, lifts, deliveries, inspections, end-of-day.
- People on the ground, with consent, treated with dignity.
- Evidence: timestamped frames, structured records, before/after pairs.

### 8.2 What we don't show

- Stock photography of generic businesspeople in glass offices.
- AI-generated or 3D-rendered "construction" imagery — it undermines the entire RDI thesis. Real reality only.
- Drone glamour shots that hide context. We're not selling beauty; we're selling fidelity.
- Hard-hat-and-tablet clichés.

### 8.3 Treatment

- Color: natural and slightly desaturated. No heavy filters, no extreme contrast, no Instagram-y warmth.
- Crop: respect the original framing where possible. The RDI thesis is that the frame already has the truth.
- Annotations: when an image is annotated (timestamp, camera ID, wedge highlight), the annotations follow the type and color rules of the brand. Red wedge for focus. Mono for numbers.
- Compositing: the RDI red wedge may overlay a photograph to indicate the active region of interest. The wedge is the only red element that may sit on a photograph.

### 8.4 Aspect ratios

- Hero: 16:9 landscape or 4:5 portrait for editorial.
- Cards: 4:3 default; 1:1 for icon-adjacent thumbnails.
- Social: 1:1 (feed), 9:16 (stories), 16:9 (header).
- Print: respect the original capture aspect; reserve 3mm bleed on all four sides for full-bleed placements.

### 8.5 File formats & resolution

- **Photography:** JPEG, sRGB color space, quality 85–90 for web (target ≤ 400 KB per hero image), quality 95–100 for print (uncompressed sources kept in archive).
- **Graphics with transparency:** PNG for raster, SVG for vector.
- **Web-modern:** WebP or AVIF as a `<picture>` fallback where supported, JPEG as the universal default. AVIF can cut weight by 40–60% at equivalent quality.
- **Resolution targets:** web 1× = display size at 72 dpi minimum; web 2× = 2× pixel density for Retina; print = 300 dpi at final size, 600 dpi for fine detail (text inside an image, small annotations).
- **Vector first.** If the asset can be vector (illustration, diagram, mark), keep it vector. Raster is for photography only.

### 8.6 Annotation rules

When an RDI photograph is annotated:

- **Timestamp + source** sits in a small rounded rectangle (3px radius), 60% opaque black, white Mono text, 10–12pt. Bottom-right by default; top-right if the bottom-right has subject content.
- **Red wedge overlay** marks the region of interest — bottom-left or top-left, opposite the timestamp. Size: ~3–5% of frame width. Triangle pointing toward the region (sharp corner = where the focus is).
- **Crop arrows** for before/after pairs: 2px Ink stroke, square caps, drawn between matched frames. No labels on the arrows themselves.
- **Type overlays:** Inter only. No Times, no Arial, no Helvetica. Black text on a 70% white scrim if the image is busy; otherwise white text directly on the image.
- **No watermarks.** RDI doesn't watermark its imagery. The source + time stamp is the attribution.

### 8.7 Sourcing & licensing

- **First-party only.** Photography comes from Evercam camera streams, RDI workflow captures, or commissioned shoots with full rights. Never stock libraries (Shutterstock, Adobe Stock, Unsplash) for shipped brand work.
- **Releases.** Any identifiable person on site needs a model release on file. Any non-public location needs a location release. Both stored alongside the asset.
- **Metadata.** Embed photographer credit, capture date, camera ID, and site code into the EXIF/IPTC fields. Never strip metadata before archiving — only before publishing if a release condition requires.
- **AI imagery is forbidden.** Stable Diffusion, Midjourney, DALL·E, and any future generators are off-limits for RDI brand work. The brand thesis is real reality; synthetic imagery contradicts the thesis at the most fundamental level. Editing real photos with AI fill (Photoshop Generative Fill, etc.) is also out.

### 8.8 Image library & naming

The RDI image library lives in `D:\Evercam rdi\public\rdi\images\` for portal-facing assets. Naming follows the pattern `<workflow>-<descriptor>.jpg`:

- `progress-verification.jpg`
- `gate-logistics.jpg`
- `safety-monitoring.jpg`
- `claims-evidence.jpg`
- `stakeholder-reporting.jpg`

For event and print collateral, mirror the structure under `brand/assets/photography/<campaign-or-event>/`. Each shoot ships with a contact sheet (1:1 thumbnails of every frame) and a selects subfolder.

---

## 9. Motion & video

Motion is the brand's most underused surface — and the most dangerous. A good static deck can survive a vendor handoff; a bad bumper undoes a year of brand discipline in two seconds. The rules below are specific enough that any motion designer can build to them without needing further direction.

### 9.1 Animation principles — the RDI subset

Of the twelve classical animation principles, four govern RDI motion. The rest are off-brand.

- **Anticipation** is allowed, briefly. A 80–120ms pre-state before the main motion (slight scale-down, slight position offset) is fine; longer than that reads as cartoon timing.
- **Follow-through** is allowed if quiet. The mark settles. Type stops cleanly. Never bouncing past the target and back.
- **Ease** is non-negotiable. Linear motion reads as machine output, not communication. Use ease-out for elements arriving, ease-in for elements leaving.
- **Staging** — one element holds the eye at any moment. Never two competing motions in the same beat.

What we don't do: squash and stretch, exaggeration, overshoot bounce, secondary action, arcing paths. RDI doesn't move like a Pixar character. It moves like a measurement tool clicking into place.

### 9.2 Easing curves

| Curve | Use |
|---|---|
| `cubic-bezier(0.2, 0.6, 0.2, 1)` (ease-out soft) | Default for brand motion — bumpers, title cards, red-line draw-on. |
| `cubic-bezier(0.4, 0, 0.4, 1)` (ease-in-out) | UI micro-interactions, fades, crossfades. |
| `cubic-bezier(0.4, 0, 1, 0.4)` (ease-in fast) | Elements leaving the frame. |
| `linear` | Continuous panning over still imagery (site frame slow-zoom). One acceptable use. |
| **Banned:** elastic, bounce, back, anticipate-and-overshoot. | RDI doesn't bounce. |

### 9.3 Timing scale

| Duration | What |
|---|---|
| 120–200 ms | UI micro-interaction (button hover, focus). |
| 200–300 ms | Element fade-in / fade-out. |
| 400–600 ms | Brand motion: red-line draw-on, title-card type-in, mark facet build. |
| 800–1200 ms | Section transitions, scene cuts within a video. |
| 1.5–2.0 s | Full bumper open or close. |
| 2.0–3.0 s | Title card hold (~2× reading time at 250 wpm). |

### 9.4 Brand bumpers — frame by frame

The open bumper is the single most reproduced brand moment. Get it right once and license it for every video.

**Open (1.6s total):**

| Time | What happens |
|---|---|
| 00:00.0 | Navy ground fades up from black (0 → 100% opacity, 200ms). |
| 00:00.2 | Mark begins facet build — facets fade in one at a time, top to bottom-left to bottom-right (60ms per facet, 240ms total). All four ink facets first. |
| 00:00.5 | Red facet snaps into final position with a 60ms scale-from-95% (the closing aperture finishing its rotation). |
| 00:00.7 | Wordmark **REALITY DRIVEN INTELLIGENCE** types in left-to-right (320ms, linear character reveal). |
| 00:01.0 | 64×3px red line draws under the wordmark, left-to-right (400ms, ease-out soft). |
| 00:01.4 | Hold all elements (200ms). |
| 00:01.6 | Cut to content (no fade — clean cut emphasises the transition into substance). |

**Close (1.0s total):** reverse order, faster. Red line withdraws right-to-left (240ms), wordmark fades (200ms), mark fades whole (200ms), Navy holds 200ms, cuts to black.

**Reduced-motion fallback:** users with `prefers-reduced-motion` see the final frame composited and held for 1.2s instead of the animated build.

### 9.5 Kinetic typography

When type is animated:

- **Reveal:** word-by-word or character-by-character, never sentence-at-a-time. Character: 24ms stagger; word: 60ms stagger. Linear within the stagger; the easing happens at the start/end of the run.
- **Type stays put.** Never moves around the frame mid-shot. Once it lands, it holds. No drifting headlines.
- **No outline-then-fill, no glow-on, no flicker.** Type appears via opacity + slight Y-offset (8px → 0px). That's the whole repertoire.
- **Maximum simultaneous elements:** one block of type at a time. Never two competing headlines.

### 9.6 Transitions library

The brand has four authorised transitions. Anything else is off-brand.

- **Cut.** Default. Use unless there's a reason not to.
- **Fade-through-black.** Use between major scene changes (chapter breaks, location changes). 400ms total.
- **Wipe with red line.** The 64×3px red line travels across the frame as a wipe boundary; the outgoing scene exits left, the incoming scene enters right. 600ms. Use sparingly — once per video maximum.
- **Mark-fold.** The five-facet mark animates into existence over the outgoing frame, then unfolds outward as the incoming frame replaces it. 800ms. Brand-set-piece only — title sequences, demo openers.

### 9.7 Lower-thirds — full spec

Speaker name + affiliation. Used in interviews, panel captures, customer testimonials, internal stand-up recordings.

- Speaker name: H3 Inter Semibold, 28pt at 1080p (40pt at 4K), white.
- Affiliation + timestamp: JetBrains Mono Regular, 14pt at 1080p (20pt at 4K), 80% opacity white.
- Background: 80% opaque Navy `#0C1322`. Never Signature Red (saturates on broadcast chroma).
- 3px vertical red rail on the left, full height of the lower-third text block. This is one of the few places the rail spans more than a single title — because the lower-third reads as one unit.
- Animation in: red rail slides up from below over 300ms (ease-out), name fades in 200ms after, affiliation fades in 200ms after that.
- Animation out: reverse, 400ms total.
- Position: left-aligned to a 6% safe margin from screen edge; bottom of the text block sits at 82% of screen height.

### 9.8 Title cards

H2 white on Navy or Ink. The 64×3px red line draws under the title (400ms, ease-out). Hold the title 2–3 seconds depending on word count — roughly 2× the reading time at 250 wpm. Cut on the silence between sentences if the title sits in a voiced video.

### 9.9 Captions & subtitles

Captions are not optional. Every RDI video ships with open or closed captions.

- **SRT / VTT** files alongside the export — never burned-in unless the deliverable specifically requires it (Instagram Reels in silent feeds).
- **Font:** Inter Regular, white text with a 70% opaque black background pill behind each line. No drop shadow, no outline.
- **Size:** 22pt minimum at 1080p (32pt at 4K). Larger if the video is consumed on mobile.
- **Position:** lower-third area, but raised when a lower-third graphic is on screen.
- **Speaker change:** new line. No colour-coding of speakers.
- **Profanity:** captioned verbatim. We do not bowdlerise evidence.

### 9.10 Audio

Quiet, restrained scoring. RDI sound design is closer to a documentary than a marketing video.

- **Music:** instrumental, slow-tempo (60–90 BPM), tonal, with space. Never four-on-the-floor "corporate energy" beats. Never licensed pop. Library recommendations: Musicbed (curate; not the EDM channels), Marmoset, or commissioned bespoke score for the annual hero video.
- **Site audio:** real captured audio from RDI workflow recordings — pour, lift, gate, end-of-day — used as ambient texture under voiceover. Always with consent and signed releases. Process for clarity (gentle EQ, light compression, noise floor cleanup) but never sweeten.
- **Voiceover:** field-report tone. Plain delivery, no announcer cadence. Slight regional accent is welcome — RDI is a global brand but doesn't sound like nowhere.
- **Loudness:** target **−16 LUFS integrated** for web (YouTube spec), **−14 LUFS** for social platforms that re-normalise. True peak max −1 dBTP. Dialog at −10 to −12 LUFS short-term over music bed.
- **Ducking:** music ducks 8–10 dB under dialog with a 200ms attack and 600ms release. Never side-chain compression; ducking only.
- **Stings:** none. RDI doesn't sting in or out. Music fades or hard-cuts on a frame boundary.

### 9.11 Resolution, frame rate, codec

| Use | Resolution | Frame rate | Master codec | Delivery codec |
|---|---|---|---|---|
| Long-form web video | 3840×2160 master / 1920×1080 delivery | 24p cinematic, 30p procedural | Apple ProRes 422 HQ | H.264 high profile, ~10–15 Mbps |
| Social (square / vertical) | 1080×1920 / 1080×1080 | 30p | ProRes 422 HQ | H.264, ~8 Mbps |
| Internal demos / screen capture | 1920×1080 | 60p (screen activity reads cleaner) | ProRes 422 LT | H.264, ~12 Mbps |
| Bumper / brand asset master | 3840×2160 | 60p (resamples cleanly to any rate) | ProRes 4444 with alpha | Re-encoded per use |
| Trade-show looping | Native to wall (often 1920×1080 or custom LED resolution) | 30p | ProRes 422 HQ | H.264, ~20 Mbps (no rebuffer over USB-stick playback) |

H.265 (HEVC) is acceptable for delivery when the platform supports it (web video on Safari/iOS, AppleTV); H.264 for universal compatibility (LinkedIn, YouTube, embedded players). AV1 is too new for safe brand delivery — re-evaluate in 12 months.

### 9.12 Colour management

- **Master in Rec. 709 / Gamma 2.4** (broadcast HD standard) for all standard-dynamic-range work.
- **sRGB** for export — most delivery platforms tag delivered video as sRGB even if mastered in Rec. 709. The difference is small; flag it on the timeline so colourists don't get surprised.
- **HDR (P3 / Rec. 2020):** not yet. Re-evaluate when 30%+ of viewers have HDR delivery. Master in SDR; archive ProRes 4444 will hold up when we upgrade.
- **LUTs:** RDI has no signature LUT. The look is natural, slightly desaturated, slight warm shift on midtones. A motion designer should match Photography §8.3 — same treatment, moving.

### 9.13 Pre-delivery checklist

- File format and codec match the platform spec.
- Loudness normalised to target LUFS.
- Captions / subtitles file present (or burned-in if required).
- Bumper open + close attached.
- Bookend frame (first frame, last frame) holds 3 frames at content level, not at mid-fade — protects from platforms that grab the first frame as the thumbnail.
- File name follows `RDI_<title-slug>_<aspect>_<date>.mp4`.
- Master ProRes archived to `brand/assets/motion/masters/`.
- Sign-off from brand owner on the delivered file before publish.

---

## 10. Voice & tone

RDI sounds like a field report, not a whitepaper.

### 10.1 Principles

- **Observation first, claim second.** "Camera 04 logged 14 trucks between 06:00–09:00" precedes "Site activity was concentrated in the early shift."
- **Attribute and date everything.** A figure without a timestamp and a source is not a figure.
- **Verbs over adjectives.** Don't say "intelligent system." Say what the system does.
- **Specificity over scope.** "Counts truck arrivals at the south gate" beats "manages site logistics."
- **Restraint over enthusiasm.** No exclamation marks. No "powerful." No "revolutionary." Trust the work.

### 10.2 Words we don't use

- "AI" alone (always pair with what it does: "AI detects truck arrivals")
- "Powerful," "robust," "cutting-edge," "next-generation," "seamless"
- "Solution" (we deliver workflows, not solutions)
- "Smart" as an adjective (smart cameras, smart construction)
- "Disruptive"
- Emoji in formal copy

### 10.3 Words we use

- Capture, structure, verify, attribute, evidence, observation
- Frame, timestamp, source, owner
- Workflow, methodology, discipline
- Site, camera, sensor, record

### 10.4 Sentence rhythm

Short. Then sometimes longer to vary. Then short again. Don't string four long clauses with semicolons — break them. RDI copy is closer to a logbook than to a brochure.

---

## 11. Print

### 11.1 Paper

- Default: 120gsm uncoated for letterhead and reports. Uncoated reads more like a field document than coated stock.
- Premium: 300gsm uncoated for covers, business cards.
- Color profile: Coated Fogra39 for color-managed work; Uncoated Fogra47 for uncoated runs. Confirm with the press.

### 11.2 Standard formats

| Item | Size | Notes |
|---|---|---|
| Business card | 85×55mm | Mark front, full wordmark + details back |
| Letterhead | A4 | Mark top-left, red line under contact block |
| Report cover | A4 / Letter | Navy field, white wordmark + red wedge, red line under title |
| Tradeshow poster | A1 / A0 | Single hero image, red wedge highlight, minimal type |
| Site board | Custom | Outdoor-grade vinyl, high contrast, Mono for site codes |

### 11.3 Bleeds & safe zones

- Bleed: 3mm on all four edges.
- Type safe zone: 5mm from trim on all four edges.
- The mark sits no closer than 8mm from any trim edge.

### 11.4 Type sizes in print

See §5.3. Body copy below 9pt is forbidden — uncoated stock and field-light reading conditions make small type unreadable.

### 11.5 File delivery format

- **PDF/X-1a:2001** for offset (older but universally accepted; flattened transparency).
- **PDF/X-4:2010** for digital and modern offset (preserves live transparency, supports ICC profiles).
- Fonts embedded (not subset, not outlined unless press requires).
- All raster at 300 dpi minimum at final size, CMYK or specified spot color, no RGB.
- Press marks: trim, bleed, and registration marks included; 6pt offset from trim.
- Job options preset stored at `brand/assets/print/RDI-PDFX-4.joboptions` for InDesign/Acrobat (to be added).

### 11.6 Recommended paper stocks

For a typical RDI run, prefer uncoated to coated — uncoated stock reads as a field document, coated reads as marketing. Concrete recommendations:

- **Letterhead, reports body:** Mohawk Superfine Eggshell, 120 gsm. Slight tooth, takes ink cleanly, holds tone over time.
- **Covers & business cards:** GF Smith Colorplan, 270–350 gsm. Dense, dimensional. Bright White for default; Ebony for Reverse Ink covers.
- **Premium covers (campaign launches, executive briefings):** Crane Lettra, 220–300 gsm. Cotton-fiber stock, exceptional with letterpress and deboss.
- **Outdoor / site boards:** 4mm Foamex or 3mm Dibond, UV digital print, matte laminate. Hard-hat-rated.
- **Editorial inserts:** Munken Pure or Munken Lynx, 100–150 gsm. Off-white, slightly creamy — pairs with the brand's field-report tone.

For runs below 250 units, consider digital print (HP Indigo, Konica Minolta C12000) over offset — better economics, comparable quality on uncoated stocks.

### 11.7 Binding

- **Saddle stitch** (stapled, 4–48 pages): use for booklets up to ~48 pages on 80–120 gsm. Cheap, fast, opens flat-ish.
- **Perfect bound** (glued spine, 48+ pages): use for reports, methodology guides, case studies. Minimum 3mm spine. Cover wraps around.
- **PUR perfect bound:** stronger glue than standard EVA. Preferred for high-rotation reports.
- **Smyth-sewn** (thread-sewn signatures): use for publications you want to last (annual reports, monographs). Opens completely flat.
- **Wire-O / Spiral:** use for working manuals, field guides — opens 360°. Avoid for executive-facing collateral; reads as utilitarian.
- **Screw-post / Loose-leaf:** use for swappable spec sheets or portfolios. Premium feel at low volume.

### 11.8 Finishes

- **Matte lamination** (15 micron, scuff-resistant): default for covers. Soft-touch reads quietly.
- **Soft-touch laminate:** more tactile, fingerprints more visible — use sparingly on premium covers.
- **Spot UV** on the mark: high-gloss gloss against matte ground. Use for the wedge or the wordmark, never both — restraint applies here too.
- **Foil stamping:** matte red foil on the wedge for premium covers (Kurz Luxor matte red, closest to Pantone 1797 C). Never gloss red foil — too festive.
- **Deboss (blind):** for the wordmark on uncoated covers. The mark feels structural rather than printed.
- **Edge painting:** Ink edge on white stock business cards. Premium signal, kept rare.

### 11.9 Spot colour management

When Signature Red is critical (cover, primary CTA in print), specify **Pantone 1797 C** as a spot rather than building in CMYK. CMYK red builds shift across paper stocks; spot stays consistent.

- Pantone 1797 C → uncoated equivalent: Pantone 1797 U (slightly desaturated; brief the press if matching is critical).
- Test on the target stock before signing off — uncoated absorbs more ink and reads ~10% darker than coated.

### 11.10 Press proofing

Always proof:

- **Soft proof** on a calibrated monitor (sRGB or Adobe RGB depending on the press's profile). Useful for layout but not for colour sign-off.
- **Digital wet proof** (Epson SpectroProofer, GMG ColorProof) — close-enough colour for sign-off, fast and cheap.
- **Press proof / contract proof** on the actual stock with the actual press — required for any run over 1000 units or any Pantone-spec job.
- **Press check:** attend the first sheet off the press for high-stakes runs. Bring the brand book, a Pantone fan, and a 8× loupe.

### 11.11 Trim, registration, imposition

- **Trim marks:** 0.25pt hairlines, 6pt offset from trim, in registration colour. Never inside the bleed.
- **Registration marks** outside the trim area. Use for multi-page jobs with critical alignment.
- **Imposition** (which pages print on which sides of the parent sheet): leave to the press unless you have a specific reason. They know their kit.
- **Creep** on saddle-stitched books over ~32 pages: account for the inner pages being progressively narrower. Most layout apps handle automatically; verify on the proof.
- **Crossover spreads** (image runs across the gutter): only safe on perfect-bound/smyth-sewn books with careful alignment. Avoid in saddle-stitch.

---

## 12. Social media

Social is where RDI is most likely to be seen by people who haven't visited the portal. The bar is not "engage the algorithm" — it's "represent the brand accurately to a stranger." Cadence, archetype balance, and copy discipline matter more than reach.

### 12.1 Account presentation

- **Avatar:** the mark only, on a Signature Red background (high contrast, immediately recognisable in tiny circles). Same image across every platform.
- **Header / cover:** Navy field, white wordmark left-aligned, red wedge motif on the right (per the Reverse Navy lockup rule). No taglines — the platform's bio field carries the description.
- **Bio:** "Reality Driven Intelligence — a discipline from Evercam. We turn site capture into structured intelligence." One sentence. No emoji.
- **Display name:** "Reality Driven Intelligence" (full, not "RDI" — full first impression, abbreviation later in copy).
- **Verified status:** worth pursuing on LinkedIn (company page) and X (organisation badge). Adds trust for B2B audiences.

### 12.2 Content strategy

The feed is an editorial rotation, not a content-marketing funnel.

**Cadence:**
- LinkedIn: 3 posts per week (Mon/Wed/Fri). Avoid weekends — B2B engagement collapses.
- X / Twitter: 1 post per weekday + selective reposts.
- YouTube / Vimeo: 1 long-form per month + occasional shorts.
- Instagram: optional, only if photography is genuinely worth showing — never as obligation.

**Archetype mix:**
- **Observation post (3 per week of 9 total).** A timestamped frame from a real site with a one-sentence caption noting what the frame shows. Mono for timestamp/site code.
- **Concept post (3 per week of 9 total).** A clean type-on-Navy card defining one RDI term (e.g. "Aperture"). H2 white, red line below.
- **Workflow post (3 per week of 9 total).** A diagram or annotated screenshot showing one RDI workflow. Ink line art on Paper Soft.

Rotate 1-1-1. Never two of the same archetype back-to-back in the grid — the grid view is the first thing a stranger sees, and rhythm matters there.

**Calendar approach:**
- Plan content one quarter ahead.
- Each quarter has one theme (e.g. Q2: "Capture", Q3: "Verify", Q4: "Report").
- 70% planned, 30% reactive (real events, customer wins, methodology evolution).
- Never publish in response to news cycles unless RDI has a genuine, attributable contribution.

### 12.3 Copywriting templates

**Observation post caption:**
```
Camera 04 logged 14 trucks at the south gate between 06:00–09:00.
Cycle time down 11% week-over-week.

cam-04 · 2026-05-18 · west-gate-east-london
```

**Concept post caption:**
```
APERTURE.

We frame what matters and leave the rest. Wide enough to see context,
narrow enough to act. Every page is a viewfinder.

A note from the RDI methodology.
```

**Workflow post caption:**
```
Concrete pour verification.

Camera evidence reconstructs the pour timeline. Cross-check against
the as-built schedule. Surface the gap.

Workflow #03 in the RDI methodology.
```

**House rules:**
- Sentence case in posts (not Title Case). Capitalise the first word of each sentence and proper nouns. That's it.
- Numbers always in Mono (the body copy is in the platform's default font, but timestamps and counts get JetBrains Mono if the platform supports rich text — LinkedIn does in document carousels; Twitter does not).
- No emoji.
- No call-to-action buttons in body copy ("Click here", "Learn more"). The link in the post header carries the destination.
- Sign each post with a one-line attribution if the source is a real frame: `cam-XX · YYYY-MM-DD · site-code`.

### 12.4 LinkedIn specifics

LinkedIn is the primary platform for RDI.

- **Document carousels** (PDF posts): the preferred long-form format. 12–24 pages, 1080×1080 each, exported as PDF. Each page is a slide built from the brand book templates. Use for: methodology explainers, customer case studies, annual reports.
- **Native video:** 1080×1080 or 1080×1920, 30 seconds to 3 minutes. Captions burned in (feed is silent by default).
- **Articles (long-form LinkedIn posts):** rare. Use only when the piece is too long for a regular post and not yet ready to live on the RDI portal. Always link back to the portal.
- **Polls:** sparingly. Two per quarter maximum. Frame them as observations needing the audience's expertise, not engagement-bait.
- **Company page vs employee posts:** company page is the canonical feed; employees may amplify or comment but the company page is where the brand voice lives.

### 12.5 X / Twitter specifics

X has a higher cost per word — every character is rationed.

- Single posts, not threads. If it needs a thread, it needs a LinkedIn document carousel.
- Native image attached to every post — link previews are unreliable.
- No replies as marketing. Replies are conversations, not amplifiers.
- Repost selectively from Evercam and from partners. Never repost generic industry content.

### 12.6 Video on social

Video on social is its own discipline, but the rules carry across.

- **Burned-in captions** for silent autoplay. Inter Bold, white on a 70% black background pill, positioned mid-frame in the lower third.
- **First 3 seconds** establish the frame: brand mark visible, headline on screen. The viewer who scrolls past after 3 seconds got the message.
- **Length targets:** 8–15s for LinkedIn feed, 15–30s for Reels/Shorts, 1–3 min for long-form on the page.
- **Aspect:** 1:1 (1080×1080) for feed, 9:16 (1080×1920) for Reels/Stories, 16:9 (1920×1080) for embedded long-form.
- **Bumper:** abbreviated 0.6s version (mark only, no wordmark animation) at the head. Full 1.6s bumper is reserved for long-form video.

### 12.7 Stories & ephemeral content

Used sparingly. RDI's brand is permanence and evidence — ephemerality contradicts both.

- Stories are for live events only: behind-the-scenes from a trade show, a panel session, a customer site visit (with consent).
- Same brand rules apply — no red text, brand bumper at the head, mono timestamps.
- Archived to Highlights only if the moment has lasting value (event recap, customer milestone). Otherwise let it disappear.

### 12.8 Engagement & replies

- Replies on the company page come from a named human, not "the brand team."
- No automated responses. No DMs from a bot.
- Negative feedback gets one acknowledgement publicly + a follow-up in DM. Never argue in a thread.
- Customer mentions: like, reply with a short thank you, never repost unless the customer explicitly asks.

### 12.9 Crisis communication

When something goes wrong (data incident, public criticism, a customer issue going public):

1. Acknowledge within 4 hours — even if the response is "we're looking into this."
2. The first response is the company line, posted by the named comms lead. Never the brand team anonymously.
3. Substance over speed: don't post a fix until there is one. Holding statements are fine.
4. Once the issue is resolved, post the resolution publicly, even if the original criticism was private. Transparency rebuilds trust faster than silence.
5. Internal review afterwards. Document what happened, what we did, what we'll change.

### 12.10 Platform dimensions (cheat sheet)

| Platform | Feed | Stories | Header | Video feed | Video aspect |
|---|---|---|---|---|---|
| LinkedIn | 1200×627 (link) / 1080×1080 (image) | n/a | 1584×396 | 1080×1080 or 1920×1080 | 1:1 or 16:9 |
| X / Twitter | 1600×900 (link card) / 1080×1080 (image) | n/a | 1500×500 | 1280×720 | 16:9 |
| Instagram | 1080×1080 (feed) / 1080×1350 (portrait) | 1080×1920 | n/a | 1080×1920 (Reels) | 9:16 |
| YouTube | n/a | n/a | 2560×1440 (channel art) | 1920×1080 or 3840×2160 | 16:9 |
| YouTube Shorts | n/a | n/a | n/a | 1080×1920 | 9:16 |

### 12.11 Hashtags

Sparingly. Three maximum. Specific to the work shown, not generic ("#construction"). Better to use one specific tag (#concretePour-Verification) than three vague ones (#construction #tech #AI). On LinkedIn, hashtags work in long-form posts but feel awkward in document carousels — omit them there.

### 12.12 Measurement

Don't optimise for engagement. Optimise for the right reader.

- **Impressions:** vanity metric. Useful for noticing decline (drop of 30%+ week-on-week signals platform or content issue), not for celebrating growth.
- **Engagement rate (likes + comments + shares / impressions):** healthy when above 3% on LinkedIn. Below 1% sustained means the message isn't landing.
- **Profile visits → portal click-through:** the metric that matters. If a follower visits the bio and clicks through to the portal, the social presence is doing its job.
- **Direct outreach via DM or email after a post:** the metric that matters most. One serious customer conversation per month from a single post justifies the post.

Don't chase virality. RDI's audience is small, specific, and worth knowing by name. Five reposts from the right ten construction-tech leaders matter more than 50,000 impressions from algorithm noise.

---

## 13. Co-branding with Evercam

RDI is a sub-brand of Evercam. The two share visual DNA — same iris geometry, same Signature Red — but differ in one deliberate detail that carries the brand story:

| Brand | Mark | Meaning |
|---|---|---|
| **Evercam** | Five-facet iris, **all red** | The lens. The camera. The instrument. |
| **RDI** | Five-facet iris, **four ink + one red wedge** | The discipline of focusing on a single frame. The wedge is the active aperture; the four ink facets hold context steady. |

This is a designed inheritance, not an accident. The shared mark says "same family." The colour-balance shift says "same instrument, different practice." When the two appear together, the visual relationship reads instantly.

When the two appear together:

### 13.1 Lockup hierarchy

- In RDI-led contexts (the portal, RDI sales material): RDI lockup primary; small "by Evercam" or "an Evercam discipline" line beneath, in Small/Mono.
- In Evercam-led contexts (Evercam's main site, joint announcements): Evercam lockup primary; RDI appears as a labeled product/discipline area inside the Evercam shell.
- Never side-by-side as equals. One is always primary; the other defers.

### 13.2 Separator

When the two marks appear in the same lockup (RDI + Evercam), they are separated by a 1px vertical rule in `color.neutral.rule-strong`, with 16px of clearspace on each side. Never a slash, never a plus sign.

### 13.3 Color heritage

RDI inherits Evercam's color discipline (dark surfaces, restrained palette) and adds the Signature Red. If Evercam ever needs to inherit *back* from RDI (a joint campaign, a product launch), the Signature Red may travel — but only as an accent under Evercam's typographic system.

A formal Evercam brand book will define the parent-side rules. Until it exists, treat Evercam's existing visual identity (yellow + black) as the parent's territory and avoid using it inside RDI surfaces.

---

## 14. Events

Events are time-bound brand experiences — trade shows, customer briefings, panel appearances, launches, internal kickoffs. They are the most physical surface RDI shows up on, and the easiest to get wrong because the format pressure (tight setups, last-minute changes, vendor handoffs) erodes brand discipline. Design every event back from the brand book, not forward from the vendor's templates.

### 14.1 Booth & stand design

For trade-show booths, modular over custom. A repeatable kit pays for itself across a year of events:

- **Modular wall system** (Octanorm, BeMatrix, or similar): 1m panel modules with magnetic graphic skins. Allows 3×3m, 3×6m, 6×6m configurations without custom builds.
- **Graphic skins:** Navy primary, white secondary, Signature Red accents. Skins printed on tension fabric (low glare, easy to clean, packs flat). Resolution 150 dpi at final size — at viewing distance, that's indistinguishable from 300 dpi and halves file weight.
- **Hero panel:** one wall (3m × 2.4m typical) carries the wordmark large + a single headline. No bullet lists, no feature grids. The booth is the demo — let the conversation carry the detail.
- **Demo station:** a counter or table with a real RDI screen running live evidence. Mono mounted screens preferred over freestanding kiosks; cleaner read.
- **Lighting:** 4000 K (neutral white) overhead, 3000 K (warm) for the meeting corner. Avoid coloured wash lighting — it kills the brand red.

### 14.2 Banners & stands

- **Roll-up banner:** 850 × 2000mm standard. Navy ground, white wordmark top-third, single headline mid-frame, red line + URL bottom-third. Output on 440 gsm blockout PVC; matte finish.
- **Pop-up backdrop:** 3m × 2.25m curved or straight. Tension fabric skin, magnetic SEG frame.
- **A-frame / sandwich board:** for outdoor or hallway placement. 600 × 900mm panels, weather-rated print.
- **Site board (project-specific):** custom dimensions. Dibond + UV print. Treat as wayfinding, not advertising — clear, dated, attributable, like everything else RDI ships.

### 14.3 Step-and-repeat / press wall

For panel discussions, executive briefings, photo opportunities:

- Pattern: the wordmark + the mark, repeated on a grid, with the red wedge offset every third unit so the rhythm is broken (avoid the wallpaper effect).
- Dimensions: 2.4 m wide × 2.4 m tall as a default; 3 m or 4 m wide for larger setups. Always taller than the talking head — 2.4 m clears most speakers; 3 m clears all.
- Material: tension fabric. Never vinyl banner stock for a press wall — it wrinkles on camera and reads cheap.
- Lighting: light the wall from the front at 35–45°. No backlighting (washes out).

### 14.4 Wayfinding & signage

For multi-room events:

- **Welcome / registration:** mark + wordmark + event name in H1. Red line under the event name.
- **Directional signage:** Ink Mono text on white, with simple chevron icons. Floor-mounted (1.5 m post) or wall-mounted at eye level.
- **Room ID:** room number + session name in H3. Mono for the room number, Inter for the name. Red wedge corner accent.
- **Speaker plaques (lower-thirds on stage):** see §9.2.

### 14.5 Badges & lanyards

- **Badge:** 90 × 130mm portrait, double-sided, 600 gsm uncoated card. Mark top-left, attendee name in Inter Bold (24pt), role in Inter Regular (14pt), company in Mono (10pt). Red wedge bottom-right corner.
- **Lanyard:** flat woven polyester, 15mm wide, Navy with a single Mono wordmark in white. Plastic safety breakaway clip. Never branded carabiners.

### 14.6 AV / projection

- **Resolution:** 1920 × 1080 minimum at the event. 3840 × 2160 (4K) for premium venues. Always confirm the projector / LED wall's native resolution before designing.
- **Aspect:** 16:9 default. 16:10 if the venue uses standard projector screens (still common). For LED walls, custom aspects (often closer to 21:9 or 32:9) — design for the exact wall.
- **Slide masters:** the External Pitch Deck (§15) is the master. Variants: title slide (Navy + wordmark + red line under title); content slide (Paper, large H2, red line, short body); demo slide (full-bleed screenshot + Mono caption).
- **Type sizes for projection:** body minimum 24pt at 1080p. Anything smaller is unreadable from row 5.
- **Backup:** every event AV deck has a USB + cloud copy + a presenter's laptop copy. Three failures take you to the speaker reading from index cards — be ready.

### 14.7 Lower-thirds for event capture

When event sessions are filmed or live-streamed:

- Speaker name in H3 (Inter Semibold, 28pt at 1080p), affiliation in Mono (14pt) below.
- A 3px vertical red rail on the left, full height of the lower-third text block.
- Background: 80% opaque Navy or Ink. Never Signature Red — too saturated for video chroma and clashes with the wedge.
- Lower-third sits in the bottom 18% of the frame, left-aligned to a 6% safe margin.

### 14.8 Pre / on / post-event collateral

- **Pre-event:** invitations (digital, 1080 × 1080 social-ready + 1200 × 627 LinkedIn; physical, A6 invite cards on 300 gsm uncoated for VIPs). Agenda one-pagers.
- **On-event:** badges, handouts (A5 folded one-pagers, never tri-fold brochures — too 1990s), business cards.
- **Post-event:** thank-you cards (A6, printed both sides, sent within 5 working days), session summaries (PDF, branded, sent within 10 working days), photo gallery (curated, captioned with timestamps).

### 14.9 Vendor handoff

Every event has a moment when the brand passes through a vendor's hands (printer, fabricator, AV crew). Build a brief that survives that handoff:

- **Brand asset pack:** master SVGs, font files (license-cleared), Pantone numbers + CMYK builds, dimensions diagram, photo of expected outcome.
- **Substitution policy:** if a substrate or paper is unavailable, the vendor must confirm with the brand owner before substituting. Never default to "closest available."
- **Sign-off:** every event ship requires a brand-owner sign-off on the proof before production. No exceptions.

---

## 15. Environment & merchandising

### 15.1 Signage

Office, event, and site signage uses the same system: Navy or Ink ground, white wordmark, red wedge or red line as the only color accent. Materials prefer matte over gloss.

### 15.2 Presentation templates

Two master decks:

- **External pitch deck.** Navy covers, Ink body slides, red line under each H2, mono for numbers. Photography per §8.
- **Internal working deck.** Paper background, lighter weight, more density. Same rules.

Both live alongside the brand book. Slide masters use the type and color tokens. No clip art, no stock icons, no template-y gradients.

### 15.3 Swag

If RDI does swag, it is functional and restrained: site notebooks (uncoated, gridded, mark on the cover), pens (Ink with red wedge clip), tape measures, hard-hat stickers. No t-shirts with the wordmark four times. No tote bags as conference giveaway slop.

---

## 16. Governance

This document is the **single source of truth** for the RDI brand. Changes are proposed against this file and require sign-off from the brand owner:

**Kamel Badji** — Ux / Ui / Brand designer
`kamel.badji@evercam.io`

The CEO (Marco) is consulted on strategic direction but does not own brand-implementation decisions; those rest with Kamel.

### Sister documents

- [`brand-bible.html`](./brand-bible.html) — visual companion to this document. Illustrates every rule with examples, lockups, palette swatches, type specimens, the red-line pattern, iconography, motion storyboards, print mockups, and social mockups.
- [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) — the engineering counterpart. Tokens, CSS variables, component patterns, accessibility, codebase conventions. Maintained by the design-system skill.
- [`design-system.html`](./design-system.html) — visual companion to the design system. Used to review the portal against the spec: tokens with copyable code, live component previews, dark-mode toggle, audit findings with severity, and a page review checklist.
- [`rdi-tokens.tokens.json`](./rdi-tokens.tokens.json) — machine-readable design tokens (Tokens Studio / W3C DTCG).
- [`AUDIT.md`](./AUDIT.md) — current state of the RDI portal against these rules.

### Skills

Two Cowork skills bring this brand into Claude's working context:

- **`rdi-brand`** — loads brand-level rules (identity, voice, iconography, photography, motion, print, social, co-branding). Reads from this file. Triggers on any brand-facing work.
- **`rdi-design-system`** — loads engineering-level rules (tokens, components, accessibility, code conventions). Reads from `DESIGN-SYSTEM.md`. Triggers on UI implementation work.

Both skills read their canonical files directly. There are no copies, no mirrors, no drift. Update this file and the brand skill stays current. Update `DESIGN-SYSTEM.md` and the design-system skill stays current.

---

_End of guidelines · v1.0 · last updated 2026-05-18_
