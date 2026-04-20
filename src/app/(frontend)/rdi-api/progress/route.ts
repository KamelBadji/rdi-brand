import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

async function getLearner(request: Request) {
  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })

  if (!auth.user || auth.user.collection !== 'learners') {
    return { learner: null, payload }
  }

  return { learner: auth.user, payload }
}

export async function GET(request: Request) {
  const { learner, payload } = await getLearner(request)

  if (!learner) {
    return NextResponse.json({ learner: null, progress: [] })
  }

  const progress = await payload.find({
    collection: 'course-progress',
    depth: 0,
    limit: 200,
    overrideAccess: true,
    where: {
      learner: {
        equals: learner.id,
      },
    },
  })

  return NextResponse.json({
    learner: {
      email: learner.email,
      id: learner.id,
      name: learner.name,
    },
    progress: progress.docs,
  })
}

export async function POST(request: Request) {
  const { learner, payload } = await getLearner(request)

  if (!learner) {
    return NextResponse.json({ error: 'Sign in to track course progress.' }, { status: 401 })
  }

  const body = (await request.json()) as {
    courseSlug?: string
    lessonSlug?: string
  }

  if (!body.courseSlug || !body.lessonSlug) {
    return NextResponse.json({ error: 'courseSlug and lessonSlug are required.' }, { status: 400 })
  }

  const existing = await payload.find({
    collection: 'course-progress',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    where: {
      and: [
        {
          learner: {
            equals: learner.id,
          },
        },
        {
          courseSlug: {
            equals: body.courseSlug,
          },
        },
        {
          lessonSlug: {
            equals: body.lessonSlug,
          },
        },
      ],
    },
  })

  const data = {
    completedAt: new Date().toISOString(),
    courseSlug: body.courseSlug,
    learner: learner.id,
    lessonSlug: body.lessonSlug,
    status: 'completed',
  } as const

  const doc = existing.docs[0]
    ? await payload.update({
        collection: 'course-progress',
        data,
        id: existing.docs[0].id,
        overrideAccess: true,
      })
    : await payload.create({
        collection: 'course-progress',
        data,
        overrideAccess: true,
      })

  return NextResponse.json({ progress: doc })
}
