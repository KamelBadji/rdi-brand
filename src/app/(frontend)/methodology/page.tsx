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
        <div className="border border-border bg-white p-5">
          <div className="font-mono text-xs uppercase text-rdi-muted">Current evidence base</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-3xl font-semibold text-rdi-ink">{stats.total}</div>
              <div className="mt-1 text-sm text-rdi-muted">active workflows</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-semibold text-rdi-ink">
                {stats.evidenceCount}
              </div>
              <div className="mt-1 text-sm text-rdi-muted">evidence records</div>
            </div>
          </div>
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
      >
        <div className="grid gap-4 md:grid-cols-2">
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
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-6" key={title}>
              <h2 className="text-xl font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-rdi-muted">
          Run a directional estimate in the <TextLink href="/roi">ROI calculator</TextLink>, then
          compare the project against the <TextLink href="/readiness">readiness assessment</TextLink>.
        </p>
      </Section>
    </main>
  )
}
