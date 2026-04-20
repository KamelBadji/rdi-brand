import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { getWorkflowStats } from '@/lib/rdi-data'

const valueFamilies = [
  {
    title: 'Operational capacity',
    body: 'Time saved in site visits, reporting, meeting preparation, evidence retrieval, progress capture, and manual coordination.',
  },
  {
    title: 'Risk reduction',
    body: 'Exposure reduced in claims, delays, theft, safety incidents, quality defects, payment disputes, and regulatory events.',
  },
  {
    title: 'Governance quality',
    body: 'Better decisions because records are complete, traceable, shared, and available when leaders need them.',
  },
]

export const metadata: Metadata = {
  title: 'RDI ROI Methodology',
  description:
    'A public methodology for explaining Reality-Driven Intelligence value in construction workflows.',
}

export default function MethodologyPage() {
  const stats = getWorkflowStats()

  return (
    <main>
      <PageIntro
        eyebrow="ROI methodology"
        summary="RDI value should be explained by workflow outcome, evidence quality, and confidence, not by vague productivity claims."
        title="How to measure Reality-Driven Intelligence"
      >
        <div className="border border-border bg-white">
          <div className="border-b border-border px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
            Current evidence base
          </div>
          <dl className="grid grid-cols-2">
            <div className="border-r border-border px-6 py-5">
              <dt className="text-xs uppercase tracking-[0.12em] text-rdi-muted">
                Active workflows
              </dt>
              <dd className="mt-2 font-mono text-2xl font-semibold tracking-tight text-rdi-ink">
                {stats.total}
              </dd>
            </div>
            <div className="px-6 py-5">
              <dt className="text-xs uppercase tracking-[0.12em] text-rdi-muted">
                Evidence records
              </dt>
              <dd className="mt-2 font-mono text-2xl font-semibold tracking-tight text-rdi-ink">
                {stats.evidenceCount}
              </dd>
            </div>
          </dl>
        </div>
      </PageIntro>
      <Section
        summary="Every ROI conversation should start by identifying the workflow and deciding which value family applies."
        title="Three value families"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {valueFamilies.map((family) => (
            <InstitutionalCard
              key={family.title}
              title={family.title}
              summary={family.body}
              meta="Value family"
            />
          ))}
        </div>
      </Section>
      <Section
        summary="The methodology separates directional public education from project-specific analysis."
        title="Credibility rules"
        tone="paper"
      >
        <ol className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {[
            [
              'Show assumptions',
              'Every calculation needs visible inputs: frequency, duration, baseline cost, expected reduction, and confidence.',
            ],
            [
              'Use ranges',
              'RDI value is often a range because project complexity, behaviour, and baseline processes vary.',
            ],
            [
              'Separate savings from avoided risk',
              'A saved site visit and an avoided claim are both value, but they should not be explained in the same way.',
            ],
            [
              'Attach evidence',
              'ROI becomes more credible when the workflow links to field evidence, customer examples, or ledger records.',
            ],
          ].map(([title, body], index) => (
            <li
              className={[
                'grid grid-cols-[56px_minmax(0,1fr)] items-start gap-4 p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border',
                index % 2 === 1 ? 'md:border-l' : '',
                index < 2 ? 'md:border-b-0' : '',
              ].join(' ')}
              key={title}
            >
              <span className="font-mono text-sm text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-[1.3] text-rdi-ink">{title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          Run a directional estimate in the <TextLink href="/roi">ROI calculator</TextLink>, then
          compare the project against the{' '}
          <TextLink href="/readiness">readiness assessment</TextLink>.
        </p>
      </Section>
    </main>
  )
}
