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
        summary="Construction teams already capture enormous amounts of visual information. RDI gives that reality a purpose."
        title="The practical definition"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)]">
          <div className="prose prose-lg max-w-none">
            <p>
              RDI starts with reality capture: cameras, 360 walkthroughs, drone imagery, BIM
              context, sensors, and site activity. Those inputs become ground truth when they are
              organized by time, location, project, and workflow.
            </p>
            <p>
              The next step is interpretation. Search, comparison, AI detection, annotations, and
              reporting help teams find meaning in the record. The category shift happens when
              that meaning becomes action: observations, tasks, escalations, closeout, and weekly
              reporting.
            </p>
            <p>
              At maturity, RDI becomes command. Leaders can see patterns across projects, compare
              reality with intent, and understand where intervention will protect schedule, safety,
              cost, quality, and reputation.
            </p>
          </div>
          <div className="border border-border bg-white p-6">
            <div className="font-mono text-xs uppercase text-rdi-accent">In one sentence</div>
            <p className="mt-4 text-2xl font-semibold leading-snug text-rdi-ink">
              RDI is the discipline of making captured site reality trustworthy enough to trigger
              decisions, action, and learning.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InstitutionalCard
            meta="1"
            title="Capture reality"
            summary="Collect current site evidence from cameras, 360 walks, drones, sensors, BIM context, and project systems."
          />
          <InstitutionalCard
            meta="2"
            title="Establish truth"
            summary="Make the record time-aligned, location-aware, searchable, and reliable enough to support project responsibility."
          />
          <InstitutionalCard
            meta="3"
            title="Interpret change"
            summary="Use comparison, search, AI, annotation, and reporting to explain what changed and why it matters."
          />
          <InstitutionalCard
            meta="4"
            title="Route action"
            summary="Turn findings into observations, tasks, escalations, closeout, weekly reporting, or project learning."
          />
        </div>
      </Section>
      <Section
        summary="Each layer depends on the layer below it. The value increases as teams move from capture to evidence, interpretation, action, and command."
        title="The RDI stack"
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
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Visibility', 'Can I see the site clearly and review what happened?'],
            ['Evidence', 'Can the record be trusted when responsibility, schedule, safety, cost, or quality is disputed?'],
            ['Action', 'Can the right person intervene because the right evidence reached the right workflow?'],
            ['Learning', 'Can recurring patterns improve how future projects are run?'],
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-6" key={title}>
              <h2 className="text-xl font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
