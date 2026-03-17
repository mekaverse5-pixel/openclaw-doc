import Link from 'next/link'
import { tutorials } from '@/lib/tutorials'

export default function TutorialsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">📚 实战教程</h1>
        <p className="text-gray-400 text-lg">
          一步一步教你使用 OpenClaw 的各种功能
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {tutorials.map((tutorial) => (
          <Link
            key={tutorial.slug}
            href={`/tutorials/${tutorial.slug}`}
            className="group p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-lobster-accent/50 transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-lobster-accent/20 rounded text-xs text-lobster-accent">
                {tutorial.category}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-lobster-accent transition-colors">
              {tutorial.title}
            </h2>
            <p className="text-gray-400">{tutorial.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
