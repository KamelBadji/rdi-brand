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
      {
        slug: 'weather-claims-substantiation',
        title: 'Weather claims substantiation',
        summary: 'How to substantiate a weather claim with time-aligned site capture, a recognised weather source, and contemporaneous notes.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'Why weather claims fail',
            body: 'Most weather claims fail not because the weather did not happen but because the claim cannot show that the weather affected the activity. A rainfall report shows the weather. A schedule extract shows the activity. Without a captured view of the work front at the time, the link between the two has to be argued from inference. That argument loses more often than it wins. The substantiation requires a third source — the site capture — that closes the loop between weather and activity.',
          },
          {
            title: 'The three-source test',
            body: 'A defensible weather claim uses three time-aligned sources. The weather record from a recognised source — usually a meteorological service rather than a phone app. The site capture showing the work front during the period. The schedule extract showing the activity that was supposed to be in progress. When the three sources align, the claim narrative writes itself: the weather was there, the work front was empty, the activity was on the path. When the three sources do not align, the project knows the claim is weaker than it looks.',
          },
          {
            title: 'Building the file at the time',
            body: 'The file should open the day the stand-down occurs, not the day the notice goes out. A short note in the diary, a tagged clip from the relevant view, a printed weather record from the source the team uses by default, and a programme extract dated at the moment. Five minutes of work that day prevents five hours of reconstruction six months later. Most weather claim weakness is the gap between those two moments.',
          },
        ],
        checkpoint: 'Pick a wet day from this month. Can you produce the three sources, time-aligned, in under ten minutes?',
      },
      {
        slug: 'subcontractor-disputes',
        title: 'Subcontractor disputes: scope, attendance, quality',
        summary: 'How to use the captured base to substantiate the three most common subcontractor disputes — scope of works, attendance, and quality of installation.',
        estimatedMinutes: 14,
        sections: [
          {
            title: 'Scope disputes',
            body: 'Scope disputes argue about what was included in the package. The captured base helps when scope is referenced to physical works in defined areas. A 360 walk taken at the start of the package, with the package boundary clear, sits alongside the contract documents. When the subcontractor argues that an item was outside scope, the walk and the documents together show what the area looked like at the start and what the agreed boundary was. The dispute resolves with reference to the record, not memory.',
          },
          {
            title: 'Attendance disputes',
            body: 'Attendance disputes argue about who was on site. Gate records and personnel scans, tied to subcontractor and package, settle most of these in minutes. The discipline is to align attendance to the package programme: the certifier expects to see attendance during the period certified for, not just any attendance. Cross-checks with site capture at the work front close the gap. A subcontractor whose attendance does not match the certification request tends to withdraw the dispute when the records arrive.',
          },
          {
            title: 'Quality disputes',
            body: 'Quality disputes argue about how the work was installed. The captured base supports these when 360 walks ran through the package at the right intervals. A walk before close-out, a walk during installation, and a walk at handover give the project a defensible visual record at three points in time. When a quality issue surfaces later, the question is no longer what the work looked like; it is what the disposition was. That is a much shorter conversation.',
          },
        ],
        checkpoint: 'For a current package, name one dispute that could plausibly arise and the evidence you would assemble to settle it.',
      },
      {
        slug: 'evidence-export-for-legal-review',
        title: 'Evidence export for legal review',
        summary: 'How to export evidence in formats that a solicitor, expert, or court will accept, with the metadata and chain-of-custody intact.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Formats that survive review',
            body: 'External legal review prefers stable, widely supported formats. Video clips in standard codecs. Images with embedded metadata preserved. PDFs of correspondence and programme extracts rather than live document links. The default export from a viewer is rarely the right format for legal review; the team should know which export option to choose, and the policy should be written down so the choice is consistent across the project.',
          },
          {
            title: 'Metadata preservation',
            body: 'Metadata is what tells the reviewer when a clip was captured, on what device, by what account. Strip the metadata and the clip becomes one step weaker as evidence. The export tool should preserve metadata by default. Where metadata cannot travel with the file, an accompanying export report should record it. The reviewer should never have to ask whether the file is the original or a derivative.',
          },
          {
            title: 'Chain of custody on export',
            body: 'Each export adds a step to the chain of custody. The system records who exported, when, and to whom. The export bundle should include a custody report alongside the files. When a clip leaves the platform on an email, the email itself becomes part of the chain. The discipline is to know the chain still holds at the point of review, not to rebuild it under pressure.',
          },
        ],
        checkpoint: 'For a clip in a current dispute, can you produce an export with metadata and a custody report in under twenty minutes?',
      },
      {
        slug: 'payment-evidence-and-cycles',
        title: 'Payment evidence and certification cycles',
        summary: 'How to use the captured base to support payment applications and accelerate certification, both upstream from the owner and downstream to subcontractors.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'The case for evidence-attached applications',
            body: 'A payment application that arrives with evidence is faster to certify than one that arrives as a number alone. The evidence does not need to be exhaustive; it needs to be enough that the certifier does not have to ask for more. A short evidence pack — site capture of the work front, a 360 walk through the package, a programme extract — turns a fortnight of correspondence into a same-week certification. Multiplied across the contract life, the saving is material.',
          },
          {
            title: 'Subcontractor certifications',
            body: 'The same discipline applies downstream. A subcontractor who attaches evidence to their valuation makes life easier for the certifier and tends to be paid faster. The contractor who runs the workflow at scale across all packages tends to find that the cycle smooths and the disputed certifications drop. The discipline costs nothing extra to the project; it uses the captured base that already exists.',
          },
          {
            title: 'When the cycle breaks',
            body: 'Payment cycles break in two places. The certifier disagrees with the quantity, and the application has to be reworked. The certifier disagrees with the quality, and the application has to be paused. Both breaks are addressed by evidence. A captured 360 walk showing the installed work, a clip of the work front during the period, an attendance record matching the labour claimed. The break still happens, but it resolves in days rather than weeks.',
          },
        ],
        checkpoint: 'For the next certification cycle, what would a one-page evidence attachment look like?',
      },
    ],
  },
]
