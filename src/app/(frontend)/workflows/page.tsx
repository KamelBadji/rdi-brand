import type { Metadata } from 'next'
import Link from 'next/link'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { WorkflowAnatomyGraphic } from '@/components/rdi/RDIInfographics'
import { workflowPacks, workflows } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Workflow Library',
  description: 'The structured workflow library behind Reality-Driven Intelligence.',
}

const filterFamilies = [
  'Workflow pack',
  'Value pillar',
  'RDI layer',
  'Persona',
  'Evidence type',
  'Maturity stage',
]

export default function WorkflowsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Workflow library"
        summary="The workflow library is where the framework meets real site work. Each entry describes a repeatable loop from trigger to evidence, decision, action, and measured outcome."
        title="RDI workflow library"
      />
      <Section
        eyebrow="Anatomy"
        summary="Each workflow is written as a practical loop. The question is not whether a feature exists, but whether evidence reaches a decision."
        title="How to read a workflow"
      >
        <WorkflowAnatomyGraphic />
      </Section>
      <Section
        eyebrow="Index"
        summary="The current public ledger can be browsed by pack today. The next public interface should expose these filter families directly."
        title="Filter families"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3 lg:grid-cols-6">
          {filterFamilies.map((family, index) => (
            <div
              className={[
                'p-5 md:p-6',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
                index >= 3 ? 'md:border-t lg:border-t-0' : '',
              ].join(' ')}
              key={family}
            >
              <span className="font-mono text-sm font-semibold text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-rdi-ink">{family}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Current workflow ledger">
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
