import type { ArticleBlock } from '@/lib/content/types'

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="grid gap-6">
      {blocks.map((block, index) => {
        const key = `${block.kind}-${index}`
        if (block.kind === 'heading') {
          return (
            <h2
              className="mt-2 text-[1.4rem] font-semibold leading-[1.2] text-rdi-ink md:text-[1.55rem]"
              key={key}
            >
              {block.body}
            </h2>
          )
        }
        if (block.kind === 'list') {
          return (
            <ul className="grid gap-2 pl-5" key={key}>
              {block.items.map((item, itemIndex) => (
                <li
                  className="list-disc text-[1.0125rem] leading-[1.7] text-rdi-ink marker:text-rdi-accent"
                  key={`${key}-${itemIndex}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        if (block.kind === 'pullquote') {
          return (
            <blockquote
              className="border-l-2 border-rdi-accent bg-rdi-paper px-6 py-5 text-[1.1rem] italic leading-[1.6] text-rdi-ink"
              key={key}
            >
              <p>&ldquo;{block.body}&rdquo;</p>
              {block.attribution ? (
                <footer className="mt-3 text-sm not-italic text-rdi-muted">— {block.attribution}</footer>
              ) : null}
            </blockquote>
          )
        }
        if (block.kind === 'callout') {
          return (
            <aside
              className="border border-border bg-white p-5"
              key={key}
            >
              <p className="font-mono text-xs uppercase tracking-wide text-rdi-accent">
                {block.title}
              </p>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-rdi-ink">{block.body}</p>
            </aside>
          )
        }
        return (
          <p className="text-[1.0625rem] leading-[1.75] text-rdi-ink" key={key}>
            {block.body}
          </p>
        )
      })}
    </div>
  )
}
