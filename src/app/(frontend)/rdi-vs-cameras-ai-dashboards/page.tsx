import type { Metadata } from 'next'

import { PageIntro, Section, TextLink } from '@/components/rdi/InstitutionalPage'

const comparisons = [
  {
    tool: 'Construction cameras',
    strength: 'Persistent visibility and playback.',
    limit: 'Visibility alone does not define the workflow, evidence standard, or decision loop.',
  },
  {
    tool: 'Dashboards',
    strength: 'Aggregated status and reporting.',
    limit: 'A dashboard can summarize reality without explaining what action should follow.',
  },
  {
    tool: 'AI video analytics',
    strength: 'Detection, search, classification, and pattern discovery.',
    limit: 'AI is useful only when detections are trusted, routed, reviewed, and closed.',
  },
  {
    tool: 'Digital twins and BIM',
    strength: 'Structured model context and design intent.',
    limit: 'The model still needs current reality and evidence of deviation.',
  },
  {
    tool: 'Reality-Driven Intelligence',
    strength: 'A category system that connects reality capture, ground truth, interpretation, action, and command.',
    limit: 'It requires workflow discipline, evidence governance, and clear ownership.',
  },
]

export const metadata: Metadata = {
  title: 'RDI vs Cameras, AI, Dashboards, and Digital Twins',
  description:
    'How Reality-Driven Intelligence relates to cameras, AI video analytics, dashboards, and digital twins in construction.',
}

export default function ComparePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Category boundaries"
        summary="RDI is not another name for a camera, dashboard, AI model, or digital twin. It is the operating layer that makes those tools useful in construction workflows."
        title="RDI vs cameras, AI, dashboards, and digital twins"
      />
      <Section
        summary="Each tool matters. The category question is whether the tool helps teams establish truth, route action, and improve outcomes."
        title="What each layer contributes"
      >
        <div className="overflow-x-auto border border-border bg-white">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="text-sm text-rdi-muted">
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  Technology
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  Strength
                </th>
                <th className="border-b border-border bg-rdi-paper px-5 py-4 font-medium">
                  RDI test
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => {
                const isRDI = item.tool === 'Reality-Driven Intelligence'
                return (
                  <tr
                    className={[
                      'border-b border-border last:border-0 align-top',
                      isRDI ? 'bg-rdi-paper' : '',
                    ].join(' ')}
                    key={item.tool}
                  >
                    <td className="px-5 py-5 font-semibold text-rdi-ink">
                      {item.tool}
                      {isRDI ? (
                        <span className="ml-2 font-mono text-xs font-semibold text-rdi-accent">
                          category
                        </span>
                      ) : null}
                    </td>
                    <td className="px-5 py-5 leading-[1.7] text-rdi-muted">{item.strength}</td>
                    <td className="px-5 py-5 leading-[1.7] text-rdi-muted">{item.limit}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>
      <Section
        summary="A useful category definition should tell people what to include and what to reject."
        title="A simple rule"
        tone="paper"
      >
        <ol className="grid gap-0 border border-border bg-white md:grid-cols-3">
          {[
            {
              verdict: 'Not enough',
              body: 'A clear video feed with no workflow context.',
              tone: 'muted',
            },
            {
              verdict: 'Better',
              body: 'A trusted record connected to time, location, schedule, scope, and responsibility.',
              tone: 'neutral',
            },
            {
              verdict: 'RDI',
              body: 'A closed loop where evidence creates a decision, action, or learning record.',
              tone: 'ink',
            },
          ].map((rule, index) => {
            const isInk = rule.tone === 'ink'
            return (
              <li
                className={[
                  'p-6 md:p-7',
                  index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
                  isInk ? 'bg-rdi-ink text-white' : '',
                ].join(' ')}
                key={rule.verdict}
              >
                <div className={['font-mono text-sm font-semibold', isInk ? 'text-white/65' : 'text-rdi-muted'].join(' ')}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3
                  className={[
                    'mt-3 text-xl font-semibold',
                    isInk ? '' : 'text-rdi-ink',
                  ].join(' ')}
                >
                  {rule.verdict}
                </h3>
                <p
                  className={[
                    'mt-3 text-sm leading-[1.7]',
                    isInk ? 'text-white/85' : 'text-rdi-muted',
                  ].join(' ')}
                >
                  {rule.body}
                </p>
              </li>
            )
          })}
        </ol>
        <p className="mt-6 text-sm leading-[1.7] text-rdi-muted">
          Next: read the <TextLink href="/manifesto">RDI manifesto</TextLink> or map the category
          with the <TextLink href="/maturity-model">maturity model</TextLink>.
        </p>
      </Section>
    </main>
  )
}
