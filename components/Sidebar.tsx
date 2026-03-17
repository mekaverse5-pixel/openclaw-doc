'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { commands, categories } from '@/lib/commands'

export function Sidebar() {
  const pathname = usePathname()

  const groupedCommands = categories.map(cat => ({
    ...cat,
    commands: commands.filter(cmd => cmd.category === cat.name),
  })).filter(cat => cat.commands.length > 0)

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-gray-950 border-r border-gray-800 overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <span className="text-2xl">🦞</span>
          <span className="font-bold text-lg">OpenClaw</span>
        </Link>

        <nav className="space-y-6">
          {groupedCommands.map((category) => (
            <div key={category.name}>
              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${category.color}`}>
                {category.name}
              </h3>
              <ul className="space-y-1">
                {category.commands.map((cmd) => (
                  <li key={cmd.name}>
                    <Link
                      href={`/command/${cmd.name}`}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        pathname === `/command/${cmd.name}`
                          ? 'bg-lobster-accent/20 text-lobster-accent'
                          : 'text-gray-400 hover:text-white hover:bg-gray-900'
                      }`}
                    >
                      <code className="text-xs">{cmd.name}</code>
                      <p className="text-xs text-gray-500 mt-0.5">{cmd.descriptionZh}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">
            实用链接
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-900"
              >
                官方文档 ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anomalyco/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-900"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
