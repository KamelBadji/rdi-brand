export type GlossaryTerm = {
  slug: string
  term: string
  definition: string
  longDefinition?: string
  relatedSlugs?: string[]
  seeAlso?: string[]
  category?: string
}

export type LessonSection = {
  title: string
  body: string
}

export type LessonExercise = {
  prompt: string
  expectedAnswer?: string
}

export type CourseLesson = {
  slug: string
  title: string
  summary: string
  estimatedMinutes: number
  sections: LessonSection[]
  checkpoint: string
  exercises?: LessonExercise[]
  recommendedReading?: { label: string; href: string }[]
}

export type Course = {
  slug: string
  title: string
  level: 'Foundation' | 'Practitioner' | 'Executive'
  estimatedMinutes: number
  summary: string
  longSummary?: string
  outcomes?: string[]
  audience?: string[]
  lessons: CourseLesson[]
}

export type ArticleBlock =
  | { kind: 'paragraph'; body: string }
  | { kind: 'heading'; body: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'pullquote'; body: string; attribution?: string }
  | { kind: 'callout'; title: string; body: string }

export type FieldNote = {
  slug: string
  title: string
  date: string
  summary: string
  category?: string
  readingMinutes?: number
  authorRole?: string
  body: ArticleBlock[]
}

export type KnowledgeBaseArticle = {
  slug: string
  title: string
  summary: string
  area: string
  readingMinutes?: number
  body: ArticleBlock[]
  related?: string[]
}

export type CaseStudy = {
  slug: string
  title: string
  sector: string
  summary: string
  readingMinutes?: number
  facts: { label: string; value: string }[]
  body: ArticleBlock[]
  workflowPacks?: string[]
}
