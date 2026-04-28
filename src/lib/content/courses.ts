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
      {
        slug: 'building-the-claim-file',
        title: 'Building the claim file',
        summary: 'How to assemble a claim file that survives external review: a numbered evidence index, a clear narrative, and a defensible chain of custody.',
        estimatedMinutes: 14,
        sections: [
          {
            title: 'The numbered evidence index',
            body: 'A claim file with a numbered evidence index is qualitatively different from a claim file without one. The reviewer can move directly to the item being discussed. The narrative references the index. The cross-checks become navigable. Building the index is the discipline of taking each piece of evidence — clip, walk, weather record, programme extract, correspondence — and giving it a stable reference. The file is judged partly on this discipline.',
          },
          {
            title: 'The narrative',
            body: 'The narrative is the document that walks the reviewer from the event to the milestone. It is short — usually under ten pages — and structured around the four parts of a delay claim. Each assertion is referenced to the index. The narrative does not try to win the argument by force of language; it tries to make the reviewer agree because the references hold up. A narrative that runs longer than ten pages usually contains weaker assertions hiding among stronger ones.',
          },
          {
            title: 'The defensible chain',
            body: 'Each item in the index has a chain of custody from capture to inclusion in the file. The system records who captured, who exported, and how the item reached the file. The custody report is included with the file, not held separately. When the reviewer opens an item, the chain is visible. When the reviewer asks how the item arrived, the answer is on the page. The work to make this visible is small at the time and large at the moment of challenge.',
          },
        ],
        checkpoint: 'For a current or recent claim, can you produce a numbered evidence index in under an hour?',
      },
    ],
  },
  {
    slug: 'safety-workflows-site-leadership',
    title: 'Safety Workflows for Site Leadership',
    level: 'Practitioner',
    estimatedMinutes: 80,
    summary:
      'A practical course for site managers, HSE leads, and project directors on running safety as a closed loop: findings that turn into observations, observations that close, incidents that produce a defensible record, and meetings that sit on evidence rather than recollection.',
    audience: ['Site manager', 'HSE lead', 'Project director', 'Safety director'],
    outcomes: [
      'Run safety findings as closed observations with named owners and clocks.',
      'Preserve incident evidence so the record survives the dispute window.',
      'Use the captured base in regulator and insurer conversations.',
      'Anchor safety meetings on evidence rather than anecdote.',
    ],
    lessons: [
      {
        slug: 'from-finding-to-closeout',
        title: 'From finding to closeout',
        summary: 'How a safety finding turns into an observation with a named owner and a clock, and how the observation closes with a defensible record.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'What a finding is',
            body: 'A finding is a tagged observation about something that does not match the standard. A near-miss. An unsafe act. A hazard. A non-conforming control. Findings come from audits, captured records, and the people on site. The discipline starts at the point of recording: every finding gets a description, a location, a package, a severity, and a captured reference where one exists. Without those fields, the finding is hard to route and harder to close.',
          },
          {
            title: 'Routing the finding',
            body: 'A finding becomes an observation when it gets a named owner and an expected response time. The owner is a role, not just a person, so the workflow survives team changes. The response time is calibrated to the severity. The escalation path is named ahead of time, so an unanswered observation moves up before tolerance is breached. The platform records the routing so the audit trail survives the project.',
          },
          {
            title: 'Closing the loop',
            body: 'Closeout requires evidence that the corrective action was taken. A captured view, a follow-up walk, a signed close-out note. The closeout is part of the record, not separate from it. The platform retains the open-to-close trail so the next audit can move directly from finding to evidence to closure. A workflow that records findings without recording closures is not closed; it is theatre.',
          },
        ],
        checkpoint: 'For a finding logged this week, can you show the owner, the clock, and the closeout evidence?',
      },
      {
        slug: 'incident-evidence-preservation',
        title: 'Incident evidence preservation',
        summary: 'How to preserve the captured base around an incident so the record survives the rotation cycle and the dispute window.',
        estimatedMinutes: 14,
        sections: [
          {
            title: 'The first hour',
            body: 'In the first hour after a significant incident, the priority is care and control. In the second hour, the priority is preservation. The team places a hold on the captured records around the time and location of the incident, including the views before and after, the gate logs, and any 360 walks that pass through the area. The hold prevents default rotation from deleting records the inquiry will need. The work is small at the time and decisive later.',
          },
          {
            title: 'What to preserve',
            body: 'The preservation set is broader than people expect. The captured view of the work front. The views of the access route to the work front. The gate logs for the day. The personnel scans that match the package. The 360 walks taken in the days before. Method statements and permits relevant to the activity. The shift records of the team. Each of these may be needed by the regulator, the insurer, or a later inquiry; preserving them now is much cheaper than reconstructing them later.',
          },
          {
            title: 'The preservation policy',
            body: 'The team should not be making the preservation decision under the pressure of the incident. The policy should already exist: a written list of what gets preserved, who has authority to set the hold, how long the hold lasts, and how it is released. The policy is short. It belongs alongside the capture plan. The discipline is to know it before the day, so the team can act in minutes rather than negotiate in hours.',
          },
        ],
        checkpoint: 'Does your project have a written preservation policy, and do you know who can place a hold today?',
      },
      {
        slug: 'near-miss-loops',
        title: 'Near-miss loops',
        summary: 'How to take near-miss reporting from a logging exercise to a closed loop that changes site behaviour.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Why near-miss data is wasted',
            body: 'Most projects collect near-miss data and waste most of it. Findings are logged, classified, and filed. The pattern goes nowhere because no one returns to it. The captured base offers a way to bind near-misses to a captured view, which makes the finding much harder to forget. A near-miss with a clip attached is a finding that the next safety meeting can return to without ambiguity.',
          },
          {
            title: 'Closing the loop on a near-miss',
            body: 'A near-miss closes when a corrective action is taken and recorded. The corrective action may be small — a refresher toolbox, a change in lay-down, a permit rewrite — but it has to exist and be evidenced. Without the closeout step, the near-miss becomes a number on a dashboard. With the closeout step, it becomes a learning the team can repeat. The discipline is to treat every near-miss the same way every time.',
          },
          {
            title: 'Spotting the recurrence pattern',
            body: 'Across a project, the same near-miss often happens in the same area or on the same package. The captured base makes the pattern visible. A pattern of recurrence is not a finding; it is a programme of work. The site leader who sees the pattern early can address the root cause rather than the surface event. The portfolio leader who sees the pattern across projects can address it at organisational level.',
          },
        ],
        checkpoint: 'For the last three near-misses, can you show the closeout evidence and any pattern you noticed?',
      },
      {
        slug: 'ppe-and-high-risk-monitoring',
        title: 'PPE and high-risk monitoring',
        summary: 'How to use the captured base to monitor PPE compliance and high-risk activities without turning the workflow into surveillance theatre.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'What the captured base can do',
            body: 'A captured base lets the safety lead spot PPE non-compliance and high-risk activities without standing in the area. The point is not to watch every worker; it is to spot the patterns that need attention. Helmet compliance during a deck pour. Edge protection during a roof activity. Lifting operations within the planned envelope. The captured base supports a sample-and-respond posture, not a continuous-watching posture.',
          },
          {
            title: 'Where the workflow goes wrong',
            body: 'The workflow goes wrong when it is run as surveillance. Every individual non-compliance becomes a finding; the team is overwhelmed; the loop loses credibility. The discipline is to focus on patterns and on activities where the consequences of non-compliance are severe. A pattern of helmets-off during the same activity is a finding that warrants attention; an isolated event is best handled by the supervisor on site.',
          },
          {
            title: 'Talking to the workforce',
            body: 'The workforce should know that the captured base supports safety and may be reviewed in a sample-and-respond way. Hidden monitoring damages trust quickly. Visible, explained monitoring tends to be accepted. Most workforces respond well to a discipline that is fair, consistent, and focused on the activities that matter most. The conversation with the workforce is part of the workflow, not separate from it.',
          },
        ],
        checkpoint: 'For your project, can you describe the sample-and-respond posture in one paragraph that a foreman would accept?',
      },
      {
        slug: 'safety-meetings-with-evidence',
        title: 'Safety meetings with evidence',
        summary: 'How to run a weekly safety meeting that opens with the evidence on the table, rather than recollection and intuition.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'The weekly meeting pack',
            body: 'A weekly safety meeting that runs on the captured base looks different from one that runs on memory. The pack opens with the findings of the week, classified and tagged. Each finding has a clip or a walk attached. The owner is named. The clock is visible. The meeting works through the list as a list, not as a series of stories. The discipline shortens the meeting and improves the decisions inside it.',
          },
          {
            title: 'Tracking action across weeks',
            body: 'The meeting also tracks action across weeks. Findings from previous weeks reappear with their status. Open observations that have aged appear with their escalation. Closed observations come off the list. The team can see the system working — the loops that closed, the loops that did not, the patterns that recurred. That visibility is what makes the routine sustainable rather than performative.',
          },
          {
            title: 'The half-hour meeting',
            body: 'A safety meeting that opens with evidence tends to run shorter, not longer. The disagreements that previously consumed twenty minutes resolve in two when the captured view is on the screen. The half-hour meeting becomes the standard. The time saved goes back into closing the actions, which is where safety actually changes.',
          },
        ],
        checkpoint: 'Could your next weekly safety meeting open with a one-page evidence-led pack instead of a verbal summary?',
      },
      {
        slug: 'regulatory-and-insurer-conversations',
        title: 'Regulatory and insurer conversations',
        summary: 'How the captured base supports conversations with regulators, insurers, and other external safety stakeholders.',
        estimatedMinutes: 14,
        sections: [
          {
            title: 'The regulator at the gate',
            body: 'When a regulator arrives, the project´s readiness is determined by what is already in the system. A compliance pack with the right structure means the inspection is a series of predictable conversations rather than a forensic exercise. The captured base supports the controls record, the safety findings, and the closeout evidence. The team that has been running the workflows for months has nothing to assemble; they have something to present.',
          },
          {
            title: 'The insurer survey',
            body: 'Insurer surveys reward the same discipline. The captured base shows controls in place during activities. The findings and closeouts show that the safety system is working. The retention policy shows that records survive the period the insurer cares about. A project that runs the workflows tends to find that insurance conversations move from defensive to factual, and that pricing tends to reflect the change over time.',
          },
          {
            title: 'When something has gone wrong',
            body: 'When an incident has occurred, the captured base supports the conversation rather than complicates it. Preserved records, clear timelines, defensible custody, and the closeout trail of any prior near-misses in the area. The conversation is hard regardless; the evidence makes it shorter. The team that has the discipline tends to come out of the conversation with a clearer set of next steps and fewer follow-up requests.',
          },
        ],
        checkpoint: 'For a hypothetical regulator visit next week, what would the first ten minutes of the meeting look like?',
      },
    ],
  },
  {
    slug: 'rdi-for-owners',
    title: 'RDI for Owners and Owner Representatives',
    level: 'Executive',
    estimatedMinutes: 70,
    summary:
      'A short executive course for owners and owner representatives on how to read a project from the captured record, how to ask for what is fair, and how to translate evidence into programme confidence and portfolio command.',
    audience: ['Owner', 'Owner representative', 'Project sponsor', 'Lender'],
    outcomes: [
      'Translate captured records into programme confidence at the right level of summary.',
      'Ask for owner-side evidence without chasing.',
      'Use evidence to manage risk and claims from the owner perspective.',
      'Run portfolio command across multiple projects.',
    ],
    lessons: [
      {
        slug: 'the-owners-question',
        title: 'The owner´s question',
        summary: 'Every owner ends up asking the same question: where is my project against where it should be, and how confident am I in the answer.',
        estimatedMinutes: 10,
        sections: [
          {
            title: 'The single question',
            body: 'An owner asks one question, restated in many ways. Where is my project against where it should be. The phrasing varies — schedule, cost, scope, risk — but the underlying ask is the same. The owner wants a defensible answer at a level of summary they can act on. Most projects answer the question with recollection and intuition, which is why owners ask it again the following week. The captured base lets the project answer it once, with evidence.',
          },
          {
            title: 'What a defensible answer looks like',
            body: 'A defensible answer references evidence the owner could look at if they wanted to. It cites the captured base, the programme baseline, the safety profile, and the commercial position. It uses ranges where ranges are honest. It admits the things that are not yet clear. The discipline is not to pretend certainty; the discipline is to make uncertainty legible. An owner who sees uncertainty named tends to trust the rest of the answer more.',
          },
          {
            title: 'Why this changes the relationship',
            body: 'When the owner´s question has a defensible answer, the relationship between owner and contractor changes. Conversations move from positional to factual. Disputes that would have escalated tend to resolve in the room. Approvals move faster because the evidence is already there. The change is not about hardware; it is about the shape of the conversation. The captured base just makes the new shape possible.',
          },
        ],
        checkpoint: 'For your last project review, would the owner accept the answer as defensible if they audited it?',
      },
      {
        slug: 'reporting-without-chasing',
        title: 'Reporting without chasing',
        summary: 'How an owner gets the reporting they need without pursuing it, and why a standing pack of evidence is more useful than a custom one each month.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Why owners chase',
            body: 'Owners chase because the reporting they get is one of three things: too late, too narrow, or too rehearsed. By the time the owner has the report, the question they asked has already been answered by other means. The captured base supports a different posture: a standing reporting pack that arrives at the agreed cadence with the agreed contents, drawn from the evidence the project already produces.',
          },
          {
            title: 'The standing pack',
            body: 'A standing pack contains the same shape every month. Programme position, with site capture references. Safety summary, with closeout rates. Commercial position, with notice and claim status. Quality and design verification highlights for the period. The shape stays the same so the reader learns where to look. The contents change month to month so the reader sees what moved. The discipline removes most of the chasing, because the owner already knows what is in the pack and where to find it.',
          },
          {
            title: 'When to ask for more',
            body: 'A standing pack does not preclude bespoke questions. It changes which questions get asked. Routine questions disappear because the standing pack covers them. The questions that remain tend to be specific and consequential: why did this milestone slip, what is the recovery plan for that activity, what is the dispute exposure on this package. The conversation that follows is shorter and more useful because the routine ground is already covered.',
          },
        ],
        checkpoint: 'Could your project produce a standing reporting pack that the owner would adopt as the default?',
      },
      {
        slug: 'programme-confidence-from-evidence',
        title: 'Programme confidence from evidence',
        summary: 'How an owner converts the captured base into a defensible level of programme confidence — neither false reassurance nor unwarranted alarm.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'What programme confidence means',
            body: 'Programme confidence is the level of belief an owner can rationally hold about whether the project will hit its milestones. It is not a number, but it can be made specific. Trade progress matches the baseline. Critical path activities have movement consistent with the schedule. The site capture shows the work that the schedule says should be there. Where any of these are missing, the confidence drops, and the owner should know by how much.',
          },
          {
            title: 'How the captured base supports it',
            body: 'The captured base supports programme confidence by giving the owner a way to spot-check claims. A weekly view of the major work fronts. A 360 walk through the critical areas. A drone capture that shows the structure as a whole. The owner does not need to look at every clip every week; they need to know that the spot-check would survive review. The discipline of running the workflow makes that survival likely.',
          },
          {
            title: 'When to escalate concern',
            body: 'Concern should escalate when the captured base and the reported position diverge. A schedule that says the work front is on track and a captured view that shows it empty is a divergence. A safety summary that shows nothing of concern and a captured pattern that shows recurring near-misses is a divergence. The owner´s job is to notice the divergences early. The captured base makes that noticing possible without surveillance.',
          },
        ],
        checkpoint: 'For one critical milestone, can you describe the spot-check you would run to confirm the reported position?',
      },
      {
        slug: 'risk-and-claims-from-the-owner-side',
        title: 'Risk and claims from the owner side',
        summary: 'How the captured record helps an owner manage risk and respond to claims, including the discipline of expecting evidence on both sides.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'The owner´s risk register',
            body: 'An owner´s risk register usually focuses on cost overrun, schedule slip, safety, and reputational exposure. The captured record supports each. Cost: payment evidence and quantity verification. Schedule: programme confidence checks and milestone evidence. Safety: closeout rates and incident readiness. Reputation: the project that is on top of its evidence tends to behave better in public-facing moments. The register becomes operational when each risk has an evidence ask attached to it.',
          },
          {
            title: 'Claims from the owner side',
            body: 'When a claim arrives, the owner has the same need as the contractor: a defensible record of the period in question. Most owners do not maintain their own captured base; they rely on the contractor´s. The discipline is to specify retention, custody, and access rights at contract stage so the owner can interrogate the record without negotiation. An owner who does this once tends to do it on every project that follows.',
          },
          {
            title: 'Counterclaims and fairness',
            body: 'The captured record cuts both ways. It supports legitimate claims and undermines unsubstantiated ones. The honest owner recognises that the same record may protect them from a weak claim and protect the contractor from an unfair counterclaim. The owner who treats the record as a fair tool, rather than a partisan one, tends to find that contractors propose more transparently and disputes resolve more quickly.',
          },
        ],
        checkpoint: 'For your most exposed contract, what evidence do you currently have access to as the owner?',
      },
      {
        slug: 'closeout-and-handover-from-day-one',
        title: 'Closeout and handover from day one',
        summary: 'Why owner-side handover should be designed into the project from mobilisation, and how the captured record reduces the cost of warranty.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Handover starts at mobilisation',
            body: 'Most handover packs arrive late and incomplete because the project treated handover as a closeout activity rather than a continuous one. The captured base allows the opposite. From mobilisation, the project is producing the evidence the handover will need: progress records, design verification, quality non-conformances and dispositions, training and competence records. The owner who specifies handover from day one tends to receive a coherent pack on time.',
          },
          {
            title: 'What an owner should specify',
            body: 'An owner should specify the captured base to be retained, the format of the closeout archive, the indexing standard, and the access rights for the warranty period. Specification at contract stage costs nothing and prevents most handover failures. Specification three months before PC is significantly less effective because the project´s practices have already been set on the ground.',
          },
          {
            title: 'The warranty period',
            body: 'The warranty period is where handover quality pays back. A warranty issue with a captured record showing the as-built and the dispositions resolves much faster than one without. The owner who has retained the captured base has access to a record they would otherwise have to subpoena or rebuild. The retention cost is small; the dispute cost it prevents is large.',
          },
        ],
        checkpoint: 'On your next contract, can you specify the captured-base retention and access rights at signing?',
      },
      {
        slug: 'portfolio-command-for-owners',
        title: 'Portfolio command for owners',
        summary: 'How an owner with multiple live projects uses the command view to triage exceptions and direct attention without micro-managing.',
        estimatedMinutes: 11,
        sections: [
          {
            title: 'The owner with several projects',
            body: 'An owner who runs more than three projects in parallel cannot give each one full attention every week. The command view lets them concentrate attention where it matters. Projects on track get a glance and the standing pack. Projects with exceptions get the fuller review. The discipline is not to spread attention evenly but to direct it where the divergences are biggest.',
          },
          {
            title: 'Triage at portfolio level',
            body: 'Triage is the work of the command view. A safety closeout rate that has slipped on one project. A claim file that is opening on another. A milestone slipping on a third. The command view ranks the exceptions and lets the owner choose what to look at first. The week´s focus tends to follow the ranking rather than the order in which projects called for attention.',
          },
          {
            title: 'Patterns across projects',
            body: 'Beyond triage, the command view surfaces patterns across the portfolio. The same package type causing recurring NCRs across projects. The same supplier underperforming across two contracts. The same kind of exception arising in similar phases. These patterns are organisational findings, not project findings. They warrant programme-level work — supplier review, training, capture-plan templates — that no individual project can address alone.',
          },
        ],
        checkpoint: 'For your portfolio, can you name three exceptions that would warrant attention this week if you saw them ranked together?',
      },
    ],
  },
  {
    slug: 'capture-planning-and-coverage',
    title: 'Capture Planning and Coverage',
    level: 'Practitioner',
    estimatedMinutes: 75,
    summary:
      'A practical course for digital construction leads, planners, and project directors on moving capture decisions from camera counts to workflow-led coverage, with a capture plan that lives across the project.',
    audience: ['Digital construction lead', 'Planner', 'Project director', 'BIM coordinator'],
    outcomes: [
      'Translate workflow needs into a capture plan rather than a camera schedule.',
      'Plan coverage by workflow, not by area or hardware budget.',
      'Choose between fixed, mobile, 360, and drone capture appropriately.',
      'Maintain the capture plan as the project evolves.',
    ],
    lessons: [
      {
        slug: 'from-camera-count-to-capture-plan',
        title: 'From camera count to capture plan',
        summary: 'Why most procurement conversations begin with the wrong question, and how moving from camera counts to a workflow-led capture plan changes the project´s outcome.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'The wrong question',
            body: 'Most procurement conversations begin with how many cameras the project will need. The question is wrong because it skips the workflows the cameras are meant to serve. A camera count without a workflow scope produces a hardware budget that the project will then have to retrofit to the workflows that emerge later. The right starting point is the workflow scope; the camera count is a downstream consequence.',
          },
          {
            title: 'The right starting point',
            body: 'Begin with the workflows the project intends to run. Progress verification. Claims and evidence. Safety monitoring. Gate and logistics. Each workflow has evidence requirements that translate into capture sources. Some sources are shared across workflows; others are specific. The capture plan that emerges is the smallest set of sources that serves the workflows in scope, not the largest set of cameras the budget will allow.',
          },
          {
            title: 'How the conversation changes',
            body: 'When the project starts from workflows, the procurement conversation looks different. The vendor proposes against named workflows. The project can see whether the proposal closes the loops it needs to close. The negotiation moves from price-per-camera to coverage-per-workflow. The procurement decision aligns with the operational decision, which is the only durable basis for either.',
          },
        ],
        checkpoint: 'For your next project, can you list the workflows in scope before discussing camera count?',
      },
      {
        slug: 'coverage-by-workflow-not-by-area',
        title: 'Coverage by workflow, not by area',
        summary: 'Why coverage planned by area produces gaps the workflows hit, and how planning by workflow inverts the failure mode.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'The area-led trap',
            body: 'Planning coverage by area is intuitive. The site is divided into zones, and each zone gets a camera or a 360 route. The trap is that the workflows do not run by area. Progress verification follows the package. Claims evidence follows the activity. Safety monitoring follows the high-risk operations. An area-led plan inevitably has gaps where the workflows actually need evidence, and surplus where they do not.',
          },
          {
            title: 'Workflow-led coverage',
            body: 'Workflow-led coverage starts with each workflow and asks what evidence it needs. The evidence shapes the capture sources, the cadence, and the retention. The plan then maps these onto the site. Some areas get heavy coverage because they sit at workflow intersections. Other areas get lighter coverage because no workflow needs them. The plan looks uneven on a map and even on the workflows.',
          },
          {
            title: 'How to combine the views',
            body: 'In practice, workflow-led coverage and area-led coverage need to coexist. Some areas need coverage for safety regardless of which workflows touch them. Some areas have no workflow but need coverage for security. The discipline is to start workflow-led and add area-led overlays for the cases the workflow approach misses, rather than the other way around. The capture plan that results is leaner and more defensible.',
          },
        ],
        checkpoint: 'Walk through your current capture plan. Which sources serve no named workflow?',
      },
      {
        slug: 'fixed-mobile-360-and-drone',
        title: 'Fixed, mobile, 360, and drone',
        summary: 'How to choose between the four main capture modalities and how to combine them so the project gets coverage without paying for redundancy.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'Fixed and mobile',
            body: 'Fixed cameras give continuous coverage at named work fronts. They are good at progress verification, gate logs, and incident readiness. They are weak at packages that move quickly across the site. Mobile capture — phone, helmet, or wearable — picks up what fixed misses. It is opportunistic, lower in average integrity, and most useful as a complement to fixed coverage rather than a substitute for it.',
          },
          {
            title: '360 walks',
            body: '360 walks bridge the gap between fixed and mobile. A walk along a defined route at a defined cadence produces a record that can be revisited later from any angle. 360 is strongest in fitout, MEP, and quality verification, where the value is in being able to inspect from any direction after the fact. The route discipline matters: a 360 walk without a route is harder to compare across cycles than one with a route.',
          },
          {
            title: 'Drone capture',
            body: 'Drone or aerial captures cover what no other modality can — the structure as a whole, the earthworks, the roof, the surrounding environment. Drone is most valuable on large structural and infrastructure projects, and on projects with significant external scope. The cadence is usually monthly, sometimes quarterly. The combination of drone with fixed and 360 produces a record that holds up at every scale, from a single fitting to the project envelope.',
          },
        ],
        checkpoint: 'For your current project, which modality is most under-used relative to the workflows in scope?',
      },
      {
        slug: 'evidence-saturation-and-pruning',
        title: 'Evidence saturation and pruning',
        summary: 'When more capture stops improving decisions, and how to prune the capture plan without weakening the workflows it supports.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'When more is not better',
            body: 'There is a point at which adding more capture stops improving decision quality. The records exist, but the workflows cannot use them faster than they arrive. The team spends more time choosing which clip to look at than acting on the one they pick. Evidence saturation is real, and recognising it early prevents the project from buying capture it does not need.',
          },
          {
            title: 'How to recognise the point',
            body: 'Saturation shows up in the time-to-find metric. When the team takes longer to retrieve the relevant record than to act on it, the capture plan has too much surface and not enough indexing. The first response is not to add more capture or more storage; it is to improve indexing, tagging, and route discipline. Once those are tight, the saturation point is clearer.',
          },
          {
            title: 'Pruning the plan',
            body: 'Pruning the capture plan means removing sources that no workflow uses, sources that have been superseded by better ones, and sources that the project has stopped tagging consistently. Pruning is not about saving money; it is about keeping the plan defensible. A capture plan with twenty sources that all serve workflows is stronger than one with forty sources, half of which run for habit.',
          },
        ],
        checkpoint: 'Are there sources on your capture plan that have not been used in a workflow this quarter?',
      },
      {
        slug: 'revisions-as-the-project-evolves',
        title: 'Revisions as the project evolves',
        summary: 'Why a capture plan is a living document, and how to schedule revisions so the plan stays aligned to the project rather than drifting from it.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Why the plan drifts',
            body: 'A capture plan written at mobilisation is correct for week one. It starts to drift as the project evolves: new packages come on, work fronts move, the safety profile changes, the commercial position shifts. A plan that is not revised becomes a record of what the project intended, not what the project needs. The drift is gradual and invisible until the workflows start missing.',
          },
          {
            title: 'Scheduled revision',
            body: 'A scheduled revision cycle keeps the plan aligned. Quarterly is usual, with shorter cycles in the early months and during major phase transitions. The revision is not a redrafting; it is a structured walk through the existing plan against the current project, with adjustments made and recorded. Most revisions touch only a few sources, but the cumulative effect over a long contract keeps the plan coherent.',
          },
          {
            title: 'Trigger-based revision',
            body: 'Some revisions are triggered rather than scheduled. A new package mobilising. A significant safety event. A change order with cost or programme implications. A regulatory change. Each trigger should bring the relevant section of the plan back to the table. The discipline is to recognise the trigger early enough that the workflow does not run on a stale plan for any length of time.',
          },
        ],
        checkpoint: 'When was your capture plan last revised, and what would trigger the next revision?',
      },
      {
        slug: 'handover-of-the-capture-plan',
        title: 'Handover of the capture plan',
        summary: 'How the capture plan transitions at handover, and what survives into the warranty period and the closeout archive.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'What survives handover',
            body: 'At handover, the capture plan transitions. Most active capture stops, but the records produced under the plan should not. The closeout archive should retain the records the workflows produced, indexed against the plan, with the retention windows the plan specified. An archive that survives handover but the plan that produced it does not is hard to use. Both should travel together.',
          },
          {
            title: 'Continued capture during warranty',
            body: 'Some capture continues into warranty. Limited fixed coverage during the defects period. Annual 360 walks against the as-built record. Drone surveys for projects with significant external scope. The post-handover capture plan is much smaller than the construction-phase plan, but it should be specified rather than left implicit. Without specification, the project tends to lose access to the captured base much sooner than the warranty needs.',
          },
          {
            title: 'The owner´s long memory',
            body: 'A capture plan that handed over cleanly becomes the owner´s long memory of the project. A warranty issue, a refurbishment, a future tender — each benefits from being able to retrieve the captured record. The cost of preserving the plan and the records together is small relative to the value of the access years later. The discipline at handover is to make that future access possible rather than implicit.',
          },
        ],
        checkpoint: 'For your last completed project, can you locate the capture plan and the archive together today?',
      },
    ],
  },
  {
    slug: 'rdi-economics-business-case',
    title: 'RDI Economics for the Business Case',
    level: 'Executive',
    estimatedMinutes: 75,
    summary:
      'A short executive course for finance partners, commercial directors, and senior owner-side leaders on building, defending, and tracking a Reality-Driven Intelligence business case with the discipline finance expects.',
    audience: ['Finance partner', 'Commercial director', 'Project director', 'Owner representative'],
    outcomes: [
      'Separate the three shapes of RDI value cleanly in any business case.',
      'Publish ranges and assumptions that survive finance scrutiny.',
      'Distinguish replacement and supporting models in modelling.',
      'Track outcomes after go-live to refine the model.',
    ],
    lessons: [
      {
        slug: 'three-shapes-of-rdi-value',
        title: 'The three shapes of RDI value',
        summary: 'How operational savings, risk mitigation, and capacity behave differently in a business case, and why blending them into one number tends to weaken rather than strengthen the case.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'Operational savings',
            body: 'Operational savings are recurring time and cost the workflow removes. Manual reporting. Evidence retrieval. Meeting preparation. The model is direct: identify the recurring task, estimate the time, multiply by loaded cost, apply over the contract life. Operational savings are the most defensible category in any case because the inputs are concrete and verifiable. They are usually the line that opens a finance conversation and earns the rest of the case its hearing.',
          },
          {
            title: 'Risk mitigation',
            body: 'Risk mitigation is the value of avoiding low-frequency, high-cost events. Disputes. Theft. Regulatory breaches. The event has not happened, so the model takes three uncertain inputs: cost of the event, probability, and proportion of risk the workflow removes. The product is the expected credit, with ranges. Risk mitigation belongs in any case but should not be expected to carry a case alone. Cases that depend on risk credit at the mid estimate tend to lose finance partners.',
          },
          {
            title: 'Capacity',
            body: 'Capacity is the additional throughput the team can carry without adding headcount. A project director who can monitor more sites. A portfolio leader who can take a project they could not have taken before. Capacity is hard to attribute precisely on a single project and most powerful at portfolio level. It belongs in the business case but should be presented for what it is: a strategic argument that grows in importance as the organisation scales.',
          },
        ],
        checkpoint: 'For a current case, can you separate the three shapes and put each one on its own line?',
      },
      {
        slug: 'confidence-bands-and-credibility',
        title: 'Confidence bands and credibility',
        summary: 'Why a defensible business case publishes ranges, sources, and assumptions, and why a single confident number tends to lose finance trust.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'What ranges do',
            body: 'A range tells the reader the analyst understood the inputs were uncertain and refused to pretend otherwise. Low, mid, and high estimates for each line of value. Assumptions in plain English. Sources for any benchmark used. Sensitivity to the inputs that move the result most. Finance partners trained to spot the absence of these signals; they read the absence as quickly as the presence.',
          },
          {
            title: 'How to publish honestly',
            body: 'A defensible model publishes the range, names the assumptions, sources the benchmarks, and shows the sensitivity. It states clearly that the model is directional until project-specific data is available. It refuses to inflate the mid estimate to clear an approval threshold. The discipline is small; the credibility it earns is durable. A team known for this discipline gets heard more carefully on the next case.',
          },
          {
            title: 'When the number is wrong',
            body: 'Sometimes the honest model says the case does not pay back. The discipline is to report that finding rather than to massage the inputs. A case that does not pay back at the low end may pay back at the mid; a case that does not pay back at the mid is probably not the right investment. The role of the model is to support the decision, not to predetermine it. Models that always come out positive eventually stop being read.',
          },
        ],
        checkpoint: 'For a current case, are the assumptions and ranges visible enough that finance could interrogate them?',
      },
      {
        slug: 'replacement-versus-supporting-models',
        title: 'Replacement versus supporting models',
        summary: 'Why the two main shapes of RDI value model differently, and why blending them tends to weaken the case rather than strengthen it.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'Replacement workflows',
            body: 'A replacement workflow substitutes for an existing line in the project budget. Manual report preparation. Outsourced gate management. Third-party progress photo services. The model is direct. Identify the cost line. Confirm with the budget owner. Estimate the proportion replaced. Apply over the contract life. Subtract the workflow cost. The result is a saving with a defensible source.',
          },
          {
            title: 'Supporting workflows',
            body: 'A supporting workflow does not replace a line. It improves a process the project already runs. The OAC meeting still happens; it just runs better. The claims process exists; it just produces stronger files faster. The value is real but harder to attribute to a budget line. The model uses time-saving estimates and applies them with care, especially where the saving is shared across many people in small slices.',
          },
          {
            title: 'How to blend them in a case',
            body: 'Most projects have both shapes. The case benefits from naming each. Open with the replacement value, since it is the easiest to defend. Then add the supporting value with its own ranges and assumptions. Finance partners who would have rejected an inflated single number tend to accept the same total when it is presented in its two natural shapes. The discipline is the separation, not the sum.',
          },
        ],
        checkpoint: 'For a current case, can you identify which lines are replacement and which are supporting?',
      },
      {
        slug: 'directional-public-numbers',
        title: 'Directional public numbers',
        summary: 'Why public ROI calculators have a distinct role in the conversation, and how to use them without confusing education with quoting.',
        estimatedMinutes: 12,
        sections: [
          {
            title: 'What public numbers are for',
            body: 'A public ROI number is educational. It uses industry-typical assumptions to give a buyer a feel for the shape of the value. It is not a quote, and it should never be presented as one. The role of the public number is to make the conversation possible, not to settle it. A buyer who sees a directional number and a clear note of what would change in a project-specific model is better armed than one who is given either alone.',
          },
          {
            title: 'How to disclose limits',
            body: 'A directional model should disclose its limits on the page where it is read. The assumptions used. The ranges around them. The disclaimer that project-specific data will refine the picture. The disclosure does not undermine the model; it strengthens it. A buyer who sees the limits acknowledged tends to trust the model more, not less.',
          },
          {
            title: 'When to switch to a project-specific case',
            body: 'The directional model should give way to a project-specific case before procurement. The shape of the model is the same; the inputs become facts rather than industry estimates. The width of the range narrows. The case is then ready for the finance partner´s scrutiny. A directional model presented at the procurement stage as if it were a quote is the fastest way to lose finance trust permanently.',
          },
        ],
        checkpoint: 'When you have used directional numbers, did you also publish the disclosure that project-specific data would refine them?',
      },
      {
        slug: 'building-a-defensible-business-case',
        title: 'Building a defensible business case',
        summary: 'A practical walkthrough of assembling a business case that survives finance scrutiny: structure, sources, ranges, and the conversation that surrounds it.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'Structure',
            body: 'A defensible case has a predictable structure. Executive summary that names the total and the shape. Operational savings section with each line modelled. Risk mitigation section with each event identified, sized, and ranged. Capacity section with strategic argument and any defensible quantification. Sensitivity table covering the inputs that move the result most. Assumptions appendix. The structure does not need to be elegant; it needs to be navigable.',
          },
          {
            title: 'Sources',
            body: 'Every quantitative claim cites its source. Internal time estimates from the team that does the work. Cost rates from the budget partner. Industry benchmarks from named publications. Each source is referenced, dated, and re-checked at scheduled intervals. A case with hidden sources tends to fail at the first scrutiny; a case with visible sources tends to pass even when the numbers are challenged.',
          },
          {
            title: 'The surrounding conversation',
            body: 'A business case is not a document; it is the conversation around the document. Walk the case through the finance partner before submission. Adjust where the partner spots weakness. Submit the version that has already survived a rehearsal. The discipline shortens the formal review and tends to produce the approval that the case earned in the rehearsal rather than in the meeting.',
          },
        ],
        checkpoint: 'For a current case, could you walk it through the finance partner before submission?',
      },
      {
        slug: 'tracking-outcomes-after-go-live',
        title: 'Tracking outcomes after go-live',
        summary: 'Why the business case should be revisited against actual outcomes, and how the discipline of tracking changes future cases for the better.',
        estimatedMinutes: 13,
        sections: [
          {
            title: 'Why outcomes are usually not tracked',
            body: 'Most business cases are written, approved, and forgotten. The team moves on. The actual outcomes are never measured against the predictions. This is a significant waste, and it is also why the next case tends to be easier to challenge — finance partners have no record of how the previous predictions held up. The discipline is to track outcomes from go-live and report on them at agreed intervals.',
          },
          {
            title: 'What to track',
            body: 'Track the operational savings against the model. The recurring tasks, the time taken, the loaded cost. Track the workflows that closed and the workflows that did not. Track the risk events that occurred and any in which the workflow contributed to the outcome. The list is short on purpose; tracking everything is the same as tracking nothing. Five well-chosen lines beat fifty observed irregularly.',
          },
          {
            title: 'How tracking improves future cases',
            body: 'A case that has been tracked produces inputs for the next case. Real proportions for replacement workflows. Real probabilities for risk events. Real attribution for capacity gains. Each tracked case improves the credibility of the next, both with finance and with the team that builds it. The organisation that tracks consistently tends to write more accurate and more confident cases over time.',
          },
        ],
        checkpoint: 'For a case that went live last year, could you produce the actual versus predicted lines today?',
      },
    ],
  },
]
