import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  Eyebrow,
  InstitutionalCard,
  Section,
  TextLink,
} from '@/components/rdi/InstitutionalPage'
import { CategoryShiftGraphic, DecisionLoopGraphic } from '@/components/rdi/RDIInfographics'
import { RDIStackPyramid } from '@/components/rdi/RDIStackPyramid'
import {
  courses,
  getPriorityWorkflows,
  getWorkflowStats,
  heroImage,
  initialPosts,
  workflowPacks,
} from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'Reality-Driven Intelligence',
  description:
    'Reality-Driven Intelligence is a discipline for turning captured construction reality into ground truth, interpretation, workflow action, and command.',
}

const readingPaths = [
  {
    kicker: 'Definitions',
    title: 'Read the discipline',
    description:
      'The category frame, the five-layer stack, and the decision loop that separates a site record from a site decision.',
    href: '/what-is-rdi',
    label: 'RDI guide',
  },
  {
    kicker: 'Reference',
    title: 'Study the workflow library',
    description:
      'Fifty-plus construction workflows with trigger, activity, conclusion, and evidence base. The reference set against which the stack is tested.',
    href: '/workflows',
    label: 'Workflow library',
  },
  {
    kicker: 'Measurement',
    title: 'Measure RDI honestly',
    description:
      'A directional ROI calculator, an explicit methodology, and a readiness assessment for teams weighing adoption.',
    href: '/methodology',
    label: 'Methodology',
  },
]

