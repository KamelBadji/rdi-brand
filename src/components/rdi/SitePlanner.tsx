'use client'

import Link from 'next/link'
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
    <div className="grid gap-0 border border-border lg:grid-cols-[0.42fr_0.58fr]">
      <div className="bg-white p-6 md:p-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
          Step 01
        </div>
        <h3 className="mt-3 text-[1.5rem] font-semibold tracking-tight text-rdi-ink">
          Project context
        </h3>
        <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">
          The planner uses project type and primary risk focus to suggest a starting combination of
          workflow packs.
        </p>
        <div className="mt-8 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium leading-[1.5] text-rdi-ink">Project type</span>
            <select
              className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink focus:border-rdi-ink focus:outline-none"
              onChange={(event) => setSelectedType(event.target.value)}
              value={selectedType}
            >
              {projectTypes.map((type) => (
                <option key={type.label}>{type.label}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium leading-[1.5] text-rdi-ink">
              Primary risk focus
            </span>
            <select
              className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink focus:border-rdi-ink focus:outline-none"
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
      </div>
      <div className="border-t border-border bg-rdi-paper lg:border-l lg:border-t-0">
        <div className="border-b border-border bg-white p-6 md:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-accent">
            Step 02 · Recommendation
          </div>
          <h3 className="mt-3 text-[1.5rem] font-semibold tracking-tight text-rdi-ink">
            Recommended RDI plan
          </h3>
          <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">
            {recommendation.length} workflow {recommendation.length === 1 ? 'pack' : 'packs'} suit
            this project profile. Use it as a starting brief, not a final scope.
          </p>
        </div>
        <ol>
          {recommendation.map((pack, index) => (
            <li
              key={pack.slug}
              className={[
                'grid items-start gap-5 bg-white px-6 py-6 md:grid-cols-[56px_minmax(0,1fr)] md:gap-6 md:px-8',
                index === 0 ? '' : 'border-t border-border',
              ].join(' ')}
            >
              <span className="font-mono text-sm text-rdi-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <Link
                  className="text-lg font-semibold leading-[1.3] tracking-tight text-rdi-ink hover:text-rdi-accent"
                  href={`/use-cases/${pack.slug}`}
                >
                  {pack.title}
                </Link>
                <p className="mt-2 text-sm leading-[1.7] text-rdi-muted">{pack.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
