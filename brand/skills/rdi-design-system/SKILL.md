---
name: rdi-design-system
description: |
  The engineering counterpart to the RDI brand skill — the Reality Driven Intelligence (RDI) design system. Owns how the RDI brand is implemented in code: design tokens, CSS variables, Tailwind utility mapping, font loading via next/font, component patterns (Button, Card, Input, Alert, Eyebrow, SectionTitle, Tabs, Link, Badge), dark mode, accessibility (WCAG, focus rings, ARIA), and codebase conventions for the portal at D:\Evercam rdi.

  Trigger this skill on any UI implementation work for the RDI portal: writing or editing components in src/components/, choosing CSS classes, defining or consuming design tokens, modifying globals.css, picking Tailwind utilities, building forms, adding focus states, fixing accessibility issues, refactoring colors, migrating fonts, or any time work touches files inside src/, tailwind.config.mjs, or rdi-tokens.tokens.json.

  Trigger keywords: "design tokens", "design system", "globals.css", "Tailwind", "tailwind config", "CSS variables", "next/font", "Inter", "JetBrains Mono", "component", "Button", "Card", "Eyebrow", "SectionTitle", "Alert", "Input", "form", "dark mode", "WCAG", "accessibility", "focus ring", "ARIA", "shadcn", "Lucide", "src/components", "Tailwind 4", "@theme inline", "--rdi-".

  Also trigger when the user asks Claude to "implement", "build", "code", "refactor", "fix", "wire up", "migrate", or "audit" anything UI-related on the RDI portal. The brand skill says what the brand is; this skill knows how to put it into code without breaking the 472 existing token references across 35 files.

  This skill is paired with `rdi-brand`, which owns brand identity (logo, colors, voice, iconography, photography, motion, print, social, co-branding). When the task is "implement this in the portal," load both. When the task is "is this code right?", this skill alone is usually enough — but consult the brand skill if there's any doubt about *what* the code should produce.

  Don't trigger for generic Tailwind questions unrelated to RDI, general accessibility tutorials, or component questions about other codebases.
---

# RDI Design System Skill

This skill loads the canonical RDI design system into context — the engineering rules that translate the brand into code.

**Owner:** Kamel Badji (brand owner) sets direction; the design-system spec is maintained alongside the engineering team.

**Canonical source of truth:** `D:\Evercam rdi\brand\DESIGN-SYSTEM.md` — the full spec. Read it the first time you encounter a UI implementation task in a session. There are no copies; this file is read directly.

**Visual companion:** `D:\Evercam rdi\brand\design-system.html` — an interactive walkthrough of the design system used to review the portal. Open it to see every token with copyable Tailwind class strings, every component with its live preview + code, the dark-mode toggle, audit findings rendered with severity, and the page review checklist. When reviewing a portal page, walk the checklist against the open page.

**Companion skill:** `rdi-brand` owns the brand identity (mark, color philosophy, voice, iconography, motion, print, social, co-branding). Brand decisions flow downhill into this system. When in doubt about *what* a component should look like or say, consult `rdi-brand`. When the question is *how to build it correctly in this codebase*, this skill is the right reference.

---

## Architecture in one paragraph

The portal is **Next.js 16 (App Router) + Payload CMS 3 + Tailwind 4 + shadcn/ui primitives**. Tokens are declared as CSS custom properties (`--rdi-ink`, `--rdi-accent`, etc.) in `src/app/(frontend)/globals.css`, light + dark variants. Tailwind 4's `@theme inline` block maps `--rdi-*` to `--color-rdi-*` so utility classes like `bg-rdi-paper`, `text-rdi-ink`, `border-rdi-accent` resolve automatically. There are 472 references to these tokens across 35 files — changing values in `globals.css` propagates without per-component edits.

---

## Sources of truth

| Layer | File | Edit policy |
|---|---|---|
| Brand intent | `D:\Evercam rdi\brand\GUIDELINES.md` | Brand owner only |
| Design tokens (data) | `D:\Evercam rdi\brand\rdi-tokens.tokens.json` | Brand owner + DS maintainer |
| Tokens in CSS | `src/app/(frontend)/globals.css` | DS maintainer |
| Tailwind config | `tailwind.config.mjs` | DS maintainer |
| Component code | `src/components/` | Engineering, against this spec |

Changes flow downhill: brand → tokens JSON → globals.css → components. Components never hard-code hex values, never reach for Tailwind's stock palette (`bg-red-500`), never use inline styles for color.

---

## Color tokens — the contract

### Existing CSS variables to **keep** (names) and **update** (values)

The portal already defines a token namespace; the names predate the v1.0 brand and use `accent` for the red. The names stay — changing them would touch 472 sites. Only the values change.

