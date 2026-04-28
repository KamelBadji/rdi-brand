import type { Course } from './types'

export const courses: Course[] = [
  {
    slug: 'rdi-foundations',
    title: 'Reality-Driven Intelligence Foundations',
    level: 'Foundation',
    estimatedMinutes: 64,
    summary:
      'A practical course on the RDI stack, workflow thinking, evidence quality, ROI language, and how to apply the workflow library to real construction decisions.',
    audience: ['Project director', 'Owner representative', 'Digital construction lead', 'Commercial manager'],
    outcomes: [
      'Explain RDI using the five-layer stack.',
      'Translate product capabilities into workflows.',
      'Connect workflow packs to ROI conversations.',
    ],
    lessons: [
      {
        slug: 'what-rdi-means',
        title: 'What RDI means',
        summary: 'Define the five layers of RDI and the shift from site visibility to operational command.',
        estimatedMinutes: 10,
        sections: [
          {
            title: 'Definition',
            body: 'Reality-Driven Intelligence is the discipline for turning construction reality into trusted evidence, decision-ready interpretation, accountable action, and measurable command. Capture is only the first layer. RDI begins to matter when the record changes a project decision.',
          },
          {
            title: 'The five layers',
            body: 'Reality capture records the site. Ground truth makes the record reliable. Interpretation identifies meaning. Action routes the finding into tasks, escalations, or reports. Command lets leaders direct attention across projects.',
          },
          {
            title: 'Why this is a category',
            body: 'Construction teams do not need another passive archive. They need a way to prove conditions, understand exceptions, act faster, and learn from recurring patterns.',
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
            body: 'Ground truth is time-aligned, location-aware evidence that can be trusted by site teams, commercial teams, owners, insurers, or legal reviewers. It needs context: where, when, what changed, who is affected, and how the record was preserved.',
          },
          {
            title: 'Evidence quality',
            body: 'Useful evidence is specific. A timestamped clip, a camera view, a weather report, a gate record, or a 360 walk is stronger when it connects directly to the decision being made.',
          },
          {
            title: 'Preservation',
            body: 'Incident and claim workflows are time-sensitive. If evidence is not preserved, the project may lose the only objective record of what happened.',
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
            body: 'A feature gives a user a capability, such as search, playback, compare, or export. A feature can be valuable, but by itself it may still leave the user responsible for turning output into action.',
          },
          {
            title: 'Workflow thinking',
            body: 'A workflow starts with a trigger, performs an activity, reaches a conclusion, and leaves an evidence trail. The workflow is complete only when the decision or action loop is closed.',
          },
          {
            title: 'The safety example',
            body: 'Searching for a person near a machine is useful. A stronger workflow detects a risk, creates an observation, assigns ownership, escalates if unresolved, records closeout, and reports recurrence.',
          },
        ],
        checkpoint: 'Pick one construction technology capability and describe the workflow it should complete.',
      },
      {
        slug: 'roi-language',
        title: 'ROI language',
        summary: 'Connect RDI workflows to financial outcomes, risk reduction, and operational capacity.',
        estimatedMinutes: 15,
        sections: [
          {
            title: 'Operational savings',
            body: 'Some workflows reduce predictable recurring work: manual reporting, progress-photo distribution, meeting preparation, evidence retrieval, and routine verification.',
          },
          {
            title: 'Risk mitigation',
            body: 'Other workflows reduce exposure to low-frequency but high-cost events: disputes, theft, injuries, weather claims, regulatory events, and rework.',
          },
          {
            title: 'Credibility',
            body: 'RDI ROI must show assumptions, ranges, evidence, and confidence. A directional public calculator can educate the market, while a production ROI report should use project-specific data.',
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
            title: 'Workflow packs and workflows',
            body: 'Workflow packs help practitioners browse the category through real construction problems. Workflows prove value by showing trigger, evidence, decision, action, and outcome.',
          },
          {
            title: 'Reading a workflow',
            body: 'Start with the trigger, activity, and conclusion. Then review evidence, steps, confidence, frequency, current fulfilment role, and whether a cost model exists.',
          },
          {
            title: 'Applying the library',
            body: 'For a project conversation, select the relevant workflow pack, identify which workflows apply, check the evidence and cost-model assumptions, then decide what should be included in the ROI or site plan.',
          },
        ],
        checkpoint: 'What makes a workflow suitable for an ROI calculation rather than a qualitative benefit?',
      },
    ],
  },
  {
    slug: 'claims-evidence-practitioner',
    title: 'Claims & Evidence Practitioner',
    level: 'Practitioner',
    estimatedMinutes: 90,
    summary:
      'A practical course for commercial managers, claims managers, and quantity surveyors on assembling defensible records before disputes are formalised, and on running the workflows that keep evidence usable through the life of a claim.',
    audience: ['Commercial manager', 'Claims manager', 'Quantity surveyor', 'Project director'],
    outcomes: [
      'Assemble a defensible claim file at the time of the event rather than retrospectively.',
      'Substantiate delay, weather, and subcontractor disputes with time-aligned records.',
      'Export evidence in a form that survives external legal review.',
      'Connect payment evidence to faster certification cycles.',
    ],
    lessons: [
      {
        slug: 'delay-claims-anatomy',
        title: 'The anatomy of a delay claim',
        summary: 'How a delay claim is assembled, what evidence supports each part, and where the most common failure modes lie.',
        estimatedMinutes: 14,
        sections: [
          {
            title: 'The anatomy of a delay claim',
            body: 'A delay claim has four parts: the event, the activity affected, the path the activity sits on, and the milestone that moves as a result. Each part has to be evidenced. The event is dated and described. The activity is identified by package and area. The path is shown in the programme extract at the moment of the event. The milestone is the contractual reference that determines the claim value. A claim that names the event but skips the path or the milestone tends to collapse on review.',
          },
          {
            title: 'Evidence by part',
            body: 'For each part, the evidence is specific. The event needs time-aligned site capture, a weather record where relevant, and a contemporaneous note. The activity needs site capture of the work front and the daily site diary. The path needs the programme as it stood at the moment of the event, not as it was reconstructed later. The milestone needs the contract clause and any prior notices. The point is that each part has its own evidence shape, and the project should know which shape it is producing as the workflow runs.',
          },
          {
            title: 'Common failure modes',
            body: 'The most common failure is retrospective assembly. The team opens the file when the formal notice goes out, by which point the captured base has rotated past the event. The second most common failure is a programme that was not preserved at the moment the event occurred, so causation has to be argued from a programme that has already been updated. The third is correspondence not aligned to the same timeline, so the narrative has to be rebuilt from email rather than from a coherent record.',
          },
        ],
        checkpoint: 'For a delay event last week, can you name the four parts and the evidence you have for each?',
      },
    ],
  },
]
