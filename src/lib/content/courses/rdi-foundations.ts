import type { Course } from '../types'

export const course: Course = {
  slug: 'rdi-foundations',
  title: 'Reality-Driven Intelligence Foundations',
  level: 'Foundation',
  estimatedMinutes: 124,
  summary:
    'A working course on the RDI stack, ground truth, workflow thinking, ROI language, the maturity curve, the category boundary against cameras, AI dashboards and BIM, and how portfolio command changes the way construction organisations learn. Written for project directors, owner representatives, digital construction leads, and commercial managers who need to apply RDI to the next OAC meeting, the next claim, and the next portfolio review.',
  audience: ['Project director', 'Owner representative', 'Digital construction lead', 'Commercial manager'],
  outcomes: [
    'Explain RDI using the five-layer stack and the trigger-evidence-action loop.',
    'Diagnose where a project sits on the visibility-control-optimisation maturity curve.',
    'Translate product capabilities into closed-loop workflows with named owners.',
    'Connect workflow packs to ROI conversations with operational and risk credit lines.',
    'Distinguish RDI from cameras, AI dashboards, and BIM in procurement and operations.',
    'Read a portfolio command view and identify a pattern of recurrence as a programme of work.',
  ],
  lessons: [
    {
      slug: 'what-rdi-means',
      title: 'What RDI means',
      summary: 'Define the five layers of RDI and the shift from site visibility to operational command.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'This first lesson sets the working definition the rest of the course assumes. Reality-Driven Intelligence is the discipline for turning construction reality into trusted evidence, decision-ready interpretation, accountable action, and measurable command. It is not a product, not a feature, not a class of hardware. It is the operating discipline that decides what is recorded on a site, how that record becomes trustworthy, what gets done with it, and how the project and the portfolio learn from it. By the end of the lesson you should be able to draw the five layers from memory, place a working tool on the right layer, and explain to a colleague why a camera or a dashboard is a single layer of RDI rather than the whole. Treat this lesson as the vocabulary you will use for the next eight weeks of OAC meetings, procurement reviews, and ROI conversations. Everything that follows in this course refers back to it.',
        },
        {
          title: 'Definition and the discipline frame',
          body: 'Construction has bought reality-capture products for years. Cameras on masts, 360 walks on tablets, drones over the slab pour, helmet cameras on the supervising engineer, gate readers, equipment telemetry. Each of these is an input. None of them is RDI on its own. RDI is the discipline that decides what to record, how to make the record reliable enough that an insurer or a tribunal would accept it, what action the record triggers, and what the leadership team learns when the same finding appears across three projects. Like quality assurance or programme management, RDI lives in routines, named owners, agreed evidence rules, and measurable outcomes. Hardware and software make the discipline possible at scale. They do not replace it. The honest test of whether an organisation has adopted RDI is not the count of cameras on site. It is whether a project director can describe the workflows the platform completes and produce closeout records an external reviewer would accept.',
        },
        {
          title: 'The five layers',
          body: 'Reality capture records the site at the moment things happen. Ground truth makes the record reliable later by aligning it with time, location, scope, and a chain of custody that survives a retrieval six months in. Interpretation identifies what the record means, whether by human review, automated detection, or pattern analysis. Action routes that meaning into a task, an observation, an escalation, a payment certificate, or a meeting pack. Command lets leaders direct attention across many projects, surface patterns of recurrence, and decide which programmes of work belong at organisational level. Each layer depends on the one below it. A dashboard built on unreliable capture will produce confident findings nobody trusts. An action layer built on no interpretation becomes another inbox. Skipping a layer breaks the layers above without removing them from the diagram, which is how teams end up with sophisticated tools that fail to change the project.',
        },
        {
          title: 'The shift from visibility to command',
          body: 'The plainest way to describe what RDI changes is to compare two project directors. The first opens her camera viewer once a fortnight, mainly to reassure the owner that the slab is rising. The second opens an evidence pack at the start of every OAC meeting, knows which workflows closed last week, and can name the two findings that her safety lead has open with subcontractor owners. Both have the same hardware. Only the second is doing RDI. The shift from visibility to command is what the rest of this course teaches. Visibility produces a feed people occasionally watch. Command produces a rhythm of decisions, evidence, and learning. Visibility is bought. Command is built, week by week, by closing one workflow at a time and resisting the temptation to add hardware before the discipline is in place.',
        },
        {
          title: 'Why RDI is a category, not a feature',
          body: 'Construction does not need another passive archive. It needs a way to prove conditions when a date slips, understand exceptions before they become claims, act faster on safety and quality, and learn from recurring patterns across a portfolio. None of the existing categories does all of that. Camera platforms stop at capture. AI dashboards stop at interpretation. BIM coordinates intent rather than verifying reality. RDI is the operating layer that joins them and produces the closed loop. Calling it a category matters in procurement, because the questions a buyer asks change. Instead of asking how many cameras are bundled or which detection model the vendor uses, the buyer asks which workflows the platform completes, what the closeout record looks like, and how the command view surfaces patterns of recurrence. Those are the questions an RDI buyer asks, and they are the questions a vendor selling a feature finds it hard to answer.',
        },
      ],
      checkpoint: 'In one sentence, explain how RDI differs from a construction camera system.',
      exercises: [
        {
          prompt:
            'Take a tool already in use on your project — a fixed camera, a 360 walk app, a drone survey, a gate reader. Place it on the correct layer of the RDI stack and write one sentence on what it cannot do on its own.',
          expectedAnswer:
            'A strong response names a single layer, accepts the tool is not a complete RDI solution by itself, and identifies the next layer where ownership currently rests with people rather than the tool.',
        },
        {
          prompt:
            'Write the two-line definition of RDI you would use with a sceptical commercial director who has just been pitched another camera platform.',
          expectedAnswer:
            'A strong response avoids hardware language, mentions evidence and action, and frames RDI as a discipline that produces a closeout record rather than a viewer.',
        },
      ],
      recommendedReading: [
        { label: 'Glossary: Reality-Driven Intelligence', href: '/glossary/reality-driven-intelligence' },
        { label: 'Knowledge base: What is Reality-Driven Intelligence', href: '/knowledge-base/what-is-rdi-canonical' },
        { label: 'Knowledge base: The RDI stack', href: '/knowledge-base/the-rdi-stack' },
      ],
    },
    {
      slug: 'ground-truth-and-evidence',
      title: 'Ground truth and evidence quality',
      summary: 'Learn what makes site reality usable when schedule, safety, cost, or responsibility is disputed.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'This lesson is about the second layer of the stack and the most underrated. Ground truth is what separates a record that survives a tribunal from one that produces a frustrating afternoon for the project manager who is asked to find footage of a delivery six months ago. By the end, you should be able to describe the metadata that makes a clip useful when a payment is disputed, list the weakest links in your current evidence chain, and recognise the small operational habits that quietly destroy chain of custody. The lesson assumes you already accept that capture is necessary; it argues that capture without ground truth is the kind of data that costs more to defend than to gather. Ground truth is mostly invisible work. It is also the work that decides whether the rest of the stack returns its investment.',
        },
        {
          title: 'What ground truth actually is',
          body: 'Ground truth is time-aligned, location-aware evidence that can be trusted by site teams, commercial teams, owners, insurers, or legal reviewers without the conversation pausing to verify provenance. It needs context: where the record was taken, when in the project programme, what activity was in progress, who is affected, and how the record was preserved between capture and retrieval. The simplest test for ground truth is whether a colleague could pick the record up cold and explain what it shows without asking the original capturer. If the record only makes sense to the person who took it, the project has produced data, not evidence. Ground truth is the layer that turns one into the other, and the work happens at capture time even though the value shows up months later when something is disputed.',
        },
        {
          title: 'Time alignment, location, and chain of custody',
          body: 'Three properties carry most of the weight. Time alignment means the record can be matched against the master programme baseline, the weather log, the gate record, and the design issue. A clip stamped only with a wall-clock time in the wrong time zone is half useless. Location means the record can be tied to a level, a grid line, or a package, not merely a generic site address. Chain of custody means the record has not been edited, the file path has not been re-saved through three personal devices, and the export the lawyer eventually receives matches the original. Construction makes all three harder than office software does, because devices change hands, supervisors rotate, retention windows are inconsistent across vendors, and the people who recorded the moment may have left the business by the time the moment becomes a claim. Ground truth is the operational discipline that protects against all of those.',
        },
        {
          title: 'Evidence grades and the everyday test',
          body: 'Not every record needs the same grade. A weekly progress photo for the stakeholder pack does not need the same chain of custody as a clip used in a delay claim. The mature project grades evidence: high-grade for commercial and legal use, mid-grade for management reporting, low-grade for stakeholder communication. Each grade has its own retention rules, export format, and approval path. The everyday test is straightforward. Could this record be used in a tribunal next year, or only in next Monday’s OAC. If the answer is the second, do not let it migrate into the first by accident. Conversely, do not over-engineer the stakeholder photo. Grading prevents both failures: cheap evidence used in expensive arguments, and expensive process applied to cheap reporting.',
        },
        {
          title: 'Preservation, retention, and the failure modes',
          body: 'Incident and claim workflows are time-sensitive in a way that surprises owners every time. A footage retention window of thirty days will lose the record before a delay claim is even formally raised. A retention window of six months will lose the record before a final account dispute reaches mediation. The mature project sets retention to match the dispute lifecycle, not the storage cost. Common failure modes include: cameras failing for a week and nobody noticing because the dashboard quietly used the last good frame, a switch from one vendor to another that breaks export formats halfway through a project, and chain of custody being broken by a well-meaning manager who downloads a clip onto a personal device before sending it to legal. None of these failures look serious in the moment. All of them surface at exactly the moment the project most needs the evidence to be clean.',
        },
      ],
      checkpoint: 'Which metadata would you want attached to a clip used in a delay claim?',
      exercises: [
        {
          prompt:
            'For your current project, write down the retention window in place for fixed cameras, 360 walks, and gate records. For each, name one dispute lifecycle that exceeds the window.',
          expectedAnswer:
            'A strong response identifies that retention windows are typically shorter than final account or insurance claim cycles and names a specific gap to close.',
        },
        {
          prompt:
            'Draft a one-paragraph evidence grading rule for your team that defines high-grade, mid-grade, and low-grade records and the retention rule for each.',
          expectedAnswer:
            'A strong response distinguishes commercial-legal use from management reporting, sets explicit retention periods, and makes one named owner responsible for high-grade preservation.',
        },
      ],
      recommendedReading: [
        { label: 'Glossary: Ground truth', href: '/glossary/ground-truth' },
        { label: 'Glossary: Chain of custody', href: '/glossary/chain-of-custody' },
        { label: 'Knowledge base: Evidence quality checklist', href: '/knowledge-base/evidence-quality-checklist' },
        { label: 'Knowledge base: Preservation and retention policy', href: '/knowledge-base/preservation-and-retention-policy' },
      ],
    },
    {
      slug: 'workflow-thinking',
      title: 'Workflow thinking',
      summary: 'Translate features into closed-loop workflows that change daily site behaviour.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'Most construction technology is sold and bought as features. Search. Playback. Compare. Export. AI detection. Heat maps. Timelines. Each is genuinely useful in the right hands, and each leaves the user holding the bag for turning the output into action. This lesson teaches the alternative frame, which is workflow thinking. A workflow has a trigger, an activity, a decision, an action, and a closeout record. By the end of the lesson you should be able to take any feature your vendor demonstrates and ask the four questions that turn the feature into a workflow proposal. The skill is not abstract. It is the difference between platforms that change site behaviour and platforms that produce another tab nobody opens by week six.',
        },
        {
          title: 'Feature thinking and what it leaves behind',
          body: 'A feature gives a user a capability. Searching for a person near a machine is a capability. Comparing two 360 walks side by side is a capability. Exporting a clip with a watermark is a capability. None of these closes a loop on its own. Feature thinking puts the cognitive burden on the user: see something, decide what it means, decide who owns it, decide what evidence is needed for closeout, decide whether it should be escalated, decide whether a similar finding has appeared before. That mental load is the reason platforms with extensive feature lists often fail to change the project rhythm. The feature is bought, the feature is enabled, and the feature is then used by the most diligent member of the team for two months before quietly fading. The fade is not a vendor failure. It is a workflow gap.',
        },
        {
          title: 'The trigger-evidence-action loop',
          body: 'A workflow is a closed loop with five named stages. The trigger says when the workflow starts: a person enters a controlled area, a delivery arrives without a docket, a clash is identified, a payment application is submitted. The activity says what the workflow does to the trigger: capture, compare, route, attach, score. The decision says what conclusion the activity reaches and who is the named owner of the conclusion. The action says what the workflow then does in the real world: an observation is created, a hold is placed on the load, a non-conformance is logged, a payment is approved or queried. The closeout record says what the workflow leaves behind so that an external reviewer in three months could reconstruct what happened and why. A workflow is complete only when the closeout record exists. Without it, the loop is not closed and the workflow is, at best, a habit.',
        },
        {
          title: 'A worked safety example',
          body: 'Take a typical safety scenario: a person on foot near a moving telehandler. Feature thinking would describe a system that detects the proximity, draws a box on the person, and surfaces an alert in a feed somewhere. Workflow thinking goes further. The trigger is the proximity event itself. The activity is the automated detection plus a human review to suppress false positives. The decision is whether the event becomes a recorded safety observation, with the supervisor on the package as the named owner. The action is the observation routing into the daily safety stand-up, the supervisor speaking to the operator, and the toolbox talk being scheduled if the same event recurs in the same crew within a week. The closeout record is the observation log entry, the toolbox attendance sheet, and the next week’s recurrence count. The same trigger in feature thinking produces an alert; in workflow thinking, it produces a closed loop with a measurable recurrence rate.',
        },
        {
          title: 'How to convert any feature into a workflow proposal',
          body: 'When a vendor demonstrates a feature, the discipline is to interrupt the demo with four questions. What is the trigger that makes this feature run on a real site without someone deciding to open the tool. Who is the named owner of the decision the feature points towards, and how do they receive it. What evidence is preserved as the closeout record, and where does it live for six months and beyond. What does the recurrence look like, and how does the command view surface it. If the vendor cannot answer any of the four, the feature is real but the workflow is not. Buy the feature only if the workflow can be designed in-house, and treat the design work as part of the cost. Workflow thinking is the buying habit that distinguishes mature RDI customers from the projects that accumulate tools and continue to run on email and spreadsheets.',
        },
      ],
      checkpoint: 'Pick one construction technology capability and describe the workflow it should complete.',
      exercises: [
        {
          prompt:
            'Take the most recent feature demo a vendor gave your team. Write down the four workflow questions and answer them honestly. If any are missing, identify who would need to design the gap in-house.',
          expectedAnswer:
            'A strong response surfaces at least one missing element of the closed loop and names a specific role responsible for designing it.',
        },
        {
          prompt:
            'Pick one workflow on your current project that runs on email or a chat thread. Sketch the trigger, activity, decision, action, and closeout record on a single page.',
          expectedAnswer:
            'A strong response identifies the missing closeout record as the main reason the workflow is informal and proposes a single owner.',
        },
      ],
      recommendedReading: [
        { label: 'Glossary: Decision loop', href: '/glossary/decision-loop' },
        { label: 'Glossary: Workflow pack', href: '/glossary/workflow-pack' },
        { label: 'Knowledge base: Workflow anatomy', href: '/knowledge-base/workflow-anatomy' },
        { label: 'Field note: The trigger-evidence-action loop', href: '/resources/the-trigger-evidence-action-loop' },
      ],
    },
    {
      slug: 'roi-language',
      title: 'ROI language',
      summary: 'Connect RDI workflows to financial outcomes, risk reduction, and operational capacity.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'ROI conversations on RDI go wrong in predictable ways. They overclaim, mixing direct savings with risk credit until the CFO discounts the whole number. They underclaim, treating dispute avoidance as too speculative to mention. They produce one big figure when the right answer is three lines on a page, each with its own confidence band and its own evidence basis. This lesson teaches the language a credible RDI ROI uses. By the end, you should be able to separate operational savings from risk mitigation, write an assumption with the right humility, and recognise the moment a directional public number should give way to a project-specific one. The lesson is short on arithmetic and long on language, because the arithmetic is easy once the categories are right.',
        },
        {
          title: 'Operational savings as the first line',
          body: 'Operational savings are recurring, measurable, and relatively easy to defend. They are the first line on the page. They include reductions in the manual reporting load on the project management team, reductions in evidence retrieval time when the commercial team needs a clip for a payment certificate, reductions in OAC meeting preparation time, reductions in the number of progress photos taken and sent by hand, reductions in the time spent verifying deliveries by phone and radio. Each can be modelled with hours per week multiplied by a loaded labour rate, and each can be calibrated by sampling a few weeks before the workflow goes live. Operational savings rarely justify a platform purchase on their own, and that is fine. They are the line a sceptical buyer can audit, which gives the rest of the model credibility.',
        },
        {
          title: 'Risk mitigation as a separate, honest line',
          body: 'Risk mitigation belongs on a separate line because it has a different shape. It is the expected reduction in low-frequency, high-cost events: a delay claim that holds rather than slips, a weather claim that is granted, a theft investigation that recovers material, an injury that does not happen, a regulatory event that closes without penalty, a non-conformance that is caught in the slab pour rather than on handover. The honest way to model it is as a probability times an impact, with both numbers shown and both anchored in industry or project history. The temptation is to combine risk credit with operational savings into one big number. Resist it. The CFO will discount a combined number by half on principle. Two lines, each defensible on its own, are worth more than one impressive line that is worth nothing under audit.',
        },
        {
          title: 'Capacity, credibility, and assumption discipline',
          body: 'Capacity is the third, often unspoken, line. RDI changes what a given project team can manage. A project director with a working command view can run a portfolio of more projects without a proportional increase in head count. That is real economic value, and it is rarely on the ROI page because it is harder to attribute. Mention it qualitatively. Credibility is the property of the model as a whole. A credible RDI ROI shows assumptions, ranges, evidence basis, and confidence bands. It distinguishes between numbers the vendor sourced from industry and numbers the customer measured on this project. It uses the word "directional" honestly when the data is thin. The discipline is to write down each assumption as a sentence: "we assume manual progress reporting takes the project engineer three hours a week, calibrated by a one-week sample in October." That sentence is what separates a model the CFO trusts from a number the CFO ignores.',
        },
        {
          title: 'Directional calculators and project-specific reports',
          body: 'A public ROI calculator and a customer ROI report do different jobs and should not be confused. A directional calculator educates the market and gives a buyer a rough order of magnitude. It uses ranges, hides nothing, and labels every input as a default the buyer will need to replace. It is honest at the cost of being unspecific. A project-specific ROI report uses real labour rates, real claim history, real retention windows, and the real sample of the workflows already running on the project. It is the document a CFO signs against. The mistake is to pretend the calculator is the report, or to skip the calculator on the assumption that only the report counts. The calculator builds the conversation. The report wins the budget. Use both, and label each clearly.',
        },
      ],
      checkpoint: 'Why should risk mitigation be presented separately from operational savings?',
      exercises: [
        {
          prompt:
            'Draft the three-line ROI summary for one workflow on your current project: one line operational savings, one line risk mitigation, one line capacity. Show the assumption behind each number in a single sentence.',
          expectedAnswer:
            'A strong response keeps the three lines separate, names the assumption clearly, and uses ranges where the data is thin rather than a single confident figure.',
        },
        {
          prompt:
            'Write the sentence you would use with your CFO to explain why a directional ROI is worth running before the project-specific ROI is built.',
          expectedAnswer:
            'A strong response frames the directional run as a structuring conversation, not a commitment, and protects the integrity of the project-specific number that follows.',
        },
      ],
      recommendedReading: [
        { label: 'Glossary: Risk mitigation credit', href: '/glossary/risk-mitigation-credit' },
        { label: 'Glossary: Confidence band', href: '/glossary/confidence-band' },
        { label: 'Knowledge base: ROI method overview', href: '/knowledge-base/roi-method-overview' },
        { label: 'Knowledge base: ROI confidence and credibility', href: '/knowledge-base/roi-confidence-and-credibility' },
      ],
    },
    {
      slug: 'using-the-workflow-library',
      title: 'Using the workflow library',
      summary: 'Apply workflow packs, evidence, steps, and cost-model assumptions to a project conversation.',
      estimatedMinutes: 15,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'The workflow library is the public, browseable expression of the discipline this course is teaching. It groups workflows into packs by the construction problem they address: progress verification, claims evidence, safety monitoring, gate and logistics, stakeholder reporting, subcontractor performance, compliance, design verification. By the end of this lesson you should be able to walk a project team through the library, identify which packs apply, read a single workflow page critically, and translate the page into a recommendation for the next OAC meeting. The library is not a catalogue of features. It is a structured way of asking which closed loops the project actually needs, and which ones can wait until next quarter.',
        },
        {
          title: 'How packs and workflows are organised',
          body: 'A workflow pack is a thematic grouping. Inside it sit individual workflows, each with the same anatomy: trigger, evidence, activity, decision, action, closeout, owner role, frequency, current fulfilment role, replacement-or-supporting status, and whether a cost model exists. The structure is deliberately repetitive so that comparison across workflows is fast. A project director scanning the claims-evidence pack on a Tuesday afternoon should be able to read four workflows in twenty minutes and know which two apply to the contract she is on. That speed is the point. The library is not exhaustive; it is selective, and the selection is informed by what mature construction organisations have actually built rather than what is theoretically possible.',
        },
        {
          title: 'Reading a single workflow page critically',
          body: 'Start with the trigger and the conclusion. If those two do not match the construction reality on your project, the rest of the page is academic. Then read the evidence list and ask whether your project produces those records today, in what grade, and at what retention. Then read the steps and ask which role currently does each step on your project, even if informally. Then read the cost model assumptions, if any, and replace the defaults with project-specific numbers in your head. Finally read the replacement-or-supporting note, which tells you whether this workflow eliminates an existing job or supports it. The discipline is to leave the page with three notes: which evidence the project lacks, which step is currently informal and risks decay, and whether the workflow is a buy-or-build decision in your context. Twenty minutes of this reading prevents months of buying the wrong thing.',
        },
        {
          title: 'Translating the library into a project conversation',
          body: 'A project conversation that uses the library well looks like this. The project director picks two or three packs that match the contract and the phase. She walks the team through one workflow per pack on the screen, asking who currently owns the equivalent activity and where the evidence currently lives. She marks the workflows where the project already has informal practice and the ones that are entirely new. She picks one workflow per pack to formalise this quarter and one per pack to leave for next. She writes the closeout record location for the chosen workflows on the same page. The meeting ends with three or four named owners and a calendar. That is the library doing its job. The opposite of this is a vendor demo where the team admires the platform and leaves without choosing anything.',
        },
      ],
      checkpoint: 'What makes a workflow suitable for an ROI calculation rather than a qualitative benefit?',
      exercises: [
        {
          prompt:
            'Pick two workflow packs that match your current project. For each, choose one workflow and write a single sentence on whether it would replace existing work or support it.',
          expectedAnswer:
            'A strong response correctly identifies replacement workflows as easier to defend in ROI and supporting workflows as worth running for capacity rather than savings.',
        },
        {
          prompt:
            'Read one workflow page in the claims-evidence pack and write three project-specific notes: missing evidence, informal step, buy-or-build decision.',
          expectedAnswer:
            'A strong response leaves the page with concrete next actions rather than a generic agreement that the workflow looks useful.',
        },
      ],
      recommendedReading: [
        { label: 'Glossary: Workflow pack', href: '/glossary/workflow-pack' },
        { label: 'Glossary: Replacement workflow', href: '/glossary/replacement-workflow' },
        { label: 'Knowledge base: Workflow anatomy', href: '/knowledge-base/workflow-anatomy' },
        { label: 'Knowledge base: Claims evidence workflows', href: '/knowledge-base/claims-evidence-workflows' },
      ],
    },
    {
      slug: 'the-maturity-curve',
      title: 'The RDI maturity curve',
      summary: 'The three stages of organisational maturity in RDI — visibility, control, and optimisation — and how to recognise the failure modes between them.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'Most organisations adopting RDI move through three recognisable stages. Each stage has real value. Each stage has a ceiling. The failure modes between them are organisational rather than technical, which is why most attempts to advance through hardware upgrades stall. By the end of this lesson you should be able to place your own project on the curve, identify the failure mode that is keeping it at the current stage, and pick the one workflow whose closure would advance it. The lesson is diagnostic. Honesty matters more than ambition. A project that names its stage correctly will advance faster than one that overclaims.',
        },
        {
          title: 'Visibility, control, and optimisation as stages',
          body: 'Visibility is the entry stage. Cameras, walks, and drones produce a record people can look at. Owners feel closer to the project; site teams have something to show in the OAC pack; a few useful clips emerge during disputes. Control begins when named workflows close on top of the record. Progress meetings open with evidence rather than memory. Safety findings become observations with owners and clocks. Delivery disputes resolve in minutes rather than days. Optimisation is the portfolio stage. Patterns of recurrence surface across projects. The leadership team directs programmes of work in response: supplier reviews, capture-plan templates, training rotations. Each stage produces value. The mistake is to stop at visibility because it feels like progress and confuse it with control, or to stop at control because the project is calm and miss the portfolio learning that optimisation provides.',
        },
        {
          title: 'The failure mode between visibility and control',
          body: 'The most common failure between visibility and control is the absence of named owners. The capture is happening. The records exist. The platform has surfaced findings. Nobody owns them. Findings sit in a feed and decay. The site team rationalises the decay with a story about being too busy, which is true and irrelevant. The diagnosis is not technical. The cure is operational: pick one workflow, name a single owner, agree the closeout record, and run it for six weeks. Resist the temptation to advance every workflow at once. The teams that move from visibility to control fastest pick the workflow with the highest current pain and treat the others as next quarter’s work. They also resist the urge to add more cameras or another module before the first workflow is closing reliably.',
        },
        {
          title: 'The failure mode between control and optimisation',
          body: 'The failure between control and optimisation is the absence of a command view. Each project closes its own workflows. Each project produces its own closeout records. Nobody is comparing across the portfolio. Patterns of recurrence stay local. The same supplier underdelivers on three projects in three regions and nobody connects the dots. The same package phase produces non-conformances in the slab pour across the portfolio and the lesson is learned three times instead of once. A command view is not a dashboard. It is the operational habit of a leadership team reading exception summaries across projects each week and deciding which patterns belong at organisational level. Without that habit, optimisation does not happen even on a fully instrumented portfolio.',
        },
        {
          title: 'How to advance with discipline',
          body: 'Advancing on the curve is concrete work. Pick the workflow currently most painful and most informal. Name the owner. Agree the trigger, evidence, decision, action, and closeout record. Run it for six weeks. Report on closeout. Do nothing else for that period. Once the loop is closing reliably, pick the next workflow. The tempo matters: one closed loop per quarter on a single project is faster than three half-built loops, because half-built loops decay and have to be restarted. At portfolio level, the equivalent discipline is to pick one pattern of recurrence per quarter and treat it as a programme of work with its own owner, milestone, and closeout. The leadership teams that maintain this tempo pull ahead of the ones that try to do everything in the first six months.',
        },
      ],
      checkpoint: 'For your project, which stage are you on, and which workflow would you close first to advance?',
      exercises: [
        {
          prompt:
            'Place your current project on the maturity curve and write one sentence on which failure mode is keeping it at that stage.',
          expectedAnswer:
            'A strong response is honest about the stage, names the specific organisational gap rather than blaming the platform, and identifies the role responsible for closing it.',
        },
        {
          prompt:
            'Pick the single workflow whose closure would move your project to the next stage. Write the trigger, the named owner, the closeout record, and the six-week milestone.',
          expectedAnswer:
            'A strong response chooses one workflow rather than a list, sets a realistic milestone, and resists adding hardware before the loop is reliably closing.',
        },
      ],
      recommendedReading: [
        { label: 'Knowledge base: The RDI maturity curve', href: '/knowledge-base/the-rdi-maturity-curve' },
        { label: 'Glossary: Command view', href: '/glossary/command-view' },
        { label: 'Glossary: Pattern of recurrence', href: '/glossary/pattern-of-recurrence' },
      ],
    },
    {
      slug: 'category-boundary-in-practice',
      title: 'The category boundary in practice',
      summary: 'How RDI differs from cameras, AI dashboards, and BIM coordination — and how to keep the distinctions clear in procurement and operations.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'Procurement conversations about RDI are often muddied by adjacent categories. Camera vendors describe themselves as RDI platforms. AI dashboard vendors describe themselves as RDI platforms. BIM coordination platforms describe themselves as RDI platforms. None of those claims is malicious; each category is genuinely useful, and each touches part of the RDI stack. By the end of this lesson you should be able to walk into a procurement meeting and place every vendor on the right layer, without becoming the person who corrects categories all afternoon. The category boundary matters because the questions a buyer asks are different at each boundary, and getting the questions right protects the project from buying a layer when it needs the stack.',
        },
        {
          title: 'Versus cameras',
          body: 'A camera is a sensor. RDI is a discipline. A camera produces footage, which is the input layer of RDI rather than the output. Camera platforms have evolved to include playback, search, and basic timeline tools, all of which are real value at the capture and retrieval boundary. They are not the closed loop. The honest test for procurement is operational: can the buyer name the workflows the platform completes, and can the platform produce closeout records that an external reviewer would accept. A camera vendor will describe the viewer; an RDI platform will describe the loop. The difference is rarely visible from the marketing and almost always visible from the workflow walkthrough. Ask the camera vendor to walk you through how a delay claim closes from trigger to closeout record. The walkthrough either exists or it does not, and the gap is the category boundary.',
        },
        {
          title: 'Versus AI dashboards',
          body: 'AI dashboards belong to the interpretation layer of RDI. They surface patterns and exceptions, which is genuinely useful work. They are not a substitute for the layers below or above. A dashboard without ground truth cannot defend its findings; the moment the finding is challenged, the dashboard owner is back in the footage hunting for context. A dashboard without action routing produces sophisticated views that the project enjoys for two months and ignores by month four because the loop never closes. The right relationship is interpretation feeding action and command, not interpretation as a complete answer. The procurement question for the dashboard vendor is which workflows the dashboard completes, not which detection models it runs. The vendor that answers the first question is operating in the RDI category; the vendor that answers only the second is selling a layer.',
        },
        {
          title: 'Versus BIM',
          body: 'BIM coordinates design intent. RDI verifies construction reality. The artefacts are different: the design model versus the as-built record. The two are complementary, not competing. A mature project runs both. The model coordinates intent before the work happens. The reality data verifies the as-built record after. The design verification workflow joins them by checking installed work against the issued model, surfacing deviations early enough to be cheap rather than late enough to be claims. Either tool alone is incomplete. The pair is what mature owners ask for. The procurement question for the BIM vendor is how the as-built record flows back into the model and back into the handover pack; for the RDI vendor, the question is how the workflow surfaces deviation against the model. The category boundary is sharpest in procurement and clearest in operations.',
        },
        {
          title: 'How to run a procurement meeting that keeps the boundaries straight',
          body: 'A practical procurement meeting starts with a one-page diagram of the stack and the four boundaries. Each vendor places themselves on the diagram before the demo begins. The room then asks two questions of every vendor regardless of category: which workflows do you complete, and what does the closeout record look like. Vendors who do one part of the stack well will answer for that part and acknowledge the rest. Vendors who claim the whole stack will struggle to answer for the parts they do not own. The aim is not to embarrass vendors. It is to make the project’s buying decision clearer: are we buying capture, interpretation, BIM coordination, or a closed loop. Most projects need a combination. The boundary matters because the combination needs to fit together, and that requires the project to know what it is buying at each layer.',
        },
      ],
      checkpoint: 'For your most recent vendor conversation, which side of each boundary did the vendor sit on?',
      exercises: [
        {
          prompt:
            'Take your three current technology vendors. For each, place them on the RDI stack and write a single sentence on the workflow they complete.',
          expectedAnswer:
            'A strong response is honest about which layer each vendor occupies and names the closed loop they actually deliver rather than the one they market.',
        },
        {
          prompt:
            'Draft the two procurement questions you will ask every vendor in your next round, designed to surface the workflow rather than the feature.',
          expectedAnswer:
            'A strong response phrases the questions in operational language: which workflows close, and what does the closeout record contain.',
        },
      ],
      recommendedReading: [
        { label: 'Knowledge base: Category boundary with cameras', href: '/knowledge-base/category-boundary-with-cameras' },
        { label: 'Knowledge base: Category boundary with AI dashboards', href: '/knowledge-base/category-boundary-with-ai-dashboards' },
        { label: 'Knowledge base: Category boundary with BIM', href: '/knowledge-base/category-boundary-with-bim' },
        { label: 'Glossary: Category boundary', href: '/glossary/category-boundary' },
      ],
    },
    {
      slug: 'command-views-and-portfolio-thinking',
      title: 'Command views and portfolio thinking',
      summary: 'How portfolio command differs from project monitoring, and how organisations turn recurring patterns into programmes of work rather than repeated incidents.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'What this lesson is about',
          body: 'The final lesson moves from project to portfolio. It is the stage of RDI most often missed and most consequential when present. By the end of this lesson you should be able to describe what a command view contains, how it differs from a project monitoring view, what a pattern of recurrence is and how to recognise one, and how the leadership team converts a pattern into a programme of work rather than absorbing it as another set of incidents. The lesson is for project directors moving into portfolio roles, owner representatives running multi-site programmes, and digital construction leads who need to design what their leadership team should be looking at on a Monday morning. The portfolio stage is where RDI starts to behave like an organisational discipline rather than a project tool.',
        },
        {
          title: 'Project view versus portfolio command view',
          body: 'A project view answers one question: what is happening on this project. A portfolio command view answers a different question: what is happening across all my projects, and where should attention go this week. The two views need different summaries. A project director needs depth on one site, with daily walks, recent observations, claim status, and the next milestone. A portfolio leader needs comparison across many sites, with exception counts by package, claim exposure by region, recurrence rates by supplier, and a small number of named programmes of work. Building one as if it were the other tends to produce a view that satisfies neither. The portfolio leader staring at a project view feels overwhelmed by depth. The project director staring at a portfolio view feels disconnected from her own site. The cure is to design each view for its real audience.',
        },
        {
          title: 'What a command view actually contains',
          body: 'A useful command view is short. It contains a small number of exception streams across the portfolio: open safety observations past their closeout date, claims with evidence gaps, packages with recurring non-conformances, suppliers with attendance issues, projects whose capture coverage has dropped below the agreed threshold. Each stream has a count, a trend over the last four weeks, and a drill-down to the underlying records. The view is read in fifteen minutes a week by the leadership team. Anything that does not earn its place in those fifteen minutes is moved to the project view. The discipline is restraint. A command view that looks impressive but takes ninety minutes to absorb is not used. A command view that fits on one screen and is read every Monday changes how the organisation directs attention.',
        },
        {
          title: 'Patterns of recurrence as the unit of portfolio learning',
          body: 'A pattern of recurrence is the same exception arising on multiple projects, often in the same phase or package. A specific subcontractor has attendance gaps on three projects. The slab pour stage produces non-conformances in the same crew across two regions. Deliveries on Thursday afternoons miss their dockets across the portfolio. The portfolio view surfaces these patterns; the project view rarely does, because each project sees only its own version. A pattern of recurrence is not a finding. It is a programme of work. Supplier reviews. Capture-plan templates. Training rotations. Procurement-clause changes. The work belongs at organisational level, and the command view is what makes it visible. The mature portfolio runs three or four such programmes at any given time, each with an owner and a closeout milestone, and the rest of the organisation stops trying to relearn the same lesson on every project.',
        },
        {
          title: 'How portfolio thinking changes the leadership rhythm',
          body: 'A leader with a working command view spends less time chasing project-level updates and more time on programme-level work. The conversations move from individual incidents to organisational patterns. The decisions move from this-week to this-quarter. Project directors stop being asked to summarise their site to the leadership team verbally; the data already arrives, and the conversation is about interpretation and action. The discipline takes time to develop. The first six months are noisy: the patterns are unfamiliar, the streams are over-tuned, the response programmes are sometimes overweight or underweight. The rhythm settles by month nine, and by month twelve the leader who has stuck with it tends to find that projects perform more consistently and that the organisation learns from each one. That, in the end, is what optimisation looks like in practice. It is unglamorous, repeatable, and quietly transformative.',
        },
      ],
      checkpoint: 'For your portfolio, can you name a pattern of recurrence that has appeared on three or more projects?',
      exercises: [
        {
          prompt:
            'Sketch the one-screen command view your leadership team should read every Monday. Name the exception streams, the trend window, and the closeout owner for each.',
          expectedAnswer:
            'A strong response keeps the view short, names specific streams rather than generic categories, and assigns a single owner per stream.',
        },
        {
          prompt:
            'Identify one pattern of recurrence in your portfolio and propose the programme of work it should become, with an owner and a closeout milestone for the next quarter.',
          expectedAnswer:
            'A strong response treats the pattern as a programme rather than a finding and resists the urge to address every recurrence at once.',
        },
      ],
      recommendedReading: [
        { label: 'Glossary: Command view', href: '/glossary/command-view' },
        { label: 'Glossary: Pattern of recurrence', href: '/glossary/pattern-of-recurrence' },
        { label: 'Knowledge base: The RDI maturity curve', href: '/knowledge-base/the-rdi-maturity-curve' },
        { label: 'Field note: Command views are not dashboards', href: '/resources/command-views-are-not-dashboards' },
      ],
    },
  ],
}