| Variable | New value | Hex |
|---|---|---|
| `--rdi-ink` | `oklch(21.5% 0.005 17deg)` | `#231F20` |
| `--rdi-muted` | `oklch(54% 0.014 250deg)` | `#6B7280` |
| `--rdi-soft` | `oklch(65% 0.012 250deg)` | `#9CA0A6` |
| `--rdi-accent` | `oklch(50% 0.18 27deg)` | `#C3161C` (Signature Red — fills only) |
| `--rdi-accent-strong` | `oklch(43% 0.18 27deg)` | `#A0121A` |
| `--rdi-accent-soft` | `oklch(95% 0.02 22deg)` | `#FBEBEC` |
| `--rdi-paper` | `oklch(100% 0 0deg)` | `#FFFFFF` |
| `--rdi-paper-soft` | `oklch(97.3% 0.002 100deg)` | `#F7F7F5` |
| `--rdi-navy` | `oklch(17% 0.025 260deg)` | `#0C1322` |
| `--rdi-rule` | `oklch(91.5% 0.003 250deg)` | `#E5E7EB` |
| `--rdi-rule-strong` | `oklch(85.5% 0.005 250deg)` | `#D1D5DB` |
| `--success` | `oklch(58% 0.08 165deg)` | `#1F8A6D` |
| `--warning` | `oklch(60% 0.13 65deg)` | `#C77A0B` |
| `--error` | `oklch(40% 0.15 27deg)` | `#9A1014` |

Dark-mode overrides in `[data-theme='dark']` flip these following the rules in `DESIGN-SYSTEM.md §7`. Critically, `--rdi-accent` resolves to `#E5363D` (lightened red) in dark mode so `bg-rdi-accent` and `border-rdi-accent` automatically pick up the contrast-safe value.

### Forbidden utilities

