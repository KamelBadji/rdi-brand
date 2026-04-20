import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { ROICalculator } from '@/components/rdi/ROICalculator'
import { workflowPacks } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI ROI Calculator',
  description:
    'A directional public calculator for Reality-Driven Intelligence value: saved travel, evidence-led claims protection, and reporting time.',
}

export default function ROIPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ROI"
        summary="RDI value should be explainable. The public calculator is directional, focused on saved travel, evidence-led claims protection, and reporting time."
        title="Estimate the ROI of Reality-Driven Intelligence"
      />
      <Section title="Calculator">
        <ROICalculator />
        <p className="mt-6 max-w-3xl text-sm leading-[1.7] text-rdi-muted">
          The calculator is maintained by Evercam and published in public. See{' '}
          <TextLink href="/stewardship">stewardship</TextLink> for how Evercam&rsquo;s role as the
          initiator of RDI relates to the public material.
        </p>
      </Section>
      <Section
        summary="Each workflow pack connects to a different type of measurable value. The calculator should evolve by workflow, not by generic feature pricing."
        title="ROI by workflow pack"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-2 lg:grid-cols-4">
          {workflowPacks.map((pack, index) => (
            <div
              className={[
                'p-6',
                index === 0 ? '' : 'border-t border-border md:border-t-0',
                index % 4 !== 0 ? 'lg:border-l' : '',
                index % 2 !== 0 ? 'md:border-l' : '',
                index > 0 && index < 4 ? 'lg:border-t-0' : '',
                index >= 2 && index < 4 ? 'md:border-t' : '',
              ].join(' ')}
              key={pack.slug}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
                Pack
              </div>
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
