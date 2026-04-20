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
        <ol className="border border-border bg-white">
          {readinessAreas.map((item, index) => (
            <li
              className={[
                'grid items-start gap-4 px-6 py-6 md:grid-cols-[64px_minmax(0,0.3fr)_minmax(0,0.7fr)] md:gap-8',
                index === 0 ? '' : 'border-t border-border',
              ].join(' ')}
              key={item.area}
            >
              <div className="flex size-12 items-center justify-center border border-rdi-ink font-mono text-base font-semibold text-rdi-ink">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="pt-1 text-lg font-semibold leading-[1.3] tracking-tight text-rdi-ink">
                {item.area}
              </h3>
              <p className="pt-1 text-[0.95rem] leading-[1.7] text-rdi-muted">{item.question}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section
        summary="The score is less important than the pattern. A weak area tells you where the first workflow will fail."
        title="Scoring guide"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {[
            {
              label: 'Low readiness',
              body: 'Records exist, but they are hard to retrieve, trust, route, or connect to outcomes.',
            },
            {
              label: 'Medium readiness',
              body: 'Core evidence exists, but workflows depend on manual follow-up and individual habits.',
            },
            {
              label: 'High readiness',
              body: 'Evidence, workflow ownership, action, closeout, and outcome tracking are already part of operating rhythm.',
            },
          ].map((tier, index) => (
            <div
              className={[
                'p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={tier.label}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                Tier {index + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-rdi-ink">{tier.label}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">{tier.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          Next: browse <TextLink href="/use-cases">workflow packs</TextLink> or build a first
          project outline in the <TextLink href="/plan">site planner</TextLink>.
        </p>
      </Section>
    </main>
  )
}