- `text-rdi-accent` / `text-red-*` — no red text, anywhere, ever (the brand's most-broken rule).
- `bg-[#...]` with hardcoded hex — always go through tokens.
- Inline `style={{ color: '...' }}` for brand colors — always go through tokens.

A future ESLint rule should reject these. Until it exists, code review enforces.

---

## Typography in code

### Font stack

- **Sans:** Inter, via `next/font/google`, exposed as `--font-sans`.
- **Mono:** JetBrains Mono, via `next/font/google`, exposed as `--font-mono`.

### Current state

The portal ships **Geist Sans** (`geist@1.3.0`). This is the known mismatch with the brand. Migration:

1. Remove `"geist": "^1.3.0"` from `package.json`.
2. Add to `src/app/(frontend)/layout.tsx`:
   ```ts
   import { Inter, JetBrains_Mono } from 'next/font/google'
   const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
   const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
   ```
3. Wire `${inter.variable} ${mono.variable}` onto the `<html>` className.
4. `globals.css` `--font-sans` / `--font-mono` references already point to these variable names — no change needed there.

### Type class patterns

| Brand style | Tailwind |
|---|---|
| Display | `text-[96px] font-extrabold leading-none tracking-[-0.04em]` |
| H1 | `text-5xl font-bold leading-[1.15] tracking-tight` |
| H2 | `text-3xl font-semibold leading-[1.15] tracking-tight` |
| H3 | `text-[22px] font-semibold leading-snug` |
| Lead | `text-xl leading-[1.55]` |
| Body | `text-base leading-[1.65]` |
| Small | `text-[13px] leading-[1.55]` |
| Eyebrow | `text-[11px] font-bold uppercase tracking-[0.08em] text-rdi-ink` |
| Mono | `font-mono text-[13px] leading-[1.45]` |

When these class strings recur in five+ places, extract a shared component. Don't tolerate four drifting "headline" class strings across the codebase.

---

## Component patterns — the contract

These are summaries. Full code samples in `DESIGN-SYSTEM.md §6`.

### Eyebrow
Uppercase Ink text. **No leading red bar.** The red rule lives under the section's H1/H2 (see SectionTitle), not beside the eyebrow.

### SectionTitle
H2 + a 64×3px red rule directly beneath, 18px gap. On dark surfaces, switch to `--rdi-red-on-dark`. **Always use this** for the main title of a section. Don't manually compose H2 + arbitrary divs.

### Button
Primary = Signature Red fill, white text, hover darkens to Red Strong.
Secondary = Ink fill, white text.
Ghost = transparent, Ink text, hover reveals 2px red bottom border.
Disabled = 45% opacity, `cursor-not-allowed`.

### Card
Ink/muted text on Paper Soft. Hover state: 3px red left border (the vertical red line in interactive form).

### Input
Ink text inside. Focus: 2px Signature Red outline + border. Error: `border-rdi-error` (the darker error red) + a small Ink-color error message. **The error message is never red.**

### Alert
Colored left border (Error/Success/Warning) + tinted background + **Ink-color text**. Text is never red even in an error.

### Link
Ink text + 1px gray underline → 2px red underline on hover, 120ms ease.

### Tabs / nav items
Muted text + transparent left border by default. Hover and active reveal a 2px red left rail and shift text to Ink.

### Badge
Soft red fill + Ink text + small red dot. The dot is the red signal; the text stays Ink.

---

## Dark mode

`[data-theme='dark']` on `<html>` swaps the token values. `--rdi-accent` resolves to `#E5363D` (lightened red); `--rdi-paper` becomes Navy; `--rdi-ink` becomes a near-white. Components that need to render differently in dark mode should rely on the variables, not branch on theme state.

The exception: `SectionTitle` accepts a `dark` prop because its red rule needs to switch colors. Pass `dark={true}` when rendering on Navy or Ink backgrounds.

---

## Accessibility — the floor

- WCAG AA contrast (4.5:1 normal, 3:1 large). Signature Red on Navy = 3.1:1, fails — never use red text on dark. Muted on Paper = 4.78:1, just passes — don't reduce.
- Focus rings visible on every interactive element. Use `focus:outline-2 focus:outline-rdi-accent focus:outline-offset-2`. Never `outline: none` without a replacement.
- Keyboard reachable: Tab + Enter/Space operates every clickable. Tab order follows reading order.
- Decorative SVG (red lines, icon wedges) carries `aria-hidden="true"`.
- Icon-only buttons need `aria-label`.
- Form fields need visible labels; placeholders are not labels.
- Respect `prefers-reduced-motion: reduce`.

---

## Codebase conventions

```
src/
├── app/(frontend)/        # public pages (24 routes)
├── app/(payload)/         # Payload CMS admin
├── components/
│   ├── ui/                # shadcn primitives
│   ├── rdi/               # bespoke RDI components
│   └── Logo/              # logo component (currently broken — see audit)
├── Header/, Footer/
├── blocks/                # Payload block renderers
```

- `ui/` = framework-agnostic primitives.
- `rdi/` = brand-aware composed components.
- `rdi/` may import from `ui/`; never the reverse.
- Every component accepts a `className`, forwards `ref` if wrapping a single DOM element.

---

## Known gaps — surface these on relevant tasks

1. **`src/components/Logo/Logo.tsx` renders the Payload CMS placeholder** — needs replacing with a local SVG referencing `brand/assets/rdi-logo.svg`. Until this lands, every page ships with the wrong logo.
2. **`public/favicon.svg` is an unrelated chevron from the template** — replace with `brand/assets/rdi-favicon.svg`.
3. **Font mismatch (Geist vs Inter)** — see migration steps above.
4. **`<Eyebrow>` uses `text-rdi-accent` (red text)** — violates the no-red-text rule. Change to `text-rdi-ink`.
5. **Section H2s have no red rule** — most pages render eyebrow + heading without the 64×3px red line beneath. Introduce `SectionTitle` and migrate.
6. **`--rdi-error` may still equal `#C3161C`** in the current `globals.css` — needs to become `#9A1014` so error styling is distinct from primary CTAs.

When working on a page or component, check whether your changes give you an opportunity to fix any of these. Don't pile new code on top of known broken patterns.

---

## Pre-merge checks

Before declaring UI work done, run this pass:

1. Any new `bg-[#...]` or `text-[#...]` with a hardcoded hex? Move it to a token.
2. Any `text-rdi-accent`, `text-red-*`, or inline red color on text? Remove it.
3. Eyebrow + heading? Use `<Eyebrow>` + `<SectionTitle>`, not bare elements.
4. Focus rings visible on interactive elements?
5. Tab order follows reading order?
6. Dark mode tested (toggle `data-theme='dark'` and re-check)?
7. New tokens introduced? Update `rdi-tokens.tokens.json` and `globals.css` together.

---

## Updating the design system

The canonical source of truth is `D:\Evercam rdi\brand\DESIGN-SYSTEM.md` — one file, read directly.

When changes happen:
1. If a token value changes: update `rdi-tokens.tokens.json` and `globals.css` in the same change.
2. If a component pattern changes: update `DESIGN-SYSTEM.md` and refactor existing usages.
3. If a brand rule changes upstream (in `GUIDELINES.md`): coordinate with the brand owner before touching design-system files. Brand decisions flow downhill, never the other way.

For anything that crosses into brand territory (a new color, a new typeface, a new pattern that isn't already in the brand book), pause and surface to Kamel.
