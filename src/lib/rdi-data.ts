import costModelJson from '@/data/cost-model-assumptions.json'
import ledgerJson from '@/data/evercam-ledger.json'

type RawLedger = {
  source: string
  commit: string
  workflows: RawWorkflow[]
}

type RawWorkflow = {
  id: number
  slug: string
  name: string
  level: number
  parentSlug: string | null
  parentName: string | null
  evercamRole: string | null
  evercamRoleDescription: string | null
  confidence: string | null
  frequency: string | null
  evidenceCount: number | null
  trigger: string | null
  activity: string | null
  conclusion: string | null
  notes: string | null
  roiDescription: string | null
  catalogueRef: string | null
  hasCostModel: boolean
  isActive: boolean
  steps: {
    order: number
    description: string
    isInferred: boolean
  }[]
  evidence: {
    quote: string
    source: string | null
    insightType: string
    isInferred: boolean
  }[]
  tags: string[]
  flags: {
    type: string
    description: string
    resolved: boolean
  }[]
}

type CostModelAssumptions = {
  model_templates: Record<
    string,
    {
      id: string
      description: string
      formula: string
      presentation_note?: string
    }
  >
  workflow_assumptions: {
    workflow_id: number
    workflow_name: string
    model_template: string
    evercam_role: string
    assumptions: Record<string, unknown>
  }[]
}

export type Workflow = {
  sourceId: number
  code: string
  slug: string
  name: string
  categoryCode: string | null
  category: string | null
  categorySlug: string | null
  evercamRole: string | null
  evercamRoleDescription: string | null
  frequency: string | null
  confidence: string | null
  evidenceCount: number
  description: string
  trigger: string
  activity: string
  conclusion: string
  notes: string | null
  roiDescription: string | null
  priority: boolean
  hasCostModel: boolean
  isActive: boolean
  steps: RawWorkflow['steps']
  evidence: RawWorkflow['evidence']
  tags: string[]
  flags: RawWorkflow['flags']
}

export type WorkflowPack = {
  slug: string
  title: string
  kicker: string
  summary: string
  commercialStory: string
  categories: string[]
  primaryBuyers: string[]
  roiThemes: string[]
}

export type Course = {
  slug: string
  title: string
  level: 'Foundation' | 'Practitioner' | 'Executive'
  estimatedMinutes: number
  summary: string
  lessons: {
    slug: string
    title: string
    summary: string
    estimatedMinutes: number
    sections: {
      title: string
      body: string
    }[]
    checkpoint: string
  }[]
}

const ledger = ledgerJson as RawLedger
export const ledgerSource = {
  commit: ledger.commit,
  source: ledger.source,
}

const costModels = costModelJson as CostModelAssumptions

