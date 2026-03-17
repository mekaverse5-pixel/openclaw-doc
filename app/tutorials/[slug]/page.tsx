import { notFound } from 'next/navigation'
import Link from 'next/link'
import { tutorials, getTutorial } from '@/lib/tutorials'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return tutorials.map((t) => ({
    slug: t.slug,
  }))
}

export default function TutorialPage({ params }: Props) {
  const tutorial = getTutorial(params.slug)

  if (!tutorial) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link
        href="/tutorials"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回教程列表
      </Link>

      <header className="mb-8">
        <span className="px-2 py-1 bg-lobster-accent/20 rounded text-xs text-lobster-accent">
          {tutorial.category}
        </span>
        <h1 className="text-3xl font-bold mt-4 mb-2">{tutorial.title}</h1>
        <p className="text-gray-400">{tutorial.description}</p>
      </header>

      <div className="space-y-8">
        {tutorial.steps.map((step, i) => (
          <div key={i} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lobster-accent text-white font-bold">
                {i + 1}
              </span>
              <h2 className="text-lg font-bold">{step.title}</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
                <code className="text-green-400">{step.content}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
