import Link from 'next/link'
import { tutorials } from '@/lib/tutorials'
import { BookOpen, Clock, Zap } from 'lucide-react'

export default function TutorialsPage() {
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

  const groupedTutorials = tutorials.reduce((acc, tutorial) => {
    if (!acc[tutorial.category]) {
      acc[tutorial.category] = []
    }
    acc[tutorial.category].push(tutorial)
    return acc
  }, {} as Record<string, typeof tutorials>)

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">📚 实战教程</h1>
        <p className="text-gray-400 text-lg">
          一步一步教你使用 OpenClaw 的各种功能
        </p>
      </header>

      <div className="space-y-8">
        {Object.entries(groupedTutorials).map(([category, categoryTutorials]) => (
          <section key={category}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-lobster-accent" />
              {category}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {categoryTutorials.map((tutorial) => (
                <Link
                  key={tutorial.slug}
                  href={`/tutorials/${tutorial.slug}`}
                  className="group p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-lobster-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-lobster-accent transition-colors">
                      {tutorial.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(tutorial.difficulty)}`}>
                      {getDifficultyText(tutorial.difficulty)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{tutorial.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {tutorial.steps.length} 步
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
