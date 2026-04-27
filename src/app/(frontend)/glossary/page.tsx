import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { glossaryTerms } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Glossary',
  description: 'Canonical definitions for Reality-Driven Intelligence.',
}

export default function GlossaryPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Glossary"
        summary="A shared category needs a shared vocabulary. These are the canonical RDI terms."
        title="RDI glossary"
      />
      <Section title="Terms">
        <dl className="border border-border bg-white">
          {glossaryTerms.map((term, index) => (
            <div
              className={[
                'grid items-start gap-4 px-6 py-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8',
                index === 0 ? '' : 'border-t border-border',
              ].join(' ')}
              key={term.slug}
            >
              <dt>
                <div className="font-mono text-sm font-semibold text-rdi-accent">
                  Term {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-[1.3] text-rdi-ink">
                  {term.term}
                </h3>
              </dt>
              <dd className="text-[0.95rem] leading-[1.75] text-rdi-muted">{term.definition}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  )
}
