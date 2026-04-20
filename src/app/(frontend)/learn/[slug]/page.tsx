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
          <ol className="border border-border bg-white">
            {course.lessons.map((lesson, index) => (
              <li
                className={[
                  'group',
                  index === 0 ? '' : 'border-t border-border',
                ].join(' ')}
                key={lesson.slug}
              >
                <Link
                  className="grid items-start gap-4 px-6 py-6 text-rdi-ink transition-colors group-hover:bg-rdi-paper md:grid-cols-[90px_minmax(0,1fr)_80px] md:gap-6"
                  href={`/learn/${course.slug}/${lesson.slug}`}
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                    Lesson {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-[1.3] tracking-tight text-rdi-ink">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] text-rdi-muted">{lesson.summary}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-rdi-muted md:self-center">
                    {lesson.estimatedMinutes} min
                  </div>
                </Link>
              </li>
            ))}
          </ol>
          <CourseProgressPanel course={course} />
        </div>
      </Section>
    </main>
  )
}
