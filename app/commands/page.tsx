'use client'

import { useState } from 'react'
import Link from 'next/link'
import { commands, categories } from '@/lib/commands'
import { Search, Terminal, ArrowRight } from 'lucide-react'

export default function CommandsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCommands = commands.filter(cmd => {
    const matchesSearch = !search || 
      cmd.name.toLowerCase().includes(search.toLowerCase()) ||
      cmd.descriptionZh.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || cmd.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const groupedCommands = categories.map(cat => ({
    ...cat,
    commands: filteredCommands.filter(cmd => cmd.category === cat.name),
  })).filter(cat => cat.commands.length > 0)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF5A2D]/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            命令参考
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            所有 OpenClaw CLI 命令的完整参考
          </p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索命令..."
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A2D]/50 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-[#FF5A2D] text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-[#FF5A2D] text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Commands List */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {groupedCommands.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className={`text-lg font-semibold mb-4 ${category.color}`}>
                {category.name}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.commands.map((cmd) => (
                  <Link
                    key={cmd.name}
                    href={`/command/${cmd.name}`}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FF5A2D]/30 hover:bg-[#FF5A2D]/5 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono text-[#FF5A2D] group-hover:text-[#FF7A3D] transition-colors">
                        {cmd.name}
                        {cmd.subcommands && <span className="text-gray-500"> *</span>}
                      </code>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#FF5A2D] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-sm text-gray-400">{cmd.descriptionZh}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
