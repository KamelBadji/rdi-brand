import type { Access, CollectionConfig } from 'payload'

import { slugField } from 'payload'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

const authenticatedLearner: Access = ({ req: { user } }) =>
  Boolean(user && (user as { collection?: string }).collection === 'learners')

const authenticatedAdmin: Access = ({ req: { user } }) =>
  Boolean(user && (user as { collection?: string }).collection === 'users')

const authenticatedLearnerOrAdmin: Access = ({ req: { user } }) =>
  Boolean(
    user &&
      ((user as { collection?: string }).collection === 'learners' ||
        (user as { collection?: string }).collection === 'users'),
  )

const ownLearnerProgress: Access = ({ req: { user } }) => {
  if (!user) return false
  if ((user as { collection?: string }).collection === 'users') return true
  if ((user as { collection?: string }).collection !== 'learners') return false

  return {
    learner: {
      equals: user.id,
    },
  }
}

const ownLearnerAccount: Access = ({ req: { user } }) => {
  if (!user) return false
  if ((user as { collection?: string }).collection === 'users') return true
  if ((user as { collection?: string }).collection !== 'learners') return false

  return {
    id: {
      equals: user.id,
    },
  }
}

const publicationFields = [
  {
    name: 'status',
    type: 'select',
    defaultValue: 'draft',
    options: [
      { label: 'Draft', value: 'draft' },
      { label: 'Published', value: 'published' },
      { label: 'Internal', value: 'internal' },
    ],
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'publishedAt',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
  },
] satisfies NonNullable<CollectionConfig['fields']>

const seoFields = [
  {
    name: 'summary',
    type: 'textarea',
  },
  {
    name: 'heroImage',
    type: 'upload',
    relationTo: 'media',
  },
] satisfies NonNullable<CollectionConfig['fields']>

export const WorkflowPacks: CollectionConfig = {
  slug: 'workflow-packs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'priority', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'kicker', type: 'text' },
    ...seoFields,
    {
      name: 'commercialStory',
      type: 'textarea',
    },
    {
      name: 'primaryBuyer',
      type: 'relationship',
      relationTo: 'personas',
      hasMany: true,
    },
    {
      name: 'roiThemes',
      type: 'array',
      fields: [{ name: 'theme', type: 'text', required: true }],
    },
    {
      name: 'priority',
      type: 'number',
      defaultValue: 50,
      admin: {
        position: 'sidebar',
      },
    },
    ...publicationFields,
    slugField(),
  ],
}

export const Workflows: CollectionConfig = {
  slug: 'workflows',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'category', 'evercamRole', 'frequency', 'confidence'],
    useAsTitle: 'name',
  },
  fields: [
    { name: 'code', type: 'text', required: true, unique: true },
    { name: 'sourceId', type: 'number' },
    { name: 'name', type: 'text', required: true },
    { name: 'category', type: 'text', required: true },
    { name: 'categorySlug', type: 'text' },
    {
      name: 'workflowPack',
      type: 'relationship',
      relationTo: 'workflow-packs',
    },
    {
      name: 'evercamRole',
      type: 'select',
      options: [
        { label: 'Replacement', value: 'Replacement' },
        { label: 'Supporting', value: 'Supporting' },
        { label: 'Supporting Replacement', value: 'Supporting Replacement' },
        { label: 'Aspirational', value: 'Aspirational' },
        { label: 'None', value: 'None' },
      ],
    },
    {
      name: 'frequency',
      type: 'select',
      options: [
        { label: 'Very Common', value: 'Very Common' },
        { label: 'Common', value: 'Common' },
        { label: 'Occasional', value: 'Occasional' },
        { label: 'Rare', value: 'Rare' },
      ],
    },
    {
      name: 'confidence',
      type: 'select',
      options: [
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' },
      ],
    },
    { name: 'description', type: 'textarea', required: true },
    { name: 'evercamRoleDescription', type: 'textarea' },
    { name: 'trigger', type: 'textarea' },
    { name: 'activity', type: 'textarea' },
    { name: 'conclusion', type: 'textarea' },
    { name: 'evidenceCount', type: 'number' },
    { name: 'hasCostModel', type: 'checkbox', defaultValue: false },
    { name: 'isActive', type: 'checkbox', defaultValue: true },
    { name: 'isEvercam100Candidate', type: 'checkbox', defaultValue: false },
    { name: 'roiSummary', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      fields: [
        { name: 'order', type: 'number' },
        { name: 'description', type: 'textarea' },
        { name: 'isInferred', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'evidence',
      type: 'array',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'source', type: 'text' },
        { name: 'isInferred', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'flags',
      type: 'array',
      fields: [
        { name: 'type', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'resolved', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'rdiLayers',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Reality capture', value: 'capture' },
        { label: 'Ground truth', value: 'ground-truth' },
        { label: 'Interpretation', value: 'interpretation' },
        { label: 'Action', value: 'action' },
        { label: 'Command', value: 'command' },
      ],
    },
    ...publicationFields,
    slugField({ fieldToUse: 'name' }),
  ],
}

export const UseCases: CollectionConfig = {
  slug: 'use-cases',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'audience', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'audience', type: 'text' },
    ...seoFields,
    {
      name: 'workflowPacks',
      type: 'relationship',
      relationTo: 'workflow-packs',
      hasMany: true,
    },
    {
      name: 'workflows',
      type: 'relationship',
      relationTo: 'workflows',
      hasMany: true,
    },
    { name: 'problem', type: 'textarea' },
    { name: 'outcome', type: 'textarea' },
    { name: 'evidence', type: 'textarea' },
    ...publicationFields,
    slugField(),
  ],
}

