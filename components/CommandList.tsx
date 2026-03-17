import Link from 'next/link'
import { commands, categories } from '@/lib/commands'

export function CommandList() {
  const groupedCommands = categories.map(cat => ({
    ...cat,
    commands: commands.filter(cmd => cmd.category === cat.name),
  })).filter(cat => cat.commands.length > 0)

  return (
    <div className="grid gap-6">
      {groupedCommands.map((category) => (
        <div key={category.name} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>
            {category.name}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.commands.map((cmd) => (
              <Link
                key={cmd.name}
                href={`/command/${cmd.name}`}
                className="group block p-4 rounded-lg bg-gray-900 border border-gray-800 hover:border-lobster-accent/50 transition-all"
              >
                <code className="text-lobster-accent font-mono text-sm">
                  {cmd.name}
                  {cmd.subcommands && <span className="text-gray-500"> *</span>}
                </code>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300">
                  {cmd.descriptionZh}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
