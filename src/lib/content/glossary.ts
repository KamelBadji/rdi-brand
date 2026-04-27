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
  {
    slug: 'as-built-record',
    term: 'As-built record',
    definition:
      'The verifiable record of how the project was actually built, used in handover.',
    category: 'Workflows',
    relatedSlugs: ['handover-pack', 'quality-non-conformance'],
  },
  {
    slug: 'handover-pack',
    term: 'Handover pack',
    definition:
      'The closeout deliverable assembled from progress, quality, and compliance evidence.',
    category: 'Compliance',
    relatedSlugs: ['as-built-record', 'closeout-archive'],
  },
  {
    slug: 'audit-readiness',
    term: 'Audit readiness',
    definition:
      'The state in which evidence required by a regulator or owner can be retrieved on demand.',
    category: 'Compliance',
    relatedSlugs: ['regulatory-event', 'evidence-retrieval-time'],
  },
  {
    slug: 'regulatory-event',
    term: 'Regulatory event',
    definition:
      'An inspection, audit, or finding that requires documented project evidence.',
    category: 'Compliance',
    relatedSlugs: ['audit-readiness', 'closeout-archive'],
  },
  {
    slug: 'oac-meeting',
    term: 'OAC meeting',
    definition:
      'Owner, architect, and contractor coordination meeting where progress evidence is reviewed.',
    category: 'Roles',
    relatedSlugs: ['meeting-evidence-pack', 'progress-evidence'],
  },
  {
    slug: 'commercial-director',
    term: 'Commercial director',
    definition:
      'The role accountable for project margin, claims, and contractual exposure.',
    category: 'Roles',
    relatedSlugs: ['claim-substantiation', 'package-manager'],
  },
  {
    slug: 'package-manager',
    term: 'Package manager',
    definition:
      'The person accountable for a single trade or works package.',
    category: 'Roles',
    relatedSlugs: ['subcontractor-attendance', 'commercial-director'],
  },
  {
    slug: 'digital-construction-lead',
    term: 'Digital construction lead',
    definition:
      'The person responsible for digital tools, BIM coordination, and reality data on a project.',
    category: 'Roles',
    relatedSlugs: ['bim-deviation', 'capture-plan'],
  },
  {
    slug: 'evidence-retrieval-time',
    term: 'Evidence retrieval time',
    definition:
      'How long it takes to locate and assemble a specific piece of project evidence.',
    category: 'Economics',
    relatedSlugs: ['evidence-search', 'manual-reporting-load'],
  },
  {
    slug: 'manual-reporting-load',
    term: 'Manual reporting load',
    definition:
      'The recurring time cost of preparing progress and safety updates without automation.',
    category: 'Economics',
    relatedSlugs: ['evidence-retrieval-time', 'replacement-workflow'],
  },
  {
    slug: 'risk-mitigation-credit',
    term: 'Risk mitigation credit',
    definition:
      'The value attributed to avoiding a low-frequency, high-cost project event.',
    longDefinition:
      'A credit is sized by the cost of the event, the probability of recurrence, and the share of risk an evidence layer can plausibly remove. Credits are presented with a confidence band rather than as a point estimate, so the conversation stays honest.',
    category: 'Economics',
    relatedSlugs: ['confidence-band', 'dispute-prevention'],
  },
  {
    slug: 'confidence-band',
    term: 'Confidence band',
    definition:
      'The published low, mid, and high range around an ROI assumption.',
    category: 'Economics',
    relatedSlugs: ['directional-assumption', 'risk-mitigation-credit'],
  },
  {
    slug: 'directional-assumption',
    term: 'Directional assumption',
    definition:
      'A public assumption used to educate the market until project-specific data is available.',
    category: 'Economics',
    relatedSlugs: ['confidence-band'],
  },
  {
    slug: 'replacement-workflow',
    term: 'Replacement workflow',
    definition:
      'A workflow where RDI replaces a manual or third-party service the project already pays for.',
    category: 'Workflows',
    relatedSlugs: ['supporting-workflow', 'manual-reporting-load'],
  },
  {
    slug: 'supporting-workflow',
    term: 'Supporting workflow',
    definition:
      'A workflow where RDI supports an existing process rather than replacing it.',
    category: 'Workflows',
    relatedSlugs: ['replacement-workflow', 'risk-mitigation-credit'],
  },
  {
    slug: 'command-view',
    term: 'Command view',
    definition:
      'The cross-project portfolio view that helps leaders triage exceptions.',
    category: 'Foundations',
    relatedSlugs: ['command-layer', 'pattern-of-recurrence'],
  },
  {
    slug: 'pattern-of-recurrence',
    term: 'Pattern of recurrence',
    definition:
      'Repeated evidence of the same exception across projects, escalated to the command view.',
    category: 'Foundations',
    relatedSlugs: ['command-view', 'portfolio-pattern'],
  },
  {
    slug: 'evidence-saturation',
    term: 'Evidence saturation',
    definition:
      'The point at which adding more raw recordings stops improving decision quality.',
    category: 'Capture',
    relatedSlugs: ['capture-density', 'capture-plan'],
  },
  {
    slug: '360-walk',
    term: '360 walk',
    definition:
      'A structured 360-degree capture along a defined route, repeatable over time.',
    category: 'Capture',
    relatedSlugs: ['fixed-camera-view', 'mobile-capture'],
  },
  {
    slug: 'time-lapse',
    term: 'Time-lapse',
    definition:
      'A compressed visual record of progress at a fixed view, used for reporting and review.',
    category: 'Capture',
    relatedSlugs: ['fixed-camera-view', 'progress-evidence'],
  },
  {
    slug: 'drone-survey',
    term: 'Drone survey',
    definition:
      'A scheduled aerial capture for progress, earthworks, or safety review.',
    category: 'Capture',
    relatedSlugs: ['progress-evidence', 'capture-plan'],
  },
  {
    slug: 'fixed-camera-view',
    term: 'Fixed camera view',
    definition:
      'A persistent camera position whose framing does not change between captures.',
    category: 'Capture',
    relatedSlugs: ['time-lapse', 'mobile-capture'],
  },
  {
    slug: 'mobile-capture',
    term: 'Mobile capture',
    definition:
      'Opportunistic site walks recorded by phone, helmet, or wearable.',
    category: 'Capture',
    relatedSlugs: ['360-walk', 'fixed-camera-view'],
  },
  {
    slug: 'capture-density',
    term: 'Capture density',
    definition:
      'The number of effective capture points per unit of project area or activity.',
    category: 'Capture',
    relatedSlugs: ['evidence-saturation', 'capture-plan'],
  },
  {
    slug: 'interpretation-layer',
    term: 'Interpretation layer',
    definition:
      'The analysis step where captured reality becomes a finding with meaning and ownership.',
    category: 'Foundations',
    relatedSlugs: ['action-routing', 'outcome-measurement'],
  },
  {
    slug: 'action-routing',
    term: 'Action routing',
    definition:
      'Turning a finding into a task, observation, or escalation with a named owner.',
    category: 'Foundations',
    relatedSlugs: ['interpretation-layer', 'escalation-path'],
  },
  {
    slug: 'outcome-measurement',
    term: 'Outcome measurement',
    definition:
      'The closing measurement step that records whether the action changed the project.',
    category: 'Foundations',
    relatedSlugs: ['interpretation-layer', 'action-routing'],
  },
  {
    slug: 'reality-driven-decision',
    term: 'Reality-driven decision',
    definition:
      'A project decision made with time-aligned, location-aware evidence rather than recollection.',
    category: 'Foundations',
    relatedSlugs: ['ground-truth', 'reality-driven-intelligence'],
  },
  {
    slug: 'dispute-prevention',
    term: 'Dispute prevention',
    definition:
      'Workflow design that reduces the likelihood of a dispute reaching a formal claim.',
    category: 'Risk',
    relatedSlugs: ['claim-substantiation', 'risk-mitigation-credit'],
  },
  {
    slug: 'claim-substantiation',
    term: 'Claim substantiation',
    definition:
      'The body of evidence assembled to support a formal claim or counterclaim.',
    category: 'Risk',
    relatedSlugs: ['delay-event', 'weather-claim'],
  },
  {
    slug: 'payment-evidence',
    term: 'Payment evidence',
    definition:
      'The evidence that supports or disputes an interim payment application.',
    category: 'Economics',
    relatedSlugs: ['progress-claim', 'progress-evidence'],
  },
  {
    slug: 'delivery-verification',
    term: 'Delivery verification',
    definition:
      'Confirming a delivery against its docket, including time, place, and contents.',
    category: 'Operations',
    relatedSlugs: ['gate-record', 'material-trace'],
  },
  {
    slug: 'theft-investigation',
    term: 'Theft investigation',
    definition:
      'The post-incident workflow that uses captured records to identify when and how property left site.',
    category: 'Risk',
    relatedSlugs: ['gate-record', 'access-control'],
  },
  {
    slug: 'access-control',
    term: 'Access control',
    definition:
      'The discipline of who can enter site, when, and through which route, evidenced by capture.',
    category: 'Operations',
    relatedSlugs: ['gate-record', 'subcontractor-attendance'],
  },
  {
    slug: 'evidence-search',
    term: 'Evidence search',
    definition:
      'The act of finding the relevant clip or record for a specific decision.',
    category: 'Workflows',
    relatedSlugs: ['evidence-retrieval-time', 'evidence-export'],
  },
  {
    slug: 'evidence-export',
    term: 'Evidence export',
    definition:
      'Preparing a clip or record in a format suitable for an owner, insurer, or court.',
    category: 'Workflows',
    relatedSlugs: ['chain-of-custody', 'evidence-search'],
  },
  {
    slug: 'meeting-evidence-pack',
    term: 'Meeting evidence pack',
    definition:
      'The evidence assembled before an OAC, programme, or safety meeting.',
    category: 'Workflows',
    relatedSlugs: ['oac-meeting', 'progress-evidence'],
  },
  {
    slug: 'closeout-archive',
    term: 'Closeout archive',
    definition:
      'The long-lived evidence archive retained after handover for warranty and disputes.',
    category: 'Compliance',
    relatedSlugs: ['handover-pack', 'audit-readiness'],
  },
  {
    slug: 'progress-claim',
    term: 'Progress claim',
    definition:
      'An interim or final claim for payment based on quantified work in place.',
    category: 'Economics',
    relatedSlugs: ['payment-evidence', 'progress-evidence'],
  },
  {
    slug: 'weather-claim',
    term: 'Weather claim',
    definition:
      'A claim for time or cost rooted in weather conditions, evidenced by site capture and meteorology.',
    category: 'Risk',
    relatedSlugs: ['weather-record', 'delay-event'],
  },
  {
    slug: 'stand-down',
    term: 'Stand-down',
    definition:
      'An interruption to work, recorded so its programme impact can be quantified.',
    category: 'Risk',
    relatedSlugs: ['delay-event', 'claim-substantiation'],
  },
]
