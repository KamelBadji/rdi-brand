import Link from 'next/link'
import React from 'react'

import { navGroups, primaryNavItems, type RdiNavGroup } from '@/lib/rdi-ia'

function MegaMenuPanel({ group }: { group: RdiNavGroup }) {
  return (
    <div className="invisible absolute left-0 top-full z-50 w-full border-b border-border bg-white opacity-0 shadow-[0_18px_34px_rgba(18,22,26,0.08)] transition-[opacity,visibility] duration-150 group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
      <div className="container grid gap-8 py-8 lg:grid-cols-[0.75fr_1.25fr_0.75fr]">
        <div>
          <p className="text-sm font-semibold text-rdi-accent">{group.title}</p>
          <p className="mt-3 max-w-xs text-sm leading-[1.65] text-rdi-muted">
            {group.description}
          </p>
        </div>
        <nav
          aria-label={`${group.title} navigation`}
          className="grid gap-x-8 gap-y-3 sm:grid-cols-2"
        >
          {group.links.map((link) => (
            <Link
              className="group/link border-t border-border pt-3 text-sm text-rdi-ink outline-none transition-colors hover:text-rdi-accent focus-visible:text-rdi-accent"
              href={link.href}
              key={`${group.title}-${link.href}-${link.label}`}
            >
              <span className="font-semibold">{link.label}</span>
              {link.description ? (
                <span className="mt-1 block text-xs leading-[1.55] text-rdi-muted">
                  {link.description}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
        <Link
          className="self-start border border-rdi-ink bg-rdi-ink p-5 text-white outline-none transition-colors hover:bg-black focus-visible:bg-black"
          href={group.recommended.href}
        >
          <span className="text-sm font-semibold text-white/65">Recommended start</span>
          <span className="mt-3 block text-lg font-semibold leading-[1.25]">
            {group.recommended.label}
          </span>
          {group.recommended.description ? (
            <span className="mt-3 block text-sm leading-[1.6] text-white/70">
              {group.recommended.description}
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  )
}

export async function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="container flex min-h-[68px] items-center justify-between gap-6">
        <Link className="flex items-baseline gap-3 text-rdi-ink" href="/">
          <span className="font-semibold">
            <span className="text-lg">RDI</span>
            <span className="ml-2 hidden text-sm font-normal text-rdi-muted md:inline">
              Reality-Driven Intelligence
            </span>
          </span>
        </Link>
        <nav className="hidden min-h-[68px] items-stretch text-[0.9rem] text-rdi-muted lg:flex">
          {primaryNavItems.map((item) => {
            const group = navGroups.find((navGroup) => navGroup.href === item.href)

            return (
              <div className="group/nav flex items-center" key={item.href}>
                <Link
                  aria-haspopup={group ? 'true' : undefined}
                  className="flex h-full items-center px-4 font-medium outline-none transition-colors hover:text-rdi-ink focus-visible:text-rdi-ink"
                  href={item.href}
                >
                  {item.label}
                </Link>
                {group ? <MegaMenuPanel group={group} /> : null}
              </div>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="hidden border border-rdi-ink px-4 py-2 text-sm font-medium text-rdi-ink transition-colors hover:bg-rdi-ink hover:text-white sm:inline-flex"
            href="/what-is-rdi"
          >
            Start with RDI
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
                <div className="grid gap-3 sm:col-span-2 sm:grid-cols-2">
                  <Link
                    className="inline-flex items-center justify-center border border-rdi-ink bg-rdi-ink px-4 py-3 text-sm font-semibold text-white"
                    href="/what-is-rdi"
                  >
                    Start with RDI
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center border border-rdi-ink px-4 py-3 text-sm font-semibold text-rdi-ink"
                    href="/readiness"
                  >
                    Assess maturity
                  </Link>
                </div>
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="text-sm font-semibold text-rdi-muted">
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
