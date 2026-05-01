import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CourseChapterNav } from '@/components/rdi/CourseChapterNav'
import { CoursePdfRequestForm } from '@/components/rdi/CoursePdfRequestForm'
import { Eyebrow, PageIntro } from '@/components/rdi/InstitutionalPage'
import { courses } from '@/lib/content/courses'

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

  const lessonIndex = course.lessons.findIndex((item) => item.slug === lesson.slug)
  const previousLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null
  const nextLesson =
    lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null

  return (
    <main>
      <PageIntro
        eyebrow={`${course.title} · Chapter ${String(lessonIndex + 1).padStart(2, '0')} · ${lesson.estimatedMinutes} min`}
        summary={lesson.summary}
        title={lesson.title}
      />
      <section className="border-b border-border bg-background">
        <div className="container py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
              <CourseChapterNav course={course} activeLessonSlug={lesson.slug} />
              <div className="mt-8 hidden border-t border-border pt-6 lg:block">
                <Link
                  className="text-sm font-medium text-rdi-accent hover:underline"
                  href={`/learn/${course.slug}`}
                >
                  ← Course overview
                </Link>
              </div>
            </aside>
            <article className="grid gap-10 max-w-[700px]">
              <header>
                <Eyebrow>{`Chapter ${String(lessonIndex + 1).padStart(2, '0')}`}</Eyebrow>
                <h2 className="text-[1.9rem] font-semibold leading-[1.15] text-rdi-ink md:text-[2.2rem]">
                  {lesson.title}
                </h2>
                <p className="mt-4 text-[1.05rem] leading-[1.65] text-rdi-muted">
                  {lesson.summary}
                </p>
              </header>
              <div className="grid gap-10">
                {lesson.sections.map((section, index) => (
                  <section key={`${section.title}-${index}`}>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-[1.4rem] font-semibold leading-[1.2] text-rdi-ink md:text-[1.55rem]">
                      {section.title}
                    </h3>
                    <p className="mt-4 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-rdi-ink">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
              {lesson.exercises && lesson.exercises.length > 0 ? (
                <section className="border border-border bg-rdi-paper p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
                    Practice
                  </p>
                  <ol className="mt-4 grid gap-4">
                    {lesson.exercises.map((exercise, index) => (
                      <li className="grid gap-2" key={`${exercise.prompt}-${index}`}>
                        <p className="font-semibold text-rdi-ink">
                          {String(index + 1).padStart(2, '0')}. {exercise.prompt}
                        </p>
                        {exercise.expectedAnswer ? (
                          <p className="text-sm leading-[1.7] text-rdi-muted">
                            <span className="font-semibold text-rdi-ink">Look for: </span>
                            {exercise.expectedAnswer}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}
              <section className="border-t border-border pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-muted">
                  Checkpoint
                </p>
                <p className="mt-3 text-[1.1rem] font-semibold leading-[1.55] text-rdi-ink">
                  {lesson.checkpoint}
                </p>
              </section>
              {lesson.recommendedReading && lesson.recommendedReading.length > 0 ? (
                <section>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
                    Recommended reading
                  </p>
                  <ul className="mt-4 grid gap-2">
                    {lesson.recommendedReading.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="text-rdi-ink hover:text-rdi-accent"
                          href={item.href}
                        >
                          → {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              <nav
                aria-label="Course navigation"
                className="grid gap-3 border-t border-border pt-6 md:grid-cols-2"
              >
                {previousLesson ? (
                  <Link
                    className="block border border-border bg-white p-4 hover:border-rdi-accent"
                    href={`/learn/${course.slug}/${previousLesson.slug}`}
                  >
                    <span className="block font-mono text-xs uppercase tracking-[0.12em] text-rdi-muted">
                      ← Previous chapter
                    </span>
                    <span className="mt-1 block text-[0.98rem] font-semibold text-rdi-ink">
                      {previousLesson.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {nextLesson ? (
                  <Link
                    className="block border border-border bg-white p-4 text-right hover:border-rdi-accent md:text-right"
                    href={`/learn/${course.slug}/${nextLesson.slug}`}
                  >
                    <span className="block font-mono text-xs uppercase tracking-[0.12em] text-rdi-muted">
                      Next chapter →
                    </span>
                    <span className="mt-1 block text-[0.98rem] font-semibold text-rdi-ink">
                      {nextLesson.title}
                    </span>
                  </Link>
                ) : null}
              </nav>
              <div className="mt-4 border border-border bg-rdi-paper p-8 md:p-10">
                <CoursePdfRequestForm courseTitle={course.title} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
