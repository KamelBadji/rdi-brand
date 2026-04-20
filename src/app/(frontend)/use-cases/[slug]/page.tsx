import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import {
  getCostModelForWorkflow,
  getWorkflowPack,
  getWorkflowPackStats,
  getWorkflowsForPack,
  workflowPacks,
} from '@/lib/rdi-data'
import Link from 'next/link'

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
    title: pack ? `${pack.title} | RDI Use Case` : 'RDI Use Case',
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
      <PageIntro eyebrow={pack.kicker} summary={pack.summary} title={pack.title}>
        <div className="border border-border bg-white p-5">
          <div className="font-mono text-xs uppercase text-rdi-muted">Primary buyers</div>
          <p className="mt-3 text-sm leading-6 text-rdi-ink">{pack.primaryBuyers.join(', ')}</p>
        </div>
      </PageIntro>
      <Section title="Ledger signal">
        <div className="grid gap-4 md:grid-cols-5">
          {[
            ['Active workflows', stats.active],
            ['Evidence records', stats.evidenceCount],
            ['High confidence', stats.highConfidence],
            ['Very common', stats.veryCommon],
            ['Cost models', stats.costModels],
          ].map(([label, value]) => (
            <div className="border border-border bg-white p-5" key={label}>
              <div className="font-mono text-3xl font-semibold text-rdi-ink">{value}</div>
              <div className="mt-2 text-sm text-rdi-muted">{label}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Commercial story">
        <p className="max-w-3xl text-lg leading-8 text-rdi-muted">{pack.commercialStory}</p>
      </Section>
      <Section title="Workflows in this pack">
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
                <span className="block font-mono text-xs uppercase text-rdi-muted">
                  {workflow.frequency || 'Unclassified'} / {workflow.confidence || 'Unclassified'}
                </span>
                <span className="mt-3 block text-xl font-semibold">{workflow.name}</span>
                <span className="mt-3 block text-sm leading-6 text-rdi-muted">
                  {workflow.evercamRoleDescription || workflow.description}
                </span>
              </span>
              <span className="grid gap-3 text-sm text-rdi-muted">
                <span>
                  <span className="font-semibold text-rdi-ink">Trigger: </span>
                  {workflow.trigger}
                </span>
                <span>
                  <span className="font-semibold text-rdi-ink">Conclusion: </span>
                  {workflow.conclusion}
                </span>
                <span className="grid grid-cols-3 gap-3 border-t border-border pt-3">
                  <span>
                    <span className="block font-mono text-lg text-rdi-ink">{workflow.evidenceCount}</span>
                    evidence
                  </span>
                  <span>
                    <span className="block font-mono text-lg text-rdi-ink">{workflow.steps.length}</span>
                    steps
                  </span>
                  <span>
                    <span className="block font-mono text-lg text-rdi-ink">
                      {costModel ? costModel.template.id : 'Q'}
                    </span>
                    {costModel ? 'cost model' : 'qualitative'}
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
              <div className="font-mono text-xs uppercase text-rdi-muted">
                {item.workflowName}
              </div>
              <p className="mt-4 text-sm leading-6 text-rdi-muted">&ldquo;{item.quote}&rdquo;</p>
              {item.source ? <div className="mt-4 text-sm font-medium">{item.source}</div> : null}
            </Link>
          ))}
        </div>
      </Section>
      <Section title="ROI themes">
        <div className="grid gap-4 md:grid-cols-3">
          {pack.roiThemes.map((theme) => (
            <div className="border border-border bg-white p-5 text-sm font-medium text-rdi-ink" key={theme}>
              {theme}
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
