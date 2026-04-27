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
]
