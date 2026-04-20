import type { Metadata } from 'next'
import Link from 'next/link'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { workflows } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Workflow Library',
  description: 'The structured workflow library behind Reality-Driven Intelligence.',
}

export default function WorkflowsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Workflow library"
        summary="The workflow library is where the framework meets real site work. Each entry describes a construction workflow as a trigger, an activity, a conclusion, an evidence base, and the steps that close the loop."
        title="RDI workflow library"
      />
      <Section
        summary="Each workflow is written as a practical loop. It should explain when the need starts, what the team does, what evidence is created, and how the decision closes."
        title="How to read a workflow"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-5">
          {[
            ['01', 'Trigger', 'What starts the need for evidence or review?'],
            ['02', 'Activity', 'What does the team do with captured reality?'],
            ['03', 'Conclusion', 'What decision or action closes the loop?'],
            ['04', 'Evidence', 'What records support the workflow?'],
            ['05', 'ROI', 'Can the value be modelled, or is it qualitative?'],
          ].map(([kicker, title, body], index) => (
            <div
              className={[
                'p-6',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={title}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                {kicker}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-rdi-ink">{title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Current workflow ledger" tone="paper">
        <div className="overflow-x-auto border border-border bg-white">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-[0.1em] text-rdi-muted">
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  Workflow
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  Category
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  Frequency
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  Confidence
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 text-right font-medium">
                  Evidence
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">ROI</th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((workflow) => (
                <tr
                  className="border-b border-border last:border-0 hover:bg-rdi-paper"
                  key={workflow.code}
                >
                  <td className="max-w-md px-5 py-4">
                    <Link
                      className="font-medium text-rdi-ink hover:text-rdi-accent"
                      href={`/workflows/${workflow.slug}`}
                    >
                      {workflow.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-rdi-muted">{workflow.category}</td>
                  <td className="px-5 py-4 text-rdi-muted">
                    {workflow.frequency || 'Unclassified'}
                  </td>
                  <td className="px-5 py-4 text-rdi-muted">
                    {workflow.confidence || 'Unclassified'}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-rdi-ink">
                    {workflow.evidenceCount}
                  </td>
                  <td className="px-5 py-4 text-rdi-muted">
                    {workflow.hasCostModel ? 'Cost model' : 'Qualitative'}
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
