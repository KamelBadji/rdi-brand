import type { Metadata } from 'next'
import Link from 'next/link'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { workflowPacks, workflows } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Workflow Library',
  description: 'The structured workflow library behind Reality-Driven Intelligence.',
}

export default function WorkflowsPage() {
  return (
    <main>
      <PageIntro
        summary="A reference library of repeatable construction workflows, grouped by pack and linked to evidence depth."
        title="RDI workflow library"
      />
      <Section
        summary="Browse by pack, then open a workflow for trigger, evidence, decision, and outcome detail."
        title="Workflow ledger"
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {workflowPacks.map((pack) => (
            <Link
              className="border border-border bg-white px-3 py-2 text-sm text-rdi-muted hover:border-rdi-accent hover:text-rdi-ink"
              href={`/use-cases/${pack.slug}`}
              key={pack.slug}
            >
              {pack.title}
            </Link>
          ))}
        </div>
        <div className="overflow-x-auto border border-border bg-white">
          <table className="w-full min-w-[1060px] border-collapse text-left text-sm">
            <thead>
              <tr className="text-sm text-rdi-muted">
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-semibold">
                  Workflow
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-semibold">
                  Pack
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-semibold">
                  Primary decision
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-semibold">
                  Evidence required
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-semibold">
                  Outcome measured
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 text-right font-semibold">
                  Evidence
                </th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((workflow) => (
                <tr
                  className="border-b border-border last:border-0 hover:bg-rdi-paper"
                  key={workflow.code}
                >
                  <td className="max-w-xs px-5 py-4 align-top">
                    <Link
                      className="font-medium text-rdi-ink hover:text-rdi-accent"
                      href={`/workflows/${workflow.slug}`}
                    >
                      {workflow.name}
                    </Link>
                    <p className="mt-2 text-xs leading-5 text-rdi-muted">
                      {workflow.frequency || 'Unclassified'} /{' '}
                      {workflow.confidence || 'Unclassified'}
                    </p>
                  </td>
                  <td className="max-w-[180px] px-5 py-4 align-top text-rdi-muted">
                    {workflow.category}
                  </td>
                  <td className="max-w-xs px-5 py-4 align-top text-rdi-muted">
                    {workflow.trigger}
                  </td>
                  <td className="max-w-xs px-5 py-4 align-top text-rdi-muted">
                    {workflow.evidence.length
                      ? workflow.evidence[0].insightType.replaceAll('_', ' ')
                      : 'Project record'}
                  </td>
                  <td className="max-w-xs px-5 py-4 align-top text-rdi-muted">
                    {workflow.conclusion}
                  </td>
                  <td className="px-5 py-4 text-right align-top font-mono text-rdi-ink">
                    {workflow.evidenceCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </main>
  )
}
