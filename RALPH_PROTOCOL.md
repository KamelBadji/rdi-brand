# Ralph loop protocol

Read this file every tick. It is the only instruction sheet you need.

## What this loop is doing

Filling the RDI portal with content so it reads like a publication that has been running for two years: many glossary terms, multiple courses with deep lessons, a real knowledge base, dozens of dated field notes, and a handful of anonymized case studies.

You are one tick of that loop. Pick one task, do it well, mark it done, commit. Stop.

## Tick procedure

1. Open `RALPH_TASKS.md`. Walk top to bottom. Find the **first** line that starts with `- [ ]`.
2. Read the task carefully. The task names the file you must edit, the slug, the shape, the rough length, and the angle. If the task references a previous task or content, briefly check that file to be consistent.
3. Append the new entry to the right content file. Never reformat or rewrite existing entries unless the task explicitly says to. Append at the end of the array, before the closing `]`.
4. Match the editorial voice. Read three random existing entries in the same file before you write. The voice is:
   - Direct, declarative, advisory. Not promotional.
   - British/Irish English (not "color", "favored", "organization" — use "colour", "favoured", "organisation").
   - Short sentences. Short paragraphs. No emojis. No exclamation marks.
   - Mention "Evercam" only when the task explicitly says so. Otherwise stay vendor-neutral.
   - Avoid claims of specific customer outcomes. Use "an anonymized contractor", "a residential project", or generic role names.
5. Run `node_modules/.bin/tsc --noEmit` from the worktree root. If it fails, fix it before committing. If you cannot fix it in this tick, revert your edit and mark the task `- [!]` with a one-line reason at the end of the line, then move on.
6. In `RALPH_TASKS.md`, change the leading `- [ ]` of the task you just did to `- [x]` and append `  ✓ <YYYY-MM-DD>` at the end of that line. Do not touch any other line.
7. Commit with a message of the form `ralph: <short task description>`. Stage only the files you actually edited this tick. Never use `git add -A`.
8. Report what you did in two short sentences and stop. The driver will fire you again.

## Hard rules

- One task per tick. Never two. Never zero.
- Never delete or reorder tasks. Only the leading checkbox flips.
- Never edit `RALPH_PROTOCOL.md` from inside a tick.
- Never modify `src/lib/rdi-data.ts`, the workflow ledger JSON, the seed script, the migrations, or any payload collection schema. Content lives in `src/lib/content/*.ts`.
- Never run `pnpm install`, `pnpm build`, or `pnpm dev`. Typecheck only.
- Never commit secrets, env files, screenshots, or large binaries.
- Never invent customer names, real project names, or proprietary case-study data. The catalogue ledger has a redaction layer for a reason — keep new content vendor-neutral.

## Task line grammar

Each task line in `RALPH_TASKS.md` has this shape:

```
- [ ] <DOMAIN>: <SHORT TITLE> — <BRIEF SPEC>. File: <path>. Slug: <slug>. Length: <approx>.
```

Domains and where their content lives:

| Domain         | File                                      | Notes |
|----------------|-------------------------------------------|-------|
| Glossary       | `src/lib/content/glossary.ts`             | Append a `GlossaryTerm` to `glossaryTerms`. |
| Course         | `src/lib/content/courses.ts`              | Either add a new `Course` object or add a `CourseLesson` to an existing course. The task line will say which. |
| Field note     | `src/lib/content/field-notes.ts`          | Append a `FieldNote` with `body: ArticleBlock[]`. |
| Knowledge base | `src/lib/content/knowledge-base.ts`       | Append a `KnowledgeBaseArticle` with `area` matching one of the slugs in `knowledgeBaseAreas`. |
| Case study     | `src/lib/content/case-studies.ts`         | Append a `CaseStudy`. Anonymize fully. |

## Body shape reminders

`ArticleBlock` is a discriminated union — every block must include a literal `kind`:

```ts
{ kind: 'paragraph', body: '...' }
{ kind: 'heading', body: '...' }
{ kind: 'list', items: ['...', '...'] }
{ kind: 'pullquote', body: '...', attribution: '...' }
{ kind: 'callout', title: '...', body: '...' }
```

A field note or KB article should typically have 5–9 blocks: a lead paragraph, two or three headings, paragraphs under them, and one list or callout for variety.

A course lesson section is just `{ title, body }` (string body, multi-sentence, 60–150 words).

## When typecheck fails

Most failures are: missing `kind` on a block, unknown `area` slug, wrong `level` literal on a course, trailing comma in a single-item array, or a duplicate slug. Fix the obvious issue first. If the typecheck still fails after one minute of looking, revert and mark the task `- [!]`.

## When you finish a tick

End your assistant turn with two sentences:
1. "Done: <task title>" (short).
2. "Next free task: <title of the next `- [ ]` you can see>" or "Ledger fully clear" if none remain.

That is all.
