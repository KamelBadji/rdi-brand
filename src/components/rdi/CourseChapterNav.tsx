import Link from 'next/link'

import type { Course } from '@/lib/content/types'

export function CourseChapterNav({
  course,
  activeLessonSlug,
}: {
  course: Course
  activeLessonSlug?: string
}) {
  const introHref = `/learn/${course.slug}`
  const isIntroActive = !activeLessonSlug

  return (
    <nav aria-label={`${course.title} chapters`} className="text-[0.95rem] leading-[1.5]">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-rdi-muted">
        {course.level} course
      </p>
      <ul className="grid gap-0">
        <li>
          <Link
            className={[
              'relative block py-2 pl-4 text-rdi-ink transition-colors hover:text-rdi-accent',
              isIntroActive
                ? 'font-semibold text-rdi-ink before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.5rem)] before:w-[2px] before:bg-rdi-accent'
                : 'text-rdi-muted',
            ].join(' ')}
            href={introHref}
          >
            Introduction
          </Link>
        </li>
        {course.lessons.map((lesson, index) => {
          const isActive = lesson.slug === activeLessonSlug
          return (
            <li className="grid gap-0.5 pt-3" key={lesson.slug}>
              <span className="block pl-4 font-mono text-[11px] uppercase tracking-[0.12em] text-rdi-muted">
                Chapter {String(index + 1).padStart(2, '0')}
              </span>
              <Link
                className={[
                  'relative block py-1 pl-4 leading-[1.4] transition-colors hover:text-rdi-accent',
                  isActive
                    ? 'font-semibold text-rdi-ink before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.5rem)] before:w-[2px] before:bg-rdi-accent'
                    : 'text-rdi-muted',
                ].join(' ')}
                href={`/learn/${course.slug}/${lesson.slug}`}
              >
                {lesson.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
