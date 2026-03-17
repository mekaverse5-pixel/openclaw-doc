import Link from 'next/link'
import { commands, categories } from '@/lib/commands'
import { tutorials } from '@/lib/tutorials'
import { 
  Terminal, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  MessageSquare, 
  Cpu,
  Settings,
  Globe,
  Shield,
  Play
} from 'lucide-react'

export default function Home() {
  const featuredCommands = commands.slice(0, 8)
  const featuredTutorials = tutorials.slice(0, 4)

  const categoryIcons: Record<string, any> = {
    '入门': Terminal,
    '配置': Settings,
    '消息': MessageSquare,
    'Agent': Cpu,
    '频道': Globe,
    '记忆': Zap,
    '技能': Terminal,
    '自动化': Zap,
    '安全': Shield,
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF5A2D]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5A2D]/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A2D]/10 text-[#FF5A2D] text-sm font-medium mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>OpenClaw CLI 中文文档</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight animate-fade-in-delay-1">
              OpenClaw <br />
              <span className="text-[#FF5A2D]">命令速查手册</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-xl animate-fade-in-delay-2">
              完整的 OpenClaw CLI 命令中文参考文档，包含所有命令、选项说明和实战教程。
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
              <Link 
                href="/commands"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A2D] text-white font-semibold rounded-xl hover:bg-[#FF7A3D] transition-all hover:scale-105"
              >
                <Terminal className="w-5 h-5" />
                浏览命令
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/tutorials"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10"
              >
                <BookOpen className="w-5 h-5" />
                实战教程
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF5A2D]">{commands.length}+</div>
              <div className="text-sm text-gray-500 mt-1">命令</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF5A2D]">{categories.length}</div>
              <div className="text-sm text-gray-500 mt-1">分类</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF5A2D]">{tutorials.length}</div>
              <div className="text-sm text-gray-500 mt-1">教程</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">快速访问</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 4).map((cat, i) => {
              const Icon = categoryIcons[cat.name] || Terminal
              const catCommands = commands.filter(c => c.category === cat.name)
              return (
                <Link
                  key={cat.name}
                  href={`/commands?category=${encodeURIComponent(cat.name)}`}
                  className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF5A2D]/30 hover:bg-[#FF5A2D]/5 transition-all animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF5A2D]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF5A2D]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#FF5A2D]" />
                  </div>
                  <h3 className="font-semibold mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{catCommands.length} 个命令</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Commands */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">常用命令</h2>
            <Link href="/commands" className="text-[#FF5A2D] hover:text-[#FF7A3D] flex items-center gap-1 text-sm font-medium">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredCommands.map((cmd, i) => (
              <Link
                key={cmd.name}
                href={`/command/${cmd.name}`}
                className="group p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-[#FF5A2D]/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <code className="font-mono text-[#FF5A2D] group-hover:text-[#FF7A3D] transition-colors">
                    {cmd.name}
                  </code>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#FF5A2D] transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-gray-400 mt-1">{cmd.descriptionZh}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">热门教程</h2>
            <Link href="/tutorials" className="text-[#FF5A2D] hover:text-[#FF7A3D] flex items-center gap-1 text-sm font-medium">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {featuredTutorials.map((tutorial, i) => (
              <Link
                key={tutorial.slug}
                href={`/tutorials/${tutorial.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF5A2D]/30 hover:bg-[#FF5A2D]/5 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 rounded-md bg-[#FF5A2D]/10 text-[#FF5A2D] text-xs font-medium">
                    {tutorial.category}
                  </span>
                  <Play className="w-5 h-5 text-gray-600 group-hover:text-[#FF5A2D] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#FF5A2D] transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-gray-400">{tutorial.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#FF5A2D]/20 to-[#FF7A3D]/5 border border-[#FF5A2D]/20 p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[#FF5A2D]/5" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                准备好开始了吗？
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                访问官方文档了解更多关于 OpenClaw 的信息，或直接在 GitHub 上 star 我们。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://docs.openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A2D] text-white font-semibold rounded-xl hover:bg-[#FF7A3D] transition-all hover:scale-105"
                >
                  官方文档
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10"
                >
                  <Play className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
