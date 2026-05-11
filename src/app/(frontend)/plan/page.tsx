import type { Metadata } from 'next'

import { Section } from '@/components/rdi/InstitutionalPage'
import { SitePlanner } from '@/components/rdi/SitePlanner'

export const metadata: Metadata = {
  title: 'RDI Site Planner',
  description: 'Plan the RDI workflow packs and capture surfaces for a construction project.',
}

export default function PlanPage() {
  return (
    <main>
      <Section
        summary="Select project conditions to identify relevant workflow packs and capture priorities."
        title="Plan RDI coverage for a project"
      >
        <SitePlanner />
      </Section>
    </main>
  )
}
