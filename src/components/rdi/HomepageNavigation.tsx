import Link from 'next/link'

import type { RdiJourney, RdiNavGroup } from '@/lib/rdi-ia'

export function JourneyCard({ index, journey }: { index: number; journey: RdiJourney }) {
  return (
    <Link
      className="group flex h-full flex-col border border-border bg-white p-6 text-rdi-ink transition-colors hover:border-rdi-ink hover:bg-rdi-paper focus-visible:border-rdi-ink focus-visible:outline-none"
      href={journey.href}
    >
      <span className="font-mono text-sm font-semibold text-rdi-accent">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="mt-8 block text-xl font-semibold leading-[1.2]">{journey.title}</span>
      <span className="mt-4 block text-sm leading-[1.65] text-rdi-muted">{journey.summary}</span>
      <span className="mt-8 block text-sm font-semibold text-rdi-accent group-hover:text-rdi-ink">
        {journey.label}
      </span>
    </Link>
  )
}

export function CategoryMap({ groups }: { groups: RdiNavGroup[] }) {
  return (
    <figure className="border border-border bg-white">
      <div className="grid border-b border-border md:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-rdi-ink p-6 text-white md:p-8">
          <p className="text-sm font-semibold text-white/60">Reference map</p>
          <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-[1.15] md:text-3xl">
            The framework has a clear place for every question.
          </h3>
        </div>
        <p className="p-6 text-base leading-[1.65] text-rdi-muted md:p-8">
          Definition, workflow, value, benchmark, learning, and application each have a defined
          place.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <Link
            className={[
              'group min-h-52 border-border p-6 text-rdi-ink transition-colors hover:bg-rdi-accent-soft/45 focus-visible:bg-rdi-accent-soft/45 focus-visible:outline-none',
              index === 0 ? '' : 'border-t md:border-l lg:border-l',
              index === 1 ? 'md:border-t-0' : '',
              index === 2 ? 'lg:border-t-0' : '',
              index % 2 === 0 ? 'md:border-l-0 lg:border-l' : '',
              index % 3 === 0 ? 'lg:border-l-0' : '',
            ].join(' ')}
            href={group.href}
            key={group.title}
          >
            <span className="font-mono text-sm font-semibold text-rdi-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-[1.2]">{group.title}</h3>
            <p className="mt-3 text-sm leading-[1.65] text-rdi-muted">{group.description}</p>
            <p className="mt-6 text-sm font-semibold text-rdi-accent group-hover:text-rdi-ink">
              {group.recommended.label}
            </p>
          </Link>
        ))}
      </div>
    </figure>
  )
}

export function ReferenceLinkGrid({
  links,
}: {
  links: Array<{ href: string; label: string; summary: string; title: string }>
}) {
  return (
    <div className="grid border border-border bg-white md:grid-cols-4">
      {links.map((link, index) => (
        <Link
          className={[
            'p-6 text-rdi-ink transition-colors hover:bg-rdi-accent-soft/45 focus-visible:bg-rdi-accent-soft/45 focus-visible:outline-none',
            index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
          ].join(' ')}
          href={link.href}
          key={link.href}
        >
          <p className="text-sm font-semibold text-rdi-accent">{link.label}</p>
          <h3 className="mt-5 text-lg font-semibold leading-[1.25]">{link.title}</h3>
          <p className="mt-3 text-sm leading-[1.65] text-rdi-muted">{link.summary}</p>
        </Link>
      ))}
    </div>
  )
}
