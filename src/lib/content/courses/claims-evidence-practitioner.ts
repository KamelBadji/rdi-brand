import type { Course } from '../types'

export const course: Course = {
  slug: 'claims-evidence-practitioner',
  title: 'Claims & Evidence Practitioner',
  level: 'Practitioner',
  estimatedMinutes: 110,
  summary:
    'A practitioner course for commercial managers, claims managers, and quantity surveyors on assembling defensible records before disputes are formalised, on running the workflows that keep evidence usable through the life of a claim, and on producing claim files that survive external legal review.',
  audience: ['Commercial manager', 'Claims manager', 'Quantity surveyor', 'Project director'],
  outcomes: [
    'Assemble a defensible claim file at the time of the event rather than retrospectively.',
    'Substantiate delay, weather, and subcontractor disputes with time-aligned records.',
    'Frame the evidence requirement against the contract form in use, whether NEC, JCT, FIDIC, or IChemE.',
    'Export evidence in formats that survive external legal review with metadata and chain of custody intact.',
    'Connect payment evidence to faster certification cycles upstream and downstream.',
    'Produce a numbered claim file with a defensible custody chain on a working timeframe.',
  ],
  lessons: [
    {
      slug: 'delay-claims-anatomy',
      title: 'The anatomy of a delay claim',
      summary:
        'How a delay claim is assembled, what evidence supports each part, how the contract form shapes the substantiation requirement, and where the most common failure modes lie.',
      estimatedMinutes: 20,
      sections: [
        {
          title: 'The four parts of a delay claim',
          body: 'A delay claim has four parts that have to hold together: the event, the activity affected, the path the activity sits on, and the milestone that moves as a result. Each part has its own evidence shape. The event is dated and described, with a contemporaneous note tied to the work front. The activity is identified by package, area, and trade, not by a generic description that could refer to multiple operations. The path is shown in the programme extract as it stood at the moment of the event, which is rarely the programme that exists when the formal claim is drafted six weeks later. The milestone is the contractual reference that determines the value of the time at large, whether sectional completion, key date, or practical completion. A claim that names the event but skips the path or the milestone tends to collapse on review because the assessor cannot connect the disturbance to the money. The discipline is to think of the claim file as a chain rather than a narrative. Each link is a discrete artefact with its own provenance. The narrative reads the chain back; it does not replace it. When the chain is short and continuous, the claim survives external review. When the chain has breaks, the breaks become the focus of the response, regardless of the merit of the underlying claim. Practitioners who have lost a claim usually report that the loss happened on a missing link rather than on the substantive argument.',
        },
        {
          title: 'How the contract form shapes the substantiation',
          body: 'The contract form determines how the four parts have to be assembled and on what timeline. Under NEC, the early-warning regime and compensation-event mechanism push the substantiation forward in time. The notice is short, the quotation arrives within weeks, and the project manager assesses against records that are expected to be live. A late submission under NEC is not just commercially weaker; under clause 61.3 it can extinguish the claim entirely. Under JCT, the relevant-event mechanism allows a longer assembly window, but the contractor still has to demonstrate the cause-effect link with reasonable diligence and provide such information as the architect or contract administrator may reasonably require. Under FIDIC, the time-bar at clause 20 is a hard procedural cliff that has been the subject of repeated reported decisions. Under IChemE for process plants, the substantiation requirement leans heavily on as-built records that are often weaker than they should be. The practical implication is that the claim file should match the contract clock. A NEC project that runs claims on a JCT cadence loses time. A JCT project that ignores the relevant-event mechanism loses standing. The team that knows the form and runs the file to the form is the team that does not lose claims on procedure.',
        },
        {
          title: 'Programme impact analysis and the evidence it consumes',
          body: 'Programme impact analysis is the technique that connects the event to the milestone. Time impact analysis, windows analysis, and as-planned versus as-built each have their adherents and their critics. What unites them is appetite for time-aligned evidence. The analyst needs the programme as it stood at the event date, the progress as it actually occurred, and the disturbance evidence that links the event to the activity on the critical path. Without all three, the analysis is contestable. Site capture closes the loop on the third. A 360 walk taken in the relevant week, a fixed-camera view of the work front, and a dated entry in the diary together form the disturbance evidence that the analyst can drop into the report. The analyst who has to invent the disturbance evidence from emails and weekly reports is producing a thinner report than the one who can cite a tagged clip and a programme extract. Prolongation cost calculations sit downstream of the impact analysis. They draw on time-related preliminaries, supervision, accommodation, and equipment standing time. The cost figures are rarely the point of contention; the point of contention is whether the time was caused. The discipline of the impact analysis is therefore the discipline of the prolongation case.',
        },
        {
          title: 'Common failure modes',
          body: 'The most common failure is retrospective assembly. The team opens the file when the formal notice goes out, by which point the captured base has rotated past the event and the programme has been updated several times. The second failure is a programme that was not preserved at the moment the event occurred, so causation has to be argued from a programme that has already absorbed the event. The third is correspondence not aligned to the same timeline, so the narrative has to be rebuilt from email rather than from a coherent record. The fourth is the overreach claim, where the contractor pushes a soft argument alongside a strong one and the assessor rejects the overall package on the weakest link. The remedy in each case is the same. Open the file at event moment. Preserve the programme at event moment. Keep the correspondence aligned to the same timeline. Do not bundle a weak argument with a strong one. The claim that survives is the claim that does not require apology.',
        },
      ],
      checkpoint:
        'For a delay event last week on your project, can you name the four parts and produce the evidence you have for each within an hour?',
      exercises: [
        {
          prompt:
            'Open the most recent delay claim you submitted or defended. Identify the contract clause that governs the notice period and write down whether the notice landed inside or outside that window.',
          expectedAnswer:
            'A strong response names the specific clause (for example NEC clause 61.3 or FIDIC clause 20.1), states the notice deadline calculated from the event date, and confirms whether the notice was timely with the supporting register entry.',
        },
        {
          prompt:
            'For a current programme, list which time-aligned evidence sources would have shortened the substantiation cycle on your last delay claim by more than a week.',
          expectedAnswer:
            'A strong response names at least three sources — for example a preserved programme extract at event date, a 360 walk of the affected front, and a dated diary entry — and links each to the part of the claim it would have shortened.',
        },
      ],
      recommendedReading: [
        { label: 'Delay event (glossary)', href: '/glossary/delay-event' },
        { label: 'Programme baseline (glossary)', href: '/glossary/programme-baseline' },
        { label: 'Delay claims and time alignment (resource)', href: '/resources/delay-claims-and-time-alignment' },
        { label: 'Claims evidence workflows (knowledge base)', href: '/knowledge-base/claims-evidence-workflows' },
      ],
    },
    {
      slug: 'weather-claims-substantiation',
      title: 'Weather claims substantiation',
      summary:
        'How to substantiate a weather claim with time-aligned site capture, a recognised meteorological source, and contemporaneous notes that hold against an assessor who has seen every shape of weather argument before.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'Why most weather claims fail',
          body: 'Most weather claims fail not because the weather did not happen but because the claim cannot show that the weather affected the activity on the critical path. A rainfall report shows that it rained. A schedule extract shows that an external activity was scheduled. Without a captured view of the work front during the period, the assessor has to take on faith that the activity could not proceed. That assessment loses more often than it wins, particularly in jurisdictions where the assessor is expected to apply a documented baseline of expected adverse weather days. The substantiation requires a third source — site capture — that closes the loop between the meteorological event and the disturbance to the activity. The other recurring failure is the use of unrecognised weather data. A reading from a phone application or an unattended weather station on the hoarding will not survive challenge if the assessor has access to a Met Office or equivalent national service record. The discipline is to use the recognised source from the start so the data origin is never the contested point. The contractor who builds the file on a recognised source from day one writes a much shorter response when the weather record is challenged.',
        },
        {
          title: 'The contractual frame for weather',
          body: 'The treatment of exceptionally adverse weather varies by contract form, and the framing of the claim has to match the form in use. Under JCT, exceptionally adverse weather is a relevant event but typically not a relevant matter, which means time but no money. Under NEC, weather is a compensation event only if it occurs less frequently than once in ten years, which puts the burden on the contractor to demonstrate the rarity against historical data. Under FIDIC, the position depends on which sub-clauses are amended and on the particular conditions of the contract. The first task on receipt of any weather event is therefore to read the relevant clause carefully and identify what the contract treats as weather, what threshold has to be crossed, and what notice is required. A weather notice that argues for time and money under a JCT contract that gives only time is a notice that wastes the project´s credibility. The discipline is to claim only what the contract permits and to evidence the claim in the form the contract envisages. The same discipline applies to subcontracts; an upstream weather entitlement is not automatically a downstream entitlement, and the back-to-back position has to be checked at the moment the notice is contemplated.',
        },
        {
          title: 'The three-source test',
          body: 'A defensible weather claim uses three time-aligned sources. The weather record from a recognised source — a national meteorological service rather than a phone app or an unattended station. The site capture showing the work front during the period, ideally with both fixed-camera coverage and a 360 walk on the day. The schedule extract showing the activity that was supposed to be in progress, with the predecessor and successor visible in the same view. When the three sources align, the claim narrative writes itself: the weather was there, the work front was empty, the activity was on the path. When the three sources do not align, the project knows the claim is weaker than it looks before the formal notice goes out. That is a useful signal, even when the answer is to withdraw the claim. The team that runs the three-source test as a habit on every wet day spends less time on weak claims and more time on strong ones. The pattern that emerges across a contract is also useful evidence in itself; a contractor who can show that the project ran the test consistently is harder to challenge on selective citation than one who only produces the test when it suits.',
        },
        {
          title: 'Building the file at the time',
          body: 'The file should open the day the stand-down occurs, not the day the notice goes out. A short note in the diary, a tagged clip from the relevant view, a printed weather record from the source the team uses by default, and a programme extract dated at the moment. Five minutes of work that day prevents five hours of reconstruction six months later. Most weather claim weakness is the gap between those two moments. A simple discipline that works on most projects is the wet-day register: a single page per event, completed at the close of the affected shift, with the four artefacts attached and a one-line entry in the daily diary that cross-references the register entry. The register sits in the claims evidence folder rather than the diary, but the diary points to it. When the formal notice is later considered, the register entries become the index of the claim. The claim is not invented at notice time; it is curated from a stack of contemporaneous entries that have been waiting for the decision. Practitioners who run the register report that the decision to claim or not to claim becomes substantially clearer when the cumulative evidence is visible at a glance.',
        },
      ],
      checkpoint:
        'Pick a wet day from this month. Can you produce the three sources, time-aligned, in under ten minutes, and identify the contract clause under which the entitlement would be claimed?',
      exercises: [
        {
          prompt:
            'For your current project, write down the recognised weather source the team will cite in any weather notice and the contract clause under which exceptional weather is treated.',
          expectedAnswer:
            'A strong response names a national meteorological service or comparable accepted source, identifies the relevant contract clause and threshold (for example NEC compensation event for once-in-ten-year frequency), and notes who on the team is responsible for retrieving the record.',
        },
        {
          prompt:
            'Open the wet-day register or equivalent for the past month. List any days where the three-source test cannot be completed and note what is missing.',
          expectedAnswer:
            'A strong response identifies the missing artefact for each day (weather record, site capture, or programme extract), states whether the gap is recoverable, and proposes a single change to close future gaps.',
        },
      ],
      recommendedReading: [
        { label: 'Weather record (glossary)', href: '/glossary/weather-record' },
        { label: 'Weather claim (glossary)', href: '/glossary/weather-claim' },
        { label: 'Weather claims and the record (resource)', href: '/resources/weather-claims-and-the-record' },
      ],
    },
    {
      slug: 'subcontractor-disputes',
      title: 'Subcontractor disputes: scope, attendance, quality',
      summary:
        'How to use the captured base to substantiate the three most common subcontractor disputes — scope of works, attendance, and quality of installation — and to keep the back-to-back position intact when the dispute moves upstream.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'Scope disputes',
          body: 'Scope disputes argue about what was included in the package. They surface most often at the boundary between trades — the point where mechanical handed off to electrical, or where structure handed off to fit-out — because that is where the bills of quantities and the specification are most likely to overlap or leave a gap. The captured base helps when scope is referenced to physical works in defined areas. A 360 walk taken at the start of the package, with the package boundary clear and the surrounding works visible, sits alongside the contract documents as a baseline. When the subcontractor argues that an item was outside scope, the walk and the documents together show what the area looked like at the start and what the agreed boundary was. The dispute resolves with reference to the record, not to memory or to a re-reading of the specification. The discipline that supports this is to capture the package boundary at the start of every package, and to include a screenshot or print of the relevant area in the package start meeting minutes. Five minutes of curation at start saves a fortnight of correspondence at the moment of dispute. The subcontractor who knows the package was captured at start tends to be more careful about scope arguments at the end.',
        },
        {
          title: 'Attendance disputes',
          body: 'Attendance disputes argue about who was on site, when, and for how long. They are the most common form of subcontractor dispute on labour-only or labour-and-plant packages, and they are the easiest to settle when the records exist. Gate records and personnel scans, tied to subcontractor and package, settle most of these in minutes. The discipline is to align attendance to the package programme: the certifier expects to see attendance during the period certified for, not just any attendance. A subcontractor who claims labour for a week in which the gate records show three days of presence is not arguing about attendance; they are arguing about the gate record. Cross-checks with site capture at the work front close the gap further. A fixed-camera view of the relevant area, sampled at intervals during the disputed period, shows whether the labour was present and active. Where the package is paid on a measured basis, the cross-check is between attendance, site capture, and the measured quantity. A subcontractor whose attendance does not match the certification request tends to withdraw the dispute when the records arrive. The records have to exist before they can be produced; the workflow that captures them is the workflow that resolves the dispute.',
        },
        {
          title: 'Quality disputes',
          body: 'Quality disputes argue about how the work was installed, and they tend to surface late in the contract when remedial cost is highest. The captured base supports these when 360 walks ran through the package at the right intervals. A walk before close-out, a walk during installation, and a walk at handover give the project a defensible visual record at three points in time. The walks do not replace the inspection regime or the quality assurance documentation; they sit alongside them and provide the visual reference that the documentation lacks. When a quality issue surfaces later, the question is no longer what the work looked like; it is what the disposition was. That is a much shorter conversation, and it tends to resolve in the project office rather than in expert reports. The discipline that supports this is to schedule the three walks into the package programme so they happen by default rather than by exception. The walks are short and inexpensive. The question of whether they were done is settled by the existence of the file, not by a search through someone´s photo roll. On packages where workmanship is a known risk — wet trades, secondary steelwork, fit-out finishes — the walk discipline is the difference between a defensible record and a forensic exercise.',
        },
        {
          title: 'Holding the back-to-back position',
          body: 'A subcontractor dispute that resolves at the project tier is the cheap version. The expensive version is the dispute that survives the upstream certification and arrives at the main contract as a knock-on claim against the owner. Holding the back-to-back position requires that the evidence used downstream is the same evidence that would be used upstream. A scope argument that is settled with the subcontractor on the basis of a 360 walk and a contract extract should be documented in a form that can move upstream if the scope question turns out to belong to the owner rather than the subcontractor. An attendance dispute that uses gate records on the subcontract side should use the same gate records on the main contract side. The discipline is to write the resolution in the form a future reviewer can use, even when the immediate audience is internal. Practitioners who have lost back-to-back position usually report that the loss happened in the form of the resolution rather than in the substance. A note in the cost report that says the dispute was settled is not the same as a file that records what the evidence was, who agreed it, and on what terms. The latter survives the audit; the former does not.',
        },
      ],
      checkpoint:
        'For a current package, name one dispute that could plausibly arise, the three captured artefacts you would assemble to settle it, and how you would frame the resolution to preserve the back-to-back position.',
      exercises: [
        {
          prompt:
            'Walk one current package and identify whether the package boundary was captured at start. If not, capture it now and file the result.',
          expectedAnswer:
            'A strong response describes the captured boundary, names where the file is stored, and identifies any package where the start-of-package capture is now missing and cannot be retrofitted.',
        },
        {
          prompt:
            'Open the most recent attendance dispute on your project. Identify whether the gate record and the site capture would have settled it and how long that would have taken.',
          expectedAnswer:
            'A strong response cites the records that existed, names the gap if any, and estimates the time saved against the time the dispute actually took.',
        },
      ],
      recommendedReading: [
        { label: 'Subcontractor attendance (glossary)', href: '/glossary/subcontractor-attendance' },
        { label: 'Gate record (glossary)', href: '/glossary/gate-record' },
        { label: 'Gate records as commercial evidence (resource)', href: '/resources/gate-records-as-commercial-evidence' },
        { label: 'Subcontractor performance workflows (knowledge base)', href: '/knowledge-base/subcontractor-performance-workflows' },
      ],
    },
    {
      slug: 'evidence-export-for-legal-review',
      title: 'Evidence export for legal review',
      summary:
        'How to export evidence in formats that a solicitor, expert, or court will accept, with the metadata and chain of custody intact, and how to do it on a working timeframe rather than under pressure.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'Formats that survive review',
          body: 'External legal review prefers stable, widely supported formats. Video clips in standard codecs such as H.264 or H.265 in an MP4 container; not proprietary streaming formats. Images with embedded metadata preserved, ideally in JPEG or PNG with EXIF intact. PDFs of correspondence, programme extracts, and certifications, generated from the source rather than scanned from print, with the source application visible in the document properties. The default export from a viewer is rarely the right format for legal review; many viewer exports re-encode and strip metadata in the process. The team should know which export option to choose, and the policy should be written down so the choice is consistent across the project. Where a clip will be cited in expert evidence, the expert should be consulted on format before the export rather than after. Some experts have a preferred working format that differs from what the platform produces by default. Producing the clip in the wrong format and re-exporting later adds steps to the chain of custody that a competent opposing expert will explore. The project that exports right the first time tends to face fewer questions in cross-examination than the one that produces three versions of the same clip.',
        },
        {
          title: 'Metadata preservation',
          body: 'Metadata is what tells the reviewer when a clip was captured, on what device, by what account, and at what location. Strip the metadata and the clip becomes one step weaker as evidence. The opposing expert will note that the clip is a derivative; the original may then be requested with a formal disclosure step that the project did not budget for. The export tool should preserve metadata by default. Where metadata cannot travel with the file — for example where the format does not support the field, or where the export pipeline strips it — an accompanying export report should record the metadata separately and link to the file by hash. The reviewer should never have to ask whether the file is the original or a derivative. The project that publishes its export policy in the project execution plan answers that question once for every clip. The discipline extends to the original source. The reviewer or expert may ask for the unedited source as a check against the exported clip; the project should know where the source is, who has access, and how long it will be retained. A retention policy that ends before the dispute is resolved is a policy that loses claims. The retention period for evidence likely to feature in claims should extend to at least twelve months past practical completion on most projects, and longer where the limitation period requires it.',
        },
        {
          title: 'Chain of custody on export',
          body: 'Each export adds a step to the chain of custody. The system records who exported, when, to what destination, and to whom. The export bundle should include a custody report alongside the files, with hashes of each file as exported and a record of the export operator. When a clip leaves the platform on an email, the email itself becomes part of the chain; the email header, the sender, and the recipient form the next link. When a clip is uploaded to a disclosure portal, the portal upload receipt is the next link. The discipline is to know the chain still holds at the point of review, not to rebuild it under pressure when an opposing party challenges the provenance of a single clip. Practitioners who have worked through a contested chain of custody report that the contest is rarely about the clip itself; it is about a missing step in the chain. A clip that moved from platform to laptop to email to thumb drive to expert may be authentic, but the chain has four links any of which can be queried. The simpler chain — platform to disclosure portal, with hashes and timestamps — is the chain that survives. The discipline is to choose the simpler chain at export time, even when the urgent option is to email a clip to the solicitor and tidy the chain later.',
        },
        {
          title: 'Operating under time pressure',
          body: 'Legal review timelines are rarely generous. The expert is briefed late, the disclosure window is short, and the clips that matter are scattered across multiple projects. The discipline that holds under time pressure is the discipline that was rehearsed during quieter weeks. A project that has produced one practice export bundle on a non-contentious package will produce the contested export bundle in hours rather than days when the request lands. The practice bundle should include the same custody report, the same metadata preservation, and the same format choices as the live bundle would. The team rehearses the workflow rather than inventing it under pressure. The other discipline that helps is to keep the export request channel narrow. Requests should land with the named export operator, not with whichever team member happens to read the email first. The named operator runs the workflow, logs the export in the custody register, and confirms back. A scattered export practice produces a scattered chain of custody; the chain mirrors the workflow that created it. Practitioners who have managed disclosure on a difficult dispute report that the named-operator discipline saved more time than any tooling change.',
        },
      ],
      checkpoint:
        'For a clip in a current dispute, can you produce an export with metadata, a custody report, and an accompanying retention statement in under twenty minutes?',
      exercises: [
        {
          prompt:
            'Run a practice export on a non-contentious clip from your project. Inspect the resulting bundle and confirm whether the metadata, the format, and the custody report meet the requirements above.',
          expectedAnswer:
            'A strong response confirms the codec and container, lists the metadata fields preserved, names the custody report fields, and identifies any gap that would need to be closed before a live export.',
        },
        {
          prompt:
            'Identify the named export operator on your project and the retention policy applied to claims-related evidence. If neither is documented, draft the entries for the project execution plan.',
          expectedAnswer:
            'A strong response names the operator, the retention period (with reference to the relevant limitation period), and the location of the policy in the project execution plan.',
        },
      ],
      recommendedReading: [
        { label: 'Chain of custody (glossary)', href: '/glossary/chain-of-custody' },
        { label: 'Evidence export (glossary)', href: '/glossary/evidence-export' },
        { label: 'Evidence export for court (resource)', href: '/resources/evidence-export-for-court' },
        { label: 'Chain of custody for construction (knowledge base)', href: '/knowledge-base/chain-of-custody-for-construction' },
      ],
    },
    {
      slug: 'payment-evidence-and-cycles',
      title: 'Payment evidence and certification cycles',
      summary:
        'How to use the captured base to support payment applications and accelerate certification, both upstream from the owner and downstream to subcontractors, and how to read the cycle as a leading indicator of dispute risk.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'The case for evidence-attached applications',
          body: 'A payment application that arrives with evidence is faster to certify than one that arrives as a number alone. The evidence does not need to be exhaustive; it needs to be enough that the certifier does not have to ask for more. A short evidence pack — site capture of the work front, a 360 walk through the package, a programme extract showing the period certified — turns a fortnight of correspondence into a same-week certification. Multiplied across the contract life, the saving is material. On a typical contractor balance sheet, a two-week reduction in days sales outstanding across all certifications translates into working-capital savings that are visible at the portfolio level. The discipline is to think of the evidence pack as a procurement of certifier time. The certifier has limited time per application; the application that arrives in a form that uses that time efficiently is the application that gets certified first. The application that arrives without evidence is the application that gets the queries, which means the application that gets paid last. The contractor who runs the discipline at scale finds that the application reviewer becomes a partner rather than a gate. The contractor who treats certification as adversarial finds the cycle stretches month on month.',
        },
        {
          title: 'Subcontractor certifications and the back-to-back cycle',
          body: 'The same discipline applies downstream. A subcontractor who attaches evidence to their valuation makes life easier for the certifier and tends to be paid faster. The contractor who runs the workflow at scale across all packages tends to find that the cycle smooths and the disputed certifications drop. The discipline costs nothing extra to the project; it uses the captured base that already exists. The downstream cycle should also feed the upstream cycle. The contractor who has assembled the subcontractor packs has half of the upstream pack already in hand, and the upstream certifier benefits from seeing a coherent line of evidence rather than disconnected items. The cycle is a system, not a series of isolated transactions. Where the contract envisages pay-when-paid or pay-when-certified provisions on the subcontract side, the discipline becomes more important rather than less. A subcontractor whose valuation is tied to upstream certification has a direct interest in the upstream pack being strong; a contractor who shares the cadence of evidence with the subcontractor tends to find the subcontract relationship survives the project. The portfolio that runs this cycle as a default has a measurable advantage on cash conversion over the portfolio that runs it as an exception.',
        },
        {
          title: 'When the cycle breaks',
          body: 'Payment cycles break in two places. The certifier disagrees with the quantity, and the application has to be reworked. The certifier disagrees with the quality, and the application has to be paused. Both breaks are addressed by evidence. A captured 360 walk showing the installed work, a clip of the work front during the period, an attendance record matching the labour claimed. The break still happens, but it resolves in days rather than weeks. The third type of break, less commonly discussed, is the timing break: the certifier signs the certificate but the payment is delayed downstream of certification by a treasury or financing process that the project does not control. The project cannot solve the timing break with evidence, but it can stop creating its own delays by closing the certification window cleanly. A certificate that issues on day 14 of a 30-day cycle is a certificate that does not need to take 28 days. The discipline that the contractor controls is the front half of the cycle. The discipline of getting the certificate clean is the discipline of writing the application clean. Practitioners who have run the cycle at scale report that the back half tends to follow the front; a clean front half does not guarantee a clean back half, but a messy front half almost always produces a messy back half.',
        },
        {
          title: 'Reading the cycle as a leading indicator',
          body: 'The certification cycle is also a leading indicator of dispute risk. A cycle that lengthens month on month, even when each individual delay seems small, is a cycle that is heading towards a formal dispute. The contractor who reads the cycle data at the portfolio level rather than the project level catches the pattern earlier. A project where the certifier has started asking for the same evidence twice is a project where confidence has eroded; a project where the certifier signs without query is a project where the relationship is healthy. The cycle data sits in the cost report whether the project chooses to read it or not. The discipline is to read it. Where the cycle is lengthening, the response is to invest more evidence into the application rather than less, and to ask the certifier directly what would shorten the cycle. The certifier who has been asked tends to be more candid than the one who has not. The project that asks early heads off the dispute that the project that does not ask is heading into. The cost of asking is a thirty-minute conversation; the cost of not asking is the cost of the dispute. The trade is straightforward when it is framed at the right altitude.',
        },
      ],
      checkpoint:
        'For the next certification cycle, what would a one-page evidence attachment look like, and what does the cycle length tell you about the relationship?',
      exercises: [
        {
          prompt:
            'Pull the certification cycle times on your current project for the last six months. Identify whether the trend is shortening, steady, or lengthening, and write a one-line cause hypothesis.',
          expectedAnswer:
            'A strong response cites the actual cycle times, names the trend, and offers a specific cause hypothesis (for example a change in certifier, a quality dispute on a particular package, or a query pattern around quantities).',
        },
        {
          prompt:
            'Draft the one-page evidence attachment template for your next application. List the four artefacts it will include.',
          expectedAnswer:
            'A strong response names site capture of the work front, a 360 walk through the major packages, a programme extract for the period, and the measured quantity backup, with a note on where each artefact is sourced.',
        },
      ],
      recommendedReading: [
        { label: 'Payment evidence (glossary)', href: '/glossary/payment-evidence' },
        { label: 'Progress claim (glossary)', href: '/glossary/progress-claim' },
        { label: 'Payment applications with evidence attached (resource)', href: '/resources/payment-applications-with-evidence-attached' },
      ],
    },
    {
      slug: 'building-the-claim-file',
      title: 'Building the claim file',
      summary:
        'How to assemble a claim file that survives external review: a numbered evidence index, a clear narrative, a defensible chain of custody, and a working definition of when the file is ready to release.',
      estimatedMinutes: 20,
      sections: [
        {
          title: 'The numbered evidence index',
          body: 'A claim file with a numbered evidence index is qualitatively different from a claim file without one. The reviewer can move directly to the item being discussed. The narrative references the index. The cross-checks become navigable. Building the index is the discipline of taking each piece of evidence — clip, walk, weather record, programme extract, correspondence, certification, instruction — and giving it a stable reference. The reference does not change once it is assigned, even when items are added later; new items take new numbers rather than displacing the existing sequence. The index should record for each item the source, the capture date, the export date, the export operator, the file format, and the file hash. The index is a working document that grows through the life of the claim; it does not appear in finished form on the day the claim is submitted. The file is judged partly on this discipline because the discipline is what an external reviewer sees first. A reviewer who opens a file and finds a clean index forms a different first impression than the reviewer who finds a folder of files with timestamped names. The first impression is not determinative, but it sets the tone of the assessment.',
        },
        {
          title: 'The narrative',
          body: 'The narrative is the document that walks the reviewer from the event to the milestone. It is short — usually under ten pages — and structured around the four parts of a delay claim: event, activity, path, milestone. Each assertion is referenced to the index, with the reference inline rather than in a footnote so the reviewer can move from claim text to evidence in a single step. The narrative does not try to win the argument by force of language; it tries to make the reviewer agree because the references hold up. A narrative that runs longer than ten pages usually contains weaker assertions hiding among stronger ones. The discipline of writing short is the discipline of holding the strongest version of the case rather than every version. Where the claim involves multiple events, each event has its own narrative segment with its own four parts. The temptation to bundle is the temptation to weaken. A claim that bundles three events into one narrative invites the reviewer to reject the package on the weakest event; a claim that separates the three lets the reviewer accept the strong two and reject the third without affecting the rest. The structure is not cosmetic; it is the architecture of the assessment outcome.',
        },
        {
          title: 'The defensible chain',
          body: 'Each item in the index has a chain of custody from capture to inclusion in the file. The system records who captured, who exported, and how the item reached the file. The custody report is included with the file, not held separately. When the reviewer opens an item, the chain is visible. When the reviewer asks how the item arrived, the answer is on the page rather than in a follow-up email. The work to make this visible is small at the time and large at the moment of challenge. The chain should also be defensible against a hostile examination. A reviewer who is sympathetic will accept a chain with one or two informal links; a reviewer who is hostile will not. The discipline of building the chain as if a hostile reviewer will see it is the discipline that produces a chain that survives across both audiences. Practitioners who have given evidence in arbitration or court report that the questions almost always concentrate on the chain rather than on the underlying observation. The clip itself is rarely contested; the path the clip took to reach the bundle is. The project that has documented the path has answered most of the cross-examination before it begins.',
        },
        {
          title: 'Knowing when the file is ready',
          body: 'A claim file is never finished; it is released. The decision to release is a commercial decision that the team has to make against incomplete information. The working definition of ready that holds up across most claims has four conditions. The four parts of the claim are evidenced and indexed. The narrative is under ten pages and references the index inline. The chain of custody is intact for every cited item. The retention policy on the source evidence extends past the expected dispute window. When all four conditions are met, the file can be released; when any one of them is not, the release should wait until it is. The fifth informal condition that experienced commercial managers add is that the team has read the file in the form an opposing party would. A file that is read internally by the team that wrote it tends to feel stronger than it is. The team that has the file read by a colleague who was not involved in the underlying events catches the soft assertions before the opposing party does. The colleague´s questions are the questions the opposing party will ask. Answering them in advance is cheaper than answering them in adjudication. The file that has been pressure-tested before release is the file that holds.',
        },
      ],
      checkpoint:
        'For a current or recent claim, can you produce a numbered evidence index, a ten-page narrative, and a custody report in under a working day?',
      exercises: [
        {
          prompt:
            'Open the most recent claim file on your project. Apply the four ready conditions to it and identify which are met and which are not.',
          expectedAnswer:
            'A strong response names each of the four conditions, identifies the gap on any unmet condition, and proposes a specific action to close the gap before release.',
        },
        {
          prompt:
            'Ask a colleague who was not involved in the underlying events to read the narrative and list the three softest assertions. Note how you would harden each.',
          expectedAnswer:
            'A strong response cites the three soft assertions in the colleague´s words, names the additional evidence or rephrasing that would harden each, and confirms whether the change has been incorporated.',
        },
      ],
      recommendedReading: [
        { label: 'Claim substantiation (glossary)', href: '/glossary/claim-substantiation' },
        { label: 'Time-aligned record (glossary)', href: '/glossary/time-aligned-record' },
        { label: 'Claims evidence workflows (knowledge base)', href: '/knowledge-base/claims-evidence-workflows' },
        { label: 'Claims evidence (use case)', href: '/use-cases/claims-evidence' },
      ],
    },
  ],
}
