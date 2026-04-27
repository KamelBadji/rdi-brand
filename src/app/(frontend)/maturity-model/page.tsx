import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { MaturityCurveGraphic } from '@/components/rdi/RDIInfographics'

export const metadata: Metadata = {
  title: 'RDI Maturity Model',
  description:
    'A maturity model for construction teams moving from visibility to control to optimization.',
}

const signals = [
  'Evidence is requested by workflow, not by device name.',
  'Site exceptions create observations, tasks, or escalations.',
  'Claims and incidents can be reconstructed without manual archive hunting.',
  'Leaders can compare risk and progress patterns across projects.',
  'Weekly meetings use ground-truth records rather than memory alone.',
  'Value is discussed by workflow outcome, not by footage volume.',
]

export default function MaturityModelPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Maturity model"
        summary="RDI maturity is the movement from seeing the site to controlling and improving work from trusted evidence."
        title="Visibility is the first mile, not the destination."
      />
      <Section
        eyebrow="Curve"
        summary="The model has three practical stages. Each stage changes the question a project team can answer."
        title="Visibility, control, optimization"
      >
        <MaturityCurveGraphic />
      </Section>
      <Section
        eyebrow="Use"
        summary="Use the model to identify the missing layer in a workflow before adding more technology."
        title="How to apply the maturity model"
        tone="paper"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InstitutionalCard
            title="Audit the current state"
            meta="Step 1"
            summary="List where the team already captures reality and whether the record is trusted, searchable, and connected to project context."
          />
          <InstitutionalCard
            title="Find the broken loop"
            meta="Step 2"
            summary="Ask where evidence stops. If the output remains in a dashboard, inbox, or archive, the workflow has not reached action."
          />
          <InstitutionalCard
            title="Prioritize the next layer"
            meta="Step 3"
            summary="Invest where the next layer will change decisions: claims, safety, progress, logistics, quality, or reporting."
          />
        </div>
      </Section>
      <Section
        eyebrow="Signals"
        summary="A high-maturity RDI workflow has signs you can observe in everyday project behavior."
        title="What maturity looks like"
      >
        <ul className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {signals.map((signal, index) => (
            <li
              className={[
                'flex items-start gap-4 p-6',
                index === 0 ? '' : 'border-t border-border',
                index % 2 === 1 ? 'md:border-l' : '',
                index < 2 ? 'md:border-t-0' : '',
              ].join(' ')}
              key={signal}
            >
              <span aria-hidden className="mt-2 inline-block size-2 shrink-0 bg-rdi-accent" />
              <p className="text-base leading-[1.65] text-rdi-ink">{signal}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          Next: run the <TextLink href="/readiness">RDI maturity assessment</TextLink> or compare
          the model with the <TextLink href="/rdi-vs-cameras-ai-dashboards">RDI vs tools</TextLink>{' '}
          guide.
        </p>
      </Section>
    </main>
  )
}
