const shiftSteps = [
  {
    title: 'Record',
    label: 'What happened?',
    body: 'Cameras, 360 walks, drones, sensors, and project systems create a durable record of site reality.',
  },
  {
    title: 'Reason',
    label: 'What does it mean?',
    body: 'Time, location, scope, schedule, model context, and evidence quality turn raw records into ground truth.',
  },
  {
    title: 'Govern',
    label: 'What changes next?',
    body: 'Findings become decisions, tasks, escalations, claims evidence, safety action, and portfolio-level learning.',
  },
]

const loopSteps = [
  'Capture',
  'Establish ground truth',
  'Interpret change',
  'Route action',
  'Measure outcome',
]

const maturityLevels = [
  {
    level: '1',
    title: 'Visibility',
    body: 'Teams can see the site and review a record.',
  },
  {
    level: '2',
    title: 'Evidence',
    body: 'Records are searchable, time-aligned, location-aware, and reliable enough for decisions.',
  },
  {
    level: '3',
    title: 'Interpretation',
    body: 'Systems identify exceptions, compare reality with intent, and explain what changed.',
  },
  {
    level: '4',
    title: 'Workflow action',
    body: 'Evidence triggers observations, tasks, escalations, closeout, reporting, and preserved proof.',
  },
  {
    level: '5',
    title: 'Command',
    body: 'Leaders coordinate attention across projects using evidence, risk, progress, and outcome signals.',
  },
]

export function CategoryShiftGraphic() {
  return (
    <div className="border border-border bg-white p-6 md:p-8">
      <div className="relative">
        <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-rdi-rule md:block" />
        <div className="absolute bottom-0 left-5 top-0 w-px bg-rdi-rule md:hidden" />
        <ol className="grid gap-8 md:grid-cols-3">
          {shiftSteps.map((step, index) => (
            <li className="relative pl-14 md:pl-0 md:pt-14" key={step.title}>
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-md border border-rdi-ink bg-white text-sm font-semibold text-rdi-ink md:left-0">
                {index + 1}
              </div>
              <div className="font-mono text-xs uppercase text-rdi-accent">Rule {index + 1}</div>
              <h3 className="mt-3 text-2xl font-semibold text-rdi-ink">{step.title}</h3>
              <div className="mt-2 text-sm font-medium text-rdi-ink">{step.label}</div>
              <p className="mt-4 text-sm leading-6 text-rdi-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-7 border-t border-border pt-5 text-sm leading-6 text-rdi-ink">
        Intelligence begins when captured reality can change a decision, assign action, or improve
        how the next project is run.
      </div>
    </div>
  )
}

export function DecisionLoopGraphic() {
  return (
    <div className="border border-border bg-white p-6 md:p-8">
      <div className="relative">
        <div className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] bg-rdi-rule md:block" />
        <ol className="grid gap-5 md:grid-cols-5">
          {loopSteps.map((step, index) => (
            <li className="relative" key={step}>
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-rdi-ink font-mono text-xs text-white">
                  {index + 1}
                </div>
                <div className="text-sm font-semibold leading-5 text-rdi-ink">{step}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-8 grid gap-0 border-t border-border pt-5 md:grid-cols-[0.45fr_0.1fr_0.45fr] md:items-start">
        <div className="pb-5 md:pb-0">
          <div className="font-mono text-xs uppercase text-rdi-accent">Incomplete</div>
          <p className="mt-2 text-sm leading-6 text-rdi-muted">
            Evidence stops at a dashboard, inbox, or archive.
          </p>
        </div>
        <div className="hidden justify-self-center text-sm font-semibold text-rdi-accent md:block">
          then
        </div>
        <div className="border-t border-border pt-5 md:border-t-0 md:pt-0">
          <div className="font-mono text-xs uppercase text-rdi-accent">Closed loop</div>
          <p className="mt-2 text-sm leading-6 text-rdi-muted">
            A decision, action, closeout, or learning record is created.
          </p>
        </div>
      </div>
    </div>
  )
}

export function MaturityLadderGraphic() {
  return (
    <div className="border border-border bg-white p-6 md:p-8">
      <div className="grid gap-4">
        {maturityLevels.map((item) => (
          <div
            className="grid gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0 md:grid-cols-[56px_0.24fr_1fr] md:items-start"
            key={item.level}
          >
            <div className="flex size-9 items-center justify-center rounded-md bg-rdi-ink font-mono text-xs text-white">
              {item.level}
            </div>
            <h3 className="text-xl font-semibold text-rdi-ink">{item.title}</h3>
            <p className="text-sm leading-6 text-rdi-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function OpenThinkingGraphic() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-border bg-white p-6">
        <div className="font-mono text-xs uppercase text-rdi-accent">Open</div>
        <h3 className="mt-3 text-2xl font-semibold text-rdi-ink">The thinking</h3>
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-rdi-muted">
          <li>Definitions and vocabulary</li>
          <li>Workflow taxonomy</li>
          <li>RDI stack and maturity model</li>
          <li>Evidence-quality principles</li>
          <li>Public ROI methodology</li>
        </ul>
      </div>
      <div className="border border-border bg-rdi-ink p-6 text-white">
        <div className="font-mono text-xs uppercase text-white/65">Protected</div>
        <h3 className="mt-3 text-2xl font-semibold">The engine</h3>
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
          <li>Customer and project data</li>
          <li>Project-specific benchmarks</li>
          <li>Quote and commercial logic</li>
          <li>Internal sales intelligence</li>
          <li>Product roadmap decisions</li>
        </ul>
      </div>
    </div>
  )
}
