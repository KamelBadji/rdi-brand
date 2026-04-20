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
        summary="A shared category needs a shared vocabulary. These are the first canonical RDI terms."
        title="RDI glossary"
      />
      <Section title="Terms">
        <div className="grid gap-4">
          {glossaryTerms.map((term) => (
            <div className="border border-border bg-white p-6" key={term.slug}>
              <h2 className="text-xl font-semibold text-rdi-ink">{term.term}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{term.definition}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
