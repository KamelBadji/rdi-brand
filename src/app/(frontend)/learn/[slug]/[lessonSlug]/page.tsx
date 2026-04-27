import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { CourseProgressPanel } from '@/components/rdi/CourseProgressPanel'
import { courses } from '@/lib/rdi-data'

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      lessonSlug: lesson.slug,
      slug: course.slug,
    })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonSlug: string; slug: string }>
}): Promise<Metadata> {
  const { lessonSlug, slug } = await params
  const course = courses.find((item) => item.slug === slug)
  const lesson = course?.lessons.find((item) => item.slug === lessonSlug)

  return {
    title: lesson ? `${lesson.title} | ${course?.title}` : 'RDI Lesson',
    description: lesson?.summary,
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonSlug: string; slug: string }>
}) {
  const { lessonSlug, slug } = await params
  const course = courses.find((item) => item.slug === slug)
  const lesson = course?.lessons.find((item) => item.slug === lessonSlug)

  if (!course || !lesson) notFound()

  return (
    <main>
      <PageIntro
        eyebrow={`${course.level} course / ${lesson.estimatedMinutes} min`}
        summary={lesson.summary}
        title={lesson.title}
      />
      <Section title="Lesson">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)]">
          <article className="border border-border bg-white p-8 md:p-10">
            <div className="grid gap-10">
              {lesson.sections.map((section, index) => (
                <section key={section.title}>
                  <div className="font-mono text-xs uppercase text-rdi-accent">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="mt-3 text-[1.5rem] font-semibold text-rdi-ink">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[1.0625rem] leading-[1.75] text-rdi-ink">
                    {section.body}
                  </p>
                </section>
              ))}
              <section className="border-t border-border pt-6">
                <div className="font-mono text-xs uppercase text-rdi-muted">
                  Checkpoint
                </div>
                <p className="mt-3 text-[1.0625rem] font-semibold leading-[1.6] text-rdi-ink">
                  {lesson.checkpoint}
                </p>
              </section>
              <Link
                className="inline-flex items-center gap-2 font-medium text-rdi-accent hover:underline"
                href={`/learn/${course.slug}`}
              >
                <span aria-hidden>←</span> Back to course
              </Link>
            </div>
          </article>
          <CourseProgressPanel course={course} />
        </div>
      </Section>
    </main>
  )
}
