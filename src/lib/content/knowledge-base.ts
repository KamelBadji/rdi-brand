import type { KnowledgeBaseArticle } from './types'

export const knowledgeBaseAreas = [
  {
    slug: 'foundations',
    title: 'Foundations',
    summary: 'Definitions, category boundaries, the RDI stack, maturity model, and manifesto.',
  },
  {
    slug: 'workflows',
    title: 'Workflows',
    summary: 'Workflow packs, triggers, evidence, decisions, actions, outcomes, and cost models.',
  },
  {
    slug: 'evidence-quality',
    title: 'Evidence quality',
    summary: 'How to judge whether a record is trustworthy enough for claims, safety, quality, and reporting.',
  },
  {
    slug: 'rdi-economics',
    title: 'RDI economics',
    summary: 'How to separate confidence, evidence, capacity, risk reduction, and confidence ranges.',
  },
  {
    slug: 'learning-paths',
    title: 'Learning paths',
    summary: 'Courses and role-based learning for commercial, project, safety, owner, and digital teams.',
  },
  {
    slug: 'planning-tools',
    title: 'Planning tools',
    summary: 'Maturity assessment, site planning, project brief, and workflow selection.',
  },
] as const

export const knowledgeBaseArticles: KnowledgeBaseArticle[] = [
  {
    slug: 'what-is-rdi-canonical',
    title: 'What is Reality-Driven Intelligence',
    summary:
      'The canonical reference definition of RDI: the discipline, the five layers, the category boundary, and why the category is emerging now.',
    area: 'foundations',
    readingMinutes: 8,
    related: ['the-rdi-stack', 'category-boundary-with-cameras', 'the-rdi-maturity-curve'],
    body: [
      {
        kind: 'paragraph',
        body: 'Reality-Driven Intelligence is the discipline for turning construction reality into trusted evidence, decision-ready interpretation, accountable action, and measurable command. It is not a product, a feature, or a category of hardware. It is the operating discipline that decides what gets recorded, how the record becomes trustworthy, what is done with it, and how the project, the portfolio, and the organisation learn from it.',
      },
      {
        kind: 'heading',
        body: 'A discipline, not a product',
      },
      {
        kind: 'paragraph',
        body: 'Construction has bought reality-capture products for years. Cameras, 360 walk tools, drones, time-lapse rigs, wearables, gate readers — these are the inputs to RDI, not RDI itself. Buying any one of them does not change the project decision rhythm on its own. RDI is the discipline that makes the rhythm change.',
      },
      {
        kind: 'paragraph',
        body: 'Like quality assurance or programme management, RDI lives in operating routines, named owners, agreed evidence rules, and measurable outcomes. The hardware and software are the tools that make the discipline possible at scale. They are not a substitute for it.',
      },
      {
        kind: 'heading',
        body: 'The five layers',
      },
      {
        kind: 'list',
        items: [
          'Reality capture — the base layer that records what happened on site.',
          'Ground truth — the layer that makes the captured record trustworthy by time, location, scope, and preservation.',
          'Interpretation — the layer that finds patterns, exceptions, and risk signals in the record.',
          'Action — the layer that routes findings into tasks, observations, escalations, and closeout.',
          'Command — the portfolio layer where leaders direct attention across projects and measure outcomes over time.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'Each layer is necessary, and each one degrades when the layer below it is missing. Capture without ground truth produces an archive that no one can trust. Interpretation without action produces dashboards that no one acts on. Action without command produces local fixes that do not become learning.',
      },
      {
        kind: 'heading',
        body: 'The category boundary',
      },
      {
        kind: 'paragraph',
        body: 'RDI is not the same as buying construction cameras, AI-on-images platforms, or BIM coordination tools. Cameras are the lowest layer of capture. AI-on-images platforms typically span capture and interpretation but stop short of routing accountable action. BIM coordination operates on the design model rather than on the as-built record. RDI is the discipline that joins these layers into a closed decision loop, with a portfolio command view on top.',
      },
      {
        kind: 'callout',
        title: 'Why now',
        body: 'Construction projects have more capture density, more compliance pressure, more dispute exposure, and more programme complexity than ever. The bottleneck has moved from access to evidence to making evidence change decisions in time. That is the work RDI organises.',
      },
      {
        kind: 'paragraph',
        body: 'A practical test: imagine the next ten programme, claims, safety, and quality decisions a project must make. For how many of them is there an evidence-based route from trigger to closeout, with a named owner and a retained record? The answer is the project´s current RDI maturity.',
      },
    ],
  },
  {
    slug: 'the-rdi-stack',
    title: 'The RDI stack',
    summary: 'A layer-by-layer walkthrough of capture, ground truth, interpretation, action, and command, and what each layer needs to function.',
    area: 'foundations',
    readingMinutes: 7,
    related: ['what-is-rdi-canonical', 'the-rdi-maturity-curve', 'workflow-anatomy'],
    body: [
      {
        kind: 'paragraph',
        body: 'The RDI stack has five layers. Each one depends on the one below it. Skipping a layer breaks the layers above without removing them from the diagram, which is how teams end up with sophisticated tools that fail to change the project.',
      },
      {
        kind: 'heading',
        body: 'Reality capture',
      },
      {
        kind: 'paragraph',
        body: 'Reality capture records the site. Cameras, 360 walks, drones, helmet cameras, gate readers, and equipment telemetry all sit here. Capture answers one question well: what was visible at a moment. It does not, on its own, answer when, where in the programme, or whether the record is trustworthy later. The job of capture is to be sufficient and not more.',
      },
      {
        kind: 'heading',
        body: 'Ground truth',
      },
      {
        kind: 'paragraph',
        body: 'Ground truth makes the captured record reliable. Time alignment, location, scope, project context, chain of custody, and preservation are layered on top so that the record can be cross-checked against schedule, weather, gate logs, and design documents. Without this layer, every later use of the record begins by re-establishing trust. That cost recurs on every retrieval.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation finds meaning in the record. Patterns, exceptions, programme drift, deviation between intent and reality, risk signals. Interpretation is where AI most often appears, but it is not where AI alone delivers value. Interpretation is useful only when paired with the action layer that follows it.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action turns a finding into a task, observation, escalation, or report with a named owner and a clock. Action is the layer where workflows close: a finding becomes a closeout record, an observation becomes a corrective action, an escalation reaches the right person before tolerance is breached.',
      },
      {
        kind: 'heading',
        body: 'Command',
      },
      {
        kind: 'paragraph',
        body: 'Command is the portfolio layer where leaders look across projects, see recurring patterns, and direct programmes of work. Command is the smallest layer in storage and the largest layer in business value. Patterns identified at command turn project incidents into organisational improvements.',
      },
      {
        kind: 'callout',
        title: 'A useful diagnostic',
        body: 'Walk through the next ten decisions the project must make. For each one, identify which layers must function for that decision to be evidence-based. Any layer that consistently fails is the layer the project should invest in next.',
      },
    ],
  },
]
