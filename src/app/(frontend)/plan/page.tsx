import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { SitePlanner } from '@/components/rdi/SitePlanner'

export const metadata: Metadata = {
  title: 'RDI Site Planner',
  description: 'Plan the RDI workflow packs and capture surfaces for a construction project.',
}

export default function PlanPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Plan"
        summary="The site planner translates project context into RDI workflow packs, capture priorities, and quote-ready requirements."
        title="Plan RDI coverage for a project"
      />
      <Section title="Site planner">
        <SitePlanner />
      </Section>
    </main>
  )
}
