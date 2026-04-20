import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { DecisionLoopGraphic } from '@/components/rdi/RDIInfographics'
import { RDIStackPyramid } from '@/components/rdi/RDIStackPyramid'

export const metadata: Metadata = {
  title: 'What is Reality-Driven Intelligence?',
  description: 'A practical definition of RDI for construction teams.',
}

export default function WhatIsRDIPage() {
  return (
    <main>
      <PageIntro
        eyebrow="RDI guide"
        summary="Reality-Driven Intelligence is the discipline of turning captured construction reality into ground truth, interpretation, action, and command."
        title="What is Reality-Driven Intelligence?"
      />
      <Section
        summary="Construction teams already capture enormous amounts of visual information. RDI gives that reality a job to do — with a test for when it is working."
        title="The practical definition"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)]">
          <div className="prose prose-lg max-w-none prose-p:text-rdi-ink prose-p:leading-[1.75]">
            <p>
              RDI starts with reality capture: cameras, 360 walkthroughs, drone imagery, BIM
              context, sensors, and site activity. Those inputs become ground truth when they are
              organized by time, location, project, and workflow.
            </p>
            <p>
              The next step is interpretation. Search, comparison, AI detection, annotations, and
              reporting help teams find meaning in the record. The category shift happens when that
              meaning becomes action: observations, tasks, escalations, closeout, and weekly
              reporting.
            </p>
            <p>
              At maturity, RDI becomes command. Leaders can see patterns across projects, compare
              reality with intent, and understand where intervention will protect schedule, safety,
              cost, quality, and reputation.
            </p>
          </div>
          <aside className="self-start border border-border bg-rdi-paper p-6 md:p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
              In one sentence
            </div>
            <p className="mt-4 text-[1.375rem] font-semibold leading-[1.35] tracking-[-0.01em] text-rdi-ink">
              RDI is the discipline of making captured site reality trustworthy enough to trigger
              decisions, action, and learning.
            </p>
            <hr className="my-6 border-border" />
            <p className="text-sm leading-[1.7] text-rdi-muted">
              The short test: if the record does not change a decision or create an assignment, it
              has not left the visibility layer.
            </p>
          </aside>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InstitutionalCard
            meta="01 Capture"
            title="Capture reality"
            summary="Collect current site evidence from cameras, 360 walks, drones, sensors, BIM context, and project systems."
          />
          <InstitutionalCard
            meta="02 Ground truth"
            title="Establish truth"
            summary="Make the record time-aligned, location-aware, searchable, and reliable enough to support project responsibility."
          />
          <InstitutionalCard
            meta="03 Interpretation"
            title="Interpret change"
            summary="Use comparison, search, AI, annotation, and reporting to explain what changed and why it matters."
          />
          <InstitutionalCard
            meta="04 Action"
            title="Route action"
            summary="Turn findings into observations, tasks, escalations, closeout, weekly reporting, or project learning."
          />
        </div>
      </Section>
      <Section
        summary="Each layer depends on the layer below it. Value increases as teams move from capture to evidence, interpretation, action, and command."
        title="The RDI stack"
        tone="paper"
      >
        <RDIStackPyramid />
      </Section>
      <Section
        summary="RDI is easier to understand as a loop than as a list of technologies. Each stage has to pass information forward."
        title="How the loop works"
      >
        <DecisionLoopGraphic />
      </Section>
      <Section
        summary="A camera answers whether you can see the site. RDI answers whether the site can be controlled and improved using evidence."
        title="From visibility to control"
        tone="paper"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              title: 'Visibility',
              question: 'Can I see the site clearly and review what happened?',
              level: 'Level 1',
            },
            {
              title: 'Evidence',
              question:
                'Can the record be trusted when responsibility, schedule, safety, cost, or quality is disputed?',
              level: 'Level 2',
            },
            {
              title: 'Action',
              question:
                'Can the right person intervene because the right evidence reached the right workflow?',
              level: 'Level 4',
            },
            {
              title: 'Learning',
              question: 'Can recurring patterns improve how future projects are run?',
              level: 'Level 5',
            },
          ].map((item) => (
            <div className="border border-border bg-white p-6" key={item.title}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
                {item.level}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-rdi-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">{item.question}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
