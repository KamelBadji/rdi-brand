import type { Metadata } from 'next'
import Link from 'next/link'

import { InstitutionalCard, PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { knowledgeBaseAreas, knowledgeBaseArticles } from '@/lib/content/knowledge-base'

export const metadata: Metadata = {
  title: 'RDI Knowledge Base',
  description: 'A knowledge base for Reality-Driven Intelligence in construction.',
}

export default function KnowledgeBasePage() {
  const articlesByArea = new Map<string, typeof knowledgeBaseArticles>()
  for (const article of knowledgeBaseArticles) {
    const list = articlesByArea.get(article.area) || []
    list.push(article)
    articlesByArea.set(article.area, list)
  }

  return (
    <main>
      <PageIntro
        summary="Reference material for the concepts, workflows, evidence rules, and measurement methods that make up Reality-Driven Intelligence."
        title="RDI knowledge base"
      />
      <Section
        summary="Use this page as the reference index. Deeper explanations live on the article pages."
        title="Reference index"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {knowledgeBaseAreas.map((area, index) => {
            const count = articlesByArea.get(area.slug)?.length || 0

            return (
              <InstitutionalCard
                href={`#area-${area.slug}`}
                key={area.slug}
                meta={`Area ${String(index + 1).padStart(2, '0')} / ${count} article${count === 1 ? '' : 's'}`}
                summary={area.summary}
                title={area.title}
              />
            )
          })}
        </div>
      </Section>
      {knowledgeBaseAreas.map((area) => {
        const articles = articlesByArea.get(area.slug) || []
        if (articles.length === 0) return null

        return (
          <Section
            id={`area-${area.slug}`}
            key={area.slug}
            summary={area.summary}
            title={area.title}
            tone="paper"
          >
            <ul className="grid divide-y divide-border border border-border bg-white">
              {articles.map((article, index) => (
                <li key={article.slug}>
                  <Link
                    className="grid gap-2 px-6 py-5 hover:bg-rdi-paper md:grid-cols-[80px_minmax(0,1fr)_70px] md:items-baseline md:gap-6"
                    href={`/knowledge-base/${article.slug}`}
                  >
                    <span className="font-mono text-xs uppercase text-rdi-accent">
                      KB {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-[1.02rem] font-semibold leading-[1.35] text-rdi-ink">
                        {article.title}
                      </span>
                      <span className="mt-2 block text-sm leading-[1.6] text-rdi-muted">
                        {article.summary}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-rdi-muted md:text-right">
                      {article.readingMinutes ? `${article.readingMinutes} min` : ''}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )
      })}
    </main>
  )
}
