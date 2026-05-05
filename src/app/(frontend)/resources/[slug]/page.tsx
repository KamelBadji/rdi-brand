import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArticleBody } from '@/components/rdi/ArticleBody'
import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { fieldNotes } from '@/lib/content/field-notes'

export function generateStaticParams() {
  return fieldNotes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const note = fieldNotes.find((item) => item.slug === slug)

  return {
    title: note ? `${note.title} | RDI Field Notes` : 'RDI Field Note',
    description: note?.summary,
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = fieldNotes.find((item) => item.slug === slug)

  if (!note) notFound()

  const sorted = [...fieldNotes].sort((a, b) => (a.date < b.date ? 1 : -1))
  const currentIndex = sorted.findIndex((item) => item.slug === note.slug)
  const newer = currentIndex > 0 ? sorted[currentIndex - 1] : null
  const older = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null
  const related = sorted
    .filter((item) => item.slug !== note.slug && item.category === note.category)
    .slice(0, 3)

  return (
    <main>
      <PageIntro
        eyebrow={`${formatDate(note.date)}${note.category ? ` / ${note.category}` : ''}`}
        summary={note.summary}
        title={note.title}
      />
      <Section title="Field note">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.66fr)_minmax(280px,0.34fr)]">
          <article className="border border-border bg-white p-8 md:p-10">
            <ArticleBody blocks={note.body} />
            <div className="mt-10 border-t border-border pt-6 text-sm text-rdi-muted">
              <p>
                Field notes are part of the public RDI reference. For shorter definitions, use the{' '}
                <TextLink href="/glossary">glossary</TextLink>. For full reference articles, see the{' '}
                <TextLink href="/knowledge-base">knowledge base</TextLink>.
              </p>
            </div>
          </article>
          <aside className="grid gap-6 self-start">
            <div className="border border-border bg-white p-5">
              <p className="font-mono text-xs uppercase text-rdi-accent">This note</p>
              <dl className="mt-4 grid gap-3 text-sm text-rdi-muted">
                <div className="flex items-baseline justify-between gap-3">
                  <dt>Published</dt>
                  <dd className="text-rdi-ink">{formatDate(note.date)}</dd>
                </div>
                {note.readingMinutes ? (
                  <div className="flex items-baseline justify-between gap-3">
                    <dt>Reading time</dt>
                    <dd className="text-rdi-ink">{note.readingMinutes} min</dd>
                  </div>
                ) : null}
                {note.category ? (
                  <div className="flex items-baseline justify-between gap-3">
                    <dt>Category</dt>
                    <dd className="text-rdi-ink">{note.category}</dd>
                  </div>
                ) : null}
                {note.authorRole ? (
                  <div className="flex items-baseline justify-between gap-3">
                    <dt>Author role</dt>
                    <dd className="text-rdi-ink">{note.authorRole}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
            {(newer || older) && (
              <div className="border border-border bg-rdi-paper p-5">
                <p className="font-mono text-xs uppercase text-rdi-accent">Continue reading</p>
                <ul className="mt-4 grid gap-3 text-sm">
                  {newer ? (
                    <li>
                      <span className="block font-mono text-xs text-rdi-muted">Newer</span>
                      <Link
                        className="text-rdi-ink hover:text-rdi-accent"
                        href={`/resources/${newer.slug}`}
                      >
                        {newer.title}
                      </Link>
                    </li>
                  ) : null}
                  {older ? (
                    <li>
                      <span className="block font-mono text-xs text-rdi-muted">Older</span>
                      <Link
                        className="text-rdi-ink hover:text-rdi-accent"
                        href={`/resources/${older.slug}`}
                      >
                        {older.title}
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            )}
            {related.length > 0 && (
              <div className="border border-border bg-white p-5">
                <p className="font-mono text-xs uppercase text-rdi-accent">Related</p>
                <ul className="mt-4 grid gap-3 text-sm">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        className="text-rdi-ink hover:text-rdi-accent"
                        href={`/resources/${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <div className="mt-10">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-rdi-accent hover:underline"
            href="/resources"
          >
            <span aria-hidden>←</span> All field notes
          </Link>
        </div>
      </Section>
    </main>
  )
}
