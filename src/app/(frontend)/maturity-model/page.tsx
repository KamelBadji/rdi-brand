import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { MaturityLadderGraphic } from '@/components/rdi/RDIInfographics'

export const metadata: Metadata = {
  title: 'RDI Maturity Model',
  description:
    'A maturity model for construction teams moving from site visibility to Reality-Driven Intelligence.',
}

export default function MaturityModelPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Maturity model"
        summary="A practical way to judge whether construction technology is still showing the site or starting to run reliable decision loops."
        title="From visibility to command"
      />
      <Section
        summary="The model is deliberately simple: each level adds a stronger relationship between reality, evidence, action, and leadership attention."
        title="The five maturity levels"
      >
        <MaturityLadderGraphic />
      </Section>
      <Section
        summary="Use the model to identify the missing layer in a workflow before buying, building, or deploying more technology."
        title="How to use it"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InstitutionalCard
            title="Audit the current state"
            meta="Step 1"
            summary="List the workflows where the team already captures reality and identify whether the record is searchable, trustworthy, and tied to project context."
          />
          <InstitutionalCard
            title="Find the broken loop"
            meta="Step 2"
            summary="Ask where evidence stops. If the output remains in a dashboard, inbox, or archive, the workflow has not reached action."
          />
          <InstitutionalCard
            title="Prioritize the next layer"
            meta="Step 3"
            summary="Invest where the next layer will change decisions: claims, safety, progress verification, logistics, quality, or stakeholder reporting."
          />
        </div>
      </Section>
      <Section
        summary="A high-maturity RDI workflow has signs you can observe in day-to-day project behaviour."
        title="Signals of maturity"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Evidence is requested by workflow, not by camera name.',
            'Site exceptions create observations, tasks, or escalations.',
            'Claims and incidents can be reconstructed without manual searching.',
            'Leaders can compare risk and progress patterns across projects.',
            'Weekly meetings use ground-truth records rather than memory alone.',
            'ROI is discussed by workflow outcome, not by footage volume.',
          ].map((signal) => (
            <div className="border border-border bg-white p-5 text-sm font-medium leading-6 text-rdi-ink" key={signal}>
              {signal}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-rdi-muted">
          Next: compare the model with the <TextLink href="/rdi-vs-cameras-ai-dashboards">RDI vs tools</TextLink>{' '}
          guide.
        </p>
      </Section>
    </main>
  )
}
