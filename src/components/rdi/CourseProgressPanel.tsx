'use client'

import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { withBasePath } from '@/utilities/getURL'

import type { Course } from '@/lib/rdi-data'

type ProgressDoc = {
  lessonSlug: string
}

type ProgressResponse = {
  learner: null | {
    email: string
    id: number | string
    name?: string | null
  }
  progress: ProgressDoc[]
}

export function CourseProgressPanel({ course }: { course: Course }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [progress, setProgress] = useState<ProgressResponse>({ learner: null, progress: [] })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const completed = useMemo(
    () => new Set(progress.progress.map((item) => item.lessonSlug)),
    [progress.progress],
  )
  const completionCount = completed.size
  const completionPct = Math.round((completionCount / course.lessons.length) * 100)

  async function loadProgress() {
    const response = await fetch(withBasePath('/rdi-api/progress'), { credentials: 'include' })
    const data = (await response.json()) as ProgressResponse
    setProgress(data)
  }

  useEffect(() => {
    void loadProgress()
  }, [])

  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'register') {
        const register = await fetch(withBasePath('/api/learners'), {
          body: JSON.stringify({ email, name, password }),
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        })

        if (!register.ok && register.status !== 409) {
          const data = await register.json()
          throw new Error(data.errors?.[0]?.message || 'Registration failed.')
        }
      }

      const login = await fetch(withBasePath('/api/learners/login'), {
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })

      if (!login.ok) {
        const data = await login.json()
        throw new Error(data.errors?.[0]?.message || 'Sign in failed.')
      }

      setPassword('')
      await loadProgress()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Sign in failed.')
    } finally {
      setLoading(false)
    }
  }

  async function markComplete(lessonSlug: string) {
    setError('')
    const response = await fetch(withBasePath('/rdi-api/progress'), {
      body: JSON.stringify({ courseSlug: course.slug, lessonSlug }),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      setError('Sign in to save lesson completion.')
      return
    }

    await loadProgress()
  }

  async function signOut() {
    await fetch(withBasePath('/api/learners/logout'), {
      credentials: 'include',
      method: 'POST',
    })
    await loadProgress()
  }

  return (
    <div className="border border-border bg-white p-5">
      {progress.learner ? (
        <div>
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 md:flex-row md:items-center">
            <div>
              <div className="font-mono text-xs uppercase text-rdi-muted">
                Signed in
              </div>
              <div className="mt-2 text-xl font-semibold text-rdi-ink">
                {progress.learner.name || progress.learner.email}
              </div>
            </div>
            <button
              className="border border-border px-4 py-2 text-sm font-medium text-rdi-ink"
              onClick={signOut}
              type="button"
            >
              Sign out
            </button>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between text-sm text-rdi-muted">
              <span>
                {completionCount} of {course.lessons.length} lessons complete
              </span>
              <span>{completionPct}%</span>
            </div>
            <div className="mt-3 h-2 bg-rdi-paper">
              <div className="h-2 bg-rdi-accent" style={{ width: `${completionPct}%` }} />
            </div>
          </div>
        </div>
      ) : (
        <form className="grid gap-4" onSubmit={submitAuth}>
          <div>
            <div className="font-mono text-xs uppercase text-rdi-muted">
              Course account
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-rdi-ink">Track completion</h2>
            <p className="mt-2 text-sm leading-6 text-rdi-muted">
              Sign in to save lesson completion for this course.
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <button
              className={`border px-3 py-2 ${mode === 'login' ? 'border-rdi-ink bg-rdi-ink text-white' : 'border-border text-rdi-ink'}`}
              onClick={() => setMode('login')}
              type="button"
            >
              Sign in
            </button>
            <button
              className={`border px-3 py-2 ${mode === 'register' ? 'border-rdi-ink bg-rdi-ink text-white' : 'border-border text-rdi-ink'}`}
              onClick={() => setMode('register')}
              type="button"
            >
              Create account
            </button>
          </div>
          {mode === 'register' ? (
            <label className="grid gap-2 text-sm font-medium text-rdi-ink">
              Name
              <input
                className="border border-border px-3 py-3 font-normal"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </label>
          ) : null}
          <label className="grid gap-2 text-sm font-medium text-rdi-ink">
            Email
            <input
              className="border border-border px-3 py-3 font-normal"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-rdi-ink">
            Password
            <input
              className="border border-border px-3 py-3 font-normal"
              minLength={8}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </label>
          {error ? <p className="text-sm text-rdi-accent">{error}</p> : null}
          <button
            className="border border-rdi-ink bg-rdi-ink px-4 py-3 text-sm font-medium text-white"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Working...' : mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>
      )}
      {progress.learner ? (
        <div className="mt-6 grid gap-3">
          {course.lessons.map((lesson, index) => (
            <div
              className="flex flex-col justify-between gap-3 border border-border p-4 md:flex-row md:items-center"
              key={lesson.slug}
            >
              <div>
                <div className="font-mono text-xs uppercase text-rdi-muted">
                  Lesson {index + 1}
                </div>
                <div className="mt-1 font-semibold text-rdi-ink">{lesson.title}</div>
              </div>
              <button
                className="border border-rdi-ink px-4 py-2 text-sm font-medium text-rdi-ink disabled:border-border disabled:text-rdi-muted"
                disabled={completed.has(lesson.slug)}
                onClick={() => markComplete(lesson.slug)}
                type="button"
              >
                {completed.has(lesson.slug) ? 'Completed' : 'Mark complete'}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
