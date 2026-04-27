import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { WorkflowAnatomyGraphic } from '@/components/rdi/RDIInfographics'
import {
  getCostModelForWorkflow,
  getWorkflowPack,
  getWorkflowPackStats,
  getWorkflowsForPack,
  workflowPacks,
} from '@/lib/rdi-data'

export function generateStaticParams() {
  return workflowPacks.map((pack) => ({ slug: pack.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pack = getWorkflowPack(slug)

  return {
    title: pack ? `${pack.title} | RDI Workflow Pack` : 'RDI Workflow Pack',
    description: pack?.summary,
  }
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pack = getWorkflowPack(slug)

  if (!pack) notFound()

  const packWorkflows = getWorkflowsForPack(pack)
  const stats = getWorkflowPackStats(pack)
  const evidence = packWorkflows.flatMap((workflow) =>
    workflow.evidence.slice(0, 1).map((item) => ({
      ...item,
      workflowName: workflow.name,
      workflowSlug: workflow.slug,
    })),
  )

  return (
    <main>
      <PageIntro eyebrow="Workflow pack" summary={pack.summary} title={pack.title}>
        <div className="border border-border bg-white p-5">
          <p className="text-sm font-semibold text-rdi-muted">Primary readers</p>
          <p className="mt-3 text-sm leading-6 text-rdi-ink">{pack.primaryBuyers.join(', ')}</p>
        </div>
      </PageIntro>
      <Section
        eyebrow="RDI loop"
        summary="Use the same structure across every pack so the category remains comparable across site problems."
        title="Problem, evidence, decision, outcome"
      >
        <WorkflowAnatomyGraphic />
      </Section>
      <Section
        eyebrow="Signal"
        summary="The ledger signal shows how much active workflow and evidence depth sits behind this pack."
        title="Reference depth"
        tone="paper"
      >
        <dl className="grid grid-cols-2 gap-0 border border-border bg-white md:grid-cols-5">
          {[
            ['Active workflows', stats.active],
            ['Evidence records', stats.evidenceCount],
            ['High confidence', stats.highConfidence],
            ['Very common', stats.veryCommon],
            ['Cost models', stats.costModels],
          ].map(([label, value], index) => (
            <div
              className={[
                'p-6',
                index !== 0 ? 'border-t border-border md:border-l md:border-t-0' : '',
              ].join(' ')}
              key={String(label)}
            >
              <dt className="text-sm font-semibold text-rdi-muted">{label}</dt>
              <dd className="mt-3 font-mono text-3xl font-semibold leading-none text-rdi-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section
        eyebrow="Value"
        summary="The value case is grounded in evidence quality, decision speed, and measurable project outcomes."
        title="Why this pack matters"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <p className="text-xl leading-[1.65] text-rdi-ink">{pack.commercialStory}</p>
          <div className="border border-border bg-rdi-paper p-6">
            <p className="text-sm font-semibold text-rdi-accent">Example metrics</p>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.7] text-rdi-muted">
              {pack.roiThemes.map((theme) => (
                <li className="flex items-start gap-3" key={theme}>
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-rdi-accent" />
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Workflows in this pack" tone="paper">
        <div className="grid gap-4">
          {packWorkflows.map((workflow) => {
            const costModel = getCostModelForWorkflow(workflow)

            return (
              <Link
                className="grid gap-5 border border-border bg-white p-5 text-rdi-ink transition-colors hover:border-rdi-accent lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]"
                href={`/workflows/${workflow.slug}`}
                key={workflow.code}
              >
                <span>
                  <span className="block text-sm font-semibold text-rdi-accent">
                    {workflow.frequency || 'Unclassified'} /{' '}
                    {workflow.confidence || 'Unclassified'}
                  </span>
                  <span className="mt-3 block text-xl font-semibold">{workflow.name}</span>
                  <span className="mt-3 block text-sm leading-6 text-rdi-muted">
                    {workflow.description}
                  </span>
                </span>
                <span className="grid gap-3 text-sm text-rdi-muted">
                  <span>
                    <span className="font-semibold text-rdi-ink">Trigger: </span>
                    {workflow.trigger}
                  </span>
                  <span>
                    <span className="font-semibold text-rdi-ink">Outcome: </span>
                    {workflow.conclusion}
                  </span>
                  <span className="grid grid-cols-3 gap-3 border-t border-border pt-3">
                    <span>
                      <span className="block font-mono text-lg text-rdi-ink">
                        {workflow.evidenceCount}
                      </span>
                      evidence
                    </span>
                    <span>
                      <span className="block font-mono text-lg text-rdi-ink">
                        {workflow.steps.length}
                      </span>
                      steps
                    </span>
                    <span>
                      <span className="block font-mono text-lg text-rdi-ink">
                        {costModel ? costModel.template.id : 'Q'}
                      </span>
                      {costModel ? 'model' : 'qualitative'}
                    </span>
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </Section>
      <Section title="Evidence examples">
        <div className="grid gap-4 md:grid-cols-3">
          {evidence.slice(0, 6).map((item) => (
            <Link
              className="border border-border bg-white p-5 text-rdi-ink hover:border-rdi-accent"
              href={`/workflows/${item.workflowSlug}`}
              key={`${item.workflowSlug}-${item.source}`}
            >
              <p className="text-sm font-semibold text-rdi-accent">{item.workflowName}</p>
              <p className="mt-4 text-sm leading-6 text-rdi-muted">&ldquo;{item.quote}&rdquo;</p>
              {item.source ? <p className="mt-4 text-sm font-medium">{item.source}</p> : null}
            </Link>
          ))}
        </div>
      </Section>
    </main>
  )
}
