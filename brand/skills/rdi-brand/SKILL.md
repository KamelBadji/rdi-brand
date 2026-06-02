---
name: rdi-brand
description: |
  The canonical Reality Driven Intelligence (RDI) brand skill — sub-brand of Evercam. This is a complete brand reference covering identity, voice, the mark, color philosophy, the red line pattern, iconography, photography, motion and video, print, social media, co-branding with Evercam, environment and merchandising. Use this skill for any work that shapes how RDI is perceived externally.

  Trigger this skill aggressively. It should fire on phrases like "RDI", "Reality Driven Intelligence", "Evercam", "brand", "brand guidelines", "style guide", "identity", "logo", "wordmark", "palette", "typography", "voice", "tone of voice", "copy", "tagline", "video", "motion", "intro bumper", "title card", "lower-third", "social post", "linkedin cover", "avatar", "favicon", "iconography", "icon set", "photography direction", "imagery", "stock photo", "image library", "print", "business card", "letterhead", "poster", "signage", "swag", "merch", "presentation", "deck", "pitch deck", "trade show", "trade-show booth", "booth design", "event", "exhibition", "step-and-repeat", "press wall", "banner", "roll-up", "AV", "projection", "lanyard", "badge", "Pantone", "CMYK", "spot color", "paper stock", "foil stamping", "deboss", "saddle stitch", "perfect bound", "PDF/X", "co-branding", "Evercam lockup", or any time work touches files inside D:\Evercam rdi\brand\ or produces marketing-facing collateral.

  Also trigger when the user doesn't name the brand but the task is brand-shaped: writing marketing copy, generating or selecting an image, designing a poster, building a slide deck about RDI, choosing colors, picking a typeface, directing photography, writing a script, producing a video bumper, designing a trade-show booth, picking a paper stock, advising on print finishes, briefing a vendor on a fabrication job, choosing event AV resolution, designing badges or lanyards, sourcing event signage. Skipping the skill on these tasks produces work that misses the brand's identity rules.

  This skill operates at **pro-designer level** across its full surface area — identity, voice, mark, color, type, the red line, iconography (dot indicator), photography (real-imagery-only, no stock, no AI-generated), motion and video, print (with substantive guidance on paper stocks, binding, finishes, color management, Pantone matching, file delivery formats), events (booths, banners, press walls, AV, lower-thirds, vendor handoff), social, co-branding, and environment / merchandising. When the user asks for advice in any of these areas, give specific recommendations (named stocks, named print processes, exact dimensions), not generic options.

  This skill is paired with `rdi-design-system`, which handles the engineering-level implementation (tokens, CSS, components, accessibility). Both can — and often should — be loaded together for portal work. This skill owns *what the brand is and how it shows up in the world*. The design-system skill owns *how the brand is implemented in code*.

  Don't trigger for generic design questions unrelated to RDI or Evercam (e.g. picking a font for someone's personal blog, or general questions about Tailwind utilities that don't touch the portal).
---

# RDI Brand Skill

This skill loads the canonical Reality Driven Intelligence brand into context. Use it for every visual, verbal, or strategic decision touching the brand — across all surfaces, not just the portal.

**Brand owner:** Kamel Badji, Ux/Ui/Brand designer (`kamel.badji@evercam.io`). Brand sign-off and exception requests go to Kamel.

**Canonical source of truth:** `D:\Evercam rdi\brand\GUIDELINES.md` — the full brand book. Read it the first time you encounter an RDI task in a session. It is the single source of truth. There are no copies, no mirrors. If you update the brand, you update that file.

**Visual companion:** `D:\Evercam rdi\brand\brand-bible.html` — an illustrated walkthrough of every rule in the brand book. Open it in a browser when you want to see lockups, palette swatches, type specimens, the red-line pattern in context, iconography examples, motion storyboards, print mockups, and social mockups. Use it as the presentation-ready reference for stakeholders.

**Companion skill:** `rdi-design-system` handles engineering implementation (tokens, CSS variables, components, accessibility, code conventions). When the task is "implement this in the portal," load that skill alongside this one. When the task is "design / write / direct / produce something for the brand," this skill is enough.

If the project folder isn't mounted in the current session, the rules summarized below are sufficient for most brand work. For anything bigger than a one-pager — a campaign, a video, a print run — surface uncertainty to Kamel before shipping.

---

## The non-negotiables

