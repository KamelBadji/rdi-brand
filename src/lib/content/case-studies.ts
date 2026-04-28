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
]
