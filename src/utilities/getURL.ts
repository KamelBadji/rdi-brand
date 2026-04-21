import canUseDOM from './canUseDOM'

const normalizeBasePath = (value?: null | string) => {
  if (!value || value === '/') return ''

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.replace(/\/$/, '')
}

const appendBasePath = (value: string) => {
  const normalizedValue = value.endsWith('/') ? value.slice(0, -1) : value
  const basePath = getBasePath()

  if (!basePath || normalizedValue.endsWith(basePath)) return normalizedValue

  return `${normalizedValue}${basePath}`
}

export const getBasePath = () => normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH)

export const withBasePath = (value: string) => {
  if (!value || /^https?:\/\//.test(value)) return value
  if (!value.startsWith('/')) return value

  const basePath = getBasePath()
  if (!basePath || value === basePath || value.startsWith(`${basePath}/`)) return value

  return `${basePath}${value === '/' ? '' : value}`
}

export const getServerSideURL = () => {
  const origin =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')

  return appendBasePath(origin)
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    return appendBasePath(window.location.origin)
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return appendBasePath(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  }

  return appendBasePath(process.env.NEXT_PUBLIC_SERVER_URL || '')
}
