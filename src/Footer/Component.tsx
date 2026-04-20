import Link from 'next/link'
import React from 'react'

import { navGroups } from '@/lib/rdi-ia'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-rdi-ink text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link className="text-xl font-semibold" href="/">
            Reality-Driven Intelligence
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            A public field guide for the shift from construction visibility to evidence,
            workflow action, and operational intelligence.
          </p>
          <p className="mt-4 font-mono text-xs uppercase text-white/50">
            Evercam research initiative
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {navGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <nav className="mt-4 flex flex-col gap-3 text-sm text-white/70">
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
    </footer>
  )
}
