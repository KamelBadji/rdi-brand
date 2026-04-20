import type { Metadata } from 'next'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { initialPosts } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'RDI Resources',
  description: 'RDI articles, field notes, methodology, and templates.',
}

export default function ResourcesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Resources"
        summary="The resource center is where RDI thinking becomes durable: articles, methodology, templates, glossary, and field notes."
        title="RDI resources and field notes"
      />
      <Section title="Latest thinking">
        <div className="grid gap-4 md:grid-cols-3">
          {initialPosts.map((post) => (
            <InstitutionalCard
              href={`/resources/${post.slug}`}
              key={post.slug}
              meta={post.date}
              summary={post.summary}
              title={post.title}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
