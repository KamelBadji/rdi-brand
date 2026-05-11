import type { Metadata } from 'next'
import Link from 'next/link'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { WorkflowPackMap } from '@/components/rdi/RDIVisualSystem'
import { getWorkflowPackStats, workflowPacks } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Workflow Packs',
  description: 'Browse Reality-Driven Intelligence workflow packs for construction.',
}

export default function UseCasesPage() {
  return (
    <main>
      <PageIntro
        summary="Reusable patterns for connecting site reality to decisions, evidence standards, and value measurement."
        title="RDI workflow packs"
      />
      <Section
        summary="Start with the pack, then open the detail page for evidence, decisions, and related workflows."
        title="Current workflow packs"
        tone="paper"
      >
        <WorkflowPackMap packs={workflowPacks} />
        <div className="mt-8 grid gap-3">
          {workflowPacks.map((pack) => {
            const stats = getWorkflowPackStats(pack)

            return (
              <Link
                className="grid gap-4 border border-border bg-white p-4 text-rdi-ink transition-colors hover:border-rdi-ink md:grid-cols-[minmax(0,1fr)_300px] md:items-center"
                href={`/use-cases/${pack.slug}`}
                key={pack.slug}
              >
                <div>
                  <p className="text-sm font-semibold text-rdi-accent">{pack.kicker}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-tight">{pack.title}</h2>
                </div>
                <dl className="grid grid-cols-3 gap-0 text-sm">
                  <div>
                    <dt className="text-rdi-muted">Workflows</dt>
                    <dd className="mt-2 font-mono text-2xl font-semibold text-rdi-ink">
                      {stats.active}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-rdi-muted">Evidence</dt>
                    <dd className="mt-2 font-mono text-2xl font-semibold text-rdi-ink">
                      {stats.evidenceCount}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-rdi-muted">Models</dt>
                    <dd className="mt-2 font-mono text-2xl font-semibold text-rdi-ink">
                      {stats.costModels}
                    </dd>
                  </div>
                </dl>
              </Link>
            )
          })}
        </div>
      </Section>
    </main>
  )
}
