import type { Course } from '../types'

export const course: Course = {
  slug: 'rdi-for-owners',
  title: 'RDI for Owners and Owner Representatives',
  level: 'Executive',
  estimatedMinutes: 96,
  summary:
    'A short executive course for owners, owner representatives, project sponsors, and lender or investor reps. It covers how to read a project from the captured record, how to specify evidence at signing rather than at dispute, how to translate that evidence into programme confidence, and how to run portfolio command across multiple developments.',
  audience: [
    'Owner',
    'Owner representative',
    'Project sponsor',
    'Lender or investor representative',
    'Asset manager',
  ],
  outcomes: [
    'Translate the captured record into a defensible programme position at board level.',
    'Receive monthly reporting and lender draws without chasing for backup.',
    'Use evidence to govern claims, change, and stage-gate decisions from the owner side.',
    'Specify retention, custody, and access rights for handover and the warranty period at contract stage.',
    'Run a command view across a portfolio so attention follows divergence, not the loudest project.',
  ],
  lessons: [
    {
      slug: 'the-owners-question',
      title: "The owner's question",
      summary:
        'Every owner ends up asking the same question in different forms. The discipline of this lesson is to make the answer defensible, calibrated, and producible on demand from the captured record, at the level of summary the audience actually needs.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'Orient: one question, restated',
          body: 'An owner asks one question, restated in many forms. Where is my project against where it should be, and how confident am I in the answer. The phrasing varies with the audience. A lender asks it as draw certainty. A board asks it as practical-completion confidence. An asset manager asks it as the date the building can be tenanted. An investment committee asks it as the date returns begin. Underneath, the ask is the same. The owner wants a defensible position at the level of summary they can act on, supported by something more durable than a status colour and a verbal commentary in the margins of a slide deck. Most projects answer that question with recollection, optimism, and selective screenshots that the project director assembled the night before. That is why the owner ends up asking it again the following week, often of a different person, and why the answer drifts between asks. The drift is not dishonesty. It is the natural behaviour of any system that produces its answers from memory under deadline pressure. The remedy is not to push harder for assurance; it is to change where the answer comes from. When the answer is produced from a standing record at an agreed cadence, the same question yields the same answer, and the owner can spend their attention on the parts of the project that warrant it rather than re-establishing the position from scratch each time.',
        },
        {
          title: 'Owner-frame: what defensible looks like',
          body: 'A defensible answer is one that would survive a competent audit. It cites the captured base, the programme baseline, the safety profile, and the commercial position. It uses ranges where ranges are honest. It admits the things that are not yet clear and names the date by which they will be. It is offered at the right grain: a sponsor does not need a trade-by-trade view, but they should be able to walk down two levels if they wish. A lender wants stage completion against the agreed schedule with backup that ties to drawn funds. The discipline is not to manufacture certainty; the discipline is to make uncertainty legible. An owner who sees uncertainty named tends to extend more credit to the rest of the answer. There is a temptation, particularly under pressure from a board or a lender, to round confidence up rather than down. The temptation is short-sighted. A confidence band that proved too narrow is far more damaging at the next reporting cycle than a wider band held now would have been. The owner who insists on calibration at every cycle pays a small social cost in the room and earns durable credibility outside it. Calibration over time is the asset, not the precision of any single reading. A board, a lender, or an investment committee that has watched an owner´s confidence position move predictably with reality over several quarters will extend latitude on the next piece of bad news that the same owner´s opposite number will have to fight for.',
        },
        {
          title: 'Workflow: how the answer is produced',
          body: 'The answer is produced by a standing routine, not a heroic week of preparation. Programme position is reconciled against site capture at the agreed cadence: a 360 walk through the critical areas, a drone capture of the structure as a whole, a fixed-camera view of the work fronts that matter to the next milestone. Safety closeout rates are pulled from the live record. Commercial exposure is summarised against the current notice and claim register. Quality is summarised by NCR status and disposition rate against the period. Stage-gate progress is summarised against the agreed schedule with the conditions for the next gate named. The reporting pack is assembled in the same shape every month so the reader learns where to look and the team learns what to keep current. The captured base is the raw input. The discipline of the routine is what turns it into something the owner can sign at the front. The routine has a cost. It also has a payoff that compounds: the team that runs it for two cycles is half the work for the third, because the gaps that surfaced in the first two have been closed and the cadence is established as the way the project speaks to its owner. By the second year the routine is invisible to the people who run it, which is the goal — administrative discipline that is felt as cost while it is being installed and as ordinary working method once it is.',
        },
        {
          title: 'Governance: the relationship changes',
          body: 'When the owner can produce a defensible answer on demand, the relationship between owner, contractor, and lender changes shape. Conversations move from positional to factual. Disputes that would have escalated tend to resolve in the room because the record is on the table rather than competing memories of a meeting six months ago. Approvals move faster because the evidence is already attached to the request rather than promised in a follow-up email that nobody chases. Lender draws walk through with fewer side-calls because the figures in the certificate trace cleanly to the same record the contractor uses internally. The change is not about hardware, and it is not about adding cameras. It is about the shape of the conversation between people who are responsible for funding and people who are responsible for delivery. The contractor who feels surveilled performs worse, not better. The contractor who feels their record is read fairly tends to propose more transparently, because there is less to gain from optimism and less to lose from honesty. The owner sets that tone by how they read the record back. The first time the owner cites the captured base to support a contractor´s position rather than to challenge it, the framework for every subsequent conversation is set. The record becomes a shared instrument rather than a partisan one, and that is the condition under which most of the latent value of RDI on the owner side is actually realised.',
        },
        {
          title: 'What good looks like',
          body: 'Good is when the owner can answer their own question without ringing the project director. The board pack arrives on the agreed Friday in the agreed format. The lender draw walks through without an evidence dispute. The asset manager has a credible handover date with a confidence band attached. Where the project is in trouble, the trouble is named with the same calm as everything else, with the captured-base references that show the trouble is real and the recovery plan that names the response. That is the test. If the bad news arrives in the same shape as the good news, the system is working. If bad news arrives only verbally and only late, the system is still being run on the energy of individuals, and it will fail under pressure on the project where it matters most. The portfolio over a decade is the test, not any single quarter. An owner who runs the discipline tends to find that the worst projects in their portfolio are the ones that surfaced earliest, were named honestly, and were either fixed in time or contained at lower cost than the alternative. The projects that produced the worst surprises were almost never the ones the owner had been paying the most attention to; they were the ones whose reporting had been confidently green for too long without a captured-base spot-check to calibrate the colour against the record. That asymmetry is the case for the discipline, made in the language of outcomes rather than tools.',
        },
      ],
      checkpoint:
        'For your last project review, would the owner accept the answer as defensible if an external auditor walked in the next morning and asked for the backup?',
      exercises: [
        {
          prompt:
            "Take the most recent monthly report you signed off as owner or owner rep. Identify the three claims in that report you would struggle to substantiate from the captured record if asked tomorrow. Note what evidence you would need to make each one defensible.",
          expectedAnswer:
            "Most owners can name claims of the form 'Block A is on programme', 'Safety performance is satisfactory', or 'We are tracking to budget' that rest on commentary rather than a record. The exercise lands when the reader writes down, for each claim, the artefact (a 360 walk, a closeout rate, a notice register extract) that would make it survive audit, and notices that the gap between the claim and the artefact is usually a workflow gap rather than a capture gap.",
        },
        {
          prompt:
            "Draft the one-paragraph answer you would give a lender's credit committee about programme position next quarter. Mark every sentence as either 'evidence-backed', 'inference', or 'commitment'.",
          expectedAnswer:
            "A clean answer separates what the record shows from what the team infers and what the team is committing to deliver. If most sentences are commitments without evidence underneath, the lender is being asked to extend credit on assertion. The exercise is a calibration tool, not a writing exercise: the owner who marks honestly tends to rebalance the next monthly cycle toward more evidence and fewer commitments.",
        },
      ],
      recommendedReading: [
        { label: 'Owner representative view of RDI', href: '/resources/owner-representative-view-of-rdi' },
        { label: 'OAC meetings with evidence not anecdote', href: '/resources/oac-meetings-with-evidence-not-anecdote' },
        { label: 'Confidence bands and honesty', href: '/resources/confidence-bands-and-honesty' },
        { label: 'Learning path: executive', href: '/knowledge-base/learning-path-executive' },
      ],
    },
    {
      slug: 'reporting-without-chasing',
      title: 'Reporting without chasing',
      summary:
        'How an owner gets the reporting they need without pursuing it. A standing pack drawn from the captured base, designed once, replaces the monthly negotiation about what was supposed to be in the deck and frees attention for the questions that actually matter.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'Orient: why owners chase',
          body: 'Owners chase because the reporting they receive is one of three things: too late, too narrow, or too rehearsed. By the time the deck arrives, the question has already been answered by phone calls, site visits, and inferred mood. Routine items are rewritten each month from scratch, which is expensive for the project team and unstable for the owner because the same number arrives in slightly different forms. Bespoke questions arrive late in the cycle and are answered with whatever is to hand on the day. The chase is not a discipline problem on either side; it is a design problem in the reporting system itself. A project that produces its monthly report by interviewing the leads each month is producing a memoir, not a report. The figures depend on who happened to be available, what they happened to remember, and how the question was framed in the moment. The owner who reads three months of those reports next to each other will find the same package described differently each time, not because anyone is lying but because the system has no spine. The cure is not to chase harder. The cure is to change what the report is and how it is produced. A reporting system that draws on a standing record does not produce a memoir; it produces a reading of the record, which is a different artefact with different properties.',
        },
        {
          title: 'Owner-frame: the standing pack',
          body: "A standing pack contains the same shape every month, drawn from the evidence the project already produces. Programme position with site capture references for the work fronts that matter. Safety summary with closeout rates for the period and a short list of unresolved items. Commercial position with notice and claim register status, including any positions that changed during the period. Quality and design verification highlights, with NCR disposition rates and any deviations from the design baseline that are material to the next gate. Stage-gate progress against the agreed schedule, with the named conditions for the next gate. An executive summary at the front for the reader who only has ten minutes. An appendix with the captured-base references behind every figure, so an auditor can walk from the headline to the source without a side-call. The shape stays the same so the reader learns where to look. The contents change because the project changes. Most of the chasing disappears, because the owner already knows what is in the pack and where each figure comes from. The bespoke questions that remain tend to be specific and consequential, which is what bespoke questions are for. The pack does the routine work so the conversation can be about the things that are not routine. Over a year, the pack also becomes a record of how the project actually moved: a stack of twelve packs in the same shape is a more honest history of the project than any retrospective written at the end, because every figure in it had to survive the moment it was first reported.",
        },
        {
          title: 'Workflow: design once, run on cadence',
          body: 'A standing pack is designed once at mobilisation, between the owner, the project director, the commercial lead, and whoever produces the underlying record. The design specifies the sections, the cadence, the source of each figure, the confidence-band convention, the format of the appendix that carries the captured-base references, and the named owner of each section. The first three months tend to surface the gaps: a figure with no clean source, a section that the audience never reads, an appendix that is too dense, a confidence band that nobody trusts because it is always the same colour. The pack settles into its production form by month four. After that, the pack is a piece of plumbing rather than a monthly debate. The same pack underpins the lender draw, the board reporting, and the investor update with very little re-work, because the underlying figures are the same. The pack is reviewed against decisions every quarter: sections that did not change a decision in three months are candidates for pruning, sections that decisions had to work around are candidates for revision. The pack is a living tool that is allowed to change, but it is not allowed to grow casually. Every section earns its place. The owner´s discipline at that quarterly review is to be willing to remove sections, not just to add them, because a pack that only grows is a pack that the audience eventually stops reading in detail.',
        },
        {
          title: 'Governance: lender draws and board reporting',
          body: 'The same pack underpins board reporting and lender draw certificates with very little re-work, which is the point of designing it once. A draw certificate that cites the captured base for stage completion tends to walk through without a side-call, because the lender´s monitor can trace the figure back to the same record the contractor and the owner are reading. A board pack that uses the same numbers as the draw avoids the awkwardness of two stories about the same project, where the board is told a confident version and the lender is told a hedged one. Investors reading quarterly updates are reading from the same base. The discipline is to use one record, summarised at different grains for different audiences, rather than to write the project twice. The audit trail is the pack and its appendix. The appendix is not theatre; it is the part of the document that lets the figures be challenged. An owner who runs this discipline finds that the cost of the next funding cycle drops, because the diligence pack is most of the way there before the question is asked, and the lender´s monitor is the same person who has been reading the standing pack all along. Refinancing, syndication, and disposal events all become cheaper to staff because the underlying record has been kept current rather than reconstructed under deadline pressure.',
        },
        {
          title: 'Failure modes',
          body: 'Two failure modes are common, and both are correctable. The first is the pack that grows every month because nobody is willing to remove a section that someone once asked for. Sections accumulate. The deck becomes a hundred pages. The reader stops reading the back half. The pack drifts back into a memoir, because the only sections anyone trusts are the ones that get attention, and the ones that get attention are the ones at the front. The second failure mode is the pack that becomes the project, where the team optimises the figures for the deck rather than the work. The figures look better, but the project does not. Both are corrected the same way: review the pack against decisions taken in the last quarter, not against the activity of producing it. Sections that did not change a decision are candidates for removal. Sections that decisions had to work around are candidates for revision. The pack should be a tool the owner uses, not a monument the project maintains. An owner who runs that review every quarter keeps the pack honest, and keeps the team focused on the work rather than on the artefacts that describe the work. The third failure mode, less common but worth naming, is the pack that becomes a substitute for site presence. Reading the pack is not the same as walking the site, and the discipline is not to let one replace the other; the pack is meant to make site visits more productive, not to remove the need for them.',
        },
      ],
      checkpoint:
        'Could your project produce a standing reporting pack today that the owner would adopt as the default for both board reporting and lender draws?',
      exercises: [
        {
          prompt:
            "Sketch the table of contents for your standing pack. For each section, name the source of the underlying figure and the captured-base artefact that would let an auditor trace it.",
          expectedAnswer:
            "A workable sketch has five to seven sections: programme position, safety, commercial, quality and design, stage-gate progress, plus a short executive summary and an appendix of references. Each figure should trace to a source that is produced anyway: a 360 walk, a closeout rate, a register extract. Sections without a traceable source are the ones to redesign, and the absence of a traceable source is usually the reason the section is the one the owner never trusts.",
        },
        {
          prompt:
            "Take the last twelve months of bespoke questions you asked the project. Group them. How many would a well-designed standing pack have answered before they were asked?",
          expectedAnswer:
            "On most projects, a clear majority of bespoke questions repeat themselves: where is Block A, what is the position on the M&E package, what is the exposure on the variations log. A standing pack designed against those repeated questions tends to absorb seventy to eighty per cent of them, which is the saving the discipline produces. The remainder are the bespoke questions that genuinely deserve bespoke answers, and the time freed up is what makes those answers good.",
        },
      ],
      recommendedReading: [
        { label: 'Progress meetings after RDI', href: '/resources/progress-meetings-after-rdi' },
        { label: 'Manual reporting is a tax', href: '/resources/manual-reporting-is-a-tax' },
        { label: 'Stakeholder reporting workflows', href: '/knowledge-base/stakeholder-reporting-workflows' },
        { label: 'Case study: residential progress and stakeholder reporting', href: '/resources/residential-progress-and-stakeholder-reporting' },
      ],
    },
    {
      slug: 'programme-confidence-from-evidence',
      title: 'Programme confidence from evidence',
      summary:
        'How an owner converts the captured base into a defensible level of programme confidence — neither false reassurance nor unwarranted alarm — and how to recognise the divergences between report and record early enough to act.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'Orient: confidence is not a colour',
          body: "Programme confidence is the level of belief an owner can rationally hold about whether the project will hit its milestones. A traffic-light status is a summary of confidence, not a substitute for it. Confidence has a shape. Trade progress matches the baseline at the agreed level of detail. Critical-path activities show movement consistent with the schedule rather than movement that has been re-scheduled to look consistent. The site capture shows the work the schedule says should be there. Resource on site reconciles to the resource the recovery plan assumed when it was written. Materials called off are arriving, and the gate record matches the delivery schedule. Where any of these are absent, confidence drops, and the owner should be able to say by how much and against which milestone. The temptation in board rooms is to compress all of this into a colour. The colour is fine as a header. It is dangerous as the answer, because a colour cannot be challenged, only debated. A confidence position that names the components, the evidence behind each, and the dates by which the unresolved components will be resolved can be challenged, and a position that can be challenged is one that earns trust over time. The owner´s discipline is to insist on the components, not to settle for the colour. The colour follows from the components; the components do not follow from the colour, and any system in which the colour is set first and the components are written to fit it has stopped being a reporting system and started being a public-relations exercise.",
        },
        {
          title: 'Owner-frame: the spot-check',
          body: 'The owner does not need to look at every clip every week, and the owner who tries will lose the discipline within a quarter. They need to know that a spot-check would survive review. A spot-check at owner level looks like this. Pick the milestone closest to the next lender draw or the next stage gate. Ask for the captured-base view that demonstrates the work front: a 360 walk dated within the last week, a drone capture if the milestone is a structural one, a fixed-camera view if the milestone is about an enclosure or an installation. Compare it against the programme statement made in the standing pack. Read the safety summary for the same area, because a work front that is moving fast and reporting nothing is itself a divergence. Walk the variations register for that package and check the open notices. If those four artefacts tell the same story, the confidence is defensible. If they tell different stories, the divergence is the lesson, and the owner has caught it weeks earlier than they would have without the spot-check. The spot-check is not surveillance. It is calibration. Run it on different milestones each cycle, and the team comes to expect it as part of the rhythm rather than experience it as an audit. The spot-check that finds nothing is still useful, because it is the calibration that earns trust in the spot-check that one day finds something. An owner who only runs spot-checks when they are already worried teaches the team to read the spot-check as suspicion; an owner who runs them as routine teaches the team to read them as the way the project is read.',
        },
        {
          title: 'Workflow: stage-gate and design approvals',
          body: 'At stage gates and design approvals, programme confidence has to be specific because the cost of approving against intention rather than record only shows up later, when the next phase has assumed something that turns out not to be true. A stage-gate review uses the captured base to confirm the conditions assumed in the next phase: foundations are at the level the structural design called for, the substation enclosure is in the position the M&E coordination assumed, the cladding is set out where the facade approval was issued against, the riser locations are where the services drawing committed them. A design-stage approval that defers verification to closeout is an approval against intention, not against record, and it is the most common origin of the disputes that arrive eighteen months later. The captured base brings the verification forward, where it is cheap. A 360 walk and a comparison against the issued drawing is the work of an afternoon. The closeout dispute that the deferred verification produces is the work of a quarter. The discipline at the gate is to insist on evidence for each condition the next phase assumes, and to be honest about the conditions that cannot yet be evidenced rather than assume them through. The conditions that fail this test should not stop the gate by default; they should be named, dated, and tracked into the next stage, so the next stage at least knows what it is sitting on.',
        },
        {
          title: 'Governance: when to escalate',
          body: 'Concern should escalate when the captured base and the reported position diverge. A schedule that says the work front is on track and a captured view that shows it empty is a divergence. A safety summary that shows nothing of concern and a recurring near-miss pattern in the record is a divergence. A commercial register that shows no notices and a captured base that shows several disrupted weeks is a divergence. The owner who notices these early can ask for a recovery plan when there is still time to recover. The owner who waits until the divergence is undeniable inherits a project in trouble, often weeks or months after the trouble started. The captured base makes early noticing possible without surveillance and without the contractor feeling watched, because the noticing is done by reading the record the contractor produced rather than by adding scrutiny on top. The first conversation when a divergence is noticed should be a question, not an accusation. The contractor who was about to surface the same issue is given the room to do so. The contractor who was hoping to manage it without surfacing it is given the chance to bring a recovery plan rather than a defence. Both outcomes are better than the conversation that happens at the next milestone, when the divergence has compounded and the recovery options have narrowed.',
        },
        {
          title: 'What good looks like',
          body: 'Good is when programme confidence is reported in the same words by the project director, the owner, and the lender´s monitor. The confidence is calibrated: where the project says high, audits do not find surprises. Where the project says low, the recovery plan is named, the responsible parties are named, and the date by which the position will be revisited is named. The captured base is referenced in the appendix of the standing pack, not waved at as a reassurance. The owner´s board minutes do not need an apology a quarter later, because the position taken at the time was the position the record actually supported. Across a portfolio, the owner who runs this discipline tends to find that their projects in trouble are the ones that surfaced their trouble earliest, named it most honestly, and were either recovered while recovery was cheap or contained at predictable cost. The projects that fail expensively are the ones where confidence drifted upward in the reporting while the record was already saying something different, and where nobody called the divergence in time. That failure mode is preventable. The captured base is the prevention. The owner´s job is not to find the prevention; it is to insist that the system uses it, and to read the result against the report on a cadence that the project comes to rely on rather than fear.',
        },
      ],
      checkpoint:
        'For one critical milestone in the next quarter, can you describe the spot-check you would run today to confirm the reported position, and would it currently survive an external review?',
      exercises: [
        {
          prompt:
            "Take last quarter's project review. Identify three claims, exceptions, or progress questions where time-aligned evidence would have shortened the conversation. For each, name the captured-base artefact that would have closed it.",
          expectedAnswer:
            "Typical answers: a structural pour where dates were disputed (closed by a 360 walk and gate record), a cladding sequence where setting-out was queried (closed by drone capture against the issued drawing), a closeout claim about temporary works that lingered (closed by a fixed-camera view of the working area). The exercise teaches the reader to expect the artefact rather than ask for it under pressure, and to design the next capture plan so the artefact exists before the question arrives.",
        },
        {
          prompt:
            "For your next stage gate, list the conditions the next phase assumes about what is in place. For each, write the one-line evidence ask that confirms the condition.",
          expectedAnswer:
            "A workable list has six to ten conditions. Each evidence ask should be specific enough to be answered yes or no from the captured base, and short enough to fit in a stage-gate appendix. If the asks read as 'we believe' rather than 'the record shows', the gate is being approved against intention. The exercise tends to surface two or three conditions that nobody had thought to verify and that turn out to be where the next phase quietly assumes the most.",
        },
      ],
      recommendedReading: [
        { label: 'Progress verification workflows', href: '/knowledge-base/progress-verification-workflows' },
        { label: 'Confidence bands and honesty', href: '/resources/confidence-bands-and-honesty' },
        { label: 'Time alignment and cross-checking', href: '/knowledge-base/time-alignment-and-cross-checking' },
        { label: 'OAC meetings with evidence not anecdote', href: '/resources/oac-meetings-with-evidence-not-anecdote' },
      ],
    },
    {
      slug: 'risk-and-claims-from-the-owner-side',
      title: 'Risk and claims from the owner side',
      summary:
        'How the captured record helps an owner manage risk, defend claims, and govern change, including the discipline of expecting evidence on both sides and the contract-stage moves that make later disputes shorter and cheaper.',
      estimatedMinutes: 17,
      sections: [
        {
          title: "Orient: the owner's risk register",
          body: "An owner's risk register usually focuses on cost overrun, schedule slip, safety, regulatory exposure, and reputation. Each is real, and each has an evidence shape. Cost: payment evidence, quantity verification, and variation substantiation. Schedule: programme-confidence checks and milestone evidence. Safety: closeout rates, near-miss patterns, and incident readiness. Regulatory: audit-ready records for inspections, stage filings, and any statutory regime that touches the asset. Reputation: a project that is on top of its evidence tends to behave better in public-facing moments because there are fewer surprises and fewer awkward questions. The register becomes operational when each line has an evidence ask attached and a custodian named. A register that names risks but not the artefacts that would let the owner read them is a list of worries. A register that names artefacts and custodians is a tool. The difference is the difference between a meeting that ends with the same risks repeated and a meeting that ends with a position on each, with the artefact that supports the position. The owner´s job is not to chase the risks; it is to make the register a working document that produces decisions rather than meetings. A register that is reviewed monthly with the standing pack, and that is updated against captured-base evidence rather than against verbal assurance, will move with reality. A register that is reviewed only when something has gone wrong has already failed at the only thing a register is for, which is to make the move before the wrong thing happens.",
        },
        {
          title: 'Owner-frame: claims as governance, not theatre',
          body: 'When a claim arrives, the owner has the same need as the contractor: a defensible record of the period in question. Most owners do not maintain their own captured base; they rely on the contractor´s. The discipline is to specify retention, custody, and access rights at contract stage so the owner can interrogate the record without negotiation when the claim arrives. A claim defended on time-aligned evidence is a different conversation from one defended on recollection: shorter, less personal, and more likely to settle without external counsel. The captured base does not eliminate claims, and it should not. Genuine claims arise from genuine events. The captured base shortens the period between the event and the resolution, and it tends to filter the unsubstantiated claims out of the system before they consume legal budget. An owner who handles their first major claim with a clean captured base in hand tends to find the experience changes how they specify every contract that follows: the retention term lengthens, the custody arrangement is named explicitly, the access rights are written rather than implied. The asymmetry that used to favour the side with better lawyers shifts toward the side with the better record. That shift is the quiet commercial benefit of running the discipline at portfolio scale, and it is one of the few benefits that gets cheaper rather than more expensive the more contracts the owner runs against the same template.',
        },
        {
          title: 'Workflow: the change that becomes a claim',
          body: 'Most disputed claims start as changes that were not properly closed at the time. A direction is given verbally at the gate. An RFI is answered with a sketch on a phone. A weather event is logged but not tied to the affected work fronts. A subcontractor is asked to accelerate one Friday afternoon and nobody writes it down. Months later, those moments arrive as a claim, and the project tries to reconstruct them from chat threads, calendar entries, and the recollection of people who have since moved to other jobs. The reconstruction is expensive, and it is often inconclusive, which is the worst outcome because it forces the dispute to be resolved on relative leverage rather than on what actually happened. The owner-side discipline is to insist that change is closed in the moment. The captured base, the notice register, and the variation log carry the record forward, not the memory of the people who happened to be in the room. The standing pack should include a short section on changes raised, changes closed, and changes outstanding for the period, so that nothing accumulates silently. The discipline is unglamorous and it is the move that distinguishes claims that resolve in months from claims that resolve in years. The owner who insists on it pays a small administrative cost on every change and saves the disproportionate cost of the late-arriving claim that, by the time it lands, has lost the context that would have closed it cheaply at the time.',
        },
        {
          title: 'Governance: counterclaims and fairness',
          body: 'The captured record cuts both ways. It supports legitimate claims and it undermines unsubstantiated ones. The honest owner recognises that the same record that protects them from a weak claim may also protect the contractor from an unfair counterclaim. The owner who treats the record as a fair tool, rather than a partisan one, tends to find that contractors propose more transparently and disputes resolve more quickly. The reverse posture — using the record only when it suits the owner, and resisting access when it does not — destroys the trust the record was supposed to create and is read by every contractor on the framework within a quarter. Reputation in the contractor market is durable; it persists across projects and across personnel changes on the owner side. An owner with a reputation for reading the record fairly attracts better proposals, gets more transparent pricing, and finds that disputes settle earlier because the contractor expects to be heard. An owner with the opposite reputation pays a premium on every contract and inherits the disputes that the premium implies. The fairness is not a value statement; it is a commercial position. The captured base only earns its keep on the owner side when both sides expect to be read by it, and the only way both sides come to expect that is if the owner reads it the same way every time.',
        },
        {
          title: 'Failure modes',
          body: 'Three failure modes recur, and all three are cured at signing rather than at the point of dispute. Retention that ends at practical completion, leaving the warranty period and the latent-defect period without the record. Custody that sits with the contractor by default, so the owner cannot interrogate the base after a contractor leaves the framework or is replaced on a future phase. Access rights that are described in the contract but never tested until a dispute arrives, at which point the access turns out to be theoretical because the credentials are with someone who has left, the export format is incompatible with the legal team´s tooling, or the chain of custody was never recorded in a way that would survive cross-examination. All three failure modes are administrative, and all three are cheap to fix when the agreement is being drafted. None of them is cured at the point of dispute, when the leverage is gone and the only remaining lever is the cost of fighting it out. The owner who has fought one major claim without the right contractual scaffolding tends not to repeat the mistake. The owner who reads this and acts before the first major claim saves themselves the lesson. The legal team that updates the standard development agreement once, and then sees it survive contractor pushback on the next three contracts, will not need to be persuaded a fourth time.',
        },
      ],
      checkpoint:
        'For your most exposed contract, what evidence do you currently have access to as the owner, on what retention terms, and through which named custodian?',
      exercises: [
        {
          prompt:
            "Take your standard development agreement. Mark every clause that touches retention, custody, access, or evidence rights for the captured base. Identify two amendments you would make for the next agreement, and what they would protect against.",
          expectedAnswer:
            "Common amendments: extending retention through the warranty and latent-defect periods, naming a custodian and successor-custodian, granting the owner read access on a named portal, and specifying export rights in a court-admissible format with a chain-of-custody log. Each amendment should be matched to a real risk: late-emerging defects, contractor exit from the framework, dispute escalation to formal proceedings. The exercise tends to expose that the standard agreement has been edited around the point but never updated to reflect what evidence the owner now expects to have.",
        },
        {
          prompt:
            "Pick the most recent claim or potential claim on your portfolio. Write the single page you would put in front of counsel that summarises the captured-base evidence, its custody chain, and any gaps. What is missing, and what would you do differently next time?",
          expectedAnswer:
            "A clean page lists the period in question, the work fronts affected, the artefacts that exist (with timestamps and source), the gaps (with a reason), and the custody chain. The exercise tends to surface that the gaps are predictable: weekends, areas not on a capture plan, or the days around a personnel change. Those gaps are addressable in the next capture plan, which is the point: the lesson from the current claim is the specification for the next contract.",
        },
      ],
      recommendedReading: [
        { label: 'Claims evidence workflows', href: '/knowledge-base/claims-evidence-workflows' },
        { label: 'Delay claims and time alignment', href: '/resources/delay-claims-and-time-alignment' },
        { label: 'Chain of custody on construction sites', href: '/resources/chain-of-custody-on-construction-sites' },
        { label: 'Evidence export for court', href: '/resources/evidence-export-for-court' },
      ],
    },
    {
      slug: 'closeout-and-handover-from-day-one',
      title: 'Closeout and handover from day one',
      summary:
        'Why owner-side handover should be designed into the contract from mobilisation, how the captured record reduces the cost of warranty and latent-defect recovery, and what to specify so the asset arrives in a state the owner can operate.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'Orient: handover starts at mobilisation',
          body: 'Most handover packs arrive late and incomplete because the project treated handover as a closeout activity rather than a continuous one. The captured base allows the opposite. From mobilisation, the project is producing the evidence the handover will need: progress records, design verification, quality non-conformances and dispositions, training and competence records, commissioning evidence, gate and delivery records that anchor the as-built to a calendar. The owner who specifies handover from day one tends to receive a coherent pack on time. The owner who specifies it three months before practical completion is too late: the practices that produce a clean pack have already been set on the ground, the records have been kept in formats that suit the contractor rather than the asset manager, and the chase is on. The cost of late specification is paid in two places. The first is the closeout itself, which becomes a scramble to assemble a pack that the asset manager will accept. The second is the warranty period, where the asset manager is operating against a record that was not built for them and answering tenant questions by reaching back into the project rather than using the archive that should have been left behind. Specifying at signing is the same conversation, held cheaply. The conversation later, after the records have already been kept in the wrong shape, is held against accumulated practice and against the contractor´s reasonable position that they cannot now change what they did not know they were being asked to do.',
        },
        {
          title: 'Owner-frame: what the asset manager actually needs',
          body: 'Asset managers do not need every clip and every drawing. They need a record that lets them defend warranty calls, plan major maintenance, and respond to latent-defect emergencies without rebuilding the project from scratch from the contractor´s archive. That means an indexed closeout archive: as-built record tied to the design baseline, NCR dispositions linked to the affected systems, commissioning evidence preserved with chain of custody, training and competence records for the trades that worked on serviceable systems, and a retention term that runs through the latent-defect period rather than ending at practical completion. The archive should be indexed in a way that mirrors the asset register the operations team will use, so a tenant warranty call about a leaking riser maps directly to the system, the package, the contractor, the dispositions, and the captured-base reference. The asset manager should be able to answer a tenant warranty query without ringing the project director who has long since moved to another job and who, increasingly, is no longer with the contractor at all. The owner who specifies the archive at signing is making a gift to their own asset management team three years in advance. The team usually only realises the value of the gift the first time they avoid a remediation argument that would have eaten a quarter of their year.',
        },
        {
          title: 'Workflow: specify at signing',
          body: 'An owner should specify, at contract stage, the captured base to be retained, the format and indexing standard of the closeout archive, the access rights for the warranty and latent-defect periods, and the named custodian and their successor in the event of contractor exit, acquisition, or insolvency. Specification at signing costs nothing beyond the time of the conversation, because the contractor has not yet built the practices that would have to change. Specification at the start of mobilisation costs a discussion, because the practices are being formed and the contractor can still adjust. Specification three months before practical completion costs a renegotiation, and the renegotiation usually loses, because the leverage on both sides is gone: the contractor cannot rebuild a year of records, and the owner cannot withhold practical completion over an archive that was not in the agreement. The discipline is administrative, not technical, and it is the move that distinguishes owners who keep their record from owners who do not. The legal team can mark up the spec, the contractor´s commercial team can challenge specifics, and the conversation is over in a fortnight. The pack that arrives at handover is then a deliverable rather than a hope. The owner who runs the discipline once usually carries the same template into every subsequent agreement and pushes their internal legal precedent to match, which is how a single contract change becomes a portfolio-level standard within a year or two.',
        },
        {
          title: 'Governance: ESG, regulatory, and the long tail',
          body: 'The closeout archive serves a longer tail than warranty alone. ESG reporting against embodied-carbon claims is more credible when the as-built record can be cross-referenced against the materials specified and delivered, with gate records and delivery verification that tie what was actually installed to the supplier and the lot. Regulatory inspections through the asset´s life are answered faster when the archive is indexed to the inspection regime, particularly for life-safety systems and any installations that fall under building-safety legislation. Insurance renewal in the latent-defect period is cheaper when the underwriter can be shown a coherent record of how the asset was built rather than being asked to underwrite an unknown. Refinancing events are smoother when the diligence pack draws on the same archive. None of these uses is exotic; they are the ordinary uses an asset has over its first decade. The owner who has the archive answers them as routine; the owner who does not answers them as a project, with the cost in time, professional fees, and stress that any project carries. Across a portfolio over a decade, the difference compounds into a real number. None of these uses appears in the original case for the discipline at signing, which is why the case at signing is rarely the case that ends up justifying the move; the move justifies itself in the years afterward, in the small interactions that did not turn into projects of their own.',
        },
        {
          title: 'What good looks like',
          body: 'Good is when a warranty issue eighteen months after handover is resolved in a fortnight, not a quarter. The asset manager pulls the as-built and the disposition record, identifies the responsible package, and calls the contractor with the evidence already in hand. The contractor either accepts and acts, or contests with their own evidence, and the resolution is on the merits rather than on who can sustain the argument longest. A latent-defect emergency at year four is answered from the archive in days, not weeks, with the captured base showing the relevant area at the relevant time, the disposition history, and the chain of trades through that part of the asset. The retention cost is small, particularly relative to the value of the asset under warranty. The dispute cost it prevents, across a portfolio over a decade, is large enough that owners who run the discipline tend to make it the standard for every subsequent agreement and to push their legal teams to update the template accordingly. The change shows up in the operating numbers within two or three years, not in any single dramatic moment, which is the honest pattern of how good administrative discipline pays back. By the time it is obvious in the numbers, the owners who installed it earliest tend to be the ones whose portfolios are the cheapest to operate and the easiest to refinance, which is the kind of compounding the asset-management side of the business actually rewards.',
        },
      ],
      checkpoint:
        'On your next contract, can you specify the captured-base retention, custody, indexing standard, and warranty-period access rights at signing, in language that survives review by your legal team and the contractor´s?',
      exercises: [
        {
          prompt:
            "Draft the handover-pack specification you would attach to your next development agreement. Cover scope, format, indexing, retention term, custody, access rights, and successor arrangements.",
          expectedAnswer:
            "A workable specification names the captured-base components retained (360 walks, drone, fixed-camera, gate records, delivery records), the indexing standard tied to the WBS or asset register, a retention term running through the latent-defect period, a named custodian, a successor in the event of contractor exit, and read access for the owner on a named portal in a court-admissible export format. The legal team should be able to mark it up rather than draft it from scratch, and the contractor´s commercial team should find that most of the spec is administrative rather than commercial.",
        },
        {
          prompt:
            "Pick a warranty issue that arose on a recent completed project. Describe how it would have resolved with a properly indexed closeout archive in place, and estimate the time and cost difference against how it actually resolved.",
          expectedAnswer:
            "The exercise lands when the reader can name the artefact that would have closed the issue (an as-built tied to the responsible package, a disposition record showing the prior NCR, a commissioning record showing the system signed off in a particular state) and estimate the saving honestly: usually weeks of internal time, sometimes external counsel avoided, occasionally a five- or six-figure remediation argued down to a fair share. The reader who runs this exercise across three or four past warranty issues tends to make a stronger internal case for the discipline than any vendor pitch could.",
        },
      ],
      recommendedReading: [
        { label: 'The handover pack built from day one', href: '/resources/the-handover-pack-built-from-day-one' },
        { label: 'Closeout archives after the warranty period', href: '/resources/closeout-archives-after-the-warranty-period' },
        { label: 'Quality non-conformance and as-built', href: '/resources/quality-non-conformance-and-as-built' },
        { label: 'Audit readiness as a state', href: '/resources/audit-readiness-as-a-state' },
      ],
    },
    {
      slug: 'portfolio-command-for-owners',
      title: 'Portfolio command for owners',
      summary:
        'How an owner with multiple live developments uses a command view to triage exceptions, direct attention without micro-managing, and surface organisational patterns that no individual project can address alone.',
      estimatedMinutes: 14,
      sections: [
        {
          title: 'Orient: attention is the constraint',
          body: 'An owner who runs more than three projects in parallel cannot give each one full attention every week, and the attempt to do so usually produces shallow attention everywhere rather than deep attention where it matters. Attention, not capital, is the binding constraint at portfolio scale. The command view exists to allocate attention. Projects on track receive a glance and the standing pack. Projects with exceptions receive the fuller review. The discipline is not to spread attention evenly. It is to direct it where the divergences between report and record are largest, where the lender draws are most exposed, where the asset is closest to a stage gate that costs more to undo than to challenge, and where the early signs of a pattern are starting to show. Without the command view, attention tends to follow noise. The project director who calls most often gets the most attention. The project that produced bad news last quarter gets attention this quarter, even if it is now stable. The new acquisition gets attention because it is new. None of these are wrong on their face, and all of them are wrong as a system, because they leave the quietly drifting projects unread until the drift becomes a problem nobody can fix without writing a cheque. The cheque is usually larger than any number of months of disciplined attention would have cost, but the cheque is the visible cost while the discipline is the invisible one, which is why the asymmetry survives in so many portfolios for so long.',
        },
        {
          title: 'Owner-frame: triage at portfolio level',
          body: 'Triage is the work of the command view. A safety closeout rate that has slipped on one project, where the trend over three months is downward and the recovery plan is vague. A claim file opening on another, where the notice register has grown and the captured base for the affected period is patchy. A milestone slipping on a third with no recovery plan named, where the next stage gate is sixty days away. A design-verification gap appearing on a fourth, where a deviation from the issued drawing has been logged but not yet dispositioned. The command view ranks the exceptions and lets the owner choose what to look at first. The week´s focus follows the ranking rather than the order in which projects called for attention. Loud projects do not crowd out the quiet projects that are quietly failing. The triage is a short discipline: open the view, walk the list, choose three projects for the week´s attention, log the choice. The other projects get the standing pack and a note that they were considered. That note is itself a useful artefact, because it forces the owner to be honest about what they did not look at, which is the most important number in any portfolio review. Over a year, the pattern of what got attention and what did not becomes its own dataset, and the owner who reads it back tends to find systematic biases that a single week´s view would not have surfaced.',
        },
        {
          title: 'Workflow: the weekly portfolio review',
          body: 'A weekly portfolio review is short by design, because a long weekly review will not survive the second month. Open the command view. Walk the ranked exceptions for the portfolio. For each exception, decide one of three things: it is being managed and the standing pack is enough, it warrants a directed question into the project this week, or it warrants the owner´s direct attention this week with a named action and a date. The decision is logged in a single line. The next week opens by reviewing what was decided last week: did the directed question land, did the directed attention produce a result, did the standing-pack-only projects continue to behave as expected. The discipline is unglamorous. The value is that no exception is forgotten, and every exception that mattered last quarter can be traced through the log this quarter. Over a year, the log becomes a record of how attention was actually allocated, which is the most honest performance review an owner can give themselves and their team. The log also surfaces the times when attention went to the loud project rather than the exposed one, which is the lesson that most quickly improves the discipline. The review should fit comfortably in thirty minutes; if it routinely runs to an hour, the standing pack is doing too little of the work and the review is making up the difference, which is a sign to redesign the pack rather than expand the review.',
        },
        {
          title: 'Governance: patterns across the portfolio',
          body: 'Beyond triage, the command view surfaces patterns that no individual project can see. The same package type producing recurring NCRs across projects, which points to a design-team issue, a specification issue, or a supply-chain issue rather than a site-execution issue. The same supplier underperforming across two contracts, which justifies a framework-level conversation rather than two separate site-level escalations. The same kind of exception arising in similar phases, which points to a phase-gate condition that the framework is not enforcing. These are organisational findings, not project findings. They warrant programme-level work — supplier review, framework renegotiation, capture-plan templating, training for the design teams, updates to the standard development agreement — that no individual project director can sponsor alone, and that no individual project would even notice until the pattern was already a year old. The owner who reads patterns rather than only individual projects gets compounding returns from the captured base, because the same evidence that resolved a single claim last quarter is now informing how the next ten projects will be set up. That is the leverage the command view exists to produce. None of the patterns are visible from inside any single project, which is why none of the project directors will surface them on their own; surfacing them is the owner´s work, and it is the work that justifies the owner-side seat in the first place.',
        },
        {
          title: 'What good looks like',
          body: 'Good is when an owner can answer three questions on any Monday morning. Which of my projects warrants my attention this week, and why, with the captured-base reference behind the answer. Which exceptions repeat across projects in a way that points to an organisational fix this quarter. Which of last quarter´s decisions actually changed an outcome, and which did not. If all three answers come from the command view rather than from a round of phone calls and remembered conversations, the portfolio is being run rather than being chased. That is the standard. It does not require more time from the owner; it requires the time to fall on the right projects rather than on the projects that called loudest. The owner who reaches that standard tends to find that their portfolio´s overall risk profile improves without any single dramatic intervention. Quiet projects get noticed earlier. Patterns get fixed before they become culture. The standing pack and the command view together produce a system in which good news and bad news arrive in the same shape, on the same cadence, and are read against the same record. That is what owner-side RDI is for. Once it is in place, the question of whether to run it stops being interesting; the only remaining question is how to extend the same discipline to the next acquisition, the next framework, and the next class of asset the portfolio takes on.',
        },
      ],
      checkpoint:
        'For your portfolio next Monday, can you name the three exceptions that would warrant attention if you saw them ranked together, and the organisational pattern that would warrant a programme-level fix this quarter?',
      exercises: [
        {
          prompt:
            "List your live projects. For each, write the single exception you would expect to see at the top of the command view this week, and what you would do about it. Compare the list against where your attention actually went last week.",
          expectedAnswer:
            "The exercise tends to expose attention drift: attention went to the loudest project, not the most exposed one. The remedy is procedural — the standing pack and the ranked command view — rather than personal. An owner who runs the discipline for a quarter usually finds attention reallocates by twenty to thirty per cent toward projects that were quietly drifting, and the projects that were getting attention out of habit revert to the standing-pack cadence without losing anything in the management of them.",
        },
        {
          prompt:
            "Identify one pattern across your portfolio that you suspect but have not confirmed: a supplier, a package type, a phase where exceptions cluster. Write the evidence ask that would confirm or kill the suspicion.",
          expectedAnswer:
            "A clean evidence ask names the artefacts (NCR registers across projects, gate records, capture-plan extracts, notice registers), the time window, and the threshold that would count as confirmation. If the suspicion survives the ask, it is a programme-level finding worth a framework-level move. If it does not, the time spent killing it was cheap insurance against acting on a hunch, and the discipline of asking is what builds the habit of reading patterns honestly.",
        },
      ],
      recommendedReading: [
        { label: 'Command views are not dashboards', href: '/resources/command-views-are-not-dashboards' },
        { label: 'Pattern of recurrence as a leading indicator', href: '/resources/pattern-of-recurrence-as-a-leading-indicator' },
        { label: 'The RDI maturity curve', href: '/knowledge-base/the-rdi-maturity-curve' },
        { label: 'Learning path: executive', href: '/knowledge-base/learning-path-executive' },
      ],
    },
  ],
}
