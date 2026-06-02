# RDI Portal — First Design Review Plan

_v1.0 · 2026-05-18 · Brand owner: Kamel Badji_

## Why this review exists

We've built the brand bible (`GUIDELINES.md` + `brand-bible.html`) and the design system (`DESIGN-SYSTEM.md` + `design-system.html`) as the criteria for what RDI should look, sound, and behave like. None of that matters until the criteria are applied to the actual portal at `D:\Evercam rdi`.

This is the first formal review of the portal against those criteria. It is not "is the site good?" — it is "is the site brand-aligned?" The answer right now is mostly no, by design. The portal was forked from a Payload CMS website template; the brand work happened after. Every rule we ship is a rule the portal hasn't seen yet.

## Scope

**All 28 frontend routes** (19 static + 9 dynamic templates) under `src/app/(frontend)/`. Plus the shared chrome: Header, Footer, Logo, global layout, and the bespoke RDI components in `src/components/rdi/`.

**Output:** a live interactive review tool — `brand/review.html` — that renders one panel per route, each with rule-by-rule pass/fail badges, severity flags, screenshots, and concrete fix proposals. The tool is the working document for the review itself and the artefact stakeholders walk through together.

**Sequencing:** parallel. Execute the unambiguous foundation fixes (Logo, favicon, font migration, token values, Eyebrow text colour) at the same time as the deeper review against the nuanced rules (voice, photography, restraint, eyebrow pattern, vertical rail discipline). Foundation fixes don't wait on review; they unblock it.

## Phases

### Phase 0 — Plan & scaffold _(this turn)_

- Write `REVIEW-PLAN.md` (this file).
- Inventory all 28 routes with their purpose, components, and current state.
- Scaffold `review.html` with the empty review-tool shell.
- Catalogue the brand and design-system rules into a machine-readable rule set the review tool checks against.

### Phase 1 — Foundation fixes _(after sign-off)_

These are unambiguous, unblocking changes. No interpretation needed. Land them as one PR or as a stack of small ones.

| ID | Fix | Files | Effort |
|---|---|---|---|
| F1 | Replace Payload CMS logo with RDI mark | `src/components/Logo/Logo.tsx` + import `brand/assets/rdi-logo.svg` | S |
| F2 | Replace favicon with RDI mark | `public/favicon.svg`, regenerate `public/favicon.ico` | S |
| F3 | Geist → Inter + JetBrains Mono | `package.json`, `src/app/(frontend)/layout.tsx`, `globals.css` reference unchanged | M |
| F4 | Apply v1.0 palette to globals.css | `src/app/(frontend)/globals.css` (update values, keep variable names) | M |
| F5 | Fix `<Eyebrow>` — remove red text | `src/components/rdi/InstitutionalPage.tsx` | S |
| F6 | Introduce `<SectionTitle>` component | New file or addition to InstitutionalPage.tsx | M |
| F7 | Update `<Link>` to new underline rule | `src/components/Link/index.tsx` | M |
| F8 | Update `<Button>` ghost-variant hover | `src/components/ui/button.tsx` | S |
| F9 | Update `--error` to `#9A1014` | `globals.css` | S |
| F10 | Wire `next/font/google` import map | `layout.tsx` head metadata | S |

S = small (≤30min). M = medium (≤2h). L = large (≥2h).

### Phase 2 — Per-route review _(after foundation lands)_

For each of the 28 routes, walk the page against the rule set and populate the `review.html` panel. Each route gets:

- **Status badges** — one per applicable rule (pass / fail / needs-review / not-applicable).
- **Severity flag** — critical / high / medium / low if any rule fails.
- **Findings list** — concrete observations ("eyebrow on line 6 uses `text-rdi-accent` — must be `text-rdi-ink`").
- **Proposed fix** — either a code suggestion or a component swap.
- **Screenshot** — captured against the running portal after foundation fixes have landed (so the screenshot is what we'd ship, not what's broken).
- **Sign-off state** — pending / approved by brand owner.

