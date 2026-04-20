import type { Metadata } from 'next'
import Link from 'next/link'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { getWorkflowPackStats, workflowPacks } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Use Cases',
  description: 'Browse RDI use cases organized as workflow packs.',
}

export default function UseCasesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Use cases"
        summary="Use cases are organized as workflow packs: reusable patterns that connect captured reality to construction decisions, evidence standards, and value levers."
        title="Where RDI creates value"
      />
      <Section
        summary="A workflow pack is a way to learn the category through a construction problem rather than a product feature."
        title="How to read use cases"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Problem', 'The recurring project situation or risk.'],
            ['Workflows', 'The specific jobs that turn reality into evidence and action.'],
            ['Evidence', 'The records that make the workflow trustworthy.'],
            ['Value', 'The cost, risk, time, quality, or governance outcome.'],
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-5" key={title}>
              <h2 className="text-xl font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Workflow packs">
        <div className="grid gap-5 md:grid-cols-2">
          {workflowPacks.map((pack) => {
            const stats = getWorkflowPackStats(pack)

            return (
              <Link
                className="border border-border bg-white p-5 text-rdi-ink transition-colors hover:border-rdi-accent"
                href={`/use-cases/${pack.slug}`}
                key={pack.slug}
              >
                <div className="font-mono text-xs uppercase text-rdi-muted">
                  {pack.kicker}
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{pack.title}</h2>
                <p className="mt-3 text-sm leading-6 text-rdi-muted">{pack.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-4 text-sm">
                  <div>
                    <div className="font-mono text-xl font-semibold">{stats.active}</div>
                    <div className="text-rdi-muted">active workflows</div>
                  </div>
                  <div>
                    <div className="font-mono text-xl font-semibold">{stats.evidenceCount}</div>
                    <div className="text-rdi-muted">evidence records</div>
                  </div>
                  <div>
                    <div className="font-mono text-xl font-semibold">{stats.costModels}</div>
                    <div className="text-rdi-muted">cost models</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>
    </main>
  )
}