function titleCaseEnum(value: string | null) {
  if (!value) return null

  return value
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function workflowDescription(workflow: RawWorkflow) {
  return (
    workflow.roiDescription ||
    workflow.evercamRoleDescription ||
    workflow.activity ||
    workflow.notes ||
    'A construction workflow where captured reality helps teams understand, evidence, and act on what happened on site.'
  )
}

export const workflowCategories = ledger.workflows
  .filter((workflow) => workflow.level === 1)
  .sort((a, b) => a.name.localeCompare(b.name))

export const workflows: Workflow[] = ledger.workflows
  .filter((workflow) => workflow.level === 2)
  .map((workflow) => {
    const confidence = titleCaseEnum(workflow.confidence)
    const frequency = titleCaseEnum(workflow.frequency)
    const evercamRole = titleCaseEnum(workflow.evercamRole)

    return {
      sourceId: workflow.id,
      code: workflow.catalogueRef || String(workflow.id),
      slug: workflow.slug,
      name: workflow.name,
      categoryCode: workflow.parentSlug,
      category: workflow.parentName,
      categorySlug: workflow.parentSlug,
      evercamRole,
      evercamRoleDescription: workflow.evercamRoleDescription,
      frequency,
      confidence,
      evidenceCount: workflow.evidenceCount || workflow.evidence.length,
      description: workflowDescription(workflow),
      trigger: workflow.trigger || 'A project condition, review point, incident, or claim creates the need for evidence.',
      activity: workflow.activity || 'The project team uses captured site reality to verify the condition and assemble evidence.',
      conclusion: workflow.conclusion || 'The team reaches a defensible decision and keeps the record available for later review.',
      notes: workflow.notes,
      roiDescription: workflow.roiDescription,
      priority: workflow.isActive && workflow.confidence === 'high' && workflow.frequency === 'very_common',
      hasCostModel: workflow.hasCostModel,
      isActive: workflow.isActive,
      steps: workflow.steps,
      evidence: workflow.evidence,
      tags: workflow.tags,
      flags: workflow.flags,
    }
  })
  .sort((a, b) => {
    if (a.priority !== b.priority) return a.priority ? -1 : 1
    return a.name.localeCompare(b.name)
  })

export const workflowPacks: WorkflowPack[] = [
  {
    slug: 'progress-verification',
    title: 'Progress Verification',
    kicker: 'The core RDI workflow pack',
    summary:
      'Verify whether planned work is actually progressing through live views, 360 capture, time-lapse, milestone comparison, and documented reporting.',
    commercialStory:
      'Progress verification turns visibility into project control: fewer routine visits, faster programme review, and a reliable record when progress is questioned.',
    categories: ['Progress Tracking & Documentation'],
    primaryBuyers: ['Project director', 'Planner', 'Owner representative'],
    roiThemes: ['Reduced site visits', 'faster reporting', 'schedule confidence'],
  },
  {
    slug: 'claims-evidence',
    title: 'Claims & Evidence',
    kicker: 'The CFO and commercial risk story',
    summary:
      'Create a reliable project record for delay events, weather disruption, subcontractor claims, payment disputes, injury claims, and legal evidence.',
    commercialStory:
      'Claims and evidence is where RDI protects money. The value is not footage storage; it is the ability to establish what happened when responsibility is disputed.',
    categories: ['Claims, Disputes & Legal Evidence'],
    primaryBuyers: ['Commercial director', 'CFO', 'Claims manager', 'Quantity surveyor'],
    roiThemes: ['Dispute avoidance', 'faster evidence retrieval', 'reduced legal exposure'],
  },
  {
    slug: 'design-verification',
    title: 'Design Verification',
    kicker: 'Reality against model and intent',
    summary:
      'Connect BIM, 360 capture, visual comparison, and quality evidence so teams can validate as-built reality against design intent.',
    commercialStory:
      'Design verification matters because rework is expensive and late discovery compounds. RDI gives teams earlier evidence of deviation.',
    categories: ['Design Verification & Quality'],
    primaryBuyers: ['Design manager', 'Quality manager', 'Digital construction lead'],
    roiThemes: ['Reduced rework', 'earlier issue discovery', 'quality assurance'],
  },
  {
    slug: 'stakeholder-reporting',
    title: 'Stakeholder Reporting',
    kicker: 'Reliable communication without manual chasing',
    summary:
      'Turn project reality into owner updates, OAC meeting evidence, investor reporting, time-lapse deliverables, and board-ready communication.',
    commercialStory:
      'Stakeholder reporting is often the first visible value: it reduces manual update work and gives owners direct confidence in progress.',
    categories: ['Stakeholder Reporting & Communication', 'Content, Marketing & Business Development'],
    primaryBuyers: ['Owner representative', 'Marketing lead', 'Project director'],
    roiThemes: ['Automated reporting', 'stakeholder confidence', 'marketing output'],
  },
  {
    slug: 'gate-logistics',
    title: 'Gate & Logistics',
    kicker: 'Control movement, access, and material evidence',
    summary:
      'Monitor gate activity, vehicle movement, theft, deliveries, logistics evidence, and site security using persistent site records.',
    commercialStory:
      'Gate and logistics is a clear replacement story because teams already spend heavily on access control, guards, delivery checks, and incident investigations.',
    categories: ['Security, Theft & Access Control', 'Specialist Capture & Emerging Technology'],
    primaryBuyers: ['Operations manager', 'Security manager', 'Logistics manager'],
    roiThemes: ['Guard replacement', 'theft investigation', 'delivery verification'],
  },
  {
    slug: 'safety-monitoring',
    title: 'Safety Monitoring',
    kicker: 'Evidence, observations, and action loops',
    summary:
      'Review incidents, monitor PPE and high-risk work, preserve evidence, and close safety loops with accountable follow-up.',
    commercialStory:
      'Safety becomes a workflow when detection leads to an observation, an assignment, a correction, and a retained record.',
    categories: ['Safety Monitoring & Incident Management'],
    primaryBuyers: ['Health and safety director', 'Site manager', 'Risk lead'],
    roiThemes: ['Incident review', 'risk reduction', 'safety meeting evidence'],
  },
  {
    slug: 'subcontractor-performance',
    title: 'Subcontractor Performance',
    kicker: 'Evidence for attendance, quality, and payment',
    summary:
      'Support labour verification, invoice disputes, quality checks, attendance records, and package-level performance conversations.',
    commercialStory:
      'Subcontractor performance turns captured reality into commercial leverage when teams need to verify what was done, when, and by whom.',
    categories: ['Subcontractor & Labour Management'],
    primaryBuyers: ['Commercial manager', 'Package manager', 'Quantity surveyor'],
    roiThemes: ['Payment accuracy', 'attendance verification', 'quality evidence'],
  },
  {
    slug: 'compliance-record',
    title: 'Compliance Record',
    kicker: 'The durable proof layer',
    summary:
      'Keep visual evidence aligned to regulatory, environmental, audit, governance, and closeout requirements.',
    commercialStory:
      'Compliance record is quiet until it matters. RDI reduces the need to reconstruct the past when regulators, insurers, owners, or legal teams ask for proof.',
    categories: ['Compliance & Regulatory'],
    primaryBuyers: ['Compliance manager', 'Environmental manager', 'Project director'],
    roiThemes: ['Audit readiness', 'regulatory evidence', 'risk reduction'],
  },
]

export const courses: Course[] = [
  {
    slug: 'rdi-foundations',
    title: 'Reality-Driven Intelligence Foundations',
    level: 'Foundation',
    estimatedMinutes: 64,
    summary:
      'A practical course on the RDI stack, workflow thinking, evidence quality, ROI language, and how to apply the workflow library to real construction decisions.',
    lessons: [
      {
        slug: 'what-rdi-means',
        title: 'What RDI means',
        summary: 'Define the five layers of RDI and the shift from site visibility to operational command.',
        estimatedMinutes: 10,
        sections: [
          {
            title: 'Definition',
            body:
              'Reality-Driven Intelligence is an operating discipline for converting captured site reality into evidence, interpretation, action, and control. Cameras are only the first layer. RDI begins to matter when the record changes a project decision.',
          },
          {
            title: 'The five layers',
            body:
              'Reality capture records the site. Ground truth makes the record reliable. Interpretation identifies meaning. Action routes the finding into tasks, escalations, or reports. Command lets leaders direct attention across projects.',
          },
          {
            title: 'Why this is a category',
            body:
              'Construction teams do not need another passive archive. They need a way to prove conditions, understand exceptions, act faster, and learn from recurring patterns.',
          },
        ],
        checkpoint: 'In one sentence, explain how RDI differs from a construction camera system.',
      },
      {
        slug: 'ground-truth-and-evidence',
        title: 'Ground truth and evidence quality',
        summary: 'Learn what makes site reality usable when schedule, safety, cost, or responsibility is disputed.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'Ground truth',
            body:
              'Ground truth is time-aligned, location-aware evidence that can be trusted by site teams, commercial teams, owners, insurers, or legal reviewers. It needs context: where, when, what changed, who is affected, and how the record was preserved.',
          },
          {
            title: 'Evidence quality',
            body:
              'Useful evidence is specific. A timestamped clip, a camera view, a weather report, a gate record, or a 360 walk is stronger when it connects directly to the decision being made.',
          },
          {
            title: 'Preservation',
            body:
              'Incident and claim workflows are time-sensitive. If evidence is not preserved, the project may lose the only objective record of what happened.',
          },
        ],
        checkpoint: 'Which metadata would you want attached to a clip used in a delay claim?',
      },
      {
        slug: 'workflow-thinking',
        title: 'Workflow thinking',
        summary: 'Translate features into closed-loop workflows that change daily site behaviour.',
        estimatedMinutes: 14,
        sections: [
          {
            title: 'Feature thinking',
            body:
              'A feature gives a user a capability, such as search, playback, compare, or export. A feature can be valuable, but by itself it may still leave the user responsible for turning output into action.',
          },
          {
            title: 'Workflow thinking',
            body:
              'A workflow starts with a trigger, performs an activity, reaches a conclusion, and leaves an evidence trail. The workflow is complete only when the decision or action loop is closed.',
          },
          {
            title: 'The safety example',
            body:
              'Searching for a person near a machine is useful. A stronger workflow detects a risk, creates an observation, assigns ownership, escalates if unresolved, records closeout, and reports recurrence.',
          },
        ],
        checkpoint: 'Pick one Evercam feature and describe the workflow it should complete.',
      },
      {
        slug: 'roi-language',
        title: 'ROI language',
        summary: 'Connect RDI workflows to financial outcomes, risk reduction, and operational capacity.',
        estimatedMinutes: 15,
        sections: [
          {
            title: 'Operational savings',
            body:
              'Some workflows reduce predictable recurring work: site visits, manual reporting, progress-photo distribution, meeting preparation, and evidence retrieval.',
          },
          {
            title: 'Risk mitigation',
            body:
              'Other workflows reduce exposure to low-frequency but high-cost events: disputes, theft, injuries, weather claims, regulatory events, and rework.',
          },
          {
            title: 'Credibility',
            body:
              'RDI ROI must show assumptions, ranges, evidence, and confidence. A directional public calculator can educate the market, while a production ROI report should use project-specific data.',
          },
        ],
        checkpoint: 'Why should risk mitigation be presented separately from operational savings?',
      },
      {
        slug: 'using-the-workflow-library',
        title: 'Using the workflow library',
        summary: 'Apply workflow packs, evidence, steps, and cost-model assumptions to a project conversation.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Use cases and workflows',
            body:
              'Use cases help buyers browse. Workflows prove value. A workflow pack combines related workflows into a commercial story that sales, product, and customers can understand.',
          },
          {
            title: 'Reading a workflow',
            body:
              'Start with the trigger, activity, and conclusion. Then review evidence, steps, confidence, frequency, current fulfilment role, and whether a cost model exists.',
          },
          {
            title: 'Applying the library',
            body:
              'For a project conversation, select the relevant workflow pack, identify which workflows apply, check the evidence and cost-model assumptions, then decide what should be included in the ROI or site plan.',
          },
        ],
        checkpoint: 'What makes a workflow suitable for an ROI calculation rather than a qualitative benefit?',
      },
    ],
  },
]

