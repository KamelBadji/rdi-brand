import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  Eyebrow,
  InstitutionalCard,
  Metric,
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
import { navGroups } from '@/lib/rdi-ia'

export const metadata: Metadata = {
  title: 'Reality-Driven Intelligence',
  description:
    'A field guide to Reality-Driven Intelligence for construction: category definition, workflows, ROI methodology, courses, and practical tools.',
}

export default function HomePage() {
  const stats = getWorkflowStats()
  const priorityWorkflows = getPriorityWorkflows().slice(0, 6)

  return (
    <main>
      <section className="border-b border-border bg-rdi-paper">
        <div className="container grid gap-10 py-14 md:grid-cols-[0.58fr_0.42fr] md:py-20">
          <div>
            <Eyebrow>Reality-Driven Intelligence</Eyebrow>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] text-rdi-ink md:text-5xl">
              A field guide to Reality-Driven Intelligence in construction.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-rdi-muted md:text-xl">
              RDI names the shift from passive records and dashboard views to evidence systems
              that explain what changed, where trust comes from, and when a workflow should move.
              This guide defines the category, its workflow library, and the value method behind it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="border border-rdi-ink bg-rdi-ink px-5 py-3 text-center text-sm font-medium text-white hover:bg-black"
                href="/what-is-rdi"
              >
                Read the RDI guide
              </Link>
              <Link
                className="border border-border bg-white px-5 py-3 text-center text-sm font-medium text-rdi-ink hover:border-rdi-ink"
                href="/workflows"
              >
                Browse the workflow library
              </Link>
            </div>
          </div>
          <div className="self-end">
            <Image
              alt="Evercam 360 capture on a construction project"
              className="aspect-[4/3] w-full object-cover"
              height={899}
              priority
              src={heroImage}
              width={1536}
            />
            <div className="grid grid-cols-3 border border-t-0 border-border bg-white">
              <Metric label="active workflows" value={stats.total} />
              <Metric label="priority candidates" value={stats.priority} />
              <Metric label="workflow packs" value={stats.packs} />
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Recommended path"
        summary="Definitions are useful only when they explain real site work. Move from the category frame into workflows, value methods, learning, and project planning."
        title="Start with the category, then test it against workflows"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {navGroups.map((group) => (
            <div className="border border-border bg-white p-5" key={group.title}>
              <h2 className="text-lg font-semibold text-rdi-ink">{group.title}</h2>
              <nav className="mt-4 grid gap-2 text-sm text-rdi-muted">
                {group.links.map((link) => (
                  <Link className="hover:text-rdi-accent" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why this category exists"
        summary="The category has one test: does captured reality improve a real workflow?"
        title="From records to decisions"
      >
        <CategoryShiftGraphic />
      </Section>

      <Section
        eyebrow="Category frame"
        summary="The stack explains the threshold between cameras, AI dashboards, and operational intelligence."
        title="The RDI stack"
      >
        <RDIStackPyramid />
      </Section>

      <Section
        eyebrow="Operating rule"
        summary="RDI is not the capture layer alone. The loop closes when evidence changes a decision, creates an action, or improves the next project record."
        title="The decision loop"
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
        summary="The current ledger includes the high-confidence workflows that can anchor the first public RDI library."
        title="Priority workflows"
      >
        <div className="grid gap-3 md:hidden">
          {priorityWorkflows.map((workflow) => (
            <Link
              className="border border-border bg-white p-4 text-rdi-ink"
              href={`/workflows/${workflow.slug}`}
              key={workflow.code}
            >
              <span className="block text-sm font-semibold">{workflow.name}</span>
              <span className="mt-3 block text-xs uppercase text-rdi-muted">
                {workflow.category}
              </span>
              <span className="mt-2 block text-sm text-rdi-muted">{workflow.evercamRole}</span>
            </Link>
          ))}
        </div>
        <div className="hidden overflow-x-auto border border-border md:block">
          <table className="w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-rdi-paper text-rdi-muted">
              <tr>
                <th className="border-b border-border px-4 py-3 font-medium">Workflow</th>
                <th className="border-b border-border px-4 py-3 font-medium">Category</th>
                <th className="border-b border-border px-4 py-3 font-medium">Current role</th>
              </tr>
            </thead>
            <tbody>
              {priorityWorkflows.map((workflow) => (
                <tr className="border-b border-border last:border-0" key={workflow.code}>
                  <td className="px-4 py-4">
                    <Link className="font-medium text-rdi-ink hover:text-rdi-accent" href={`/workflows/${workflow.slug}`}>
                      {workflow.name}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-rdi-muted">{workflow.category}</td>
                  <td className="px-4 py-4 text-rdi-muted">{workflow.evercamRole}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-rdi-muted">
          Browse the full <TextLink href="/workflows">workflow library</TextLink>.
        </p>
      </Section>

      <Section
        eyebrow="Learning and resources"
        summary="A new category needs shared language before it can become shared practice."
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
