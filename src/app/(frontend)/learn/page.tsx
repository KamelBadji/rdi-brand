import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { courses } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Courses',
  description: 'Structured RDI learning paths for construction teams.',
}

export default function LearnPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Learn"
        summary="Structured RDI courses for teams that need a shared language for site evidence, workflow design, ROI, and project control."
        title="Reality-Driven Intelligence courses"
      />
      <Section title="Available courses">
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <InstitutionalCard
              href={`/learn/${course.slug}`}
              key={course.slug}
              meta={`${course.level} / ${course.estimatedMinutes} min`}
              summary={course.summary}
              title={course.title}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
