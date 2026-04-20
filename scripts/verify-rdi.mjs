import { chromium, devices } from '@playwright/test'
import fs from 'node:fs/promises'
import path from 'node:path'

const baseURL = process.env.RDI_VERIFY_URL || 'http://localhost:3000'
const outputDir = path.join(process.cwd(), 'verification')

const routes = [
  '/',
  '/what-is-rdi',
  '/manifesto',
  '/maturity-model',
  '/rdi-vs-cameras-ai-dashboards',
  '/use-cases',
  '/use-cases/claims-evidence',
  '/workflows/remote-site-monitoring',
  '/roi',
  '/methodology',
  '/readiness',
  '/plan',
  '/learn/rdi-foundations',
  '/learn/rdi-foundations/what-rdi-means',
  '/knowledge-base',
  '/resources',
  '/glossary',
  '/get-a-quote',
]

const bannedCopy = [
  'The portal is designed as a body of knowledge',
  'not just a product brochure',
  'Turn construction reality into evidence, action, and measurable control',
  'by Evercam',
  'mock lessons',
  'prototype',
]

async function verifyLearnerProgress(page) {
  const email = `rdi-verify-${Date.now()}@example.com`

  await page.goto(`${baseURL}/learn/rdi-foundations/what-rdi-means`, { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Create account' }).first().click()
  await page.getByLabel('Name').fill('RDI Verify')
  await page.getByLabel('Email').fill(email)
  await page.getByLabel('Password').fill('verify-rdi-2026')
  await page.getByRole('button', { name: 'Create account' }).last().click()
  await page.getByText('Signed in').waitFor()
  await page.getByRole('button', { name: 'Mark complete' }).first().click()
  await page.getByRole('button', { name: 'Completed' }).first().waitFor()
}

async function verifyQuoteRequest(page) {
  await page.goto(`${baseURL}/get-a-quote`, { waitUntil: 'networkidle' })
  await page.getByLabel('Company').fill('RDI Verification')
  await page.getByLabel('Business email').fill(`brief-${Date.now()}@example.com`)
  await page.getByLabel('Contact name').fill('RDI Verify')
  await page.getByLabel('Region').fill('Europe')
  await page.getByLabel('Project name').fill('Browser verification project')
  await page.getByLabel('What are you trying to prove, reduce, or control?').fill(
    'Verify that the public project brief path saves a structured request.',
  )
  await page.getByRole('button', { name: 'Send project brief' }).click()
  await page.getByText('Your project brief has been saved.').waitFor()
}

async function verifyContext(browser, contextOptions, label) {
  const context = await browser.newContext(contextOptions)
  await context.addInitScript(() => {
    window.localStorage.setItem('theme', 'dark')
  })
  const page = await context.newPage()
  const consoleErrors = []

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text())
    }
  })

  for (const route of routes) {
    const url = `${baseURL}${route}`
    await page.goto(url, { waitUntil: 'networkidle' })

    const overlay = await page
      .locator('[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay')
      .count()
    const bodyText = (await page.locator('body').innerText()).trim()
    const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'))

    if (overlay > 0) {
      throw new Error(`Error overlay detected on ${route}`)
    }

    if (bodyText.length < 100) {
      throw new Error(`Page looked empty on ${route}`)
    }

    if (theme === 'dark') {
      throw new Error(`Public theme stayed dark on ${route}`)
    }

    const headerText = await page.locator('header').innerText()
    if (headerText.includes('by Evercam')) {
      throw new Error(`Header attribution made the category site look like a marketing page on ${route}`)
    }

    for (const phrase of bannedCopy) {
      if (bodyText.includes(phrase)) {
        throw new Error(`Banned copy "${phrase}" found on ${route}`)
      }
    }
  }

  if (label === 'desktop') {
    await verifyLearnerProgress(page)
    await verifyQuoteRequest(page)
  }

  await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
  if (label === 'mobile') {
    const openMenus = await page.locator('header details[open]').count()
    const visibleMenuLinks = await page.locator('header details nav a:visible').count()

    if (openMenus > 0 || visibleMenuLinks > 0) {
      throw new Error('Mobile navigation should be closed by default')
    }
  }
  await page.screenshot({ fullPage: true, path: path.join(outputDir, `home-${label}.png`) })
  await page.goto(`${baseURL}/what-is-rdi`, { waitUntil: 'networkidle' })
  await page.screenshot({ fullPage: true, path: path.join(outputDir, `what-is-rdi-${label}.png`) })
  await page.goto(`${baseURL}/use-cases/claims-evidence`, { waitUntil: 'networkidle' })
  await page.screenshot({ fullPage: true, path: path.join(outputDir, `claims-evidence-${label}.png`) })
  await page.goto(`${baseURL}/workflows/remote-site-monitoring`, {
    waitUntil: 'networkidle',
  })
  await page.screenshot({ fullPage: true, path: path.join(outputDir, `workflow-${label}.png`) })
  await page.goto(`${baseURL}/learn/rdi-foundations/what-rdi-means`, { waitUntil: 'networkidle' })
  await page.screenshot({ fullPage: true, path: path.join(outputDir, `lesson-${label}.png`) })
  await page.goto(`${baseURL}/roi`, { waitUntil: 'networkidle' })
  await page.screenshot({ fullPage: true, path: path.join(outputDir, `roi-${label}.png`) })
  await context.close()

  if (consoleErrors.length) {
    throw new Error(`Console errors in ${label}: ${consoleErrors.join('\n')}`)
  }
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true })
  const browser = await chromium.launch()

  await verifyContext(browser, { viewport: { width: 1440, height: 1000 } }, 'desktop')
  await verifyContext(browser, devices['iPhone 15'], 'mobile')

  await browser.close()
  console.log('RDI browser verification passed.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
