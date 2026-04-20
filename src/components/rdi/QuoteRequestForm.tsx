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
    <form className="grid gap-6 border border-border bg-white p-6 md:grid-cols-2" onSubmit={submit}>
      <FormField label="Company" name="company" required />
      <FormField label="Business email" name="email" required type="email" />
      <FormField label="Contact name" name="contactName" />
      <FormField label="Region" name="region" />
      <FormField label="Project name" name="projectName" />
      <label className="grid gap-2">
        <span className="text-sm font-medium text-rdi-ink">Workflow interest</span>
        <select className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink" name="workflowPack">
          {workflowPacks.map((pack) => (
            <option key={pack.slug}>{pack.title}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-sm font-medium text-rdi-ink">
          What are you trying to prove, reduce, or control?
        </span>
        <textarea className="min-h-32 border border-border bg-white p-3 text-sm text-rdi-ink" name="message" />
      </label>
      <button
        className="border border-rdi-ink bg-rdi-ink px-5 py-3 text-sm font-medium text-white disabled:opacity-60 md:w-fit"
        disabled={status === 'submitting'}
        type="submit"
      >
        {status === 'submitting' ? 'Sending...' : 'Send project brief'}
      </button>
      {status === 'sent' ? (
        <p className="text-sm leading-6 text-rdi-muted md:col-span-2">
          Your project brief has been saved. The next step is to match it against relevant RDI
          workflows and evidence requirements.
        </p>
      ) : null}
      {error ? <p className="text-sm leading-6 text-rdi-accent md:col-span-2">{error}</p> : null}
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
      <span className="text-sm font-medium text-rdi-ink">{label}</span>
      <input
        className="h-11 border border-border bg-white px-3 text-sm text-rdi-ink"
        name={name}
        required={required}
        type={type}
      />
    </label>
  )
}