These rules are house policy. They apply across every brand surface — web, print, video, social, signage, merchandise, internal slides, anywhere RDI shows up.

### 1. Red is a fill, not a text color

This is the most-broken rule on the brand and the one most likely to come back as a correction. **Never set a red color on text.** No red headings, no red eyebrows, no red links, no red captions, no red alert messages, no red slide titles, no red poster type, no red lower-thirds.

Red appears as: solid fills (CTA buttons, the wedge in the logo, badge backgrounds, the red facet of the mark), borders and rules (see "the red line" below), icon fills in non-text contexts, and brand accents on charts and dividers. That's the entire surface area for red.

When you want to emphasize text, the answer is weight, scale, or position — not color. When you want to signal an error state, the answer is a red border + Red Soft background fill with **Ink-color text inside**.

The only exception is an explicit campaign or editorial moment that Kamel has signed off on. The default is don't.

### 2a. Restraint — one red line per page

The red line is a *singular* gesture. Its power comes from being one on the surface — Principle #4 says so explicitly. **One red line per page is the working maximum.** A page's H2 with its red rule below is usually the red moment for that page; don't add a vertical rail to every item in a list below it. Four rails on a "Restraint multiplies emphasis" page is a self-contradiction.

Concretely: when a list of items (principles, governance cards, partner logos, team bios) might each "want" a rail, use big numbers, bold titles, horizontal dividers, whitespace — any structural cue that isn't red. Mockups of independent surfaces inside the bible (business cards, social posts, lockup cards) are exempt: those are previews of separate surfaces. The §06 Red Line catalog page itself is exempt — it shows the variants side-by-side.

Before adding a second red rail to a page, ask: is the H2 line already there? Then a rail multiplies. Find another cue.

### 2b. The red line — three configurations, no others

The "red line" is a thin red rectangle (usually 2–3px). It is **the only way red touches the type system**. It appears in exactly three configurations:

- **Horizontal under main titles.** A 64px × 3px line (or 24mm × 1mm in print) sits directly below the section's H1/H2 title, 16–20px gap, left-aligned to the title. The eyebrow above is plain uppercase Ink text — the red line lives under the title, **never beside the eyebrow**. On dark surfaces the line color shifts to `#E5363D`.

- **Vertical on the left of a title container.** A 3px rail attached to the container element that holds a title and its immediately-related body — not to the title element alone. The rail spans the full height of that container, anchored top-left, with 18–21px padding to the text. The body anchors to the rail by virtue of being inside the same container; the title doesn't "own" the rail any more than the body does. **Used on:** pillars, sidebar callouts, governance cards, principle items, pull-quotes, active vertical-nav items. **Not used on:** running paragraphs without an associated title, four-sided framed blocks, section headings that have no related body. For nested layouts where a leading icon/number precedes the content (e.g. "01 — title — body"), the rail belongs to the content block to the right of the icon, not the row as a whole. One-sided only — never bracketed. When animated on reveal, the rail draws **top-to-bottom** in 400–600ms ease-out soft — mirroring the horizontal line's left-to-right motion. Both follow reading direction.

- **Hover and active states.** A 2px line appears or thickens on interactive elements. **Inline links: no default underline.** On hover a 2px red line ~2.5ch wide (3 letters) animates left-to-right under the link with ease-out soft 200ms — the red-line-under-titles pattern at link scale, never a full-width underline. Nav tabs: 2px red rail slides in from the left on hover and locks when active. Ghost buttons: bottom border transitions from transparent to 2px red. 120ms for UI; 200ms for the link.

In motion graphics, the red line **draws on** from left-to-right over 400–600ms with an ease-out curve. It does not pulse, blink, fade in/out, or otherwise call attention to itself beyond the initial draw.

Never a frame, never decorative, never mid-body-copy, never dashed or gradient.

### 3. Error red ≠ Brand red

Brand Signature Red is `#C3161C`. Error state red is `#9A1014` — darker, sharper. Held distinct so a primary CTA and a field error never collide visually on the same surface.

### 4. Bright red on dark backgrounds = inaccessible

Signature Red on Navy has only 3.1:1 contrast — below WCAG AA. For red fills or icons on dark surfaces, use the lightened `#E5363D`. Red text on dark is already forbidden by rule 1.

### 5. The mark is one identity in two configurations

The wordmark and the mark are not two logos. They are one identity. Use the full lockup or the mark-only, never the wordmark alone (except for the favicon).

