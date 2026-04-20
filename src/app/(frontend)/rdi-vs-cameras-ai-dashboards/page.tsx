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
        <div className="overflow-x-auto border border-border">
          <table className="min-w-[900px] w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-rdi-paper text-rdi-muted">
              <tr>
                <th className="border-b border-border px-4 py-3 font-medium">Technology</th>
                <th className="border-b border-border px-4 py-3 font-medium">Strength</th>
                <th className="border-b border-border px-4 py-3 font-medium">RDI test</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => (
                <tr className="border-b border-border last:border-0" key={item.tool}>
                  <td className="px-4 py-4 font-semibold text-rdi-ink">{item.tool}</td>
                  <td className="px-4 py-4 leading-6 text-rdi-muted">{item.strength}</td>
                  <td className="px-4 py-4 leading-6 text-rdi-muted">{item.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section
        summary="A useful category definition should tell people what to include and what to reject."
        title="A simple rule"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Not enough', 'A clear video feed with no workflow context.'],
            ['Better', 'A trusted record connected to time, location, schedule, scope, and responsibility.'],
            ['RDI', 'A closed loop where evidence creates a decision, action, or learning record.'],
          ].map(([title, body]) => (
            <div className="border border-border bg-white p-6" key={title}>
              <h2 className="text-xl font-semibold text-rdi-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-rdi-muted">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-rdi-muted">
          Next: read the <TextLink href="/manifesto">RDI manifesto</TextLink> or map the category
          with the <TextLink href="/maturity-model">maturity model</TextLink>.
        </p>
      </Section>
    </main>
  )
}
