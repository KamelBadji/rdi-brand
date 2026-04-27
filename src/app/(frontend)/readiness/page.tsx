import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
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
        eyebrow="Benchmark"
        summary="RDI maturity is not about having the newest tools. It is about whether site reality can become trusted evidence, accountable action, and measured outcome."
        title="RDI maturity assessment"
      />
      <Section
        eyebrow="Assessment"
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
        eyebrow="Output"
        summary="The score is less important than the pattern. A weak area tells you where the first workflow will fail."
        title="Visibility, control, optimization"
        tone="paper"
      >
        <MaturityPathGraphic />
      </Section>
      <Section
        eyebrow="Benchmark"
        summary="A public benchmark becomes useful once enough teams assess maturity against the same language."
        title="Toward an anonymized RDI benchmark"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {[
            {
              title: 'Stage result',
              body: 'Each assessment should place the team in visibility, control, or optimization.',
            },
            {
              title: 'Priority gaps',
              body: 'The output should name the weak layer and the workflows most likely to fail there.',
            },
            {
              title: 'Suggested packs',
              body: 'The next step should connect the result to progress, claims, logistics, safety, reporting, or quality workflows.',
            },
          ].map((tier, index) => (
            <div
              className={[
                'p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={tier.title}
            >
              <p className="text-sm font-semibold text-rdi-accent">Output {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-rdi-ink">{tier.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">{tier.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          As more teams complete the assessment, the RDI project can publish anonymized maturity
          benchmarks for the construction field. Next: browse{' '}
          <TextLink href="/use-cases">workflow packs</TextLink> or study the{' '}
          <TextLink href="/maturity-model">maturity model</TextLink>.
        </p>
      </Section>
    </main>
  )
}
