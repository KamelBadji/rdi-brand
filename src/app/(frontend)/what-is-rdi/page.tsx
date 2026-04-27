import type { Metadata } from 'next'
import Link from 'next/link'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import {
  CategoryShiftBoard,
  OperatingLoopPoster,
  RDIStackPoster,
  WorkflowAnatomyStrip,
} from '@/components/rdi/RDIVisualSystem'
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
        eyebrow="RDI definition"
        summary={rdiDefinition}
        title="What is Reality-Driven Intelligence?"
      />

      <Section
        eyebrow="Framework"
        id="rdi-stack"
        summary="The stack tests whether capture becomes control."
        title="The five layers"
      >
        <RDIStackPoster />
      </Section>

      <Section
        eyebrow="The problem"
        summary="Construction has more records than ever. Decisions still depend on delayed reports."
        title="Why the discipline exists"
      >
        <div className="grid gap-6">
          <CategoryShiftBoard />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              'Disagreement about what happened creates a ground-truth problem.',
              'Capture is now routine. Command is not.',
              'RDI defines the path from record to decision.',
            ].map((line, index) => (
              <div className="border border-border bg-white p-6" key={line}>
                <p className="font-mono text-sm font-semibold text-rdi-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-5 text-xl font-semibold leading-[1.28] text-rdi-ink">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Boundary"
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
        eyebrow="Operating loop"
        summary="Each stage has to pass useful information forward."
        title="How the loop works"
        tone="paper"
      >
        <OperatingLoopPoster />
      </Section>

      <Section
        eyebrow="Workflow anatomy"
        summary="A workflow starts with a trigger and ends with measurement."
        title="From trigger to measurement"
      >
        <WorkflowAnatomyStrip />
      </Section>

      <Section
        eyebrow="Example"
        summary="The same pattern applies to progress, claims, gate logistics, safety, quality, and stakeholder reporting."
        title="A progress verification workflow"
        tone="paper"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InstitutionalCard
            meta="Trigger"
            title="Progress is questioned"
            summary="A planner, owner, or project director needs to know whether planned work is actually complete."
          />
          <InstitutionalCard
            meta="Evidence"
            title="Site reality is verified"
            summary="The team checks time-aligned visual records, 360 walks, milestone views, and schedule context."
          />
          <InstitutionalCard
            meta="Outcome"
            title="Decision record is created"
            summary="The review produces an update, escalation, claim record, meeting note, or corrected plan."
          />
        </div>
      </Section>

      <Section
        eyebrow="Next"
        summary="Start with the framework, then test it against workflows and maturity."
        title="Where to go next"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InstitutionalCard
            href="/use-cases"
            meta="Workflows"
            title="Study workflow packs"
            summary="See how RDI applies to progress, claims, logistics, safety, reporting, and quality."
          />
          <InstitutionalCard
            href="/maturity-model"
            meta="Maturity"
            title="Understand the maturity curve"
            summary="Move from visibility to control to optimization without mistaking capture for command."
          />
          <Link
            className="flex h-full flex-col border border-rdi-ink bg-rdi-ink p-6 text-white transition-colors hover:bg-black"
            href="/readiness"
          >
            <span className="text-sm font-semibold text-white/70">Benchmark</span>
            <span className="mt-5 text-xl font-semibold leading-[1.3]">
              Assess your RDI maturity
            </span>
            <span className="mt-3 text-sm leading-[1.65] text-white/70">
              Find the layer where evidence stops before it changes a decision.
            </span>
          </Link>
        </div>
      </Section>
    </main>
  )
}
