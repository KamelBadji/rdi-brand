import Link from 'next/link'
import React from 'react'

import { navGroups } from '@/lib/rdi-ia'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-rdi-ink text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.1fr_2fr] md:py-16">
        <div>
          <Link className="text-xl font-semibold tracking-[-0.01em]" href="/">
            Reality-Driven Intelligence
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-[1.7] text-white/70">
            A field guide for the shift from construction visibility to evidence, workflow action,
            and operational intelligence.
          </p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            Evercam research initiative
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {navGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
                {group.title}
              </h2>
              <nav className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                {group.links.map((link) => (
                  <Link className="hover:text-white" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Evercam. RDI is a construction intelligence discipline,
            maintained in public.
          </span>
          <span className="font-mono uppercase tracking-[0.12em]">rdi.evercam.io</span>
        </div>
      </div>
    </footer>
  )
}
