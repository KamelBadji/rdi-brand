import Link from 'next/link'
import React from 'react'

import { navGroups, recommendedPaths } from '@/lib/rdi-ia'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-rdi-ink text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.1fr_2fr] md:py-16">
        <div>
          <Link className="text-xl font-semibold" href="/">
            Reality-Driven Intelligence
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-[1.7] text-white/70">
            A public framework for turning construction reality into trusted evidence,
            decision-ready interpretation, accountable action, and measurable command.
          </p>
          <Link
            className="mt-8 inline-block text-xs text-white/60 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
            href="/stewardship"
          >
            Read the stewardship note →
          </Link>
        </div>
        <div className="grid gap-10">
          <div className="border border-white/10 p-5">
            <h2 className="text-sm font-semibold text-white/60">Recommended paths</h2>
            <nav className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {recommendedPaths.map((path) => (
                <Link
                  className="border-t border-white/10 pt-3 text-sm text-white/80 hover:text-white"
                  href={path.href}
                  key={path.href}
                >
                  <span className="block font-semibold text-white">{path.title}</span>
                  <span className="mt-1 block text-xs text-white/55">{path.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-white/60">{group.title}</h2>
                <nav className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                  {group.links.map((link) => (
                    <Link
                      className="hover:text-white"
                      href={link.href}
                      key={`${group.title}-${link.href}-${link.label}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span className="max-w-2xl leading-[1.7]">
            © {new Date().getFullYear()} Evercam. The RDI manifesto, stack, workflow library, and
            measurement methodology are free to read, teach, and reference in professional practice.
            Derivative publication is being prepared under a formal license.
          </span>
          <span className="font-mono uppercase">rdi.evercam.io</span>
        </div>
      </div>
    </footer>
  )
}
