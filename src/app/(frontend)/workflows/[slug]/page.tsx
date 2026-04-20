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
        <dl className="grid gap-0 border border-border bg-white">
          {metadata.map(([label, value], index) => (
            <div
              className={[
                'flex items-baseline justify-between gap-4 px-5 py-4',
                index === 0 ? '' : 'border-t border-border',
              ].join(' ')}
              key={label}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-rdi-muted">
                {label}
              </dt>
              <dd className="text-right text-sm font-medium text-rdi-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </PageIntro>
      <Section title="Trigger, activity, conclusion">
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {[
            { label: 'Trigger', body: workflow.trigger, layer: '01' },
            { label: 'Activity', body: workflow.activity, layer: '02' },
            { label: 'Conclusion', body: workflow.conclusion, layer: '03' },
          ].map((item, index) => (
            <div
              className={[
                'p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={item.label}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                {item.layer} · {item.label}
              </div>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-rdi-ink">{item.body}</p>
            </div>
          ))}
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
      <Section title="Workflow steps" tone="paper">
        <ol className="border border-border bg-white">
          {workflow.steps.map((step, index) => (
            <li
              className={[
                'grid items-start gap-4 px-5 py-5 md:grid-cols-[90px_minmax(0,1fr)_140px] md:gap-6 md:px-6',
                index === 0 ? '' : 'border-t border-border',
              ].join(' ')}
              key={step.order}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                Step {String(step.order).padStart(2, '0')}
              </div>
              <p className="text-[0.95rem] leading-[1.75] text-rdi-ink">{step.description}</p>
              <div className="flex items-center gap-2 self-center font-mono text-[11px] uppercase tracking-[0.12em] text-rdi-muted">
                <span
                  aria-hidden
                  className={[
                    'inline-block size-1.5 rounded-full',
                    step.isInferred ? 'bg-rdi-muted' : 'bg-rdi-accent',
                  ].join(' ')}
                />
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
              <figure
                className="flex h-full flex-col border border-border bg-white p-6"
                key={`${item.source}-${item.quote}`}
              >
                <span
                  aria-hidden
                  className="font-serif text-4xl leading-none text-rdi-accent"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[0.95rem] leading-[1.75] text-rdi-ink">
                  {item.quote}
                </blockquote>
                {item.source ? (
                  <figcaption className="mt-5 border-t border-border pt-4 text-xs font-medium uppercase tracking-[0.1em] text-rdi-muted">
                    {item.source}
                  </figcaption>
                ) : null}
              </figure>
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
