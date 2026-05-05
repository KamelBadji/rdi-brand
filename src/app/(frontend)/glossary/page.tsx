import type { Metadata } from 'next'
import Link from 'next/link'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { glossaryTerms } from '@/lib/content/glossary'

export const metadata: Metadata = {
  title: 'RDI Glossary',
  description: 'Canonical definitions for Reality-Driven Intelligence.',
}

export default function GlossaryPage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term))
  const letters = Array.from(new Set(sorted.map((term) => term.term[0]?.toUpperCase() || '#'))).sort()

  const grouped = new Map<string, typeof sorted>()
  for (const term of sorted) {
    const letter = (term.term[0] || '#').toUpperCase()
    const list = grouped.get(letter) || []
    list.push(term)
    grouped.set(letter, list)
  }

  return (
    <main>
      <PageIntro
        eyebrow="Glossary"
        summary="A shared category needs a shared vocabulary. These are the canonical RDI terms."
        title="RDI glossary"
      />
      <Section eyebrow="Index" title="Jump to a letter">
        <div className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              className="font-mono inline-flex h-10 min-w-10 items-center justify-center border border-border bg-white px-3 text-sm font-semibold text-rdi-accent hover:bg-rdi-paper"
              href={`#letter-${letter}`}
              key={letter}
            >
              {letter}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-rdi-muted">
          {sorted.length} term{sorted.length === 1 ? '' : 's'} in the glossary.
        </p>
      </Section>
      <Section title="Terms" tone="paper">
        <div className="grid gap-12">
          {letters.map((letter) => {
            const terms = grouped.get(letter) || []
            return (
              <div className="grid gap-4" key={letter} id={`letter-${letter}`}>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <h3 className="font-mono text-lg font-semibold text-rdi-accent">{letter}</h3>
                  <span className="font-mono text-xs text-rdi-muted">
                    {terms.length} term{terms.length === 1 ? '' : 's'}
                  </span>
                </div>
                <dl className="border border-border bg-white">
                  {terms.map((term, index) => (
                    <div
                      className={[
                        'grid items-start gap-4 px-6 py-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8',
                        index === 0 ? '' : 'border-t border-border',
                      ].join(' ')}
                      id={`term-${term.slug}`}
                      key={term.slug}
                    >
                      <dt>
                        <h3 className="text-lg font-semibold leading-[1.3] text-rdi-ink">
                          {term.term}
                        </h3>
                        {term.category ? (
                          <p className="mt-2 font-mono text-xs uppercase text-rdi-muted">
                            {term.category}
                          </p>
                        ) : null}
                      </dt>
                      <dd className="grid gap-3 text-[0.95rem] leading-[1.75] text-rdi-muted">
                        <p>{term.definition}</p>
                        {term.longDefinition ? (
                          <p className="text-rdi-ink">{term.longDefinition}</p>
                        ) : null}
                        {term.relatedSlugs && term.relatedSlugs.length > 0 ? (
                          <p className="text-sm">
                            <span className="font-semibold text-rdi-ink">Related: </span>
                            {term.relatedSlugs.map((slug, idx) => {
                              const related = glossaryTerms.find((item) => item.slug === slug)
                              if (!related) return null
                              return (
                                <span key={slug}>
                                  <Link
                                    className="text-rdi-accent hover:underline"
                                    href={`#term-${related.slug}`}
                                  >
                                    {related.term}
                                  </Link>
                                  {idx < (term.relatedSlugs?.length || 0) - 1 ? ', ' : ''}
                                </span>
                              )
                            })}
                          </p>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )
          })}
        </div>
      </Section>
    </main>
  )
}
