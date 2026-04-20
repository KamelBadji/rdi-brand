import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'

export const metadata: Metadata = {
  title: 'RDI Stewardship',
  description:
    'How Reality-Driven Intelligence is maintained: originator, contributors, publication rules, and the line between the public framework and commercial product work.',
}

const boundary = [
  {
    side: 'Public reference',
    rows: [
      'Manifesto and principles',
      'The RDI stack and decision loop',
      'Workflow library, triggers, activities, conclusions, evidence',
      'Maturity model',
      'Measurement methodology and directional ROI calculator',
      'Glossary and knowledge base',
    ],
  },
  {
    side: 'Protected / Evercam-internal',
    rows: [
      'Customer and project data',
      'Project-specific benchmarks and ground-truth datasets',
      'Production ROI modelling for specific engagements',
      'Quote logic, pricing, and commercial workflows',
      'Sales intelligence and pipeline',
      'Product roadmap decisions',
    ],
  },
]

export default function StewardshipPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Stewardship"
        summary="Reality-Driven Intelligence is published in public so that teams, owners, insurers, and researchers can share a vocabulary for construction intelligence. This page records how that material is maintained."
        title="How RDI is stewarded"
      />

      <Section title="Origin">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="text-[1.0625rem] leading-[1.8] text-rdi-ink">
            <p>
              RDI was first articulated by Evercam while building ground-truth capture and workflow
              systems for major construction projects. The framework was written down so the same
              vocabulary could be used by the teams, owners, insurers, and contractors who were
              already encountering the work on site, each from a different angle.
            </p>
            <p className="mt-5">
              The material on this site is maintained as a neutral reference. It is intended to be
              useful to any practitioner, supplier, researcher, or institution working on
              construction intelligence — including teams that do not use Evercam&rsquo;s tooling
              and competitors that reach the same problems through different products.
            </p>
          </div>
          <aside className="self-start border border-border bg-rdi-paper p-6 md:p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
              In one line
            </div>
            <p className="mt-4 text-[1.25rem] font-semibold leading-[1.4] tracking-[-0.01em] text-rdi-ink">
              The framework belongs to the field. Evercam initiated it and maintains it.
            </p>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Scope"
        summary="The public material and the internal product work are kept on separate sides of a clear line. That is deliberate: category credibility depends on the first, commercial viability on the second."
        title="What is public and what is protected"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {boundary.map((column, index) => (
            <div
              className={[
                'p-6 md:p-8',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
                column.side === 'Protected / Evercam-internal' ? 'bg-rdi-ink text-white' : '',
              ].join(' ')}
              key={column.side}
            >
              <div
                className={[
                  'font-mono text-[11px] uppercase tracking-[0.14em]',
                  column.side === 'Protected / Evercam-internal'
                    ? 'text-white/65'
                    : 'text-rdi-accent',
                ].join(' ')}
              >
                {column.side === 'Public reference' ? 'Open' : 'Protected'}
              </div>
              <h3
                className={[
                  'mt-3 text-[1.375rem] font-semibold tracking-tight',
                  column.side === 'Protected / Evercam-internal' ? '' : 'text-rdi-ink',
                ].join(' ')}
              >
                {column.side}
              </h3>
              <ul
                className={[
                  'mt-5 grid gap-3 border-t pt-5 text-sm leading-[1.7]',
                  column.side === 'Protected / Evercam-internal'
                    ? 'border-white/15 text-white/85'
                    : 'border-border text-rdi-ink',
                ].join(' ')}
              >
                {column.rows.map((row) => (
                  <li className="flex items-start gap-3" key={row}>
                    <span
                      aria-hidden
                      className={[
                        'mt-2 size-1.5 shrink-0',
                        column.side === 'Protected / Evercam-internal'
                          ? 'bg-white/50'
                          : 'bg-rdi-accent',
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
        eyebrow="Contributions"
        summary="External contributors will be credited here as the framework is reviewed and extended. The intent is for RDI to be a multi-voice reference rather than one company's point of view."
        title="How to contribute"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {[
            {
              kicker: 'Review',
              title: 'Critique a definition',
              body: 'Point out where a definition, stack layer, or workflow is imprecise, overfit, or wrong. Clear counter-examples from real projects are especially useful.',
            },
            {
              kicker: 'Extend',
              title: 'Propose a workflow',
              body: 'Suggest a construction workflow that belongs in the reference library, with trigger, activity, conclusion, and the kind of evidence that would make it trustworthy.',
            },
            {
              kicker: 'Teach',
              title: 'Use it in practice',
              body: 'Adopt the vocabulary in a team, a course, a paper, a procurement document, or a project review — and tell us what broke or what was missing.',
            },
          ].map((card, index) => (
            <div
              className={[
                'p-6 md:p-7',
                index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              ].join(' ')}
              key={card.kicker}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                {card.kicker}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-rdi-ink">
                {card.title}
              </h3>
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
          . Material that is accepted into the public reference will be credited on this page.
        </p>
      </Section>

      <Section
        eyebrow="Licensing"
        summary="The framework is published for practitioners to read, teach, and reference. A formal license governing derivative publication is being prepared."
        title="Use and adaptation"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
              Free today
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.7] text-rdi-ink">
              <li>— Reading the material.</li>
              <li>— Teaching from it inside teams, courses, and training programmes.</li>
              <li>— Quoting short passages with attribution in articles and presentations.</li>
              <li>— Referencing the definitions in professional documents.</li>
            </ul>
          </div>
          <div className="border-t border-border p-6 md:border-l md:border-t-0 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
              Please coordinate
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.7] text-rdi-ink">
              <li>— Re-publishing the framework under another name or domain.</li>
              <li>— Commercial derivative material (training products, certification programmes).</li>
              <li>— Translations or adaptations of the manifesto and stack.</li>
              <li>— Embedding the material as source-of-truth inside another platform.</li>
            </ul>
            <p className="mt-5 text-sm leading-[1.7] text-rdi-muted">
              These will be covered by the formal license when it is posted. In the meantime,
              please write to rdi@evercam.io to coordinate.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          See also the <TextLink href="/manifesto">manifesto</TextLink> and the{' '}
          <TextLink href="/what-is-rdi">RDI guide</TextLink>.
        </p>
      </Section>
    </main>
  )
}
