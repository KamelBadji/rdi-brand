import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { MaturityPathGraphic, ReadinessScoreGraphic } from '@/components/rdi/RDIVisualSystem'

const readinessAreas = [
  {
    area: 'Reality capture',
    question: 'Do critical areas, activities, and events have reliable visual or sensor coverage?',
  },
  {
    area: 'Ground Truth',
    question: 'Can records be trusted by time, location, project context, and preservation history?',
  },
  {
    area: 'Interpretation',
    question: 'Can the team identify patterns, exceptions, risks, and likely outcomes from the record?',
  },
  {
    area: 'Action',
    question: 'Does each workflow have an owner who reviews, routes, and closes the loop?',
  },
  {
    area: 'Command',
    question: 'Are evidence and actions visible enough for leaders to direct attention across projects?',
  },
  {
    area: 'Outcome measurement',
    question: 'Can the team measure time saved, risk reduced, disputes avoided, or decisions improved?',
  },
]

export const metadata: Metadata = {
  title: 'RDI Maturity Assessment',
  description:
    'A maturity assessment for construction teams adopting Reality-Driven Intelligence workflows.',
}

export default function ReadinessPage() {
  return (
    <main>
      <PageIntro
        summary="Assess where site reality becomes trusted evidence, accountable action, and measured outcome."
        title="RDI maturity assessment"
      />
      <Section
        summary="Find where evidence stops before it changes a decision."
        title="Where evidence can fail"
      >
        <div className="grid gap-8 lg:grid-cols-[0.46fr_0.54fr]">
          <ReadinessScoreGraphic />
          <ol className="grid gap-0 border border-border bg-white">
            {readinessAreas.map((item, index) => (
              <li
                className={[
                  'grid items-start gap-4 px-5 py-5 md:grid-cols-[56px_minmax(0,1fr)]',
                  index === 0 ? '' : 'border-t border-border',
                ].join(' ')}
                key={item.area}
              >
                <div className="font-mono text-2xl font-semibold text-rdi-accent">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-[1.2] text-rdi-ink">{item.area}</h3>
                  <p className="mt-2 text-sm leading-[1.55] text-rdi-muted">{item.question}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <Section
        summary="The score is less important than the pattern. A weak area tells you where the first workflow will fail."
        title="Visibility, control, optimization"
        tone="paper"
      >
        <MaturityPathGraphic />
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          A future public benchmark can publish anonymized maturity patterns once enough teams use
          the same assessment language.
        </p>
      </Section>
    </main>
  )
}
