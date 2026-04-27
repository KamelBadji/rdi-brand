import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { ROICalculator } from '@/components/rdi/ROICalculator'
import { ValueSystemGraphic } from '@/components/rdi/RDIVisualSystem'
import { workflowPacks } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI ROI Calculator',
  description:
    'A directional public calculator for Reality-Driven Intelligence value by workflow pack, evidence gap, action delay, and capacity.',
}

export default function ROIPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ROI calculator"
        summary="This public calculator is directional. It makes workflow assumptions visible so teams can discuss RDI economics without pretending the number is guaranteed."
        title="Estimate RDI value by workflow"
      />
      <Section
        eyebrow="Calculator"
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
      <Section
        eyebrow="Value frame"
        summary="The calculator separates predictable effort reduction from evidence quality and organizational capacity."
        title="Confidence, evidence, capacity"
        tone="paper"
      >
        <ValueSystemGraphic />
      </Section>
      <Section
        eyebrow="Workflow packs"
        summary="Each workflow pack carries a different value pattern. The public calculator should evolve by workflow, not by generic feature pricing."
        title="Value by workflow pack"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-2 lg:grid-cols-4">
          {workflowPacks.map((pack, index) => (
            <div
              className={[
                'p-6',
                index === 0 ? '' : 'border-t border-border md:border-t-0',
                index % 4 !== 0 ? 'lg:border-l' : '',
                index % 2 !== 0 ? 'md:border-l' : '',
                index >= 2 ? 'md:border-t lg:border-t-0' : '',
              ].join(' ')}
              key={pack.slug}
            >
              <p className="text-sm font-semibold text-rdi-accent">Pack</p>
              <h3 className="mt-3 text-lg font-semibold text-rdi-ink">{pack.title}</h3>
              <ul className="mt-4 grid gap-2 text-sm leading-[1.7] text-rdi-muted">
                {pack.roiThemes.map((theme) => (
                  <li className="flex items-start gap-2" key={theme}>
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-rdi-accent" />
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
