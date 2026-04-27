'use client'

import { useMemo, useState } from 'react'

import { workflowPacks } from '@/lib/rdi-data'

const formatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 0,
  style: 'currency',
})

export function ROICalculator() {
  const [workflowPackSlug, setWorkflowPackSlug] = useState(workflowPacks[0]?.slug ?? '')
  const [projectValue, setProjectValue] = useState(100_000_000)
  const [annualProcessCost, setAnnualProcessCost] = useState(180_000)
  const [evidenceGapExposure, setEvidenceGapExposure] = useState(1.2)
  const [actionDelayCost, setActionDelayCost] = useState(18_000)
  const [actionDelayEvents, setActionDelayEvents] = useState(14)

  const selectedPack = workflowPacks.find((pack) => pack.slug === workflowPackSlug) || workflowPacks[0]

  const result = useMemo(() => {
    const confidenceLow = annualProcessCost * 0.18
    const confidenceHigh = annualProcessCost * 0.35
    const evidenceBase = projectValue * (evidenceGapExposure / 100)
    const evidenceLow = evidenceBase * 0.08
    const evidenceHigh = evidenceBase * 0.22
    const capacityBase = actionDelayCost * actionDelayEvents
    const capacityLow = capacityBase * 0.2
    const capacityHigh = capacityBase * 0.45

    return {
      capacityHigh,
      capacityLow,
      confidenceHigh,
      confidenceLow,
      evidenceHigh,
      evidenceLow,
      high: confidenceHigh + evidenceHigh + capacityHigh,
      low: confidenceLow + evidenceLow + capacityLow,
    }
  }, [actionDelayCost, actionDelayEvents, annualProcessCost, evidenceGapExposure, projectValue])

  const maxHigh = Math.max(result.confidenceHigh, result.evidenceHigh, result.capacityHigh)

  return (
    <div className="grid gap-0 border border-border lg:grid-cols-[0.44fr_0.56fr]">
      <div className="bg-white p-5 md:p-7">
        <div className="grid gap-2 border-b border-border pb-5">
          <p className="text-sm font-semibold text-rdi-muted">Estimate inputs</p>
          <h3 className="text-3xl font-semibold leading-[1.1] text-rdi-ink">
            Workflow assumptions
          </h3>
        </div>
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium leading-[1.5] text-rdi-ink">
              Workflow pack
            </span>
            <select
              className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink focus:border-rdi-ink focus:outline-none"
              onChange={(event) => setWorkflowPackSlug(event.target.value)}
              value={workflowPackSlug}
            >
              {workflowPacks.map((pack) => (
                <option key={pack.slug} value={pack.slug}>
                  {pack.title}
                </option>
              ))}
            </select>
          </label>
          <NumberField
            label="Project value"
            max={1000000000}
            min={1000000}
            step={1000000}
            value={projectValue}
            onChange={setProjectValue}
          />
          <NumberField
            label="Annual cost of the current workflow"
            max={5000000}
            min={0}
            step={10000}
            value={annualProcessCost}
            onChange={setAnnualProcessCost}
          />
          <NumberField
            label="Evidence gap or rework exposure (% of project value)"
            max={10}
            min={0}
            step={0.1}
            value={evidenceGapExposure}
            onChange={setEvidenceGapExposure}
          />
          <NumberField
            label="Cost of one delayed action"
            max={500000}
            min={0}
            step={1000}
            value={actionDelayCost}
            onChange={setActionDelayCost}
          />
          <NumberField
            label="Delayed actions per year"
            max={200}
            min={0}
            step={1}
            value={actionDelayEvents}
            onChange={setActionDelayEvents}
          />
        </div>
      </div>
      <div className="border-t border-border bg-rdi-ink p-6 text-white lg:border-l lg:border-t-0 md:p-8">
        <p className="text-sm font-semibold text-white/60">Indicative annual value range</p>
        <div className="mt-5 font-mono text-[2.1rem] font-semibold leading-[1.05] md:text-[3.4rem]">
          {formatter.format(result.low)}
          <span className="mx-3 align-middle text-white/50">to</span>
          {formatter.format(result.high)}
        </div>
        <div className="mt-8 grid gap-4">
          <ValueBar
            high={result.confidenceHigh}
            label="Confidence"
            low={result.confidenceLow}
            max={maxHigh}
          />
          <ValueBar
            high={result.evidenceHigh}
            label="Evidence"
            low={result.evidenceLow}
            max={maxHigh}
          />
          <ValueBar
            high={result.capacityHigh}
            label="Capacity"
            low={result.capacityLow}
            max={maxHigh}
          />
        </div>
        <div className="mt-8 border-t border-white/15 pt-6">
          <p className="text-sm leading-[1.7] text-white/70">
            Pack: <span className="font-semibold text-white">{selectedPack?.title}</span>
          </p>
          {selectedPack ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedPack.roiThemes.map((theme) => (
                <span className="border border-white/20 px-2 py-1 text-xs text-white/70" key={theme}>
                  {theme}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-8 grid gap-0 border-t border-white/15">
          <Breakdown
            label="Confidence"
            low={result.confidenceLow}
            high={result.confidenceHigh}
          />
          <Breakdown label="Evidence" low={result.evidenceLow} high={result.evidenceHigh} />
          <Breakdown label="Capacity" low={result.capacityLow} high={result.capacityHigh} />
        </div>
      </div>
    </div>
  )
}

function NumberField({
  label,
  max,
  min,
  onChange,
  step,
  value,
}: {
  label: string
  max: number
  min: number
  onChange: (value: number) => void
  step: number
  value: number
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium leading-[1.5] text-rdi-ink">{label}</span>
      <input
        className="h-10 border border-border bg-rdi-paper px-3 font-mono text-sm text-rdi-ink focus:border-rdi-ink focus:bg-white focus:outline-none"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        type="number"
        value={value}
      />
    </label>
  )
}

function ValueBar({
  high,
  label,
  low,
  max,
}: {
  high: number
  label: string
  low: number
  max: number
}) {
  const lowWidth = Math.max(6, (low / max) * 100)
  const highWidth = Math.max(lowWidth, (high / max) * 100)

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-semibold text-white">{label}</span>
        <span className="font-mono text-white/70">
          {formatter.format(low)} to {formatter.format(high)}
        </span>
      </div>
      <div className="relative h-5 border border-white/15 bg-white/5">
        <div className="absolute inset-y-0 left-0 bg-white/15" style={{ width: `${highWidth}%` }} />
        <div className="absolute inset-y-0 left-0 bg-rdi-accent" style={{ width: `${lowWidth}%` }} />
      </div>
    </div>
  )
}

function Breakdown({ high, label, low }: { high: number; label: string; low: number }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/15 py-3 text-sm last:border-b-0">
      <span className="text-white/70">{label}</span>
      <span className="font-mono font-semibold">
        {formatter.format(low)} to {formatter.format(high)}
      </span>
    </div>
  )
}
