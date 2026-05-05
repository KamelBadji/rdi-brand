import type { Course } from '../types'

export const course: Course = {
  slug: 'safety-workflows-site-leadership',
  title: 'Safety Workflows for Site Leadership',
  level: 'Practitioner',
  estimatedMinutes: 108,
  summary:
    'A practical course for site managers, HSE leads, and project directors on running site safety as a closed loop: findings that become tracked observations, observations that close on time, incidents that produce a defensible record, and meetings and external conversations that sit on evidence rather than recollection.',
  audience: ['Site manager', 'HSE lead', 'Project director', 'Safety director'],
  outcomes: [
    'Run safety findings as closed observations with named owners, severity-aligned clocks, and recorded closeout evidence.',
    'Place a preservation hold and assemble the captured base around an incident before the rotation cycle erases it.',
    'Take near-miss reporting from a logging exercise to a closed loop that visibly changes site behaviour.',
    'Use the captured base to monitor PPE and high-risk activities through a sample-and-respond posture rather than continuous surveillance.',
    'Open the weekly safety meeting on a one-page evidence-led pack and shorten the conversation that follows.',
    'Walk a regulator or insurer through controls, findings, and closeouts without scrambling to assemble the record.',
  ],
  lessons: [
    {
      slug: 'from-finding-to-closeout',
      title: 'From finding to closeout',
      summary:
        'How a safety finding becomes a tracked observation with a named owner and a clock, and how the observation closes with evidence the audit will accept.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'What counts as a finding',
          body: 'A finding is any tagged observation that the work in front of you does not match the standard. It might be an unsafe act caught on a walk, a near-miss reported by a banksman, a hazard logged during an audit, or a non-conforming control flagged by a captured view review. Findings come from three streams: people on site, scheduled audits, and the captured base itself. The discipline starts at the point of recording. Every finding is given a description in plain language, a location to package level, a severity grade, and a captured reference where one is available. A finding tagged to a 360 walk number, a fixed view timestamp, or a permit reference is much easier to route, defend, and close than one that lives only in someone\'s head. The most common failure here is undisciplined recording: a finding entered as "edge protection issue, north side" cannot be acted on by a different shift, and is hard to evidence weeks later. The team that takes thirty seconds at the time to add the package, the activity, and the captured reference saves itself an afternoon of reconstruction later. The standard the finding is measured against has to be visible too. A site that runs a written safety plan, with the controls named for each high-risk activity, can record findings as deviations from a known reference. A site that runs on intuition records findings as opinions, and opinions are hard to close. The first lesson of the loop is that the recording shape determines everything that follows. Get the fields right at the front and the loop has a chance of closing.',
        },
        {
          title: 'Routing the observation',
          body: 'A finding becomes an observation when it acquires a named owner and an expected response time. The owner is named as a role and a person — package manager for area B, HSE lead for the project — so the workflow continues to function when individuals rotate off. The response time is calibrated to severity: a major non-conformance gets hours, a routine housekeeping issue gets a working day, a strategic pattern gets a week. The escalation path is named ahead of time, not negotiated at the moment of breach. If the package manager has not responded within the window, the observation moves automatically to the project director with a short status note. If the project director has not responded, it appears in the weekly safety meeting at the top of the list. The captured base supports the routing by attaching the relevant clip or walk to the observation, so the receiver does not have to ask what they are looking at. The most common failure in routing is owner ambiguity: an observation tagged to "the contractor" or "site team" sits in nobody\'s queue and ages quietly until someone notices the breach. A clear role-and-person mapping resolves this. The second common failure is severity drift, where everything starts as urgent and the routing system loses meaning. A short severity rubric, agreed at the start of the project, keeps the queue legible.',
        },
        {
          title: 'Closeout evidence the audit will accept',
          body: 'Closeout requires evidence that the corrective action was actually taken. A typed note from the package manager saying "actioned" is not closeout. A captured view of the new edge protection installed, a follow-up walk that shows the lay-down area cleared, a signed permit rewrite, an attendance record from a refresher toolbox talk — those are closeout. The platform retains the open-to-close trail as a single record, so an auditor or a regulator can move from finding to evidence to closure in a few clicks rather than emailing five people for screenshots. A workflow that records findings without recording closures is theatre. It produces a number for the dashboard and a feeling of activity, but the next near-miss will reveal that nothing actually changed. The discipline is to treat the closeout artefact as part of the observation itself, not as a separate filing exercise.',
        },
        {
          title: 'Failure modes and what good looks like',
          body: 'The clearest failure modes are: findings logged without captured references, observations without named owners, closeouts without evidence, and a weekly meeting that does not look at the open list. Any one of those will collapse the loop. What good looks like is unromantic. The HSE lead can open the system on a Monday and see, for the previous week, the findings raised, the observations open, the observations closed with evidence, the ones that breached their clock, and the patterns by area. The package managers can see their own queue. The project director sees the escalations. The conversation in the safety meeting is short because the data is in front of everyone. That is the loop closing.',
        },
      ],
      checkpoint: 'For a finding logged this week, can you show the owner, the clock, and the closeout evidence within two minutes?',
      exercises: [
        {
          prompt: 'Take three findings logged on your project in the past fortnight. For each, write down the owner, the response clock, the closeout evidence, and the captured reference. Note which fields are missing.',
          expectedAnswer: 'A short table for three findings. Most projects will find at least one missing field per finding — typically the captured reference or the closeout evidence. The exercise reveals which part of the loop is weakest.',
        },
        {
          prompt: 'Draft a one-page severity rubric for your project: what counts as critical, major, minor, and routine, with an expected response time for each.',
          expectedAnswer: 'Four bands with response times and one or two example findings each. The rubric should fit on one side of A4 and be agreed with the project director before the next safety meeting.',
        },
      ],
      recommendedReading: [
        { label: 'Safety loops that actually close', href: '/resources/safety-loops-that-actually-close' },
        { label: 'Knowledge base: safety monitoring workflows', href: '/knowledge-base/safety-monitoring-workflows' },
        { label: 'Glossary: observation', href: '/glossary/observation' },
        { label: 'Glossary: closeout record', href: '/glossary/closeout-record' },
      ],
    },
    {
      slug: 'incident-evidence-preservation',
      title: 'Incident evidence preservation',
      summary:
        'How to preserve the captured base around an incident so the record survives default rotation cycles and the dispute window that follows.',
      estimatedMinutes: 20,
      sections: [
        {
          title: 'The first hour and the second hour',
          body: 'In the first hour after a significant incident, the priority is care of the injured, control of the area, and notification. That is the human work and it takes precedence over everything else. In the second hour, while the area is still secured and before the day moves on, the priority shifts to preservation. Someone with named authority places a hold on the captured records around the time and location of the incident. The hold covers the views before, during, and after the event, the gate logs for the day, the personnel scans for the package, any 360 walks that pass through the area in the preceding fortnight, and any drone surveys taken in the relevant period. The hold prevents default rotation from quietly deleting records the inquiry will later need. The work is small at the time and decisive later. The team that knows how to do this in the second hour saves itself months of reconstruction. The team that does not will be assembling the record under the pressure of a regulator deadline, and will likely find that the relevant footage was overwritten on day thirty-one.',
        },
        {
          title: 'What the preservation set actually contains',
          body: 'The preservation set is broader than people expect on the day. The captured view of the work front itself. The views of the access route to the work front, because struck-by exposures and lifting incidents often have causes a hundred metres upstream. The gate logs for that day and the day before. The personnel scans matching the package and the activity. The 360 walks taken in the days before, which often show the condition of edge protection, exclusion zones, or housekeeping that contributed. The method statement, the permit, the lift plan, and any deviation notes. The shift records and the toolbox attendance. The weather record if the activity was weather-sensitive. Each of these may be requested by the regulator, the insurer, the client, or a later inquiry. Preserving them now, while the picture is fresh and the access is easy, is much cheaper than reconstructing them three months later from emails and recollection. A preservation policy that lists these explicitly removes the on-the-day judgement call.',
        },
        {
          title: 'The preservation policy and the named authority',
          body: 'The team should not be making the preservation decision under the pressure of the incident. The policy already exists, written down, agreed with the project director and the HSE lead, and circulated. It names the trigger events that require a hold (any RIDDOR-reportable event, any near-miss with major potential, any regulator visit, any insurer-notifiable incident). It names the authority — typically the HSE lead, with the project director as backup — who can place the hold, and the duration before review. It names what gets preserved, in the form of a checklist matched to the activity type. It names how the hold is released when the inquiry concludes. The policy is short, perhaps two pages. It belongs alongside the capture plan and the emergency response plan. The discipline is to know it before the day, so the second hour can be acted on rather than negotiated. The platform supports the policy by allowing the hold to be applied with a single action, with the held records flagged in the retention system so they survive the default rotation.',
        },
        {
          title: 'The conversation with custody and what good looks like',
          body: 'A preserved record is only useful if its custody is defensible. The chain of custody for the held records — who placed the hold, when, against which incident reference, and who has accessed the records since — is part of the record itself. The platform writes that audit trail without manual effort. When a regulator asks where the footage came from, when it was preserved, and who has touched it, the answer is a single export rather than an apology. What good looks like is a project where the second hour after an incident is procedural rather than improvised, where the preservation set is wider than the inquiry will need, and where the chain of custody is complete enough that the recording can be entered into evidence without challenge. The discipline costs minutes; the absence costs months.',
        },
      ],
      checkpoint: 'Does your project have a written preservation policy, and do you know who can place a hold within the second hour today?',
      exercises: [
        {
          prompt: 'Write a one-page preservation policy for your current project. Cover trigger events, the named authority, the preservation checklist by activity, the default hold duration, and the release process.',
          expectedAnswer: 'A two-column page with the five sections above. The named authority should be a role and a person, with a backup. The checklist should differentiate between lifting, working at height, confined space, hot works, and access incidents.',
        },
        {
          prompt: 'For a hypothetical struck-by incident in your busiest delivery yard, list every captured record you would preserve and the reason for each. Include records you might not initially think of.',
          expectedAnswer: 'A list of at least eight records: gate logs, delivery manifests, fixed views of the yard, views of the approach road, banksman positions if recorded, the lift plan, the relevant permit, weather, attendance, and any 360 walks of the area that fortnight.',
        },
      ],
      recommendedReading: [
        { label: 'Evidence export for court', href: '/resources/evidence-export-for-court' },
        { label: 'Regulatory events and evidence', href: '/resources/regulatory-events-and-evidence' },
        { label: 'Glossary: chain of custody', href: '/glossary/chain-of-custody' },
        { label: 'Glossary: evidence window', href: '/glossary/evidence-window' },
      ],
    },
    {
      slug: 'near-miss-loops',
      title: 'Near-miss loops',
      summary:
        'How to take near-miss reporting from a logging exercise to a closed loop that visibly changes the way the site behaves.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'Why near-miss data is mostly wasted',
          body: 'Most projects collect near-miss data and then waste most of it. The reports are filed, classified into categories, counted on a dashboard, and forgotten. The pattern goes nowhere because nobody returns to it. The workforce sees that reporting a near-miss produces no visible change, and reporting volume drops over the months. By the time a real incident occurs, the leading indicators were in the data for weeks, but no one was reading them. The captured base offers a way to bind a near-miss to a captured view, which makes the report much harder to forget. A near-miss with a thirty-second clip attached to it is a finding the next safety meeting can return to without ambiguity. The clip is also what changes the conversation with the workforce: when a banksman sees that their report led to a visible review and a change, the next report is more likely to come in. Reporting culture is built by the closeout, not by the campaign.',
        },
        {
          title: 'Mechanics of a near-miss that closes',
          body: 'A near-miss closes when a corrective action has been taken and recorded. The corrective action does not need to be large. It might be a refresher toolbox talk for the affected crew, a change in the lay-down arrangement, a permit rewrite that adds a control, a stand-down on the activity until the controls are visibly back in place, or a scope change for a piece of plant. What matters is that the action exists, that someone is named, that it is evidenced when it is done, and that the near-miss is then explicitly closed in the system. Without that closure step, the near-miss becomes a number on a dashboard and nothing more. With it, it becomes a learning the team can repeat. The captured base supports the loop by holding the original clip alongside the corrective action evidence, so the before and after are stored together. A near-miss that lives without its closure is a debt that the project carries into its next quarter.',
        },
        {
          title: 'The recurrence pattern',
          body: 'Across a project, the same near-miss often happens in the same area or on the same package, often with the same control failing. A pattern of helmets-off during deck pours on level four, three weeks running, is not a finding — it is a programme of work. A pattern of vehicle-pedestrian close calls at the same gate, four times in a month, is a layout problem rather than a behavioural one. The captured base makes the pattern visible because the records are tagged by location and activity. The site leader who reads the near-miss summary weekly, with location and package overlays, will see the pattern emerge before it becomes an incident. The portfolio leader who reads it monthly across projects will see organisational patterns — the same subcontractor, the same activity type, the same time of day — that no individual site can see. Pattern detection is one of the few places where reporting volume actually pays back.',
        },
        {
          title: 'Workforce trust and the failure modes',
          body: 'The credibility of the near-miss loop depends on what the workforce sees. If reports lead to visible action and visible change, reporting volume sustains. If reports lead to disciplinary action against the reporter, reporting collapses within weeks and the project flies blind. The standard failure modes are: classification without action, action without evidence, action that punishes the reporter, and a meeting cycle that never returns to the previous week\'s items. The discipline is the reverse of all four — explicit action, evidenced closure, a clear no-blame stance for honest reports, and a meeting cycle that always opens with last week\'s open items. Done consistently, the near-miss loop becomes the most useful leading indicator the safety system has.',
        },
      ],
      checkpoint: 'For the last three near-misses on your project, can you show the closeout evidence and any pattern of recurrence you noticed?',
      exercises: [
        {
          prompt: 'Pull the near-miss reports from the past quarter and overlay them on a site plan by location and activity. Identify the top three patterns of recurrence.',
          expectedAnswer: 'A simple plan with dots or counts, and three written patterns. Typical patterns include a delivery yard with vehicle-pedestrian incidents, a working-at-height activity with edge protection issues, and a lifting area with exclusion zone breaches.',
        },
        {
          prompt: 'Draft a short note to the workforce explaining what happens to a near-miss after it is reported. Keep it under one page and write it in plain language a foreman will accept.',
          expectedAnswer: 'A page covering: how to report, what review looks like, the no-blame stance for honest reports, and an example of a recent near-miss that produced a visible change. The example matters more than the policy.',
        },
      ],
      recommendedReading: [
        { label: 'Safety loops that actually close', href: '/resources/safety-loops-that-actually-close' },
        { label: 'Use case: safety monitoring', href: '/use-cases/safety-monitoring' },
        { label: 'Glossary: pattern of recurrence', href: '/glossary/pattern-of-recurrence' },
      ],
    },
    {
      slug: 'ppe-and-high-risk-monitoring',
      title: 'PPE and high-risk monitoring',
      summary:
        'How to use the captured base to monitor PPE compliance and high-risk activities through a sample-and-respond posture, without turning the workflow into surveillance theatre.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'What the captured base can do well',
          body: 'A captured base lets the safety lead spot PPE non-compliance and unsafe high-risk activities without standing in the area for hours. The point is not to watch every worker on every shift; it is to spot the patterns that need attention and to verify that the controls named in the safety plan are actually being followed. Helmet compliance at the access points to the building during morning peak. Edge protection during the second day of a slab pour. Exclusion zones around a tower crane lift. Banksman positioning at a delivery yard. The captured base supports a sample-and-respond posture: a defined sample of activities is reviewed against a defined standard, deviations are tagged as observations, and observations route into the same loop covered in lesson one. The strength of the approach is leverage. One HSE lead can sample the project across the week in a few hours, where physical walks would only catch what is happening at the moment they happen to walk past.',
        },
        {
          title: 'Where the workflow goes wrong',
          body: 'The workflow goes wrong the moment it is run as surveillance. If every individual non-compliance becomes a finding, the team is overwhelmed within a fortnight, the queue stops being legible, and the loop loses credibility. The discipline is to focus on patterns, on activities where the consequences of non-compliance are severe, and on supervisors whose own assurance has gaps. A pattern of helmets-off during the same activity over multiple shifts is a finding that warrants a written observation; an isolated event captured in a sampling pass is best handled by the supervisor on site, with a quiet conversation rather than a paper trail. The second failure mode is binary thinking: treating a clip as proof of intent when the clip only shows a few seconds of an activity. A worker removing a helmet to rub their head, or to take a phone call in a non-active area, is not the same as a worker performing a high-risk task without PPE. The interpretation matters. The third failure mode is reviewing without a written sampling rule, which makes the system feel arbitrary to the workforce.',
        },
        {
          title: 'High-risk activities and the planned envelope',
          body: 'For high-risk activities — lifting operations, working at height, hot works, confined space, energised systems — the captured base is most valuable as a check that the activity stayed within the planned envelope. The lift plan named the route, the exclusion zone, the banksman position, the SWL, and the windspeed limit. The captured view shows whether the lift actually followed the plan. A deviation is not automatically a non-conformance — sometimes the plan was wrong — but it always warrants a conversation. A pattern of deviations on the same activity is a planning issue. A one-off deviation under unusual circumstances is a learning. The captured base lets the HSE lead and the package manager have these conversations against an actual record rather than competing recollections. That conversation tends to be calmer and shorter than the same conversation without evidence.',
        },
        {
          title: 'Talking to the workforce about monitoring',
          body: 'The workforce should know that the captured base supports safety, that it is reviewed in a sample-and-respond way, and that it is not a hidden observation tool. Hidden monitoring damages trust quickly and the damage is hard to repair. Visible, explained monitoring tends to be accepted by most workforces, particularly when it is paired with a fair finding-to-closeout loop and a no-blame stance on near-misses. The conversation with the workforce is part of the workflow, not separate from it: it belongs in induction, in the first toolbox talk a new crew receives, and in any change to the sampling rules. A site that is straight with its workforce about how the captured base is used finds that the captured base also becomes an asset for the workforce — clearing them when an incident is alleged, supporting their accounts in interviews, and showing them the changes their reports produced.',
        },
      ],
      checkpoint: 'For your project, can you describe the sample-and-respond posture in one paragraph that a foreman would accept without raising concerns?',
      exercises: [
        {
          prompt: 'Write a one-page sampling rule for PPE and high-risk monitoring on your project. Cover what is sampled, how often, by whom, and what triggers an observation versus a quiet conversation.',
          expectedAnswer: 'A page that names the activities sampled (e.g. lifts, deck pours, working at height), the cadence (e.g. 20% of lifts in week, 100% of pours), the reviewer (HSE lead or delegate), and the threshold for written observation versus on-site word.',
        },
        {
          prompt: 'Pick a recent lift on your project that had a deviation from the lift plan. Describe what the captured view showed, what the conversation with the package manager looked like, and what changed afterwards.',
          expectedAnswer: 'A short narrative covering the deviation, the discussion (collaborative, against the record), and the outcome — usually a lift plan revision, a banksman briefing, or a finding that the plan itself needed updating.',
        },
      ],
      recommendedReading: [
        { label: 'Use case: safety monitoring', href: '/use-cases/safety-monitoring' },
        { label: 'Knowledge base: safety monitoring workflows', href: '/knowledge-base/safety-monitoring-workflows' },
        { label: 'Glossary: safety observation', href: '/glossary/safety-observation' },
      ],
    },
    {
      slug: 'safety-meetings-with-evidence',
      title: 'Safety meetings with evidence',
      summary:
        'How to run a weekly safety meeting that opens on the evidence, tracks action across weeks, and finishes inside thirty minutes.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'The weekly evidence-led pack',
          body: 'A weekly safety meeting that runs on the captured base looks different from one that runs on memory. The pack opens with the findings of the week, classified, severity-graded, and tagged. Each finding has a clip, a 360 walk frame, or a permit reference attached. The owner is named. The clock is visible. The meeting works through the list as a list, not as a series of stories. A meeting attendee who arrives without having read the pack can pick it up in the first two minutes because the structure is consistent week to week. The pack also includes the metrics that matter — open observations, observations that breached their clock, near-miss volume, closeout rate — and a brief patterns section drawn from the captured base. The discipline of producing the pack on the same template each week, by the same person, is a small commitment that delivers an outsized return: the meeting is shorter, the decisions are better, and the record of the meeting becomes part of the audit trail.',
        },
        {
          title: 'Tracking action across weeks',
          body: 'The meeting also tracks action across weeks, which is where most safety meetings quietly fail. Findings raised in previous weeks reappear in the pack with their current status: open, in progress, closed with evidence, or breached. Open observations that have aged appear with their escalation. Closed observations come off the active list but stay searchable. The team can see the system working — the loops that closed, the loops that did not, the patterns that recurred. That visibility is what makes the routine sustainable rather than performative. It also gives the project director something to read between meetings: the gap between findings raised and findings closed is the leading indicator they need, and it is more telling than any single near-miss number. The meeting that does not track across weeks rebuilds itself from scratch every Tuesday and never compounds.',
        },
        {
          title: 'Stand-downs and serious findings',
          body: 'Some findings warrant a stand-down. A pattern of edge protection failures during a slab pour. A lifting incident with major potential. A permit-to-work breach on a hot works activity. A stand-down is an explicit pause on a class of activity until the controls are visibly back in place. The safety meeting is where the stand-down is initiated, where its scope is recorded, and where its release criteria are written down. The captured base supports the stand-down by showing the activities affected, by letting the project director communicate the scope to the supply chain in plain terms, and by capturing the verification evidence that lets the activity restart. A stand-down without written release criteria becomes either symbolic or open-ended. With them, it becomes a credible intervention.',
        },
        {
          title: 'The half-hour meeting and the failure modes',
          body: 'A safety meeting that opens on evidence tends to run shorter, not longer. The disagreements that previously consumed twenty minutes resolve in two when the captured view is on the screen. The half-hour meeting becomes the standard. The time saved goes back into actually closing the actions, which is where safety changes. The recurring failure modes are: the verbal-summary meeting that produces no record, the meeting that does not return to last week, the meeting that lists findings without owners and clocks, and the meeting that becomes a status theatre for the client. The discipline is the reverse of all four. The pack is written, the previous week is reopened, every line has an owner and a clock, and the meeting is for the team rather than for an audience.',
        },
      ],
      checkpoint: 'Could your next weekly safety meeting open with a one-page evidence-led pack that includes last week\'s open items?',
      exercises: [
        {
          prompt: 'Build a template for the weekly safety meeting pack. Cover findings of the week, open observations from previous weeks, breached clocks, near-miss patterns, and stand-down status. Limit the template to one or two pages.',
          expectedAnswer: 'A template with five named sections fitting on a single side of A4 (or two if necessary). Each section has a short rubric of what to include and what to leave out.',
        },
        {
          prompt: 'Run your next safety meeting against the template and time the meeting. Note where the conversation went off-template and why.',
          expectedAnswer: 'A short reflection naming the section that consumed the most time and the reason. Common reasons: an unresolved finding from two weeks earlier, a contested closeout, or a new pattern that needs investigation.',
        },
      ],
      recommendedReading: [
        { label: 'Safety loops that actually close', href: '/resources/safety-loops-that-actually-close' },
        { label: 'Knowledge base: safety monitoring workflows', href: '/knowledge-base/safety-monitoring-workflows' },
        { label: 'Glossary: meeting evidence pack', href: '/glossary/meeting-evidence-pack' },
        { label: 'Glossary: stand-down', href: '/glossary/stand-down' },
      ],
    },
    {
      slug: 'regulatory-and-insurer-conversations',
      title: 'Regulatory and insurer conversations',
      summary:
        'How the captured base supports conversations with regulators, insurers, and other external safety stakeholders, including under reservation of rights.',
      estimatedMinutes: 20,
      sections: [
        {
          title: 'The regulator at the gate',
          body: 'When a regulator arrives unannounced, the project\'s readiness is determined by what is already in the system. A compliance pack with the right structure means the inspection becomes a series of predictable conversations rather than a forensic exercise. The captured base supports the controls record: which controls were in place, when, on which activities. The findings register supports the audit trail: what was raised, how it was routed, when it closed. The closeout evidence supports the credibility of the whole record. A team that has been running the workflows for months has nothing to assemble in the half-hour before the regulator walks the site; they have something to present. The regulator is rarely looking for a perfect site — they are looking for evidence that the project knows what is happening on it and acts on what it sees. A compliance pack that demonstrates that posture changes the tone of the conversation. The regulator who can see the system working is much more likely to leave with advisory observations than enforcement notices.',
        },
        {
          title: 'After a regulator statement or notice',
          body: 'When a regulator issues an improvement or prohibition notice, or takes statements following an incident, the captured base supports the response in two ways. First, it lets the project answer the specific questions in the notice with evidence rather than narrative — what was happening on the activity at the time, who was on site, what controls were in place, what was logged in the safety system. Second, it supports the engineering of the corrective action plan, because the regulator wants to see not only that the immediate issue has been addressed but that the system is robust against recurrence. A project that can show its near-miss loop, its sampling discipline, and its closeout record makes a stronger case for the corrective action plan than a project that has to assemble evidence retrospectively. Statements taken from individuals are also strengthened by a record they can point to: a banksman whose account is supported by the captured view of the lift is in a different position to one whose recollection is contested.',
        },
        {
          title: 'The insurer survey and reservation of rights',
          body: 'Insurer surveys reward the same discipline. The captured base shows controls in place during high-risk activities. The findings and closeouts show that the safety system is functioning as designed. The retention policy shows that records survive the period the insurer cares about, which is typically longer than the project realises. A project that runs the workflows tends to find that insurance conversations move from defensive to factual, and that pricing tends to reflect the change over time. When an incident has triggered a notification, the insurer may write under reservation of rights while liability is being investigated. In that period, the captured base, the chain of custody, and the closeout record of any prior near-misses in the area become the basis on which the reservation is eventually withdrawn or maintained. The team that has the discipline tends to come out of the reservation period in a stronger position than the team that does not.',
        },
        {
          title: 'When something has gone wrong',
          body: 'When a serious incident has occurred, the conversation with regulators, insurers, and the client is hard regardless of preparation. The captured base does not make the conversation easy; it makes it shorter. Preserved records, defensible custody, a clear timeline, and the closeout trail of any prior near-misses in the area let the conversation focus on what happened and what the corrective plan is, rather than on whether the records can be relied on at all. The project that has the discipline tends to come out of the conversation with a clearer set of next steps, fewer follow-up requests, and a smaller exposure to the secondary disputes that often grow around a poorly evidenced incident.',
        },
        {
          title: 'Post-incident interview windows and what good looks like',
          body: 'In the days and weeks after a significant incident, the project will conduct interviews — the regulator with witnesses, the insurer with the project team, the client with the senior leadership, and the project itself with the people involved. The post-incident interview window is short and the recollections fade quickly. A captured base that the interviewer and interviewee can sit in front of changes the quality of the interview. The questions become specific, the answers become checkable, and the record of the interview is anchored to something both sides can see. What good looks like is a project where the regulator visit, the insurer survey, and the post-incident interview all start from the same body of evidence; where the chain of custody on that evidence is intact; and where the leadership can speak to the system that produced it without rehearsal. That is what site safety leadership looks like when the workflows have been run.',
        },
      ],
      checkpoint: 'For a hypothetical regulator visit next week, what would the first ten minutes of the meeting look like, and what would you put on the screen?',
      exercises: [
        {
          prompt: 'Build a regulator-readiness pack for your project. Cover controls record, findings register, closeout evidence, preservation policy, and the chain of custody on a sample of records. Aim for something a project director could open in front of an inspector tomorrow.',
          expectedAnswer: 'A pack with five named sections, each backed by a live link to the system. The pack should not require any new content — if it does, that gap is itself the most useful finding from the exercise.',
        },
        {
          prompt: 'Imagine an insurer survey is scheduled in six weeks. List the three things you would tighten in your safety workflow before the survey, and the evidence you would expect each one to produce.',
          expectedAnswer: 'Three concrete items. Common candidates: closing aged observations, formalising the sampling rule for high-risk activities, and writing the preservation policy. Each should produce a recorded artefact the insurer can read.',
        },
      ],
      recommendedReading: [
        { label: 'Regulatory events and evidence', href: '/resources/regulatory-events-and-evidence' },
        { label: 'Evidence export for court', href: '/resources/evidence-export-for-court' },
        { label: 'Knowledge base: safety monitoring workflows', href: '/knowledge-base/safety-monitoring-workflows' },
        { label: 'Glossary: regulatory event', href: '/glossary/regulatory-event' },
      ],
    },
  ],
}
