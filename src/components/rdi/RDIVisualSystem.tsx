import Link from 'next/link'

import { maturityStages, rdiOperatingLoop, valuePillars, workflowAnatomy } from '@/lib/rdi-copy'
import { rdiLayers, type WorkflowPack } from '@/lib/rdi-data'

const layerVerbs: Record<number, string> = {
  1: 'Capture',
  2: 'Verify',
  3: 'Interpret',
  4: 'Act',
  5: 'Command',
}

const layerWidths: Record<number, string> = {
  5: '42%',
  4: '62%',
  3: '80%',
  2: '92%',
  1: '100%',
}

const layerTone: Record<number, string> = {
  5: 'bg-rdi-ink text-white border-rdi-ink',
  4: 'bg-rdi-accent-strong text-white border-rdi-accent-strong',
  3: 'bg-rdi-accent/75 text-white border-rdi-accent',
  2: 'bg-white text-rdi-ink border-rdi-rule-strong',
  1: 'bg-rdi-paper text-rdi-ink border-rdi-rule',
}

const packGlyphs: Record<string, string> = {
  'claims-evidence': 'claim',
  'compliance-record': 'record',
  'design-verification': 'model',
  'gate-logistics': 'gate',
  'progress-verification': 'progress',
  'safety-monitoring': 'safety',
  'stakeholder-reporting': 'report',
  'subcontractor-performance': 'labour',
}

