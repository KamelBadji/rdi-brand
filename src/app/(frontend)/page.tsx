import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Section, TextLink } from '@/components/rdi/InstitutionalPage'
import {
  CategoryShiftBoard,
  MaturityPathGraphic,
  OperatingLoopPoster,
  RDIHeroMap,
  RDIStackPoster,
  ValueSystemGraphic,
  WorkflowPackMap,
} from '@/components/rdi/RDIVisualSystem'
import {
  courses,
  getPriorityWorkflows,
  getWorkflowStats,
  heroImage,
  initialPosts,
  type WorkflowPack,
  workflowPacks,
} from '@/lib/rdi-data'
import { publicStewardship, rdiDefinition, rdiPromise, stewardshipLine } from '@/lib/rdi-copy'

export const metadata: Metadata = {
  title: 'Reality-Driven Intelligence',
  description:
    'Reality-Driven Intelligence is a public framework for turning construction reality into trusted evidence, decision-ready interpretation, accountable action, and measurable command.',
}

const priorityPackSlugs = [
  'progress-verification',
  'claims-evidence',
  'gate-logistics',
  'safety-monitoring',
  'stakeholder-reporting',
  'design-verification',
]

export default function HomePage() {
  const stats = getWorkflowStats()
  const priorityWorkflows = getPriorityWorkflows().slice(0, 5)
  const priorityPacks = priorityPackSlugs
    .map((slug) => workflowPacks.find((pack) => pack.slug === slug))
    .filter((pack): pack is WorkflowPack => Boolean(pack))
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || ''
  const heroSrc = `${basePath}${heroImage}`

  return (
    <main>
      <section className="relative min-h-[min(820px,calc(86svh-72px))] overflow-hidden border-b border-rdi-ink bg-rdi-ink text-white">
        <Image
          alt="Construction site reality capture"
          className="absolute inset-0 size-full object-cover object-left opacity-45 grayscale"
          height={899}
          priority
          src={heroSrc}
          unoptimized
          width={1536}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,22,26,0.96)_0%,rgba(18,22,26,0.78)_44%,rgba(18,22,26,0.20)_100%)]" />
        <div className="container relative grid min-h-[min(820px,calc(86svh-72px))] content-center py-12 md:py-16">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase text-rdi-accent-strong">
              Public framework
            </p>
            <h1 className="text-balance text-[3.6rem] font-semibold leading-[0.96] md:text-[6.7rem]">
              Reality-Driven Intelligence
            </h1>
            <p className="mt-8 max-w-2xl text-2xl font-semibold leading-[1.25] text-white md:text-3xl">
              Run construction on reality.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-[1.55] text-white/75">
              Continuous site reality becomes trusted evidence, accountable action, and measurable
              command.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-rdi-ink transition-colors hover:bg-rdi-paper"
                href="/what-is-rdi"
              >
                Start with the framework
              </Link>
              <Link
                className="inline-flex items-center justify-center border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-rdi-ink"
                href="/readiness"
              >
                Assess maturity
              </Link>
            </div>
            <p className="mt-7 max-w-xl text-sm font-semibold leading-[1.55] text-white/65">
              {stewardshipLine}
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Definition"
        summary={rdiPromise}
        title="The real state, not the reported state"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-stretch">
          <div className="flex min-h-80 items-end border border-rdi-ink bg-rdi-ink p-7 text-white md:p-9">
            <p className="text-3xl font-semibold leading-[1.12] md:text-5xl">{rdiDefinition}</p>
          </div>
          <RDIHeroMap
            evidenceCount={stats.evidenceCount}
            packCount={stats.packs}
            workflowCount={stats.total}
          />
        </div>
      </Section>

      <Section
        eyebrow="Shift"
        summary="The category exists because reporting is no longer enough."
        title="Reported state to real state"
        tone="paper"
      >
        <CategoryShiftBoard />
      </Section>

      <Section
        eyebrow="Framework"
        summary="Five layers, one test: does evidence change control?"
        title="Capture to command"
      >
        <RDIStackPoster compact />
      </Section>

      <Section
        eyebrow="Loop"
        summary="A workflow is incomplete if evidence stops at a dashboard."
        title="Capture, verify, interpret, act, measure"
        tone="paper"
      >
        <OperatingLoopPoster />
      </Section>

      <Section
        eyebrow="Maturity"
        summary="Visibility is the first mile, not the destination."
        title="Visibility. Control. Optimization."
      >
        <MaturityPathGraphic />
      </Section>

      <Section
        eyebrow="Workflow packs"
        summary="RDI becomes practical when it is attached to site work."
        title="Study the category through workflows"
        tone="paper"
      >
        <WorkflowPackMap packs={priorityPacks} />
        <p className="mt-8 text-base leading-[1.65] text-rdi-muted">
          Browse all <TextLink href="/use-cases">workflow packs</TextLink> or inspect the{' '}
          <TextLink href="/workflows">workflow library</TextLink>.
        </p>
      </Section>

      <Section
        eyebrow="Economics"
        summary="Value is measured by outcome, evidence quality, and confidence."
        title="Confidence. Evidence. Capacity."
      >
        <ValueSystemGraphic />
      </Section>

      <Section
        eyebrow="Reference set"
        summary="High-confidence workflows keep the framework tied to real site problems."
        title="Priority workflows"
        tone="paper"
      >
        <div className="grid border border-border bg-white">
          {priorityWorkflows.map((workflow, index) => (
            <Link
              className="group grid gap-5 border-b border-border p-5 text-rdi-ink transition-colors last:border-b-0 hover:bg-rdi-accent-soft/45 md:grid-cols-[80px_minmax(0,0.7fr)_minmax(0,0.3fr)_90px] md:items-center md:p-6"
              href={`/workflows/${workflow.slug}`}
              key={workflow.code}
            >
              <span className="font-mono text-3xl font-semibold text-rdi-rule-strong group-hover:text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="block text-xl font-semibold leading-[1.25]">{workflow.name}</span>
                <span className="mt-2 block text-sm text-rdi-muted">{workflow.category}</span>
              </span>
              <span className="text-sm font-semibold text-rdi-accent">
                {workflow.frequency ?? 'Unclassified'}
              </span>
              <span className="font-mono text-2xl font-semibold text-rdi-ink">
                {workflow.evidenceCount}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Learning path"
        summary="Shared language comes before shared practice."
        title="Learn the framework"
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <Link
            className="group border border-rdi-ink bg-rdi-ink p-7 text-white transition-colors hover:bg-black md:p-9"
            href={`/learn/${courses[0].slug}`}
          >
            <p className="text-sm font-semibold text-white/60">{courses[0].level} course</p>
            <h3 className="mt-8 max-w-xl text-4xl font-semibold leading-[1.05]">
              {courses[0].title}
            </h3>
            <p className="mt-6 max-w-lg text-base leading-[1.55] text-white/72">
              Stack, workflows, evidence quality, and ROI language.
            </p>
          </Link>
          {initialPosts.slice(0, 2).map((post) => (
            <Link
              className="border border-border bg-white p-7 text-rdi-ink transition-all hover:-translate-y-1 hover:border-rdi-ink hover:shadow-[8px_8px_0_var(--rdi-ink)]"
              href={`/resources/${post.slug}`}
              key={post.slug}
            >
              <p className="text-sm font-semibold text-rdi-accent">Field note</p>
              <h3 className="mt-8 text-2xl font-semibold leading-[1.08]">{post.title}</h3>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Stewardship"
        summary={publicStewardship}
        title="A public reference for the construction field"
        tone="paper"
      >
        <div className="grid gap-0 border border-border bg-white md:grid-cols-[1fr_auto] md:items-center">
          <p className="p-7 text-2xl font-semibold leading-[1.25] text-rdi-ink md:p-8">
            Definitions, workflow packs, maturity language, economics, and learning material are
            maintained in public.
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
