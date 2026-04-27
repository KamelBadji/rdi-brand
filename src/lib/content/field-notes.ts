import type { FieldNote } from './types'

export const fieldNotes: FieldNote[] = [
  {
    slug: 'why-rdi-is-not-another-camera-category',
    title: 'Why RDI is not another camera category',
    date: '2026-04-20',
    summary:
      'The shift from construction cameras to Reality-Driven Intelligence is a shift from footage to evidence, action, and better project decisions.',
    category: 'Foundations',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'Construction cameras solved a visibility problem. They put the site on a screen so people who could not be there could still look. RDI starts where that visibility ends. The question is no longer whether anyone can see the site. The question is whether the record of the site changes a decision.',
      },
      {
        kind: 'heading',
        body: 'A category, not a feature',
      },
      {
        kind: 'paragraph',
        body: 'A camera is a feature. A live view is a feature. A search bar is a feature. None of those are categories on their own. RDI is the operating discipline that turns those features into evidence, interpretation, action, and command. That discipline is the category boundary.',
      },
      {
        kind: 'paragraph',
        body: 'Teams that buy cameras with no workflow attached usually end up with a passive archive. The footage exists, but the meeting still runs on screenshots, recollection, and chasing. The decision rhythm has not changed.',
      },
      {
        kind: 'heading',
        body: 'What separates RDI from camera buying',
      },
      {
        kind: 'list',
        items: [
          'Every recording has a project context, not just a timestamp.',
          'Every event can be turned into an observation and assigned to an owner.',
          'Every closeout leaves a record that the next project can search.',
          'Every leader has a portfolio view, not just a per-site live view.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'When buying decisions are framed as "we need cameras", procurement compares pixel counts and storage. When they are framed as "we need to settle delay claims with footage that is preserved and tagged", procurement compares evidence outcomes. The second conversation lands differently.',
      },
    ],
  },
  {
    slug: 'workflow-thinking-before-feature-thinking',
    title: 'Workflow thinking before feature thinking',
    date: '2026-04-20',
    summary:
      'Smart features become valuable when they complete a workflow that helps someone decide, act, and close the loop.',
    category: 'Workflows',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'Feature thinking asks: what can the user do? Workflow thinking asks: what does the user need to finish? The two questions are not interchangeable. A platform full of features can still leave its users with a long list of unfinished work.',
      },
      {
        kind: 'heading',
        body: 'A workflow has five parts',
      },
      {
        kind: 'list',
        items: [
          'A trigger — a condition that starts the work.',
          'Evidence — a record that supports the decision.',
          'Interpretation — what the evidence means in context.',
          'Action — the step that changes the project.',
          'Outcome — the closeout record that future teams can read.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'A search feature is useful, but it is not a workflow on its own. A workflow built on top of search would name a trigger ("a delay claim was filed"), produce evidence ("the relevant time-aligned clips"), guide interpretation ("compare to programme baseline"), close action ("attach evidence to the claim file"), and report the outcome ("claim resolved or escalated").',
      },
    ],
  },
  {
    slug: 'the-cfo-case-for-claims-evidence',
    title: 'The CFO case for Claims & Evidence',
    date: '2026-04-20',
    summary:
      'RDI earns executive attention when it protects money at risk: claims, disputes, delay records, and payment evidence.',
    category: 'Economics',
    readingMinutes: 7,
    body: [
      {
        kind: 'paragraph',
        body: 'CFOs do not buy site visibility. They buy outcomes that move enterprise risk. The strongest RDI case for a CFO is not the dashboard. It is the disposable claim that did not become a paid one because the record was clear.',
      },
      {
        kind: 'heading',
        body: 'Three exposures the CFO already tracks',
      },
      {
        kind: 'list',
        items: [
          'Delay claims and extension-of-time entitlement.',
          'Subcontractor and supplier disputes about scope, attendance, and quality.',
          'Insurance and legal exposure when an incident reaches a deposition.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'Each of these has a cost-of-being-wrong that dwarfs the cost of preserving the evidence. RDI shifts the conversation from "we have cameras" to "we have a defensible record". That shift is what brings the CFO into the conversation.',
      },
      {
        kind: 'pullquote',
        body: 'A claim file with a preserved time-aligned record is not the same artefact as a folder of screenshots. The first one ends conversations. The second one starts them.',
      },
    ],
  },
  {
    slug: 'the-five-layer-stack-explained',
    title: 'The five-layer stack, explained',
    date: '2024-05-08',
    summary:
      'Capture, ground truth, interpretation, action, and command — what each layer does and what fails when one is skipped.',
    category: 'Foundations',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'The RDI stack is a sequence, not a menu. Each layer depends on the one below it. Skip a layer and the layers above it become brittle, even if every product still appears to work on its own screen.',
      },
      {
        kind: 'heading',
        body: 'Reality capture',
      },
      {
        kind: 'paragraph',
        body: 'The base layer records the site. Cameras, 360 walks, drones, helmet capture, gate logs, and equipment telemetry all sit here. Capture on its own only answers one question: what was visible. It does not answer when, where in the programme, or whether the record can be trusted later.',
      },
      {
        kind: 'heading',
        body: 'Ground truth',
      },
      {
        kind: 'paragraph',
        body: 'Ground truth makes the captured record reliable. Time alignment, location, scope, project context, and preservation are layered on top so that the record can be cross-checked against schedule, weather, and access data. Without this layer, every later decision restarts the credibility argument from zero.',
      },
      {
        kind: 'heading',
        body: 'Interpretation, action, command',
      },
      {
        kind: 'list',
        items: [
          'Interpretation finds meaning in the record — patterns, exceptions, programme drift, risk signals.',
          'Action turns a finding into a task, observation, escalation, or report with a named owner and a clock.',
          'Command lets leaders look across projects, see recurring patterns, and direct programmes of work.',
        ],
      },
      {
        kind: 'callout',
        title: 'Failure mode',
        body: 'When teams buy the bottom layer and call it done, the upper layers run on recollection and screenshots. The stack still appears to exist on paper, but the decision rhythm has not changed.',
      },
      {
        kind: 'paragraph',
        body: 'A useful test: walk through the next decision the project must make. If the answer relies on someone remembering, the stack has stopped at capture. If the answer relies on a record that anyone can retrieve, cross-check, and route, the stack reaches into the layers that change outcomes.',
      },
    ],
  },
  {
    slug: 'from-cameras-to-evidence',
    title: 'From cameras to evidence',
    date: '2024-05-22',
    summary:
      'Two projects, two procurement briefs, two different outcomes. The difference was not the hardware on the wall.',
    category: 'Foundations',
    readingMinutes: 7,
    body: [
      {
        kind: 'paragraph',
        body: 'Two projects of similar size signed contracts within a month of each other. Both wanted "site cameras". One ended up with a passive feed nobody opened after the first week. The other ended up with an evidence layer that survived a delay claim and a regulator visit. The hardware on the wall was nearly identical. The difference was the brief.',
      },
      {
        kind: 'heading',
        body: 'The first project bought cameras',
      },
      {
        kind: 'paragraph',
        body: 'Procurement asked for camera count, resolution, and storage. The successful tender did exactly that. The team got crisp footage and a viewer. There was no named workflow attached. There was no defined trigger that turned a clip into a decision. When the first programme dispute arrived nine months later, the team scrolled through hours of footage looking for a moment they half-remembered. Nothing was tagged.',
      },
      {
        kind: 'heading',
        body: 'The second project bought evidence',
      },
      {
        kind: 'paragraph',
        body: 'Procurement asked a different question. Which decisions on this project depend on a record that does not yet exist. The list named four: delay claims at the steel package, subcontractor attendance disputes at peak fit-out, an expected regulator visit on access, and the handover pack. The brief was written backwards from those decisions. The hardware was a means; the records were the end.',
      },
      {
        kind: 'list',
        items: [
          'Capture points were chosen by what they would prove, not by site geography.',
          'Retention windows were tied to the contract and to insurer requirements.',
          'A named owner was attached to every workflow before the cameras were powered on.',
          'A weekly evidence review went on the project director\'s diary from week one.',
        ],
      },
      {
        kind: 'pullquote',
        body: 'The first project had hours of footage and no record. The second had fewer hours of footage and a defensible archive.',
      },
      {
        kind: 'heading',
        body: 'The category boundary',
      },
      {
        kind: 'paragraph',
        body: 'Cameras are a means; RDI is a discipline. Buyers who can name the decisions they want to change have already crossed the boundary. Buyers who cannot will end up paying for the hardware twice — once for the install, and again in the cost of the disputes the record could have closed.',
      },
    ],
  },
  {
    slug: 'the-trigger-evidence-action-loop',
    title: 'The trigger, evidence, action loop',
    date: '2024-06-05',
    summary:
      'A workflow is a closed loop, not a feature list. Two examples make the shape concrete.',
    category: 'Workflows',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'Workflows are not features. A feature is a button or a screen. A workflow is a closed loop that begins with a trigger and ends with a recorded outcome. The same shape applies whether the work is a progress dispute or a near-miss on a stair core.',
      },
      {
        kind: 'heading',
        body: 'A progress example',
      },
      {
        kind: 'paragraph',
        body: 'The trigger is straightforward: a programme dispute raised at the weekly OAC meeting about whether a wall section was complete on the date claimed. The evidence is a time-aligned record of that area, cross-checked against the programme baseline and the delivery docket for the relevant material. Interpretation compares the captured state to the claimed state. Action either closes the dispute or escalates to a formal claim. The outcome is logged so the next dispute starts from a settled record.',
      },
      {
        kind: 'heading',
        body: 'A safety example',
      },
      {
        kind: 'paragraph',
        body: 'The trigger is a near-miss reported by a foreman: a load swing came close to a working group below. The evidence is the captured footage of that lift, plus the plan-of-the-day that should have established an exclusion zone. Interpretation asks whether the procedure was followed and whether the exclusion was clear. Action routes the finding to the lifting supervisor with a 48-hour response. Outcome captures the procedural change and closes the loop.',
      },
      {
        kind: 'list',
        items: [
          'Trigger names the condition that starts the work.',
          'Evidence is the record that supports the next step.',
          'Interpretation gives the record meaning in context.',
          'Action assigns a step with an owner and a clock.',
          'Outcome records what changed and what closed.',
        ],
      },
      {
        kind: 'callout',
        title: 'A workflow ends in a record',
        body: 'A workflow without a closeout record is half a workflow. The next team starts the same conversation from scratch. The discipline of capturing the outcome is what compounds value across projects.',
      },
    ],
  },
  {
    slug: 'what-goes-wrong-without-ground-truth',
    title: 'What goes wrong without ground truth',
    date: '2024-06-19',
    summary:
      'When the captured record is not time-aligned and cross-checkable, the layers above it stop working in predictable ways.',
    category: 'Evidence',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'Ground truth is the layer that turns capture into a record. When it is missing, the captured material is still on disk, but its usefulness collapses on contact with a real decision. The failure modes are predictable.',
      },
      {
        kind: 'heading',
        body: 'The credibility argument restarts every time',
      },
      {
        kind: 'paragraph',
        body: 'Without time alignment, every retrieval begins by re-establishing what time it was, where this view sits in the project, and whether anyone could have changed it since. The retrieval cost is paid again on every clip. After the second or third meeting where this happens, people stop reaching for the record.',
      },
      {
        kind: 'heading',
        body: 'Cross-checks fail',
      },
      {
        kind: 'paragraph',
        body: 'A delay event without weather data is half a story. A subcontractor attendance record that cannot be cross-checked against the gate log is contestable. A near-miss without the lift plan it should match against is a video, not a finding. The cross-checks are what convert a recording into evidence.',
      },
      {
        kind: 'list',
        items: [
          'Clips drift in metadata; nobody trusts the timestamps.',
          'Retrieval takes hours instead of minutes.',
          'OAC meetings revert to recollection because the record loses arguments it should win.',
          'Closeout packs are assembled from screenshots, not records.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The fix is not more capture. The fix is a thinner ground-truth layer that makes the existing capture trustworthy. That is the layer where the discipline lives.',
      },
    ],
  },
  {
    slug: 'chain-of-custody-on-construction-sites',
    title: 'Chain of custody on construction sites',
    date: '2024-07-03',
    summary:
      'Borrow the legal concept, adapt it to site evidence, and the credibility of the record stops being a per-meeting argument.',
    category: 'Evidence',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'Chain of custody is a legal concept that asks two questions about every step a piece of evidence takes: who held it, and what could they have changed. The construction site has not traditionally framed its records this way. It should.',
      },
      {
        kind: 'heading',
        body: 'The handoff is the weak point',
      },
      {
        kind: 'paragraph',
        body: 'Captured footage moves through several hands before it appears in a meeting or a claim file. A site engineer downloads it. A package manager trims it. A document controller renames the file. Each handoff is a place where the record can be changed without anyone meaning to change it. The chain breaks quietly.',
      },
      {
        kind: 'heading',
        body: 'A practical chain on site',
      },
      {
        kind: 'list',
        items: [
          'The original capture is preserved in a system nobody can write to.',
          'Every export is logged with a user, a time, and a reason.',
          'Trims and clips are derived artefacts, not edits to the original.',
          'A chain-of-custody summary is attached when the record leaves the platform.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'None of this is theoretical. When a delay claim reaches an adjudicator or an incident reaches a deposition, the first questions are about provenance. Sites that can answer those questions in writing avoid the long, expensive arguments that sites that cannot answer them eventually accept.',
      },
      {
        kind: 'pullquote',
        body: 'Chain of custody is not a feature. It is a posture the project decides to hold from week one.',
      },
    ],
  },
  {
    slug: 'capture-plans-not-camera-counts',
    title: 'Capture plans, not camera counts',
    date: '2024-07-17',
    summary:
      'Plan capture by the workflows it must support. Camera count is an output of that work, not the input.',
    category: 'Capture',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'A capture plan and a camera schedule are not the same artefact. A camera schedule lists hardware, locations, and storage. A capture plan starts with the workflows the project must support and works backwards. The schedule falls out of the plan, not the other way around.',
      },
      {
        kind: 'heading',
        body: 'Workflow first, then the view',
      },
      {
        kind: 'paragraph',
        body: 'Begin with the decisions the project knows it will need to make. Progress disputes at the structural package. Subcontractor attendance during peak fit-out. A regulator visit on access. Each one names a record that has to exist on a particular date. From that list, the views and the retention windows draw themselves.',
      },
      {
        kind: 'list',
        items: [
          'Name the workflows before specifying any hardware.',
          'Tie each capture point to one or more workflows it serves.',
          'Set retention by contract obligation, not by storage convenience.',
          'Review the plan when the project programme shifts materially.',
        ],
      },
      {
        kind: 'callout',
        title: 'A test',
        body: 'If the plan can be written without ever naming a workflow, it is a camera schedule. If every capture point on the plan can answer "what decision will this support", it is a capture plan.',
      },
      {
        kind: 'paragraph',
        body: 'The shift in artefact looks small on paper. In practice, it changes who owns the document. A camera schedule sits with procurement. A capture plan sits with the project director and the digital construction lead. The decision rights move with the document.',
      },
    ],
  },
  {
    slug: 'coverage-gaps-are-decisions',
    title: 'Coverage gaps are decisions',
    date: '2024-07-31',
    summary:
      'Every uncovered area on a project is a choice, even when nobody made it consciously. Treat it that way.',
    category: 'Capture',
    readingMinutes: 4,
    body: [
      {
        kind: 'paragraph',
        body: 'Every project has parts of the programme with no evidence layer. That is fine, as long as the team has decided that those parts do not need one. The risk is the gap that no one chose, that nobody can defend later.',
      },
      {
        kind: 'heading',
        body: 'Make the gap explicit',
      },
      {
        kind: 'paragraph',
        body: 'A coverage gap that is on the plan is a decision. A coverage gap that is silent is an accident waiting to be argued about. The remedy is the same as for any project decision: name it, attribute it to an owner, and write down why.',
      },
      {
        kind: 'list',
        items: [
          'List the areas with no capture and the workflows they would have served.',
          'Record the reason: cost, programme, low risk, contract scope.',
          'Set a review date when the project might revisit the choice.',
          'Include the gap on the capture plan, not just the covered areas.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'Treating gaps this way changes the conversation if something happens in an uncovered area. The team does not have to defend an oversight; they have to defend a documented decision. The first conversation is much shorter than the second.',
      },
    ],
  },
  {
    slug: 'the-cost-of-evidence-retrieval',
    title: 'The cost of evidence retrieval',
    date: '2024-08-14',
    summary:
      'Find a clip, lose an hour. Multiply by every meeting, every claim, every audit. The unindexed archive is the single largest hidden cost on most projects.',
    category: 'Economics',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'Evidence retrieval is rarely on a project budget. It is paid in fragments: an hour here for a delay query, a half-day there for an insurer request, a long Friday for a handover pack. The total is rarely added up. When it is, it is usually larger than the cost of the platform that would have indexed the records in the first place.',
      },
      {
        kind: 'heading',
        body: 'A retrieval is not a search',
      },
      {
        kind: 'paragraph',
        body: 'A search returns matches. A retrieval ends with a clip ready for someone external to read. The work between the two is what costs money: trimming, naming, exporting, attaching context, writing the cover note, sending it on. The work scales with the number of meetings and queries, not with the size of the archive.',
      },
      {
        kind: 'heading',
        body: 'Where the hours go',
      },
      {
        kind: 'list',
        items: [
          'Locating the right window in unindexed footage.',
          'Confirming time alignment with schedule and weather.',
          'Trimming and exporting in a format the recipient accepts.',
          'Re-establishing chain of custody after the export.',
          'Resending corrections when the original was unclear.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'A retrieval that takes ninety minutes manually can take three minutes with an indexed record. The platform cost is fixed; the retrieval cost is variable and recurring. The variable cost is what the CFO eventually notices, usually after a particularly expensive month.',
      },
      {
        kind: 'callout',
        title: 'A simple instrument',
        body: 'For four weeks, log every minute spent on evidence retrieval, by name and request. Project the result over a year. The number is uncomfortable. It is also the number that justifies the indexing layer.',
      },
    ],
  },
  {
    slug: 'manual-reporting-is-a-tax',
    title: 'Manual reporting is a tax',
    date: '2024-08-28',
    summary:
      'Routine progress and safety reporting is a recurring operational tax that accountants would rather not see itemised. Itemise it anyway.',
    category: 'Economics',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'Reporting is a tax the project pays every week. Progress for the OAC. Safety for the parent group. Stakeholder updates for the owner. Compliance returns for the regulator. None of these create the project. All of them must happen anyway.',
      },
      {
        kind: 'heading',
        body: 'The tax is invisible because it is everyone\'s',
      },
      {
        kind: 'paragraph',
        body: 'Reporting time is rarely a line in a budget. It is half an afternoon for a project engineer, a Friday morning for a package manager, a recurring slot for a document controller. The hours never appear together, so they never look as expensive as they are.',
      },
      {
        kind: 'list',
        items: [
          'Weekly progress slides assembled from screenshots and spreadsheets.',
          'Monthly safety summaries written from incident logs nobody re-reads.',
          'Owner reports that retell the previous report with new dates.',
          'Compliance returns that copy data from systems that should already be linked.',
        ],
      },
      {
        kind: 'pullquote',
        body: 'The cost of manual reporting does not scale with project size. It scales with the number of stakeholders who expect a report.',
      },
      {
        kind: 'paragraph',
        body: 'A replacement workflow is not glamorous. It does not produce a screenshot for the proposal. It produces an hour back, every week, for the people running the project. That is what the CFO eventually rewards.',
      },
    ],
  },
  {
    slug: 'risk-mitigation-language-for-cfos',
    title: 'Risk mitigation language for CFOs',
    date: '2024-09-11',
    summary:
      'Talking about avoided low-frequency, high-cost events takes a different vocabulary than talking about hours saved.',
    category: 'Economics',
    readingMinutes: 7,
    body: [
      {
        kind: 'paragraph',
        body: 'Operational savings are the easy part of an RDI business case. They are recurring, measurable, and they show up in the same place every month. Risk mitigation is harder. The events that justify it do not happen on every project, and a careful CFO will probe the numbers harder than they probe the savings.',
      },
      {
        kind: 'heading',
        body: 'Three quantities, one credit',
      },
      {
        kind: 'paragraph',
        body: 'A risk-mitigation credit is not a guess. It is a product of three things: the cost of the event if it happens, the probability of recurrence on a comparable project, and the share of the risk an evidence layer can plausibly remove. Each quantity carries uncertainty. The credit is the product of the three, with the uncertainty preserved.',
      },
      {
        kind: 'heading',
        body: 'Talk in bands, not in points',
      },
      {
        kind: 'paragraph',
        body: 'A point estimate invites a debate the CFO has had a hundred times. A band invites a different conversation: which end of the band is the project comfortable with, and what would have to be true to land at the mid. The band is honest about the uncertainty and turns the discussion into a planning exercise.',
      },
      {
        kind: 'list',
        items: [
          'Quote the cost of the event with a source.',
          'Quote the probability with a sector benchmark, not a wish.',
          'Quote the share of risk addressed with a defensible mechanism, not a percentage out of the air.',
          'Publish the band rather than the mid.',
        ],
      },
      {
        kind: 'pullquote',
        body: 'A CFO will accept that an outcome is uncertain. They will not accept that you pretended it was certain.',
        attribution: 'A finance partner, paraphrased',
      },
      {
        kind: 'paragraph',
        body: 'Risk mitigation language is not a pitch. It is a posture. The buyer who can sit with uncertainty in writing is the buyer who can also defend the line item later, when the event the credit modelled either happens or does not.',
      },
    ],
  },
  {
    slug: 'weather-claims-and-the-record',
    title: 'Weather claims and the record',
    date: '2024-09-25',
    summary:
      'A weather claim without site capture is half a claim. The other half lives on disk somewhere, if it was preserved.',
    category: 'Risk',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'Weather claims are common, contestable, and frequently lost on the record. The meteorological data is rarely the issue. The issue is whether the project can show that the conditions stopped specific work in specific places at specific times. The record decides the claim.',
      },
      {
        kind: 'heading',
        body: 'Three artefacts that sit together',
      },
      {
        kind: 'list',
        items: [
          'A meteorological record from a credible source for the dates in question.',
          'Time-aligned site capture showing the affected areas during the event.',
          'A programme record showing what work was scheduled and what stopped.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The first artefact is rarely missing. The second and third often are. Without them, the meteorology is a general claim about the weather, not a specific claim about the project. The owner has heard the general claim before and it does not move them.',
      },
      {
        kind: 'heading',
        body: 'A small discipline at the time',
      },
      {
        kind: 'paragraph',
        body: 'The discipline is not exotic. When a weather event begins, the team flags it as a candidate event in the platform. The capture is preserved against the standard window. A short note records what was scheduled and what stopped. A reasonable cover note is drafted while the day is fresh. None of this has to be fancy. It has to exist.',
      },
      {
        kind: 'callout',
        title: 'A finishing test',
        body: 'A weather claim is ready when an external reviewer can read three pages and answer "what was scheduled, what stopped, and how do you know" without asking a follow-up question.',
      },
    ],
  },
  {
    slug: 'delay-claims-and-time-alignment',
    title: 'Delay claims and time alignment',
    date: '2024-10-09',
    summary:
      'Substantiation lives in the cross-checks. A delay claim with a time-aligned record survives the scrutiny that ends most claims early.',
    category: 'Risk',
    readingMinutes: 7,
    body: [
      {
        kind: 'paragraph',
        body: 'A delay claim is an argument about cause and effect. Something happened, work could not progress as scheduled, and the programme moved. The argument is won or lost on the records that connect those three things. Time alignment is the thread that ties them together.',
      },
      {
        kind: 'heading',
        body: 'What time alignment actually means',
      },
      {
        kind: 'paragraph',
        body: 'Time alignment is not a clock on a clip. It is the ability to take a date and time, locate the relevant capture, and cross-check it against the programme baseline, the weather record, the gate log, and the design issue register. When all five sources agree, the cause-and-effect argument has support. When they disagree, the inconsistency is itself useful information.',
      },
      {
        kind: 'heading',
        body: 'The mechanics of substantiation',
      },
      {
        kind: 'list',
        items: [
          'Anchor the event date against the programme baseline current at the time.',
          'Pull the captured record for the relevant areas during the relevant window.',
          'Attach the contemporaneous weather record and any gate-log restrictions.',
          'Identify the design or instruction record that governed the work.',
          'Write a short narrative that ties the records together.',
        ],
      },
      {
        kind: 'pullquote',
        body: 'A delay claim assembled six months after the event will always be weaker than one assembled the week it happened. The records are colder.',
      },
      {
        kind: 'paragraph',
        body: 'The discipline is not to assemble every claim immediately. The discipline is to preserve the records so that, when a claim becomes necessary, the work is retrieval rather than reconstruction. The cost of preservation is fixed. The cost of reconstruction is what loses claims.',
      },
    ],
  },
  {
    slug: 'progress-meetings-after-rdi',
    title: 'Progress meetings after RDI',
    date: '2024-10-23',
    summary:
      'OAC meetings change shape when the evidence is on the table. Less recollection, fewer reruns of last week, more decisions.',
    category: 'Workflows',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'OAC meetings have a natural shape: a programme review, a small set of disputes, an action list, and a packed-off agenda. Without an evidence layer, each part of the meeting tends to take the same time as it did last week, because the same conversations restart from the same starting point.',
      },
      {
        kind: 'heading',
        body: 'Three changes that show up first',
      },
      {
        kind: 'list',
        items: [
          'The programme review starts with the captured state, not with claimed percentages.',
          'Disputes resolve in the meeting because the record is in the room.',
          'The action list shrinks because last week\'s actions actually closed.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'The change in shape is most visible in the second half of the meeting. Without RDI, the second half is where new disputes appear and old ones reappear. With RDI, the second half is where the team begins to plan the following two weeks because the record has settled the previous two.',
      },
      {
        kind: 'callout',
        title: 'A simple measure',
        body: 'Track the average number of "we will check the footage and come back" actions per meeting. The number falls quickly when the meeting itself can pull the record. That falling number is the meeting\'s ROI in plain sight.',
      },
    ],
  },
  {
    slug: 'safety-loops-that-actually-close',
    title: 'Safety loops that actually close',
    date: '2024-11-06',
    summary:
      'A finding logged is not a loop closed. Closeout is a deliberate step, often the one that goes missing on busy projects.',
    category: 'Risk',
    readingMinutes: 6,
    body: [
      {
        kind: 'paragraph',
        body: 'Most safety systems are good at recording findings. They are less reliable at closing them. The gap is rarely deliberate. It is the predictable consequence of a workflow that ends at "logged" rather than at "closed and recorded".',
      },
      {
        kind: 'heading',
        body: 'Closing is its own step',
      },
      {
        kind: 'paragraph',
        body: 'A near-miss reported by a foreman on a Tuesday is a finding. The procedural change agreed at the Wednesday morning briefing is an action. The induction note that goes out to the affected trades on Thursday is a closeout. Three artefacts, three responsible names, three timestamps. Without the third, the loop never closed; it only opened.',
      },
      {
        kind: 'list',
        items: [
          'Every finding has a named owner and a clock from the moment it is logged.',
          'Escalation paths are defined before they are needed, not after.',
          'Closeout is a recorded artefact, not a spoken update.',
          'Pattern reporting surfaces the findings that keep coming back.',
        ],
      },
      {
        kind: 'pullquote',
        body: 'The safety culture of a project is the closeout rate. Not the finding rate.',
      },
      {
        kind: 'paragraph',
        body: 'A high finding rate is often a sign of a healthy reporting culture. A low closeout rate is always a sign that something further along the workflow is broken. The two metrics together tell a more honest story than either alone.',
      },
    ],
  },
  {
    slug: 'gate-records-as-commercial-evidence',
    title: 'Gate records as commercial evidence',
    date: '2024-11-20',
    summary:
      'Gate logs do quiet, durable work in the commercial record. Treat them as evidence and the disputes they settle are no longer surprises.',
    category: 'Operations',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'Gate logs rarely make it into a commercial conversation until something goes wrong. They sit in the operations file, useful for security, less obviously useful for anything else. That underrates them. A gate log is a continuous attendance record that can settle a wide range of arguments.',
      },
      {
        kind: 'heading',
        body: 'What a gate record can quietly settle',
      },
      {
        kind: 'list',
        items: [
          'Whether a subcontractor was on site on the days they have invoiced for.',
          'Whether a delivery arrived in the time window claimed.',
          'Whether a piece of plant was on or off site during a delay event.',
          'Whether a non-attending package can be excluded from a stand-down claim.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'None of these are courtroom moments. They are the small disputes that take a half-day to resolve and that recur every couple of months. With a usable gate record, the half-day becomes ten minutes. The annualised number is meaningful.',
      },
      {
        kind: 'callout',
        title: 'A coupling that pays off',
        body: 'Couple the gate record with the captured site footage and the picture is even sharper. Who arrived, when they reached the work face, how long they stayed, and what the work face looked like during the same window — answered in a few clicks.',
      },
    ],
  },
  {
    slug: 'delivery-verification-without-shouting',
    title: 'Delivery verification without shouting',
    date: '2024-12-04',
    summary:
      'Most delivery disputes are not arguments about the delivery. They are arguments about what nobody can prove anymore. The record removes both.',
    category: 'Operations',
    readingMinutes: 5,
    body: [
      {
        kind: 'paragraph',
        body: 'Delivery disputes have a familiar pattern. The supplier says the delivery arrived complete on the docket date. The site says some of it was missing or damaged. Both parties are honest. Neither has a record that ends the conversation. The conversation continues at volume.',
      },
      {
        kind: 'heading',
        body: 'Three pieces, in one place',
      },
      {
        kind: 'paragraph',
        body: 'A delivery is fully evidenced when three records sit together: the gate log entry, the captured footage of the unload, and the signed docket. None of these is exotic. They are usually all collected. They are rarely all accessible from the same query.',
      },
      {
        kind: 'list',
        items: [
          'Gate entry confirms time, vehicle, and driver.',
          'Captured footage confirms what was unloaded and where.',
          'The docket confirms what should have been on the truck.',
        ],
      },
      {
        kind: 'paragraph',
        body: 'When the three records can be retrieved as a single answer, the dispute resolves before it becomes a complaint. The supplier and the site reach the same conclusion at the same time. The half-day argument never starts.',
      },
      {
        kind: 'pullquote',
        body: 'A good record does not win arguments. It prevents them.',
      },
    ],
  },
]
