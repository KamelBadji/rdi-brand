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
        summary="The site planner maps a project profile to RDI workflow packs and capture priorities, as a starting brief for deeper conversations with project teams and suppliers."
        title="Plan RDI coverage for a project"
      />
      <Section title="Site planner">
        <SitePlanner />
      </Section>
    </main>
  )
}
