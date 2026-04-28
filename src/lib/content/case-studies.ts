import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mission-critical-data-centre-claims-defence',
    title: 'Defending claims on an anonymised mission-critical data centre',
    sector: 'Mission critical / data centre',
    summary:
      'How an anonymised contractor on a hyperscale data-centre programme used a disciplined claims-evidence pack alongside continuous progress verification to defuse a portfolio of late-arriving claims without resorting to external proceedings.',
    readingMinutes: 8,
    facts: [
      { label: 'Project type', value: 'Mission-critical / data centre' },
      { label: 'Approximate scale', value: 'Multi-hall facility, circa 80 MW IT load' },
      { label: 'Programme length', value: 'Approximately 26 months from mobilisation' },
      { label: 'Workflow packs in scope', value: 'Claims evidence, progress verification, design verification' },
      { label: 'Capture base', value: 'Fixed cameras at major fronts, weekly 360 walks, monthly drone' },
    ],
    workflowPacks: ['claims-evidence', 'progress-verification', 'design-verification'],
    body: [
      {
        kind: 'paragraph',
        body: 'A specialist contractor on an anonymised hyperscale data-centre programme moved from a posture of late-arriving claim defence to a posture of standing readiness over the course of a single contract. The project sat in a regional cluster of similar facilities, with overlapping supply chains and overlapping risk profiles. The contractor had been challenged on multiple claims in a previous programme; the team treated the new programme as the chance to run the discipline differently from week one.',
      },
      {
        kind: 'heading',
        body: 'The claim profile',
      },
      {
        kind: 'paragraph',
        body: 'Hyperscale projects produce a distinct claim profile. Owner instructions arrive at high velocity. Design revisions are routine. Long-lead equipment movements drive the critical path more than the structural programme. Weather events affect external works disproportionately because the building envelope is closed late. Each of these drivers tends to produce claims that surface late in the contract, when the captured base on most projects has already rotated past the events.',
      },
      {
        kind: 'heading',
        body: 'The discipline at mobilisation',
      },
      {
        kind: 'paragraph',
        body: 'At mobilisation, the digital construction lead and the commercial director agreed three rules. Retention on every workflow source would extend at least twelve months past PC. Time alignment would be validated quarterly against an external reference. A preservation policy with named authority would be in place from week one. None of the rules required additional hardware. They required the team to write the policies down and keep them reviewed.',
      },
      {
        kind: 'heading',
        body: 'How the workflows behaved',
      },
      {
        kind: 'paragraph',
        body: 'Progress verification ran as a weekly cadence. The weekly OAC opened with site capture and a 360 walk extract for each major work front. Disagreements over package position resolved in the room because the evidence was on the screen. Claims evidence ran on the same captured base, with notice files opened at the moment of any event with potential cost or programme implication, rather than at the moment a formal notice was decided. Design verification reconciled captured reality against the federated model at agreed verification points.',
      },
      {
        kind: 'list',
        items: [
          'Notice files opened at event moment, not notice moment.',
          'Progress meetings opened with captured evidence each week.',
          'Design verification points aligned to package completion milestones.',
          'Retention extended past PC to cover the dispute window.',
          'Preservation authority named in writing from mobilisation.',
        ],
      },
      {
        kind: 'heading',
        body: 'The outcome on claims',
      },
      {
        kind: 'paragraph',
        body: 'Across the contract, the team carried a pattern of late-arriving claims from the owner-side that had previously caused months of dispute on similar programmes. Each claim arrived against a captured base that the contractor had preserved at the time, indexed at the time, and could produce to a reviewer with a custody report. Several claims withdrew once the substantiation package was shared; the remainder resolved in commercial conversations rather than escalating to external proceedings. The contractor noted that the pattern of withdrawal was the most visible change.',
      },
      {
        kind: 'heading',
        body: 'What the team would do differently',
      },
      {
        kind: 'paragraph',
        body: 'The team identified two changes for the next programme. First, route the design verification pack into the closeout archive earlier, so the as-built record produced during the works was usable on the day of PC rather than retrofitted in the final fortnight. Second, train the owner-side representatives on the evidence base alongside the contractor team, so the captured record stopped being a one-sided tool. Both changes were operational rather than technological, which the team treated as the point.',
      },
      {
        kind: 'callout',
        title: 'The carryover',
        body: 'The retention and preservation policies developed on this contract have since been adopted as the contractor´s standard for all hyperscale work. The cost of the policies is negligible; the value lands when a claim arrives.',
      },
      {
        kind: 'paragraph',
        body: 'The case is not unusual in shape — most hyperscale programmes face similar claim patterns — but the discipline of running the workflow from week one is. Most teams adopt the discipline only after a difficult dispute on a previous contract. The lesson, in this case, was that the discipline was much cheaper to run from the start than to retrofit in the middle.',
      },
    ],
  },
  {
    slug: 'residential-progress-and-stakeholder-reporting',
    title: 'Progress and stakeholder reporting on an anonymised residential project',
    sector: 'Residential',
    summary:
      'How an anonymised residential developer of approximately 320 units used progress verification and stakeholder reporting workflows to lower the burden of monthly reporting and shift the conversation with their lender from defensive to factual.',
    readingMinutes: 7,
    facts: [
      { label: 'Project type', value: 'Residential, mixed-tenure' },
      { label: 'Approximate scale', value: '~320 units across three blocks' },
      { label: 'Programme length', value: 'Approximately 22 months' },
      { label: 'Workflow packs in scope', value: 'Progress verification, stakeholder reporting' },
      { label: 'Capture base', value: 'Fixed cameras at each block, weekly 360 walks, fortnightly drone' },
    ],
    workflowPacks: ['progress-verification', 'stakeholder-reporting'],
    body: [
      {
        kind: 'paragraph',
        body: 'A residential developer running an anonymised project of approximately 320 units across three blocks was spending a measurable share of senior time on monthly reporting to a senior lender and to a small number of institutional investors. The project was on programme, but the reporting cadence consumed disproportionate attention and produced a recurring pattern of follow-up questions that the team could not always answer in real time.',
      },
      {
        kind: 'heading',
        body: 'The reporting burden',
      },
      {
        kind: 'paragraph',
        body: 'Monthly reporting on this contract involved the project director, the commercial manager, and a development associate. Each cycle consumed approximately three days across the three roles. The bulk of the work was assembly: pulling screenshots, requesting site photos from the contractor, reconciling programme extracts, and rewriting prose that had been rewritten the month before. The output was a deck that satisfied the audience but felt to the team like work without leverage.',
      },
      {
        kind: 'heading',
        body: 'The change',
      },
      {
        kind: 'paragraph',
        body: 'The developer adopted a standing reporting pack tied to the captured base. Each block had fixed cameras at the major work fronts, a weekly 360 walk along agreed routes, and fortnightly drone surveys for the structure and roof. The reporting pack pulled from the same base each month, with the same shape: programme position with site capture references, commercial position, key risks, and a forward look. The team produced the pack in approximately half a day rather than three days.',
      },
      {
        kind: 'list',
        items: [
          'Standing pack with consistent shape across reporting cycles.',
          'Captured base shared between progress verification and reporting.',
          'Lender questions answered by the pack itself in most cycles.',
          'Senior time on reporting reduced by approximately seventy per cent.',
          'Drawdowns moved from defensive conversations to factual ones.',
        ],
      },
      {
        kind: 'heading',
        body: 'The lender conversation',
      },
      {
        kind: 'paragraph',
        body: 'The most visible change was in the lender conversation. The lender´s representatives had previously asked five to seven follow-up questions per cycle, often requiring the team to convene a separate response. After the standing pack arrived for three consecutive months, the follow-up rate fell to one or two questions, and those tended to be specific commercial queries rather than re-establishment of facts. Drawdown approvals moved from a fortnight to a few days.',
      },
      {
        kind: 'heading',
        body: 'What the project director kept',
      },
      {
        kind: 'paragraph',
        body: 'The project director noted that the bigger benefit was qualitative. The standing pack let her hold the project in her head with greater confidence. When a stakeholder asked about a specific block, she could answer from the pack rather than asking for a fresh report. The trust dividend extended into investor conversations and into the contractor relationship, where evidence-led OAC meetings began to feel routine rather than tense.',
      },
      {
        kind: 'callout',
        title: 'The discipline that survived',
        body: 'When the next residential project began, the developer carried the standing-pack discipline forward as a procurement requirement. The captured base was specified at contract signing rather than negotiated mid-project. The reporting cycle ran cleanly from month one.',
      },
      {
        kind: 'paragraph',
        body: 'The case is unremarkable in size and unremarkable in workflow — progress verification and stakeholder reporting are the two most adopted packs across the residential sector — but the consistency of the standing pack made the difference. The lesson was not that more capture was needed but that the same capture, used with discipline, produced a reporting cycle the team could run as routine rather than as a recurring scramble.',
      },
    ],
  },
  {
    slug: 'infrastructure-claims-and-compliance',
    title: 'Claims and compliance on an anonymised infrastructure project',
    sector: 'Infrastructure',
    summary:
      'How an anonymised infrastructure contractor on a linear works programme combined claims evidence with a compliance record discipline to handle a major weather-driven dispute and a regulator audit in the same period.',
    readingMinutes: 8,
    facts: [
      { label: 'Project type', value: 'Linear infrastructure (transport corridor)' },
      { label: 'Approximate scale', value: '~38 km of works in three contract sections' },
      { label: 'Programme length', value: 'Approximately 30 months' },
      { label: 'Workflow packs in scope', value: 'Claims evidence, compliance record, gate logistics' },
      { label: 'Capture base', value: 'Distributed fixed cameras, fortnightly drone, mobile capture' },
      { label: 'Retention', value: 'Contract life plus seven years per regulatory requirement' },
    ],
    workflowPacks: ['claims-evidence', 'compliance-record', 'gate-logistics'],
    body: [
      {
        kind: 'paragraph',
        body: 'A specialist contractor on an anonymised linear infrastructure programme was running approximately thirty-eight kilometres of works across three contract sections. Linear projects produce a distinct evidence challenge: the captured base is distributed, the activities move along the programme, and the regulatory profile is heavier than equivalent vertical projects. The team adopted a combined claims-evidence and compliance-record discipline at mobilisation, with retention set well beyond the contract.',
      },
      {
        kind: 'heading',
        body: 'The two events',
      },
      {
        kind: 'paragraph',
        body: 'In a single eighteen-month period, the project faced two consequential evidence events. A prolonged sequence of severe weather over the second winter triggered a substantial extension-of-time and prolongation claim. A regional regulator opened an audit on environmental controls following a routine inspection. Each event by itself would have been demanding; together, they would have been unmanageable for a project running on retrospective evidence assembly.',
      },
      {
        kind: 'heading',
        body: 'The weather claim',
      },
      {
        kind: 'paragraph',
        body: 'The weather claim drew on the captured base from the start. Each weather event was tagged at the time, with site capture from the affected sections, the meteorological record from a recognised national source, and the schedule extracts at the moment. The substantiation file was a continuous document rather than a retrospective assembly. When the formal notice went out, the claim arrived with a numbered evidence index that the owner´s representatives spent several days walking through. The claim resolved in commercial conversation rather than escalating, and the prolongation cost was settled within the period the contract specified.',
      },
      {
        kind: 'heading',
        body: 'The regulator audit',
      },
      {
        kind: 'paragraph',
        body: 'The regulator audit drew on the compliance record. The contractor presented controls in place during each major activity, with captured site evidence aligned to the controls documents. Findings from the project´s own compliance routines were presented alongside their closeouts. The auditor noted, in the closing meeting, that the file was unusually navigable. Two minor findings were issued; both were closed within agreed windows. The audit concluded without escalation.',
      },
      {
        kind: 'list',
        items: [
          'Claims file opened at the first event, not at the formal notice.',
          'Compliance record maintained as a continuous routine rather than an audit-day exercise.',
          'Retention set to contract life plus seven years per the regulatory window.',
          'Both events resolved within their respective contractual or regulatory periods.',
          'Same captured base served both claims and compliance.',
        ],
      },
      {
        kind: 'heading',
        body: 'What the team noted',
      },
      {
        kind: 'paragraph',
        body: 'The project director noted that the cost of the discipline was concentrated in mobilisation, when the team agreed retention, custody, and indexing standards. The cost during the contract was negligible: the workflows ran on the same captured base they were producing anyway. The benefit landed when the two events arrived, and the team did not have to choose which to prioritise.',
      },
      {
        kind: 'callout',
        title: 'Linear projects and the captured base',
        body: 'Linear infrastructure rewards distributed capture and disciplined indexing. Without indexing, a long corridor produces an archive that is hard to search; with indexing, the same archive becomes the spine of every workflow that touches the programme.',
      },
      {
        kind: 'paragraph',
        body: 'The case is presented for the combination rather than for either event alone. Claims and compliance often live in different parts of the organisation, with different evidence cultures. On this contract, they shared a base, and the two events that landed in the same period found a project ready for both.',
      },
    ],
  },
  {
    slug: 'commercial-fitout-design-verification',
    title: 'Design verification on an anonymised commercial fitout',
    sector: 'Commercial fitout',
    summary:
      'How an anonymised commercial fitout team running a multi-floor occupier delivery used the design verification pack alongside disciplined stakeholder reporting to keep the as-built record current and the handover punch list short.',
    readingMinutes: 7,
    facts: [
      { label: 'Project type', value: 'Commercial fitout (occupier delivery)' },
      { label: 'Approximate scale', value: '~12,500 sq m across nine floors' },
      { label: 'Programme length', value: 'Approximately 9 months on site' },
      { label: 'Workflow packs in scope', value: 'Design verification, stakeholder reporting, progress verification' },
      { label: 'Capture base', value: 'Weekly 360 walks per floor, fixed cameras at risers and core' },
    ],
    workflowPacks: ['design-verification', 'stakeholder-reporting', 'progress-verification'],
    body: [
      {
        kind: 'paragraph',
        body: 'A specialist fitout contractor delivering an anonymised occupier project across approximately twelve and a half thousand square metres on nine floors faced a familiar challenge: a tightly compressed programme, a high level of MEP coordination, and an owner whose acceptance team had a low tolerance for end-of-programme surprises. The contractor adopted a design verification discipline alongside the standard progress and reporting workflows, with a deliberate focus on keeping the as-built record current rather than retrofitted.',
      },
      {
        kind: 'heading',
        body: 'Why design verification mattered',
      },
      {
        kind: 'paragraph',
        body: 'Fitout projects produce a high density of services in a small volume. MEP risers, ceiling voids, and floor boxes carry the majority of the coordination risk. Deviations from the federated model are common and individually small, but they accumulate. A handover punch list of several hundred items is the typical result. The contractor wanted that result to be different on this contract, and they treated design verification as the lever.',
      },
      {
        kind: 'heading',
        body: 'How the workflow ran',
      },
      {
        kind: 'paragraph',
        body: 'Each floor had a defined 360 walk route through the riser cores, the ceiling voids before close-up, and the floor box installations. Each route ran weekly. Verification points were set against the federated model at the moment each major service was first-fixed, before close-up was permitted. Deviations were classified at the verification point — accept, repair, or redesign — with the disposition recorded against the model and the captured walk. The discipline added approximately one hour per floor per week and removed several days of close-out work.',
      },
      {
        kind: 'list',
        items: [
          'Defined 360 walk routes through risers, ceilings, and floor boxes.',
          'Verification points set before close-up of each major service.',
          'Disposition classification at the verification point, not at handover.',
          'As-built record updated continuously rather than retrofitted.',
          'Handover punch list reduced significantly compared with prior fitouts.',
        ],
      },
      {
        kind: 'heading',
        body: 'The handover',
      },
      {
        kind: 'paragraph',
        body: 'At handover, the contractor presented an as-built record that the owner´s acceptance team could navigate against the model. The handover punch list was significantly shorter than the team´s previous comparable projects — the discipline had absorbed deviations during the works rather than queueing them for the close. The owner´s acceptance team noted that the early-presented record reduced their own workload, and the warranty period began with a smaller open-items list than usual.',
      },
      {
        kind: 'heading',
        body: 'The reporting overlay',
      },
      {
        kind: 'paragraph',
        body: 'Stakeholder reporting drew on the same captured base. The monthly pack to the owner included design verification highlights for the period, with named items resolved and any open dispositions. The owner-side leadership noted that the report changed the tone of the monthly conversation; questions about as-built quality moved from speculative to specific, and the team could answer with reference to the record rather than to recollection.',
      },
      {
        kind: 'callout',
        title: 'The fitout lesson',
        body: 'Fitout is the activity where as-built drift accumulates fastest because of the volume of services in small volumes. A continuous design verification discipline absorbs the drift during the works at much lower cost than a retrospective punch list at the end.',
      },
      {
        kind: 'paragraph',
        body: 'The case is unremarkable in scale and remarkable in its handover. The discipline did not require additional hardware or significant additional time on site. It required the team to set the workflow at mobilisation and to run it as routine. The benefit appeared at the moment of handover, when the record was already in the shape the owner needed.',
      },
    ],
  },
  {
    slug: 'energy-project-gate-and-logistics',
    title: 'Gate and logistics on an anonymised energy project',
    sector: 'Energy',
    summary:
      'How an anonymised energy project running solar and battery storage on a remote site used gate logistics and safety monitoring workflows to manage a high-volume, high-pace delivery programme without losing the audit trail.',
    readingMinutes: 7,
    facts: [
      { label: 'Project type', value: 'Energy (solar PV with co-located battery storage)' },
      { label: 'Approximate scale', value: '~120 MW solar, co-located battery storage' },
      { label: 'Programme length', value: 'Approximately 14 months on site' },
      { label: 'Workflow packs in scope', value: 'Gate logistics, safety monitoring, progress verification' },
      { label: 'Capture base', value: 'Gate ANPR, fixed cameras at substation and laydown, monthly drone' },
    ],
    workflowPacks: ['gate-logistics', 'safety-monitoring', 'progress-verification'],
    body: [
      {
        kind: 'paragraph',
        body: 'A specialist energy contractor delivering an anonymised solar and battery storage project on a remote site faced a logistics-led programme. Approximately one hundred and twenty megawatts of solar capacity required hundreds of mid-sized deliveries, weekly fluctuations in subcontractor attendance, and a safety profile dominated by hot work, lifting operations, and isolation procedures. The project was on a tight commissioning schedule and could not afford to lose track of the trail.',
      },
      {
        kind: 'heading',
        body: 'Why gate logistics led',
      },
      {
        kind: 'paragraph',
        body: 'On energy projects of this shape, the gate is the centre of gravity. Materials arrivals drive the programme. Subcontractor attendance drives the productivity. Plant and equipment movements drive the safety profile. The team adopted a gate-led discipline at mobilisation: ANPR on every entry, personnel scans tied to subcontractor and work area, and a daily reconciliation against the planned programme.',
      },
      {
        kind: 'heading',
        body: 'How safety monitoring sat alongside',
      },
      {
        kind: 'paragraph',
        body: 'Safety monitoring drew on the same captured base. Fixed cameras at the substation and laydown areas gave continuous coverage of the highest-risk operations. Monthly drone captures provided a project-wide view that supported lifting plans and isolation reviews. Findings from the gate workflow — out-of-hours arrivals, undocumented deliveries, plant movements outside permitted windows — fed directly into the safety conversation rather than living in a separate logistics log.',
      },
      {
        kind: 'heading',
        body: 'The two reconciliations',
      },
      {
        kind: 'paragraph',
        body: 'Each day, the project ran two reconciliations. A delivery reconciliation: dockets at the gate against the materials plan. An attendance reconciliation: personnel scans against the package programme. Where either failed, an exception was logged with a named owner. The exception was usually closed within a working day. The team noted that the reconciliations took approximately twenty minutes per day combined and prevented a much larger weekly clean-up that would otherwise have consumed several hours.',
      },
      {
        kind: 'list',
        items: [
          'Daily delivery and attendance reconciliations.',
          'Exceptions logged and closed within a working day.',
          'Safety findings drawn from the same captured base.',
          'Out-of-hours and unauthorised access events caught early.',
          'Commissioning schedule held without a logistics-driven slip.',
        ],
      },
      {
        kind: 'heading',
        body: 'A small theft incident',
      },
      {
        kind: 'paragraph',
        body: 'Mid-programme, a small theft incident occurred at the laydown area. The captured base showed the time, the route, and the vehicle involved. The investigation closed in under a week, and the recovery was supported by the captured record. The project director noted that the same incident on a previous contract had taken weeks of effort and produced no outcome; the difference was a captured base aligned to the gate and the laydown.',
      },
      {
        kind: 'heading',
        body: 'The commissioning result',
      },
      {
        kind: 'paragraph',
        body: 'The project commissioned within the scheduled window. The team attributed a meaningful share of the on-time outcome to the gate-led discipline; the workflow had absorbed delivery and attendance issues that would otherwise have rolled into commissioning as logistics-driven slips. The owner´s representatives noted the consistency of the daily reporting and accepted the commissioning record without an extended verification round.',
      },
      {
        kind: 'callout',
        title: 'Energy projects and the gate',
        body: 'On programmes dominated by deliveries and attendance, the gate is the spine of the workflow library. Building from gate logistics outward tends to produce a tighter overall discipline than building from progress verification.',
      },
      {
        kind: 'paragraph',
        body: 'The case sits at the intersection of two packs that often live in different functions. By making the gate the centre of gravity from week one, the team avoided the disconnect between logistics and safety that consumes time on most large energy projects.',
      },
    ],
  },
]
