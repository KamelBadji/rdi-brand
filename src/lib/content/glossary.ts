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
  {
    slug: 'decision-loop',
    term: 'Decision loop',
    definition:
      'The closed loop trigger, evidence, interpretation, action, and outcome that turns reality capture into a project decision.',
    category: 'Workflows',
    relatedSlugs: ['workflow-pack'],
  },
  {
    slug: 'capture-plan',
    term: 'Capture plan',
    definition:
      'The per-project plan that names what will be recorded, where, how often, and for how long.',
    longDefinition:
      'A capture plan is built from the workflows the project intends to support, not from a list of available cameras. It records who owns each capture point, what the trigger is, how often the record is reviewed, and what the retention period must be. The plan is revisited as the project changes shape.',
    category: 'Capture',
    relatedSlugs: ['coverage-gap'],
  },
  {
    slug: 'coverage-gap',
    term: 'Coverage gap',
    definition:
      'A part of the project programme that has no evidence layer, intentionally or otherwise.',
    category: 'Capture',
    relatedSlugs: ['capture-plan'],
  },
  {
    slug: 'time-aligned-record',
    term: 'Time-aligned record',
    definition:
      'A record whose timestamps can be cross-checked against schedule, weather, and gate data.',
    category: 'Evidence',
    relatedSlugs: ['ground-truth', 'chain-of-custody'],
  },
  {
    slug: 'evidence-grade',
    term: 'Evidence grade',
    definition:
      'Internal grading of a record by completeness, integrity, and chain of custody.',
    category: 'Evidence',
    relatedSlugs: ['chain-of-custody'],
  },
  {
    slug: 'chain-of-custody',
    term: 'Chain of custody',
    definition:
      'The documented hand-off path of a piece of evidence from capture to use.',
    longDefinition:
      'Each step in the chain answers two questions: who held the record, and what could they have changed. A clean chain reduces the time spent re-establishing trust when an owner, insurer, or court reviews the record.',
    category: 'Evidence',
    relatedSlugs: ['evidence-grade', 'time-aligned-record'],
  },
  {
    slug: 'closeout-record',
    term: 'Closeout record',
    definition:
      'The documented end-state of a workflow loop, kept for future reference.',
    category: 'Workflows',
    relatedSlugs: ['observation', 'escalation-path'],
  },
  {
    slug: 'observation',
    term: 'Observation',
    definition:
      'A tagged finding routed to an owner with an expected response time.',
    category: 'Workflows',
    relatedSlugs: ['escalation-path', 'closeout-record'],
  },
  {
    slug: 'escalation-path',
    term: 'Escalation path',
    definition:
      'The named chain of people who receive an observation when no one closes it in time.',
    category: 'Workflows',
    relatedSlugs: ['observation', 'closeout-record'],
  },
  {
    slug: 'programme-baseline',
    term: 'Programme baseline',
    definition:
      'The agreed reference programme against which actual progress is compared.',
    category: 'Workflows',
    relatedSlugs: ['progress-evidence', 'delay-event'],
  },
  {
    slug: 'progress-evidence',
    term: 'Progress evidence',
    definition:
      'Evidence assembled to demonstrate or dispute the state of physical work at a date.',
    category: 'Workflows',
    relatedSlugs: ['programme-baseline', 'time-aligned-record'],
  },
  {
    slug: 'delay-event',
    term: 'Delay event',
    definition:
      'A recorded event whose impact on the programme may be claimed for time, cost, or both.',
    longDefinition:
      'A delay event becomes useful only when its date, location, and duration can be cross-checked. Without that, the event is an assertion. With it, the event is a record that survives independent review by the owner, the contract administrator, and, if it gets that far, an adjudicator.',
    category: 'Risk',
    relatedSlugs: ['weather-record', 'claim-substantiation'],
  },
  {
    slug: 'weather-record',
    term: 'Weather record',
    definition:
      'The time-aligned weather data attached to a delay event for substantiation.',
    category: 'Evidence',
    relatedSlugs: ['delay-event', 'time-aligned-record'],
  },
  {
    slug: 'gate-record',
    term: 'Gate record',
    definition:
      'Captured movement of vehicles, people, and deliveries through a controlled access point.',
    category: 'Operations',
    relatedSlugs: ['delivery-verification', 'subcontractor-attendance'],
  },
  {
    slug: 'material-trace',
    term: 'Material trace',
    definition:
      'The link between a delivery, its location on site, and its installation record.',
    category: 'Operations',
    relatedSlugs: ['delivery-verification', 'gate-record'],
  },
  {
    slug: 'subcontractor-attendance',
    term: 'Subcontractor attendance',
    definition:
      'Verifiable evidence of who was on site, when, and at what package.',
    category: 'Operations',
    relatedSlugs: ['gate-record', 'access-control'],
  },
  {
    slug: 'safety-observation',
    term: 'Safety observation',
    definition:
      'A recorded near-miss, hazard, or unsafe act that becomes part of a safety workflow.',
    category: 'Risk',
    relatedSlugs: ['observation', 'incident-record'],
  },
  {
    slug: 'incident-record',
    term: 'Incident record',
    definition:
      'The assembled evidence and witness account of a reportable safety event.',
    longDefinition:
      'An incident record is built quickly and preserved carefully. It pairs the captured visual record with the written account, the medical record where relevant, and the regulator submission. The record is the artefact that survives; everything else is recollection.',
    category: 'Risk',
    relatedSlugs: ['safety-observation', 'chain-of-custody'],
  },
  {
    slug: 'quality-non-conformance',
    term: 'Quality non-conformance',
    definition:
      'A documented deviation between as-built reality and design intent.',
    category: 'Workflows',
    relatedSlugs: ['as-built-record', 'bim-deviation'],
  },
]
