# RDI — Design System

_Reality Driven Intelligence · Engineering counterpart to the brand guidelines · v1.0 draft_

_Owner: **Kamel Badji** (brand owner) · Maintained alongside the engineering team_

This document defines **how the RDI brand is implemented in code**. It is the engineering counterpart to [`GUIDELINES.md`](./GUIDELINES.md). The brand book says *what* the identity is; this document says *how* it lives in the portal.

Scope: tokens, CSS variables, Tailwind utility mapping, font loading, component patterns, dark mode, accessibility, and codebase conventions for the portal at `D:\Evercam rdi`.

The **visual companion** to this document is [`design-system.html`](./design-system.html) — open it in a browser to walk the design system interactively, toggle dark mode, see every component rendered with its code, review audit findings with severity, and run the page review checklist.

When a brand rule and a design-system rule disagree, the brand rule wins — but the design system is responsible for surfacing the contradiction. Contradictions usually mean the design system is out of date.

---

## Table of contents

1. Overview & relationship to the brand
2. Sources of truth
3. Color tokens in code
4. Typography in code
5. Spacing, radius, shadow
6. Component patterns
7. Dark mode
8. Accessibility
9. Codebase conventions
10. Known gaps & audit findings
11. Roadmap

---

## 1. Overview & relationship to the brand

The design system serves the brand. Every token in this document maps back to a brand rule in `GUIDELINES.md`:

| Brand concept | Design-system artifact |
|---|---|
| Signature Red | `--rdi-red`, `bg-rdi-red`, `--color-rdi-accent` |
| The red line | `.eyebrow` (no leading bar), `h2::after` rule, `<NavTab active>` left rail, `<Link>` hover underline |
| Ink for text | `--rdi-ink`, `text-rdi-ink` |
| Paper backgrounds | `--rdi-paper`, `bg-rdi-paper` |
| Type stack (Inter) | `next/font` loader, `--font-sans` |
| Iconography | `lucide-react`, 2px stroke, 24px grid |

If you find yourself reaching for a hex value or a font name not on these tables, stop. Either the token exists and you missed it, or the token doesn't exist yet and needs to be added at the brand level first.

---

## 2. Sources of truth

