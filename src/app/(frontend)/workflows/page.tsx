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
        summary="The workflow library is the structured evidence base behind RDI use cases, ROI methodology, learning paths, and project planning."
        title="RDI workflow library"
      />
      <Section
        summary="Each workflow is written as a practical loop. It should explain when the need starts, what the team does, what evidence is created, and how the decision closes."
        title="How to read a workflow"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {[
            ['Trigger', 'What starts the need for evidence or review?'],
            ['Activity', 'What does the team do with captured reality?'],
            ['Conclusion', 'What decision or action closes the loop?'],
            ['Evidence', 'What records support the workflow?'],
            ['ROI', 'Can the value be modelled or is it qualitative?'],
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-5" key={title}>
              <h2 className="text-lg font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Current workflow ledger">
        <div className="overflow-x-auto border border-border">
          <table className="min-w-[900px] w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-rdi-paper text-rdi-muted">
              <tr>
                <th className="border-b border-border px-4 py-3 font-medium">Workflow</th>
                <th className="border-b border-border px-4 py-3 font-medium">Category</th>
                <th className="border-b border-border px-4 py-3 font-medium">Frequency</th>
                <th className="border-b border-border px-4 py-3 font-medium">Confidence</th>
                <th className="border-b border-border px-4 py-3 font-medium">Evidence</th>
                <th className="border-b border-border px-4 py-3 font-medium">ROI</th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((workflow) => (
                <tr className="border-b border-border last:border-0" key={workflow.code}>
                  <td className="max-w-md px-4 py-4">
                    <Link className="font-medium text-rdi-ink hover:text-rdi-accent" href={`/workflows/${workflow.slug}`}>
                      {workflow.name}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-rdi-muted">{workflow.category}</td>
                  <td className="px-4 py-4 text-rdi-muted">{workflow.frequency || 'Unclassified'}</td>
                  <td className="px-4 py-4 text-rdi-muted">{workflow.confidence || 'Unclassified'}</td>
                  <td className="px-4 py-4 text-rdi-muted">{workflow.evidenceCount}</td>
                  <td className="px-4 py-4 text-rdi-muted">
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
