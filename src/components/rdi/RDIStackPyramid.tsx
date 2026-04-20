import { rdiLayers } from '@/lib/rdi-data'

const stackAnnotations: Record<number, { question: string; signal: string }> = {
  5: {
    question: 'Where should attention go next?',
    signal: 'Portfolio view, cross-project patterns, outcome tracking.',
  },
  4: {
    question: 'Who acts, and when?',
    signal: 'Observations, tasks, escalations, closeout records.',
  },
  3: {
    question: 'What changed, and does it matter?',
    signal: 'Comparison, detection, anomaly review, exception reports.',
  },
  2: {
    question: 'Can this record be trusted?',
    signal: 'Time, location, scope, weather, schedule, chain of custody.',
  },
  1: {
    question: 'What was captured?',
    signal: 'Fixed cameras, 360 walks, drones, sensors, telemetry.',
  },
}

const toneClasses = [
  'border-rdi-ink bg-rdi-ink text-white',
  'border-rdi-rule-strong bg-white text-rdi-ink',
  'border-rdi-rule-strong bg-white text-rdi-ink',
  'border-rdi-rule-strong bg-white text-rdi-ink',
  'border-rdi-rule-strong bg-rdi-paper text-rdi-ink',
] as const

const valueMeter = [95, 78, 60, 42, 25] as const

export function RDIStackPyramid() {
  const orderedLayers = [...rdiLayers].sort((a, b) => b.id - a.id)

  return (
    <div className="border border-border bg-white">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
        <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
            Capture to command
          </div>
          <p className="mt-4 text-sm leading-[1.7] text-rdi-muted">
            Each layer depends on the layer beneath it. Value accumulates as the stack moves upward,
            from site capture to evidence, interpretation, workflow action, and leadership command.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-rdi-muted">Layers</dt>
              <dd className="mt-2 font-mono text-2xl font-semibold tracking-tight text-rdi-ink">5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-rdi-muted">Loop</dt>
              <dd className="mt-2 font-mono text-2xl font-semibold tracking-tight text-rdi-ink">1</dd>
            </div>
          </dl>
          <div className="mt-8 border-t border-border pt-5 text-xs leading-6 text-rdi-muted">
            Read top-down: command depends on action, which depends on interpretation, which depends
            on ground truth, which depends on capture.
          </div>
        </div>
        <ol className="flex flex-col gap-2 p-6 md:p-8">
          {orderedLayers.map((layer, index) => {
            const annotation = stackAnnotations[layer.id]
            const weight = valueMeter[index]

            return (
              <li
                className={[
                  'grid grid-cols-[44px_minmax(0,1fr)] items-stretch border',
                  toneClasses[index],
                ].join(' ')}
                key={layer.id}
              >
                <div
                  className={[
                    'flex flex-col items-center justify-center border-r px-2 py-4 font-mono text-sm font-semibold',
                    index === 0 ? 'border-white/25' : 'border-rdi-rule-strong',
                  ].join(' ')}
                >
                  <span className="text-[10px] uppercase tracking-[0.14em] opacity-70">L</span>
                  <span className="mt-1 text-lg leading-none">{layer.id}</span>
                </div>
                <div className="grid gap-3 px-5 py-4 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:items-start md:gap-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">
                      {layer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.65] opacity-90">{layer.body}</p>
                  </div>
                  <div className="grid gap-2 border-t border-current/15 pt-3 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    {annotation ? (
                      <>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] opacity-70">
                          {annotation.question}
                        </p>
                        <p className="text-xs leading-[1.65] opacity-80">{annotation.signal}</p>
                      </>
                    ) : null}
                    <div className="mt-1 h-[3px] w-full bg-current/15">
                      <div
                        className="h-full bg-current opacity-55"
                        style={{ width: `${weight}%` }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
