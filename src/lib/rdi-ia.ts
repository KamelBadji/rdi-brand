export type RdiNavLink = {
  description?: string
  href: string
  label: string
}

export type RdiNavGroup = {
  description: string
  href: string
  links: RdiNavLink[]
  recommended: RdiNavLink
  title: string
}

export type RdiJourney = {
  href: string
  label: string
  summary: string
  title: string
}

export const navGroups: RdiNavGroup[] = [
  {
    description: 'Start with the definition, stack, operating loop, and category boundary.',
    href: '/what-is-rdi',
    recommended: {
      href: '/what-is-rdi',
      label: 'Start with the definition',
      description: 'Read the canonical explanation of Reality-Driven Intelligence.',
    },
    title: 'RDI',
    links: [
      { href: '/what-is-rdi', label: 'What is RDI?' },
      { href: '/what-is-rdi#rdi-stack', label: 'RDI stack' },
      { href: '/manifesto', label: 'Manifesto' },
      { href: '/maturity-model', label: 'Maturity model' },
      { href: '/rdi-vs-cameras-ai-dashboards', label: 'RDI vs tools' },
      { href: '/stewardship', label: 'Stewardship' },
    ],
  },
  {
    description: 'Browse workflow packs and the evidence-led workflow library.',
    href: '/use-cases',
    recommended: {
      href: '/use-cases',
      label: 'Explore workflow packs',
      description: 'See how RDI applies to repeatable construction decisions.',
    },
    title: 'Workflows',
    links: [
      { href: '/use-cases', label: 'Workflow packs' },
      { href: '/workflows', label: 'Workflow library' },
      { href: '/use-cases/progress-verification', label: 'Progress verification' },
      { href: '/use-cases/claims-evidence', label: 'Claims and evidence' },
      { href: '/use-cases/gate-logistics', label: 'Gate and logistics' },
      { href: '/use-cases/safety-monitoring', label: 'Safety monitoring' },
      { href: '/use-cases/stakeholder-reporting', label: 'Stakeholder reporting' },
    ],
  },
  {
    description: 'Understand value through workflow outcomes, evidence quality, and confidence.',
    href: '/methodology',
    recommended: {
      href: '/methodology',
      label: 'Read the economics method',
      description: 'Learn how RDI value should be measured before using the calculator.',
    },
    title: 'Economics',
    links: [
      { href: '/methodology', label: 'RDI economics' },
      { href: '/roi', label: 'ROI calculator' },
      { href: '/methodology#value-pillars', label: 'Value pillars' },
      { href: '/readiness', label: 'Maturity assessment' },
      { href: '/methodology#credibility-rules', label: 'Benchmark assumptions' },
    ],
  },
  {
    description: 'Assess whether site reality can become evidence, action, and measurable outcome.',
    href: '/readiness',
    recommended: {
      href: '/readiness',
      label: 'Assess RDI maturity',
      description: 'Find where evidence stops before it changes a decision.',
    },
    title: 'Benchmark',
    links: [
      { href: '/readiness', label: 'Maturity assessment' },
      { href: '/maturity-model', label: 'Maturity model' },
      { href: '/methodology', label: 'Benchmark assumptions' },
      { href: '/roi', label: 'ROI calculator' },
    ],
  },
  {
    description: 'Use courses and reference material to build shared language.',
    href: '/learn',
    recommended: {
      href: '/learn/rdi-foundations',
      label: 'Begin RDI foundations',
      description: 'Take the foundation course on the framework, workflows, and evidence quality.',
    },
    title: 'Learn',
    links: [
      { href: '/learn/rdi-foundations', label: 'RDI foundations course' },
      { href: '/knowledge-base', label: 'Knowledge base' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/resources', label: 'Field notes' },
      { href: '/learn', label: 'Learning center' },
    ],
  },
  {
    description: 'Turn the framework into a project plan or brief.',
    href: '/plan',
    recommended: {
      href: '/plan',
      label: 'Plan RDI coverage',
      description: 'Map a project profile to workflow packs and evidence priorities.',
    },
    title: 'Apply',
    links: [
      { href: '/plan', label: 'Site planner' },
      { href: '/get-a-quote', label: 'Project brief' },
      { href: '/readiness', label: 'Readiness assessment' },
      { href: '/workflows', label: 'Workflow library' },
    ],
  },
]

export const primaryNavItems = navGroups.map((group) => ({
  href: group.href,
  label: group.title,
}))

export const homepageJourneys: RdiJourney[] = [
  {
    href: '/what-is-rdi',
    label: 'Start with RDI',
    summary: 'Use the definition, stack, and operating loop to understand the category.',
    title: 'Understand the framework',
  },
  {
    href: '/use-cases',
    label: 'Explore workflows',
    summary: 'Browse workflow packs for progress, claims, logistics, safety, and reporting.',
    title: 'Find workflow value',
  },
  {
    href: '/methodology',
    label: 'Read the method',
    summary: 'Measure value through workflow outcomes, evidence quality, and confidence.',
    title: 'Build the economics',
  },
  {
    href: '/readiness',
    label: 'Assess maturity',
    summary: 'Find where reality capture stops before it becomes command.',
    title: 'Assess maturity',
  },
]

export const recommendedPaths: RdiJourney[] = [
  {
    href: '/what-is-rdi',
    label: 'Definition',
    summary: 'New to RDI',
    title: 'New to RDI',
  },
  {
    href: '/rdi-vs-cameras-ai-dashboards',
    label: 'Compare tools',
    summary: 'Comparing tools',
    title: 'Comparing tools',
  },
  {
    href: '/methodology',
    label: 'Economics',
    summary: 'Building a business case',
    title: 'Building a business case',
  },
  {
    href: '/learn',
    label: 'Learning center',
    summary: 'Learning the framework',
    title: 'Learning the framework',
  },
  {
    href: '/plan',
    label: 'Site planner',
    summary: 'Applying RDI to a project',
    title: 'Applying RDI to a project',
  },
]
