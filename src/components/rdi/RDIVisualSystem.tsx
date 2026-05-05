import Image from 'next/image'
import Link from 'next/link'

import { maturityStages, rdiOperatingLoop, valuePillars, workflowAnatomy } from '@/lib/rdi-copy'
import { rdiLayers, type WorkflowPack } from '@/lib/rdi-data'
import { withRDIBasePath, workflowPackImages } from '@/lib/rdi-media'

const layerWidths: Record<number, string> = {
  5: 'lg:max-w-[42%]',
  4: 'lg:max-w-[62%]',
  3: 'lg:max-w-[78%]',
  2: 'lg:max-w-[90%]',
  1: 'lg:max-w-full',
}

const miniLayerWidths: Record<number, string> = {
  5: 'lg:max-w-[54%]',
  4: 'lg:max-w-[70%]',
  3: 'lg:max-w-[84%]',
  2: 'lg:max-w-[94%]',
  1: 'lg:max-w-full',
}

const layerTone: Record<number, string> = {
  5: 'border-rdi-ink bg-rdi-ink text-white shadow-[0_16px_36px_rgba(18,22,26,0.18)]',
  4: 'border-rdi-accent-strong bg-rdi-accent-strong text-white shadow-[0_14px_30px_rgba(130,38,38,0.16)]',
  3: 'border-rdi-accent/25 bg-rdi-accent-soft text-rdi-ink',
  2: 'border-rdi-rule-strong bg-white text-rdi-ink shadow-[0_10px_24px_rgba(18,22,26,0.06)]',
  1: 'border-rdi-rule bg-white text-rdi-ink shadow-[0_8px_18px_rgba(18,22,26,0.05)]',
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
                  <p className="mx-auto mt-3 max-w-[16rem] text-2xl font-semibold leading-[1.1] text-rdi-ink md:text-4xl">
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
              <dd className="mt-1 font-mono text-3xl font-semibold leading-none text-rdi-ink">
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
        <div className="bg-rdi-ink p-6 text-white md:p-8">
          <p className="text-sm font-semibold text-white/60">Category shift</p>
          <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-[1.15] md:text-3xl">
            Real state beats reported state.
          </h3>
        </div>
        <div className="grid gap-0">
          {rows.map((row, index) => (
            <div
              className={[
                'grid gap-4 p-5 md:grid-cols-[160px_minmax(0,1fr)] md:items-center md:p-6',
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
    <figure
      aria-label="The five layers of Reality-Driven Intelligence"
      className="overflow-hidden border border-rdi-ink bg-white"
    >
      <div className="grid border-b border-rdi-ink bg-white md:grid-cols-[minmax(0,1fr)_300px]">
        <div className="p-5 md:p-7">
          <p className="text-sm font-semibold text-rdi-accent">The canonical RDI stack</p>
          <h3 className="mt-2 text-2xl font-semibold leading-[1.08] text-rdi-ink md:text-[2rem]">
            The five layers
          </h3>
        </div>
        <div className="border-t border-rdi-ink p-5 md:border-l md:border-t-0 md:p-7">
          <p className="text-sm font-semibold leading-[1.55] text-rdi-muted">
            Read from the bottom up. Value appears when the record moves through every layer.
          </p>
        </div>
      </div>

      <div className="relative bg-rdi-paper p-4 md:p-8 lg:p-10">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--rdi-rule)_1px,transparent_1px),linear-gradient(to_bottom,var(--rdi-rule)_1px,transparent_1px)] [background-size:34px_34px]"
        />
        <div className="relative mx-auto max-w-6xl py-2 md:py-4">
          <ol className="grid gap-3 md:gap-4">
            {layers.map((layer) => (
              <li className="flex justify-center" key={layer.id}>
                <div
                  className={[
                    'relative w-full rounded-[6px] border px-5 py-5 text-center md:px-8 md:py-6 lg:min-h-[96px]',
                    layerTone[layer.id],
                    layerWidths[layer.id],
                  ].join(' ')}
                >
                  <h4 className="text-xl font-semibold leading-[1.12] md:text-[1.55rem]">
                    {layer.id}. {layer.title}
                  </h4>
                  <p className="mx-auto mt-3 max-w-3xl text-sm font-medium leading-[1.45] opacity-80 md:text-[0.98rem]">
                    {compact ? layer.body.split('.')[0] + '.' : layer.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <figcaption className="border-t border-rdi-ink bg-white p-5 text-sm font-medium leading-[1.6] text-rdi-muted md:p-6">
        The stack is complete only when captured reality becomes trusted evidence, interpreted
        change, accountable action, and measurable command.
      </figcaption>
    </figure>
  )
}

export function RDIStackMini() {
  const layers = [...rdiLayers].sort((a, b) => b.id - a.id)

  return (
    <figure
      aria-label="Compact view of the five RDI layers"
      className="relative overflow-hidden border border-rdi-ink bg-rdi-paper"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--rdi-rule)_1px,transparent_1px),linear-gradient(to_bottom,var(--rdi-rule)_1px,transparent_1px)] [background-size:30px_30px]"
      />
      <div className="relative p-5 md:p-7">
        <div className="mb-5 flex items-end justify-between gap-5 border-b border-rdi-rule-strong pb-4">
          <div>
            <p className="text-sm font-semibold text-rdi-accent">The RDI stack</p>
            <h3 className="mt-2 text-xl font-semibold leading-[1.18] text-rdi-ink">
              The five layers
            </h3>
          </div>
          <p className="hidden max-w-[12rem] text-right text-sm font-medium leading-[1.45] text-rdi-muted sm:block">
            Read from the bottom up.
          </p>
        </div>
        <ol className="grid gap-2">
          {layers.map((layer) => (
            <li className="flex justify-center" key={layer.id}>
              <div
                className={[
                  'w-full rounded-[6px] border px-4 py-3 text-center lg:px-8',
                  layerTone[layer.id],
                  miniLayerWidths[layer.id],
                ].join(' ')}
              >
                <h4 className="text-base font-semibold leading-[1.2]">
                  {layer.id}. {layer.title}
                </h4>
                <p className="mt-1 hidden text-xs font-medium leading-[1.4] opacity-80 md:block">
                  {layer.body.split('.')[0]}.
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
              'group min-h-40 p-5 transition-colors hover:bg-rdi-accent-soft/45 md:p-6',
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
            <h3 className="mt-6 text-xl font-semibold leading-[1.18] text-rdi-ink">{step.title}</h3>
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
        <p className="hidden border-x border-border px-7 py-5 text-xl font-semibold text-rdi-accent md:block">
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
            <div className="flex size-16 items-center justify-center border border-rdi-ink bg-white font-mono text-2xl font-semibold text-rdi-ink shadow-[5px_5px_0_var(--rdi-rule)]">
              {index + 1}
            </div>
            <div className="mt-6 border-t-4 border-rdi-accent bg-rdi-paper p-6">
              <p className="text-sm font-semibold text-rdi-accent">{stage.question}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-[1.12] text-rdi-ink">
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
      {packs.map((pack, index) => {
        const media = workflowPackImages[pack.slug]

        return (
          <Link
            className="group relative min-h-[260px] overflow-hidden border border-border bg-white text-rdi-ink transition-all hover:-translate-y-0.5 hover:border-rdi-ink hover:shadow-[6px_6px_0_var(--rdi-ink)]"
            href={`/use-cases/${pack.slug}`}
            key={pack.slug}
          >
            {media ? (
              <div className="relative h-40 overflow-hidden border-b border-border bg-rdi-ink">
                <Image
                  alt={media.alt}
                  className="object-cover opacity-80 grayscale transition duration-300 group-hover:scale-[1.03] group-hover:opacity-95"
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={withRDIBasePath(media.src)}
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,26,0.08),rgba(18,22,26,0.72))]" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                  <p className="text-sm font-semibold text-white">{media.caption}</p>
                  <span className="font-mono text-3xl font-semibold leading-none text-white/55">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ) : (
              <div className="absolute right-5 top-5 font-mono text-5xl font-semibold leading-none text-rdi-rule transition-colors group-hover:text-rdi-accent-soft">
                {String(index + 1).padStart(2, '0')}
              </div>
            )}
            <div className="relative p-6">
              {media ? null : <PackGlyph name={packGlyphs[pack.slug] || 'workflow'} />}
              <p
                className={
                  media
                    ? 'text-sm font-semibold text-rdi-accent'
                    : 'mt-7 text-sm font-semibold text-rdi-accent'
                }
              >
                {pack.kicker}
              </p>
              <h3 className="mt-3 max-w-[18rem] text-[1.6rem] font-semibold leading-[1.12]">
                {pack.title}
              </h3>
              <div className="mt-7 grid gap-2">
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
        )
      })}
    </div>
  )
}

export function ValueSystemGraphic() {
  return (
    <figure className="grid gap-0 border border-border bg-white lg:grid-cols-[0.7fr_1fr]">
      <div className="bg-rdi-ink p-6 text-white md:p-8">
        <p className="text-sm font-semibold text-white/60">Value system</p>
        <h3 className="mt-4 text-2xl font-semibold leading-[1.15] md:text-3xl">
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
            <span className="block font-mono text-3xl font-semibold text-rdi-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-6 text-xl font-semibold leading-[1.18] text-rdi-ink">
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
      <div className="bg-rdi-ink p-6 text-white md:p-8">
        <p className="text-sm font-semibold text-white/60">Learning path</p>
        <h3 className="mt-4 text-2xl font-semibold leading-[1.15] md:text-3xl">
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
              <span className="font-mono text-3xl font-semibold text-rdi-rule transition-colors group-hover:text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-[1.18]">{step.title}</h3>
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
          <div
            className="grid gap-3 md:grid-cols-[160px_minmax(0,1fr)_56px] md:items-center"
            key={label}
          >
            <p className="text-sm font-semibold text-rdi-ink">{label}</p>
            <div className="h-4 border border-border bg-rdi-paper">
              <div className="h-full bg-rdi-accent" style={{ width: `${value}%` }} />
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
