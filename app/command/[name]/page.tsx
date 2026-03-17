import { notFound } from 'next/navigation'
import Link from 'next/link'
import { commands } from '@/lib/commands'
import { ArrowLeft } from 'lucide-react'
import { ExampleBlock } from '@/components/ExampleBlock'

interface Props {
  params: { name: string }
}

export function generateStaticParams() {
  return commands.map((cmd) => ({
    name: cmd.name,
  }))
}

export default function CommandPage({ params }: Props) {
  const command = commands.find(c => c.name === params.name)
  
  if (!command) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <code className="text-3xl font-mono text-lobster-accent">{command.name}</code>
          {command.subcommands && (
            <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">分组命令</span>
          )}
        </div>
        <p className="text-xl text-gray-300">{command.descriptionZh}</p>
        <p className="text-gray-500 mt-2">{command.description}</p>
      </header>

      {command.subcommands && command.subcommands.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">子命令</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {command.subcommands.map((sub) => (
              <Link
                key={sub.name}
                href={`/command/${command.name}-${sub.name}`}
                className="p-4 rounded-lg bg-gray-900 border border-gray-800 hover:border-lobster-accent/50 transition-all"
              >
                <code className="text-lobster-accent font-mono">{sub.name}</code>
                <p className="text-gray-400 text-sm mt-1">{sub.descriptionZh}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {command.options && command.options.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">选项</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">选项</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">描述</th>
                </tr>
              </thead>
              <tbody>
                {command.options.map((opt) => (
                  <tr key={opt.name} className="border-b border-gray-800/50">
                    <td className="py-3 px-4">
                      <code className="text-lobster-accent">
                        {opt.name}
                        {opt.required && <span className="text-red-400"> *</span>}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      <div>{opt.descriptionZh}</div>
                      <div className="text-gray-500 text-sm">{opt.description}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {command.examples && command.examples.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-4">示例</h2>
          <div className="space-y-3">
            {command.examples.map((example, i) => (
              <ExampleBlock key={i} command={example} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
