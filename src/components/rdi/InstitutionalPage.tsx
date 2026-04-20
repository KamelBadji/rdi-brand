import Link from 'next/link'
import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs font-medium uppercase text-rdi-accent">
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
      <div className="container grid gap-8 py-14 md:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] md:py-20">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] text-rdi-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-rdi-muted md:text-xl">{summary}</p>
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
}: {
  eyebrow?: string
  title: string
  summary?: string
  children: ReactNode
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="container py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-3xl font-semibold leading-tight text-rdi-ink md:text-4xl">{title}</h2>
          {summary ? <p className="mt-4 text-base leading-7 text-rdi-muted md:text-lg">{summary}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border-l border-border px-4 py-3 first:border-l-0">
      <div className="font-mono text-2xl font-semibold leading-none text-rdi-ink">{value}</div>
      <div className="mt-2 text-sm leading-5 text-rdi-muted">{label}</div>
    </div>
  )
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="font-medium text-rdi-accent underline-offset-4 hover:underline" href={href}>
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
    <div className="h-full border border-border bg-white p-5 transition-colors hover:border-rdi-accent/50">
      {meta ? <div className="mb-4 font-mono text-xs uppercase text-rdi-muted">{meta}</div> : null}
      <h3 className="text-xl font-semibold leading-snug text-rdi-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-rdi-muted">{summary}</p>
    </div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}
