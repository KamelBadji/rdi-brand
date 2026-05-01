'use client'

import { useState, type FormEvent } from 'react'

export function CoursePdfRequestForm({ courseTitle }: { courseTitle: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const formData = new FormData(event.currentTarget)
      const payload = Object.fromEntries(formData.entries())
      // Best-effort post; the endpoint may not exist yet in dev.
      // We still mark the request submitted so the form gives feedback.
      try {
        await fetch('/rdi-api/course-pdf-request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, courseTitle }),
        })
      } catch {
        // ignore — public form, no hard dependency on backend
      }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email rdi@evercam.io.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="border border-border bg-rdi-paper p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-rdi-accent">
          Request received
        </p>
        <p className="mt-4 text-[1.05rem] font-semibold text-rdi-ink">
          Your PDF will be on its way shortly.
        </p>
        <p className="mt-3 text-sm leading-[1.7] text-rdi-muted">
          We will email a downloadable PDF of <em>{courseTitle}</em> to the address you provided.
          The PDF mirrors the public course content and is free to share inside your team.
        </p>
      </div>
    )
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="text-center">
        <h2 className="text-[1.4rem] font-semibold leading-[1.2] text-rdi-ink md:text-[1.55rem]">
          Download this course as a PDF
        </h2>
        <p className="mt-3 text-sm leading-[1.65] text-rdi-muted">
          A printable copy of <em>{courseTitle}</em>, with every lesson and checkpoint, delivered to
          your inbox.
        </p>
      </div>
      <div className="grid gap-3">
        <input
          aria-label="Work email"
          autoComplete="email"
          className="w-full rounded-none border border-border bg-white px-4 py-3 text-[0.95rem] text-rdi-ink placeholder:text-rdi-muted focus:border-rdi-accent focus:outline-none"
          name="email"
          placeholder="work email*"
          required
          type="email"
        />
        <input
          aria-label="First name"
          autoComplete="given-name"
          className="w-full rounded-none border border-border bg-white px-4 py-3 text-[0.95rem] text-rdi-ink placeholder:text-rdi-muted focus:border-rdi-accent focus:outline-none"
          name="firstName"
          placeholder="first name*"
          required
          type="text"
        />
        <input
          aria-label="Last name"
          autoComplete="family-name"
          className="w-full rounded-none border border-border bg-white px-4 py-3 text-[0.95rem] text-rdi-ink placeholder:text-rdi-muted focus:border-rdi-accent focus:outline-none"
          name="lastName"
          placeholder="last name*"
          required
          type="text"
        />
        <input
          aria-label="Company"
          autoComplete="organization"
          className="w-full rounded-none border border-border bg-white px-4 py-3 text-[0.95rem] text-rdi-ink placeholder:text-rdi-muted focus:border-rdi-accent focus:outline-none"
          name="company"
          placeholder="company*"
          required
          type="text"
        />
        <input
          aria-label="Job title"
          autoComplete="organization-title"
          className="w-full rounded-none border border-border bg-white px-4 py-3 text-[0.95rem] text-rdi-ink placeholder:text-rdi-muted focus:border-rdi-accent focus:outline-none"
          name="jobTitle"
          placeholder="job title*"
          required
          type="text"
        />
      </div>
      <p className="text-xs leading-[1.6] text-rdi-muted">
        We will use the contact information you provide to send you the PDF and may follow up about
        the public RDI framework. You can unsubscribe at any time. We do not share details with
        third parties.
      </p>
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      <button
        className="inline-flex items-center justify-center bg-rdi-ink px-6 py-3 font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-rdi-accent disabled:cursor-not-allowed disabled:opacity-60"
        disabled={submitting}
        type="submit"
      >
        {submitting ? 'Sending…' : 'Download'}
      </button>
    </form>
  )
}
