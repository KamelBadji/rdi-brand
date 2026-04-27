import costModelJson from '@/data/cost-model-assumptions.json'
import ledgerJson from '@/data/evercam-ledger.json'

import { courses as courseList } from './content/courses'
import { fieldNotes as fieldNoteList } from './content/field-notes'
import { glossaryTerms as glossaryList } from './content/glossary'
import { knowledgeBaseArticles, knowledgeBaseAreas } from './content/knowledge-base'
import { caseStudies as caseStudyList } from './content/case-studies'

export type { Course, CourseLesson, FieldNote, GlossaryTerm, KnowledgeBaseArticle, CaseStudy, ArticleBlock } from './content/types'

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

function publicLedgerText(value: string | null | undefined) {
  if (!value) return null

  return value
    .replace(/\bEvercam's Gate Report ANPR system\b/g, 'A gate-report ANPR system')
    .replace(/\bEvercam support assists\b/g, 'Support teams assist')
    .replace(/\bEvercam cloud and local recordings\b/g, 'cloud and local recordings')
    .replace(/\bEvercam cloud recordings\b/g, 'cloud recordings')
    .replace(/\bEvercam camera recordings\b/g, 'fixed camera recordings')
    .replace(/\bEvercam drone footage\b/g, 'drone footage')
    .replace(/\bEvercam footage\b/g, 'preserved footage')
    .replace(/\bEvercam\b/g, 'the evidence system')
    .replace(/\bAkaysha Energy\b/g, 'An anonymized energy project')
    .replace(/\bGlenveagh\b/g, 'An anonymized residential project')
    .replace(/\bBarnhill Contracting\b/g, 'An anonymized contractor')
    .replace(/\bBarnhill\b/g, 'An anonymized contractor')
}

function workflowDescription(workflow: RawWorkflow) {
  return publicLedgerText(
    workflow.roiDescription ||
    workflow.evercamRoleDescription ||
    workflow.activity ||
    workflow.notes ||
      'A construction workflow where captured reality helps teams understand, evidence, and act on what happened on site.',
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
      evercamRoleDescription: publicLedgerText(workflow.evercamRoleDescription),
      frequency,
      confidence,
      evidenceCount: workflow.evidenceCount || workflow.evidence.length,
      description: workflowDescription(workflow) as string,
      trigger:
        publicLedgerText(workflow.trigger) ||
        'A project condition, review point, incident, or claim creates the need for evidence.',
      activity:
        publicLedgerText(workflow.activity) ||
        'The project team uses captured site reality to verify the condition and assemble evidence.',
      conclusion:
        publicLedgerText(workflow.conclusion) ||
        'The team reaches a defensible decision and keeps the record available for later review.',
      notes: publicLedgerText(workflow.notes),
      roiDescription: publicLedgerText(workflow.roiDescription),
      priority: workflow.isActive && workflow.confidence === 'high' && workflow.frequency === 'very_common',
      hasCostModel: workflow.hasCostModel,
      isActive: workflow.isActive,
      steps: workflow.steps.map((step) => ({
        ...step,
        description: publicLedgerText(step.description) || step.description,
      })),
      evidence: workflow.evidence.map((item, index) => ({
        ...item,
        quote: publicLedgerText(item.quote) || item.quote,
        source: item.source
          ? `Anonymized evidence record ${workflow.catalogueRef || workflow.id}.${index + 1}`
          : null,
      })),
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
      'Progress verification turns visibility into project control: faster programme review, stronger schedule confidence, and a reliable record when progress is questioned.',
    categories: ['Progress Tracking & Documentation'],
    primaryBuyers: ['Project director', 'Planner', 'Owner representative'],
    roiThemes: ['Schedule confidence', 'faster reporting', 'decision-ready progress evidence'],
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
      'Subcontractor performance turns captured reality into commercial evidence when teams need to verify what was done, when, and by whom.',
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

export const courses = courseList
export const glossaryTerms = glossaryList
export const fieldNotes = fieldNoteList
export const initialPosts = fieldNoteList
export const caseStudies = caseStudyList
export { knowledgeBaseArticles, knowledgeBaseAreas }

export const heroImage =
  '/rdi-hero.jpg'

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
    title: 'Ground Truth',
    body: 'Time-aligned, location-aware evidence of what is actually happening.',
  },
  {
    id: 1,
    title: 'Reality Capture',
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
