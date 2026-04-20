import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { DecisionLoopGraphic, OpenThinkingGraphic } from '@/components/rdi/RDIInfographics'

export const metadata: Metadata = {
  title: 'The RDI Manifesto',
  description: 'Principles for Reality-Driven Intelligence in construction.',
}

export default function ManifestoPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Manifesto"
        summary="Construction technology is entering a new phase. The useful systems will not only record the site; they will help teams establish truth, coordinate action, and learn from reality."
        title="Reality should become operational knowledge."
      />
      <Section
        summary="The manifesto is not a feature list. It is a set of rules for judging whether construction technology is moving from visibility toward intelligence."
        title="The shift"
      >
        <DecisionLoopGraphic />
      </Section>
      <Section title="Principles">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              'Reality is the source of truth.',
              'Project decisions should be grounded in what actually happened, not only in reports written after the fact.',
            ],
            [
              'Visibility is not enough.',
              'Seeing the site is only the first step. The value appears when evidence changes decisions and behavior.',
            ],
            [
              'Workflows matter more than features.',
              'A detection, search, or dashboard is useful only when it fits into a job that people actually need to do.',
            ],
            [
              'ROI must be explainable.',
              'RDI should connect to measurable outcomes: avoided disputes, reduced travel, faster reporting, fewer delays, and better control.',
            ],
            [
              'The workflow is the unit of value.',
              'A system creates value when it completes a job: trigger, evidence, interpretation, assignment, action, closeout, and learning.',
            ],
            [
              'The category should be teachable.',
              'If teams cannot explain the stack, the maturity model, and the evidence standard, the technology will remain a collection of tools.',
            ],
            [
              'The best systems learn from the field.',
              'Every incident, claim, progress check, and exception should improve the next decision and the next project.',
            ],
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-6" key={title}>
              <h2 className="text-xl font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        summary="The category becomes credible when the language is public and practical. The commercial machinery can remain protected."
        title="Open the thinking, protect the engine"
      >
        <OpenThinkingGraphic />
      </Section>
      <Section
        summary="Use these questions to test whether a technology claim is really RDI."
        title="Five tests"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {[
            'What reality is captured?',
            'What makes it trustworthy?',
            'What meaning is extracted?',
            'What action is routed?',
            'What outcome is measured?',
          ].map((test, index) => (
            <div className="border border-border bg-white p-5" key={test}>
              <div className="font-mono text-sm text-rdi-accent">{index + 1}</div>
              <p className="mt-4 text-sm font-medium leading-6 text-rdi-ink">{test}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
