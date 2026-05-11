import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { RDIStackMini } from '@/components/rdi/RDIVisualSystem'
import { rdiDefinition } from '@/lib/rdi-copy'
import { heroImage } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'Reality-Driven Intelligence',
  description:
    'Reality-Driven Intelligence is a public framework for turning construction reality into trusted evidence, decision-ready interpretation, accountable action, and measurable command.',
}

const homeRoutes = [
  {
    href: '/what-is-rdi',
    summary: 'Definition, stack, operating loop, and category boundaries.',
    title: 'Understand the framework',
  },
  {
    href: '/use-cases',
    summary: 'Workflow packs and evidence records for repeatable site decisions.',
    title: 'Explore the workflows',
  },
  {
    href: '/methodology',
    summary: 'Value method, ROI calculator, maturity, and benchmark assumptions.',
    title: 'Build the economics',
  },
]

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || ''
  const heroSrc = `${basePath}${heroImage}`

  return (
    <main>
      <section className="relative min-h-[min(620px,calc(74svh-72px))] overflow-hidden border-b border-rdi-ink bg-rdi-ink text-white">
        <Image
          alt="Construction site reality capture"
          className="absolute inset-0 size-full object-cover object-left opacity-30 grayscale"
          height={899}
          priority
          src={heroSrc}
          unoptimized
          width={1536}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,22,26,0.97)_0%,rgba(18,22,26,0.86)_48%,rgba(18,22,26,0.28)_100%)]" />
        <div className="container relative grid min-h-[min(620px,calc(74svh-72px))] content-center py-12 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-[2.45rem] font-semibold leading-[1.02] md:text-[4rem]">
              <span className="block">Reality-Driven</span>
              <span className="block">Intelligence</span>
            </h1>
            <p className="mt-7 max-w-[24rem] text-base font-semibold leading-[1.55] text-white/90 md:text-lg">
              {rdiDefinition}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-rdi-ink transition-colors hover:bg-rdi-paper"
                href="/what-is-rdi"
              >
                Read the definition
              </Link>
              <Link
                className="inline-flex items-center justify-center border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-rdi-ink"
                href="/use-cases"
              >
                View workflow packs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-rdi-paper">
        <div className="container grid gap-8 py-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(520px,0.62fr)] lg:items-center lg:py-16">
          <div>
            <h2 className="text-[1.9rem] font-semibold leading-[1.12] text-rdi-ink md:text-[2.35rem]">
              The RDI stack
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.65] text-rdi-muted">
              Five layers define the progression from captured site reality to measured command.
            </p>
            <Link
              className="mt-7 inline-flex border border-rdi-ink px-5 py-3 text-sm font-semibold text-rdi-ink transition-colors hover:bg-rdi-ink hover:text-white"
              href="/what-is-rdi#rdi-stack"
            >
              See the framework
            </Link>
          </div>
          <RDIStackMini />
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="container py-10 md:py-12">
          <h2 className="mb-6 text-[1.65rem] font-semibold leading-[1.15] text-rdi-ink md:text-[2rem]">
            Where to go next
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeRoutes.map((route, index) => (
              <Link
                className={[
                  'group relative min-h-[190px] overflow-hidden border border-border bg-white p-6 text-rdi-ink transition-all hover:-translate-y-0.5 hover:border-rdi-ink hover:shadow-[6px_6px_0_var(--rdi-ink)] focus-visible:-translate-y-0.5 focus-visible:border-rdi-ink focus-visible:outline-none focus-visible:shadow-[6px_6px_0_var(--rdi-ink)] md:p-7',
                ].join(' ')}
                href={route.href}
                key={route.href}
              >
                <span className="font-mono text-sm font-semibold text-rdi-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-6 text-xl font-semibold leading-[1.2]">{route.title}</h2>
                <p className="mt-3 max-w-[22rem] text-sm leading-[1.65] text-rdi-muted">
                  {route.summary}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-6 right-6 text-2xl leading-none text-rdi-accent transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