Master files live at `D:\Evercam rdi\brand\assets\rdi-logo.svg` and `D:\Evercam rdi\brand\assets\rdi-favicon.svg`. Always reference these. Never re-trace, re-color outside the four authorized lockups, stretch, skew, or apply effects.

### 6. Logo audit — actively flag misuse

This skill must surface logo-usage errors whenever it runs. Every brand-related deliverable gets checked against this list:

- **Placeholder marks.** The RDI portal currently ships `src/components/Logo/Logo.tsx` rendering the **Payload CMS logo** (loaded from `raw.githubusercontent.com/payloadcms`). Any code path still pointing at the Payload mark is a critical bug. Same applies to the `public/favicon.svg`, which is currently a chevron from the original template.
- **Fabricated wordmarks.** Never invent a brand mark in CSS or HTML — no "ever[c]am" text approximations, no recreations of partner logos from memory, no AI-generated wordmarks. If the authentic master SVG isn't available, render a clearly-labeled placeholder ("Evercam logo · awaiting master SVG") and ask for the file. The brand bible has a worked example of this.
- **Authentic Evercam logo.** When co-branding with Evercam, the parent logo must come from the Evercam master file (not yet checked into this repo). Until the SVG is uploaded, the co-branding mock renders a placeholder rather than a fake.
- **Non-master sources.** Logos pulled from screenshots, traced from images, or re-exported from secondary editors are not acceptable. The master SVG is the only source.

### 7. Logo colourway — background dictates the variant

The default logo is **always black + red** — the brand colours, on any light surface. The colourway changes **only** on dark or Signature Red backgrounds, and the background dictates which variant ships. Never pick a colourway by taste.

| Background | Wordmark | Mark facets | Wedge |
|---|---|---|---|
| Paper / any light surface | Ink black | 4 × Ink | Red |
| Ink `#231F20` / Navy `#0C1322` / any dark surface | White | 4 × White | **Red (kept)** |
| Signature Red `#C3161C` | **Ink black (kept)** | 4 × Ink | **White (flipped)** |

The two darktheme variants:

- **"White + red"** — wordmark white, wedge stays red. Used on Ink and Navy. Red on dark reads fine.
- **"Black + white"** — wordmark stays ink, wedge flips white. Used on Signature Red. Red wedge on red bg would vanish; the wordmark stays ink so the inversion reads as deliberate.

**Implementation:** the master SVG drives colour through CSS custom properties — `--rdi-logo-ink` and `--rdi-logo-red`. Default values are the brand colours. Override one or both on the parent container to flip the lockup. Class-based selectors do not cross the SVG `<use>` shadow tree; only custom properties do. If a deliverable's logo renders all-ink-no-red (wedge missing on a light surface) or only-the-wedge-on-dark (wordmark invisible), the colourway driver is broken — fix the variables.

**Audit step:** verify every logo placement against the background→colourway table. A logo without the correct colourway is a brand error, not a styling preference.

---

## Color tokens — summary

| Token | Hex | Role |
|---|---|---|
| `color.brand.red` | `#C3161C` | Signature — fills only |
| `color.brand.red-strong` | `#A0121A` | Hover / pressed |
| `color.brand.red-soft` | `#FBEBEC` | Tinted backgrounds |
| `color.brand.ink` | `#231F20` | Primary text |
| `color.brand.navy` | `#0C1322` | Dark backgrounds, covers |
| `color.brand.black` | `#000000` | High-emphasis dark |
| `color.neutral.paper` | `#FFFFFF` | Primary background |
| `color.neutral.paper-soft` | `#F7F7F5` | Subdued sections |
| `color.neutral.muted` | `#6B7280` | Secondary text |
| `color.signal.success` | `#1F8A6D` | Success state |
| `color.signal.warning` | `#C77A0B` | Warning state |
| `color.signal.error` | `#9A1014` | Error — distinct from brand red |
| `color.dark.red` | `#E5363D` | Red on dark surfaces |

For print, see `GUIDELINES.md §4.3` (CMYK builds and Pantone match). Spot color = Pantone 1797 C.

---

## Typography — summary

**Inter** for editorial type. **JetBrains Mono** for numbers, dates, coordinates, IDs.

