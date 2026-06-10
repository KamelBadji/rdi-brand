# RDI Portal — Brand & Style Audit (Draft v0.3)

_Date: 2026-05-18 · Author: Claude (Cowork) · Status: Draft for review_
_Brand owner: Kamel Badji, Ux/Ui/Brand designer (kamel.badji@evercam.io)_

This is the first-pass audit of the RDI portal at `D:\Evercam rdi`, undertaken alongside drafting the visual identity. The canonical companions are now `GUIDELINES.md` + `brand-bible.html` (brand) and `DESIGN-SYSTEM.md` + `design-system.html` (engineering). The earlier `style-tile.html` has been retired.

It separates **what's already there**, **what needs fixing**, and **what to add** before the new identity ships.

---

## 1. Stack snapshot

| Layer | What's there |
|---|---|
| Framework | Next.js **16.2.3** (App Router) |
| CMS | Payload CMS **3.83.0** (Postgres + SQLite adapters) |
| Styling | Tailwind CSS **4.1.18** (CSS-first, `@theme`/CSS variables) |
| UI primitives | shadcn-style components in `src/components/ui/` (button, card, input, label, checkbox, select) |
| Fonts | **Geist Sans + Geist Mono** (`geist@1.3.0`) — wired via `--font-sans`/`--font-mono` in `globals.css` |
| Component scope | `src/components/rdi/` holds the bespoke RDI components (InstitutionalPage, ROICalculator, SitePlanner, RDIInfographics, HomepageNavigation, etc.) |
| Routes | 24 frontend pages including: `manifesto`, `methodology`, `maturity-model`, `readiness`, `stewardship`, `what-is-rdi`, `rdi-vs-cameras-ai-dashboards`, `workflows`, `use-cases`, `roi`, `plan`, `learn`, `knowledge-base`, `glossary`, `resources`, `get-a-quote`, `posts`, `search` |

---

## 2. What's already correct (keep)

The portal **already has an RDI token namespace** baked into `src/app/(frontend)/globals.css`:

```
--rdi-ink, --rdi-muted, --rdi-soft,
--rdi-accent, --rdi-accent-strong, --rdi-accent-soft,
--rdi-paper, --rdi-rule, --rdi-rule-strong
```

These tokens are used **472 times across 35 files** (every public page + every bespoke RDI component). This is excellent architecturally: swapping the values in `globals.css` will cascade across the entire portal — no per-component edits needed.

The existing structure also defines proper light/dark variants for every token, and the Tailwind 4 `@theme inline` block maps `--color-rdi-*` to `--rdi-*` so utilities like `bg-rdi-paper`, `text-rdi-ink`, `border-rdi-rule` already work.

**Keep the token names. Change only the values.**

---

## 3. Inconsistencies and bugs to fix

### 3.1 ❗ Logo is wrong (critical)

`src/components/Logo/Logo.tsx` currently renders the **Payload CMS placeholder logo** from a GitHub raw URL:

```tsx
src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
alt="Payload Logo"
```

The RDI wordmark you uploaded (`rdi-logo.svg`) and favicon (`favicon.svg`) are not used anywhere in the codebase. This needs to be replaced with a local `<svg>` or `next/image` reference to the uploaded asset before any brand work matters.

### 3.2 Font mismatch: Figma uses Inter, codebase uses Geist

The Figma brand draft declares `Inter Bold 96px` (Title) and `Inter Regular 36px` (Body 1). The portal ships **Geist Sans** (`geist@1.3.0` in `package.json`, wired via `--font-geist-sans` in `globals.css`).

These are not interchangeable — Geist is a Vercel-house geometric sans with looser tracking, Inter is more compact and editorial. **Decision needed:**

- **Option A (recommended):** Switch portal to Inter. Replace `geist` with `next/font/google → Inter`; keep Geist Mono or swap to JetBrains Mono. This matches the Figma source of truth.
- **Option B:** Update the Figma file to use Geist. Cleaner if you prefer the current portal feel and treat Figma as catching up to code.

The tokens JSON in this folder assumes Option A.

### 3.3 Error color collides with Signature Red

In current `globals.css`:

```
--error: oklch(75% 0.15 25deg);  /* a light red */
--rdi-accent: oklch(44% 0.14 22deg);  /* darker red, used for CTAs */
```

