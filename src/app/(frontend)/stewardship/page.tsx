import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { publicStewardship } from '@/lib/rdi-copy'

export const metadata: Metadata = {
  title: 'RDI Stewardship',
  description:
    'How Reality-Driven Intelligence is maintained in public, and where the boundary sits between the framework and private implementation work.',
}

const boundary = [
  {
    side: 'Public reference',
    label: 'Open',
    rows: [
      'Definitions and principles',
      'RDI stack and decision loop',
      'Workflow categories and workflow library',
      'Maturity model and assessment',
      'Value methodology and directional calculator',
      'Learning material, glossary, and field notes',
    ],
  },
  {
    side: 'Protected implementation',
    label: 'Protected',
    rows: [
      'Customer and project data',
      'Project-specific benchmarks',
      'Production ROI reports for named engagements',
      'Quote logic, pricing, and commercial workflow',
      'Sales intelligence and pipeline',
      'Product roadmap decisions',
    ],
  },
]

const contributionPaths = [
  {
    title: 'Critique a definition',
    body: 'Point out where a definition, stack layer, or workflow is imprecise, overfit, or wrong.',
  },
  {
    title: 'Propose a workflow',
    body: 'Suggest a construction workflow with trigger, evidence, decision, action, and outcome.',
  },
  {
    title: 'Use it in practice',
    body: 'Apply the vocabulary in a team, course, project review, procurement document, or paper.',
  },
]

export default function StewardshipPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Stewardship"
        summary={publicStewardship}
        title="How RDI is stewarded"
      />

      <Section
        eyebrow="Origin"
        summary="RDI was initiated by Evercam and is maintained in public because construction needs shared language for evidence, workflows, and outcome measurement."
        title="A framework for the field"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="grid gap-5 text-lg leading-[1.7] text-rdi-ink">
            <p>
              The framework was written down so owners, contractors, insurers, technologists,
              consultants, and researchers can discuss construction intelligence without reducing
              the topic to a single product category.
            </p>
            <p>
              Evercam remains the initiator and current maintainer. The public material is intended
              to be useful beyond Evercam, including to teams that reach the same problems through
              different tools.
            </p>
          </div>
          <aside className="self-start border border-border bg-rdi-paper p-7">
            <p className="text-sm font-semibold text-rdi-accent">In one line</p>
            <p className="mt-4 text-2xl font-semibold leading-[1.35] text-rdi-ink">
              The framework belongs to the field. Evercam initiated it and maintains it.
            </p>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Boundary"
        summary="Category credibility depends on separating public reference material from customer data, private benchmarks, and implementation details."
        title="What is public and what is protected"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {boundary.map((column, index) => (
            <div
              className={[
                'p-6 md:p-8',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
                index === 1 ? 'bg-rdi-ink text-white' : '',
              ].join(' ')}
              key={column.side}
            >
              <p className={index === 1 ? 'text-sm font-semibold text-white/65' : 'text-sm font-semibold text-rdi-accent'}>
                {column.label}
              </p>
              <h3 className={index === 1 ? 'mt-3 text-2xl font-semibold' : 'mt-3 text-2xl font-semibold text-rdi-ink'}>
                {column.side}
              </h3>
              <ul
                className={[
                  'mt-5 grid gap-3 border-t pt-5 text-sm leading-[1.7]',
                  index === 1 ? 'border-white/15 text-white/85' : 'border-border text-rdi-ink',
                ].join(' ')}
              >
                {column.rows.map((row) => (
                  <li className="flex items-start gap-3" key={row}>
                    <span
                      aria-hidden
                      className={[
                        'mt-2 size-1.5 shrink-0',
                        index === 1 ? 'bg-white/50' : 'bg-rdi-accent',
                      ].join(' ')}
                    />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contribution"
        summary="The framework should improve as it is challenged by real project work."
        title="How to contribute"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {contributionPaths.map((card, index) => (
            <div
              className={[
                'p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={card.title}
            >
              <p className="text-sm font-semibold text-rdi-accent">Path {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-rdi-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-[1.7] text-rdi-muted">
          Contributions and corrections can be sent to{' '}
          <a
            className="font-medium text-rdi-accent underline decoration-rdi-accent/40 underline-offset-4 hover:decoration-rdi-accent"
            href="mailto:rdi@evercam.io"
          >
            rdi@evercam.io
          </a>
          . Accepted public material will be credited here.
        </p>
      </Section>

      <Section
        eyebrow="Use"
        summary="The framework is published for practitioners to read, teach, and reference. A formal license for derivative publication is being prepared."
        title="Use and adaptation"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-2">
          <div className="p-6 md:p-8">
            <p className="text-sm font-semibold text-rdi-accent">Free to do now</p>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.7] text-rdi-ink">
              <li>Read the material.</li>
              <li>Teach from it inside teams, courses, and training programs.</li>
              <li>Quote short passages with attribution in articles and presentations.</li>
              <li>Reference the definitions in professional documents.</li>
            </ul>
          </div>
          <div className="border-t border-border p-6 md:border-l md:border-t-0 md:p-8">
            <p className="text-sm font-semibold text-rdi-muted">Coordinate first</p>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.7] text-rdi-ink">
              <li>Republishing the framework under another name or domain.</li>
              <li>Commercial derivative material, including training and certification products.</li>
              <li>Translations or adaptations of the manifesto and stack.</li>
              <li>Embedding the material as source of truth inside another platform.</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          See also the <TextLink href="/manifesto">manifesto</TextLink> and the{' '}
          <TextLink href="/what-is-rdi">RDI definition</TextLink>.
        </p>
      </Section>
    </main>
  )
}
