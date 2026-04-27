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
]
