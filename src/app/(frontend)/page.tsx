import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Section } from '@/components/rdi/InstitutionalPage'
import {
  CategoryMap,
  JourneyCard,
  ReferenceLinkGrid,
} from '@/components/rdi/HomepageNavigation'
import { RDIStackMini, WorkflowPackMap } from '@/components/rdi/RDIVisualSystem'
import { courses, heroImage, type WorkflowPack, workflowPacks } from '@/lib/rdi-data'
import { homepageJourneys, navGroups } from '@/lib/rdi-ia'
import { publicStewardship, rdiDefinition, rdiPromise, stewardshipLine } from '@/lib/rdi-copy'

export const metadata: Metadata = {
  title: 'Reality-Driven Intelligence',
  description:
    'Reality-Driven Intelligence is a public framework for turning construction reality into trusted evidence, decision-ready interpretation, accountable action, and measurable command.',
}

const previewPackSlugs = ['progress-verification', 'claims-evidence', 'safety-monitoring']

const referenceLinks = [
  {
    href: `/learn/${courses[0].slug}`,
    label: 'Course',
    summary: 'A structured introduction to the stack, evidence quality, workflows, and value.',
    title: courses[0].title,
  },
  {
    href: '/knowledge-base',
    label: 'Reference',
    summary: 'Durable answers for definitions, boundaries, workflows, and measurement.',
    title: 'Knowledge base',
  },
  {
    href: '/glossary',
    label: 'Vocabulary',
    summary: 'Canonical terms for shared RDI language across teams and projects.',
    title: 'Glossary',
  },
  {
    href: '/resources',
    label: 'Field notes',
    summary: 'Short public notes on workflow patterns, evidence quality, and category thinking.',
    title: 'Field notes',
  },
]

export default function HomePage() {
  const previewPacks = previewPackSlugs
    .map((slug) => workflowPacks.find((pack) => pack.slug === slug))
    .filter((pack): pack is WorkflowPack => Boolean(pack))
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || ''
  const heroSrc = `${basePath}${heroImage}`

  return (
    <main>
      <section className="relative min-h-[min(640px,calc(78svh-72px))] overflow-hidden border-b border-rdi-ink bg-rdi-ink text-white">
        <Image
          alt="Construction site reality capture"
          className="absolute inset-0 size-full object-cover object-left opacity-35 grayscale"
          height={899}
          priority
          src={heroSrc}
          unoptimized
          width={1536}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,22,26,0.96)_0%,rgba(18,22,26,0.78)_44%,rgba(18,22,26,0.20)_100%)]" />
        <div className="container relative grid min-h-[min(640px,calc(78svh-72px))] content-center py-12 md:py-14">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase text-rdi-accent-strong">
              Public framework
            </p>
            <h1 className="text-balance text-[2.65rem] font-semibold leading-[1.05] md:text-[4rem]">
              Reality-Driven Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-[1.32] text-white md:text-xl">
              Run construction on reality.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.6] text-white/75 md:text-lg">
              Continuous site reality becomes trusted evidence, accountable action, and measurable
              command.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-rdi-ink transition-colors hover:bg-rdi-paper"
                href="/what-is-rdi"
              >
                Start with RDI
              </Link>
              <Link
                className="inline-flex items-center justify-center border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-rdi-ink"
                href="/use-cases"
              >
                Explore workflows
              </Link>
            </div>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-[1.55] text-white/65">
              {stewardshipLine}
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What RDI means"
        summary={rdiPromise}
        title="From construction reality to command"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] lg:items-stretch">
          <div className="grid gap-0 border border-rdi-ink bg-white">
            <div className="bg-rdi-ink p-6 text-white md:p-8">
              <p className="text-xl font-semibold leading-[1.28] md:text-[1.65rem]">
                {rdiDefinition}
              </p>
            </div>
            <div className="p-6 md:p-8">
              <p className="max-w-2xl text-xl font-semibold leading-[1.24] text-rdi-ink">
                RDI is easiest to read in layers: record, trust, interpretation, action, and
                command.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-[1.65] text-rdi-muted">
                Use the stack to test whether capture becomes evidence, action, and measured
                outcome.
              </p>
              <Link
                className="mt-7 inline-flex border border-rdi-ink px-5 py-3 text-sm font-semibold text-rdi-ink transition-colors hover:bg-rdi-ink hover:text-white"
                href="/what-is-rdi"
              >
                Read the definition
              </Link>
            </div>
          </div>
          <RDIStackMini />
        </div>
      </Section>

      <Section
        eyebrow="Choose your path"
        summary="Different visitors need different entry points. Start from the question you need to answer."
        title="Where to go next"
        tone="paper"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homepageJourneys.map((journey, index) => (
            <JourneyCard index={index} journey={journey} key={journey.href} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Category map"
        summary="Definition, workflows, economics, benchmark, learning, and application form the public reference system."
        title="A clear place for every RDI question"
      >
        <CategoryMap groups={navGroups} />
      </Section>

      <Section
        eyebrow="Workflow packs"
        summary="Workflow packs are the practical expression of RDI."
        title="Start with high-value site problems"
        tone="paper"
      >
        <WorkflowPackMap packs={previewPacks} />
        <Link
          className="mt-8 inline-flex border border-rdi-ink px-5 py-3 text-sm font-semibold text-rdi-ink transition-colors hover:bg-rdi-ink hover:text-white"
          href="/use-cases"
        >
          Browse all workflow packs
        </Link>
      </Section>

      <Section
        eyebrow="Learning and reference"
        summary="Shared language comes before shared practice."
        title="Learn the framework"
      >
        <ReferenceLinkGrid links={referenceLinks} />
      </Section>

      <Section
        eyebrow="Stewardship"
        summary={publicStewardship}
        title="A public reference for the construction field"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-[1fr_auto] md:items-center">
          <p className="p-7 text-xl font-semibold leading-[1.35] text-rdi-ink md:p-8">
            RDI definitions, workflow packs, maturity language, economics, and learning material
            are maintained in public.
          </p>
          <Link
            className="m-7 inline-flex items-center justify-center border border-rdi-ink bg-rdi-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black md:m-8"
            href="/stewardship"
          >
            Read stewardship
          </Link>
        </div>
      </Section>
    </main>
  )
}
