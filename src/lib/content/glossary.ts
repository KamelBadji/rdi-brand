import type { GlossaryTerm } from './types'

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'reality-driven-intelligence',
    term: 'Reality-Driven Intelligence',
    definition:
      'A construction intelligence discipline that turns captured site reality into ground truth, interpretation, action, and project-level command.',
    category: 'Foundations',
    relatedSlugs: ['ground-truth', 'command-layer'],
  },
  {
    slug: 'ground-truth',
    term: 'Ground truth',
    definition:
      'Time-aligned, location-aware evidence of what happened on site, created from cameras, 360 capture, drone imagery, records, and related site data.',
    category: 'Evidence',
    relatedSlugs: ['evidence-count', 'reality-driven-intelligence'],
  },
  {
    slug: 'workflow-pack',
    term: 'Workflow pack',
    definition:
      'A market-facing commercial story made from multiple workflows, product surfaces, evidence types, and ROI levers.',
    category: 'Workflows',
  },
  {
    slug: 'command-layer',
    term: 'Command layer',
    definition:
      'The portfolio and executive layer where patterns, exceptions, and outcome signals help leaders coordinate action across projects.',
    category: 'Foundations',
  },
  {
    slug: 'evidence-count',
    term: 'Evidence count',
    definition:
      'A signal in the workflow ledger showing how much customer or field evidence supports a workflow definition.',
    category: 'Evidence',
  },
  {
    slug: 'evidence-window',
    term: 'Evidence window',
    definition:
      'The time period in which captured site reality must be preserved before it stops being useful for a claim, incident, or audit.',
    longDefinition:
      'The window opens when an event occurs and closes when the project no longer has a credible reason to retrieve the record. A claim window is set by contract; an incident window is set by regulators and insurers; an audit window is set by the owner or by statute. Workflows that lose evidence inside the window force teams to reconstruct events from recollection, which is the failure mode RDI exists to prevent.',
    category: 'Evidence',
    relatedSlugs: ['ground-truth', 'evidence-count'],
  },
]
