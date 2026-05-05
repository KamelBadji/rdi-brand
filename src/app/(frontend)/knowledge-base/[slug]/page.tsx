import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArticleBody } from '@/components/rdi/ArticleBody'
import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'
import { knowledgeBaseAreas, knowledgeBaseArticles } from '@/lib/content/knowledge-base'

export function generateStaticParams() {
  return knowledgeBaseArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = knowledgeBaseArticles.find((item) => item.slug === slug)

  return {
    title: article ? `${article.title} | RDI Knowledge Base` : 'RDI Knowledge Base',
    description: article?.summary,
  }
}

export default async function KnowledgeBaseArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = knowledgeBaseArticles.find((item) => item.slug === slug)

  if (!article) notFound()

  const area = knowledgeBaseAreas.find((item) => item.slug === article.area)
  const related = (article.related || [])
    .map((relatedSlug) => knowledgeBaseArticles.find((item) => item.slug === relatedSlug))
    .filter(Boolean) as typeof knowledgeBaseArticles

  const sameArea = knowledgeBaseArticles
    .filter((item) => item.area === article.area && item.slug !== article.slug)
    .slice(0, 4)

  return (
    <main>
      <PageIntro
        eyebrow={`Knowledge base${area ? ` / ${area.title}` : ''}`}
        summary={article.summary}
        title={article.title}
      />
      <Section title="Article">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.66fr)_minmax(280px,0.34fr)]">
          <article className="border border-border bg-white p-8 md:p-10">
            <ArticleBody blocks={article.body} />
            <div className="mt-10 border-t border-border pt-6 text-sm text-rdi-muted">
              <p>
                Knowledge base articles are intended as durable reference. For shorter definitions,
                see the <TextLink href="/glossary">glossary</TextLink>. For shorter essays, browse{' '}
                <TextLink href="/resources">field notes</TextLink>.
              </p>
            </div>
          </article>
          <aside className="grid gap-6 self-start">
            <div className="border border-border bg-white p-5">
              <p className="font-mono text-xs uppercase text-rdi-accent">Article details</p>
              <dl className="mt-4 grid gap-3 text-sm text-rdi-muted">
                <div className="flex items-baseline justify-between gap-3">
                  <dt>Area</dt>
                  <dd className="text-rdi-ink">{area?.title || article.area}</dd>
                </div>
                {article.readingMinutes ? (
                  <div className="flex items-baseline justify-between gap-3">
                    <dt>Reading time</dt>
                    <dd className="text-rdi-ink">{article.readingMinutes} min</dd>
                  </div>
                ) : null}
              </dl>
            </div>
            {related.length > 0 && (
              <div className="border border-border bg-rdi-paper p-5">
                <p className="font-mono text-xs uppercase text-rdi-accent">Linked articles</p>
                <ul className="mt-4 grid gap-3 text-sm">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        className="text-rdi-ink hover:text-rdi-accent"
                        href={`/knowledge-base/${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {sameArea.length > 0 && (
              <div className="border border-border bg-white p-5">
                <p className="font-mono text-xs uppercase text-rdi-accent">More in {area?.title || article.area}</p>
                <ul className="mt-4 grid gap-3 text-sm">
                  {sameArea.map((item) => (
                    <li key={item.slug}>
                      <Link
                        className="text-rdi-ink hover:text-rdi-accent"
                        href={`/knowledge-base/${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <div className="mt-10">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-rdi-accent hover:underline"
            href="/knowledge-base"
          >
            <span aria-hidden>←</span> All knowledge base
          </Link>
        </div>
      </Section>
    </main>
  )
}
