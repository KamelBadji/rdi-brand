import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
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
        summary="Construction has entered a reality-capture era. The next step is an intelligence era — one in which captured reality establishes truth, coordinates action, and accumulates into knowledge across projects."
        title="Reality should become operational knowledge."
      />
      <Section
        summary="The manifesto is not a feature list. It is a set of rules for judging whether construction technology is moving from visibility toward intelligence, and whether a particular tool or workflow earns the name."
        title="The shift"
      >
        <DecisionLoopGraphic />
      </Section>
      <Section title="Principles">
        <ol className="grid gap-0 border border-border bg-white md:grid-cols-2">
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
          ].map(([title, body], index, arr) => (
            <li
              className={[
                'grid grid-cols-[56px_minmax(0,1fr)] items-start gap-4 p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border',
                index % 2 === 1 ? 'md:border-l' : '',
                index < arr.length - 2 ? 'md:border-b-0' : '',
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
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-5">
          {[
            { q: 'What reality is captured?', layer: 'Capture' },
            { q: 'What makes it trustworthy?', layer: 'Ground truth' },
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
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                Test {index + 1} · {test.layer}
              </div>
              <p className="mt-4 text-[0.95rem] font-semibold leading-[1.45] text-rdi-ink">
                {test.q}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Publication">
        <dl className="grid gap-0 border border-border bg-white md:grid-cols-2">
          <div className="p-6 md:p-8">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
              First published
            </dt>
            <dd className="mt-3 font-mono text-2xl font-semibold tracking-tight text-rdi-ink">
              April 2026
            </dd>
            <p className="mt-4 text-sm leading-[1.7] text-rdi-muted">
              The manifesto, the RDI stack, the workflow library, the maturity model, and the
              measurement methodology are published together. Revisions are dated on each page as
              they are made.
            </p>
          </div>
          <div className="border-t border-border p-6 md:border-l md:border-t-0 md:p-8">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
              Stewardship
            </dt>
            <dd className="mt-3 text-base font-semibold tracking-tight text-rdi-ink">
              Initiated by Evercam, maintained in public.
            </dd>
            <p className="mt-4 text-sm leading-[1.7] text-rdi-muted">
              External contributors will be credited as the framework is reviewed and applied. See
              the <TextLink href="/stewardship">stewardship note</TextLink> for how the public
              material relates to Evercam&rsquo;s own product work, and how to contribute.
            </p>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          The material on this site is free to read, teach, and reference in professional practice.
          A formal license for derivative publication is being prepared.
        </p>
      </Section>
    </main>
  )
}
