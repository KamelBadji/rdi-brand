# RDI Design System — pointer

The canonical design system specification for the RDI portal lives at a single location:

**`D:\Evercam rdi\brand\DESIGN-SYSTEM.md`**

That file is the source of truth. Read it directly.

This pointer exists so anyone browsing the skill folder finds the right path. It is intentionally **not** a copy — copies drift, single sources don't.

## Companion files

- `D:\Evercam rdi\brand\GUIDELINES.md` — the upstream brand book that this design system implements. Brand decisions live there; engineering implementation lives in DESIGN-SYSTEM.md.
- `D:\Evercam rdi\brand\design-system.html` — visual / interactive companion to DESIGN-SYSTEM.md. Used to review the portal interactively.
- `D:\Evercam rdi\brand\brand-bible.html` — visual companion to the brand book.
- `D:\Evercam rdi\brand\rdi-tokens.tokens.json` — machine-readable design tokens (Tokens Studio / W3C DTCG).
- `D:\Evercam rdi\brand\AUDIT.md` — current portal state against the design system, with prioritized gaps.

## If the canonical file isn't accessible

If the RDI portal folder isn't mounted in the current session, the parent [`SKILL.md`](../SKILL.md) carries a summary of the design system sufficient for most implementation tasks. For anything that touches new tokens or new component patterns, the canonical file or a check with Kamel is required.

## Governance

The brand owner is **Kamel Badji**, Ux/Ui/Brand designer. New design-system patterns that introduce new colors, new typefaces, or new brand-level shapes need Kamel's sign-off. Pure engineering decisions (file organization, naming conventions, test setup) are owned by the engineering team in coordination with the design-system maintainer.
