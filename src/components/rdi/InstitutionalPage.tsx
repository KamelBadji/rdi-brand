import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Eyebrow — uppercase Ink label that introduces a section title.
 *
 * Brand v1.0: plain Ink text, no leading bar, no red color. The brand's
 * signature red moment for the section lives under the H1/H2 (see
 * <SectionTitle>), not next to the eyebrow.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-rdi-ink">
      {children}
    </p>
  )
}

/**
 * SectionTitle — H2 with the 64×3px red rule directly below.
 * The single red moment per page (restraint rule, GUIDELINES §6).
 * On dark surfaces, pass `dark` so the rule switches to the lightened red.
 */
export function SectionTitle({
  children,
  as = 'h2',
  dark = false,
  id,
  className,
}: {
  children: ReactNode
  as?: 'h1' | 'h2'
  dark?: boolean
  id?: string
  className?: string
}) {
  const Heading = as
  const headingClasses =
    as === 'h1'
      ? 'text-balance break-words text-[1.85rem] font-bold leading-[1.08] tracking-tight text-rdi-ink md:text-[2.55rem]'
      : 'text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-rdi-ink md:text-[2rem]'

  return (
    <div className={['flex flex-col items-start gap-[18px]', className].filter(Boolean).join(' ')}>
      <Heading className={headingClasses} id={id}>
        {children}
      </Heading>
      <span
        aria-hidden="true"
        className={[
          'block h-[3px] w-16',
          dark ? 'bg-rdi-red-on-dark' : 'bg-rdi-accent',
        ].join(' ')}
      />
    </div>
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
          <SectionTitle as="h1">{title}</SectionTitle>
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
          <SectionTitle as="h2">{title}</SectionTitle>
          {summary ? (
            <p className="mt-5 text-[0.98rem] leading-[1.65] text-rdi-muted md:text-base">
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

/**
 * TextLink — inline link with the brand v1.0 hover pattern.
 *
 * Default: no underline. On hover, a 2px red line ~2.5ch wide
 * (about three letters) animates left-to-right under the link with
 * ease-out soft at 200ms. Echoes the red-line-under-titles pattern
 * at link scale.
 */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className={[
        'group relative inline-block pb-1 font-medium text-rdi-ink',
        'after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-[2.5ch] after:bg-rdi-accent',
        'after:origin-left after:scale-x-0',
        'after:transition-transform after:duration-200',
        'after:[transition-timing-function:cubic-bezier(0.2,0.6,0.2,1)]',
        'hover:after:scale-x-100',
      ].join(' ')}
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
    <div className="flex h-full flex-col border border-border bg-white p-6 transition-colors hover:border-l-[3px] hover:border-l-rdi-accent">
      {meta ? (
        <div className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-rdi-ink">
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
