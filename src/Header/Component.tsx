import Link from 'next/link'
import React from 'react'

import { navGroups, primaryNavItems } from '@/lib/rdi-ia'

export async function Header() {
  return (
    <header className="relative sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="container flex min-h-[72px] items-center justify-between gap-6">
        <Link className="flex flex-col text-rdi-ink" href="/">
          <span className="text-lg font-semibold">RDI</span>
          <span className="hidden text-xs text-rdi-muted sm:inline">
            Reality-Driven Intelligence
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-rdi-muted lg:flex">
          {primaryNavItems.map((item) => (
            <Link className="hover:text-rdi-ink" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="hidden border border-rdi-ink px-4 py-2 text-sm font-medium text-rdi-ink hover:bg-rdi-ink hover:text-white sm:inline-flex"
            href="/what-is-rdi"
          >
            Read the guide
          </Link>
          <details className="group lg:hidden">
            <summary className="cursor-pointer list-none border border-rdi-ink px-4 py-2 text-sm font-medium text-rdi-ink hover:bg-rdi-ink hover:text-white [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute left-0 top-full w-full border-b border-border bg-white shadow-sm">
              <div className="container grid gap-6 py-6 sm:grid-cols-2">
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="text-sm font-semibold text-rdi-ink">{group.title}</h2>
                    <nav className="mt-3 grid gap-2 text-sm text-rdi-muted">
                      {group.links.map((link) => (
                        <Link className="hover:text-rdi-ink" href={link.href} key={link.href}>
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
