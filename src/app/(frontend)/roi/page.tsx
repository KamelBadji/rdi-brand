import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { ROICalculator } from '@/components/rdi/ROICalculator'
import { workflowPacks } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI ROI Calculator',
  description: 'Estimate the measurable value of RDI workflow packs.',
}

export default function ROIPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ROI"
        summary="RDI value should be explainable. The first calculator focuses on saved travel, evidence-led claims protection, and reporting time."
        title="Estimate the ROI of Reality-Driven Intelligence"
      />
      <Section title="Calculator">
        <ROICalculator />
      </Section>
      <Section
        summary="Each workflow pack connects to a different type of measurable value. The calculator should evolve by workflow, not by generic feature pricing."
        title="ROI by workflow pack"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workflowPacks.map((pack) => (
            <div className="border border-border bg-white p-5" key={pack.slug}>
              <h2 className="text-lg font-semibold text-rdi-ink">{pack.title}</h2>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-rdi-muted">
                {pack.roiThemes.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
