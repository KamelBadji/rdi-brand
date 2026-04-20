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
    <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr]">
      <div className="border border-border bg-white p-6">
        <h2 className="text-2xl font-semibold text-rdi-ink">Estimate inputs</h2>
        <div className="mt-6 grid gap-5">
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
            label="Claims/dispute exposure (% of project value)"
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
      <div className="border border-border bg-rdi-ink p-6 text-white">
        <div className="font-mono text-xs uppercase text-white/60">Indicative annual value range</div>
        <div className="mt-4 text-4xl font-semibold md:text-5xl">
          {formatter.format(result.low)} - {formatter.format(result.high)}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70">
          This is a public directional estimate. A production Evercam ROI report should use
          project-specific assumptions, workflow selection, deployment scope, and evidence quality.
        </p>
        <div className="mt-8 grid gap-3">
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
      <span className="text-sm font-medium text-rdi-ink">{label}</span>
      <input
        className="h-11 border border-border bg-white px-3 font-mono text-sm text-rdi-ink"
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
    <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-3 text-sm">
      <span className="text-white/70">{label}</span>
      <span className="font-mono font-semibold">{formatter.format(value)}</span>
    </div>
  )
}