export const Personas: CollectionConfig = {
  slug: 'personas',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea' },
    { name: 'primaryQuestions', type: 'array', fields: [{ name: 'question', type: 'text' }] },
    slugField(),
  ],
}

export const ProjectTypes: CollectionConfig = {
  slug: 'project-types',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea' },
    {
      name: 'relevantPacks',
      type: 'relationship',
      relationTo: 'workflow-packs',
      hasMany: true,
    },
    slugField(),
  ],
}

export const Courses: CollectionConfig = {
  slug: 'courses',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'level', 'estimatedMinutes', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'level', type: 'select', options: ['Foundation', 'Practitioner', 'Executive'] },
    { name: 'estimatedMinutes', type: 'number' },
    ...seoFields,
    {
      name: 'audiences',
      type: 'relationship',
      relationTo: 'personas',
      hasMany: true,
    },
    {
      name: 'relatedWorkflowPacks',
      type: 'relationship',
      relationTo: 'workflow-packs',
      hasMany: true,
    },
    { name: 'learningOutcomes', type: 'array', fields: [{ name: 'outcome', type: 'text' }] },
    ...publicationFields,
    slugField(),
  ],
}

export const Lessons: CollectionConfig = {
  slug: 'lessons',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'course', 'order'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'course', type: 'relationship', relationTo: 'courses', required: true },
    { name: 'order', type: 'number', defaultValue: 1 },
    { name: 'estimatedMinutes', type: 'number' },
    { name: 'summary', type: 'textarea' },
    {
      name: 'body',
      type: 'richText',
    },
    ...publicationFields,
    slugField(),
  ],
}

export const Assessments: CollectionConfig = {
  slug: 'assessments',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'course', type: 'relationship', relationTo: 'courses' },
    {
      name: 'questions',
      type: 'array',
      fields: [
        { name: 'prompt', type: 'textarea', required: true },
        { name: 'answer', type: 'textarea' },
      ],
    },
    ...publicationFields,
    slugField(),
  ],
}

export const Learners: CollectionConfig = {
  slug: 'learners',
  access: {
    admin: () => false,
    create: anyone,
    delete: authenticatedAdmin,
    read: authenticatedLearnerOrAdmin,
    update: ownLearnerAccount,
  },
  admin: {
    defaultColumns: ['name', 'email', 'createdAt'],
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'company',
      type: 'text',
    },
  ],
}

export const CourseProgress: CollectionConfig = {
  slug: 'course-progress',
  access: {
    create: authenticatedLearner,
    delete: ownLearnerProgress,
    read: ownLearnerProgress,
    update: ownLearnerProgress,
  },
  admin: {
    defaultColumns: ['learner', 'courseSlug', 'lessonSlug', 'status', 'completedAt'],
    useAsTitle: 'lessonSlug',
  },
  fields: [
    { name: 'learner', type: 'relationship', relationTo: 'learners', required: true },
    { name: 'courseSlug', type: 'text', required: true },
    { name: 'lessonSlug', type: 'text', required: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'completed',
      options: ['completed'],
      required: true,
    },
    { name: 'completedAt', type: 'date', required: true },
  ],
}