The rule set the tool checks against is encoded in `brand/review-rules.json` (see Phase 0 deliverable).

### Phase 3 — Aggregate findings + roadmap

Once every route has been reviewed, the review tool produces:

- A dashboard with portal-wide stats: how many routes pass each rule, severity distribution, common failure patterns.
- A prioritised remediation roadmap — which fixes have the highest brand-correctness leverage per hour of engineering effort.
- A list of patterns that recur across many pages (e.g. "12 routes have the H2 with no red rule under it") so they can be batched into a single component change rather than 12 individual edits.

### Phase 4 — Execute remediation

Engineering team works the roadmap. Each fix gets a PR. The review tool's sign-off state updates as PRs land. The brand owner walks the review tool periodically and approves routes as they go green.

### Phase 5 — Lock & monitor

When every route is green:

- A snapshot of the review tool's state is committed as `review-v1.0-baseline.html` so future regressions can be measured against this baseline.
- Add Playwright visual-regression tests against the routes that matter most.
- Add an ESLint rule that rejects `text-rdi-accent`, `text-red-*`, and hardcoded brand-color hex values in `.tsx` files. The rule prevents the most-broken brand convention from regressing.
- Establish a "brand review" gate in the PR template — every UI PR must declare which routes it touches and self-certify against the rule set.

## Deliverables (by phase)

| Phase | Deliverable | Location |
|---|---|---|
| 0 | `REVIEW-PLAN.md` | `D:\Evercam rdi\brand\REVIEW-PLAN.md` |
| 0 | Route inventory | `REVIEW-PLAN.md` §Route inventory below |
| 0 | `review.html` scaffold | `D:\Evercam rdi\brand\review.html` |
| 0 | `review-rules.json` | `D:\Evercam rdi\brand\review-rules.json` |
| 1 | Foundation-fix PRs (F1–F10) | `src/` and `public/` |
| 2 | Populated `review.html` (per-route findings) | Same file, data added |
| 3 | Roadmap + dashboard | Embedded in `review.html` |
| 4 | Remediation PRs | `src/` |
| 5 | Locked baseline + ESLint rule + regression tests | `review-v1.0-baseline.html`, ESLint config, Playwright tests |

## Rule set the review checks against

Drawn from `GUIDELINES.md` (brand) and `DESIGN-SYSTEM.md` (engineering). Each rule has an ID for the review tool to reference.

### Identity & logo
- **R-LOG-01** Logo on every page is the authentic RDI master SVG (not the Payload CMS placeholder).
- **R-LOG-02** Logo colourway matches background (Default Paper / Reverse Ink / Reverse Navy / Reverse Signature).
- **R-LOG-03** Favicon is the RDI mark, not the template chevron.

### Color
- **R-COL-01** No red text anywhere (`text-rdi-accent`, `text-red-*`, inline red colors all forbidden).
- **R-COL-02** Colors come from CSS variables, not hardcoded hex.
- **R-COL-03** Error styling uses `#9A1014` (distinct from Signature Red).
- **R-COL-04** Dark-mode tokens flip correctly; no red text on dark surfaces.

### Typography
- **R-TYP-01** Inter for body and headlines; JetBrains Mono for numbers, IDs, dates, coordinates.
- **R-TYP-02** Type scale follows the brand table (Display 96 / H1 48 / H2 30 / Body 16 etc.).
- **R-TYP-03** Numbers and dates are wrapped in Mono.

### Red line discipline
- **R-RED-01** Every section main title has a 64×3px red rule below it.
- **R-RED-02** Eyebrow above the title is plain Ink uppercase (no leading bar, no red color).
- **R-RED-03** No duplicate uppercase title at top of the page (no folio + eyebrow saying the same thing).
- **R-RED-04** Vertical rails belong to a title's container, not the title element alone.
- **R-RED-05** Restraint — only one red line per page (H2 rule or one vertical rail, not both, not multiplied across a list).
- **R-RED-06** Inline links: no default underline; on hover, a 2.5ch red line animates left-to-right.

