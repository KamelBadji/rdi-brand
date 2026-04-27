import type { Metadata } from 'next'
import Link from 'next/link'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { fieldNotes } from '@/lib/content/field-notes'

export const metadata: Metadata = {
  title: 'RDI Resources',
  description: 'RDI articles, field notes, methodology, and templates.',
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function ResourcesPage() {
  const sorted = [...fieldNotes].sort((a, b) => (a.date < b.date ? 1 : -1))
  const byCategory = new Map<string, typeof sorted>()
  for (const note of sorted) {
    const key = note.category || 'General'
    const list = byCategory.get(key) || []
    list.push(note)
    byCategory.set(key, list)
  }
  const categories = Array.from(byCategory.keys()).sort()
  const byYear = new Map<string, typeof sorted>()
  for (const note of sorted) {
    const year = note.date.slice(0, 4)
    const list = byYear.get(year) || []
    list.push(note)
    byYear.set(year, list)
  }
  const years = Array.from(byYear.keys()).sort((a, b) => (a < b ? 1 : -1))

  return (
    <main>
      <PageIntro
        eyebrow="Field notes"
        summary="Short public notes that clarify RDI concepts, workflow patterns, evidence quality, and value measurement. New notes published as the category matures."
        title="RDI field notes"
      />
      <Section
        eyebrow="Latest"
        summary="The most recent notes, regardless of category. Older entries are organised by year below."
        title="Latest notes"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {sorted.slice(0, 6).map((note) => (
            <InstitutionalCard
              href={`/resources/${note.slug}`}
              key={note.slug}
              meta={`${formatDate(note.date)}${note.category ? ` / ${note.category}` : ''}`}
              summary={note.summary}
              title={note.title}
            />
          ))}
        </div>
      </Section>
      <Section eyebrow="Index" title="By category" tone="paper">
        <div className="grid gap-10">
          {categories.map((category) => (
            <div className="grid gap-4" key={category}>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <h3 className="text-lg font-semibold text-rdi-ink">{category}</h3>
                <span className="font-mono text-xs text-rdi-muted">
                  {byCategory.get(category)?.length} note(s)
                </span>
              </div>
              <ul className="grid divide-y divide-border border border-border bg-white">
                {byCategory.get(category)?.map((note) => (
                  <li key={note.slug}>
                    <Link
                      className="grid items-baseline gap-3 px-5 py-4 hover:bg-rdi-paper md:grid-cols-[110px_minmax(0,1fr)_70px]"
                      href={`/resources/${note.slug}`}
                    >
                      <span className="font-mono text-xs text-rdi-muted">
                        {formatDate(note.date)}
                      </span>
                      <span className="text-[0.98rem] font-medium leading-[1.4] text-rdi-ink">
                        {note.title}
                      </span>
                      <span className="font-mono text-xs text-right text-rdi-muted">
                        {note.readingMinutes ? `${note.readingMinutes} min` : ''}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Archive" title="By year">
        <div className="grid gap-8">
          {years.map((year) => (
            <div className="grid gap-3" key={year}>
              <div className="flex items-baseline justify-between border-b border-border pb-2">
                <h3 className="font-mono text-sm font-semibold text-rdi-accent">{year}</h3>
                <span className="font-mono text-xs text-rdi-muted">
                  {byYear.get(year)?.length} entries
                </span>
              </div>
              <ul className="grid gap-2">
                {byYear.get(year)?.map((note) => (
                  <li
                    className="grid items-baseline gap-3 md:grid-cols-[100px_minmax(0,1fr)]"
                    key={note.slug}
                  >
                    <span className="font-mono text-xs text-rdi-muted">{formatDate(note.date)}</span>
                    <Link
                      className="text-[0.95rem] leading-[1.5] text-rdi-ink hover:text-rdi-accent"
                      href={`/resources/${note.slug}`}
                    >
                      {note.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