export const ROIAssumptions: CollectionConfig = {
  slug: 'roi-assumptions',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'category', 'defaultValue', 'unit'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'category', type: 'text', required: true },
    { name: 'defaultValue', type: 'number', required: true },
    { name: 'unit', type: 'text', required: true },
    { name: 'lowValue', type: 'number' },
    { name: 'highValue', type: 'number' },
    { name: 'methodology', type: 'textarea' },
    { name: 'public', type: 'checkbox', defaultValue: true },
    slugField(),
  ],
}

export const ROIPresets: CollectionConfig = {
  slug: 'roi-presets',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea' },
    { name: 'workflowPack', type: 'relationship', relationTo: 'workflow-packs' },
    {
      name: 'assumptions',
      type: 'relationship',
      relationTo: 'roi-assumptions',
      hasMany: true,
    },
    slugField(),
  ],
}

export const SitePlannerTemplates: CollectionConfig = {
  slug: 'site-planner-templates',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'projectType', type: 'relationship', relationTo: 'project-types' },
    { name: 'summary', type: 'textarea' },
    {
      name: 'recommendedWorkflowPacks',
      type: 'relationship',
      relationTo: 'workflow-packs',
      hasMany: true,
    },
    { name: 'captureGuidance', type: 'textarea' },
    slugField(),
  ],
}

export const GlossaryTerms: CollectionConfig = {
  slug: 'glossary-terms',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['term', 'updatedAt'],
    useAsTitle: 'term',
  },
  fields: [
    { name: 'term', type: 'text', required: true },
    { name: 'definition', type: 'textarea', required: true },
    { name: 'relatedWorkflows', type: 'relationship', relationTo: 'workflows', hasMany: true },
    slugField({ fieldToUse: 'term' }),
  ],
}

export const Resources: CollectionConfig = {
  slug: 'resources',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'type', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'type',
      type: 'select',
      options: ['Guide', 'Template', 'Report', 'Webinar', 'Download', 'Methodology'],
    },
    ...seoFields,
    { name: 'file', type: 'upload', relationTo: 'media' },
    { name: 'url', type: 'text' },
    ...publicationFields,
    slugField(),
  ],
}

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'customer', type: 'text' },
    { name: 'summary', type: 'textarea' },
    { name: 'relatedWorkflowPacks', type: 'relationship', relationTo: 'workflow-packs', hasMany: true },
    { name: 'body', type: 'richText' },
    ...publicationFields,
    slugField(),
  ],
}

export const QuoteRequests: CollectionConfig = {
  slug: 'quote-requests',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['company', 'email', 'projectType', 'createdAt'],
    useAsTitle: 'company',
  },
  fields: [
    { name: 'company', type: 'text', required: true },
    { name: 'contactName', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'region', type: 'text' },
    { name: 'projectType', type: 'text' },
    { name: 'message', type: 'textarea' },
    { name: 'selectedWorkflowPacks', type: 'relationship', relationTo: 'workflow-packs', hasMany: true },
    { name: 'calculatorSummary', type: 'json' },
  ],
}

export const SavedProjects: CollectionConfig = {
  slug: 'saved-projects',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['projectName', 'company', 'status', 'updatedAt'],
    useAsTitle: 'projectName',
  },
  fields: [
    { name: 'projectName', type: 'text', required: true },
    { name: 'company', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'region', type: 'text' },
    { name: 'projectType', type: 'relationship', relationTo: 'project-types' },
    { name: 'selectedWorkflows', type: 'relationship', relationTo: 'workflows', hasMany: true },
    { name: 'selectedWorkflowPacks', type: 'relationship', relationTo: 'workflow-packs', hasMany: true },
    { name: 'roiInputs', type: 'json' },
    { name: 'sitePlannerOutputs', type: 'json' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: ['draft', 'quote-requested', 'qualified', 'archived'],
    },
  ],
}

export const rdiCollections: CollectionConfig[] = [
  WorkflowPacks,
  Workflows,
  UseCases,
  Personas,
  ProjectTypes,
  Courses,
  Lessons,
  Assessments,
  Learners,
  CourseProgress,
  ROIAssumptions,
  ROIPresets,
  SitePlannerTemplates,
  GlossaryTerms,
  Resources,
  CaseStudies,
  QuoteRequests,
  SavedProjects,
]