### Components
- **R-CMP-01** `<Eyebrow>` renders Ink uppercase text (not red).
- **R-CMP-02** `<SectionTitle>` exists and is used for every main section heading.
- **R-CMP-03** `<Button variant="primary">` uses Signature Red fill, white text, Red Strong hover.
- **R-CMP-04** Alerts use red border + Red Soft background with Ink-color text inside (never red text in an alert).
- **R-CMP-05** Cards reveal a 3px red left border on hover.

### Iconography
- **R-ICN-01** Icons come from Lucide (until bespoke v1.3 set ships).
- **R-ICN-02** Active/state-bearing icons use the red dot indicator, not a triangle wedge.

### Photography
- **R-PHO-01** Imagery is real RDI site frames (from `public/rdi/images/` or commissioned). No stock libraries.
- **R-PHO-02** No AI-generated construction imagery.
- **R-PHO-03** Photographs are annotated only with mono timestamps + the red wedge for focus.

### Voice & tone
- **R-VOX-01** Observation first, claim second.
- **R-VOX-02** Numbers in Mono with attribution.
- **R-VOX-03** No "powerful," "seamless," "intelligent" without a verb, "next-generation," "robust," "AI" without specifics.

### Accessibility
- **R-A11Y-01** WCAG AA contrast on all text (4.5:1 normal, 3:1 large).
- **R-A11Y-02** Focus rings visible on every interactive element (2px Signature Red outline).
- **R-A11Y-03** Tab order follows reading order.
- **R-A11Y-04** Decorative SVGs (red lines, wedges, icon dots) carry `aria-hidden="true"`.
- **R-A11Y-05** Reduced-motion preference respected on any transition > 200ms.

### Codebase conventions
- **R-CODE-01** No hardcoded color values in component files.
- **R-CODE-02** No `style={{ color: '...' }}` for brand colors.
- **R-CODE-03** Components forward `className` and `ref` where applicable.

---

## Route inventory

Twenty-eight routes total. Marked with their public path, purpose, and the bespoke components I expect them to compose (based on the `rdi-*` token-reference scan earlier).

### Static routes (19)

| # | Path | Purpose | Source |
|---|---|---|---|
| 01 | `/` | Home — RDI brand landing | `app/(frontend)/page.tsx` |
| 02 | `/manifesto` | RDI manifesto statement | `manifesto/page.tsx` |
| 03 | `/methodology` | The four-step methodology | `methodology/page.tsx` |
| 04 | `/maturity-model` | RDI maturity model framework | `maturity-model/page.tsx` |
| 05 | `/readiness` | Readiness assessment | `readiness/page.tsx` |
| 06 | `/stewardship` | Data stewardship statement | `stewardship/page.tsx` |
| 07 | `/what-is-rdi` | Explainer page for newcomers | `what-is-rdi/page.tsx` |
| 08 | `/rdi-vs-cameras-ai-dashboards` | Comparison / positioning page | `rdi-vs-cameras-ai-dashboards/page.tsx` |
| 09 | `/workflows` | Workflow catalogue | `workflows/page.tsx` |
| 10 | `/use-cases` | Use-case catalogue | `use-cases/page.tsx` |
| 11 | `/roi` | ROI calculator | `roi/page.tsx` |
| 12 | `/plan` | Site planner | `plan/page.tsx` |
| 13 | `/learn` | Learning hub landing | `learn/page.tsx` |
| 14 | `/knowledge-base` | Knowledge base index | `knowledge-base/page.tsx` |
| 15 | `/glossary` | Glossary of RDI terms | `glossary/page.tsx` |
| 16 | `/resources` | Resources catalogue | `resources/page.tsx` |
| 17 | `/posts` | Blog index | `posts/page.tsx` |
| 18 | `/get-a-quote` | Quote-request form | `get-a-quote/page.tsx` |
| 19 | `/search` | Search results | `search/page.tsx` |

### Dynamic route templates (9)

