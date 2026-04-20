import Link from 'next/link'
import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-rdi-accent">
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
      <div className="container grid gap-10 py-16 md:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] md:py-24">
        <div className="max-w-4xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.01em] text-rdi-ink md:text-[3rem] md:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-[1.65] text-rdi-muted md:text-xl">
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
  title,
  summary,
  children,
  tone = 'default',
}: {
  eyebrow?: string
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
    >
      <div className="container py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.01em] text-rdi-ink md:text-[2.25rem]">
            {title}
          </h2>
          {summary ? (
            <p className="mt-4 text-base leading-[1.7] text-rdi-muted md:text-lg">{summary}</p>
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
      <div className="font-mono text-[1.75rem] font-semibold leading-none tracking-tight text-rdi-ink">
        {value}
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.12em] text-rdi-muted">{label}</div>
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
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
          {meta}
        </div>
      ) : null}
      <h3 className="text-[1.125rem] font-semibold leading-[1.3] text-rdi-ink">{title}</h3>
      <p className="mt-3 text-sm leading-[1.65] text-rdi-muted">{summary}</p>
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
