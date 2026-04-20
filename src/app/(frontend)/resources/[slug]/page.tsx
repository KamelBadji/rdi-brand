import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { initialPosts } from '@/lib/rdi-data'

export function generateStaticParams() {
  return initialPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = initialPosts.find((item) => item.slug === slug)

  return {
    title: post ? `${post.title} | RDI Resources` : 'RDI Resource',
    description: post?.summary,
  }
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = initialPosts.find((item) => item.slug === slug)

  if (!post) notFound()

  return (
    <main>
      <PageIntro eyebrow={post.date} summary={post.summary} title={post.title} />
      <Section title="Working note">
        <div className="prose prose-lg max-w-3xl">
          <p>
            This article is seeded as part of the first RDI resource library. The production
            version should use the CMS editorial workflow, attach sources, and connect each article
            to relevant workflow packs and calculator assumptions.
          </p>
          <p>
            The important editorial standard is simple: every resource should define a problem,
            explain the RDI angle, show how it connects to real site workflows, and make the next
            decision clearer.
          </p>
        </div>
      </Section>
    </main>
  )
}