| Style | Weight | Size | Line | Letter |
|---|---|---|---|---|
| Display | 800 | 96px | 1.0 | -0.04em |
| H1 | 700 | 48px | 1.15 | -0.025em |
| H2 | 600 | 30px | 1.15 | -0.02em |
| H3 | 600 | 22px | 1.25 | -0.01em |
| Lead | 400 | 20px | 1.55 | 0 |
| Body | 400 | 16px | 1.65 | 0 |
| Eyebrow | 700 | 11px | 1.0 | 0.08em uppercase |
| Mono | 400 | 13px | 1.45 | 0 |

Numbers always go in Mono. A figure without Mono treatment is a signal that the discipline broke down.

Print sizes (pt) and print pairings in `GUIDELINES.md §5.3` and §11.

---

## Iconography — summary

- 24×24 grid, 2px keylines, square caps, miter joins.
- Ink by default; red only as the dot indicator on state-bearing icons (active, focused, in-progress). The dot is a 6–8px solid circle in the upper-right quadrant — not a triangle. Triangles belong to the logo and larger decorative graphics; at icon scale a dot reads more cleanly.
- No emojis as functional icons, no multi-color, no filled bubbles.
- Library: `lucide-react` for utility; a bespoke RDI icon set for marketing surfaces is on the roadmap.

Full detail: `GUIDELINES.md §7`.

---

## Photography & imagery — summary

Real construction sites, real cameras, real conditions. Documentary tone. Natural, slightly desaturated color. No stock, no AI-generated, no glossy drone shots, no hard-hat-and-tablet clichés. The red wedge may overlay a photograph to indicate the active region of interest — the only red allowed on a photograph. AI image generation is forbidden brand-wide; the brand thesis is real reality.

**Sourcing:** first-party only — Evercam streams, RDI captures, commissioned shoots with full rights and releases. Stock libraries (Shutterstock, Adobe Stock, Unsplash) are off-limits for shipped brand work.

**File formats:** JPEG sRGB for photography (web quality 85–90; print quality 95–100); SVG for marks and diagrams; PNG for graphics with transparency; WebP/AVIF as `<picture>` fallback. Vector first whenever possible. Web 1× at display size minimum, 2× for Retina. Print 300 dpi at final size, 600 dpi for fine detail.

**Annotation:** timestamp + source in a 60% opaque black rounded rectangle with white Mono text, opposite corner from the red wedge overlay. Type overlays in Inter only. No watermarks.

