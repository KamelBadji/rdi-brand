# RDI Portal

`rdi.evercam.io` is the public Reality-Driven Intelligence category portal maintained by Evercam.

The app combines a public RDI knowledge site, Payload CMS, workflow taxonomy, ROI calculator, course center, resource library, glossary, site planner, and quote-intent capture.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Payload CMS 3
- PostgreSQL
- Tailwind CSS
- Playwright browser verification

## Local Environment

Required `.env` values:

```bash
DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/rdi_portal
PAYLOAD_SECRET=replace-me
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

The current local setup uses a Homebrew/Postgres data directory in `.postgres`.

Start it with:

```bash
pg_ctl -D .postgres -l .postgres.log -o "-p 5432" start
```

If Docker is available, `docker-compose.yml` can run Postgres instead.

## Install

```bash
pnpm install
```

## Database

Run migrations:

```bash
pnpm payload migrate
```

Create a new migration after changing Payload collections:

```bash
pnpm payload migrate:create --name change_name
```

Regenerate types after schema changes:

```bash
pnpm generate:types
```

## Seed RDI Content

```bash
pnpm seed:rdi
```

The seed creates:

- RDI admin user
- workflow packs
- 57 active level-2 workflows from the current ledger
- personas
- project types
- RDI Foundations course with lesson content
- glossary terms
- ROI assumptions
- starter resources

Local admin user:

```text
rdi-admin@evercam.io
rdi-admin-password
```

Replace this before any public deployment.

## Development

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

Payload admin:

```text
http://localhost:3000/admin
```

## Verification

Run the build:

```bash
pnpm build
```

Run lint:

```bash
pnpm lint
```

Run browser verification against the local dev server:

```bash
pnpm verify:rdi
```

Screenshots are written to:

```text
verification/home-desktop.png
verification/roi-desktop.png
verification/home-mobile.png
verification/roi-mobile.png
```

## Current Routes

- `/`
- `/what-is-rdi`
- `/manifesto`
- `/maturity-model`
- `/rdi-vs-cameras-ai-dashboards`
- `/use-cases`
- `/use-cases/[slug]`
- `/workflows`
- `/workflows/[slug]`
- `/roi`
- `/methodology`
- `/readiness`
- `/learn`
- `/learn/[slug]`
- `/learn/[slug]/[lessonSlug]`
- `/knowledge-base`
- `/resources`
- `/resources/[slug]`
- `/plan`
- `/glossary`
- `/get-a-quote`
- `/admin`

## Content Sources

- `src/lib/rdi-data.ts`
- `src/data/workflows.json`
- `../evercam_workflow_ledger.xlsx`
- `../workflow-analysis.md`
- `../../strategy/RDI-WIP/workflow-packs.md`
- `../../meetings/gtm-workshops/Meeting started 2026_04_14 10_06 IST – Notes by Gemini.md`

## Launch Blockers

Before going live:

- provision production Postgres
- set production `PAYLOAD_SECRET`
- replace the local admin password
- configure production domain `rdi.evercam.io`
- decide storage for uploaded media, likely Vercel Blob or S3-compatible storage
- configure transactional email if quote requests or accounts should email Evercam
- decide whether saved projects require public accounts at launch
- review public ROI assumptions with Evercam commercial/product owners
- replace any temporary starter copy that should not represent a locked Evercam position

## Build Loop

Use the Ralph-style loop from `../rdi-build-prd.md`:

1. Inspect current state.
2. Pick the highest-impact incomplete item.
3. Implement.
4. Run relevant checks.
5. Browser verify UI changes.
6. Update checklist and notes.
7. Repeat until acceptance criteria are met or an external credential blocks launch.
