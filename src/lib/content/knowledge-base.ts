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
  {
    slug: 'chain-of-custody-for-construction',
    title: 'Chain of custody for construction evidence',
    summary:
      'How the legal concept of chain of custody adapts to the captured records, gate logs, and reports a construction project produces every day.',
    area: 'evidence-quality',
    readingMinutes: 7,
    related: ['evidence-quality-checklist', 'time-alignment-and-cross-checking', 'preservation-and-retention-policy'],
    body: [
      {
        kind: 'paragraph',
        body: 'Chain of custody is a legal idea: the documented hand-off path of a piece of evidence from the moment it is created to the moment it is used. Construction borrows the discipline because the same uses arise. A contested incident, a disputed claim, a regulatory inquiry. Without a custody trail, the captured record becomes harder to defend, regardless of what it shows.',
      },
      {
        kind: 'heading',
        body: 'What custody covers',
      },
      {
        kind: 'paragraph',
        body: 'Custody covers four moments. Capture: the device, the account, the timestamp, the location tag. Storage: the system the record lives on, the accounts that can access it, the integrity protections in place. Transformation: any export, edit, redaction, or summary, with the original preserved. Use: the workflow or recipient that receives the record and the date of the hand-off.',
      },
      {
        kind: 'heading',
        body: 'Practical custody on a project',
      },
      {
        kind: 'paragraph',
        body: 'On a live project, custody is mostly automatic if the system supports it. The platform records who captured a clip and when. Storage is auditable. Exports leave a record. The hard part is the human edge: when an export is shared by email, when a screenshot is taken, when a redaction is performed. These moments need policy and discipline.',
      },
      {
        kind: 'list',
        items: [
          'Capture is logged automatically with device, account, and time.',
          'Storage permissions are reviewed at agreed cadences, not assumed.',
          'Transformations preserve the original alongside the derivative.',
          'Hand-offs to external parties are logged with date and recipient.',
          'A custody report can be produced for any record on demand.',
        ],
      },
      {
        kind: 'heading',
        body: 'Why it matters earlier than people think',
      },
      {
        kind: 'paragraph',
        body: 'Most teams assume custody only matters in litigation. In practice, custody matters every time a record changes the conversation. A subcontractor who challenges an attendance record will accept a defensible custody trail and resist a screenshot in an email thread. Insurer surveys, owner audits, and internal investigations all reward the project that can show how a record reached the table.',
      },
      {
        kind: 'heading',
        body: 'Where custody breaks',
      },
      {
        kind: 'paragraph',
        body: 'Custody breaks at the easy points. A clip is exported, edited for an OAC, and the original is overwritten. A screenshot is shared in chat, then the original system is rotated. A 360 walk is downloaded by someone who later leaves the project. These are not technical failures — they are policy and habit failures, and they are the failures that hurt months later.',
      },
      {
        kind: 'callout',
        title: 'The custody policy',
        body: 'Write the policy. Name the systems. Name the roles. Decide what happens when an export leaves the platform. Hold the policy on the same page as the capture plan, and review it at least once a quarter.',
      },
      {
        kind: 'paragraph',
        body: 'Custody discipline does not slow the project down. The opposite is more usual: a project with custody discipline spends less time defending the record and more time using it. The cost is a small amount of policy work at mobilisation; the saving is everything that does not become a forensic exercise later.',
      },
    ],
  },
  {
    slug: 'time-alignment-and-cross-checking',
    title: 'Time alignment and cross-checking',
    summary:
      'The mechanics of producing time-aligned records that can be cross-checked against schedule, weather, gate, and design — the single discipline that turns capture into evidence.',
    area: 'evidence-quality',
    readingMinutes: 6,
    related: ['evidence-quality-checklist', 'chain-of-custody-for-construction', 'evidence-grading-rubric'],
    body: [
      {
        kind: 'paragraph',
        body: 'A record that says it happened at three in the afternoon is interesting. A record that can be cross-checked against the schedule, the weather report, the gate log, and the design at three in the afternoon is evidence. The difference between the two is time alignment, and it is the cheapest discipline in the workflow library when it is applied at mobilisation.',
      },
      {
        kind: 'heading',
        body: 'What time alignment means',
      },
      {
        kind: 'paragraph',
        body: 'Time alignment means every record carries a timestamp anchored to a known reference, and the sources the project consumes are anchored to the same reference. Cameras, gate readers, weather feeds, schedule extracts, and document timestamps need to agree. When they agree, cross-checks are possible. When they drift, every cross-check requires manual reconciliation, and most teams stop trying.',
      },
      {
        kind: 'heading',
        body: 'How time drifts',
      },
      {
        kind: 'list',
        items: [
          'Device clocks drift slowly when not synchronised against an external source.',
          'Server timestamps may differ from device timestamps for ingestion lag reasons.',
          'Time zones can be applied inconsistently between sources, especially across regions.',
          'Daylight saving transitions break naive timestamp comparisons twice a year.',
          'Manual entries in scheduling tools may use a different convention from the captured base.',
        ],
      },
      {
        kind: 'heading',
        body: 'How cross-checking works',
      },
      {
        kind: 'paragraph',
        body: 'A cross-check uses two independent sources that are time-aligned and asks whether they tell the same story. A captured view of an empty deck on a wet morning, cross-checked against a weather report and a gate log with no labour entries, makes a stand-down record that is much harder to dispute than any of the three sources alone. The strength is multiplicative; the work is in the alignment.',
      },
      {
        kind: 'heading',
        body: 'Where alignment pays off',
      },
      {
        kind: 'paragraph',
        body: 'Alignment pays off in claims, where causation has to be demonstrated. It pays off in safety, where an incident timeline has to be reconstructed. It pays off in payment, where attendance has to match certifications. It pays off in compliance, where controls had to be in place at the time of the activity. Almost every workflow that matters either depends on alignment or is significantly weakened without it.',
      },
      {
        kind: 'callout',
        title: 'The mobilisation conversation',
        body: 'Have a single conversation at mobilisation about time references, time zones, and clock validation. Document the decisions. Re-validate at quarterly intervals. The conversation takes an hour; the discipline pays off for the life of the project and for the dispute window after handover.',
      },
      {
        kind: 'paragraph',
        body: 'Alignment is the discipline that distinguishes a captured archive from an evidence base. The same hardware, the same software, and the same team can produce either, depending on whether the project decided to align time at the start. The decision is small; the consequences last for years.',
      },
    ],
  },
  {
    slug: 'evidence-grading-rubric',
    title: 'A simple A/B/C grading rubric for site evidence',
    summary:
      'Three grades that give a project team a fast, common language for whether a record is fit for purpose, support, or background only.',
    area: 'evidence-quality',
    readingMinutes: 6,
    related: ['evidence-quality-checklist', 'time-alignment-and-cross-checking', 'chain-of-custody-for-construction'],
    body: [
      {
        kind: 'paragraph',
        body: 'Site teams do not need a forensic-grade evidence taxonomy. They need a fast common language so that a planner, a commercial manager, and a safety lead can look at the same record and agree on what it can do. The rubric below is three grades. It is intentionally crude. The crudeness is what makes it usable in a meeting.',
      },
      {
        kind: 'heading',
        body: 'Grade A: defensible',
      },
      {
        kind: 'paragraph',
        body: 'Grade A is a record that can stand on its own in a contested setting. The source is identified. The time is aligned and validated. The location is tagged. Custody is preserved. Retention covers the longest plausible use. A grade A record can go into a claim file, a regulatory return, or an insurer survey without further work. Most workflows aim for grade A on the records they retain.',
      },
      {
        kind: 'heading',
        body: 'Grade B: supportive',
      },
      {
        kind: 'paragraph',
        body: 'Grade B is a record that strengthens a story but does not stand alone. A handheld phone photo with an approximate time. A screenshot from a viewer without metadata. A 360 walk where the route tagging is partial. Grade B records are useful in context. They are not strong on their own and should not be relied on as the only support for a contested decision.',
      },
      {
        kind: 'heading',
        body: 'Grade C: background',
      },
      {
        kind: 'paragraph',
        body: 'Grade C is a record that has value as background but should not enter a workflow as evidence. A general site photograph from an unknown account. A second-hand video. A note in a chat thread. Grade C records exist on every project; the discipline is to know they are grade C and not to lean on them when something matters.',
      },
      {
        kind: 'list',
        items: [
          'Source named and verifiable: required for A, expected for B, missing for C.',
          'Time aligned and validated: required for A, partial for B, absent for C.',
          'Place tagged at a useful resolution: required for A, partial for B, absent for C.',
          'Custody preserved with policy: required for A, optional for B, absent for C.',
          'Retention covers plausible use: required for A, often partial for B, irrelevant for C.',
        ],
      },
      {
        kind: 'heading',
        body: 'How to use the rubric',
      },
      {
        kind: 'paragraph',
        body: 'The rubric is a triage tool. When a record is being added to a file, give it a grade. When a workflow asks what it needs, name the grade required. A claim file needs grade A; a meeting pack tolerates grade B; an internal anecdote tolerates grade C. Naming the grade ahead of time stops the project from accidentally relying on a weak record at a strong moment.',
      },
      {
        kind: 'callout',
        title: 'The grading habit',
        body: 'Make grading a routine action, not a special-case action. Five seconds of grading at the moment of capture or filing saves hours of forensic work later, and reduces the number of records that turn out to be weaker than the team assumed.',
      },
      {
        kind: 'paragraph',
        body: 'The rubric is deliberately small. Three grades, five questions, applied consistently. It is the smallest useful taxonomy for a working construction team, and it is more powerful than any longer one that the team will not actually apply.',
      },
    ],
  },
  {
    slug: 'preservation-and-retention-policy',
    title: 'Preservation and retention policy',
    summary:
      'How long the project should keep what, why the answer differs by record type, and how to set retention so the cheapest evidence is the evidence that survives the dispute.',
    area: 'evidence-quality',
    readingMinutes: 7,
    related: ['chain-of-custody-for-construction', 'evidence-quality-checklist', 'compliance-record-workflows'],
    body: [
      {
        kind: 'paragraph',
        body: 'Preservation is the single most under-specified element of capture planning. Teams talk about resolution, frame rate, and storage cost. They rarely talk about how long a record should live. The honest answer is that retention should match the longest plausible use of the record, including disputes that surface long after handover. That is usually longer than the default the platform offers.',
      },
      {
        kind: 'heading',
        body: 'Why retention matters',
      },
      {
        kind: 'paragraph',
        body: 'Most construction disputes do not arise on the day of the event. They arise weeks, months, or years later. A safety incident may surface in a regulator inquiry six months on. A claim may be formalised at the end of the contract. A warranty issue may be challenged years after handover. Retention is the discipline that ensures the record is still there when it is asked for.',
      },
      {
        kind: 'heading',
        body: 'How to set retention',
      },
      {
        kind: 'paragraph',
        body: 'Set retention by use, not by storage cost. For each record type, identify the workflows it serves and the longest plausible window in which any of those workflows could be invoked. Add the limitation period for disputes in the relevant jurisdiction. The result is the floor; the storage budget is the trade-off, not the starting point.',
      },
      {
        kind: 'list',
        items: [
          'Progress captures: at least the duration of the contract plus the dispute window.',
          'Safety captures: the longest reportable window in the jurisdiction, plus a margin.',
          'Compliance records: the longest regulatory or contractual obligation, plus a margin.',
          'Quality and as-built records: through warranty plus any latent defects period.',
          'Gate and logistics records: through the contract plus the payment dispute window.',
        ],
      },
      {
        kind: 'heading',
        body: 'Preservation at the point of incident',
      },
      {
        kind: 'paragraph',
        body: 'Default retention is not enough on its own. When an incident, claim, or notice arises, the related records must be preserved against the default rotation. A preservation hold is the construction equivalent of a legal hold: a marked subset of the captured base that cannot be overwritten until the matter is resolved. Without holds, default rotation will eventually delete the records the matter depends on.',
      },
      {
        kind: 'heading',
        body: 'Where retention fails',
      },
      {
        kind: 'paragraph',
        body: 'Retention fails for three reasons. The default was set to a storage budget rather than a use case. No one named who could place a preservation hold. The platform was decommissioned at handover without exporting the closeout archive. All three are policy failures, and all three are solved by writing the policy down at mobilisation and reviewing it at quarterly intervals.',
      },
      {
        kind: 'callout',
        title: 'The closeout archive',
        body: 'Plan the closeout archive at mobilisation, not at PC. Decide what survives the platform decommissioning, where it is stored, and who can retrieve it five years later. The archive is the cheapest insurance the project can buy.',
      },
      {
        kind: 'paragraph',
        body: 'Retention is one of the least exciting topics in the workflow library and one of the most consequential. The records that defend the project tomorrow are the records the project decided to keep today. The decision is binary, and the consequence is durable.',
      },
    ],
  },
  {
    slug: 'roi-method-overview',
    title: 'ROI method overview',
    summary:
      'How to think about the return on an RDI programme: operational savings, risk mitigation, capacity, and the confidence bands that keep the answer credible.',
    area: 'rdi-economics',
    readingMinutes: 8,
    related: ['roi-confidence-and-credibility', 'roi-modelling-replacement-vs-supporting', 'manual-reporting-savings-model'],
    body: [
      {
        kind: 'paragraph',
        body: 'Most ROI conversations on construction technology are stuck between two failure modes. One side claims oversized savings with no evidence. The other side refuses to put any number on the table. The honest method sits between them: name the categories of value, quantify with confidence ranges, and publish the assumptions. The result is a number a finance partner can defend.',
      },
      {
        kind: 'heading',
        body: 'The three categories of value',
      },
      {
        kind: 'paragraph',
        body: 'RDI value falls into three categories. Operational savings: recurring time and cost the workflow removes from the project, such as report preparation, evidence retrieval, or meeting logistics. Risk mitigation: the value of avoiding low-frequency, high-cost events such as disputes, theft, or regulatory breaches. Capacity: the additional throughput the team can carry without adding headcount, especially at portfolio scale.',
      },
      {
        kind: 'heading',
        body: 'How to quantify operational savings',
      },
      {
        kind: 'paragraph',
        body: 'Operational savings are the most concrete and the most defensible. Identify the recurring task. Estimate the time it consumes today. Estimate the time it consumes after RDI. Multiply by the loaded cost of the people involved. Apply over the life of the contract. The number is a range, not a point, because the inputs are estimates.',
      },
      {
        kind: 'heading',
        body: 'How to quantify risk mitigation',
      },
      {
        kind: 'paragraph',
        body: 'Risk mitigation requires more care. The event has not happened, and it may not happen. The honest model multiplies the cost of the event by the probability of the event, and discounts that product by the proportion of risk RDI plausibly removes. All three inputs are uncertain, so the answer is published as a range, with the assumptions in plain sight.',
      },
      {
        kind: 'heading',
        body: 'How to quantify capacity',
      },
      {
        kind: 'paragraph',
        body: 'Capacity is the easiest category to overlook and the most strategic. RDI lets a project director monitor more activity. It lets a portfolio leader see more sites. The value is not a saving on this project; it is a project the team can take that they could not have taken before. Capacity is best modelled at the portfolio level rather than the project level.',
      },
      {
        kind: 'list',
        items: [
          'Operational savings: recurring, concrete, easy to defend.',
          'Risk mitigation: probabilistic, requires assumptions, deserves ranges.',
          'Capacity: strategic, hard to attribute precisely, most valuable at scale.',
          'All three should appear in any business case, weighted by certainty.',
        ],
      },
      {
        kind: 'heading',
        body: 'Confidence bands',
      },
      {
        kind: 'paragraph',
        body: 'A defensible ROI publishes ranges. Low, mid, high estimates. Plain assumptions. Sensitivity to the inputs that move the answer most. A finance partner who sees a range with assumptions trusts the model. A finance partner who sees a single confident number assumes the salesperson rather than the analyst is in charge.',
      },
      {
        kind: 'callout',
        title: 'The honesty test',
        body: 'A business case is honest when the assumptions are visible, the ranges are wide enough to reflect real uncertainty, and the case still pays back at the low end. If the case only pays back at the mid or high estimate, the project is buying a narrative, not a return.',
      },
      {
        kind: 'paragraph',
        body: 'The method is not complicated. It is rare because it requires the discipline to publish what is not known and the patience to refine the numbers as project-specific data arrives. The teams that adopt it tend to make better procurement decisions and to avoid the disappointment that follows over-promised business cases.',
      },
    ],
  },
  {
    slug: 'roi-confidence-and-credibility',
    title: 'ROI confidence and credibility',
    summary:
      'Why a public ROI argument earns trust by publishing ranges, sources, and assumptions, and why a single confident number tends to do the opposite.',
    area: 'rdi-economics',
    readingMinutes: 6,
    related: ['roi-method-overview', 'roi-modelling-replacement-vs-supporting', 'manual-reporting-savings-model'],
    body: [
      {
        kind: 'paragraph',
        body: 'A construction technology business case lives or dies on its credibility with finance. The technical question is whether the workflow saves what the case says. The political question is whether the finance partner believes the team did the analysis honestly. The answer to the political question is what determines whether the project gets approved.',
      },
      {
        kind: 'heading',
        body: 'Why ranges build trust',
      },
      {
        kind: 'paragraph',
        body: 'A range tells the reader that the analyst understood the inputs were uncertain and refused to pretend otherwise. A single confident number tells the reader that the analyst either did not look at uncertainty or chose to hide it. Finance partners read the second message faster than authors expect. Once read, it is hard to unread.',
      },
      {
        kind: 'heading',
        body: 'What to publish',
      },
      {
        kind: 'list',
        items: [
          'Low, mid, and high estimates for each line of value.',
          'The assumptions behind each estimate, in plain English.',
          'The source of any benchmark used in the model.',
          'The sensitivity of the result to the inputs that move it most.',
          'A clear statement that the public model is directional and that project-specific data will refine it.',
        ],
      },
      {
        kind: 'heading',
        body: 'The directional disclaimer',
      },
      {
        kind: 'paragraph',
        body: 'Public ROI calculators are educational. They use industry-typical assumptions to give a buyer a feel for the shape of the value. They are not quotes. The honest position is to say so, on the page, in the report, and in the sales conversation. A directional model that pretends to be a quote is the fastest way to lose a finance partner permanently.',
      },
      {
        kind: 'heading',
        body: 'How a project-specific case differs',
      },
      {
        kind: 'paragraph',
        body: 'A project-specific business case replaces directional assumptions with project data. Actual headcount, actual reporting cadence, actual claim history, actual gate volumes. The shape of the model is the same. The width of the range narrows because the inputs are no longer industry estimates but project facts. That is the model the procurement decision should run on.',
      },
      {
        kind: 'callout',
        title: 'The credibility test',
        body: 'Hand the model to someone in finance who has not read the marketing. If they read the assumptions and ranges and stay engaged, the case is credible. If they put it down because the numbers look too clean, the case has lost the audience that decides the procurement.',
      },
      {
        kind: 'paragraph',
        body: 'Credibility compounds across projects. A team known for honest business cases is heard more carefully on the next case. A team known for over-promising is treated more sceptically, even when the next case is good. The discipline pays back in approved projects, not in clever models.',
      },
    ],
  },
  {
    slug: 'roi-modelling-replacement-vs-supporting',
    title: 'Modelling replacement workflows versus supporting workflows',
    summary:
      'The two main shapes of RDI value model differently. Replacement workflows substitute for an existing line in the budget; supporting workflows make an existing process better.',
    area: 'rdi-economics',
    readingMinutes: 7,
    related: ['roi-method-overview', 'roi-confidence-and-credibility', 'manual-reporting-savings-model'],
    body: [
      {
        kind: 'paragraph',
        body: 'Not all RDI value looks the same in a business case. Some workflows replace a cost the project already pays. Others support a process the project already runs and make it better. The two shapes model differently, and conflating them produces ROI cases that finance partners reject. The clean separation is the cleanest way to a credible number.',
      },
      {
        kind: 'heading',
        body: 'Replacement workflows',
      },
      {
        kind: 'paragraph',
        body: 'A replacement workflow substitutes for an existing line in the project budget. Manual report preparation. Third-party progress photo services. Outsourced gate management. Each of these is a recurring cost today; the workflow replaces the cost or shrinks it materially. The model is direct: take the cost out, put the workflow cost in, the difference is the saving.',
      },
      {
        kind: 'heading',
        body: 'Supporting workflows',
      },
      {
        kind: 'paragraph',
        body: 'A supporting workflow does not replace a line in the budget. It improves a process that the project already runs in-house. The OAC meeting still happens; it just runs better. The claims process still exists; it just produces stronger files faster. The value here is real but harder to attribute to a budget line, and that is the point of separation.',
      },
      {
        kind: 'list',
        items: [
          'Replacement: clear budget line, easy to model, defensible to finance.',
          'Supporting: real value, harder to model, deserves its own treatment.',
          'Most projects have both, and most cases benefit from naming each.',
          'Mixing them in one number tends to make the case look weaker, not stronger.',
        ],
      },
      {
        kind: 'heading',
        body: 'How to model replacement',
      },
      {
        kind: 'paragraph',
        body: 'Identify the cost line. Confirm it with the team that owns the budget. Estimate the proportion the workflow replaces. Apply over the contract life. Subtract the workflow cost. The result is a saving with a defensible source. Range the proportion to reflect uncertainty about how completely the workflow replaces the line.',
      },
      {
        kind: 'heading',
        body: 'How to model supporting',
      },
      {
        kind: 'paragraph',
        body: 'Identify the process. Estimate the time the process consumes today. Estimate the time it consumes after the workflow is in place. Multiply by the loaded cost of the people involved. Apply over the contract life. The number is smaller per workflow than a replacement saving usually is, but it accumulates across multiple supporting workflows and is largely additive.',
      },
      {
        kind: 'callout',
        title: 'The line that disarms scepticism',
        body: 'Open the case with the replacement value, since it is the easiest to defend. Then add the supporting value with its own ranges and assumptions. Finance partners who would have rejected a single inflated number tend to accept the same total when it is presented in its two natural shapes.',
      },
      {
        kind: 'paragraph',
        body: 'Most mature RDI cases combine three or four replacement workflows with three or four supporting workflows. The combined picture is usually stronger than any individual workflow, and the credibility comes from the discipline of separating the two shapes rather than blending them into a single line.',
      },
    ],
  },
  {
    slug: 'manual-reporting-savings-model',
    title: 'The manual reporting savings model',
    summary:
      'A worked template for the most common replacement workflow in any RDI case: the recurring time cost of preparing reports without automation.',
    area: 'rdi-economics',
    readingMinutes: 6,
    related: ['roi-method-overview', 'roi-modelling-replacement-vs-supporting', 'dispute-avoidance-credit-model'],
    body: [
      {
        kind: 'paragraph',
        body: 'Reporting is the work that nobody schedules and everybody does. Weekly progress decks. Monthly owner reports. Lender drawdowns. Board updates. Each one is a few hours for the person preparing it, plus the trail of people who hunt for screenshots, schedules, and quotes. Across a contract, the total is large. Across a portfolio, it is the easiest workflow to model.',
      },
      {
        kind: 'heading',
        body: 'The basic shape',
      },
      {
        kind: 'paragraph',
        body: 'Identify each report the project produces. For each, estimate the hours the primary author spends preparing it. Add the hours others spend supplying inputs. Multiply by the loaded cost of those people. Multiply by the frequency over the contract life. The total is the current cost of manual reporting on this project.',
      },
      {
        kind: 'heading',
        body: 'The replacement assumption',
      },
      {
        kind: 'paragraph',
        body: 'A reporting workflow does not eliminate reporting; it shortens it. Estimate the proportion of preparation time that the workflow removes. The estimate should be conservative — usually somewhere between forty and seventy per cent for a mature setup. The remainder still happens because someone still needs to curate, narrate, and check.',
      },
      {
        kind: 'list',
        items: [
          'Identify each recurring report and its frequency.',
          'Estimate primary author hours and contributor hours.',
          'Multiply by loaded cost rates.',
          'Apply the proportion the workflow replaces.',
          'Sum across reports for the contract life.',
        ],
      },
      {
        kind: 'heading',
        body: 'Where the model is conservative',
      },
      {
        kind: 'paragraph',
        body: 'The model deliberately ignores the second-order effects: faster owner approvals because reports arrive on time, fewer follow-up questions because the evidence is in the deck, and reduced over-reporting because the standing pack covers most needs. Those effects are real and valuable, and they belong in the supporting-workflow side of the case rather than the replacement side.',
      },
      {
        kind: 'heading',
        body: 'Where the model is sensitive',
      },
      {
        kind: 'paragraph',
        body: 'The model is most sensitive to two inputs: the hours estimate and the replacement proportion. Both should be ranged. A low estimate uses defensible base hours and a conservative replacement proportion; a high estimate uses fuller hours and a higher replacement proportion. The mid is the published number; the range is the honesty.',
      },
      {
        kind: 'callout',
        title: 'The thirty-minute exercise',
        body: 'Sit with the team that prepares reports today. Walk through one cycle. Note who supplies what and how long it takes. The exercise produces inputs that defeat finance scepticism better than any benchmark, because the inputs come from the people who would otherwise dismiss the model.',
      },
      {
        kind: 'paragraph',
        body: 'Manual reporting is rarely the largest single line of value, but it is the most defensible. It is the line that finance partners agree with first, and it is often what unlocks the conversation about the larger and harder lines that follow.',
      },
    ],
  },
  {
    slug: 'dispute-avoidance-credit-model',
    title: 'The dispute avoidance credit model',
    summary:
      'A worked template for the risk-mitigation line item: the value of avoiding the disputes that the captured record makes harder to start.',
    area: 'rdi-economics',
    readingMinutes: 7,
    related: ['roi-method-overview', 'roi-confidence-and-credibility', 'manual-reporting-savings-model'],
    body: [
      {
        kind: 'paragraph',
        body: 'Dispute avoidance is the line that buyers want to claim and finance partners are right to challenge. The event has not happened. The probability is unclear. The proportion of the risk that any single workflow removes is debatable. The credit is real, but it has to be modelled with discipline or it discredits the rest of the case.',
      },
      {
        kind: 'heading',
        body: 'The shape of the credit',
      },
      {
        kind: 'paragraph',
        body: 'The model takes three inputs. The cost of the dispute if it occurs. The probability the dispute occurs across the contract life. The proportion of that probability the workflow plausibly removes. The product of the three is the expected credit. None of the three is precise; that is the reason for ranges.',
      },
      {
        kind: 'heading',
        body: 'Estimating cost',
      },
      {
        kind: 'paragraph',
        body: 'Cost has direct and indirect components. Legal fees. Expert costs. Internal time. Settlement value or judgement value. Reputational and relational impact. The model uses defensible estimates from past projects rather than headline-grabbing benchmarks. Conservative inputs build credibility; aggressive inputs lose it.',
      },
      {
        kind: 'heading',
        body: 'Estimating probability',
      },
      {
        kind: 'paragraph',
        body: 'Probability comes from the project profile. The project type, the contract form, the risk register, and the team´s past dispute rate all inform it. A project with no recent disputes uses a low probability; a project on a contract form known for disputes uses a higher one. The estimate should be ranged, with the assumption visible.',
      },
      {
        kind: 'heading',
        body: 'Estimating the workflow contribution',
      },
      {
        kind: 'paragraph',
        body: 'The third input is the hardest. The workflow does not eliminate disputes; it removes the easiest disputes and shortens the harder ones. A defensible mid estimate is somewhere between fifteen and forty per cent of the residual probability, depending on the workflow profile. The high estimate is rarely above sixty per cent; the low estimate sits below twenty.',
      },
      {
        kind: 'list',
        items: [
          'Cost: the realistic full cost of the dispute, direct and indirect.',
          'Probability: a ranged estimate informed by project profile.',
          'Contribution: the proportion of risk the workflow plausibly removes.',
          'Range: low, mid, high, with assumptions visible.',
          'Always present alongside replacement-savings lines, not in isolation.',
        ],
      },
      {
        kind: 'callout',
        title: 'How to talk about this with finance',
        body: 'Lead with the replacement-savings line; let it carry the case at the low end. Present the dispute credit as additional confidence rather than the main act. Finance partners who see a case that pays back without the credit tend to grant the credit; cases that depend on the credit tend to get rejected.',
      },
      {
        kind: 'paragraph',
        body: 'The dispute credit is most useful at portfolio scale. A single project may or may not see the dispute land; a portfolio of fifty projects, run with the discipline, will see the rate fall in measurable ways. That is the level at which the credit becomes a number leadership can quote without nervousness.',
      },
    ],
  },
  {
    slug: 'learning-paths-by-role',
    title: 'Learning paths by role',
    summary:
      'Suggested journeys through the RDI curriculum for project directors, commercial managers, owners, safety leaders, digital construction leads, and finance partners.',
    area: 'learning-paths',
    readingMinutes: 6,
    related: ['learning-path-foundation', 'learning-path-practitioner', 'learning-path-executive'],
    body: [
      {
        kind: 'paragraph',
        body: 'No single curriculum suits every role. The project director needs a different lens on the same material than the commercial manager. The owner has a different question than the digital construction lead. The paths below sketch which courses and articles to take in which order, depending on which role the reader holds.',
      },
      {
        kind: 'heading',
        body: 'Project directors and project managers',
      },
      {
        kind: 'paragraph',
        body: 'Start with RDI foundations to anchor the language. Move into capture planning and coverage to understand how decisions about hardware translate into outcomes. Add safety workflows for site leadership and the claims practitioner course to cover the most common high-stakes loops. Use the workflow-anatomy and progress-verification articles in the knowledge base for reference.',
      },
      {
        kind: 'heading',
        body: 'Commercial managers and quantity surveyors',
      },
      {
        kind: 'paragraph',
        body: 'Anchor on the claims and evidence practitioner course. Read alongside the claims-evidence and subcontractor-performance workflow articles. Pair with the dispute avoidance credit model and the manual reporting savings model to be fluent in the financial language. Owners-side commercial roles add the RDI for owners course.',
      },
      {
        kind: 'heading',
        body: 'Owners and owner representatives',
      },
      {
        kind: 'paragraph',
        body: 'Start with RDI for owners. Add stakeholder reporting workflows and progress verification workflows to understand what an owner can fairly ask for. The category boundary articles help avoid the common confusion between RDI and adjacent tools. Finance-aligned owner reps add the ROI method overview.',
      },
      {
        kind: 'heading',
        body: 'Safety leaders',
      },
      {
        kind: 'paragraph',
        body: 'Start with safety workflows for site leadership. Read alongside safety monitoring workflows and compliance record workflows. Use the chain-of-custody and preservation-and-retention articles for evidence handling. The category boundary articles help when conversations pivot to AI dashboards or camera-only platforms.',
      },
      {
        kind: 'heading',
        body: 'Digital construction leads',
      },
      {
        kind: 'paragraph',
        body: 'Anchor on the capture planning and coverage course. Add the design verification workflow article and the category boundary with BIM article. Pair with the maturity curve to understand where the project sits and what would move it forward. The role tends to act as the connective tissue between procurement, sites, and owners.',
      },
      {
        kind: 'heading',
        body: 'Finance partners and commercial directors',
      },
      {
        kind: 'paragraph',
        body: 'Start with the RDI economics for the business case course. Pair with the ROI method overview and confidence-and-credibility articles. Use the replacement-versus-supporting model to interrogate any case the team brings. Finance-side scrutiny is what keeps the rest of the curriculum honest, and the executive course is built for that scrutiny.',
      },
      {
        kind: 'callout',
        title: 'How to use the paths',
        body: 'These paths are suggestions, not rules. A practitioner who finds the executive course faster reading is welcome to start there. The point is to make sure each role meets the material that addresses their question first, rather than the material that interests the person who set the curriculum.',
      },
      {
        kind: 'paragraph',
        body: 'The curriculum is intentionally connected. Most courses reference each other. Most articles assume the reader has touched the foundations. The paths above keep the connections coherent for the role rather than asking the reader to assemble the route alone.',
      },
    ],
  },
  {
    slug: 'learning-path-foundation',
    title: 'Learning path: foundation',
    summary:
      'A walkthrough of the foundation curriculum, lesson by lesson, for readers who want to ground themselves in RDI before going deeper.',
    area: 'learning-paths',
    readingMinutes: 5,
    related: ['learning-paths-by-role', 'learning-path-practitioner', 'learning-path-executive'],
    body: [
      {
        kind: 'paragraph',
        body: 'The foundation curriculum exists to give every other course a common starting point. By the end of it, the reader can use RDI language correctly, identify the layers of the stack, place a workflow in the anatomy, and frame an ROI conversation honestly. The curriculum is short on purpose; it is the door, not the room.',
      },
      {
        kind: 'heading',
        body: 'Lesson one: what RDI means',
      },
      {
        kind: 'paragraph',
        body: 'The first lesson defines RDI as a discipline rather than a product. It introduces the five layers — capture, ground truth, interpretation, action, command — and explains why each layer is necessary and why each one degrades when the layer below it is missing. The lesson closes with the test that distinguishes RDI from buying cameras.',
      },
      {
        kind: 'heading',
        body: 'Lesson two: ground truth and evidence quality',
      },
      {
        kind: 'paragraph',
        body: 'The second lesson covers what makes a captured record trustworthy enough to be used in a contested setting. Time alignment, location tagging, chain of custody, and retention are introduced at a level the reader can apply without further reading. The lesson closes with the five-question evidence test.',
      },
      {
        kind: 'heading',
        body: 'Lesson three: workflow thinking',
      },
      {
        kind: 'paragraph',
        body: 'The third lesson contrasts feature thinking with workflow thinking. A feature gives a user a capability; a workflow closes a loop. The lesson walks through a progress example and a safety example, and introduces the six-part anatomy that the rest of the curriculum returns to.',
      },
      {
        kind: 'heading',
        body: 'Lesson four: ROI language',
      },
      {
        kind: 'paragraph',
        body: 'The fourth lesson introduces the three categories of value — operational savings, risk mitigation, capacity — and the discipline of confidence ranges. It is not a finance course; it is the level of fluency a non-finance role needs to participate in a credible business case conversation.',
      },
      {
        kind: 'heading',
        body: 'Lesson five: using the workflow library',
      },
      {
        kind: 'paragraph',
        body: 'The fifth lesson teaches the reader to navigate the workflow library. Workflow packs, workflows, the trigger-evidence-action shape, and the cost-model assumptions are introduced as practical reading skills. The reader leaves able to pick the relevant pack for a project conversation and to interrogate it sensibly.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        body: 'After the foundation, take the role-aligned path. The practitioner courses go deeper into specific workflows; the executive courses go deeper into the business case and the portfolio. The foundation is the shared map for both directions.',
      },
      {
        kind: 'paragraph',
        body: 'Most teams complete the foundation in a working day if they do it together. The shared vocabulary that emerges is more valuable than any individual lesson, because it lets the next round of conversations move at speed without re-establishing terms.',
      },
    ],
  },
  {
    slug: 'learning-path-practitioner',
    title: 'Learning path: practitioner',
    summary:
      'An overview of the practitioner curriculum: claims and evidence, safety leadership, and capture planning, with the order in which most readers benefit from taking them.',
    area: 'learning-paths',
    readingMinutes: 6,
    related: ['learning-paths-by-role', 'learning-path-foundation', 'learning-path-executive'],
    body: [
      {
        kind: 'paragraph',
        body: 'The practitioner curriculum is for the people who run the loops day to day. Commercial managers, claims managers, quantity surveyors, site managers, safety leads, and digital construction leads. By the end of the curriculum, the reader can take a workflow from anatomy to closeout and defend the record that comes out of it.',
      },
      {
        kind: 'heading',
        body: 'The claims and evidence practitioner course',
      },
      {
        kind: 'paragraph',
        body: 'The claims course walks through the assembly of defensible records — delay claims, weather claims, subcontractor disputes, evidence exports for legal review, payment evidence, and the building of a claim file. It teaches the discipline of capturing evidence at the time of the event, indexing it, and presenting it in a form that survives scrutiny.',
      },
      {
        kind: 'heading',
        body: 'The safety workflows for site leadership course',
      },
      {
        kind: 'paragraph',
        body: 'The safety course walks site managers and HSE leads through the loop from finding to closeout. It covers incident evidence preservation, near-miss handling, PPE and high-risk monitoring, safety meetings with evidence on the table, and the conversations with regulators and insurers that follow. The course is operational rather than aspirational.',
      },
      {
        kind: 'heading',
        body: 'The capture planning and coverage course',
      },
      {
        kind: 'paragraph',
        body: 'The capture course belongs to the digital construction lead but rewards anyone who shapes the project´s capture strategy. It walks from camera count to capture plan, organises coverage by workflow rather than by area, distinguishes fixed, mobile, 360, and drone, and treats the capture plan as a living document rather than a procurement artefact.',
      },
      {
        kind: 'list',
        items: [
          'Claims and evidence: the commercial practitioner´s deep dive.',
          'Safety leadership: the site leader´s deep dive.',
          'Capture planning: the digital construction lead´s deep dive.',
          'All three assume the foundation curriculum has been completed.',
        ],
      },
      {
        kind: 'heading',
        body: 'How to sequence the courses',
      },
      {
        kind: 'paragraph',
        body: 'Most readers benefit from taking the course aligned with their primary role first. After that, an adjacent course usually pays back: a commercial manager who has done claims gains from the capture course; a digital lead who has done capture gains from the safety course. The cross-course exposure is what produces fluency in conversations that span functions.',
      },
      {
        kind: 'callout',
        title: 'When to take the executive courses',
        body: 'Practitioners who lead teams or run business cases benefit from the executive courses on RDI for owners and RDI economics. The executive material is not aspirational; it is the language of the conversations that decide whether the practitioner´s work gets approved.',
      },
      {
        kind: 'paragraph',
        body: 'The practitioner curriculum produces practitioners. The discipline is in the application, not the completion. A team that has finished the courses and is running the loops is the team most likely to defend the records when something difficult arrives.',
      },
    ],
  },
  {
    slug: 'learning-path-executive',
    title: 'Learning path: executive',
    summary:
      'An overview of the executive curriculum: RDI for owners, and RDI economics for the business case, with the order in which most senior readers benefit from taking them.',
    area: 'learning-paths',
    readingMinutes: 5,
    related: ['learning-paths-by-role', 'learning-path-foundation', 'learning-path-practitioner'],
    body: [
      {
        kind: 'paragraph',
        body: 'The executive curriculum is for the people who decide whether RDI is procured, scaled, or wound down. Owners. Owner representatives. Project directors. Commercial directors. Finance partners. The curriculum does not teach how to run a workflow; it teaches how to read a portfolio and how to interrogate a business case without having to take anyone´s word.',
      },
      {
        kind: 'heading',
        body: 'The RDI for owners course',
      },
      {
        kind: 'paragraph',
        body: 'The owners course covers the question every owner ends up asking: where is the project against where it should be, and how confident am I in the answer. It walks through reporting without chasing, programme confidence from evidence, the owner-side view of risk and claims, closeout and handover from day one, and portfolio command for owners with multiple projects.',
      },
      {
        kind: 'heading',
        body: 'The RDI economics for the business case course',
      },
      {
        kind: 'paragraph',
        body: 'The economics course covers the three shapes of RDI value, the discipline of confidence bands, the difference between replacement and supporting models, the careful use of public directional numbers, the construction of a defensible business case, and the discipline of tracking outcomes after go-live. It is unashamedly a finance course.',
      },
      {
        kind: 'list',
        items: [
          'RDI for owners: the portfolio reader´s deep dive.',
          'RDI economics: the finance partner´s deep dive.',
          'Both assume the foundation curriculum and benefit from selective practitioner reading.',
          'Both are intentionally short — the value is in application, not duration.',
        ],
      },
      {
        kind: 'heading',
        body: 'How to sequence the courses',
      },
      {
        kind: 'paragraph',
        body: 'Owner-side roles tend to benefit from taking RDI for owners first; finance and commercial roles tend to benefit from RDI economics first. Most senior readers find that taking both produces stronger meetings — owners gain financial fluency, finance partners gain context for what the workflow actually does. The combination is what most boards want to see.',
      },
      {
        kind: 'callout',
        title: 'The portfolio question',
        body: 'The executive courses are most useful at the portfolio level. A single project can be assessed by gut feel; a portfolio cannot. The discipline of these courses is the discipline of running a portfolio that learns rather than a portfolio that just reports.',
      },
      {
        kind: 'paragraph',
        body: 'The executive curriculum is short on purpose. Senior readers do not need long lessons; they need precise vocabulary and the right tests to apply. The courses provide both, and they leave the deeper material to the knowledge base for the days when a specific question warrants it.',
      },
    ],
  },
]
