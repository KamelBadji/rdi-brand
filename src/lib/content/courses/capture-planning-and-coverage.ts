import type { Course } from '../types'

export const course: Course = {
  slug: 'capture-planning-and-coverage',
  title: 'Capture Planning and Coverage',
  level: 'Practitioner',
  estimatedMinutes: 102,
  summary:
    'A practitioner course for digital construction leads, planners, and project directors who decide where the cameras, 360 routes, and drone flights go. The course moves capture decisions from camera counts to workflow-led coverage and treats the capture plan as a living document that travels with the project.',
  longSummary:
    'Capture decisions on a live project are resourcing decisions: tower crane mounting brackets, helmet cameras for confined-space inspections, 360 route discipline through scaffold churn, drone cadence on linear infrastructure, and retention budgets that have to survive a six-year warranty. This course treats those choices as the day job of the digital construction lead and the project planner, not the supplier. Each lesson works through a capture problem from the workflows backwards, names the trade-offs, and shows the failure modes that show up when the plan is left to procurement.',
  audience: [
    'Digital construction lead',
    'Project planner',
    'Project director',
    'BIM coordinator',
    'Site logistics manager',
  ],
  outcomes: [
    'Translate workflow scope into a capture plan rather than a camera schedule.',
    'Plan coverage by workflow first and area second, with named overlays where the workflow view leaves a residual risk.',
    'Choose between fixed, mobile, 360, and drone capture for each evidence requirement, and combine them without paying for redundancy.',
    'Recognise evidence saturation and prune the capture plan without weakening the workflows it supports.',
    'Run a scheduled and trigger-based revision cycle that keeps the plan current as packages, fronts, and risks change.',
    'Hand the capture plan and its archive over together, so the owner inherits a usable record rather than an orphaned set of files.',
  ],
  lessons: [
    {
      slug: 'from-camera-count-to-capture-plan',
      title: 'From camera count to capture plan',
      summary:
        'Why the procurement question "how many cameras?" produces the wrong plan, and how a workflow-led capture plan changes the conversation, the budget, and the project outcome.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'The wrong question, asked early',
          body: 'Most capture conversations begin in procurement with a single number: how many cameras does the project need. The number is usually pulled from a previous job of similar size, or from a vendor proposal that anchors on hardware count because hardware is what the vendor sells. The question is wrong because it skips the workflows the cameras are meant to serve. Once the count is signed off, the project carries that figure as a constraint. Coverage decisions become a backwards rationalisation of an existing budget. Workflows that emerge later — a claims defence on a delay event, a defects cycle that needs a 360 baseline, a logistics dispute that needs a gate view — get shoehorned into whatever cameras happen to exist. The team learns to live with gaps because the count is fixed. Procurement has not bought capture; it has bought the appearance of capture.',
        },
        {
          title: 'Start from the workflows',
          body: 'A capture plan begins with the workflows the project has committed to running. Progress verification against the programme baseline. Claims and evidence for the commercial team. Safety monitoring for high-risk operations. Gate and logistics for material flow. Subcontractor attendance where the contract allows it. Each named workflow has evidence requirements: cadence, vantage, integrity, retention. Those requirements translate into capture sources. A tower crane camera serves progress verification on the structural frame and gives a wide shot for monthly stakeholder reporting. A 360 walk on the fitout floors serves quality verification and as-built capture. A gate camera serves logistics and delivery verification. The capture plan is the smallest set of sources that closes those workflows, sized to the contract value at risk rather than the floor area.',
        },
        {
          title: 'How the procurement conversation changes',
          body: 'When the project starts from workflows, the supplier conversation looks different. The vendor proposes against named workflows rather than against a square-metre rate. The project can interrogate whether the proposed mix of fixed, 360, and drone closes each loop, and where the residual gaps sit. Negotiation moves from price-per-camera to coverage-per-workflow, which makes line items easier to defend at the cost report. The procurement decision aligns with the operational decision, which is the only durable basis for either. It also makes underspend visible: a workflow with no capture source is a decision the project has made, even if no one wrote it down.',
        },
        {
          title: 'Failure modes when capture is bought by the count',
          body: 'Three failure modes recur. First, congested deliveries arrive at a gate that has no camera because gate logistics was not in the original workflow scope, and the project cannot verify a stand-down claim. Second, scaffold-bound fitout floors run for a year with no 360 baseline because the budget was already committed to fixed cameras on the structural frame, and the defects cycle at handover has nothing to compare against. Third, a delay event hinges on weather correlation but the time-aligned record is missing the relevant front. Each failure traces back to the same cause: capture was bought before the workflows were named. The plan that would have prevented the failure is the same one the team now writes after the fact, at a higher cost.',
        },
      ],
      checkpoint:
        'For your next project mobilisation, can you name the workflows in scope and the evidence each needs before any camera count is signed off?',
      exercises: [
        {
          prompt:
            'Take your most recent project. List the five workflows you actually used capture for. Now list the workflows you wish you had used capture for but could not. Identify the procurement decision that produced the gap.',
          expectedAnswer:
            'A typical answer names progress verification and claims as workflows that worked because fixed cameras were placed at the structural fronts, and identifies gate logistics or fitout 360 as gaps because no source was specified during procurement. The procurement decision that produced the gap is usually a camera count agreed before the workflow scope was written down, or a 360 line item dropped during value engineering.',
        },
        {
          prompt:
            'Draft a one-page workflow-led capture brief for a notional project of your scale. Name three workflows in scope and the minimum capture sources each needs. Cost it as a coverage budget rather than a hardware budget.',
          expectedAnswer:
            'A workable brief lists progress verification (one or two fixed cameras at primary work fronts plus monthly drone), claims and evidence (gate camera plus time-aligned coverage of the contested fronts), and quality verification (fortnightly 360 walks on fitout floors). The coverage budget shows cost per workflow per month rather than cost per camera per month, which exposes which workflows are over- or under-resourced.',
        },
      ],
      recommendedReading: [
        { label: 'Capture plans, not camera counts', href: '/posts/capture-plans-not-camera-counts' },
        { label: 'Capture plan template', href: '/knowledge-base/capture-plan-template' },
        { label: 'From cameras to evidence', href: '/posts/from-cameras-to-evidence' },
      ],
    },
    {
      slug: 'coverage-by-workflow-not-by-area',
      title: 'Coverage by workflow, not by area',
      summary:
        'Why coverage planned by area produces gaps the workflows hit, and how planning by workflow first inverts the failure mode without abandoning the safety and security overlays that area-led plans get right.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'The area-led trap',
          body: 'The most common capture plan is a site map with cameras dropped at the corners of zones. Each zone gets one fixed view, plus a 360 route or two, and the planner ticks the box. The trap is that the workflows do not run by zone. Progress verification follows the package — the steel frame moves, the cladding chases it, the fitout follows the cladding. Claims evidence follows the activity — a stand-down claim wants the gate, the access road, and the affected front, not the whole site. Safety monitoring follows the high-risk operation — a lift over a live road, a confined-space entry, a hot-works permit. An area-led plan inevitably has gaps where the workflows actually need evidence and surplus where they do not. The map looks comprehensive and the workflows still miss.',
        },
        {
          title: 'Workflow-led coverage, in practice',
          body: 'Workflow-led coverage starts from each workflow and asks what evidence it needs. The evidence shapes the capture sources, the cadence, and the retention. The plan then maps these onto the site. Some areas attract heavy coverage because they sit at workflow intersections — a gate that serves logistics, attendance, and incident readiness will have multiple sources. Other areas attract lighter coverage because no workflow needs them — a finished basement after the structural sign-off does not need the same density as a live floor. The plan looks uneven on a map and even on the workflows. That is the right shape. A plan that looks even on the map is almost always uneven on the workflows the project actually runs.',
        },
        {
          title: 'Tower crane, fixed views, and the structural frame',
          body: 'A worked example. On a high-rise structural job, the workflows in scope are progress verification, claims, monthly stakeholder reporting, and incident readiness. The capture set that closes them is a tower crane camera as the primary wide shot, two fixed views at the principal elevations to track the frame as it climbs, and a gate camera for deliveries. The crane camera serves progress, reporting, and incident readiness as a single source. The elevation cameras serve claims and as-built. The gate camera serves logistics and attendance. Five sources cover four workflows. An area-led plan for the same site might place eight cameras to cover the perimeter and still miss the crane shot, because the perimeter view is what feels comprehensive on the map.',
        },
        {
          title: 'Where area overlays still earn their place',
          body: 'Workflow-led coverage does not replace area thinking entirely. Some areas need coverage for safety regardless of which workflows touch them — a permit-controlled high-risk zone, a lay-down area with public road exposure. Some areas need coverage for security — a compound holding plant, a perimeter at a project with theft history. The discipline is to start workflow-led, list the residual risks the workflow plan does not cover, and add area-led overlays as named exceptions. The exceptions sit on the plan with their justification written next to them. A capture source without a workflow or a named overlay should come off the plan at the next revision.',
        },
        {
          title: 'Failure modes from mixed methods',
          body: 'The most common failure is a hybrid plan that calls itself workflow-led but is area-led under the surface. Symptoms: every floor of a tower has the same density of capture even though the workflows shift floor by floor; a 360 route is identical across packages even though MEP needs a different cadence than fitout; gate coverage is treated as one source when the project actually has three gates with different traffic profiles. The fix is not to redraft the plan from scratch but to walk it workflow by workflow, asking which sources each workflow uses and removing the ones with no taker. The plan that emerges is leaner, defensible at audit, and easier to revise.',
        },
      ],
      checkpoint:
        'Walk through your current capture plan source by source. Which sources serve at least one named workflow, and which serve none?',
      exercises: [
        {
          prompt:
            'Pick a workflow from your current programme. Sketch the minimum capture set that would close it. Identify the first capture point you would cut if budget halved, and explain why that point is the least load-bearing for the workflow.',
          expectedAnswer:
            'A practitioner answer names a workflow such as progress verification on the structural frame, lists the tower crane camera, two elevation views, and a gate camera as the minimum set, and identifies the second elevation view as the first cut because the crane camera plus one elevation gives adequate angle redundancy for monthly progress, while losing the crane view or the gate would break two workflows each.',
        },
        {
          prompt:
            'Take an area-led plan you have written or inherited. Re-tabulate it by workflow rather than by zone. Mark each source with the workflows it serves. Highlight any source that serves zero workflows and any workflow that has zero sources.',
          expectedAnswer:
            'A useful re-tabulation typically reveals two or three sources placed for visual completeness that serve no named workflow, and one workflow — often gate logistics or fitout 360 — that has no dedicated source. The exercise is the precondition to a defensible revision.',
        },
      ],
      recommendedReading: [
        { label: 'Coverage gaps are decisions', href: '/posts/coverage-gaps-are-decisions' },
        { label: 'Workflow anatomy', href: '/knowledge-base/workflow-anatomy' },
        { label: 'Workflow thinking before feature thinking', href: '/posts/workflow-thinking-before-feature-thinking' },
      ],
    },
    {
      slug: 'fixed-mobile-360-and-drone',
      title: 'Fixed, mobile, 360, and drone',
      summary:
        'How to choose between the four main capture modalities for each workflow and combine them so the project gets coverage without paying twice for the same evidence.',
      estimatedMinutes: 19,
      sections: [
        {
          title: 'Fixed cameras and where they earn their keep',
          body: 'Fixed cameras give continuous coverage at named work fronts. They are strongest on progress verification, gate logs, and incident readiness, because the value of the source increases with the time-aligned record it produces. A tower crane camera capturing the structural frame for fourteen months is irreplaceable; the same view shot weekly with a phone is not. Fixed cameras are weak when the work front moves quickly — a fitout floor that turns over every six weeks, an MEP riser that races up the building, a façade that closes off the view as it climbs. Plan fixed coverage where the front is stable for at least a quarter, and accept that some packages will need a different modality. The retention budget for fixed cameras compounds quickly, so the plan should specify which streams are retained at full resolution, which at downsampled, and for how long.',
        },
        {
          title: '360 walks and route discipline through scaffold churn',
          body: '360 walks bridge fixed and mobile. A walker carrying a 360 head along a defined route, at a defined cadence, produces a record that can be revisited later from any angle. 360 is strongest in fitout, MEP, and quality verification, where the value is in being able to inspect from any direction after the fact, often months later when a defect surfaces. The discipline is the route. A 360 walk without a fixed route is harder to compare across cycles, because the alignment between captures degrades and the as-built layer cannot be stitched. On a fitout floor with shifting scaffold, the route should follow the permanent reference points — column lines, lift cores, stair cores — rather than the temporary routes scaffold creates. The walker re-finds the route each cycle even if the floor looks different. A fortnightly cadence works for active fitout; monthly is enough once the floor is closing out.',
        },
        {
          title: 'Drone surveys, infrastructure cadence, and the project envelope',
          body: 'Drone or aerial captures cover what no other modality can — the structure as a whole, the earthworks, the roof, the surrounding environment. Drone is most valuable on large structural and infrastructure projects, on linear works such as roads and rail, and on projects with significant external scope such as data centres or energy. The cadence is usually monthly on buildings, fortnightly during earthworks, and weekly during peak structural lifts. On a linear infrastructure project, drone flights are tied to chainage rather than calendar — every five hundred metres of completed alignment captured to a consistent altitude and overlap. The combination of drone with fixed and 360 produces a record that holds up at every scale, from a single fitting to the project envelope. Drone alone is rarely enough; the survey is a wide reference layer that other modalities anchor to.',
        },
        {
          title: 'Mobile capture, helmet cameras, and confined-space inspections',
          body: 'Mobile capture — phone, tablet, helmet, or wearable — picks up what fixed and 360 miss. It is opportunistic, lower in average integrity, and most useful as a complement rather than a substitute. Helmet cameras come into their own on confined-space inspections, plant interiors, lift shafts, and tunnel headings, where no fixed mount can give the inspector view. The trade-off is integrity: mobile capture has shakier provenance, weaker time alignment, and higher tagging burden, so the workflows that depend on it should be limited to the ones that genuinely need a roving view. Helmet capture during a permit-controlled lift, recorded against the permit number, is high-value evidence; the same helmet running ambient through a working day produces a tape no one will retrieve. Specify the windows when helmet capture is on and off, or it becomes noise.',
        },
        {
          title: 'Combining the four without paying twice',
          body: 'The art is the combination. A monthly drone flight, two fixed cameras at the structural elevations, fortnightly 360 walks on active fitout, and helmet capture during named permit operations is a coverage stack that closes most building workflows. The redundancy is deliberate where it matters — a drone flight and a fixed elevation view both cover the frame, but at different scales — and absent where it does not. The cost trap is to add modalities because they are available rather than because they close a workflow. Each new source on the plan should carry the workflow it serves, the cadence it runs at, and the retention window it needs. A source without those three lines is one to question at the next revision.',
        },
      ],
      checkpoint:
        'For your current project, which modality is most under-used relative to the workflows in scope, and what would you cut to fund it?',
      exercises: [
        {
          prompt:
            'Build a four-column matrix for your project: workflows down the left, modalities across the top. Mark each cell with the cadence and integrity grade. Identify any workflow with no primary source and any source with no workflow.',
          expectedAnswer:
            'A finished matrix typically shows fixed cameras as primary for progress and gate, 360 as primary for quality and as-built, drone as primary for envelope and external, and mobile as supplementary across all four. Gaps usually appear as a workflow such as MEP commissioning or confined-space safety with no dedicated modality, and as a fixed camera placed for visual completeness with no workflow against its name.',
        },
        {
          prompt:
            'Pick one workflow that is currently served by fixed capture only. Propose how a 360 or drone overlay would change the evidence quality, and estimate the marginal cost as a percentage of the existing capture spend on that workflow.',
          expectedAnswer:
            'A typical answer takes progress verification on a fitout package, currently fixed-only, and proposes a fortnightly 360 walk that adds inspection-from-any-angle and as-built coverage. The marginal cost runs at ten to twenty per cent of the workflow spend, justified by the reduction in defects-cycle retrieval time and the as-built archive value at handover.',
        },
        {
          prompt:
            'Specify the retention budget for one fixed camera over a thirty-month project. State the resolution, the storage tier, and the workflow that justifies the retention window.',
          expectedAnswer:
            'A defensible specification might run twelve months at full resolution on a hot tier for active claims and progress, eighteen months at downsampled resolution on a cold tier for warranty correlation, and an indefinite hold on tagged clips associated with named delay events or incidents. The justification ties each tier to the workflow window it serves.',
        },
      ],
      recommendedReading: [
        { label: '360 walks and quality loops', href: '/posts/360-walks-and-quality-loops' },
        { label: 'Drone surveys in the evidence chain', href: '/posts/drone-surveys-in-the-evidence-chain' },
        { label: 'Mobile capture and the helmet camera', href: '/posts/mobile-capture-and-the-helmet-camera' },
        { label: 'Time-lapse is not a strategy', href: '/posts/time-lapse-is-not-a-strategy' },
      ],
    },
    {
      slug: 'evidence-saturation-and-pruning',
      title: 'Evidence saturation and pruning',
      summary:
        'When more capture stops improving decisions, how to recognise saturation in the time-to-find and tagging metrics, and how to prune the plan without weakening the workflows it supports.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'When more capture stops improving decisions',
          body: 'There is a point at which adding more capture stops improving decision quality. The records exist, the storage runs, the dashboards populate, and the workflows still cannot use the evidence faster than it arrives. A claims analyst with twenty fixed views has more material than one with six, but the time to assemble a defence packet is the same or longer because the search burden grows with the source count. A safety officer with helmet feeds from every operative has every minute on tape and still relies on the supervisor walk for the events that matter. Evidence saturation is real, and recognising it early is what separates a capture plan that compounds in value from one that compounds in cost. The threshold is not a number of cameras; it is a ratio between the evidence produced and the evidence acted on.',
        },
        {
          title: 'Reading the time-to-find metric',
          body: 'Saturation shows up in the time-to-find metric — how long it takes from a workflow trigger to the relevant record being on screen for the person who needs it. Under twenty seconds for a recent event suggests the indexing is healthy. Two minutes suggests the plan has surface but the tagging and route discipline are weak. Ten minutes means the plan is producing evidence the team cannot retrieve in the window the workflow allows. The first response to a slow time-to-find is not to add more capture or more storage; it is to improve indexing, tagging, and route discipline. Better tags on the existing capture usually close the gap. Once tagging is tight, the saturation point becomes visible — adding a new source does not move the time-to-find at all, and the source is a candidate for pruning rather than a candidate for the plan.',
        },
        {
          title: 'Pruning without weakening the workflows',
          body: 'Pruning the capture plan means removing sources that no workflow uses, sources that have been superseded by a better source, and sources that the project has stopped tagging consistently. The test is the workflow log: pull the last quarter of evidence retrievals from each workflow and see which sources contributed. A source with zero retrievals across the quarter, on a workflow that ran ten times, is not load-bearing. The pruning conversation tends to be uncomfortable because the source was placed deliberately at the start, but the discipline is to recognise that a capture plan written at mobilisation is a hypothesis, not a contract. Pruning is not about saving money, although it usually does; it is about keeping the plan defensible at audit and useful for the team. A plan with twenty sources that all serve workflows is stronger than one with forty, half of which run for habit.',
        },
        {
          title: 'Failure modes when nothing gets pruned',
          body: 'Three failure modes appear when pruning is skipped. Storage costs creep until the project quietly drops retention windows to fit the budget, which weakens the claims position years later. Tagging discipline collapses across all sources because the team cannot keep up, and time-to-find degrades on the sources that matter as well as the ones that do not. The capture plan becomes ceremonial — referenced at handover, never updated — and the team works around it rather than from it. Each of these is recoverable individually, but together they describe a plan that has lost its grip on the workflows. The remedy is the quarterly prune, which is short, structured, and unsentimental about sources that have stopped earning their place.',
        },
      ],
      checkpoint:
        'Are there sources on your capture plan that have not contributed to a named workflow this quarter, and what is stopping you removing them?',
      exercises: [
        {
          prompt:
            'Pull the last quarter of evidence retrievals from one workflow on your project. Tabulate which capture sources contributed and how often. Identify any source with zero contribution and propose whether to prune, redeploy, or retain.',
          expectedAnswer:
            'A typical exercise reveals that one or two fixed cameras contributed to almost every retrieval, two more contributed occasionally, and one contributed never. The recommended action is usually to redeploy the unused source to a workflow with no dedicated coverage, rather than prune outright, unless the workflow gap has already been closed by another source.',
        },
        {
          prompt:
            'Measure your current time-to-find for a recent workflow trigger. Identify whether the bottleneck is capture, indexing, or tagging. Propose the cheapest intervention that would halve the time-to-find.',
          expectedAnswer:
            'On most projects the bottleneck is tagging rather than capture. The cheapest intervention is to introduce a small set of mandatory tags — workflow, package, front, permit number — applied at capture rather than after the fact. The intervention costs almost nothing in tooling and pays back the first time a claims defence runs.',
        },
      ],
      recommendedReading: [
        { label: 'Evidence saturation: stop adding cameras', href: '/posts/evidence-saturation-stop-adding-cameras' },
        { label: 'The cost of evidence retrieval', href: '/posts/the-cost-of-evidence-retrieval' },
        { label: 'Evidence quality checklist', href: '/knowledge-base/evidence-quality-checklist' },
      ],
    },
    {
      slug: 'revisions-as-the-project-evolves',
      title: 'Revisions as the project evolves',
      summary:
        'Why a capture plan is a living document, how to schedule revisions so it stays aligned to the project, and which triggers should bring a section of the plan back to the table immediately.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'Why the plan drifts',
          body: 'A capture plan written at mobilisation is correct for week one. It begins to drift as soon as the project starts to evolve: a new package mobilises, a work front moves, scaffold reconfigures the 360 routes, the safety profile shifts as the structural phase ends and the fitout phase begins, the commercial position changes when a delay event lands and a claim becomes live. A plan that is not revised becomes a record of what the project intended at the start, not what the project needs now. The drift is gradual and largely invisible until the workflows start missing — a 360 walk that no longer captures the active front because the route has not been redrawn, a fixed camera that now points at finished work, a gate camera at a gate that closed last month. The team works around the drift until the workload becomes intolerable, then complains that the plan is broken when in fact the plan was correct and was simply never revised.',
        },
        {
          title: 'Scheduled revision cycles',
          body: 'A scheduled revision cycle keeps the plan current. Quarterly is the usual cadence on a multi-year contract, with shorter cycles in the first three months when the project shape is still settling and during major phase transitions. The revision is not a redrafting from scratch; it is a structured walk through the existing plan against the current programme, package register, and workflow log, with adjustments made and recorded. Most quarterly revisions touch four or five sources out of twenty — a 360 route redrawn for the new fitout floor, a fixed camera repointed as the cladding rises, a drone cadence stepped up because the external works moved into peak. The cumulative effect over a thirty-month contract is a plan that still describes the project, rather than one that describes the version of the project that existed at mobilisation.',
        },
        {
          title: 'Trigger-based revisions',
          body: 'Some revisions cannot wait for the next quarter. A new package mobilising with significant capture needs — a façade contractor whose progress claims will hinge on time-aligned views, a commissioning phase that needs MEP 360 routes — should bring the relevant section of the plan back to the table within the week. A significant safety event should trigger a review of the safety-related sources, because the workflow has just shown what it actually needs. A change order with cost or programme implications should prompt a check on whether the existing capture covers the new evidence horizon. A regulatory change — a new permit regime, a planning condition — should prompt the same. The discipline is to recognise the trigger early enough that the workflow does not run on a stale plan for any length of time. Naming the triggers in advance, on the plan itself, makes the response automatic rather than discretionary.',
        },
        {
          title: 'Recording revisions so they survive a handover',
          body: 'A revised plan that is not recorded is a plan that gets argued about at the next dispute. Each revision should produce a dated minute: which sources changed, why, and which workflow drove the change. The minute lives with the capture plan, not in a separate folder. Two years later, when a delay event has triggered a claim and the question becomes whether the relevant front was covered at the relevant time, the minute is what allows the project to answer. Without the minute, the project answers from memory, and the memory is unreliable. The minute also makes the plan auditable — a reviewer at handover can see how the plan evolved and why, which strengthens the closeout archive against any later challenge.',
        },
        {
          title: 'Failure modes from infrequent revision',
          body: 'The most common failure is annual revision on a multi-year project, which produces a plan that is twelve months out of date for most of its life. The second is event-only revision with no scheduled cadence, which means the plan is updated when something has gone wrong rather than to prevent the next thing going wrong. The third is undocumented revision — the plan changes informally, the sources move, the routes are redrawn, and no minute exists, so the audit trail breaks. Each of these is fixable by introducing a quarterly cadence with a named owner on the digital construction lead role, plus a short list of named triggers that bypass the cadence when the project changes shape between cycles.',
        },
      ],
      checkpoint:
        'When was your capture plan last revised, and what would trigger the next revision before the scheduled cycle?',
      exercises: [
        {
          prompt:
            'Schedule the next four revisions for a current capture plan. Assign the revision owner, the agenda, and the inputs. Identify which inputs the team currently does not collect routinely and how to start.',
          expectedAnswer:
            'A typical schedule places revisions at the start of each quarter, owned by the digital construction lead, with agendas built from the workflow log, the package register, and the safety incidents log. Inputs that are not routinely collected often include the time-to-find metric per workflow and the per-source contribution log, both of which need a small amount of tagging discipline before the first revision.',
        },
        {
          prompt:
            'List the trigger events that should bring a section of your capture plan back to the table immediately. For each trigger, name the section affected and the response window.',
          expectedAnswer:
            'A defensible list usually names five to seven triggers: new package mobilisation (capture sources within seven days), significant safety event (safety sources within forty-eight hours), change order with programme impact (claims sources within the change-order window), regulatory or permit change (compliance sources within the notice period), gate or access reconfiguration (logistics sources within the same week), and major phase transition (whole plan within the month).',
        },
      ],
      recommendedReading: [
        { label: 'Capture plan template', href: '/knowledge-base/capture-plan-template' },
        { label: 'Coverage gaps are decisions', href: '/posts/coverage-gaps-are-decisions' },
        { label: 'Digital construction lead view of RDI', href: '/posts/digital-construction-lead-view-of-rdi' },
      ],
    },
    {
      slug: 'handover-of-the-capture-plan',
      title: 'Handover of the capture plan',
      summary:
        'How the capture plan transitions at handover, what survives into warranty, and how to leave the owner with a record that is usable years later rather than a folder no one can navigate.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'What actually transitions at handover',
          body: 'At handover, the capture plan transitions. Most active capture stops, but the records produced under the plan should not. The closeout archive should retain the records the workflows produced, indexed against the plan, with the retention windows the plan specified. An archive that survives handover but the plan that produced it does not is hard to use — the records are present, but the structure that makes them retrievable is missing. Both should travel together. The handover deliverable is the plan, the archive, the revision minutes, and the index that maps records to workflows. The owner inherits a usable evidence base; the contractor closes the contract with a defensible position; the digital construction lead leaves a piece of work that has a half-life beyond the contract.',
        },
        {
          title: 'Continued capture during the defects period',
          body: 'Some capture continues into the warranty period, and the post-handover plan should specify it rather than leave it implicit. Limited fixed coverage during the defects period is common — a small number of cameras retained at low cadence to support warranty calls and refurbishment planning. Annual 360 walks against the as-built record give the owner a way to see how the building has changed without sending an inspection crew to every floor. Drone surveys at six- or twelve-month intervals are appropriate on projects with significant external scope, particularly infrastructure and energy assets where the surrounding environment can change. The post-handover capture plan is much smaller than the construction-phase plan, but it should still be a plan, with named workflows, named sources, and a named owner on the operations side. Without specification, the project tends to lose access to the captured base much sooner than the warranty needs, and the records become orphaned.',
        },
        {
          title: 'Indexing the archive against future use',
          body: 'A closeout archive is only useful if someone can navigate it years later. The index should be flat enough for a non-specialist to use — by date, by package, by workflow, by location — and deep enough to retrieve a specific record without scrolling. A common pattern is a top-level index by floor or by chainage, a mid-level index by package and date, and a leaf-level index by source and tag. The index lives with the archive and travels with it on any storage migration. The most expensive moment for the owner is the first time they need to retrieve a record from the archive after a personnel change on their side, and the index is what determines whether that retrieval takes minutes or weeks.',
        },
        {
          title: 'The owner´s long memory and the discipline at handover',
          body: 'A capture plan that handed over cleanly becomes the owner´s long memory of the project. A warranty issue, a refurbishment, a future tender, a regulatory inspection, a planning application for an extension — each benefits from being able to retrieve the captured record in minutes rather than rebuild it from drawings and memory. The cost of preserving the plan and the records together at handover is small relative to the value of the access years later. The discipline is to make the future access possible rather than implicit. That means a written handover protocol, a named recipient on the owner side, a tested retrieval — pick a record at random and find it together — and a documented retention schedule that survives any storage vendor change. Done well, the handover is the moment when the capture plan stops being a contractor artefact and becomes part of the asset.',
        },
        {
          title: 'Failure modes at handover',
          body: 'The most common failure is a handover where the records pass over but the plan does not, leaving the owner with files and no map. The second is a handover where the plan passes over but the index does not survive the storage migration, so the records are present but not retrievable. The third is the soft failure — the handover is technically complete, but no one on the owner side has been trained to use the archive, so the first warranty call goes unanswered and the archive falls into disuse. Each is preventable by treating the handover of the capture plan as a workflow in its own right, with a named owner, a checklist, a tested retrieval, and a follow-up six months in to confirm the owner is still using the plan.',
        },
      ],
      checkpoint:
        'For your last completed project, can you locate the capture plan, the revision minutes, and the archive together today, and could a non-specialist on the owner side do the same?',
      exercises: [
        {
          prompt:
            'Draft a handover protocol for your next project closeout. Include the deliverables, the named owner-side recipient, the tested retrieval, and the six-month follow-up. Identify which deliverables are not currently produced as a matter of course.',
          expectedAnswer:
            'A workable protocol lists the capture plan, the revision minutes, the indexed archive, the retention schedule, and a short user guide as deliverables. The named recipient is usually the asset manager or facilities lead. The tested retrieval picks two records — one recent, one early in the contract — and walks them through. The six-month follow-up confirms the records are still accessible and the index still works after any storage migration. Most projects do not currently produce the revision minutes or the user guide, and these are the first additions worth making.',
        },
        {
          prompt:
            'Specify the post-handover capture plan for a notional project of your scale during the two-year defects period. Name the sources, cadence, retention, and workflows, and cost it relative to the construction-phase plan.',
          expectedAnswer:
            'A typical specification retains two fixed cameras at the principal elevations on quarterly recording, an annual 360 walk against the as-built, and a six-monthly drone flight if the project has external scope. The workflows are warranty support, refurbishment planning, and any residual claims. Cost runs at five to ten per cent of the construction-phase capture spend, justified by the value of warranty defence and the option value of the long-memory archive.',
        },
      ],
      recommendedReading: [
        { label: 'The handover pack built from day one', href: '/posts/the-handover-pack-built-from-day-one' },
        { label: 'Closeout archives after the warranty period', href: '/posts/closeout-archives-after-the-warranty-period' },
        { label: 'Preservation and retention policy', href: '/knowledge-base/preservation-and-retention-policy' },
        { label: 'Capture plan template', href: '/knowledge-base/capture-plan-template' },
      ],
    },
  ],
}
