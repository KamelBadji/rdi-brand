import type { Metadata } from 'next'
import Link from 'next/link'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { LearningPathGraphic } from '@/components/rdi/RDIVisualSystem'
import { courses } from '@/lib/content/courses'

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

const levelOrder: Record<string, number> = {
  Foundation: 1,
  Practitioner: 2,
  Executive: 3,
}

export default function LearnPage() {
  const sorted = [...courses].sort((a, b) => {
    const levelDiff = (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99)
    if (levelDiff !== 0) return levelDiff
    return a.title.localeCompare(b.title)
  })
  const byLevel = new Map<string, typeof sorted>()
  for (const course of sorted) {
    const list = byLevel.get(course.level) || []
    list.push(course)
    byLevel.set(course.level, list)
  }

  const totalLessons = courses.reduce((sum, course) => sum + course.lessons.length, 0)
  const totalMinutes = courses.reduce((sum, course) => sum + course.estimatedMinutes, 0)

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
      <Section
        eyebrow="Catalogue"
        summary={`${courses.length} courses · ${totalLessons} lessons · ${totalMinutes} minutes of structured material.`}
        title="Available courses"
        tone="paper"
      >
        <div className="grid gap-10">
          {Array.from(byLevel.keys()).map((level) => (
            <div className="grid gap-4" key={level}>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <h3 className="text-lg font-semibold text-rdi-ink">{level}</h3>
                <span className="font-mono text-xs text-rdi-muted">
                  {byLevel.get(level)?.length} course(s)
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {byLevel.get(level)?.map((course) => (
                  <InstitutionalCard
                    href={`/learn/${course.slug}`}
                    key={course.slug}
                    meta={`${course.level} / ${course.lessons.length} lessons / ${course.estimatedMinutes} min`}
                    summary={course.summary}
                    title={course.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="By role" title="Suggested entry points">
        <ul className="grid divide-y divide-border border border-border bg-white md:grid-cols-2 md:divide-y-0">
          {[
            { role: 'Project director', path: '/learn/rdi-foundations' },
            { role: 'Commercial director', path: '/learn/rdi-foundations' },
            { role: 'Health and safety director', path: '/learn/rdi-foundations' },
            { role: 'Owner representative', path: '/learn/rdi-foundations' },
          ].map((entry, index) => (
            <li
              className={[
                'p-5',
                index > 1 ? 'md:border-t md:border-border' : '',
                index % 2 === 1 ? 'md:border-l md:border-border' : '',
              ].join(' ')}
              key={entry.role}
            >
              <p className="font-mono text-xs uppercase text-rdi-accent">For</p>
              <p className="mt-2 text-base font-semibold text-rdi-ink">{entry.role}</p>
              <Link
                className="mt-3 inline-flex text-sm font-medium text-rdi-accent hover:underline"
                href={entry.path}
              >
                Begin RDI Foundations →
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
