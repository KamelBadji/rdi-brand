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
  {
    slug: 'workflow-anatomy',
    title: 'The anatomy of an RDI workflow',
    summary:
      'Every RDI workflow has the same six parts: trigger, evidence, interpretation, action, outcome, and measurement. Naming the parts is the first step in running the loop deliberately.',
    area: 'workflows',
    readingMinutes: 7,
    related: ['progress-verification-workflows', 'claims-evidence-workflows', 'safety-monitoring-workflows'],
    body: [
      {
        kind: 'paragraph',
        body: 'A workflow is not a feature. It is a closed loop with named parts. When teams talk about RDI workflows in the abstract, conversations drift. When they walk through the six parts of a specific workflow, decisions follow. The anatomy below is the same for progress, claims, safety, logistics, reporting, subcontractor performance, compliance, and design verification. Only the inputs differ.',
      },
      {
        kind: 'heading',
        body: 'Trigger',
      },
      {
        kind: 'paragraph',
        body: 'The trigger is the event that starts the loop. A trigger may be scheduled — the weekly progress meeting, the monthly stakeholder report, the quarterly audit. It may be event-driven — a delivery arrives, a near-miss is reported, a programme milestone slips. A workflow without a defined trigger tends to run unevenly because no one knows when it should run at all.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'paragraph',
        body: 'Evidence is what the loop consumes. Time-aligned camera views, 360 walks, drone surveys, gate logs, weather data, schedule extracts, and design documents are all evidence sources. The workflow specifies which sources are required, how recent they must be, and how their integrity is preserved. Evidence rules belong on paper, not in someone´s head.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation is the analysis step. A pattern is identified, a deviation is named, a finding is written down. Some interpretation is automated; most is still human. The discipline is to record the interpretation so the next reviewer can see how the conclusion was reached, not just what it was.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action turns the interpretation into work. A task with an owner. An observation with a clock. A report with a circulation list. A claim file with a numbered evidence index. The action layer is where most workflows fail in practice — the finding exists, but no one carries it.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The outcome is what changed because the action ran. The measurement is the record of that change. Without outcome capture, the workflow looks busy without being useful. Measurement is what tells the project whether the loop is paying off, and it is what feeds the command view that sees patterns across projects.',
      },
      {
        kind: 'list',
        items: [
          'A progress workflow: weekly meeting trigger, time-aligned views as evidence, deviation noted, recovery action assigned, week-on-week progress measured.',
          'A safety workflow: hazard report trigger, captured clip as evidence, classification recorded, corrective action routed, recurrence rate measured.',
          'A claims workflow: programme slip trigger, weather and capture evidence assembled, causation interpretation written, claim file produced, claim outcome recorded.',
        ],
      },
      {
        kind: 'callout',
        title: 'The anatomy test',
        body: 'For any workflow the project claims to run, ask the team to name the six parts. If two of them are missing, the loop is not closed and the workflow is not yet real.',
      },
      {
        kind: 'paragraph',
        body: 'The same anatomy scales from a single workflow to a portfolio. Once each project loop is closed, the command view can compare measurements across projects, surface patterns, and direct programme-level attention. The anatomy is the unit of organisation; the command view is what makes the units add up.',
      },
    ],
  },
  {
    slug: 'progress-verification-workflows',
    title: 'Progress verification workflows',
    summary:
      'A detailed walk through the progress verification pack: triggers, the evidence the pack consumes, the interpretation it produces, the actions it routes, and the metrics that show it is working.',
    area: 'workflows',
    readingMinutes: 9,
    related: ['workflow-anatomy', 'claims-evidence-workflows', 'stakeholder-reporting-workflows'],
    body: [
      {
        kind: 'paragraph',
        body: 'Progress verification is the most common entry point for an RDI programme because it touches the most people. Project directors, planners, owners, owner representatives, and lenders all want a defensible answer to the same question: where is the project against where it should be. A mature progress workflow gives that answer in evidence, not opinion.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Progress workflows have several triggers. The weekly site walk and the weekly programme review are the most regular. Monthly reporting to owners or lenders is the most senior. Programme exception triggers — a milestone slipping, a critical-path activity stalling — are the most consequential. The pack is designed to handle all three on the same evidence base, with different levels of summary for different audiences.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Time-aligned fixed-camera views at the major work fronts.',
          '360 walks at agreed routes and intervals, tagged to package and area.',
          'Drone or aerial captures for earthworks, structure, and roof activities.',
          'Schedule extracts and last-week-versus-this-week deltas.',
          'Weather data for stand-down or productivity context.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The pack does not require all sources at once. It requires the sources it consumes to be time-aligned and preserved. A capture-plan task at mobilisation should name which sources serve progress verification on this project, at what cadence, and to what retention. Without that document, the pack runs on whatever the team remembered to record this week.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation in this pack is comparative. The captured reality is compared against the programme baseline, against last week, and against the design model where one exists. Deviations are flagged with package, location, and likely cause. The point is not to declare blame; it is to surface what changed and where, so the project director can decide what to do.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action turns the interpretation into work. A package falling behind triggers a recovery conversation with the package manager. A persistent area of slow progress becomes an item on the next OAC agenda. A programme exception with cost implications becomes a substantiation file held against a future claim or counterclaim. Each route has an owner and an expected response time.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures four things over time: the percentage of weekly meetings that opened with evidence, the time taken to assemble the meeting pack, the number of disputed progress claims that resolved without escalation, and the variance between forecast and actual progress at major milestones. The first two are operational health metrics; the second two are commercial outcomes.',
      },
      {
        kind: 'callout',
        title: 'Where the pack pays off first',
        body: 'On most projects, the first visible payoff is the OAC meeting. Decisions that used to take a fortnight to verify happen in the room because the evidence is on the screen. That single change tends to fund the pack on its own.',
      },
      {
        kind: 'heading',
        body: 'Common failure modes',
      },
      {
        kind: 'paragraph',
        body: 'Two failure modes recur. The first is treating the captured record as a viewer rather than as a workflow input — the team has the evidence but never opens it in meetings. The second is over-capturing without indexing — every camera in the world records, but no one can find the clip that matters in under twenty minutes. Both are organisational failures, and both are visible in the metrics above.',
      },
      {
        kind: 'paragraph',
        body: 'The pack is most effective when paired with stakeholder reporting and claims evidence. The same captured base feeds all three. A project that has run progress verification well for a year tends to find that its claims and reporting workflows are largely already there, waiting to be named.',
      },
    ],
  },
  {
    slug: 'claims-evidence-workflows',
    title: 'Claims evidence workflows',
    summary:
      'A detailed walk through the claims evidence pack: how to assemble a defensible record before the dispute, not after, and how to keep the record useful through the life of the claim.',
    area: 'workflows',
    readingMinutes: 9,
    related: ['progress-verification-workflows', 'compliance-record-workflows', 'workflow-anatomy'],
    body: [
      {
        kind: 'paragraph',
        body: 'The cost of a claim is rarely the merits. It is the time and the evidence. A claim that should have been a paragraph in a monthly report becomes a year-long argument because the record was assembled retrospectively, by people who were no longer on the project, from sources that did not survive the contract end. The claims evidence pack is built to prevent that pattern.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Claims workflows have a layered set of triggers. The earliest is the delay-event trigger: a stand-down, a weather day, an instruction from the owner, a late delivery. The middle trigger is the substantiation trigger: a programme analysis identifies that an event affected the critical path. The latest is the formal trigger: a notice goes out under the contract. The pack runs at all three levels because evidence captured at the latest trigger is much weaker than evidence captured at the earliest.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Time-aligned site capture — fixed views, 360 walks, drone where relevant.',
          'Weather data from a recognised source, time-aligned to the captured record.',
          'Gate logs of subcontractor attendance and deliveries.',
          'Instructions, RFIs, and correspondence dated against the same timeline.',
          'Programme extracts at the moment of the event and at the moment of the claim.',
          'Photographs and video taken by the site team at the time, preserved with metadata.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The strength of a claim file is not in the volume of the record. It is in the time alignment between sources. A weather report and a captured view of an empty deck on the same morning are stronger than the report alone. A gate log and an attendance schedule that match are stronger than either source on its own.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation in a claims pack is causal. The team must explain how the event affected the activity, how the activity affected the path, and how the path affected the milestone. That chain is written down at the time, not reconstructed two years later. The captured record supports the chain at each step.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'The action layer in claims is procedural. A notice is issued under the contract. A claim file is opened with a numbered evidence index. The file is updated as the event develops. The claim is presented to the owner with a clear narrative and a defensible record. If the claim is rejected, the same file is the starting point for any escalation.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures the time between event and notice, the time between notice and substantiation, the success rate of claims at the first stage, and the proportion of claims that escalate. A mature claims pack tends to lower the escalation rate sharply, because the owner is faced with a defensible record early enough that argument over the merits replaces argument over the facts.',
      },
      {
        kind: 'callout',
        title: 'The retention rule',
        body: 'Whatever retention the contract requires, add the limitation period for disputes in the relevant jurisdiction. The cheapest evidence is the evidence that is still on the system when a dispute surfaces three years later.',
      },
      {
        kind: 'heading',
        body: 'Common failure modes',
      },
      {
        kind: 'paragraph',
        body: 'Two failures dominate. The first is the after-the-fact assembly: the team only opens the claim file when the notice goes out, by which point key sources have been overwritten or lost. The second is the un-indexed archive: the evidence exists but cannot be found, so the team rebuilds it manually at significant cost. Both failures are organisational, and both are addressed at the capture-plan stage.',
      },
      {
        kind: 'paragraph',
        body: 'A claims pack is not adversarial by nature. The same record that defends a contractor against a counterclaim defends an owner against an unsubstantiated claim. The discipline is mutual; the project that runs it well tends to have fewer formal disputes than projects that resist it.',
      },
    ],
  },
  {
    slug: 'safety-monitoring-workflows',
    title: 'Safety monitoring workflows',
    summary:
      'A detailed walk through the safety monitoring pack: how findings turn into observations with owners, how observations close, and how the captured record stays useful when an incident occurs.',
    area: 'workflows',
    readingMinutes: 8,
    related: ['workflow-anatomy', 'compliance-record-workflows', 'gate-and-logistics-workflows'],
    body: [
      {
        kind: 'paragraph',
        body: 'Safety is the workflow most often described in language that hides the loop. Site teams talk about toolbox talks, audits, and culture. Those things matter. They are also outputs of a safety system that, on the inside, runs the same six-part loop as every other RDI workflow. The pack below names the parts so the safety conversation can be operational, not aspirational.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Safety has three main triggers. The first is the scheduled audit — daily, weekly, or by inspection regime. The second is the observed event — a near-miss, an unsafe act, a hazard report. The third is the incident — an injury, a property loss, or a regulatory notification. The pack handles all three on the same evidence base, with different levels of escalation.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Time-aligned camera views of the area where the event occurred.',
          'Gate and access records showing who was on site and where.',
          '360 walks before and after the event for context.',
          'Method statements, RAMS, and permits relevant to the activity.',
          'Witness accounts, captured close to the event in time.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'Safety evidence has a short half-life. A captured view that is overwritten on a seven-day loop is useless to an incident that surfaces a fortnight later. The capture plan for safety should set retention to match the longest plausible reporting and litigation window for the jurisdiction, not the shortest.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation classifies the finding. A near-miss is logged with severity, location, package, and likely root cause. The classification is not bureaucratic — it is the basis for routing. The same hazard repeated in the same location on the same package is a different problem from a one-off, and the action layer treats them differently.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action turns the classification into an observation with a named owner and an expected response time. The observation closes when the corrective action is in place and the evidence supports closeout. If the observation is not closed in time, it escalates to the named escalation path. The pattern matters: an observation that drifts is a workflow that has stopped being a loop.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures the closeout rate, the time-to-closeout, the recurrence rate of the same finding, and the proportion of incidents where the captured record was sufficient for the regulator or the insurer. The first three are operational; the fourth is the metric that often decides whether the pack pays for itself in a single year.',
      },
      {
        kind: 'callout',
        title: 'The honest test',
        body: 'Pick five safety findings logged in the last fortnight. For each, can the team show the captured record, the named owner, the date the observation closed, and the corrective action. If the answer is no for two of them, the loop is not yet closed.',
      },
      {
        kind: 'paragraph',
        body: 'Safety packs are most effective when they sit alongside compliance records and gate logistics. The same captured base supports all three, which is why mature contractors tend to procure them as one programme rather than three separate purchases.',
      },
    ],
  },
  {
    slug: 'gate-and-logistics-workflows',
    title: 'Gate and logistics workflows',
    summary:
      'A detailed walk through the gate and logistics pack: how movement of vehicles, deliveries, and people becomes a quiet but durable commercial record.',
    area: 'workflows',
    readingMinutes: 8,
    related: ['safety-monitoring-workflows', 'subcontractor-performance-workflows', 'workflow-anatomy'],
    body: [
      {
        kind: 'paragraph',
        body: 'Gate and logistics workflows are the least glamorous in the pack and among the most consistently useful. Vehicles arrive, deliveries are signed for, subcontractors clock on, plant moves between work fronts. None of these events feel like decisions on their own. Aggregated and time-aligned, they become the spine of attendance verification, delivery disputes, theft investigations, and access compliance.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'The pack runs against a continuous schedule rather than discrete triggers. Every vehicle entry, every delivery, every personnel scan is recorded in real time. The workflow surfaces only when an exception arises: a delivery that does not match its docket, a subcontractor whose attendance does not match the package programme, a plant movement out of hours, an access through an unmanned route.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Time-aligned camera views of each gate.',
          'ANPR or barrier records for vehicle movements.',
          'Personnel access scans tied to subcontractor and package.',
          'Delivery dockets, scanned or photographed at the gate.',
          'Out-of-hours captures for theft and unauthorised access.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The strength of the pack comes from cross-checking. A vehicle entry without a matching docket is an exception. A docket without a matching entry is an exception. A personnel scan without a matching attendance log is an exception. The pack does not need every source to be perfect; it needs sources that cross-check.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation in this pack is reconciliatory. The team reconciles attendance against scheduled labour, deliveries against expected materials, plant movements against operational hours. Where the reconciliation breaks, the exception is logged with package, supplier, and likely cause.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Actions split into three families. Attendance exceptions feed subcontractor performance conversations and payment evidence. Delivery exceptions feed materials management and supplier conversations. Access exceptions feed safety and security workflows. Each family has its own owner and its own response time.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures the resolution rate of delivery disputes, the time taken to resolve attendance disputes with subcontractors, the proportion of out-of-hours access events that were authorised, and the recovery rate on theft incidents. These metrics often produce the most legible business case in the entire workflow library because the costs are concrete and recurring.',
      },
      {
        kind: 'callout',
        title: 'The quiet workflow',
        body: 'Gate and logistics is the workflow people stop noticing once it works. Disputes that used to escalate weekly become a five-minute reconciliation. The pack is doing its job when the project director cannot remember the last time a delivery argument made it to their desk.',
      },
      {
        kind: 'paragraph',
        body: 'On most projects, the pack pairs naturally with subcontractor performance and progress verification. The same gate base feeds all three. A project that runs gate and logistics well usually finds it cheaper to extend into the adjacent packs than to procure them separately.',
      },
    ],
  },
  {
    slug: 'stakeholder-reporting-workflows',
    title: 'Stakeholder reporting workflows',
    summary:
      'A detailed walk through the stakeholder reporting pack: how to assemble owner, lender, and board reporting from the same evidence base the project already runs.',
    area: 'workflows',
    readingMinutes: 7,
    related: ['progress-verification-workflows', 'workflow-anatomy', 'compliance-record-workflows'],
    body: [
      {
        kind: 'paragraph',
        body: 'Stakeholder reporting is the workflow that most projects already run, badly. A senior person spends a day a month assembling a deck for the owner, the lender, or the board. Half the deck is screenshots; the other half is recollection. The reporting pack collapses that work into a routine that draws on the evidence the project produces anyway.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Reporting triggers are the calendar dates of the audience. Monthly owner reports. Quarterly lender drawdowns. Board cycles. Investor updates. The trigger sets the deadline; the workflow ensures the same evidence base supplies all of them, in the level of summary each audience expects.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Time-aligned site captures, summarised by package or area.',
          'Programme extracts and milestone status.',
          'Safety summary with closeout rates.',
          'Commercial position with notice and claim status.',
          'Quality and design verification highlights for the period.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The pack does not ask the team to gather new evidence for reporting. It asks the team to publish the evidence already produced for progress, safety, and compliance, summarised for the audience. The reporting workflow is downstream of every other workflow in the library.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation in reporting is curatorial. The author selects the views that matter for the period, the metrics that have moved, and the items that need stakeholder attention. The discipline is not to bury problems; the discipline is to make problems legible without drowning the reader in detail.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action in reporting is decision support. The pack does not act on behalf of the stakeholder; it gives the stakeholder what they need to act. The owner approves a change. The lender releases a drawdown. The board signs off the period. Each action has a record that points back to the evidence on which it was based.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures the time taken to produce the report, the proportion of stakeholder questions that the report itself answered, and the time between report receipt and decision. The first metric tracks operational savings; the second and third track the quality of the report as a decision instrument.',
      },
      {
        kind: 'callout',
        title: 'The trust dividend',
        body: 'Stakeholders who receive the same shape of report every month, with the same evidence base, learn what to look for. Trust accrues to the reporting routine, not the individual reporter. That trust pays back in faster approvals, smoother drawdowns, and fewer surprises late in the project.',
      },
      {
        kind: 'paragraph',
        body: 'The pack tends to be the second adopted after progress verification, because the work overlaps. A team that has run progress verification for a quarter usually finds the reporting pack is mostly already there, waiting to be formalised.',
      },
    ],
  },
  {
    slug: 'subcontractor-performance-workflows',
    title: 'Subcontractor performance workflows',
    summary:
      'A detailed walk through the subcontractor performance pack: how attendance, productivity, quality, and safety records combine into a defensible record of supplier performance.',
    area: 'workflows',
    readingMinutes: 7,
    related: ['gate-and-logistics-workflows', 'progress-verification-workflows', 'workflow-anatomy'],
    body: [
      {
        kind: 'paragraph',
        body: 'Subcontractor performance is one of the most consistent sources of friction on a project and one of the least consistently evidenced. Conversations devolve into recollection. The subcontractor performance pack collapses that into a record: who turned up, what they produced, where the quality landed, and how the safety profile looked through the package.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Triggers are largely cyclical. The weekly package review. The monthly payment certification. The mid-package performance conversation. The end-of-package retention release. The pack also runs against event triggers: a slip in attendance, a quality non-conformance, a safety pattern.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Gate and personnel records, tied to subcontractor and package.',
          'Time-aligned site captures of the package work fronts.',
          '360 walks at agreed intervals along the package areas.',
          'Quality non-conformance records and their evidence.',
          'Safety findings and closeouts attributed to the package.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The pack works on the same evidence base as gate logistics, progress verification, safety, and quality. What it adds is the attribution: the same captured records, sliced by subcontractor and package. The slicing is the work; the evidence is already there.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation in this pack is comparative across packages and across time. Attendance against scheduled labour. Productivity against expected output. Quality against the design intent. Safety against the package average. Patterns are noted, and outliers, in either direction, are surfaced.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action turns the interpretation into a conversation, a payment evidence pack, or a contractual notice. The conversation is the most common. A package manager who walks into the weekly meeting with the record in hand has a different meeting from one who walks in with anecdote. The other actions follow when the conversation does not change behaviour.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures the proportion of payment certifications resolved on the first cycle, the proportion of package disputes that resolved without escalation, the recurrence rate of quality non-conformances by package, and the safety profile of each package against the project average. Across a portfolio, these metrics support supplier-tier decisions over multiple projects.',
      },
      {
        kind: 'callout',
        title: 'The fairness dividend',
        body: 'Subcontractor performance evidence cuts both ways. The same record that holds an underperforming package to account also recognises a strong package. Suppliers tend to prefer the discipline once they have experienced it, because it surfaces work that anecdote tends to miss.',
      },
      {
        kind: 'paragraph',
        body: 'The pack benefits from the longest practical retention. A clear performance record across a closed package becomes a tender input on the next project, and an organisational memory that survives team changes.',
      },
    ],
  },
  {
    slug: 'compliance-record-workflows',
    title: 'Compliance record workflows',
    summary:
      'A detailed walk through the compliance pack: the routines that produce a defensible regulatory and contractual record, ready for inspections, audits, and the closeout archive.',
    area: 'workflows',
    readingMinutes: 7,
    related: ['safety-monitoring-workflows', 'claims-evidence-workflows', 'preservation-and-retention-policy'],
    body: [
      {
        kind: 'paragraph',
        body: 'Compliance is the workflow that pays back at the moment of crisis. A regulator arrives. An insurer asks for the file. An auditor opens a sample. The compliance pack is the routine that ensures the answer is already in the system, indexed, time-aligned, and defensible. The work is unglamorous in normal weather; the relief on the day of an inspection is hard to overstate.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Most compliance triggers are scheduled. Statutory inspection cycles. Owner audit cycles. Insurer surveys. Internal audit programmes. The pack also runs against event triggers: a regulatory notification, an incident with reportable consequences, a contractual milestone that requires a compliance check.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          'Permits, RAMS, and method statements aligned to the works performed.',
          'Time-aligned site captures showing controls in place during the period.',
          'Safety findings, observations, and closeouts for the period.',
          'Quality non-conformance records and dispositions.',
          'Training and competence records cross-referenced to attendance.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'A compliance file is judged by the cross-checks. A captured view that shows controls in place at the time of the activity is stronger than the controls document alone. A safety finding closed with evidence is stronger than a closed status without it. The pack does not create new evidence for compliance; it indexes the evidence the project produces anyway.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation in compliance is preparatory. The team reviews the evidence base ahead of the trigger and identifies any gap before the inspector does. A missing closeout, a controls record that does not align to a captured view, an attendance record without the matching training — these are the items that get fixed before they become findings.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action in compliance is corrective and procedural. Gaps are closed. Records are aligned. The compliance file is held in a state where it can be retrieved on demand. When the trigger arrives, the pack is presented; when the inspector leaves, the file is updated with their findings and the next cycle begins.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures retrieval time when an inspector or auditor asks for a record, the proportion of audit findings that the team had already identified, and the closure rate of audit findings within agreed windows. A mature compliance pack produces audits that contain few surprises and many predictable conversations.',
      },
      {
        kind: 'callout',
        title: 'The retention point',
        body: 'Compliance evidence has the longest retention need in the workflow library. Set the retention to match the longest plausible regulatory or contractual obligation, then add a margin for warranty disputes that surface long after handover.',
      },
      {
        kind: 'paragraph',
        body: 'Compliance is most effective when it is built into the project from mobilisation. Bolting a compliance pack onto a project nine months in is harder than running it from week one, because the captured base needs to match the activities it is meant to evidence.',
      },
    ],
  },
  {
    slug: 'design-verification-workflows',
    title: 'Design verification workflows',
    summary:
      'A detailed walk through the design verification pack: how the captured as-built record is reconciled against the model and the design intent, and how deviations become disposition records.',
    area: 'workflows',
    readingMinutes: 8,
    related: ['category-boundary-with-bim', 'compliance-record-workflows', 'workflow-anatomy'],
    body: [
      {
        kind: 'paragraph',
        body: 'Design verification is the workflow where BIM and RDI most clearly meet. The model carries the intent; the captured record carries the reality; the pack reconciles the two. The output is a disposition record for every deviation that matters, a strong as-built handover, and a much shorter list of warranty surprises later.',
      },
      {
        kind: 'heading',
        body: 'Triggers',
      },
      {
        kind: 'paragraph',
        body: 'Triggers are activity-based. The end of a structural pour. The completion of an MEP first-fix. The closeout of a fitout phase. Each trigger initiates the verification cycle for the relevant package or area. The pack also runs against event triggers: an RFI raises a potential deviation, a quality non-conformance reveals an as-built drift, a model update needs reconciliation.',
      },
      {
        kind: 'heading',
        body: 'Evidence',
      },
      {
        kind: 'list',
        items: [
          '360 walks at agreed verification points along the package.',
          'Time-aligned camera views of the work fronts during installation.',
          'Drone or aerial captures for structure and large-area works.',
          'The federated BIM model at the relevant level of development.',
          'RFIs, instructions, and design changes for the period.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The strength of the pack depends on alignment between captured reality and the model coordinate system. Where the project has invested in this alignment at mobilisation, verification is fast. Where it has not, verification becomes a manual cross-check that consumes time without producing the full benefit.',
      },
      {
        kind: 'heading',
        body: 'Interpretation',
      },
      {
        kind: 'paragraph',
        body: 'Interpretation identifies deviations between as-built and model. Some are tolerable and need only be recorded. Some require disposition — accept, repair, or redesign. The classification is the substance of the workflow; the captured record is what makes the classification defensible later.',
      },
      {
        kind: 'heading',
        body: 'Action',
      },
      {
        kind: 'paragraph',
        body: 'Action varies by classification. A tolerable deviation produces an as-built record entry and a closed observation. A disposition required deviation triggers an RFI, a design change, or a non-conformance with a corrective action. Each route has a named owner and a clock.',
      },
      {
        kind: 'heading',
        body: 'Outcome and measurement',
      },
      {
        kind: 'paragraph',
        body: 'The pack measures the time between activity completion and verification, the proportion of deviations identified by the pack rather than by later QA, and the size of the disposition list at handover. A mature design verification pack tends to shrink the handover punch list significantly because deviations have been resolved during the works rather than at the end.',
      },
      {
        kind: 'callout',
        title: 'The handover dividend',
        body: 'A handover assembled from a year of design verification is qualitatively different from one assembled in the last fortnight. The former arrives as a coherent document; the latter arrives as a sprint. Owners notice the difference, and the warranty period is shorter and quieter as a result.',
      },
      {
        kind: 'paragraph',
        body: 'The pack is most effective on projects with an active BIM process and a digital construction lead empowered to align the model with the captured base. Without that alignment, the workflow still adds value, but it works harder for it.',
      },
    ],
  },
  {
    slug: 'evidence-quality-checklist',
    title: 'The evidence quality checklist',
    summary:
      'A short, practical checklist for grading whether a captured record is fit for the workflow it is being used in.',
    area: 'evidence-quality',
    readingMinutes: 6,
    related: ['chain-of-custody-for-construction', 'time-alignment-and-cross-checking', 'evidence-grading-rubric'],
    body: [
      {
        kind: 'paragraph',
        body: 'Most disputes about evidence are not about the contents of the record. They are about whether the record is trustworthy at all. The checklist below gives a fast, practical test for whether a captured artefact is fit for the workflow it is being used in. It is short on purpose; the discipline is in applying it consistently.',
      },
      {
        kind: 'heading',
        body: 'Source',
      },
      {
        kind: 'paragraph',
        body: 'The first question is provenance. Where did this record come from. What system produced it. What account, role, or device captured it. A record whose source cannot be named is not evidence; it is folklore. A workflow that depends on unsourced records is a workflow that will collapse the moment it is challenged.',
      },
      {
        kind: 'heading',
        body: 'Time',
      },
      {
        kind: 'paragraph',
        body: 'The second question is time. When was the record captured. Is the timestamp from the device, the server, or both. Has the clock been validated against an external reference. Time-aligned records cross-check against schedule, weather, gate, and design. Records with drifted clocks lose most of their value the moment a cross-check matters.',
      },
      {
        kind: 'heading',
        body: 'Place',
      },
      {
        kind: 'paragraph',
        body: 'The third question is place. Where on site was this captured. To which package, area, or zone does it belong. A record without a location is hard to use in any workflow that runs on package or area. The location need not be GPS-precise; a tagged route, a labelled view, or a defined work front is usually enough.',
      },
      {
        kind: 'heading',
        body: 'Integrity',
      },
      {
        kind: 'paragraph',
        body: 'The fourth question is integrity. Has the record been altered since capture. What is the chain of custody from capture to current location. Some workflows tolerate light editing — exporting a clip, trimming for length — provided the original is preserved. Other workflows do not. The rule should be written down and applied consistently.',
      },
      {
        kind: 'heading',
        body: 'Retention',
      },
      {
        kind: 'paragraph',
        body: 'The fifth question is retention. How long will this record exist. Does the retention horizon cover the workflow it is feeding, including any plausible dispute window. Retention is the cheapest insurance in the entire workflow library, and the most commonly under-specified at mobilisation.',
      },
      {
        kind: 'list',
        items: [
          'Source named and verifiable.',
          'Time aligned and validated.',
          'Place tagged at a useful resolution.',
          'Integrity preserved and rules documented.',
          'Retention exceeds the longest plausible use.',
        ],
      },
      {
        kind: 'callout',
        title: 'The five-question test',
        body: 'Before any record is used in a meaningful decision, walk through these five questions. If two answers are unsatisfactory, the record is not yet evidence. Most failures upstream of a dispute trace back to ignoring this test once.',
      },
      {
        kind: 'paragraph',
        body: 'The checklist is not a substitute for a grading rubric or a chain-of-custody policy. It is the quick test before either of those is invoked. Apply it during the workflow, not after the fact, and most evidence problems are caught while they are cheap to fix.',
      },
    ],
  },
]
