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
        eyebrow="Field notes"
        summary="Short public notes that clarify RDI concepts, workflow patterns, evidence quality, and value measurement."
        title="RDI field notes"
      />
      <Section
        summary="Each note should define a concept, explain a workflow, or clarify how RDI value is measured."
        title="Latest notes"
      >
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
