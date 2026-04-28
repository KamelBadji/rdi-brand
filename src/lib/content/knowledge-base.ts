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
  {
    slug: 'category-boundary-with-cameras',
    title: 'Category boundary: RDI versus cameras',
    summary: 'How RDI differs from buying construction cameras, and why the difference is operational rather than technical.',
    area: 'foundations',
    readingMinutes: 6,
    related: ['what-is-rdi-canonical', 'category-boundary-with-ai-dashboards', 'category-boundary-with-bim'],
    body: [
      {
        kind: 'paragraph',
        body: 'A construction camera is a sensor. Reality-Driven Intelligence is a discipline. The two share a screen and almost nothing else. Buyers who confuse them end up paying for hardware twice: once for the install, and again in the cost of the disputes the record could have closed.',
      },
      {
        kind: 'heading',
        body: 'What a camera buys',
      },
      {
        kind: 'paragraph',
        body: 'A camera produces footage. Footage is the input layer of RDI, not the output. A camera vendor sells frame rate, resolution, storage, and viewer software. None of those quantities, on their own, change the project decision rhythm. The camera becomes useful only when the workflows that consume the footage exist.',
      },
      {
        kind: 'heading',
        body: 'What RDI buys',
      },
      {
        kind: 'paragraph',
        body: 'RDI buys the discipline that turns footage into evidence, interpretation, action, and command. That discipline lives in named workflows, time alignment, retention windows tied to contractual and regulatory needs, chain of custody, and a portfolio command view. The hardware enables the discipline; it is not the discipline.',
      },
      {
        kind: 'list',
        items: [
          'Cameras have a frame rate; RDI has a workflow rhythm.',
          'Cameras have storage; RDI has retention tied to obligations.',
          'Cameras produce footage; RDI produces records.',
          'Cameras serve a viewer; RDI serves a closed decision loop.',
        ],
      },
      {
        kind: 'heading',
        body: 'Where the boundary blurs',
      },
      {
        kind: 'paragraph',
        body: 'Some camera vendors offer workflow features and some workflow vendors offer cameras. The boundary blurs at the edges. The honest test is operational: can the buyer name the workflows the platform completes, and can the platform produce closeout records that an external reviewer would accept. If the answer to both is yes, the platform is on the RDI side of the boundary regardless of what is on the wall.',
      },
      {
        kind: 'callout',
        title: 'A buyer\'s test',
        body: 'Ask the vendor to walk through what happens between a captured event and a closed workflow. A camera vendor will describe the viewer. An RDI platform will describe the loop.',
      },
    ],
  },
  {
    slug: 'category-boundary-with-ai-dashboards',
    title: 'Category boundary: RDI versus AI dashboards',
    summary: 'AI dashboards live inside the interpretation layer of RDI. They are useful in their place and inadequate as a substitute for the surrounding stack.',
    area: 'foundations',
    readingMinutes: 6,
    related: ['what-is-rdi-canonical', 'category-boundary-with-cameras', 'category-boundary-with-bim'],
    body: [
      {
        kind: 'paragraph',
        body: 'AI dashboards belong to the interpretation layer of RDI. They surface patterns and exceptions from data the project has already collected. That work is genuinely useful. It is also one layer of a five-layer stack, and it does not replace the layers below or the layers above.',
      },
      {
        kind: 'heading',
        body: 'What an AI dashboard does well',
      },
      {
        kind: 'paragraph',
        body: 'A good AI dashboard accelerates pattern recognition. Anomalous attendance, unsafe gestures, late deliveries, deviation from a model — these are interpretation tasks where machine help has real value. The question is what happens after the pattern is surfaced.',
      },
      {
        kind: 'heading',
        body: 'Where it falls short',
      },
      {
        kind: 'list',
        items: [
          'No ground truth: the dashboard cannot defend the cross-checks the record needs.',
          'No action routing: a finding without an owner and a clock tends to fade.',
          'No closeout record: the next team has no learned context.',
          'No command view: portfolio patterns are not surfaced to the function above.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'A dashboard-only purchase tends to produce sophisticated views that the project enjoys for two months and ignores by month four. The fault is rarely the dashboard. It is the absence of the surrounding layers.',
      },
      {
        kind: 'heading',
        body: 'How they coexist',
      },
      {
        kind: 'paragraph',
        body: 'AI dashboards complement RDI when they are wired into the action and command layers. The interpretation surfaces a finding; the action layer routes it; the command layer detects when it has become a pattern. That arrangement uses the best of the AI work without inheriting its limits.',
      },
    ],
  },
  {
    slug: 'category-boundary-with-bim',
    title: 'Category boundary: RDI versus BIM',
    summary: 'BIM coordinates intent. RDI verifies reality. The two are complementary, not competing, and most mature projects run both.',
    area: 'foundations',
    readingMinutes: 6,
    related: ['what-is-rdi-canonical', 'category-boundary-with-cameras', 'category-boundary-with-ai-dashboards'],
    body: [
      {
        kind: 'paragraph',
        body: 'BIM and RDI work on different artefacts. BIM works on the design model, the federated representation of intent. RDI works on the as-built record, the time-aligned representation of reality. The artefacts are related but not interchangeable.',
      },
      {
        kind: 'heading',
        body: 'What BIM does',
      },
      {
        kind: 'paragraph',
        body: 'BIM coordinates design across disciplines. It catches clashes before they reach the trades. It carries non-graphical data that supports procurement and operation. A BIM-led project arrives on site with a coherent intent and a clear coordinated model. That work is irreplaceable.',
      },
      {
        kind: 'heading',
        body: 'What RDI adds',
      },
      {
        kind: 'paragraph',
        body: 'RDI adds the reality side of the equation. The captured record makes deviation visible. The workflows turn deviation into NCRs and dispositions. The as-built record references both the model and the captured evidence, which makes the handover pack consistent and the warranty period easier.',
      },
      {
        kind: 'list',
        items: [
          'BIM tells the project what was intended.',
          'RDI tells the project what was built.',
          'Together, they tell the project where the two diverge and what was done about it.',
        ],
      },
      {
        kind: 'callout',
        title: 'The mature pairing',
        body: 'The richest projects run both. The model coordinates intent, the reality data verifies as-built, and the design verification workflow joins the two. Either tool alone is incomplete; the pair is what mature owners ask for.',
      },
    ],
  },
  {
    slug: 'the-rdi-maturity-curve',
    title: 'The RDI maturity curve',
    summary:
      'Three stages of organisational maturity in Reality-Driven Intelligence: visibility, control, and optimisation, with the failure modes that stall projects between them.',
    area: 'foundations',
    readingMinutes: 8,
    related: ['what-is-rdi-canonical', 'the-rdi-stack', 'category-boundary-with-cameras'],
    body: [
      {
        kind: 'paragraph',
        body: 'Most contractors and owners do not adopt RDI in a single step. They progress through three stages: visibility, control, and optimisation. Each stage has its own value, its own ceiling, and its own way of failing. Knowing where the project sits on the curve makes the next investment obvious and the next conversation honest.',
      },
      {
        kind: 'heading',
        body: 'Stage one: visibility',
      },
      {
        kind: 'paragraph',
        body: 'Visibility is the entry point. The project installs cameras, runs a 360 walk programme, or commissions drone surveys. People can see the site without travelling to it. Owners feel closer to the project. The site team finds the recorded view useful for occasional reference. This stage delivers genuine comfort and very little operational change.',
      },
      {
        kind: 'paragraph',
        body: 'The visibility stage stalls when the team treats the platform as a window. The record exists, but no decision routinely depends on it. Reporting still leans on recollection. Disputes still escalate without evidence on the table. The investment has paid for sight, not for decisions.',
      },
      {
        kind: 'heading',
        body: 'Stage two: control',
      },
      {
        kind: 'paragraph',
        body: 'Control begins when named workflows start to close on the record. Progress meetings open with evidence. Safety findings become observations with owners and clocks. Delivery disputes resolve in minutes rather than days. The project still has gaps, but the loops that exist are real loops. Control is where most of the operational savings show up.',
      },
      {
        kind: 'paragraph',
        body: 'Control stalls when the discipline is uneven across packages or sites. One project director runs the loop well; the project next door does not. The organisation gets a portfolio of inconsistent practice. The same exceptions recur because no one has the brief to fix them at programme level.',
      },
      {
        kind: 'heading',
        body: 'Stage three: optimisation',
      },
      {
        kind: 'paragraph',
        body: 'Optimisation is the portfolio stage. Patterns of recurrence surface across projects. Leaders direct programmes of work — capture-plan templates, training, supplier management — in response to those patterns. The captured record becomes an organisational asset, not just a project asset. Bids reference past evidence. Insurance conversations get easier. The category boundary between RDI and the rest of the construction stack is clear to everyone in the room.',
      },
      {
        kind: 'list',
        items: [
          'Visibility delivers comfort; its ceiling is comfort.',
          'Control delivers operational savings; its ceiling is uneven adoption.',
          'Optimisation delivers organisational learning; its ceiling is leadership attention.',
          'Each stage requires the layers below it to be working, not just installed.',
        ],
      },
      {
        kind: 'heading',
        body: 'Failure modes between stages',
      },
      {
        kind: 'paragraph',
        body: 'The most common failure between visibility and control is the absence of named owners. Without owners, findings sit in a feed and decay. The most common failure between control and optimisation is the absence of a command view. Without command, exceptions stay local and lessons stay local. Both failures are organisational rather than technical, which is why hardware upgrades rarely move a project to the next stage.',
      },
      {
        kind: 'callout',
        title: 'How to advance',
        body: 'Pick one workflow that is currently informal and make it the project´s first closed loop. Name the owner, set the clock, write down the evidence rule, and report on closeout. The discipline scales from there.',
      },
      {
        kind: 'paragraph',
        body: 'The maturity curve is not a marketing ladder. It is a diagnostic. The honest answer to which stage the project is at is usually obvious to anyone who watches a week of decisions. The point of the curve is to make the next investment proportionate to the gap that is actually there.',
      },
    ],
  },
]