export function RDIHeroMap({
  evidenceCount,
  packCount,
  workflowCount,
}: {
  evidenceCount: number
  packCount: number
  workflowCount: number
}) {
  return (
    <figure
      aria-label="RDI converts site reality into evidence, action, and command"
      className="relative overflow-hidden border border-rdi-ink bg-white"
    >
      <div className="grid min-h-[420px] grid-rows-[1fr_auto] lg:min-h-[520px]">
        <div className="relative grid place-items-center bg-rdi-paper p-6 md:p-10">
          <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,var(--rdi-rule)_1px,transparent_1px),linear-gradient(to_bottom,var(--rdi-rule)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="relative w-full max-w-[560px]">
            <div className="mx-auto grid aspect-square max-w-[500px] place-items-center rounded-full border border-rdi-rule-strong bg-white">
              <div className="grid aspect-[1.15] w-[78%] place-items-center rounded-full border border-dashed border-rdi-accent/60 bg-rdi-accent-soft/60 p-8 text-center">
                <div>
                  <p className="text-sm font-semibold text-rdi-accent">site reality</p>
                  <p className="mx-auto mt-3 max-w-[16rem] text-3xl font-semibold leading-[1.05] text-rdi-ink md:text-5xl">
                    trusted record
                  </p>
                  <p className="mt-5 text-sm font-medium text-rdi-muted">
                    evidence moves when a decision changes
                  </p>
                </div>
              </div>
            </div>
            {[
              ['Capture', 'top-3 left-0'],
              ['Verify', 'right-4 top-10'],
              ['Interpret', 'bottom-20 right-0'],
              ['Act', 'bottom-4 left-10'],
              ['Measure', 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'],
            ].map(([label, position]) => (
              <div
                className={`absolute ${position} border border-rdi-ink bg-white px-3 py-2 text-sm font-semibold text-rdi-ink shadow-[4px_4px_0_var(--rdi-ink)]`}
                key={label}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <dl className="grid border-t border-rdi-ink bg-white sm:grid-cols-3">
          {[
            ['workflows', workflowCount],
            ['packs', packCount],
            ['records', evidenceCount],
          ].map(([label, value], index) => (
            <div
              className={[
                'px-5 py-4',
                index === 0 ? '' : 'border-t border-rdi-ink sm:border-l sm:border-t-0',
              ].join(' ')}
              key={String(label)}
            >
              <dt className="text-sm font-semibold text-rdi-muted">{label}</dt>
              <dd className="mt-1 font-mono text-4xl font-semibold leading-none text-rdi-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </figure>
  )
}

export function CategoryShiftBoard() {
  const rows = [
    ['Reported state', 'site visits', 'late photos', 'status meetings', 'manual reports'],
    ['Real state', 'continuous capture', 'ground truth', 'interpretation', 'measured action'],
  ]

  return (
    <figure className="border border-border bg-white">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-rdi-ink p-7 text-white md:p-10">
          <p className="text-sm font-semibold text-white/60">Category shift</p>
          <h3 className="mt-4 max-w-sm text-4xl font-semibold leading-[1.05] md:text-5xl">
            Real state beats reported state.
          </h3>
        </div>
        <div className="grid gap-0">
          {rows.map((row, index) => (
            <div
              className={[
                'grid gap-4 p-5 md:grid-cols-[170px_minmax(0,1fr)] md:items-center md:p-6',
                index === 0 ? '' : 'border-t border-border',
              ].join(' ')}
              key={row[0]}
            >
              <p className="text-base font-semibold text-rdi-ink">{row[0]}</p>
              <div className="flex flex-wrap gap-2">
                {row.slice(1).map((item) => (
                  <span
                    className={[
                      'border px-3 py-2 text-sm font-semibold leading-none',
                      index === 0
                        ? 'border-border bg-white text-rdi-muted'
                        : 'border-rdi-accent/30 bg-rdi-accent-soft/60 text-rdi-ink',
                    ].join(' ')}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  )
}

export function RDIStackPoster({ compact = false }: { compact?: boolean }) {
  const layers = [...rdiLayers].sort((a, b) => b.id - a.id)

  return (
    <figure className="border border-border bg-white p-5 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[170px_minmax(0,1fr)]">
        <div className="flex flex-row justify-between gap-3 lg:flex-col">
          {layers.map((layer) => (
            <div
              className="flex min-w-0 flex-1 items-center justify-center border border-border bg-white px-2 py-3 text-center lg:justify-end lg:border-0 lg:bg-transparent lg:text-right"
              key={layer.id}
            >
              <span className="text-sm font-semibold text-rdi-ink md:text-lg">
                {layerVerbs[layer.id]}
              </span>
            </div>
          ))}
        </div>
        <ol className="grid gap-3">
          {layers.map((layer) => (
            <li className="group flex justify-center" key={layer.id}>
              <div
                className={[
                  'relative w-full border px-5 py-5 text-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[6px_6px_0_var(--rdi-rule-strong)] md:px-8',
                  layerTone[layer.id],
                ].join(' ')}
                style={{ maxWidth: layerWidths[layer.id] }}
              >
                <p className="font-mono text-sm font-semibold uppercase opacity-75">
                  {layer.id}. {layer.title}
                </p>
                <p className="mt-3 text-base font-semibold leading-[1.35] md:text-lg">
                  {compact ? layer.body.split('.')[0] + '.' : layer.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}

export function OperatingLoopPoster() {
  return (
    <figure className="border border-border bg-white">
      <ol className="grid gap-0 lg:grid-cols-5">
        {rdiOperatingLoop.map((step, index) => (
          <li
            className={[
              'group min-h-48 p-5 transition-colors hover:bg-rdi-accent-soft/45 md:p-6',
              index === 0 ? '' : 'border-t border-border lg:border-l lg:border-t-0',
            ].join(' ')}
            key={step.label}
          >
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center bg-rdi-ink font-mono text-base font-semibold text-white">
                {index + 1}
              </span>
              <span className="text-sm font-semibold text-rdi-accent">{step.label}</span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold leading-[1.08] text-rdi-ink">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-[1.55] text-rdi-muted opacity-80 transition-opacity group-hover:opacity-100">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
      <div className="grid border-t border-border md:grid-cols-[1fr_auto_1fr]">
        <p className="p-5 text-base font-semibold text-rdi-muted md:p-6">
          Open loop: evidence stops at a dashboard.
        </p>
        <p className="hidden border-x border-border px-7 py-5 text-2xl font-semibold text-rdi-accent md:block">
          then
        </p>
        <p className="border-t border-border p-5 text-base font-semibold text-rdi-ink md:border-t-0 md:p-6">
          Closed loop: a decision record is created.
        </p>
      </div>
    </figure>
  )
}

export function MaturityPathGraphic() {
  return (
    <figure className="border border-border bg-white p-5 md:p-8">
      <div className="relative grid gap-4 lg:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-rdi-rule-strong lg:block" />
        {maturityStages.map((stage, index) => (
          <div className="relative" key={stage.title}>
            <div className="flex size-20 items-center justify-center border border-rdi-ink bg-white font-mono text-3xl font-semibold text-rdi-ink shadow-[6px_6px_0_var(--rdi-rule)]">
              {index + 1}
            </div>
            <div className="mt-7 border-t-4 border-rdi-accent bg-rdi-paper p-6">
              <p className="text-sm font-semibold text-rdi-accent">{stage.question}</p>
              <h3 className="mt-3 text-3xl font-semibold leading-[1.05] text-rdi-ink">
                {stage.title}
              </h3>
              <p className="mt-5 text-sm font-semibold text-rdi-muted">{stage.layers}</p>
              <p className="mt-4 text-sm leading-[1.55] text-rdi-muted">{stage.failure}</p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}

export function WorkflowPackMap({ packs }: { packs: WorkflowPack[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {packs.map((pack, index) => (
        <Link
          className="group relative min-h-[270px] overflow-hidden border border-border bg-white p-6 text-rdi-ink transition-all hover:-translate-y-1 hover:border-rdi-ink hover:shadow-[8px_8px_0_var(--rdi-ink)]"
          href={`/use-cases/${pack.slug}`}
          key={pack.slug}
        >
          <div className="absolute right-5 top-5 font-mono text-6xl font-semibold leading-none text-rdi-rule transition-colors group-hover:text-rdi-accent-soft">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="relative">
            <PackGlyph name={packGlyphs[pack.slug] || 'workflow'} />
            <p className="mt-7 text-sm font-semibold text-rdi-accent">{pack.kicker}</p>
            <h3 className="mt-3 max-w-[16rem] text-3xl font-semibold leading-[1.05]">
              {pack.title}
            </h3>
            <div className="mt-8 grid gap-2">
              {pack.roiThemes.slice(0, 3).map((theme) => (
                <span
                  className="inline-flex w-fit border border-border bg-rdi-paper px-2 py-1 text-xs font-medium text-rdi-muted"
                  key={theme}
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function ValueSystemGraphic() {
  return (
    <figure className="grid gap-0 border border-border bg-white lg:grid-cols-[0.7fr_1fr]">
      <div className="bg-rdi-ink p-7 text-white md:p-10">
        <p className="text-sm font-semibold text-white/60">Value system</p>
        <h3 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
          Measure the workflow, not the feature.
        </h3>
      </div>
      <div className="grid gap-0 md:grid-cols-3">
        {valuePillars.map((pillar, index) => (
          <div
            className={[
              'p-6',
              index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
            ].join(' ')}
            key={pillar.title}
          >
            <span className="block font-mono text-4xl font-semibold text-rdi-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-8 text-2xl font-semibold leading-[1.1] text-rdi-ink">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-[1.55] text-rdi-muted">{pillar.summary}</p>
          </div>
        ))}
      </div>
    </figure>
  )
}

export function WorkflowAnatomyStrip() {
  return (
    <figure className="border border-border bg-white">
      <ol className="grid md:grid-cols-3 lg:grid-cols-6">
        {workflowAnatomy.map((step, index) => (
          <li
            className={[
              'min-h-32 p-5',
              index === 0 ? '' : 'border-t border-border md:border-l md:border-t-0',
              index >= 3 ? 'md:border-t lg:border-t-0' : '',
            ].join(' ')}
            key={step}
          >
            <p className="font-mono text-sm font-semibold text-rdi-accent">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-6 text-xl font-semibold text-rdi-ink">{step}</h3>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function LearningPathGraphic({
  steps,
}: {
  steps: Array<{ href: string; summary: string; title: string }>
}) {
  return (
    <figure className="grid border border-border bg-white lg:grid-cols-[0.55fr_1fr]">
      <div className="bg-rdi-ink p-7 text-white md:p-10">
        <p className="text-sm font-semibold text-white/60">Learning path</p>
        <h3 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
          Define the discipline, then apply it to work.
        </h3>
      </div>
      <ol className="grid md:grid-cols-2">
        {steps.map((step, index) => (
          <li
            className={[
              index === 0 ? '' : 'border-t border-border md:border-t-0',
              index % 2 !== 0 ? 'md:border-l' : '',
              index >= 2 ? 'md:border-t' : '',
            ].join(' ')}
            key={step.title}
          >
            <Link
              className="group block min-h-52 p-6 text-rdi-ink transition-colors hover:bg-rdi-accent-soft/45"
              href={step.href}
            >
              <span className="font-mono text-4xl font-semibold text-rdi-rule transition-colors group-hover:text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 text-2xl font-semibold leading-[1.1]">{step.title}</h3>
              <p className="mt-4 text-sm leading-[1.55] text-rdi-muted">{step.summary}</p>
            </Link>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function ReadinessScoreGraphic() {
  const scores = [
    ['Capture', 86],
    ['Ground truth', 64],
    ['Interpretation', 48],
    ['Action', 42],
    ['Command', 28],
    ['Measurement', 35],
  ]

  return (
    <figure className="border border-border bg-white p-6 md:p-8">
      <div className="grid gap-5">
        {scores.map(([label, value]) => (
          <div className="grid gap-3 md:grid-cols-[160px_minmax(0,1fr)_56px] md:items-center" key={label}>
            <p className="text-sm font-semibold text-rdi-ink">{label}</p>
            <div className="h-4 border border-border bg-rdi-paper">
              <div
                className="h-full bg-rdi-accent"
                style={{ width: `${value}%` }}
              />
            </div>
            <p className="font-mono text-sm font-semibold text-rdi-muted">{value}%</p>
          </div>
        ))}
      </div>
    </figure>
  )
}

function PackGlyph({ name }: { name: string }) {
  const glyph = {
    claim: 'M6 6h28v28H6z M12 15h16 M12 22h11',
    gate: 'M8 32V8h24v24 M14 32V14h12v18',
    labour: 'M20 10a6 6 0 110 12 6 6 0 010-12z M9 34c2-6 6-9 11-9s9 3 11 9',
    model: 'M20 6l14 8v16l-14 8-14-8V14z M20 22l14-8 M20 22L6 14 M20 22v16',
    progress: 'M7 30h26 M10 26l6-8 6 5 8-12',
    record: 'M10 6h18l4 4v28H10z M15 17h12 M15 24h12 M15 31h8',
    report: 'M8 28h24 M12 28V12 M20 28V7 M28 28V18',
    safety: 'M20 6l14 6v9c0 9-5 15-14 19C11 36 6 30 6 21v-9z M14 22l4 4 8-9',
    workflow: 'M7 20h8 M25 20h8 M16 20a4 4 0 108 0 4 4 0 00-8 0z',
  }[name]

  return (
    <svg
      aria-hidden
      className="size-14 text-rdi-ink"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.8"
      viewBox="0 0 40 40"
    >
      <path d={glyph} />
    </svg>
  )
}