export const glossaryTerms = [
  {
    slug: 'reality-driven-intelligence',
    term: 'Reality-Driven Intelligence',
    definition:
      'A construction intelligence discipline that turns captured site reality into ground truth, interpretation, action, and project-level command.',
  },
  {
    slug: 'ground-truth',
    term: 'Ground truth',
    definition:
      'Time-aligned, location-aware evidence of what happened on site, created from cameras, 360 capture, drone imagery, records, and related site data.',
  },
  {
    slug: 'workflow-pack',
    term: 'Workflow pack',
    definition:
      'A market-facing commercial story made from multiple workflows, product surfaces, evidence types, and ROI levers.',
  },
  {
    slug: 'command-layer',
    term: 'Command layer',
    definition:
      'The portfolio and executive layer where patterns, exceptions, and outcome signals help leaders coordinate action across projects.',
  },
  {
    slug: 'evidence-count',
    term: 'Evidence count',
    definition:
      'A signal in the workflow ledger showing how much customer or field evidence supports a workflow definition.',
  },
]

export const initialPosts = [
  {
    slug: 'why-rdi-is-not-another-camera-category',
    title: 'Why RDI is not another camera category',
    date: '2026-04-20',
    summary:
      'The shift from construction cameras to Reality-Driven Intelligence is a shift from footage to evidence, action, and better project decisions.',
  },
  {
    slug: 'workflow-thinking-before-feature-thinking',
    title: 'Workflow thinking before feature thinking',
    date: '2026-04-20',
    summary:
      'Smart features become valuable when they complete a workflow that helps someone decide, act, and close the loop.',
  },
  {
    slug: 'the-cfo-case-for-claims-evidence',
    title: 'The CFO case for Claims & Evidence',
    date: '2026-04-20',
    summary:
      'RDI earns executive attention when it protects money at risk: claims, disputes, delay records, and payment evidence.',
  },
]

