export type RDIImage = {
  alt: string
  caption: string
  src: string
}

export const workflowPackImages: Record<string, RDIImage> = {
  'progress-verification': {
    alt: 'Construction structure and ground conditions captured from a project site',
    caption: 'Continuous record',
    src: '/rdi/images/progress-verification.jpg',
  },
  'claims-evidence': {
    alt: 'Construction site capture used as evidence context',
    caption: 'Evidence trail',
    src: '/rdi/images/claims-evidence.jpg',
  },
  'gate-logistics': {
    alt: 'Construction site access and ground area used for delivery context',
    caption: 'Gate record',
    src: '/rdi/images/gate-logistics.jpg',
  },
  'safety-monitoring': {
    alt: 'Site worker capturing field conditions with a mounted camera',
    caption: 'Safety signal',
    src: '/rdi/images/safety-monitoring.jpg',
  },
  'stakeholder-reporting': {
    alt: 'Reality capture context from an active construction site',
    caption: 'Shared status',
    src: '/rdi/images/stakeholder-reporting.jpg',
  },
}

export function withRDIBasePath(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') ?? ''

  return `${basePath}${src}`
}
