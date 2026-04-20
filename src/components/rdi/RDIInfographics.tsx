const shiftSteps = [
  {
    stage: 'Record',
    question: 'What happened?',
    body: 'Cameras, 360 walks, drones, sensors, and project systems create a durable record of site reality.',
  },
  {
    stage: 'Reason',
    question: 'What does it mean?',
    body: 'Time, location, scope, schedule, model context, and evidence quality turn raw records into ground truth.',
  },
  {
    stage: 'Govern',
    question: 'What changes next?',
    body: 'Findings become decisions, tasks, escalations, claims evidence, safety action, and portfolio-level learning.',
  },
]

const loopSteps = [
  { label: 'Capture', note: 'Record the site as it is.' },
  { label: 'Establish ground truth', note: 'Align time, location, scope.' },
  { label: 'Interpret change', note: 'Find what moved, and why.' },
  { label: 'Route action', note: 'Assign the right person.' },
  { label: 'Measure outcome', note: 'Close the loop, learn.' },
]

const maturityLevels = [
  {
    level: '1',
    title: 'Visibility',
    body: 'Teams can see the site and review a record.',
    signal: 'Stakeholders watch a feed or review footage after the fact.',
  },
  {
    level: '2',
    title: 'Evidence',
    body: 'Records are searchable, time-aligned, location-aware, and reliable enough for decisions.',
    signal: 'A specific event can be reconstructed without manual archive hunting.',
  },
  {
    level: '3',
    title: 'Interpretation',
    body: 'Systems identify exceptions, compare reality with intent, and explain what changed.',
    signal: 'Exceptions are surfaced before someone asks for them.',
  },
  {
    level: '4',
    title: 'Workflow action',
    body: 'Evidence triggers observations, tasks, escalations, closeout, reporting, and preserved proof.',
    signal: 'A finding becomes an assignment with an owner and a deadline.',
  },
  {
    level: '5',
    title: 'Command',
    body: 'Leaders coordinate attention across projects using evidence, risk, progress, and outcome signals.',
    signal: 'Portfolio decisions cite ground-truth signals rather than memory.',
  },
]

export function CategoryShiftGraphic() {
  return (
    <div className="border border-border bg-white">
      <div className="grid md:grid-cols-3">
        {shiftSteps.map((step, index) => (
          <div
            className={[
              'relative p-6 md:p-8',
              index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
            ].join(' ')}
            key={step.stage}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center border border-rdi-ink font-mono text-sm font-semibold text-rdi-ink">
                {index + 1}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                Stage {index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-rdi-ink">
              {step.stage}
            </h3>
            <p className="mt-1 text-sm font-medium text-rdi-ink">{step.question}</p>
            <p className="mt-4 text-sm leading-[1.65] text-rdi-muted">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-border bg-rdi-paper px-6 py-5 text-sm leading-[1.7] text-rdi-ink md:px-8">
        <span className="font-semibold">The threshold.</span>{' '}
        <span className="text-rdi-muted">
          Intelligence begins when captured reality can change a decision, assign action, or improve
          how the next project is run.
        </span>
      </div>
    </div>
  )
}

export function DecisionLoopGraphic() {
  return (
    <div className="border border-border bg-white">
      <div className="grid gap-0 md:grid-cols-5">
        {loopSteps.map((step, index) => (
          <div
            className={[
              'relative p-5 md:p-6',
              index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
            ].join(' ')}
            key={step.label}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center bg-rdi-ink font-mono text-xs font-semibold text-white">
                {index + 1}
              </span>
              {index < loopSteps.length - 1 ? (
                <span
                  aria-hidden
                  className="hidden h-px flex-1 bg-rdi-rule-strong md:block"
                />
              ) : null}
            </div>
            <h3 className="mt-4 text-sm font-semibold leading-[1.3] text-rdi-ink">
              {step.label}
            </h3>
            <p className="mt-2 text-xs leading-[1.65] text-rdi-muted">{step.note}</p>
          </div>
        ))}
      </div>
      <div className="grid border-t border-border md:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
            Open loop
          </div>
          <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">
            Evidence stops at a dashboard, inbox, or archive. The site record exists but changes
            nothing about project behaviour.
          </p>
        </div>
        <div className="border-t border-border p-6 md:border-l md:border-t-0 md:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
            Closed loop
          </div>
          <p className="mt-3 text-sm leading-[1.7] text-rdi-ink">
            A decision, assignment, closeout, or learning record is created — and the evidence that
            triggered it is preserved for the next review.
          </p>
        </div>
      </div>
    </div>
  )
}

export function MaturityLadderGraphic() {
  return (
    <div className="border border-border bg-white">
      <ol>
        {maturityLevels.map((item, index) => (
          <li
            className={[
              'grid items-start gap-5 px-6 py-6 md:grid-cols-[64px_minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8 md:px-8',
              index === 0 ? '' : 'border-t border-border',
            ].join(' ')}
            key={item.level}
          >
            <div className="flex size-12 items-center justify-center border border-rdi-ink font-mono text-lg font-semibold text-rdi-ink">
              {item.level}
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
                Level {item.level}
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-rdi-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">{item.body}</p>
            </div>
            <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
                Observable signal
              </div>
              <p className="mt-2 text-sm leading-[1.7] text-rdi-ink">{item.signal}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function OpenThinkingGraphic() {
  return (
    <div className="grid gap-0 border border-border md:grid-cols-2">
      <div className="p-6 md:p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
          Open
        </div>
        <h3 className="mt-3 text-[1.625rem] font-semibold tracking-tight text-rdi-ink">
          The thinking
        </h3>
        <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">
          Category language that belongs in public view so the field can develop shared vocabulary.
        </p>
        <ul className="mt-6 grid gap-3 border-t border-border pt-5 text-sm leading-[1.65] text-rdi-ink">
          <li>— Definitions, taxonomy, and the RDI stack</li>
          <li>— Workflow library and evidence quality principles</li>
          <li>— Maturity model and readiness assessment</li>
          <li>— Directional ROI methodology</li>
          <li>— Teaching material and glossary</li>
        </ul>
      </div>
      <div className="border-t border-border bg-rdi-ink p-6 text-white md:border-l md:border-t-0 md:p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
          Protected
        </div>
        <h3 className="mt-3 text-[1.625rem] font-semibold tracking-tight">The engine</h3>
        <p className="mt-3 text-sm leading-[1.7] text-white/70">
          Commercial machinery that stays inside Evercam, not in category conversation.
        </p>
        <ul className="mt-6 grid gap-3 border-t border-white/15 pt-5 text-sm leading-[1.65] text-white/85">
          <li>— Customer and project data</li>
          <li>— Project-specific benchmarks</li>
          <li>— Quote logic and commercial modelling</li>
          <li>— Sales intelligence and pipeline</li>
          <li>— Product roadmap decisions</li>
        </ul>
      </div>
    </div>
  )
}