export const heroImage =
  'https://evercam.io/wp-content/uploads/2024/02/360-on-Project-Site-1536x899.jpg'

export const rdiLayers = [
  {
    id: 5,
    title: 'Command',
    body: 'Leaders direct attention, coordinate response, and measure outcomes.',
  },
  {
    id: 4,
    title: 'Action',
    body: 'Alerts, workflows, escalations, tasks, and automated follow-ups.',
  },
  {
    id: 3,
    title: 'Interpretation',
    body: 'AI detects patterns, exceptions, risks, and likely outcomes.',
  },
  {
    id: 2,
    title: 'Ground truth',
    body: 'Time-aligned, location-aware evidence of what is actually happening.',
  },
  {
    id: 1,
    title: 'Reality capture',
    body: 'Sensors, cameras, wearables, equipment telemetry, and site activity.',
  },
]

export function getWorkflowPack(slug: string) {
  return workflowPacks.find((pack) => pack.slug === slug)
}

export function getWorkflow(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug)
}

export function getWorkflowsForPack(pack: WorkflowPack) {
  return workflows.filter((workflow) => workflow.category && pack.categories.includes(workflow.category))
}

export function getPriorityWorkflows() {
  return workflows.filter((workflow) => workflow.priority)
}

export function getCostModelForWorkflow(workflow: Workflow) {
  const assumption = costModels.workflow_assumptions.find(
    (item) => item.workflow_id === workflow.sourceId || item.workflow_name === workflow.name,
  )

  if (!assumption) return null

  const template = costModels.model_templates[assumption.model_template]

  return {
    ...assumption,
    template,
  }
}