**Asset library:** RDI portal photography lives in `D:\Evercam rdi\public\rdi\images\`. Event and print collateral mirrors under `brand/assets/photography/<campaign>/`. Every shoot ships with contact sheet + selects. Real-image usage in the brand bible and skill: the bible already pulls from `public/rdi/images/`; for new work, use the project's own image library — never search the web for "construction site" stock as a shortcut.

Full detail: `GUIDELINES.md §8`.

---

## Motion & video — pro-designer summary

When directing motion work for RDI, advise at frame-and-codec level — not "use a fade." Generic motion direction yields generic motion.

**Animation principles in scope:** anticipation (brief, ≤120ms pre-state), follow-through (quiet, never overshoot), ease (non-negotiable), staging (one element holds the eye per beat). Banned: squash-and-stretch, bounce, elastic, secondary action, arcing paths. RDI moves like a measurement tool clicking into place.

**Easing:** `cubic-bezier(0.2, 0.6, 0.2, 1)` ease-out soft for brand motion (bumpers, red-line draw-on); `cubic-bezier(0.4, 0, 0.4, 1)` ease-in-out for UI; `cubic-bezier(0.4, 0, 1, 0.4)` ease-in for elements leaving. Never elastic, bounce, or back.

**Timing scale:** 120–200ms UI micro-interactions; 400–600ms brand motion (red-line draw-on, type-in); 1.5–2.0s full bumper; 2–3s title-card hold (~2× reading time).

**Brand bumper open (1.6s total):** Navy fades up 0–200ms → mark facet build (4 ink facets sequentially 200–500ms) → red facet snap (500–560ms, scale-from-95%) → wordmark type-in left-to-right (700–1020ms) → 64×3px red line draws under wordmark (1000–1400ms) → hold 200ms → cut to content. Reduced-motion fallback: final frame composited, held 1.2s.

**Lower-thirds:** H3 Inter Semibold 28pt name + JetBrains Mono 14pt affiliation, 80% Navy background (never Signature Red — saturates on chroma), 3px vertical red rail full height of the lower-third unit, animation in: rail slides up 300ms → name fade 200ms → affiliation fade 200ms.

**Captions are mandatory.** SRT/VTT files alongside delivery (never burned-in unless platform-required like Instagram Reels). Inter Regular white on 70% black pill, 22pt minimum at 1080p. Captioned verbatim — never bowdlerised.

**Audio loudness:** −16 LUFS integrated for YouTube/web, −14 LUFS for social platforms that re-normalise. True peak max −1 dBTP. Music ducks 8–10 dB under dialog (200ms attack / 600ms release). No stings. No corporate-energy beats. Library: Musicbed (curated channels), Marmoset, or commissioned bespoke.

**Master codec:** Apple ProRes 422 HQ (most), ProRes 4444 (bumpers with alpha), ProRes 422 LT (screen captures). **Delivery codec:** H.264 high profile (universal), H.265 (modern web). AV1 too new — re-evaluate in 12 months.

**Resolution & frame rate per platform:** long-form 3840×2160 master / 1920×1080 delivery, 24p cinematic or 30p procedural; social vertical 1080×1920 30p; social square 1080×1080 30p; screen capture 1920×1080 60p; bumper master 3840×2160 60p.

**Colour management:** master in Rec. 709 / Gamma 2.4, deliver as sRGB. HDR (P3/Rec. 2020) deferred until 30%+ of viewers have HDR delivery — re-evaluate annually. No signature LUT; match the Photography §8.3 treatment.

**File naming:** `RDI_<title-slug>_<aspect>_<date>.mp4`. Masters archived to `brand/assets/motion/masters/`.

Full detail: `GUIDELINES.md §9`.

## Social media — pro-designer summary

Social is about representing the brand accurately to strangers, not chasing algorithm engagement.

**Cadence:** LinkedIn 3/week (Mon/Wed/Fri, avoid weekends); X 1/weekday; YouTube 1 long-form/month; Instagram optional. Plan a quarter ahead; 70% planned, 30% reactive.

**Archetype rotation:** Observation (timestamped frame + one-line caption + mono attribution) → Concept (type-on-Navy card defining one RDI term) → Workflow (Ink line-art diagram on Paper Soft). Strict 1-1-1 cadence — never two of the same archetype back-to-back.

**Copy:** sentence case (not Title Case). Numbers in Mono where platform supports it. No emoji. No "Click here" / "Learn more" CTAs. Sign observation posts with `cam-XX · YYYY-MM-DD · site-code`.

**LinkedIn specifics:** primary platform. Document carousels (PDF posts, 12–24 pages at 1080×1080) are the long-form workhorse — use for methodology explainers, case studies, annual reports. Native video 1080×1080 or 1080×1920, 30s–3min, captions burned in (feed is silent by default). Articles rare. Polls sparingly (2/quarter max). Company page is canonical; employees amplify.

**X specifics:** single posts, not threads. If it needs a thread, it needs a LinkedIn carousel. Native image always attached.

**Video on social:** burned-in captions for silent autoplay (Inter Bold white on 70% black pill, lower third). First 3 seconds establish brand mark + headline. Length: 8–15s feed, 15–30s Reels, 1–3min long-form. Abbreviated 0.6s bumper for short-form; full 1.6s for long-form.

**Stories:** used sparingly — only for live events with consent. Same brand rules apply.

**Engagement:** replies come from named humans, not "the brand team." No bots. Negative feedback: acknowledge within 4h publicly, follow up in DM, never argue in thread.

**Crisis comms:** acknowledge within 4 hours even if the response is "we're looking into this." First response is the named comms lead. Substance over speed — holding statements are fine. Post the resolution publicly even if criticism was private. Internal review afterwards.

**Measurement:** don't optimise for impressions. Optimise for profile-visit → portal-clickthrough and direct outreach (DM/email). One serious customer conversation per month from a single post justifies the post. Five reposts from the right ten leaders > 50k impressions from algorithm noise.

**Avatar:** mark only on Signature Red. **Header:** Navy + white wordmark + red wedge. Same image across every platform.

**Hashtags:** three maximum, specific. One specific tag beats three vague ones.

Full detail: `GUIDELINES.md §12`.

---

## Voice — summary

- Observation first, claim second.
- Attribute and date everything. A figure without a timestamp and a source is not a figure.
- Verbs over adjectives.
- No "AI" alone (pair with what the AI does). No "powerful," "smart," "robust," "revolutionary."
- Short sentences. Vary rhythm. Closer to a logbook than to a brochure.

Full detail: `GUIDELINES.md §10`.

---

## Print — pro-designer summary

When advising on RDI print work, behave like a senior production designer — recommend specifics, not generic options.

**File delivery:** PDF/X-1a for offset (older, universally accepted, flattened transparency); PDF/X-4 for digital and modern offset (live transparency, ICC profiles). Fonts embedded, raster at 300 dpi minimum at final size, CMYK or specified spot. Press marks at 6pt offset.

**Recommended stocks:**
- Letterhead / reports: Mohawk Superfine Eggshell 120 gsm.
- Covers / business cards: GF Smith Colorplan 270–350 gsm (Bright White default, Ebony for Reverse Ink).
- Premium / campaign covers: Crane Lettra 220–300 gsm cotton stock (perfect for letterpress and deboss).
- Outdoor / site boards: 4mm Foamex or 3mm Dibond, UV print, matte laminate.
- Editorial inserts: Munken Pure or Lynx 100–150 gsm.

**Binding:** saddle stitch up to 48pp; perfect bound (PUR for longevity) for reports; Smyth-sewn for publications meant to last; Wire-O for field manuals only.

**Finishes:** matte lamination default; soft-touch sparingly; spot UV on the mark only (never both wedge and wordmark); matte red foil (Kurz Luxor matte red) for premium runs of the wedge; blind deboss for wordmark on uncoated covers; Ink edge-painting for white-stock business cards.

**Spot colour:** specify **Pantone 1797 C** when Signature Red is critical (covers, primary CTAs). CMYK builds shift across stocks; spot stays consistent. Pantone 1797 U for uncoated equivalent.

**Proofing:** soft proof for layout, digital wet proof for sign-off on most runs, contract proof on actual stock for any run over 1000 units or any Pantone-spec job. Attend the press check for high-stakes runs.

**Color management:** Coated Fogra39 for coated work; Uncoated Fogra47 for uncoated. Confirm with the press before delivery.

**Default formats:** Business card 85×55mm, 300 gsm uncoated. Letterhead A4, 120 gsm uncoated. Report cover A4/Letter, 270+ gsm. Tradeshow poster A1/A0, 200 gsm satin. Site board custom, 4mm Foamex.

Full detail: `GUIDELINES.md §11`.

## Events — pro-designer summary

When working on RDI events (trade shows, briefings, panels, launches, kickoffs), the brand skill should advise on:

**Booth & stand:** modular wall system (Octanorm, BeMatrix) over custom builds. Tension-fabric graphic skins. Navy primary, Signature Red accents. Hero panel carries the wordmark large + one headline — never feature grids. Demo station with a real live RDI screen; 4000 K overhead lighting, 3000 K for meeting corner.

**Banners & stands:** roll-up 850×2000mm on 440 gsm blockout PVC matte. Pop-up backdrop 3m×2.25m tension fabric on SEG frame. A-frame 600×900mm weather-rated.

**Press wall / step-and-repeat:** wordmark + mark on a grid, red wedge offset every third unit to break the wallpaper rhythm. 2.4m wide × 2.4m tall default; 3m for larger setups. Always tension fabric, never vinyl banner stock — vinyl wrinkles on camera.

**Wayfinding:** Ink Mono text on white, simple chevron icons, floor-mounted (1.5m post) or eye-level wall. Room IDs with Mono room number + Inter Bold session name.

**Badges & lanyards:** 90×130mm portrait double-sided, 600 gsm uncoated card. Mark top-left, name in Inter Bold 24pt, role Inter Regular 14pt, company in Mono 10pt. Red wedge corner. Lanyard flat woven polyester 15mm Navy.

**AV & projection:** 1920×1080 minimum, 3840×2160 for premium venues. Always confirm the projector/LED wall native resolution before designing. Body type minimum 24pt at 1080p. Title slides on Navy with red line under title. Backup deck on USB + cloud + presenter laptop — three copies, always.

**Lower-thirds on event capture:** speaker name H3 Inter Semibold 28pt at 1080p, affiliation in Mono 14pt below. 3px vertical red rail on the left, full height of the lower-third block. 80% opaque Navy or Ink background. Never Signature Red — too saturated for video chroma.

**Pre / on / post-event:** invitations (digital 1080×1080 + 1200×627 LinkedIn; physical A6 on 300 gsm uncoated for VIPs); handouts A5 folded (never tri-fold brochures); thank-you A6 within 5 working days; session summaries within 10 working days.

**Vendor handoff:** every event ship through a vendor (printer, fabricator, AV crew) requires a brand asset pack (master SVGs, fonts, Pantone numbers, CMYK builds, dimensions diagram, photo of expected outcome), an explicit no-substitution policy, and a brand-owner sign-off on proof before production.

Full detail: `GUIDELINES.md §14`.

## Environment & merchandising — summary

- **Environment:** Navy or Ink ground, matte finishes, red wedge or red line as the only colour accent.
- **Presentation masters:** External pitch deck (Navy covers, Ink body, red line under H2s, mono numbers). Internal working deck (Paper background, lighter weight, more density).
- **Swag:** functional and restrained — site notebooks (gridded, mark on cover), Ink pens with red wedge clip, tape measures, hard-hat stickers. Never branded tote bags or wordmark-heavy t-shirts.

Full detail: `GUIDELINES.md §15`.

---

## Co-branding with Evercam

RDI is a sub-brand. When RDI and Evercam appear together:

- RDI-led contexts: RDI lockup primary, "an Evercam discipline" line beneath in Small/Mono.
- Evercam-led contexts: Evercam lockup primary, RDI appears as a labeled product/discipline inside the Evercam shell.
- Never side-by-side as equals.
- Separator (when both marks appear in one lockup): 1px vertical rule, 16px clearspace each side. Never a slash, never a plus.

Evercam's own brand book will define parent-side rules. Until it exists, treat Evercam's existing yellow + black identity as the parent's territory and avoid using it inside RDI surfaces.

---

## Quick checks before shipping

Run this pass on every brand deliverable — page, deck, video, poster, social post, slide:

1. Is any text colored red? **If yes, fix it.**
2. Does every section main title have a 64×3px red rule below it (or 24×1mm in print)?
3. Are eyebrows plain uppercase Ink text (no leading bar, no red color)?
4. **No duplicate uppercase titles.** Is the page's section name shown only once at the top (the light-grey folio in mono), and not repeated as an eyebrow above the H2? Two uppercase labels saying the same thing is redundant — keep the first one.
5. **Restraint — count the red.** Count the red marks on the surface (H2 rules, vertical rails, accent lines). Aim for one. If a list of items each has a rail, that's a multiplication trap — remove the rails from the items, keep the H2 line. Mockups of independent surfaces inside the bible don't count toward this total; the catalog page in §06 doesn't either.
6. **Logo audit.** Is every logo the authentic master SVG, not a placeholder, not a fabricated text approximation, not the Payload CMS template logo, not a re-traced version?
7. **Logo colourway audit.** Walk every logo placement and check the background → colourway match:
   - Light surface → ink + red wedge (default; if wedge is missing, the driver is broken)
   - Ink / Navy / any dark surface → white wordmark + red wedge
   - Signature Red → ink wordmark + white wedge (never red on red)
   If you see a logo all-ink-no-wedge on a light surface, or only the wedge showing on a dark surface, that's the SVG colour driver failing — usually because someone tried class-based selectors instead of CSS custom properties.
8. **Co-branding audit.** When Evercam appears: is it the authentic Evercam master SVG, or a placeholder marked "awaiting master SVG"? Never a fake "evercam" text in CSS.
9. Are numbers in Mono?
10. Is there a red line somewhere qualifying a title or marking a state? If not, the page is missing its brand cue.
11. On dark surfaces, is any red used for text? (Forbidden — use `color.dark.red` for fills/icons only.)
12. Photography: real site, not stock or AI?
13. Voice: observation first, attributed, dated?
14. Co-branding: clear which brand is primary, with proper separator?

---

## Updating the brand

The canonical source of truth is `D:\Evercam rdi\brand\GUIDELINES.md` — **one file, one location, no copies**. When the brand evolves:

1. Update `D:\Evercam rdi\brand\GUIDELINES.md` first.
2. Update `D:\Evercam rdi\brand\rdi-tokens.tokens.json` if the change touches numeric values (palette, sizes, spacing).
3. If a non-negotiable changed or a new rule emerged, update the summary in this SKILL.md so the in-context summary matches the canonical file. Otherwise no action is needed — Claude reads the canonical file directly.
4. If the change affects implementation (e.g. a new component pattern, a new token), notify the design-system skill maintainer so `DESIGN-SYSTEM.md` follows.

Exception requests on any of the non-negotiables go to Kamel before the deliverable ships.