| Layer | File | Editor |
|---|---|---|
| Brand intent | `D:\Evercam rdi\brand\GUIDELINES.md` | Brand owner |
| Design tokens (data) | `D:\Evercam rdi\brand\rdi-tokens.tokens.json` | Brand owner + design-system maintainer |
| Tokens in CSS | `D:\Evercam rdi\src\app\(frontend)\globals.css` | Design-system maintainer |
| Tailwind config | `D:\Evercam rdi\tailwind.config.mjs` | Design-system maintainer |
| Component code | `D:\Evercam rdi\src\components\` | Engineering, against this spec |

Changes flow downhill: brand decides → tokens JSON updated → globals.css updated → components consume CSS variables. Components never hard-code values.

---

## 3. Color tokens in code

### 3.1 CSS variables (in `globals.css`)

Defined inside `:root` (light) and `[data-theme='dark']` (dark) blocks. The current naming convention is `--rdi-<role>`:

```
--rdi-ink, --rdi-muted, --rdi-soft
--rdi-accent, --rdi-accent-strong, --rdi-accent-soft
--rdi-paper, --rdi-rule, --rdi-rule-strong
```

These names predate the brand book and use `accent` for the red. **The names stay** (changing them would touch 472 references across 35 files); **only the values change** to match the v1.0 palette.

Target values to set in `globals.css`:

```css
:root {
  --rdi-ink: oklch(21.5% 0.005 17deg);            /* #231F20 */
  --rdi-muted: oklch(54% 0.014 250deg);           /* #6B7280 */
  --rdi-soft: oklch(65% 0.012 250deg);            /* #9CA0A6 */
  --rdi-accent: oklch(50% 0.18 27deg);            /* #C3161C */
  --rdi-accent-strong: oklch(43% 0.18 27deg);     /* #A0121A */
  --rdi-accent-soft: oklch(95% 0.02 22deg);       /* #FBEBEC */
  --rdi-paper: oklch(100% 0 0deg);                /* #FFFFFF */
  --rdi-paper-soft: oklch(97.3% 0.002 100deg);    /* #F7F7F5 */
  --rdi-navy: oklch(17% 0.025 260deg);            /* #0C1322 */
  --rdi-rule: oklch(91.5% 0.003 250deg);          /* #E5E7EB */
  --rdi-rule-strong: oklch(85.5% 0.005 250deg);   /* #D1D5DB */
  --rdi-success: oklch(58% 0.08 165deg);          /* #1F8A6D */
  --rdi-warning: oklch(60% 0.13 65deg);           /* #C77A0B */
  --rdi-error: oklch(40% 0.15 27deg);             /* #9A1014 */
  --rdi-red-on-dark: oklch(64% 0.20 27deg);       /* #E5363D */
}
```

`globals.css` already maps these through `@theme inline` to `--color-rdi-*` so Tailwind utilities resolve automatically.

### 3.2 Tailwind utility mapping

| Utility | Resolves to |
|---|---|
| `bg-rdi-paper` | `var(--color-rdi-paper)` |
| `bg-rdi-paper-soft` | `var(--color-rdi-paper-soft)` |
| `text-rdi-ink` | `var(--color-rdi-ink)` |
| `text-rdi-muted` | `var(--color-rdi-muted)` |
| `border-rdi-rule` | `var(--color-rdi-rule)` |
| `bg-rdi-accent` | `var(--color-rdi-accent)` (the red, fills only) |
| `border-rdi-accent` | red border |
| `text-rdi-accent` | **forbidden** — no red text |

**Lint rule (proposed):** add an ESLint rule that flags `text-rdi-accent`, `text-red-*`, and inline `color: ...red...` styles in `.tsx` files. Until the rule exists, code review enforces it.

### 3.3 Where colors come from

Components **read tokens via Tailwind utilities** or CSS variables. They do **not**:
- Hard-code hex values (`bg-[#C3161C]` etc.)
- Use Tailwind's stock palette (`bg-red-500`, `text-gray-700`)
- Define their own CSS variables for color

If a component needs a color that doesn't exist in the token set, raise it with the brand owner before adding to the system.

---

## 4. Typography in code

### 4.1 Font stack

- **Sans (display + body):** Inter, loaded via `next/font/google`.
- **Mono:** JetBrains Mono, loaded via `next/font/google`.

**Status:** the portal currently loads **Geist Sans** (`geist@1.3.0`). This is a known mismatch with the brand book. Migration plan:

1. Remove `"geist": "^1.3.0"` from `package.json`.
2. Add `next/font` import in `src/app/(frontend)/layout.tsx`:
   ```ts
   import { Inter, JetBrains_Mono } from 'next/font/google'
   const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
   const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
   ```
3. Wire `inter.variable` and `mono.variable` onto the `<html>` className.
4. Keep `globals.css` `--font-sans` / `--font-mono` references — they already point to the variable names.

### 4.2 Type classes

Tailwind utilities provide most type sizing. For brand-canonical type styles, prefer the named pattern below over ad-hoc class strings:

| Brand style | Tailwind classes |
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

If these strings repeat across more than ~5 components, extract a shared component. Don't tolerate four different "headline" class strings drifting across the codebase.

---

## 5. Spacing, radius, shadow

Defined as design tokens in `rdi-tokens.tokens.json`. The portal's Tailwind 4 setup picks up its standard scale (`p-2`, `p-4`, `p-6`, etc.) and the brand-aligned values map onto those defaults:

| Token | Tailwind |
|---|---|
| `spacing.4` (16px) | `p-4`, `m-4`, `gap-4` |
| `spacing.6` (24px) | `p-6` |
| `spacing.8` (32px) | `p-8` |
| `spacing.12` (48px) | `p-12` |
| `spacing.16` (64px) | `p-16` |
| `spacing.24` (96px) | `p-24` |
| `radius.sm` (4px) | `rounded` |
| `radius.md` (8px) | `rounded-lg` |
| `radius.lg` (14px) | `rounded-2xl` (close approximation) |
| `radius.pill` (999px) | `rounded-full` |

Shadows use the three-step `shadow-sm`, `shadow-md`, `shadow-lg` Tailwind defaults; the matching CSS values live in `globals.css`.

---

## 6. Component patterns

### 6.1 Eyebrow

```tsx
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] leading-none text-rdi-ink">
      {children}
    </p>
  )
}
```

**Pattern:** uppercase Ink text. **No leading red bar.** The red line lives under the section's H1/H2 (see §6.2), not beside the eyebrow.

The current `<Eyebrow>` in `src/components/rdi/InstitutionalPage.tsx` uses `text-rdi-accent` (red text) and `text-sm md:text-[13px]`. **Both need to change**: drop `text-rdi-accent` → `text-rdi-ink`, drop responsive sizing → fixed `text-[11px]` for consistency with the brand scale.

### 6.2 Section title with red rule

```tsx
export function SectionTitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-[18px] items-start">
      <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-rdi-ink">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className={`block w-16 h-[3px] ${dark ? 'bg-[var(--rdi-red-on-dark)]' : 'bg-rdi-accent'}`}
      />
    </div>
  )
}
```

**Pattern:** H2 + a 64×3px red rule directly beneath, 18px gap. On dark surfaces, switch to the lightened red. Always use this for the main title of a section. Don't manually compose H2 + arbitrary divs.

### 6.3 Button

```tsx
// Primary — Signature Red fill, Paper text
<button className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-lg bg-rdi-accent text-white text-sm font-semibold hover:bg-rdi-accent-strong transition-colors duration-[120ms]">
  Get a quote
</button>

// Secondary — Ink fill, Paper text
<button className="... bg-rdi-ink text-white hover:bg-black ...">

// Ghost — transparent, border, hover red underline
<button className="... bg-transparent text-rdi-ink border border-rdi-rule-strong hover:border-rdi-ink ...">
```

**Rules:**
- Primary on Signature Red fill only; never on Ink or Navy with red text.
- Hover state for primary: darken fill to Red Strong. Never change text color to red.
- Ghost button hover may use a 2px red bottom border (the red line) instead of a full-border change.
- Disabled state: 45% opacity, `cursor-not-allowed`.

### 6.4 Card

```tsx
<div className="border border-rdi-rule rounded-2xl p-6 bg-rdi-paper-soft hover:border-l-[3px] hover:border-l-rdi-accent transition-all duration-[120ms]">
  <Eyebrow>Use case</Eyebrow>
  <h3 className="text-lg font-semibold mb-2 text-rdi-ink">…</h3>
  <p className="text-sm text-rdi-muted leading-relaxed">…</p>
</div>
```

**Pattern:** Ink/muted text on Paper Soft. The hover state introduces a 3px red left border (the §6.2 vertical red line, in interactive form).

### 6.5 Input / form field

```tsx
<label className="text-xs font-semibold uppercase tracking-wide text-rdi-muted">Email</label>
<input
  type="email"
  className="px-[14px] py-[10px] border border-rdi-rule-strong rounded-lg bg-white text-rdi-ink text-sm focus:outline focus:outline-2 focus:outline-rdi-accent focus:outline-offset-1 focus:border-rdi-accent"
/>
```

**Pattern:** Ink text inside the input. Focus state shows a 2px Signature Red outline + border. **Error state:** `border-rdi-error` (the darker error red, not Signature) + a small error message in `text-rdi-ink` (never red).

### 6.6 Alert

```tsx
// Error
<div className="px-4 py-[14px] border-l-[3px] border-rdi-error bg-rdi-accent-soft text-rdi-ink text-sm leading-relaxed">
  <strong>Blocked.</strong> Camera 04 offline.
</div>
```

**Pattern:** colored left border (Error red, Success green, Warning amber) + tinted background fill + **Ink-color text inside**. The text is never red, even in an error.

### 6.7 Link

```tsx
<a className="relative inline-block text-rdi-ink font-medium pb-1
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:w-[2.5ch] after:h-[2px] after:bg-rdi-accent
              after:origin-left after:scale-x-0
              after:transition-transform after:duration-200
              after:ease-[cubic-bezier(0.2,0.6,0.2,1)]
              hover:after:scale-x-100">
  Methodology
</a>
```

**Pattern:** Ink text, **no default underline**. On hover, a 2px red line approximately 2.5ch wide (about three letters) animates **left-to-right** beneath the link with ease-out soft at 200ms. The line is anchored to the left edge of the link, never spans the full text width — this is the red-line-under-titles pattern at link scale.

### 6.8 Tabs / nav items

```tsx
// Vertical tabs
<a className={`flex items-center gap-[10px] py-2 pl-[14px] border-l-2 text-sm font-medium transition-colors duration-[120ms] ${
  active
    ? 'border-rdi-accent text-rdi-ink'
    : 'border-transparent text-rdi-muted hover:border-rdi-accent hover:text-rdi-ink'
}`}>
  {label}
</a>
```

**Pattern:** muted text + transparent left border by default. Hover and active reveal a 2px red left rail and shift text to Ink.

### 6.9 Badge

```tsx
<span className="inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-[11px] font-bold uppercase tracking-wider bg-rdi-accent-soft text-rdi-ink">
  <span className="w-1.5 h-1.5 rounded-full bg-rdi-accent" />
  New
</span>
```

**Pattern:** Soft red fill + Ink text + small red dot. The dot is the red signal; the text stays Ink.

---

## 7. Dark mode

The portal supports `[data-theme='dark']` via attribute selector on `<html>`. Token values in dark mode:

```css
[data-theme='dark'] {
  --rdi-ink: oklch(96% 0.004 250deg);            /* Paper text */
  --rdi-muted: oklch(76% 0.008 250deg);
  --rdi-paper: oklch(17% 0.025 260deg);          /* Navy */
  --rdi-paper-soft: oklch(20% 0.022 260deg);
  --rdi-rule: oklch(28% 0.015 260deg);
  --rdi-accent: oklch(64% 0.20 27deg);           /* Red on dark = #E5363D */
  --rdi-accent-strong: oklch(72% 0.20 27deg);
  --rdi-accent-soft: oklch(28% 0.05 22deg);
  /* signal colors lighten similarly */
}
```

**Critical:** `--rdi-accent` in dark mode resolves to the lightened red (`#E5363D`). Any `bg-rdi-accent` or `border-rdi-accent` utility automatically picks up the correct color for the surface. **Never** override with a hardcoded hex.

The red line under H2s already uses `var(--rdi-red-on-dark)` via the `SectionTitle` component's `dark` prop. Pages that render on dark backgrounds must pass `dark={true}` to the title.

---

## 8. Accessibility

### 8.1 Contrast

WCAG AA minimum (4.5:1 normal text, 3:1 large text). The brand palette is contrast-checked in `AUDIT.md §7`. Two failure modes to watch for:

- **Signature Red on Navy:** 3.1:1 — fails AA. Never use for text. Use `--rdi-red-on-dark` for any red mark on dark surfaces, and even then only for fills/icons.
- **Muted on Paper:** 4.78:1 — passes AA but only just. Don't reduce.

### 8.2 Focus rings

All interactive elements show a visible focus ring. Use Tailwind's `focus:outline-2 focus:outline-rdi-accent focus:outline-offset-2`. Never set `outline: none` without a replacement.

### 8.3 Keyboard navigation

Every clickable element must be reachable by Tab and operable by Enter/Space. Tab order follows visual reading order. No keyboard traps.

### 8.4 ARIA

- Section landmarks use semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`).
- Decorative SVG markers (the red line, icon wedges) carry `aria-hidden="true"`.
- Icon-only buttons require `aria-label`.
- Form fields require visible labels; placeholder text is not a label.

### 8.5 Motion preference

Respect `prefers-reduced-motion: reduce`. The 120ms hover transitions are short enough to be safe; the 400–600ms draw-on animations in motion graphics (per `GUIDELINES.md §9`) need a static fallback for reduced-motion users.

---

## 9. Codebase conventions

### 9.1 File organization

```
src/
├── app/(frontend)/        # public pages
├── app/(payload)/         # Payload CMS admin
├── components/
│   ├── ui/                # shadcn primitives (button, card, input, ...)
│   ├── rdi/               # bespoke RDI components
│   └── Logo/              # the brand logo component
├── Header/, Footer/       # global layout
├── blocks/                # Payload block renderers
└── ...
```

- `ui/` = lower-level, framework-agnostic primitives.
- `rdi/` = brand-aware composed components (PageIntro, SectionTitle, ROICalculator, RDIInfographics).
- Components in `rdi/` may import from `ui/`, never the reverse.

### 9.2 Component contract

Every component:
- Accepts a `className` prop (typed `string | undefined`) that is merged via `clsx` or `tailwind-merge`.
- Forwards `ref` if it wraps a single DOM element.
- Uses semantic HTML by default; allow override via an `as` prop only when justified.
- Reads colors from CSS variables (Tailwind utilities). Never hard-codes hex.

### 9.3 Tailwind 4 specifics

- `globals.css` uses `@import 'tailwindcss'` + `@config '../../../tailwind.config.mjs'`.
- CSS variables are defined in `:root` and `[data-theme='dark']`.
- The `@theme inline` block maps `--rdi-*` to `--color-rdi-*` so utilities work.
- Custom variants are declared with `@custom-variant`.

### 9.4 Naming

- Files: `kebab-case.tsx` for routes, `PascalCase.tsx` for components.
- Components: `PascalCase`.
- CSS variables: `--rdi-<role>` or `--rdi-<role>-<modifier>`.
- Tokens in JSON: `dot.case.with.dashes-if-needed`.

---

## 10. Known gaps & audit findings

These are tracked in `AUDIT.md` and reproduced here so the design-system skill surfaces them on every implementation task.

### 10.1 Critical — `Logo.tsx` renders the Payload placeholder

`src/components/Logo/Logo.tsx` currently loads:
```tsx
src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
alt="Payload Logo"
```

This needs replacing with a local SVG referencing `brand/assets/rdi-logo.svg`. Until this lands, every page in the portal ships with the wrong logo.

### 10.2 Critical — `public/favicon.svg` is not the RDI mark

`public/favicon.svg` is an unrelated chevron from the template. Replace with `brand/assets/rdi-favicon.svg`.

### 10.3 Font mismatch — Geist vs Inter

See §4.1. The migration is non-trivial (touches `app/(frontend)/layout.tsx` and removes a dependency) but mechanical.

### 10.4 Eyebrow uses red text

`<Eyebrow>` in `InstitutionalPage.tsx` uses `text-rdi-accent`. This violates the no-red-text rule. Fix: `text-rdi-ink`.

### 10.5 Section main titles have no red rule

Most pages render an `<Eyebrow>` + `<h1>` / `<h2>` without the 64×3px red rule beneath. Introduce `<SectionTitle>` (§6.2) and migrate.

### 10.6 472 references to `--rdi-*` tokens

Across 35 files. Good news: changing values in `globals.css` propagates without per-component edits. Bad news: any hardcoded hex anywhere in this scope is invisible to the propagation. Audit and remove.

---

## 11. Roadmap

### v1.1 — Stabilize tokens
- Apply the v1.0 palette to `globals.css`.
- Fix the Logo + favicon.
- Migrate Geist → Inter.
- Introduce `<SectionTitle>` and refactor `<Eyebrow>` to remove red text.
- ESLint rule rejecting `text-rdi-accent` / `text-red-*` / inline red color.

### v1.2 — Component library coverage
- Document and standardize all components in `src/components/rdi/` against this spec.
- Storybook or a `/design-system` route exposing every component live.
- Visual regression tests via Playwright on the design-system route.

### v1.3 — Bespoke iconography
- Replace Lucide on marketing surfaces with a 24-icon RDI set per `GUIDELINES.md §7`.
- Keep Lucide for utility icons (chevrons, close, etc.).

### v2 — Brand surface coverage
- Slide deck masters (per `GUIDELINES.md §14`).
- Email templates.
- Print master files for business cards, letterhead, report covers.

---

_End of design system · v1.0 · last updated 2026-05-18_
