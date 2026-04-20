'use client'

import { useMemo, useState } from 'react'

const formatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 0,
  style: 'currency',
})

export function ROICalculator() {
  const [projectValue, setProjectValue] = useState(100_000_000)
  const [siteVisits, setSiteVisits] = useState(12)
  const [monthlyVisitCost, setMonthlyVisitCost] = useState(1800)
  const [claimsExposure, setClaimsExposure] = useState(1.2)
  const [reportingHours, setReportingHours] = useState(16)

  const result = useMemo(() => {
    const annualVisitSavings = siteVisits * monthlyVisitCost * 12 * 0.45
    const claimsAvoidance = projectValue * (claimsExposure / 100) * 0.18
    const reportingSavings = reportingHours * 52 * 85 * 0.55
    const low = annualVisitSavings + claimsAvoidance * 0.5 + reportingSavings
    const high = annualVisitSavings * 1.4 + claimsAvoidance + reportingSavings * 1.5

    return { annualVisitSavings, claimsAvoidance, high, low, reportingSavings }
  }, [claimsExposure, monthlyVisitCost, projectValue, reportingHours, siteVisits])

  return (
    <div className="grid gap-0 border border-border lg:grid-cols-[0.48fr_0.52fr]">
      <div className="bg-white p-6 md:p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
          Estimate inputs
        </div>
        <h3 className="mt-3 text-[1.5rem] font-semibold tracking-tight text-rdi-ink">
          Project assumptions
        </h3>
        <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">
          Every field is editable. The calculator is directional; real project decisions should use
          project-specific data.
        </p>
        <div className="mt-8 grid gap-5">
          <NumberField
            label="Project value"
            max={1000000000}
            min={1000000}
            step={1000000}
            value={projectValue}
            onChange={setProjectValue}
          />
          <NumberField
            label="Avoidable monthly site visits"
            max={100}
            min={0}
            step={1}
            value={siteVisits}
            onChange={setSiteVisits}
          />
          <NumberField
            label="Average cost per visit"
            max={10000}
            min={100}
            step={100}
            value={monthlyVisitCost}
            onChange={setMonthlyVisitCost}
          />
          <NumberField
            label="Claims or dispute exposure (% of project value)"
            max={10}
            min={0}
            step={0.1}
            value={claimsExposure}
            onChange={setClaimsExposure}
          />
          <NumberField
            label="Manual reporting hours per week"
            max={80}
            min={0}
            step={1}
            value={reportingHours}
            onChange={setReportingHours}
          />
        </div>
      </div>
      <div className="border-t border-border bg-rdi-ink p-6 text-white lg:border-l lg:border-t-0 md:p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
          Indicative annual value range
        </div>
        <div className="mt-5 font-mono text-[2.25rem] font-semibold leading-[1.1] tracking-tight md:text-[3rem]">
          {formatter.format(result.low)}
          <span className="mx-3 align-middle text-white/50">—</span>
          {formatter.format(result.high)}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-[1.7] text-white/70">
          A directional public estimate. Production ROI analyses use project-specific assumptions,
          workflow selection, deployment scope, and evidence quality — not this calculator alone.
        </p>
        <div className="mt-8 grid gap-0 border-t border-white/15">
          <Breakdown label="Remote verification" value={result.annualVisitSavings} />
          <Breakdown label="Claims and evidence" value={result.claimsAvoidance} />
          <Breakdown label="Reporting automation" value={result.reportingSavings} />
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
        className="h-11 border border-border bg-white px-3 font-mono text-sm text-rdi-ink focus:border-rdi-ink focus:outline-none"
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

function Breakdown({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/15 py-3 text-sm last:border-b-0">
      <span className="text-white/70">{label}</span>
      <span className="font-mono font-semibold tracking-tight">{formatter.format(value)}</span>
    </div>
  )
}
