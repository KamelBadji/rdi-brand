import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { LearningPathGraphic } from '@/components/rdi/RDIVisualSystem'
import { courses } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Learning Center',
  description: 'Structured RDI learning paths, reference material, and practice exercises.',
}

const learningAreas = [
  {
    title: 'Start here',
    summary: 'Learn the definition, stack, decision loop, maturity curve, and category boundaries.',
    href: '/learn/rdi-foundations',
  },
  {
    title: 'Reference',
    summary: 'Use the knowledge base and glossary for durable definitions and shared vocabulary.',
    href: '/knowledge-base',
  },
  {
    title: 'Practice',
    summary: 'Apply workflow packs to progress, claims, logistics, safety, reporting, and quality.',
    href: '/use-cases',
  },
  {
    title: 'Assessment',
    summary: 'Use the maturity assessment to find where evidence stops before it changes a decision.',
    href: '/readiness',
  },
]

export default function LearnPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Learn"
        summary="The learning center is for teams that need a shared language for site evidence, workflow design, value measurement, and command."
        title="Learn Reality-Driven Intelligence"
      />
      <Section
        eyebrow="Path"
        summary="The public learning path starts with foundations, then moves into reference, practice, assessment, and future certification."
        title="Learning sequence"
      >
        <LearningPathGraphic steps={learningAreas} />
      </Section>
      <Section title="Available courses" tone="paper">
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <InstitutionalCard
              href={`/learn/${course.slug}`}
              key={course.slug}
              meta={`${course.level} course / ${course.estimatedMinutes} min`}
              summary={course.summary}
              title={course.title}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
