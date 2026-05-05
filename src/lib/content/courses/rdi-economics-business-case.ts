import type { Course } from '../types'

export const course: Course = {
  slug: 'rdi-economics-business-case',
  title: 'RDI Economics for the Business Case',
  level: 'Executive',
  estimatedMinutes: 102,
  summary:
    'A short executive course for finance partners, commercial directors, and senior owner-side leaders on building, defending, and tracking a Reality-Driven Intelligence business case with the discipline finance expects. The reader is the person assembling or scrutinising the spreadsheet, not the user of the workflow.',
  audience: ['Finance partner', 'Commercial director', 'Project director', 'Owner representative'],
  outcomes: [
    'Separate operational savings, risk mitigation, and capacity cleanly on three lines.',
    'Publish ranges, sources, and a one-page sensitivity table that survives finance scrutiny.',
    'Distinguish replacement and supporting models and know when each is appropriate.',
    'Use directional public numbers without confusing education with quoting.',
    'Stand up an outcomes tracker so the next case is built on actual rather than promised data.',
  ],
  lessons: [
    {
      slug: 'three-shapes-of-rdi-value',
      title: 'The three shapes of RDI value',
      summary:
        'How operational savings, risk mitigation, and capacity behave differently in a business case, and why blending them into one number tends to weaken rather than strengthen the case.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'Why one number is the wrong number',
          body: 'Most rejected business cases share a single feature: the value sits on one line. A finance partner reads a single headline figure and immediately asks what is inside it. If the answer is a blend of recurring time savings, low-frequency risk credits, and strategic capacity arguments, the case is already losing. Each of those shapes has different evidence, different uncertainty, and different defensibility. Putting them on one line forces the reader to apply the discount they would apply to the weakest of the three components, which means the strongest one carries the discount it does not deserve. The finance discipline is the opposite. Put each shape on its own line. Let the reader trust the first line on its own merits. Earn the right to be heard on the second. Treat the third as the strategic argument it is. The total is reached by addition, not by alchemy. This lesson sets out the three shapes — operational savings, risk mitigation, capacity — so every later lesson can refer back to them by name. The reader who can sort any benefit claim into one of the three is already ahead of most authors. There is a deeper reason the blended number fails. Operational savings are governed by hours and rates, both of which the team can observe directly. Risk mitigation is governed by probabilities the team can only estimate. Capacity is governed by counterfactual hires that may or may not have happened. The three live on different epistemic floors. Forcing them into one number is the analytical equivalent of averaging temperatures across three rooms with different thermometers and reporting the result to one decimal place. The reader feels the mismatch even when they cannot articulate it, and the case loses ground without the author understanding why.',
        },
        {
          title: 'Operational savings: the recurring line',
          body: 'Operational savings are recurring time and cost the workflow removes. Manual report preparation. Evidence retrieval from cluttered drives. Site visits whose only purpose is to look at something. The model is direct. Identify the recurring task, estimate the hours it consumes, multiply by loaded cost, apply over the contract life, subtract the workflow cost. As a worked feel: a senior commercial manager at a loaded rate of around 90 to 130 euro per hour spending an estimated four to six hours per month assembling progress packs, across a thirty-month contract, sits between roughly 11,000 and 23,000 euro on that single line before counting the people who supply inputs. Avoided site visits behave the same way. A two-hour return drive at a 110 euro loaded rate, twice a fortnight, is around 11,000 euro across the same contract. Do not write 21,000 euro. Write a range, footnote each input, and name the variance. Operational savings are the most defensible category in any case because the inputs are observable and the team can sense-check them. They are usually the line that opens the finance conversation and earns the rest of the case its hearing. Three sub-categories deserve named lines rather than being lumped together. Report preparation: the primary author plus the people supplying inputs, multiplied by frequency. Evidence retrieval: the unit cost per retrieval — typically 20 to 60 minutes of a manager´s time when the request is non-trivial — multiplied by an honest estimate of retrieval volume per month. Avoided site attendance: the visits whose only purpose is to verify something a remote view could verify, costed at travel time plus the loaded rate. Each sub-category has its own owner and its own benchmark. A case that lists them separately reads as the work of someone who has thought about the operating week, not someone who has reached for a round-number total.',
        },
        {
          title: 'Risk mitigation: the credit line',
          body: 'Risk mitigation is the value of avoiding low-frequency, high-cost events. Disputes. Theft. Regulatory breaches. Stand-down claims. The event has not happened, so the model takes three uncertain inputs: cost of the event if it occurs, probability across the contract life, and the proportion of risk the workflow plausibly removes. The product is the expected credit. None of the three is precise, which is the reason for ranges rather than point estimates. A worked example. A delay-related dispute on a mid-sized commercial fitout might cost 250,000 to 600,000 euro all-in once legal, expert, internal time, and settlement are counted. If the contract life carries a 20 to 35 per cent base probability of one such event, and the time-aligned record removes 30 to 50 per cent of that probability, the expected credit lands somewhere between 15,000 and 105,000 euro. That width is the honesty. Publish the band. Risk mitigation belongs in any case but should not be expected to carry one alone. Cases that lean on the mid estimate of the risk line tend to lose finance partners on first read. Probability deserves particular care. Industry-wide statistics on dispute frequency are unreliable because they conflate sectors, contract types, and claim definitions. The defensible probability is one the analyst can derive from the organisation´s own past projects, even if the sample is small. Three projects with one dispute between them gives a base rate of around 33 per cent with a wide confidence interval; saying so honestly beats borrowing a 60 per cent figure from a vendor white paper. The same logic applies to severity distributions. Tail events — the dispute that lands at 1.5 million euro rather than 300,000 — should be modelled as a separate line with its own band rather than averaged into the main estimate, because the tail behaves differently and reviewers will ask about it explicitly.',
        },
        {
          title: 'Capacity: the strategic line',
          body: 'Capacity is the additional throughput the team can carry without adding headcount. A project director who can monitor more sites because the morning view tells them where to spend their day. A portfolio leader who can take a project that would otherwise have required a new hire. Capacity is hard to attribute precisely on a single project and most powerful at portfolio level. Quantify it where you can — for example, the cost of one avoided regional hire at fully loaded 140,000 to 180,000 euro per year — and present the rest as a strategic argument with named indicators. The argument is not less valuable for being strategic; it is just a different kind of evidence. Capacity belongs in the case but should be presented for what it is. Finance partners accept strategic arguments when they are labelled as such; they reject them when they are dressed up as quantified savings. The most defensible capacity argument is the one expressed at portfolio level over a multi-year horizon. An organisation running ten concurrent projects where each project director historically managed one and a half projects on average can describe a credible capacity gain at the level of a regional management line, not at the level of any single project. The supporting indicators — number of exceptions surfaced per week, average time to first decision on a flagged event, count of meetings replaced by an asynchronous review — are leading rather than lagging. They show the mechanism by which capacity is gained even before the headcount line moves. Naming those indicators in the case lets the reader verify the mechanism, which is what makes the strategic argument earn its place rather than merely occupy space.',
        },
        {
          title: 'Governance: how to keep the three shapes separated',
          body: 'The discipline does not survive on goodwill. Build it into the template. The case has three named sections. Each section opens with a one-sentence statement of what it does and does not include. Each line cites a source. The executive summary names the total in the form low — mid — high, then breaks the mid by shape. Reviewers are asked to challenge each shape on its own terms. Capacity arguments that move into the operational section are sent back. Risk credits that creep into operational savings are sent back. The boring rule is the value. A team known for keeping the three shapes separated tends to be heard more carefully on the next case, even when the numbers are challenged. A useful governance habit is the pre-submission peer read by someone who has built a case before but not this case. The peer reader has one job: confirm that no line crosses a shape boundary. They do not check the numbers. They check the categorisation. A line in the operational section that turns out to depend on a probability of a future event is reclassified as risk mitigation. A line in the risk section that turns out to depend on time saved per occurrence is moved to operational savings. The peer read takes thirty minutes and prevents the categorisation errors that are otherwise discovered by the finance partner during review, when the cost of the error is much higher.',
        },
      ],
      checkpoint: 'For a current case, can you separate the three shapes onto three lines without any double counting?',
      exercises: [
        {
          prompt: 'Take any benefit claim you have heard about RDI in the last month. Sort it into operational saving, risk mitigation, or capacity, and write the model that would price it. Mark the largest source of variance.',
          expectedAnswer:
            'A benefit claim sorted into one shape, the model written in three to five lines (input, range, source, multiplier, contract life), and the largest variance named — typically the proportion replaced for operational savings, the probability for risk mitigation, or the attribution rate for capacity.',
        },
        {
          prompt: 'Write a one-page executive summary header for a case you are working on. Give the total as low — mid — high, then split the mid figure across the three shapes.',
          expectedAnswer:
            'Three numbers on one line, then a three-line breakdown that adds back to the mid. No blending. Each line is a single shape. The widest band is usually risk mitigation.',
        },
      ],
      recommendedReading: [
        { label: 'ROI method overview', href: '/knowledge-base/roi-method-overview' },
        { label: 'Manual reporting savings model', href: '/knowledge-base/manual-reporting-savings-model' },
        { label: 'Dispute avoidance credit model', href: '/knowledge-base/dispute-avoidance-credit-model' },
        { label: 'Risk mitigation language for CFOs', href: '/resources/risk-mitigation-language-for-cfos' },
      ],
    },
    {
      slug: 'confidence-bands-and-credibility',
      title: 'Confidence bands and credibility',
      summary:
        'Why a defensible business case publishes ranges, sources, and assumptions, and why a single confident number tends to lose finance trust before the meeting starts.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'What ranges signal',
          body: 'A range tells the reader the analyst understood the inputs were uncertain and refused to pretend otherwise. A single confident number tells the reader the opposite. Finance partners are trained to read both signals quickly. The first earns time. The second earns scepticism. Ranges are not hedging. A 12,000 to 19,000 euro saving on manual reporting is not a worse claim than a 17,000 euro point estimate; it is the more truthful version of the same claim. The width of the band is itself information. A narrow band means the inputs are well understood. A wide band means the analyst is honest about how much is still estimate. Both are acceptable; what is not acceptable is a narrow band on inputs that are obviously uncertain. Publish low, mid, and high for each line of value. Carry that discipline through to the total. The board pack tends to quote the mid, but the appendix shows the bracket. Credibility comes from the visibility of the bracket, not from the cleverness of the mid. Be sceptical of round numbers. A reported 100,000 euro annual saving almost never reflects measurement; it reflects rounding to the nearest psychologically comfortable threshold. The same reported as 92,000 to 118,000 euro signals that someone counted. A useful self-test before submission: scan every total in the document. If more than two sit on a round multiple of 5,000 or 10,000 euro, the document is probably hiding the real working. Either narrow the bands by interrogating the inputs, or accept the rougher numbers and present them as ranges. Either response builds credibility; the rounded point estimate erodes it.',
        },
        {
          title: 'The mechanics of building a band',
          body: 'A defensible band is not one number plus and minus ten per cent. It is built from the inputs. For each input — hours, frequency, probability, cost — write a low, mid, and high estimate with a one-line source. Multiply them through. The output band is the natural product of the input bands; it is not negotiated. A worked illustration on a manual reporting line. Hours per pack: 4 to 7. Packs per month: 3 to 5. Loaded rate: 90 to 130 euro. Contract life: 30 months. Multiplied through, the low end is 4 x 3 x 90 x 30 = 32,400 euro and the high end is 7 x 5 x 130 x 30 = 136,500 euro. That is too wide for a board pack. The discipline is to interrogate the widest input — usually frequency — and tighten it with project-specific data. The narrowed band might land at 45,000 to 80,000 euro. Show the working. The reader who can see the inputs cannot accuse the model of being a conjuring trick. Two refinements are worth the small additional effort. First, treat correlated inputs together rather than independently. Hours and frequency tend to move in the same direction on the same project, so multiplying their independent extremes overstates the true band. The honest way to handle this is to define a low scenario, a mid scenario, and a high scenario, each with its own consistent set of input values. Second, distinguish irreducible uncertainty from reducible uncertainty. The loaded rate is reducible — the budget partner can confirm it tomorrow. The probability of a major dispute is irreducible without project history. Mark the reducible inputs and commit to narrowing them before a defined date. The case becomes a living document with a closing band, which is both more useful and more credible.',
        },
        {
          title: 'Sensitivity tables and the inputs that move the result',
          body: 'A one-page sensitivity table is the single highest-yield artefact in a credible case. Five rows, three columns. Each row names an input. Each column shows the total at the low, mid, and high value of that input, holding others at mid. The reader instantly sees which inputs matter. Typically, two inputs move the result by more than 60 per cent of its range, and the rest barely matter. That is useful for two reasons. First, it tells the reader where the analyst should be most careful. Second, it tells reviewers which assumptions to argue about. A case without a sensitivity table forces every assumption to be relitigated; a case with one focuses the conversation. As a rule of thumb in RDI cases, the heaviest sensitivities tend to be the proportion of report preparation time replaced, the probability of the largest risk event, and the loaded cost rate. Senior reviewers will go for those three first. Be ready. A useful refinement is the two-way sensitivity grid for the largest pair of drivers. A small five-by-five matrix showing the total at combined values of the two inputs communicates the joint risk in a way that one-way tables cannot. Reviewers tend to look at the worst corner of the grid first; if that corner is still positive after workflow cost and discount, the case is robust to the two largest sources of uncertainty simultaneously. If it is negative, the document should say so, name the corner explicitly, and describe the conditions under which that corner becomes plausible. That sentence is the single highest-trust paragraph the case can contain.',
        },
        {
          title: 'When the honest model says no',
          body: 'Sometimes the honest model says the case does not pay back. The discipline is to report that finding rather than to massage the inputs. A case that does not pay back at the low end may pay back at the mid; a case that does not pay back at the mid is probably not the right investment, and the team that says so out loud earns trust for the next round. Models that always come out positive eventually stop being read. A specific failure mode to avoid: anchoring on an internal threshold — say, a 30 per cent IRR — and walking the inputs back until the answer clears it. Reviewers spot this. The fingerprint is suspiciously round numbers, suspiciously narrow bands, and a sensitivity table whose total moves by less than the inputs. The role of the model is to support the decision, not to predetermine it. The teams that publish a no-go finding once tend to have their yes-go findings believed for years afterwards. A no-go finding is rarely binary. Often the right output is a smaller go: a phased pilot on two projects rather than a portfolio rollout, or a narrower workflow scope that targets the strongest line and defers the weaker ones. The case that distinguishes a full no from a partial yes is the one finance partners reach for first. It saves the organisation the political cost of a hard rejection while preserving the discipline of letting the numbers speak. The author who proposes a smaller go in response to the honest model demonstrates the calibration the next case will need.',
        },
        {
          title: 'Failure modes that cost cases',
          body: 'Three patterns recur. First, false precision: a 23,847 euro line item read as if the analyst measured it to the euro when the inputs are estimates accurate to plus or minus 25 per cent. Second, asymmetric ranges: a low end ten per cent below the mid and a high end forty per cent above, designed to nudge the reader toward the upside. Third, missing sources: a benchmark with no citation, a probability with no derivation. Each pattern is small on its own. Together they signal that the analyst is selling rather than measuring. Fix all three before submission. Round to two significant figures where the inputs justify nothing more. Make the band roughly symmetric or explain why it is not. Cite every benchmark. The finance partner who reads a case with these three patterns absent will read the next one from the same team carefully. The one who reads them present will read the next one more sceptically than the work deserves. A fourth pattern is more subtle and more damaging: counting the same hour twice. The senior commercial manager who is freed from progress pack preparation appears on a saving line. The same hour reappears on a capacity line on the basis that the freed time enables a new activity. Pick one. Either the saving is operational and the time is recovered, or the saving is strategic and the time is reallocated. Counting both is the single most common reason credible operational savings get challenged unfairly, because it taints the whole document with the suspicion of double counting once a reviewer spots one instance.',
        },
      ],
      checkpoint:
        'For a current case, are the assumptions, sources, and ranges visible enough that finance could interrogate any single line in under five minutes?',
      exercises: [
        {
          prompt:
            'Build a five-row sensitivity table for the case you are working on. For each row, hold all other inputs at mid and vary the named input across its low, mid, and high. Note which two inputs explain most of the range.',
          expectedAnswer:
            'A table with five rows and three result columns. Two of the five rows produce noticeably wider columns than the others; those are the inputs to interrogate first. The other three are real but secondary.',
        },
        {
          prompt:
            'Take one line of your case where you wrote a point estimate. Rewrite it as low — mid — high, with each input given its own band and a one-line source.',
          expectedAnswer:
            'A line item showing input bands, sources, and the resulting output band. The output band is wider than the original point estimate. The width is acceptable because it is now defensible.',
        },
      ],
      recommendedReading: [
        { label: 'ROI confidence and credibility', href: '/knowledge-base/roi-confidence-and-credibility' },
        { label: 'Confidence bands and honesty', href: '/resources/confidence-bands-and-honesty' },
        { label: 'Confidence band (glossary)', href: '/glossary#confidence-band' },
      ],
    },
    {
      slug: 'replacement-versus-supporting-models',
      title: 'Replacement versus supporting models',
      summary:
        'Why the two main shapes of RDI value model differently, and why naming each one separately tends to strengthen the case rather than weaken it.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'The clean cut between the two shapes',
          body: 'A replacement workflow substitutes for a line that already sits in the project budget. A supporting workflow improves a process the project already runs. The cut is sharper than it sounds, and finance partners feel the difference within a paragraph. Replacement value points at a budget owner; the budget owner can be asked to confirm the line. Supporting value points at a process; the process owner can describe the saving but cannot remove a budget line for it. Both are real. They model differently and they read differently. The case that names each one separately gets read on its merits. The case that blends them gets read with the suspicion the weaker shape attracts. The discipline of separation is the easiest credibility win available to the analyst. A simple test sorts most lines correctly. Ask: if the workflow is removed tomorrow, does a budget line reappear, or does a process degrade? If a line reappears — the photo service is recommissioned, the gate marshal is rehired — the saving is replacement. If a process degrades — meetings run longer, claims files take longer to assemble — the saving is supporting. The test is binary by design. Lines that resist the test usually resist because they are misclassified. Run the test on every benefit claim before assigning it to a section. The minute spent applying it saves an hour later when a reviewer applies it instead.',
        },
        {
          title: 'Replacement workflows and how to model them',
          body: 'A replacement workflow takes a cost out of the project. Outsourced progress photo services. Third-party gate marshals. Externally produced monthly reports. Each line has a budget owner, a contracted rate, and a renewal date. The model is direct: identify the line, confirm the rate with the budget owner in writing, estimate the proportion replaced, apply over the contract life, subtract the workflow cost. A worked illustration. A monthly third-party progress photo service at 1,800 euro per month for 24 months is 43,200 euro. A 70 to 90 per cent replacement gives 30,240 to 38,880 euro of avoided cost, less the workflow run-rate. The output is narrow because the inputs are concrete. Replacement workflows are the easiest line to defend, and they should usually open the case. They make the rest of the document credible by association. The largest replacement opportunities tend to live in three places. First, third-party site capture services where the contract has a fixed monthly rate. Second, in-house manual reporting where a named role spends a measurable share of the working week on it. Third, evidence retrieval performed by a project manager who otherwise would not touch a drive. Confirm each line with the budget partner before publishing. The confirmation is not a formality; it is the source. A replacement claim without a confirmation reads as an estimate of someone else´s budget, which is the weakest position a case can take. With the confirmation, the line becomes a fact the reviewer cannot challenge without challenging the budget partner directly.',
        },
        {
          title: 'Supporting workflows and how to model them',
          body: 'A supporting workflow improves a process the project already runs. The OAC meeting still happens; it just runs better. The claims process exists; it just produces stronger files faster. The morning routine of the project director still exists; it just routes attention more accurately. The value is real but harder to attribute to a budget line because no budget line disappears. Time-saving is the right model, applied with care. Estimate the hours per occurrence saved. Multiply by frequency. Multiply by loaded cost. Where the saving is shared across many people in small slices — half an hour each across eight people in a weekly meeting — the model should be conservative because each individual saving is hard to verify. A worked feel. A weekly OAC meeting with eight participants saving roughly 25 to 40 minutes each, at a blended loaded rate of 80 to 120 euro per hour, runs at roughly 270 to 640 euro per meeting, or 14,000 to 33,000 euro per year. Publish the band. Acknowledge that the people did not get the time back as a billable hour; instead, the meeting ran on time and decisions arrived faster. A useful convention for supporting workflows is the attribution discount. The raw time-saving is the first number. Apply a discount — typically 30 to 60 per cent — to reflect the fact that not all saved minutes are productively reabsorbed. The discounted figure is the one the case publishes. Reviewers respond well to the discount because it acknowledges what they would otherwise raise themselves. Authors who apply it once tend to apply it permanently because it survives scrutiny better than the gross figure ever does.',
        },
        {
          title: 'Blending the two shapes in one case',
          body: 'Most projects carry both shapes. The case benefits from naming each. Open with the replacement value because it is the easiest to defend. Then add the supporting value with its own ranges and assumptions and a clear note on attribution. Finance partners who would have rejected an inflated single number tend to accept the same total when it is presented in its two natural shapes. The discipline is the separation, not the sum. A worked outline: section A is replacement, with each line citing the budget owner and rate. Section B is supporting, with each line giving frequency, hours per occurrence, and the population affected. The executive summary shows the two subtotals and the combined total. The reader who disagrees with the supporting line can still approve on the replacement subtotal alone. That option is itself a kind of credibility. A typical balanced case lands with replacement value somewhere between 40 and 70 per cent of the total operational saving, with supporting value making up the rest. If replacement is below 30 per cent, the case is leaning on time savings the reviewer cannot verify; either narrow the supporting band by tightening the attribution discount, or look harder for replacement opportunities. If replacement is above 80 per cent, the case is probably solid but small; that is also acceptable, and it is more credible than a blended total of similar size that obscures its composition. Show the proportion explicitly.',
        },
        {
          title: 'Failure modes around the boundary',
          body: 'Two failure modes recur at the boundary. First, double counting: claiming the avoided cost of an outsourced service and the time saving of the internal owner of that service. The cost line replaces the service; the internal time was already used to manage it. Pick one. Second, attribution drift: claiming a supporting saving that depends on a behaviour change the project has not yet committed to. If the OAC meeting is going to keep its existing length regardless, the supporting saving on that meeting is zero. Both errors are honest. Both look dishonest to a reviewer. The fix is procedural. Walk each line past its owner. Ask whether the saving they are agreeing to is reflected in their plan for next year. If not, do not claim it. The case loses a small number on paper and gains a large amount of trust in the room. A third failure mode worth flagging: the legacy line that survives the change. The team adopts the workflow but keeps producing the old report alongside it for six months because someone senior asked for both. The replacement saving on that line is zero for the duration of the parallel running. An honest case names the parallel-running period explicitly and starts the saving clock at the agreed sunset date. Reviewers value this kind of detail because it shows the analyst has thought about the operational reality rather than the paper plan.',
        },
      ],
      checkpoint:
        'For a current case, can you sort each line into replacement or supporting, name the budget owner or process owner, and confirm there is no double counting at the boundary?',
      exercises: [
        {
          prompt:
            'Pick three benefits you would model on your current project. For each, decide whether it is replacement or supporting, name the budget or process owner, and write the source line you would use to confirm the input.',
          expectedAnswer:
            'Three lines, each tagged R or S, each with a named owner and a source. Replacement lines reference a budget rate or contract; supporting lines reference a frequency and a population.',
        },
        {
          prompt:
            'Find one line in a draft case that risks double counting at the replacement-supporting boundary. Rewrite it so the same value is claimed only once, and explain in one sentence which shape it belongs to.',
          expectedAnswer:
            'A revised line that picks one shape, drops the duplicate, and gives a one-sentence rationale. The rewrite usually loses a small amount of headline value and earns a noticeable amount of credibility.',
        },
      ],
      recommendedReading: [
        {
          label: 'Modelling replacement workflows versus supporting workflows',
          href: '/knowledge-base/roi-modelling-replacement-vs-supporting',
        },
        { label: 'Replacement vs supporting workflows', href: '/resources/replacement-vs-supporting-workflows' },
        { label: 'Replacement workflow (glossary)', href: '/glossary#replacement-workflow' },
        { label: 'Supporting workflow (glossary)', href: '/glossary#supporting-workflow' },
      ],
    },
    {
      slug: 'directional-public-numbers',
      title: 'Directional public numbers',
      summary:
        'Why public ROI calculators have a distinct role in the conversation, and how to use them without confusing education with quoting.',
      estimatedMinutes: 16,
      sections: [
        {
          title: 'What a directional number is for',
          body: 'A public ROI number is educational. It uses industry-typical assumptions to give a buyer a feel for the shape of the value before any project-specific data exists. It is not a quote and should never be presented as one. The role of the public number is to make the conversation possible — to move a buyer from never having considered the economics to having a rough mental anchor — not to settle the conversation. A buyer who sees a directional figure together with a clear note of what would change in a project-specific model is better armed than one who is given either alone. The framing matters. A web page that says a typical mid-sized contractor sees somewhere between 4x and 9x return on a two-year contract is honest. A web page that says you will see 7.2x return is dishonest, because nobody knows that yet, including the publisher. The same logic applies inside the buyer organisation. An owner´s rep doing a first pass for the board needs a directional figure to know whether the conversation is worth having. A 4x to 9x band tells them yes, the order of magnitude justifies a deeper look. A polished 7.2x figure tells them yes — and tempts them to skip the deeper look, which is exactly the failure mode the directional number is supposed to avoid. The discipline serves both publisher and reader by keeping the depth of the next conversation honest.',
        },
        {
          title: 'How to publish a directional model honestly',
          body: 'A directional model should disclose its limits on the page where it is read. The assumptions used. The ranges around them. The disclaimer that project-specific data will refine the picture. The disclosure does not undermine the model; it strengthens it. A buyer who sees the limits acknowledged tends to trust the model more, not less. A workable shape: name the typical contract size assumed, the typical reporting frequency assumed, the typical loaded rates assumed, and the typical workflow run-rate. Show the inputs as bands. Show the output as a band. State on the page that a project-specific case will narrow the band by replacing typical inputs with project facts. A buyer who reads this once tends to be a better counterparty for the rest of the procurement, because they have already learned to expect bands rather than points. A specific construction works well in practice. The page presents three pre-built scenarios — a typical residential build, a typical mid-sized commercial fitout, a typical infrastructure programme — each with named inputs and a banded output. The buyer self-selects the closest scenario. The page makes it explicit that the closest scenario is still typical, not theirs. The next click takes them to a workshop request for the project-specific case. That construction is honest because it teaches the buyer the structure of the model rather than just delivering a number. Buyers who arrive at the workshop having read it tend to ask better questions and build better cases internally.',
        },
        {
          title: 'When the directional number must give way',
          body: 'The directional model should hand over to a project-specific case before procurement, certainly before contract. The shape of the model is the same; the inputs become facts rather than industry estimates. The width of the range narrows. The case is then ready for the finance partner´s scrutiny. A directional model presented at the procurement stage as if it were a quote is the fastest way to lose finance trust permanently. The handover is procedural. The directional page links to the project-specific template. The sales conversation includes a named workshop where project facts are gathered. The finance team sees the project-specific case with its sources visible and its bands narrower than the directional version. If the project-specific number is materially worse than the directional one, that finding is reported. The buyer keeps trust in the publisher precisely because the publisher refused to pretend the directional number applied. A useful internal rule is that no proposal pricing leaves the building without a project-specific case attached. If the project-specific case has not yet been built, the proposal does not go. That rule is unpopular with sales teams in week one and unanimously supported in year two, because the close rate on proposals with attached project-specific cases is materially higher than on proposals built around directional figures, and the post-sale relationship is calmer because the buyer is not surprised by the gap between marketing claim and reality.',
        },
        {
          title: 'Anchoring effects and how to manage them',
          body: 'Directional numbers anchor. A buyer who has read a 7x figure on a website will mentally compare any project-specific case to that anchor. If the project-specific case lands at 4.2x, the buyer feels disappointed even when the case is genuinely strong. Manage the anchor by showing the directional figure as a band — say, 4x to 9x — and by stating that the lower end of the band is more typical for the project type the buyer is asking about. The buyer then arrives at the project-specific workshop with realistic expectations. Anchoring is not solved by hiding the directional figure; it is solved by widening it honestly. The same logic applies internally. An owner´s rep who has been told a portfolio level number for a year will compare every project-specific case to it. Set the anchor wide. Adjust it as evidence accumulates. A practical hygiene measure: every public directional figure carries a published date and an explicit reference to the assumptions it was built on. When project-specific cases start landing, the directional figure is updated to reflect the average of those cases rather than the original aspirational range. The update is noted publicly. Buyers and internal stakeholders see the discipline operating. The directional band naturally narrows as evidence accumulates, which is exactly the behaviour a buyer would expect from a model that is being maintained rather than marketed.',
        },
        {
          title: 'Governance: keeping the public and project-specific worlds separate',
          body: 'The boundary needs to be visible to the buyer and to the team. On the public side, the calculator is labelled directional, the inputs are typical, the output is a band, and the page links to the project-specific path. On the internal side, the project-specific case lives in a different template, with named owners for each input and a date by which the case becomes the contractual basis of conversation. Sales material that quotes a directional number in a procurement document is sent back. Project-specific numbers that drift onto the public site without anonymisation are sent back. The boundary is small, but the credibility it preserves is large. The discipline is, in effect, that the public framework belongs to the buyer and the project-specific case belongs to the project. Mixing them is what loses trust. The clearest signal of a healthy practice is that the public page becomes less impressive over time, not more. As real cases accumulate, the directional band narrows toward the centre of mass of those cases, and the headline figure becomes less startling. That is the right direction. A public number that becomes more impressive over time is being marketed; a public number that stabilises is being maintained. Buyers feel the difference within a single visit, even if they could not articulate it. Reviewers internal to the buyer feel it more strongly still. The maintained number is the one the case will be tested against, and it should be the one being maintained.',
        },
      ],
      checkpoint:
        'When you have used directional numbers in a buyer conversation, did the page they read also publish the disclosure that project-specific data would refine them?',
      exercises: [
        {
          prompt:
            'Open a directional ROI calculator (your own or a comparable one). Note three assumptions that would change in a project-specific model and the direction each one would move the result.',
          expectedAnswer:
            'Three named inputs — typically loaded rate, reporting frequency, and the proportion of workflows replaced — with a one-line note on whether the project-specific value is likely to push the result up or down.',
        },
        {
          prompt:
            'Draft the disclaimer paragraph that should accompany a public directional figure. It should be short, plain, and explicit about what the number is and is not.',
          expectedAnswer:
            'Three to five sentences. States that the figure is directional. Names the typical assumptions used. Promises a project-specific refinement before any procurement decision. Avoids hedging language that reads as marketing.',
        },
      ],
      recommendedReading: [
        {
          label: 'Directional assumptions vs customer numbers',
          href: '/resources/directional-assumptions-vs-customer-numbers',
        },
        { label: 'Directional assumption (glossary)', href: '/glossary#directional-assumption' },
        { label: 'ROI method overview', href: '/knowledge-base/roi-method-overview' },
      ],
    },
    {
      slug: 'building-a-defensible-business-case',
      title: 'Building a defensible business case',
      summary:
        'A practical walkthrough of assembling a business case that survives finance scrutiny: structure, sources, NPV framing, sensitivity, and the rehearsal that surrounds the document.',
      estimatedMinutes: 18,
      sections: [
        {
          title: 'Structure that the reader can navigate',
          body: 'A defensible case has a predictable structure. Executive summary that names the total as low — mid — high and breaks the mid by shape. Operational savings section with each line modelled. Risk mitigation section with each event identified, sized, and ranged. Capacity section with strategic argument and any defensible quantification. NPV summary with the discount rate stated and the assumption inputs visible. Sensitivity table covering the inputs that move the result most. Assumptions appendix. The structure does not need to be elegant; it needs to be navigable. A finance partner with twenty minutes should be able to find any single line and its source without help. The test is simple: hand the document to a reviewer who has not seen it before and ask them to find three specific assumptions in two minutes. If they cannot, the structure has failed regardless of how strong the analysis is underneath. A practical convention that pays back its small cost: number every line item across the case so the executive summary, the body, and the appendix all reference the same identifier. Line 4.2 in the executive summary points to line 4.2 in the operational savings section, which points to line 4.2 in the assumptions appendix. The numbering looks bureaucratic and reads as discipline. Reviewers can navigate by line number rather than by page. Authors can update a single line across three views without losing track. Cases written this way tend to age better than ones written without numbering, because future revisions remain navigable.',
        },
        {
          title: 'Sources, NPV framing, and the discipline of citation',
          body: 'Every quantitative claim cites its source. Internal time estimates from the team that does the work, dated. Cost rates from the budget partner, named. Industry benchmarks from named publications. Each source is referenced and re-checked at scheduled intervals. NPV framing matters when the contract life is more than a year. A typical RDI case runs 24 to 36 months, and discounting at the organisation´s WACC — often somewhere between 7 and 12 per cent — meaningfully shifts the result. A 60,000 euro saving in year three is not 60,000 euro today. State the discount rate. State whether the workflow cost is treated as opex or capex. State whether the benefits are pre-tax or post-tax. The conventions are boring; their absence is what kills cases. A case with hidden sources tends to fail at the first scrutiny. A case with visible sources, an explicit discount rate, and a stated tax treatment tends to pass even when the numbers are challenged. A worked NPV illustration. A 240,000 euro undiscounted three-year saving distributed roughly evenly across the period, discounted at 9 per cent, lands at around 202,000 euro in present-value terms. The 38,000 euro gap is not a flaw to be hidden; it is information the reviewer expects to see. State the gap, name the discount rate, and let the reader confirm the arithmetic. Cases that quote undiscounted totals to a finance audience tend to be challenged on first read regardless of the underlying quality. Cases that quote discounted totals tend to be discussed on the merits.',
        },
        {
          title: 'Sensitivity and the one-page table',
          body: 'A board pack that contains a one-page sensitivity table is unusually well prepared. Five to seven rows, each naming one input. Three columns, showing the total at the low, mid, and high value of that input. The reader sees in twenty seconds which inputs drive the answer and which are noise. A useful refinement is the two-way sensitivity for the two largest drivers — usually the proportion of report preparation time replaced and the probability of the largest risk event. A small grid showing the total at the low and high of those two inputs simultaneously communicates more than any narrative. As a rule of thumb, if the total at the worst corner of the two-way grid is still positive after workflow cost and discount, the case is robust. If it is negative, the case depends on those two inputs being right; the board should know that explicitly. A complementary artefact is the breakeven line: the value of the most sensitive input at which the discounted total goes to zero. If the breakeven proportion of report preparation replaced is 22 per cent, and the modelled mid is 55 per cent, the case has substantial headroom. If the breakeven is 48 per cent against a modelled mid of 55 per cent, the headroom is thin and the board should consider whether the modelled mid is genuinely defensible. Breakeven lines convert the sensitivity table from interesting to actionable. They turn a question of judgement into a question the reader can answer with their own intuition about the input.',
        },
        {
          title: 'The rehearsal: a business case is the conversation around the document',
          body: 'A business case is not a document; it is the conversation around the document. Walk the case through the finance partner before submission. Adjust where the partner spots weakness. Submit the version that has already survived a rehearsal. The discipline shortens the formal review and tends to produce the approval that the case earned in the rehearsal rather than in the meeting. The rehearsal has a shape. Send the case to the partner forty-eight hours before. Sit with them for thirty minutes. Ask three questions: which line do you trust least, which assumption would you challenge first, what would have to be true for you to be wrong about that. Take notes. Adjust the document. Submit. Most cases improve materially across the rehearsal. A few are revealed to be unready and quietly withdrawn, which is itself a win. The cost of the rehearsal is one hour. The cost of a rejected case is much higher than that. A complementary practice is the second rehearsal with the operational partner who will live with the workflow if the case is approved. They will identify weaknesses the finance partner cannot see — the legacy report someone senior insists on, the organisational dependency that has not been negotiated, the assumption that the affected team will reabsorb their saved time productively. The second rehearsal usually adds two or three caveats to the document and prevents the awkward post-approval moment in which an operational owner says they were never asked. Both rehearsals together cost less than two hours and substantially reduce the risk of approval-then-stall.',
        },
        {
          title: 'Board-pack defensibility and what reviewers really test',
          body: 'A board pack defensible under cross-examination has four properties. First, the total appears as a band, not a point, and the band is consistent with the line items. Second, every line cites a source the reviewer can verify in writing within ten minutes. Third, the sensitivity table identifies the inputs that matter and their effect. Fourth, the document acknowledges what would make the case fail. Reviewers test these in order. They check the total against the lines. They sample two sources. They look for a sensitivity table. They look for the failure case. A document that passes all four tests gets a focused conversation about substance. A document that fails any of them gets a procedural conversation that consumes the meeting. The framework is a public discipline; it is not specific to any vendor or product. A team that adopts it once tends to adopt it permanently because it makes the next case easier and the case after that easier still. The fingerprint of a strong document is therefore short and recognisable: a banded total, traceable line items, a one-page sensitivity table, and an explicit failure case. Reviewers who see all four know within five minutes that the rest of the document is worth their time. Reviewers who see three of the four ask a polite question to confirm the fourth. Reviewers who see two or fewer drift into a procedural conversation, and the substance never gets reached. A team that consistently produces all four signals tends to find that approvals shorten by ten or fifteen minutes per case, which compounds across a portfolio of cases per year.',
        },
      ],
      checkpoint:
        'For a current case, could you walk it through the finance partner before submission and show them a band, a sensitivity table, and the failure case in twenty minutes?',
      exercises: [
        {
          prompt:
            'Draft a one-page executive summary for a current case. It should contain the total as low — mid — high, a three-shape breakdown of the mid, the discount rate used, and a one-line statement of what would make the case fail.',
          expectedAnswer:
            'A single page with a banded total, a three-line breakdown by shape, the WACC or hurdle rate used, and a sentence such as "the case fails if the proportion of report preparation replaced is below 25 per cent." Nothing else.',
        },
        {
          prompt:
            'Schedule a thirty-minute rehearsal with a finance partner before your next submission. Write the three questions you will ask them. Capture their answers and note the two changes you will make to the document.',
          expectedAnswer:
            'Three questions in writing — which line is least trusted, which assumption would be challenged first, what would have to be true for the partner to be wrong — and two named edits to the document arising from the rehearsal.',
        },
      ],
      recommendedReading: [
        { label: 'ROI method overview', href: '/knowledge-base/roi-method-overview' },
        { label: 'ROI confidence and credibility', href: '/knowledge-base/roi-confidence-and-credibility' },
        { label: 'The CFO case for claims evidence', href: '/resources/the-cfo-case-for-claims-evidence' },
      ],
    },
    {
      slug: 'tracking-outcomes-after-go-live',
      title: 'Tracking outcomes after go-live',
      summary:
        'Why the business case should be revisited against actual outcomes, what to measure, and how the discipline of tracking changes future cases for the better.',
      estimatedMinutes: 17,
      sections: [
        {
          title: 'Why outcomes are usually not tracked',
          body: 'Most business cases are written, approved, and forgotten. The team moves on. The actual outcomes are never measured against the predictions. This is a significant waste, and it is also why the next case tends to be easier to challenge — finance partners have no record of how the previous predictions held up, so every fresh case carries the discount applied to all unverified claims. The discipline is to track outcomes from go-live and report on them at agreed intervals. The point is not auditing the workflow; the point is improving the next case. A team that has measured one case against its predictions writes the next case with sharper inputs and earns a hearing on the basis of evidence rather than promise. The cost of tracking is small if the tracker is designed at the same time as the case. The cost of not tracking compounds across years. There is a structural reason tracking gets dropped. The team that built the case is rarely the team that owns the workflow on month thirteen. Sponsors rotate. Project directors finish the project. Finance partners move to other portfolios. Without explicit handover, the tracker dies quietly. The fix is procedural and small: at submission, the case names the tracker owner for years one and two, the refresh cadence, and the date by which the post-go-live review will be presented to the original approver or their successor. Naming the dates in the case itself converts the tracker from a good intention into a commitment the organisation can hold.',
        },
        {
          title: 'A short measurement plan, not a long one',
          body: 'Track the operational savings against the model. The recurring tasks named in the case, the time taken at six and twelve months, the loaded cost. Track the workflows that closed and the workflows that did not. Track the risk events that occurred and any in which the workflow contributed to the outcome — the time-aligned record that defused the dispute, the gate record that closed the delivery query, the safety loop that closed without a stand-down. The list is short on purpose. Tracking everything is the same as tracking nothing. Five well-chosen lines beat fifty observed irregularly. A simple shape that works: a one-page tracker with named owners, refreshed each quarter, that shows actual versus predicted on the five lines that mattered most in the original case. Refresh dates are calendared at go-live. The first refresh — typically at month six — is the one that catches early drift and lets the team intervene. A useful selection rule: the tracked lines are the same five that drove the headline total in the original case. Not the easiest five to measure. Not the five that look best. The five that mattered. If a line was 30 per cent of the headline total in the case, it is a tracked line in the post-go-live world. That alignment is what makes the tracker honest. It also forces the original case to be honest about which lines really mattered, which sharpens the case before it is even submitted, because the author knows in advance that those lines will be measured.',
        },
        {
          title: 'The post-go-live review at month twelve',
          body: 'Twelve months after go-live, run a structured review. The shape is small and predictable. Pull the original case. Pull the tracker. For each line, write three numbers: the predicted mid, the actual, and the percentage variance. For each variance above twenty per cent in either direction, write a one-line cause. For each line that fell short, write a one-line action. For each line that outperformed, write a one-line note on what to bring forward into the next case. The output is a one-page memo. It does not need to be circulated widely; it needs to exist and be referenced when the next case is built. A worked illustration of useful findings: a manual reporting line that landed at 80 per cent of predicted because the team kept a legacy report alive; a dispute avoidance line that landed at zero because no dispute occurred, which is the correct outcome and not a failure of the model. The discipline is to record both honestly. A second pass at month twenty-four is worth the small effort. By that point, the workflow has been through one full cycle of staff turnover and at least one budget cycle. The lines that look strong at month twelve sometimes erode by month twenty-four because someone re-introduced the legacy report or because the saving was reabsorbed into a new activity that nobody priced. The lines that look weak at month twelve sometimes recover by month twenty-four because the operational team has by then absorbed the new way of working. Both directions are useful inputs to the next case, and both are invisible without the second look.',
        },
        {
          title: 'How tracked outcomes feed the next case',
          body: 'A case that has been tracked produces inputs for the next case. Real proportions for replacement workflows. Real probabilities for risk events. Real attribution for capacity gains. Each tracked case improves the credibility of the next, both with finance and with the team that builds it. The compounding is real. After three tracked cases, the analyst no longer needs to reach for industry benchmarks for most of their inputs. They have their own evidence base, with their own bands, on their own projects. A finance partner reading the fourth case sees the citations refer to the organisation´s own prior cases and accepts the analyst´s judgement on the basis of demonstrated calibration. That is the durable benefit of tracking — not the audit of any single case, but the calibration of the people who build cases. Organisations that track for three years tend to write cases that look quite different from those written by organisations that have never tracked. The difference is visible in the bands. A small but high-leverage habit: maintain a single internal page that lists every prior case, the original predicted mid, and the tracked actual. The page is not glamorous. It is more useful than any benchmark database the organisation could buy externally, because it reflects the organisation´s own conditions, projects, and people. Authors building a new case start there. Reviewers verifying a new case start there. The page becomes the institutional memory of the practice, and it is the single artefact that distinguishes an organisation that builds credible cases from one that periodically writes them.',
        },
        {
          title: 'Failure modes in the tracking practice itself',
          body: 'The tracking practice has its own failure modes. First, drift to vanity metrics: the tracker that grows from five lines to thirty, half of them measuring usage rather than outcome. Resist the growth. The point is the predicted-versus-actual on the five lines that drove the original case. Second, late refreshes: the tracker that is updated whenever someone remembers, which is the same as never. Calendar the refreshes at go-live, with named owners and a fifteen-minute review at each. Third, defensive interpretation: the tracker that always concludes the case was right, regardless of variance. Variance in either direction is information. A line that came in at 130 per cent of predicted is as important to record as one that came in at 70 per cent, because the next case will be sharper for knowing both. The honest tracker is the one whose findings sometimes embarrass its authors. That is the one finance partners learn to trust, and that trust transfers to every case the team brings forward thereafter. A fourth pattern is the silent retirement of the tracker after a single negative finding. The team writes a case, the tracker shows the case fell short on two lines, and the practice quietly stops because the conversation became uncomfortable. The discipline is the opposite. The negative finding is the most valuable output the tracker has produced, because it is the input that will make the next case noticeably more accurate. A team that keeps tracking through one negative finding tends to keep tracking through all of them, and the resulting practice is the durable competitive advantage in how the organisation evaluates investments of this shape.',
        },
      ],
      checkpoint:
        'For a case that went live last year, could you produce the actual versus predicted lines today, with named causes for any variance above twenty per cent?',
      exercises: [
        {
          prompt:
            'Design the five-line tracker you would attach to a current case at go-live. Name the lines, the owners, the refresh cadence, and the source for each actual.',
          expectedAnswer:
            'Five lines that map directly to the largest items in the original case. Each line has a named owner, a quarterly refresh, and a single source for the actual figure. Anything more is too much.',
        },
        {
          prompt:
            'Take an old case from your organisation. Estimate two of its predicted lines today against actuals. Note one finding you would carry forward into the next case.',
          expectedAnswer:
            'Two predicted-versus-actual comparisons with rough percentage variances. One forward-looking finding stated in a single sentence — typically a sharper input range, a redefined risk event, or a more conservative attribution rate.',
        },
      ],
      recommendedReading: [
        { label: 'Outcome measurement (glossary)', href: '/glossary#outcome-measurement' },
        { label: 'ROI method overview', href: '/knowledge-base/roi-method-overview' },
        {
          label: 'Mission-critical data centre claims defence',
          href: '/use-cases/mission-critical-data-centre-claims-defence',
        },
        {
          label: 'Industrial subcontractor performance',
          href: '/use-cases/industrial-subcontractor-performance',
        },
      ],
    },
  ],
}
