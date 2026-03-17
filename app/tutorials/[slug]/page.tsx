import { notFound } from 'next/navigation'
import Link from 'next/link'
import { tutorials, getTutorial } from '@/lib/tutorials'
import { ArrowLeft, BookOpen, Zap } from 'lucide-react'

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-400/10'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10'
      case 'hard': return 'text-red-400 bg-red-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单'
      case 'medium': return '中等'
      case 'hard': return '困难'
      default: return difficulty
    }
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
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 bg-lobster-accent/20 rounded text-xs text-lobster-accent">
            {tutorial.category}
          </span>
          <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(tutorial.difficulty)}`}>
            {getDifficultyText(tutorial.difficulty)}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{tutorial.title}</h1>
        <p className="text-gray-400">{tutorial.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4" />
            {tutorial.steps.length} 个步骤
          </span>
        </div>
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
              <div 
                className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm"
                dangerouslySetInnerHTML={{ 
                  __html: step.content
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="text-green-400 bg-gray-900 px-1 rounded">$1</code>')
                    .replace(/\n/g, '<br/>')
                    .replace(/^# (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
