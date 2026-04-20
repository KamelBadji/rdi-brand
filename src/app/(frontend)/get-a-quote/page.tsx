import type { Metadata } from 'next'

import { PageIntro, Section } from '@/components/rdi/InstitutionalPage'
import { QuoteRequestForm } from '@/components/rdi/QuoteRequestForm'
import { workflowPacks } from '@/lib/rdi-data'

export const metadata: Metadata = {
  title: 'Get an RDI Quote',
  description: 'Request an RDI quote from Evercam.',
}

export default function GetAQuotePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Project brief"
        summary="Describe the project context, then match it to the RDI workflows that can improve evidence quality, action, and value measurement."
        title="Create an RDI project brief"
      />
      <Section title="Quote request">
        <QuoteRequestForm workflowPacks={workflowPacks.map(({ slug, title }) => ({ slug, title }))} />
      </Section>
    </main>
  )
}