| # | Pattern | Purpose | Source |
|---|---|---|---|
| 20 | `/[slug]` | Generic CMS page template | `[slug]/page.tsx` |
| 21 | `/posts/[slug]` | Individual blog post | `posts/[slug]/page.tsx` |
| 22 | `/posts/page/[pageNumber]` | Blog pagination | `posts/page/[pageNumber]/page.tsx` |
| 23 | `/knowledge-base/[slug]` | KB article | `knowledge-base/[slug]/page.tsx` |
| 24 | `/resources/[slug]` | Resource detail | `resources/[slug]/page.tsx` |
| 25 | `/use-cases/[slug]` | Use-case detail | `use-cases/[slug]/page.tsx` |
| 26 | `/workflows/[slug]` | Workflow detail | `workflows/[slug]/page.tsx` |
| 27 | `/learn/[slug]` | Course landing | `learn/[slug]/page.tsx` |
| 28 | `/learn/[slug]/[lessonSlug]` | Lesson page | `learn/[slug]/[lessonSlug]/page.tsx` |

### Shared chrome (reviewed once, applied everywhere)

| Component | Source | Notes |
|---|---|---|
| Frontend root layout | `app/(frontend)/layout.tsx` | Font loading lives here. Also: theme attribute, header/footer slots. |
| Header | `src/Header/Component.tsx` | Logo + nav. Critical for the logo audit. |
| Footer | `src/Footer/Component.tsx` | Logo + secondary nav + legal. |
| Logo | `src/components/Logo/Logo.tsx` | **Currently broken** — renders Payload CMS placeholder. F1 fix lands here. |
| Block renderers | `src/blocks/*` | Payload CMS block components rendered into CMS-driven pages. Each block (Hero, Content, CTA, Form, etc.) is reviewed once and applies to every page that uses it. |

---

## Open questions for the brand owner

Before Phase 1 starts, four decisions need a call from Kamel.

1. **Inter migration commitment.** Are we OK to remove `geist@1.3.0` from the dependency tree, or do we need to keep it as a fallback while migration lands progressively? Recommendation: remove cleanly. The risk is low and partial migration creates worse inconsistency than full migration.

2. **Logo asset path.** The master RDI SVG lives at `D:\Evercam rdi\brand\assets\rdi-logo.svg`. Should the portal import from there directly, or should we mirror the SVG into `public/` (e.g. `public/brand/rdi-logo.svg`)? Recommendation: mirror into `public/` so the brand-assets folder remains canonical and the portal has its own copy version-controlled with the codebase. Update on every brand release.

3. **Inter via next/font/google or self-hosted?** Self-hosted is faster (no Google fetch on first paint) and more privacy-respectful, but requires checking in the WOFF2 files. Recommendation: self-hosted under `public/fonts/inter/` and `public/fonts/jetbrains-mono/`, served via `next/font/local`.

4. **Visual regression baseline timing.** Should we capture Playwright baseline screenshots before the foundation fixes (so we have a "before" reference) or after (so we have a "this is the correct state" baseline)? Recommendation: capture both. Before-screenshots prove the review was needed; after-screenshots are the regression baseline.

## Acceptance criteria

The review is considered complete when:

1. Every one of the 28 routes has a panel in `review.html` with a status, severity flag, findings list, and proposed fix.
2. Every applicable rule from the rule set has been evaluated for every route.
3. The aggregate dashboard shows every route as either green (all rules pass) or has a documented exception signed off by the brand owner.
4. The remediation roadmap exists and is sequenced by leverage.
5. A baseline snapshot of `review.html` is committed to the repo.
6. The ESLint rule for forbidden patterns is in `eslint.config.mjs`.

## What I need from you to start Phase 1

- Sign-off on this plan, or pushback on any section.
- Decisions on the four open questions above (Inter migration commitment, logo asset path, font hosting, baseline timing).
- Confirmation to start touching `src/` files. Until then I keep the brand work in `/brand` only.

---

_End of plan · v1.0 · Drafted by Claude (Cowork) · Reviewed by Kamel Badji (pending)_
