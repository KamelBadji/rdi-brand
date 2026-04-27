import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { ValueSystemGraphic, WorkflowAnatomyStrip } from '@/components/rdi/RDIVisualSystem'
import { getWorkflowStats } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Economics',
  description:
    'A public methodology for measuring Reality-Driven Intelligence value by workflow outcome, evidence quality, and confidence.',
}

const credibilityRules = [
  [
    'Start with the workflow',
    'The value case should name the trigger, evidence, decision, action, and outcome being improved.',
  ],
  [
    'Show assumptions',
    'Every estimate needs visible inputs: frequency, baseline effort, expected change, range, and confidence.',
  ],
  [
    'Separate savings from risk',
    'Predictable effort reduction and avoided low-frequency loss are both value, but they should not be blended without explanation.',
  ],
  [
    'Attach evidence',
    'The strongest value claims link back to field evidence, workflow records, or anonymized benchmark data.',
  ],
]

export default function MethodologyPage() {
  const stats = getWorkflowStats()

  return (
    <main>
      <PageIntro
        eyebrow="Economics"
        summary="RDI value should be measured by workflow outcome, evidence quality, and confidence, not by vague productivity claims."
        title="RDI economics"
      >
        <div className="border border-border bg-white">
          <div className="border-b border-border px-6 py-4 text-sm font-semibold text-rdi-muted">
            Current evidence base
          </div>
          <dl className="grid grid-cols-2">
            <div className="border-r border-border px-6 py-5">
              <dt className="text-sm text-rdi-muted">Active workflows</dt>
              <dd className="mt-2 font-mono text-3xl font-semibold text-rdi-ink">
                {stats.total}
              </dd>
            </div>
            <div className="px-6 py-5">
              <dt className="text-sm text-rdi-muted">Evidence records</dt>
              <dd className="mt-2 font-mono text-3xl font-semibold text-rdi-ink">
                {stats.evidenceCount}
              </dd>
            </div>
          </dl>
        </div>
      </PageIntro>
      <Section
        eyebrow="Value pillars"
        id="value-pillars"
        summary="Three value families keep the economics honest."
        title="Confidence, evidence, capacity"
      >
        <ValueSystemGraphic />
      </Section>
      <Section
        eyebrow="Method"
        summary="The calculation begins with the workflow."
        title="Measure value through the loop"
        tone="paper"
      >
        <WorkflowAnatomyStrip />
      </Section>
      <Section
        eyebrow="Rules"
        id="credibility-rules"
        summary="The public method separates directional education from project-specific analysis."
        title="Credibility rules"
      >
        <ol className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {credibilityRules.map(([title, body], index) => (
            <li
              className={[
                'grid grid-cols-[48px_minmax(0,1fr)] items-start gap-4 p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border',
                index % 2 === 1 ? 'md:border-l' : '',
                index < 2 ? 'md:border-t-0' : '',
              ].join(' ')}
              key={title}
            >
              <span className="font-mono text-sm font-semibold text-rdi-accent">
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
          <TextLink href="/readiness">maturity assessment</TextLink>.
        </p>
      </Section>
    </main>
  )
}
