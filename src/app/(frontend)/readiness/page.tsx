import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'

const readinessAreas = [
  {
    area: 'Reality capture',
    question: 'Do critical areas, activities, and events have reliable visual or sensor coverage?',
  },
  {
    area: 'Evidence quality',
    question: 'Can records be trusted by time, location, project context, and preservation history?',
  },
  {
    area: 'Workflow ownership',
    question: 'Does each workflow have an owner who reviews, routes, and closes the loop?',
  },
  {
    area: 'Decision cadence',
    question: 'Are the records used in meetings, claims reviews, safety loops, or progress decisions?',
  },
  {
    area: 'Outcome measurement',
    question: 'Can the team measure time saved, risk reduced, disputes avoided, or decisions improved?',
  },
]

export const metadata: Metadata = {
  title: 'RDI Readiness Assessment',
  description:
    'A readiness assessment for construction teams adopting Reality-Driven Intelligence workflows.',
}

export default function ReadinessPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Readiness assessment"
        summary="RDI readiness is not about having the newest tools. It is about whether site reality can become trusted evidence and accountable action."
        title="Is the project ready for RDI?"
      />
      <Section
        summary="Use these five areas as a practical assessment before choosing workflows, calculating ROI, or building a site plan."
        title="Assessment areas"
      >
        <div className="grid gap-4">
          {readinessAreas.map((item, index) => (
            <div
              className="grid gap-4 border border-border bg-white p-5 md:grid-cols-[72px_0.25fr_1fr] md:items-center"
              key={item.area}
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-rdi-ink font-mono text-sm text-white">
                {index + 1}
              </div>
              <h2 className="text-xl font-semibold text-rdi-ink">{item.area}</h2>
              <p className="text-sm leading-6 text-rdi-muted">{item.question}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        summary="The score is less important than the pattern. A weak area tells you where the first workflow will fail."
        title="Scoring guide"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Low readiness', 'Records exist, but they are hard to retrieve, trust, route, or connect to outcomes.'],
            ['Medium readiness', 'Core evidence exists, but workflows depend on manual follow-up and individual habits.'],
            ['High readiness', 'Evidence, workflow ownership, action, closeout, and outcome tracking are already part of operating rhythm.'],
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-6" key={title}>
              <h2 className="text-xl font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-rdi-muted">
          Next: browse <TextLink href="/use-cases">workflow packs</TextLink> or build a first
          project outline in the <TextLink href="/plan">site planner</TextLink>.
        </p>
      </Section>
    </main>
  )
}