export function getWorkflowPackStats(pack: WorkflowPack) {
  const packWorkflows = getWorkflowsForPack(pack)
  const active = packWorkflows.filter((workflow) => workflow.isActive)

  return {
    total: packWorkflows.length,
    active: active.length,
    evidenceCount: active.reduce((sum, workflow) => sum + workflow.evidenceCount, 0),
    highConfidence: active.filter((workflow) => workflow.confidence === 'High').length,
    veryCommon: active.filter((workflow) => workflow.frequency === 'Very Common').length,
    replacement: active.filter((workflow) => workflow.evercamRole?.includes('Replacement')).length,
    costModels: active.filter((workflow) => getCostModelForWorkflow(workflow)).length,
  }
}

export function getWorkflowStats() {
  const active = workflows.filter((workflow) => workflow.isActive)

  return {
    total: active.length,
    canonical: workflows.length,
    categories: workflowCategories.length,
    packs: workflowPacks.length,
    priority: getPriorityWorkflows().length,
    replacement: active.filter((workflow) => workflow.evercamRole?.includes('Replacement')).length,
    supporting: active.filter((workflow) => workflow.evercamRole?.includes('Supporting')).length,
    evidenceCount: active.reduce((sum, workflow) => sum + workflow.evidenceCount, 0),
    costModels: active.filter((workflow) => getCostModelForWorkflow(workflow)).length,
  }
}