export default function HomePage() {
  const stats = getWorkflowStats()
  const priorityWorkflows = getPriorityWorkflows().slice(0, 6)

  return (
    <main>
      <section className="border-b border-border bg-rdi-paper">
        <div className="container grid gap-12 py-16 md:grid-cols-[0.58fr_0.42fr] md:py-24">
          <div>
            <Eyebrow>A framework for construction intelligence</Eyebrow>
            <h1 className="max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.01em] text-rdi-ink md:text-[3.25rem] md:leading-[1.05]">
              Reality-Driven Intelligence.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.65] text-rdi-muted md:text-xl">
              Construction projects now produce an almost continuous record of themselves. Fixed
              cameras, 360 walks, drones, sensors, and BIM have made reality capture routine on
              major sites. Most of that record still sits unused. Decisions on site run on memory,
              meetings, and evidence reconstructed after the fact.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-[1.75] text-rdi-ink">
              Reality-Driven Intelligence is the operating discipline that closes that gap. It
              defines how the record becomes ground truth, how ground truth becomes interpretation,
              how interpretation becomes action, and how action becomes command across a portfolio.
              RDI is the frame through which construction technology stops producing records and
              starts producing decisions.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center border border-rdi-ink bg-rdi-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
                href="/what-is-rdi"
              >
                Read the RDI guide
              </Link>
              <Link
                className="inline-flex items-center justify-center border border-rdi-ink bg-white px-5 py-3 text-sm font-medium text-rdi-ink transition-colors hover:bg-rdi-ink hover:text-white"
                href="/workflows"
              >
                Browse the workflow library
              </Link>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-[1.7] text-rdi-muted">
              The definitions, workflow library, maturity model, measurement methodology, and
              learning material are maintained in public.
            </p>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6 text-sm sm:gap-6">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.12em] text-rdi-muted">
                  Workflows
                </dt>
                <dd className="mt-2 font-mono text-xl font-semibold text-rdi-ink">{stats.total}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.12em] text-rdi-muted">Packs</dt>
                <dd className="mt-2 font-mono text-xl font-semibold text-rdi-ink">{stats.packs}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.12em] text-rdi-muted">Models</dt>
                <dd className="mt-2 font-mono text-xl font-semibold text-rdi-ink">
                  {stats.costModels}
                </dd>
              </div>
            </dl>
          </div>
          <div className="self-end">
            <figure className="border border-border bg-white">
              <Image
                alt="A 360 capture device on a live construction project"
                className="aspect-[4/3] w-full object-cover"
                height={899}
                priority
                src={heroImage}
                width={1536}
              />
              <figcaption className="border-t border-border px-5 py-3 text-xs leading-5 text-rdi-muted">
                Reality capture is the first layer of RDI, not the category itself.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How to read this site"
        summary="The framework is written down across the sections below. Start with the foundations, pressure-test the thinking against the workflow reference, or cut straight to how the value is measured."
        title="Three places to begin"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {readingPaths.map((path, index) => (
            <Link
              className="group flex h-full flex-col border border-border bg-white p-6 transition-colors hover:border-rdi-accent"
              href={path.href}
              key={path.href}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                  {String(index + 1).padStart(2, '0')} — {path.kicker}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-rdi-ink">
                {path.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-[1.65] text-rdi-muted">
                {path.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rdi-accent">
                {path.label}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why the category exists"
        summary="The shift is not cosmetic. Captured reality has to do work for the project — otherwise it is an archive that happens to be digital."
        title="From records to decisions"
        tone="paper"
      >
        <CategoryShiftGraphic />
      </Section>

      <Section
        eyebrow="Category frame"
        summary="The stack draws the threshold between cameras, AI dashboards, and operational intelligence. Each layer makes the next one possible."
        title="The RDI stack"
      >
        <RDIStackPyramid />
      </Section>

      <Section
        eyebrow="Operating rule"
        summary="RDI is not the capture layer alone. The loop closes when evidence changes a decision, creates an assignment, or improves the next project record."
        title="The decision loop"
        tone="paper"
      >
        <DecisionLoopGraphic />
      </Section>

      <Section
        eyebrow="Use cases"
        summary="Each pack groups related workflows, evidence patterns, and value questions so the category can be studied through real site work."
        title="Workflow packs connect the framework to site work"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workflowPacks.map((pack) => (
            <InstitutionalCard
              href={`/use-cases/${pack.slug}`}
              key={pack.slug}
              meta={pack.kicker}
              summary={pack.summary}
              title={pack.title}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Workflow evidence base"
        summary="High-confidence, very-common workflows anchor the public RDI reference library. Every entry documents trigger, activity, conclusion, and evidence."
        title="Priority workflows"
        tone="paper"
      >
        <div className="grid gap-3 md:hidden">
          {priorityWorkflows.map((workflow) => (
            <Link
              className="border border-border bg-white p-4 text-rdi-ink"
              href={`/workflows/${workflow.slug}`}
              key={workflow.code}
            >
              <span className="block text-sm font-semibold">{workflow.name}</span>
              <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
                {workflow.category}
              </span>
              <span className="mt-2 block font-mono text-xs text-rdi-muted">
                {workflow.evidenceCount} evidence · {workflow.frequency ?? 'Unclassified'}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden overflow-x-auto border border-border bg-white md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-white text-xs uppercase tracking-[0.1em] text-rdi-muted">
                <th className="border-b border-border px-5 py-4 font-medium">Workflow</th>
                <th className="border-b border-border px-5 py-4 font-medium">Category</th>
                <th className="border-b border-border px-5 py-4 font-medium">Frequency</th>
                <th className="border-b border-border px-5 py-4 text-right font-medium">
                  Evidence
                </th>
              </tr>
            </thead>
            <tbody>
              {priorityWorkflows.map((workflow) => (
                <tr
                  className="border-b border-border last:border-0 hover:bg-rdi-paper"
                  key={workflow.code}
                >
                  <td className="px-5 py-4">
                    <Link
                      className="font-medium text-rdi-ink hover:text-rdi-accent"
                      href={`/workflows/${workflow.slug}`}
                    >
                      {workflow.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-rdi-muted">{workflow.category}</td>
                  <td className="px-5 py-4 text-rdi-muted">
                    {workflow.frequency ?? 'Unclassified'}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-rdi-ink">
                    {workflow.evidenceCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          Browse the full <TextLink href="/workflows">workflow library</TextLink>, or view workflows
          grouped by <TextLink href="/use-cases">use case</TextLink>.
        </p>
      </Section>

      <Section
        eyebrow="Learning and reference"
        summary="A new category needs shared language before it can become shared practice. Start with the foundations, then apply the reference library."
        title="Build fluency around RDI"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <InstitutionalCard
            href={`/learn/${courses[0].slug}`}
            meta={`${courses[0].level} course`}
            summary={courses[0].summary}
            title={courses[0].title}
          />
          {initialPosts.slice(0, 2).map((post) => (
            <InstitutionalCard
              href={`/resources/${post.slug}`}
              key={post.slug}
              meta={post.date}
              summary={post.summary}
              title={post.title}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
