'use client'

import { useMemo, useState } from 'react'

import { workflowPacks } from '@/lib/rdi-data'

const projectTypes = [
  {
    label: 'Mission critical / data center',
    packs: ['progress-verification', 'claims-evidence', 'gate-logistics', 'safety-monitoring'],
  },
  {
    label: 'Commercial building',
    packs: ['progress-verification', 'stakeholder-reporting', 'design-verification'],
  },
  {
    label: 'Infrastructure',
    packs: ['claims-evidence', 'gate-logistics', 'compliance-record', 'progress-verification'],
  },
  {
    label: 'Interior fit-out',
    packs: ['progress-verification', 'design-verification', 'subcontractor-performance'],
  },
]

export function SitePlanner() {
  const [selectedType, setSelectedType] = useState(projectTypes[0].label)
  const [riskFocus, setRiskFocus] = useState('claims')

  const recommendation = useMemo(() => {
    const type = projectTypes.find((item) => item.label === selectedType) || projectTypes[0]
    const packSlugs = new Set(type.packs)

    if (riskFocus === 'safety') packSlugs.add('safety-monitoring')
    if (riskFocus === 'reporting') packSlugs.add('stakeholder-reporting')
    if (riskFocus === 'design') packSlugs.add('design-verification')
    if (riskFocus === 'claims') packSlugs.add('claims-evidence')

    return workflowPacks.filter((pack) => packSlugs.has(pack.slug))
  }, [riskFocus, selectedType])

  return (
    <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
      <div className="border border-border bg-white p-6">
        <h2 className="text-2xl font-semibold text-rdi-ink">Project context</h2>
        <label className="mt-6 grid gap-2">
          <span className="text-sm font-medium text-rdi-ink">Project type</span>
          <select
            className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink"
            onChange={(event) => setSelectedType(event.target.value)}
            value={selectedType}
          >
            {projectTypes.map((type) => (
              <option key={type.label}>{type.label}</option>
            ))}
          </select>
        </label>
        <label className="mt-5 grid gap-2">
          <span className="text-sm font-medium text-rdi-ink">Primary risk focus</span>
          <select
            className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink"
            onChange={(event) => setRiskFocus(event.target.value)}
            value={riskFocus}
          >
            <option value="claims">Claims and disputes</option>
            <option value="safety">Safety and incident review</option>
            <option value="reporting">Stakeholder reporting</option>
            <option value="design">Design and quality</option>
          </select>
        </label>
      </div>
      <div className="border border-border bg-rdi-paper p-6">
        <h2 className="text-2xl font-semibold text-rdi-ink">Recommended RDI plan</h2>
        <div className="mt-6 grid gap-4">
          {recommendation.map((pack) => (
            <div className="border border-border bg-white p-5" key={pack.slug}>
              <h3 className="text-lg font-semibold text-rdi-ink">{pack.title}</h3>
              <p className="mt-2 text-sm leading-6 text-rdi-muted">{pack.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
