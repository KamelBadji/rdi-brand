import 'dotenv/config'

import config from '@payload-config'
import { getPayload } from 'payload'

import { courses, glossaryTerms, initialPosts, workflowPacks, workflows } from '@/lib/rdi-data'

const collectionsToClear = [
  'workflow-packs',
  'workflows',
  'use-cases',
  'personas',
  'project-types',
  'courses',
  'lessons',
  'assessments',
  'course-progress',
  'roi-assumptions',
  'roi-presets',
  'site-planner-templates',
  'glossary-terms',
  'resources',
  'case-studies',
  'quote-requests',
  'saved-projects',
] as const

async function main() {
  const payload = await getPayload({ config })

  payload.logger.info('Seeding RDI content...')

  for (const collection of collectionsToClear) {
    await payload.db.deleteMany({ collection, where: {} } as any)
  }

  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
    where: { email: { equals: 'rdi-admin@evercam.io' } },
  })

  if (!existingUsers.docs.length) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'rdi-admin@evercam.io',
        name: 'RDI Admin',
        password: 'rdi-admin-password',
      },
    })
  }

  const personaDocs = await Promise.all(
    [
      {
        title: 'Project director',
        summary: 'Needs confidence that work is progressing, risks are visible, and teams can act quickly.',
      },
      {
        title: 'Commercial director',
        summary: 'Needs defensible evidence for claims, payment, disputes, and risk conversations.',
      },
      {
        title: 'Health and safety director',
        summary: 'Needs reliable incident review, risk signals, and closeout evidence.',
      },
      {
        title: 'Owner representative',
        summary: 'Needs trusted reporting without relying only on manual site updates.',
      },
    ].map((persona) =>
      payload.create({
        collection: 'personas',
        data: {
          ...persona,
          slug: persona.title.toLowerCase().replaceAll(' ', '-'),
        },
      } as any),
    ),
  )

  const packDocs = new Map<string, string | number>()

  for (const pack of workflowPacks) {
    const doc = await payload.create({
      collection: 'workflow-packs',
      data: {
        title: pack.title,
        kicker: pack.kicker,
        summary: pack.summary,
        commercialStory: pack.commercialStory,
        primaryBuyer: personaDocs.map((persona) => persona.id),
        priority: workflowPacks.indexOf(pack) + 1,
        roiThemes: pack.roiThemes.map((theme) => ({ theme })),
        slug: pack.slug,
        status: 'published',
        publishedAt: new Date().toISOString(),
      } as any,
    })

    packDocs.set(pack.slug, doc.id)
  }

  const packForCategory = new Map<string, string | number>()
  for (const pack of workflowPacks) {
    const packId = packDocs.get(pack.slug)
    for (const category of pack.categories) {
      if (packId) packForCategory.set(category, packId)
    }
  }

  for (const workflow of workflows) {
    await payload.create({
      collection: 'workflows',
      data: {
        category: workflow.category || 'Unclassified',
        categorySlug: workflow.categorySlug,
        code: workflow.code,
        confidence: workflow.confidence || undefined,
        activity: workflow.activity,
        conclusion: workflow.conclusion,
        description: workflow.description,
        evidence: workflow.evidence.map((item) => ({
          isInferred: item.isInferred,
          quote: item.quote,
          source: item.source,
        })),
        evidenceCount: workflow.evidenceCount,
        evercamRole: workflow.evercamRole || undefined,
        evercamRoleDescription: workflow.evercamRoleDescription,
        flags: workflow.flags.map((flag) => ({
          description: flag.description,
          resolved: flag.resolved,
          type: flag.type,
        })),
        frequency: workflow.frequency || undefined,
        hasCostModel: workflow.hasCostModel,
        isActive: workflow.isActive,
        isEvercam100Candidate: workflow.priority,
        name: workflow.name,
        sourceId: workflow.sourceId,
        steps: workflow.steps.map((step) => ({
          description: step.description,
          isInferred: step.isInferred,
          order: step.order,
        })),
        tags: workflow.tags.map((tag) => ({ tag })),
        trigger: workflow.trigger,
        roiSummary: workflow.priority
          ? 'Priority candidate for the Evercam 100 because it is very common and high confidence.'
          : 'Workflow requires more qualification before it becomes a priority public ROI case.',
        slug: workflow.slug,
        status: 'published',
        publishedAt: new Date().toISOString(),
        workflowPack: workflow.category ? packForCategory.get(workflow.category) : undefined,
      } as any,
    })
  }

  await Promise.all(
    [
      {
        title: 'Mission critical / data center',
        summary: 'High-value projects where schedule, claims, access, safety, and reporting risk compound quickly.',
        relevantPacks: ['progress-verification', 'claims-evidence', 'gate-logistics', 'safety-monitoring'],
      },
      {
        title: 'Commercial building',
        summary: 'Core project environment for progress verification, stakeholder reporting, and design verification.',
        relevantPacks: ['progress-verification', 'stakeholder-reporting', 'design-verification'],
      },
      {
        title: 'Infrastructure',
        summary: 'Linear or distributed projects with strong evidence, compliance, logistics, and claims needs.',
        relevantPacks: ['claims-evidence', 'gate-logistics', 'compliance-record', 'progress-verification'],
      },
    ].map((projectType) =>
      payload.create({
        collection: 'project-types',
        data: {
          title: projectType.title,
          summary: projectType.summary,
          relevantPacks: projectType.relevantPacks
            .map((slug) => packDocs.get(slug))
            .filter(Boolean),
          slug: projectType.title.toLowerCase().replaceAll(' ', '-').replaceAll('/', ''),
        } as any,
      }),
    ),
  )

  for (const course of courses) {
    const courseDoc = await payload.create({
      collection: 'courses',
      data: {
        estimatedMinutes: course.estimatedMinutes,
        learningOutcomes: [
          { outcome: 'Explain RDI using the five-layer stack.' },
          { outcome: 'Translate product capabilities into workflows.' },
          { outcome: 'Connect workflow packs to ROI conversations.' },
        ],
        level: course.level,
        slug: course.slug,
        status: 'published',
        summary: course.summary,
        title: course.title,
        publishedAt: new Date().toISOString(),
      } as any,
    })

    for (const lesson of course.lessons) {
      await payload.create({
        collection: 'lessons',
        data: {
          course: courseDoc.id,
          estimatedMinutes: lesson.estimatedMinutes,
          order: course.lessons.indexOf(lesson) + 1,
          slug: lesson.slug,
          status: 'published',
          summary: lesson.summary,
          title: lesson.title,
          publishedAt: new Date().toISOString(),
        } as any,
      })
    }
  }

  for (const term of glossaryTerms) {
    await payload.create({
      collection: 'glossary-terms',
      data: {
        definition: term.definition,
        slug: term.slug,
        term: term.term,
      } as any,
    })
  }

  await Promise.all(
    [
      {
        title: 'Average cost per avoided site visit',
        category: 'Remote verification',
        defaultValue: 1800,
        lowValue: 900,
        highValue: 3500,
        unit: 'USD per visit',
        methodology: 'Includes travel, time, coordination cost, and opportunity cost.',
      },
      {
        title: 'Claims exposure protected by evidence',
        category: 'Claims and evidence',
        defaultValue: 1.2,
        lowValue: 0.4,
        highValue: 3,
        unit: 'Percent of project value',
        methodology: 'Directional public assumption until customer-specific claims history is available.',
      },
      {
        title: 'Manual reporting time saved',
        category: 'Stakeholder reporting',
        defaultValue: 16,
        lowValue: 4,
        highValue: 40,
        unit: 'Hours per week',
        methodology: 'Includes photo collection, progress compilation, stakeholder updates, and meeting prep.',
      },
    ].map((assumption) =>
      payload.create({
        collection: 'roi-assumptions',
        data: {
          ...assumption,
          public: true,
          slug: assumption.title.toLowerCase().replaceAll(' ', '-'),
        } as any,
      }),
    ),
  )

  await Promise.all(
    initialPosts.map((post) =>
      payload.create({
        collection: 'resources',
        data: {
          slug: post.slug,
          status: 'published',
          summary: post.summary,
          title: post.title,
          type: 'Guide',
          publishedAt: new Date(post.date).toISOString(),
        } as any,
      }),
    ),
  )

  payload.logger.info('RDI seed complete.')
  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
