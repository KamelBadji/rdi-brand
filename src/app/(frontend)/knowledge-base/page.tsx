import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'

const kbSections = [
  {
    title: 'Foundations',
    summary: 'Definitions, category boundaries, the RDI stack, maturity model, and manifesto.',
    href: '/what-is-rdi',
  },
  {
    title: 'Workflows',
    summary: 'Workflow packs, triggers, evidence, decisions, actions, outcomes, and cost models.',
    href: '/use-cases',
  },
  {
    title: 'Evidence quality',
    summary: 'How to judge whether a record is trustworthy enough for claims, safety, quality, and reporting.',
    href: '/workflows',
  },
  {
    title: 'RDI economics',
    summary: 'How to separate confidence, evidence, capacity, risk reduction, and confidence ranges.',
    href: '/methodology',
  },
  {
    title: 'Learning paths',
    summary: 'Courses and role-based learning for commercial, project, safety, owner, and digital teams.',
    href: '/learn',
  },
  {
    title: 'Planning tools',
    summary: 'Maturity assessment, site planning, project brief, and workflow selection.',
    href: '/readiness',
  },
]

export const metadata: Metadata = {
  title: 'RDI Knowledge Base',
  description: 'A knowledge base for Reality-Driven Intelligence in construction.',
}

export default function KnowledgeBasePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Knowledge base"
        summary="Durable reference material for the concepts, workflows, evidence rules, and measurement methods that make up Reality-Driven Intelligence."
        title="RDI knowledge base"
      />
      <Section
        summary="Start with the concept you are trying to understand, then follow the links into definitions, workflows, and methods."
        title="Knowledge areas"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kbSections.map((section, index) => (
            <InstitutionalCard
              href={section.href}
              key={section.title}
              meta={`Area ${String(index + 1).padStart(2, '0')}`}
              summary={section.summary}
              title={section.title}
            />
          ))}
        </div>
      </Section>
      <Section
        summary="These are the questions the knowledge base should make easier to answer."
        title="Canonical questions"
        tone="paper"
      >
        <ul className="grid gap-0 border border-border bg-white md:grid-cols-2">
          {[
            'What makes RDI different from camera visibility?',
            'How does a workflow differ from a feature?',
            'When does captured reality become admissible project evidence?',
            'Which workflows are mature enough for ROI modelling?',
            'What should a project capture plan include?',
            'How should leaders compare risk and progress across projects?',
          ].map((question, index) => (
            <li
              className={[
                'grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4 p-6',
                index === 0 ? '' : 'border-t border-border',
                index % 2 === 1 ? 'md:border-l' : '',
                index < 4 ? 'md:border-b-0' : '',
              ].join(' ')}
              key={question}
            >
              <span className="font-mono text-sm font-semibold text-rdi-accent">
                Q{String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-[0.95rem] font-medium leading-[1.65] text-rdi-ink">{question}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          For shorter definitions, use the <TextLink href="/glossary">glossary</TextLink>. For
          longer essays, browse <TextLink href="/resources">field notes</TextLink>.
        </p>
      </Section>
    </main>
  )
}
