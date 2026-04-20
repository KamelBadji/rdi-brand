'use client'

import { useState, type FormEvent } from 'react'

type WorkflowPackOption = {
  slug: string
  title: string
}

export function QuoteRequestForm({ workflowPacks }: { workflowPacks: WorkflowPackOption[] }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    setStatus('submitting')
    setError('')

    const form = new FormData(formElement)
    const projectName = String(form.get('projectName') || '')
    const message = String(form.get('message') || '')
    const workflowPack = String(form.get('workflowPack') || '')

    const response = await fetch('/api/quote-requests', {
      body: JSON.stringify({
        company: form.get('company'),
        contactName: form.get('contactName'),
        email: form.get('email'),
        message: [projectName ? `Project: ${projectName}` : null, message].filter(Boolean).join('\n\n'),
        projectType: workflowPack,
        region: form.get('region'),
      }),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      setStatus('error')
      setError('The request could not be saved. Please try again.')
      return
    }

    formElement.reset()
    setStatus('sent')
  }

  return (
    <form
      className="border border-border bg-white p-6 md:p-8"
      onSubmit={submit}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
        Project brief
      </div>
      <h3 className="mt-3 text-[1.5rem] font-semibold tracking-tight text-rdi-ink">
        Tell us what the project needs to prove
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-rdi-muted">
        We will match the brief to the relevant RDI workflow packs and evidence requirements before
        replying.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <FormField label="Company" name="company" required />
        <FormField label="Business email" name="email" required type="email" />
        <FormField label="Contact name" name="contactName" />
        <FormField label="Region" name="region" />
        <FormField label="Project name" name="projectName" />
        <label className="grid gap-2">
          <span className="text-sm font-medium leading-[1.5] text-rdi-ink">Workflow interest</span>
          <select
            className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink focus:border-rdi-ink focus:outline-none"
            name="workflowPack"
          >
            {workflowPacks.map((pack) => (
              <option key={pack.slug}>{pack.title}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-medium leading-[1.5] text-rdi-ink">
            What are you trying to prove, reduce, or control?
          </span>
          <textarea
            className="min-h-36 border border-border bg-white p-3 text-sm leading-[1.65] text-rdi-ink focus:border-rdi-ink focus:outline-none"
            name="message"
          />
        </label>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
        <button
          className="inline-flex items-center justify-center border border-rdi-ink bg-rdi-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black disabled:opacity-60"
          disabled={status === 'submitting'}
          type="submit"
        >
          {status === 'submitting' ? 'Sending…' : 'Send project brief'}
        </button>
        {status === 'sent' ? (
          <p className="text-sm leading-[1.7] text-rdi-muted">
            Your project brief has been saved. The next step is to match it against relevant RDI
            workflows and evidence requirements.
          </p>
        ) : null}
        {error ? <p className="text-sm leading-[1.7] text-rdi-accent">{error}</p> : null}
      </div>
    </form>
  )
}

function FormField({
  label,
  name,
  required,
  type = 'text',
}: {
  label: string
  name: string
  required?: boolean
  type?: string
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-baseline justify-between gap-2 text-sm font-medium leading-[1.5] text-rdi-ink">
        <span>{label}</span>
        {required ? (
          <span
            aria-hidden
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-rdi-muted"
          >
            required
          </span>
        ) : null}
      </span>
      <input
        className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink focus:border-rdi-ink focus:outline-none"
        name={name}
        required={required}
        type={type}
      />
    </label>
  )
}
