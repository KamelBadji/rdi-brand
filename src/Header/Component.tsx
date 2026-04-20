import Link from 'next/link'
import React from 'react'

import { navGroups, primaryNavItems } from '@/lib/rdi-ia'

export async function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="container flex min-h-[68px] items-center justify-between gap-6">
        <Link className="flex items-baseline gap-3 text-rdi-ink" href="/">
          <span className="font-semibold tracking-[-0.01em]">
            <span className="text-lg">RDI</span>
            <span className="ml-2 hidden text-sm font-normal text-rdi-muted md:inline">
              Reality-Driven Intelligence
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[0.9rem] text-rdi-muted lg:flex">
          {primaryNavItems.map((item) => (
            <Link
              className="transition-colors hover:text-rdi-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="hidden border border-rdi-ink px-4 py-2 text-sm font-medium text-rdi-ink transition-colors hover:bg-rdi-ink hover:text-white sm:inline-flex"
            href="/what-is-rdi"
          >
            Read the guide
          </Link>
          <details className="group lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 border border-rdi-ink px-4 py-2 text-sm font-medium text-rdi-ink hover:bg-rdi-ink hover:text-white [&::-webkit-details-marker]:hidden">
              <span>Menu</span>
              <span
                aria-hidden
                className="inline-block h-0.5 w-3 bg-current transition-transform group-open:rotate-45"
              />
            </summary>
            <div className="absolute left-0 top-full z-50 w-full border-b border-border bg-white shadow-sm">
              <div className="container grid gap-8 py-8 sm:grid-cols-2">
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-rdi-muted">
                      {group.title}
                    </h2>
                    <nav className="mt-3 grid gap-2 text-sm text-rdi-ink">
                      {group.links.map((link) => (
                        <Link
                          className="hover:text-rdi-accent"
                          href={link.href}
                          key={link.href}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
