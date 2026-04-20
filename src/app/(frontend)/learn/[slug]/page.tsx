import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { CourseProgressPanel } from '@/components/rdi/CourseProgressPanel'
import { courses } from '@/lib/rdi-data'

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = courses.find((item) => item.slug === slug)

  return {
    title: course ? `${course.title} | RDI Course` : 'RDI Course',
    description: course?.summary,
  }
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses.find((item) => item.slug === slug)

  if (!course) notFound()

  return (
    <main>
      <PageIntro
        eyebrow={`${course.level} course / ${course.estimatedMinutes} min`}
        summary={course.summary}
        title={course.title}
      />
      <Section title="Lessons">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)]">
          <div className="grid gap-4">
          {course.lessons.map((lesson, index) => (
            <Link
              className="grid gap-4 border border-border bg-white p-5 text-rdi-ink hover:border-rdi-accent md:grid-cols-[80px_1fr_120px]"
              href={`/learn/${course.slug}/${lesson.slug}`}
              key={lesson.slug}
            >
              <div className="font-mono text-sm text-rdi-accent">Lesson {index + 1}</div>
              <div>
                <h2 className="text-xl font-semibold text-rdi-ink">{lesson.title}</h2>
                <p className="mt-2 text-sm leading-6 text-rdi-muted">{lesson.summary}</p>
              </div>
              <div className="font-mono text-sm text-rdi-muted">{lesson.estimatedMinutes} min</div>
            </Link>
          ))}
          </div>
          <CourseProgressPanel course={course} />
        </div>
      </Section>
    </main>
  )
}
