import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CourseChapterNav } from '@/components/rdi/CourseChapterNav'
import { CoursePdfRequestForm } from '@/components/rdi/CoursePdfRequestForm'
import { Eyebrow, PageIntro } from '@/components/rdi/InstitutionalPage'
import { courses } from '@/lib/content/courses'

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

  const totalLessons = course.lessons.length
  const firstLesson = course.lessons[0]

  return (
    <main>
      <PageIntro
        eyebrow={`${course.level} course / ${course.estimatedMinutes} min`}
        summary={course.summary}
        title={course.title}
      />
      <section className="border-b border-border bg-background">
        <div className="container py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <CourseChapterNav course={course} />
            </aside>
            <div className="grid gap-12 max-w-[680px]">
              <div>
                <Eyebrow>Introduction</Eyebrow>
                <h2 className="text-[1.7rem] font-semibold leading-[1.18] text-rdi-ink md:text-[2.1rem]">
                  {course.longSummary ? '' : `Your guide to ${course.title.toLowerCase()}`}
                  {course.longSummary ? course.title : null}
                </h2>
                <div className="mt-6 grid gap-5 text-[1.05rem] leading-[1.75] text-rdi-ink">
                  <p>
                    {course.longSummary || course.summary}
                  </p>
                  {course.outcomes && course.outcomes.length > 0 ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
                        What you will learn
                      </p>
                      <ul className="mt-3 grid gap-2 pl-5">
                        {course.outcomes.map((outcome) => (
                          <li
                            className="list-disc text-[1.0125rem] leading-[1.7] text-rdi-ink marker:text-rdi-accent"
                            key={outcome}
                          >
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {course.audience && course.audience.length > 0 ? (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
                        Who this is for
                      </p>
                      <p className="mt-3 text-[1.0125rem] leading-[1.7] text-rdi-ink">
                        {course.audience.join(' · ')}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <Eyebrow>Chapters</Eyebrow>
                <h3 className="text-[1.3rem] font-semibold leading-[1.25] text-rdi-ink">
                  {totalLessons} chapter{totalLessons === 1 ? '' : 's'} · {course.estimatedMinutes} minutes
                </h3>
                <ol className="mt-6 grid gap-0 border border-border bg-white">
                  {course.lessons.map((lesson, index) => (
                    <li
                      className={index === 0 ? '' : 'border-t border-border'}
                      key={lesson.slug}
                    >
                      <Link
                        className="grid items-baseline gap-3 px-5 py-5 hover:bg-rdi-paper md:grid-cols-[110px_minmax(0,1fr)_70px] md:gap-6"
                        href={`/learn/${course.slug}/${lesson.slug}`}
                      >
                        <span className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
                          Chapter {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>
                          <span className="block text-[1.02rem] font-semibold leading-[1.35] text-rdi-ink">
                            {lesson.title}
                          </span>
                          <span className="mt-2 block text-sm leading-[1.6] text-rdi-muted">
                            {lesson.summary}
                          </span>
                        </span>
                        <span className="font-mono text-xs text-rdi-muted md:text-right">
                          {lesson.estimatedMinutes} min
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
                {firstLesson ? (
                  <Link
                    className="mt-6 inline-flex items-center gap-2 bg-rdi-ink px-6 py-3 font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-rdi-accent"
                    href={`/learn/${course.slug}/${firstLesson.slug}`}
                  >
                    Start Chapter 01 →
                  </Link>
                ) : null}
              </div>
              <div className="border border-border bg-rdi-paper p-8 md:p-10">
                <CoursePdfRequestForm courseTitle={course.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
