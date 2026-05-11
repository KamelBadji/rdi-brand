import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'

export const metadata: Metadata = {
  title: 'The RDI Manifesto',
  description: 'Principles for Reality-Driven Intelligence in construction.',
}

const principles = [
  [
    'Construction should be run from reality, not recollection.',
    'Project decisions should start from what actually happened, not only from what was reported after the fact.',
  ],
  [
    'Evidence should be continuous, time-aligned, and location-aware.',
    'A useful record carries enough context to support responsibility, sequence, conditions, and consequence.',
  ],
  [
    'Intelligence is not complete until it changes a decision.',
    'Detection, search, and dashboards are incomplete if they do not help someone decide, act, close out, or learn.',
  ],
  [
    'A workflow is incomplete if evidence stops at a dashboard.',
    'RDI requires ownership, assignment, escalation, closeout, or preserved learning when the evidence matters.',
  ],
  [
    'Value must be measured by outcomes, not feature usage.',
    'The unit of value is the workflow outcome: confidence, evidence, capacity, risk, quality, cost, safety, or progress.',
  ],
  [
    'The framework should be open enough to critique and improve.',
    'Shared language becomes stronger when practitioners can challenge definitions and add missing workflows.',
  ],
]

export default function ManifestoPage() {
  return (
    <main>
      <PageIntro
        summary="Six principles for judging whether construction technology has moved from capture to evidence, action, and measured outcome."
        title="The RDI manifesto"
      />
      <Section
        summary="These principles are the test for whether a claim, workflow, or system belongs inside RDI."
        title="Six rules for RDI"
        tone="paper"
      >
        <ol className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {principles.map(([title, body], index) => (
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
      </Section>
      <Section
        summary="Use these questions to test whether a technology claim is really RDI."
        title="Five questions"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-5">
          {[
            { q: 'What reality is captured?', layer: 'Capture' },
            { q: 'What makes it trustworthy?', layer: 'Ground Truth' },
            { q: 'What meaning is extracted?', layer: 'Interpretation' },
            { q: 'What action is routed?', layer: 'Action' },
            { q: 'What outcome is measured?', layer: 'Command' },
          ].map((test, index) => (
            <div
              className={[
                'p-6',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={test.q}
            >
              <p className="text-sm font-semibold text-rdi-accent">
                Test {index + 1}: {test.layer}
              </p>
              <p className="mt-4 text-base font-semibold leading-[1.45] text-rdi-ink">{test.q}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
