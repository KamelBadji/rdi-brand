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
    summary: 'Use cases, workflow packs, triggers, activities, conclusions, evidence records, and cost models.',
    href: '/use-cases',
  },
  {
    title: 'Evidence quality',
    summary: 'How to judge whether a record is trustworthy enough for claims, safety, quality, and reporting.',
    href: '/workflows',
  },
  {
    title: 'ROI methodology',
    summary: 'How to separate operational savings, risk reduction, governance quality, and confidence ranges.',
    href: '/methodology',
  },
  {
    title: 'Learning paths',
    summary: 'Courses and role-based learning for commercial, project, safety, owner, and digital teams.',
    href: '/learn',
  },
  {
    title: 'Planning tools',
    summary: 'Readiness assessment, site planning, project brief, and workflow selection.',
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
        summary="A structured entry point for learning the concepts, workflows, evidence rules, and value methods behind Reality-Driven Intelligence."
        title="Learn the category before choosing the tools"
      />
      <Section
        summary="Start with the concept you are trying to understand, then follow the links into guides, workflows, and tools."
        title="Knowledge areas"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kbSections.map((section) => (
            <InstitutionalCard
              href={section.href}
              key={section.title}
              meta="Knowledge area"
              summary={section.summary}
              title={section.title}
            />
          ))}
        </div>
      </Section>
      <Section
        summary="These are the questions the knowledge base should make easier to answer."
        title="Canonical questions"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'What makes RDI different from camera visibility?',
            'How does a workflow differ from a feature?',
            'When does captured reality become admissible project evidence?',
            'Which workflows are mature enough for ROI modelling?',
            'What should a project capture plan include?',
            'How should leaders compare risk and progress across projects?',
          ].map((question) => (
            <div className="border border-border bg-white p-5 text-sm font-medium leading-6 text-rdi-ink" key={question}>
              {question}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-rdi-muted">
          For shorter definitions, use the <TextLink href="/glossary">glossary</TextLink>. For
          longer essays, browse <TextLink href="/resources">field notes</TextLink>.
        </p>
      </Section>
    </main>
  )
}
