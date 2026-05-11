import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { ROICalculator } from '@/components/rdi/ROICalculator'

export const metadata: Metadata = {
  title: 'RDI ROI Calculator',
  description:
    'A directional public calculator for Reality-Driven Intelligence value by workflow pack, evidence gap, action delay, and capacity.',
}

export default function ROIPage() {
  return (
    <main>
      <PageIntro
        summary="A directional calculator for estimating value by workflow pack, current process cost, evidence gap, and action delay."
        title="Estimate RDI value by workflow"
      />
      <Section
        summary="Choose the workflow pack first, then estimate current process cost, evidence gap, and action delay."
        title="Workflow-led estimate"
      >
        <ROICalculator />
        <p className="mt-6 max-w-3xl text-sm leading-[1.7] text-rdi-muted">
          The estimate is not a project-specific business case. See the{' '}
          <TextLink href="/methodology">RDI economics methodology</TextLink> for the public rules
          behind the calculation.
        </p>
      </Section>
    </main>
  )
}
