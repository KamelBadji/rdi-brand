import Link from 'next/link'
import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[13px] font-semibold uppercase leading-none text-rdi-accent md:text-sm">
      {children}
    </p>
  )
}

export function PageIntro({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow?: string
  title: string
  summary: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-border bg-rdi-paper">
      <div className="container grid gap-8 py-12 md:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)] md:py-16">
        <div className="max-w-4xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-balance text-[2rem] font-semibold leading-[1.12] text-rdi-ink md:text-[2.7rem] md:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-[1.6] text-rdi-muted md:text-lg">
            {summary}
          </p>
        </div>
        {children ? <div className="self-end">{children}</div> : null}
      </div>
    </section>
  )
}

export function Section({
  eyebrow,
  id,
  title,
  summary,
  children,
  tone = 'default',
}: {
  eyebrow?: string
  id?: string
  title: string
  summary?: string
  children: ReactNode
  tone?: 'default' | 'paper'
}) {
  return (
    <section
      className={[
        'border-b border-border',
        tone === 'paper' ? 'bg-rdi-paper' : 'bg-background',
      ].join(' ')}
      id={id}
    >
      <div className="container py-12 md:py-16">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-[1.65rem] font-semibold leading-[1.18] text-rdi-ink md:text-[2rem]">
            {title}
          </h2>
          {summary ? (
            <p className="mt-3 text-[0.98rem] leading-[1.65] text-rdi-muted md:text-base">
              {summary}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border-l border-border px-5 py-4 first:border-l-0">
      <div className="font-mono text-[1.75rem] font-semibold leading-none text-rdi-ink">
        {value}
      </div>
      <div className="mt-3 text-sm font-medium text-rdi-muted">{label}</div>
    </div>
  )
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="font-medium text-rdi-accent underline decoration-rdi-accent/40 underline-offset-4 hover:decoration-rdi-accent"
      href={href}
    >
      {children}
    </Link>
  )
}

export function InstitutionalCard({
  title,
  summary,
  href,
  meta,
}: {
  title: string
  summary: string
  href?: string
  meta?: string
}) {
  const content = (
    <div className="flex h-full flex-col border border-border bg-white p-6 transition-colors hover:border-rdi-accent">
      {meta ? (
        <div className="mb-5 text-sm font-semibold text-rdi-accent">
          {meta}
        </div>
      ) : null}
      <h3 className="text-[1.2rem] font-semibold leading-[1.3] text-rdi-ink">{title}</h3>
      <p className="mt-3 text-[0.96rem] leading-[1.65] text-rdi-muted">{summary}</p>
    </div>
  )

  return href ? (
    <Link className="group block h-full" href={href}>
      {content}
    </Link>
  ) : (
    content
  )
}

export function Rule() {
  return <div className="h-px w-full bg-rdi-rule" />
}

export function SectionFootnote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 border-t border-border pt-5 text-sm leading-[1.7] text-rdi-muted">
      {children}
    </p>
  )
}