In the new identity, **Signature Red (#C3161C)** is used for primary CTAs *and* error states. On forms that combine a CTA + field error, that's a collision.

Recommendation in the tokens JSON: shift `signal.error` to **#9A1014** (a darker, sharper red) so it reads distinctly from the brand accent.

### 3.4 The current accent is duller than the brand

The portal's `--rdi-accent` resolves to roughly `#9A2A21` (warm dark red) — close but visibly browner than the brand red. The new identity locks the accent to **#C3161C** (the actual logo red), which is brighter and more saturated.

This change is visible. Expect every CTA, every `border-rdi-accent`, every "Get a quote" button to shift.

### 3.5 Mixed font sourcing

`globals.css` references `--font-geist-sans` but `package.json` only declares the `geist` package — the Next.js font loader integration isn't visible in the codebase scan. Need to confirm `app/layout.tsx` actually wires it via `next/font` or via the geist package's React component. (Not a blocker, but worth checking before any font swap.)

---

## 4. What's missing (add as part of the brand pass)

1. **Real `<Logo />` component** rendering the uploaded `rdi-logo.svg` (and a mark-only variant for the favicon / mobile header). Should live in `src/components/Logo/Logo.tsx` and export both `<Logo />` and `<LogoMark />`.

2. **Favicon wired up.** The uploaded `favicon.svg` should be placed in `public/` and referenced from `app/(frontend)/layout.tsx` via Next.js metadata.

3. **Brand reference docs.** This `brand/` folder. Style tile is the visual reference; the tokens JSON is the machine-readable source of truth; this audit is the human-readable rationale.

4. **State color palette.** Current `--success`/`--warning`/`--error` are present but never referenced by name in `src/components/rdi/*`. The new tokens propose explicit `success / success-soft / warning / warning-soft / error / error-soft` pairs so components like alerts have a backing color.

5. **Dark mode color review.** `globals.css` already has `[data-theme='dark']` overrides for every token. They were chosen pre-rebrand and need to be re-tuned against the new palette (especially Signature Red, which should *lighten* on dark surfaces, not darken — see the `color.dark.red` token).

---

## 5. Proposed sequence

```
1. ☑ Style tile drafted (brand/style-tile.html)
2. ☑ Tokens JSON drafted (brand/rdi-tokens.tokens.json)
3. ☑ This audit drafted (brand/AUDIT.md)
─── checkpoint: user review ───
4. ☐ Fix Logo.tsx to use the uploaded SVG (5-min change, blocks everything else)
5. ☐ Decide font direction (Inter swap vs keep Geist)
6. ☐ Update globals.css --rdi-* values to match the new tokens
7. ☐ Re-tune dark-mode --rdi-* values
8. ☐ Visual QA pass across the 24 frontend routes
9. ☐ Import tokens.json into Figma via Tokens Studio plugin so the design file and the codebase share one source of truth
```

---

## 6. Open questions for you

1. **Inter or Geist?** (§3.2)
2. **Should Error red be distinct from brand red?** Recommend yes, **#9A1014**. (§3.3)
3. **Are the colors I locked correct?** Specifically Background Navy (`#0C1322`) — I sampled this from the cover band in the screenshot but couldn't pull it cleanly from Figma. If you have the exact hex, please share it.
4. **Does "Aperture" mean what I drafted?** I read it from the screenshot but couldn't extract the verbatim copy. If the wording I wrote in the style tile diverges from your Figma, paste the actual text and I'll replace.
5. **Logo clearspace rule.** I proposed "one facet height." If your Figma defines a different rule (e.g. half the cap height of the R), share it.

---

---

## 6.1 House rules (in effect)

1. **Red is a fill, not a text color.** Global brand rule. Never set `color: red`/`color: var(--rdi-red)`/`color: var(--rdi-accent)` on text — headings, body, eyebrows, links, captions, alert messages all stay Ink (or white on dark). Red appears only as:
   - A background fill (primary CTA, badge dot, the wedge in the logo)
   - A border or rule (the 64×3px line under section main titles; left-border on pillars and pull-quotes; bottom rule under the cover)
   - An icon fill in non-text contexts (the red facet of the mark, etc.)
   Error states use a red border + Red Soft background with **Ink-color text** inside — never red text.

2. **The red line under main titles.** A 64px × 3px red rule sits directly below every section's H1/H2 title (18px gap, left-aligned to the title baseline). The eyebrow above is plain uppercase Ink text — the rule lives under the title, **not next to the eyebrow**. On dark surfaces (Navy, Ink) the rule shifts to the lightened red `#E5363D` for contrast.

3. **Error red ≠ brand red.** `signal.error` is `#9A1014`, distinct from Signature `#C3161C`, so error borders/icons don't collide visually with primary CTAs on the same surface.

4. **Red on dark.** Bright Signature Red on Navy = 3.1:1 contrast. Below WCAG AA. Use the lightened `color.dark.red` (`#E5363D`) for any red mark on dark surfaces, and even then only for fills/rules/icons, never text.

---

## 7. Contrast verification (WCAG 2.1)

Calculated ratios for the key token pairings in the proposed palette:

| Foreground | Background | Ratio | AA normal (≥4.5) | AAA normal (≥7) | Notes |
|---|---|---:|:-:|:-:|---|
| Ink `#231F20` | Paper `#FFFFFF` | 16.3:1 | ✓ | ✓ | Body, headlines |
| Muted `#6B7280` | Paper `#FFFFFF` | 4.78:1 | ✓ | ✗ | Secondary text — at threshold, do not reduce |
| Paper `#FFFFFF` | Signature Red `#C3161C` | 6.2:1 | ✓ | ✗ | Primary CTA |
| Paper `#FFFFFF` | Navy `#0C1322` | 19.1:1 | ✓ | ✓ | Cover, dark hero |
| Paper `#FFFFFF` | Ink `#231F20` | 16.3:1 | ✓ | ✓ | Reverse lockup |
| Signature Red `#C3161C` | Paper `#FFFFFF` | 6.2:1 | ✓ | ✗ | Eyebrow, accents on white |
| Signature Red `#C3161C` | **Paper Soft `#F7F7F5`** | 5.9:1 | ✓ | ✗ | Card eyebrow — OK |
| Signature Red `#C3161C` | **Navy `#0C1322`** | **3.1:1** | **✗** | ✗ | ⚠ Only for **large text or decorative fills** on dark surfaces. **Use `dark.red #E5363D` instead** for any red text on dark. |
| Dark Red `#E5363D` | Navy `#0C1322` | 6.0:1 | ✓ | ✗ | Red text/icon on dark — passes |
| Dark Text `#F5F5F4` | Navy `#0C1322` | 18.6:1 | ✓ | ✓ | Dark-mode body |
| Dark Muted `#B5B9C2` | Navy `#0C1322` | 9.1:1 | ✓ | ✓ | Dark-mode secondary |

**One rule that must propagate to the codebase:** never render Signature Red text directly on the Navy or Ink backgrounds. Use the lightened `color.dark.red` (#E5363D) token instead. This is already encoded in the tokens JSON; needs to be honored when the dark-mode CSS variables are re-tuned.

---

_End of audit._
