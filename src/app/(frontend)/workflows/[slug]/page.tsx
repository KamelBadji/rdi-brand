import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { getCostModelForWorkflow, getWorkflow, workflows } from '@/lib/rdi-data'

export function generateStaticParams() {
  return workflows.map((workflow) => ({ slug: workflow.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const workflow = getWorkflow(slug)

  return {
    title: workflow ? `${workflow.name} | RDI Workflow` : 'RDI Workflow',
    description: workflow?.description,
  }
}

export default async function WorkflowDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const workflow = getWorkflow(slug)

  if (!workflow) notFound()

  const metadata = [
    ['Category', workflow.category || 'Unclassified'],
    ['Current role', workflow.evercamRole || 'Unclassified'],
    ['Frequency', workflow.frequency || 'Unclassified'],
    ['Confidence', workflow.confidence || 'Unclassified'],
    ['Evidence records', String(workflow.evidenceCount)],
    ['Cost model', workflow.hasCostModel ? 'Available' : 'Qualitative'],
  ]
  const costModel = getCostModelForWorkflow(workflow)

  return (
    <main>
      <PageIntro eyebrow="RDI workflow" summary={workflow.description} title={workflow.name}>
        <div className="grid gap-3">
          {metadata.map(([label, value]) => (
            <div className="border border-border bg-white p-4" key={label}>
              <div className="font-mono text-xs uppercase text-rdi-muted">{label}</div>
              <div className="mt-2 text-sm font-medium text-rdi-ink">{value}</div>
            </div>
          ))}
        </div>
      </PageIntro>
      <Section title="Trigger, activity, conclusion">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-border bg-white p-6">
            <h2 className="text-xl font-semibold text-rdi-ink">Trigger</h2>
            <p className="mt-3 text-sm leading-6 text-rdi-muted">{workflow.trigger}</p>
          </div>
          <div className="border border-border bg-white p-6">
            <h2 className="text-xl font-semibold text-rdi-ink">Activity</h2>
            <p className="mt-3 text-sm leading-6 text-rdi-muted">{workflow.activity}</p>
          </div>
          <div className="border border-border bg-white p-6">
            <h2 className="text-xl font-semibold text-rdi-ink">Conclusion</h2>
            <p className="mt-3 text-sm leading-6 text-rdi-muted">{workflow.conclusion}</p>
          </div>
        </div>
      </Section>
      <Section title="Current role in the workflow">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="border border-border bg-white p-6">
            <h2 className="text-xl font-semibold text-rdi-ink">{workflow.evercamRole || 'Role'}</h2>
            <p className="mt-3 text-sm leading-6 text-rdi-muted">
              {workflow.evercamRoleDescription || workflow.description}
            </p>
          </div>
          <div className="border border-border bg-white p-6">
            <h2 className="text-xl font-semibold text-rdi-ink">Ledger tags</h2>
            {workflow.tags.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {workflow.tags.map((tag) => (
                  <span className="border border-border px-3 py-1 text-sm text-rdi-muted" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm leading-6 text-rdi-muted">No tags recorded.</p>
            )}
          </div>
        </div>
      </Section>
      <Section title="Workflow steps">
        <ol className="grid gap-3">
          {workflow.steps.map((step) => (
            <li className="grid gap-4 border border-border bg-white p-5 md:grid-cols-[80px_1fr_120px]" key={step.order}>
              <div className="font-mono text-sm text-rdi-accent">Step {step.order}</div>
              <p className="text-sm leading-6 text-rdi-muted">{step.description}</p>
              <div className="font-mono text-xs uppercase text-rdi-muted">
                {step.isInferred ? 'Inferred' : 'Evidenced'}
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Evidence records">
        <div className="grid gap-4 md:grid-cols-3">
          {workflow.evidence.length ? (
            workflow.evidence.map((item) => (
              <div className="border border-border bg-white p-5" key={`${item.source}-${item.quote}`}>
                <p className="text-sm leading-6 text-rdi-muted">&ldquo;{item.quote}&rdquo;</p>
                {item.source ? <div className="mt-4 text-sm font-medium text-rdi-ink">{item.source}</div> : null}
              </div>
            ))
          ) : (
            <div className="border border-border bg-white p-5 text-sm text-rdi-muted">
              No evidence record is published for this workflow yet.
            </div>
          )}
        </div>
      </Section>
      <Section title="ROI model">
        {costModel ? (
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
            <div className="border border-border bg-white p-6">
              <div className="font-mono text-xs uppercase text-rdi-muted">
                Template {costModel.template.id}
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-rdi-ink">
                {costModel.model_template.replaceAll('_', ' ')}
              </h2>
              <p className="mt-4 text-sm leading-6 text-rdi-muted">{costModel.template.description}</p>
            </div>
            <div className="border border-border bg-rdi-paper p-6">
              <div className="font-mono text-xs uppercase text-rdi-muted">
                Formula
              </div>
              <p className="mt-3 font-mono text-sm leading-7 text-rdi-ink">{costModel.template.formula}</p>
            </div>
          </div>
        ) : (
          <div className="border border-border bg-white p-6">
            <h2 className="text-xl font-semibold text-rdi-ink">Qualitative workflow</h2>
            <p className="mt-3 text-sm leading-6 text-rdi-muted">
              This workflow is currently represented as a qualitative benefit in the source ledger.
              A parametric cost model should be added only when the assumption set is credible.
            </p>
          </div>
        )}
      </Section>
    </main>
  )
}
