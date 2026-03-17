import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { SearchProvider } from '@/components/SearchProvider'

export const metadata: Metadata = {
  title: 'OpenClaw 命令速查',
  description: 'OpenClaw CLI 命令中文速查手册',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex">
        <SearchProvider>
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen">
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  )
}
