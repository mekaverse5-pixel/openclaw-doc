import { CommandList } from '@/components/CommandList'
import { QuickStart } from '@/components/QuickStart'
import { SearchBox } from '@/components/SearchBox'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-lobster-accent">🦞</span> OpenClaw 命令速查
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          OpenClaw CLI 命令中文速查手册 - 完整的命令参考和实战教程
        </p>
        <SearchBox />
      </header>

      <QuickStart />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">命令分类</h2>
        <CommandList />
      </section>
    </div>
  )
}
