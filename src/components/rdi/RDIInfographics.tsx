import { maturityStages, rdiOperatingLoop, valuePillars, workflowAnatomy } from '@/lib/rdi-copy'

const categoryShift = [
  {
    title: 'Reported state',
    body: 'Late photos, contractor updates, meeting notes, manual reports, and recollection.',
  },
  {
    title: 'Trusted record',
    body: 'Continuous site reality made reliable by time, location, scope, and preservation.',
  },
  {
    title: 'Decision-ready work',
    body: 'Evidence moves into workflows, ownership, action, closeout, and outcome measurement.',
  },
]

export function CategoryShiftGraphic() {
  return (
    <div className="border border-border bg-white">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr_1.1fr]">
        {categoryShift.map((step, index) => (
          <div
            className={[
              'p-6 md:p-8',
              index === 0 ? '' : 'border-t border-border lg:border-l lg:border-t-0',
              index === 0 ? 'bg-rdi-paper' : '',
            ].join(' ')}
            key={step.title}
          >
            <p className="text-sm font-semibold text-rdi-accent">Stage {index + 1}</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-rdi-ink">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-[1.65] text-rdi-muted">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-6 py-5 text-base leading-[1.65] text-rdi-ink md:px-8">
        <span className="font-semibold">The category shift:</span>{' '}
        <span className="text-rdi-muted">
          intelligence begins when the real state of the site can change a decision.
        </span>
      </div>
    </div>
  )
}

export function DecisionLoopGraphic() {
  return (
    <div className="border border-border bg-white">
      <ol className="grid gap-0 md:grid-cols-5">
        {rdiOperatingLoop.map((step, index) => (
          <li
            className={[
              'relative p-5 md:p-6',
              index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
            ].join(' ')}
            key={step.label}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center bg-rdi-ink font-mono text-sm font-semibold text-white">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-rdi-accent">{step.label}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-[1.3] text-rdi-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.65] text-rdi-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="grid border-t border-border lg:grid-cols-[1fr_auto_1fr]">
        <div className="p-6 md:p-8">
          <p className="text-sm font-semibold text-rdi-muted">Open loop</p>
          <p className="mt-3 text-base leading-[1.65] text-rdi-muted">
            Evidence stops at a dashboard, inbox, or archive. The record exists but does not change
            project behaviour.
          </p>
        </div>
        <div className="hidden items-center border-x border-border px-7 text-2xl font-semibold text-rdi-accent lg:flex">
          then
        </div>
        <div className="border-t border-border p-6 md:p-8 lg:border-t-0">
          <p className="text-sm font-semibold text-rdi-accent">Closed loop</p>
          <p className="mt-3 text-base leading-[1.65] text-rdi-ink">
            A decision, assignment, closeout, or learning record is created and the evidence remains
            available for review.
          </p>
        </div>
      </div>
    </div>
  )
}

export function MaturityCurveGraphic() {
  return (
    <div className="border border-border bg-white">
      <div className="grid gap-0 lg:grid-cols-3">
        {maturityStages.map((stage, index) => (
          <div
            className={[
              'p-6 md:p-8',
              index === 0 ? '' : 'border-t border-border lg:border-l lg:border-t-0',
            ].join(' ')}
            key={stage.title}
          >
            <p className="text-sm font-semibold text-rdi-accent">Stage {index + 1}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-rdi-ink">
              {stage.title}
            </h3>
            <p className="mt-2 text-lg font-semibold leading-[1.35] text-rdi-ink">
              {stage.question}
            </p>
            <p className="mt-4 text-sm font-semibold text-rdi-muted">{stage.layers}</p>
            <p className="mt-4 text-base leading-[1.65] text-rdi-muted">{stage.body}</p>
            <p className="mt-6 border-t border-border pt-4 text-sm leading-[1.6] text-rdi-muted">
              <span className="font-semibold text-rdi-ink">Failure mode: </span>
              {stage.failure}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MaturityLadderGraphic() {
  return <MaturityCurveGraphic />
}

export function WorkflowAnatomyGraphic() {
  return (
    <div className="border border-border bg-white">
      <ol className="grid gap-0 md:grid-cols-3 lg:grid-cols-6">
        {workflowAnatomy.map((step, index) => (
          <li
            className={[
              'p-5 md:p-6',
              index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              index >= 3 ? 'md:border-t lg:border-t-0' : '',
            ].join(' ')}
            key={step}
          >
            <span className="font-mono text-sm font-semibold text-rdi-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-rdi-ink">{step}</h3>
          </li>
        ))}
      </ol>
      <p className="border-t border-border px-6 py-5 text-base leading-[1.65] text-rdi-muted">
        A workflow is complete only when the final measurement can improve the next decision.
      </p>
    </div>
  )
}

export function ValuePillarsGraphic() {
  return (
    <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
      {valuePillars.map((pillar, index) => (
        <div
          className={[
            'p-6 md:p-8',
            index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
          ].join(' ')}
          key={pillar.title}
        >
          <p className="text-sm font-semibold text-rdi-accent">Value pillar</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-rdi-ink">
            {pillar.title}
          </h3>
          <p className="mt-4 text-base leading-[1.65] text-rdi-muted">{pillar.summary}</p>
        </div>
      ))}
    </div>
  )
}

export function OpenThinkingGraphic() {
  return (
    <div className="grid gap-0 border border-border md:grid-cols-2">
      <div className="bg-white p-6 md:p-8">
        <p className="text-sm font-semibold text-rdi-accent">Public</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-rdi-ink">
          Shared framework
        </h3>
        <p className="mt-3 text-base leading-[1.65] text-rdi-muted">
          Category language that belongs in public view so the field can develop shared vocabulary.
        </p>
        <ul className="mt-6 grid gap-3 border-t border-border pt-5 text-sm leading-[1.65] text-rdi-ink">
          <li>Definitions, taxonomy, and the RDI stack</li>
          <li>Workflow library and evidence principles</li>
          <li>Maturity model and assessment</li>
          <li>Value methodology and directional calculator</li>
          <li>Teaching material and glossary</li>
        </ul>
      </div>
      <div className="border-t border-border bg-rdi-ink p-6 text-white md:border-l md:border-t-0 md:p-8">
        <p className="text-sm font-semibold text-white/65">Protected</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">Private implementation</h3>
        <p className="mt-3 text-base leading-[1.65] text-white/70">
          Customer data, benchmarks, quote logic, and product decisions stay outside the public
          category reference.
        </p>
        <ul className="mt-6 grid gap-3 border-t border-white/15 pt-5 text-sm leading-[1.65] text-white/85">
          <li>Customer and project data</li>
          <li>Project-specific benchmarks</li>
          <li>Quote logic and commercial modelling</li>
          <li>Sales intelligence and pipeline</li>
          <li>Product roadmap decisions</li>
        </ul>
      </div>
    </div>
  )
}
