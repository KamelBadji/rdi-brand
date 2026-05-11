import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { OperatingLoopPoster, RDIStackPoster } from '@/components/rdi/RDIVisualSystem'
import { rdiDefinition } from '@/lib/rdi-copy'

export const metadata: Metadata = {
  title: 'What is Reality-Driven Intelligence?',
  description:
    'A practical definition of Reality-Driven Intelligence as a public framework for construction evidence, workflows, and command.',
}

const notRDI = [
  'Not just cameras',
  'Not just dashboards',
  'Not just AI detection',
  'Not just project management software',
  'Not just reporting',
]

export default function WhatIsRDIPage() {
  return (
    <main>
      <PageIntro
        summary={rdiDefinition}
        title="What is Reality-Driven Intelligence?"
      />

      <Section
        id="rdi-stack"
        summary="Read from the bottom up. The stack is complete only when captured reality becomes command."
        title="The five layers"
      >
        <RDIStackPoster />
      </Section>

      <Section
        summary="RDI starts from a simple test: can a record be trusted enough to change a construction decision?"
        title="The problem RDI names"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {[
            'Records are often incomplete, delayed, or detached from the decision they should support.',
            'Evidence needs time, location, scope, and preservation before it can become ground truth.',
            'The useful test is whether the record creates action, closeout, learning, or measured outcome.',
          ].map((line, index) => (
            <div
              className={[
                'p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={line}
            >
              <p className="font-mono text-sm font-semibold text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-5 text-lg font-semibold leading-[1.35] text-rdi-ink">{line}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        summary="RDI is not a new name for a single tool category."
        title="What RDI is not"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-5">
          {notRDI.map((item, index) => (
            <div
              className={[
                'p-5 md:p-6',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={item}
            >
              <span className="font-mono text-sm font-semibold text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-lg font-semibold leading-[1.35] text-rdi-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        summary="Each stage has to pass useful information forward."
        title="How the loop works"
        tone="paper"
      >
        <OperatingLoopPoster />
      </Section>
    </main>
  )
}
