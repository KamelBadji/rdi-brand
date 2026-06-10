# Installing the RDI skills

Two Cowork skills live in this folder:

```
skills/
├── rdi-brand/                ← brand-level identity (broad)
│   ├── SKILL.md
│   └── references/guidelines.md       (pointer to D:\Evercam rdi\brand\GUIDELINES.md)
├── rdi-design-system/        ← engineering implementation (technical)
│   ├── SKILL.md
│   └── references/design-system.md   (pointer to D:\Evercam rdi\brand\DESIGN-SYSTEM.md)
└── INSTALL.md                ← this file
```

**`rdi-brand`** owns identity, voice, mark, color philosophy, the red line pattern, iconography, photography, motion and video, print, social media, co-branding with Evercam, and environment / merchandising. Use this skill for any brand-facing work — marketing collateral, slide decks, posters, scripts, social posts, video bumpers.

**`rdi-design-system`** owns the engineering counterpart: design tokens, CSS variables, Tailwind utility mapping, font loading, component patterns, dark mode, accessibility, and codebase conventions for the portal at `D:\Evercam rdi`. Use this skill for UI implementation work.

The two skills are complementary, not competitive. Portal work usually needs both loaded at once — the brand skill says *what*, the design-system skill says *how*.

---

## Option 1 — Copy both into Claude's skills directory

```powershell
# PowerShell — copies both skill folders into Claude's skills directory
$dest = "$env:APPDATA\Claude\local-agent-mode-sessions\skills-plugin\cee71f15-72bf-47b6-bfbb-0737642f3525\ebda8722-a8f9-4373-bdb0-4599b0702cfa\skills\"
Copy-Item -Recurse "D:\Evercam rdi\brand\skills\rdi-brand" $dest
Copy-Item -Recurse "D:\Evercam rdi\brand\skills\rdi-design-system" $dest
```

Restart the Claude desktop app. Both skills appear in the available skills list and trigger automatically on RDI / Evercam / portal work.

## Option 2 — Package as `.skill` files

When the Linux sandbox is available again, ask Claude to run:

```bash
python -m scripts.package_skill D:\Evercam rdi\brand\skills\rdi-brand
python -m scripts.package_skill D:\Evercam rdi\brand\skills\rdi-design-system
```

That produces two shareable `.skill` files that install by drag-and-drop into the Claude desktop app.

---

## Keeping the skills in sync

**There is nothing to sync.** Each skill's `references/` file is a pointer, not a copy. The canonical files are:

- `D:\Evercam rdi\brand\GUIDELINES.md` (brand book — text)
- `D:\Evercam rdi\brand\brand-bible.html` (brand book — visual)
- `D:\Evercam rdi\brand\DESIGN-SYSTEM.md` (engineering spec — text)
- `D:\Evercam rdi\brand\design-system.html` (engineering spec — visual, used to review the portal)
- `D:\Evercam rdi\brand\rdi-tokens.tokens.json` (machine-readable tokens)

When any of these change, the skills pick up the new rules on the next session that mounts the project folder. The only thing you'd ever need to touch inside a skill is its `SKILL.md` summary, and only if a non-negotiable rule changed (so the in-context summary the skill loads matches the canonical file).

---

## Editing flow

```
                  Brand owner (Kamel)
                          │
                          ▼
                  D:\Evercam rdi\brand\GUIDELINES.md         ←  brand skill reads
                          │
                          ▼   (decisions propagate down)
                  D:\Evercam rdi\brand\DESIGN-SYSTEM.md      ←  design-system skill reads
                          │
                          ▼
                  D:\Evercam rdi\brand\rdi-tokens.tokens.json
                          │
                          ▼
                  D:\Evercam rdi\src\app\(frontend)\globals.css
                          │
                          ▼
                  Components in D:\Evercam rdi\src\components\
```

Changes flow downhill. Engineering never short-circuits the brand. The brand never bypasses the design-system contract.
