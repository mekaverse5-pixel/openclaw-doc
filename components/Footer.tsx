'use client'

import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦞</span>
              <span className="text-lg font-semibold">OpenClaw</span>
            </Link>
            <p className="text-gray-500 text-sm">
              开源 AI 助手框架，让 AI 成为你的个人数字员工。
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">资源</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  官方文档 ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm text-gray-500 hover:text-white transition-colors">
                  教程指南
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">社区</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/openclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Discord ↗
                </a>
              </li>
              <li>
                <a href="https://t.me/openclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Telegram ↗
                </a>
              </li>
              <li>
                <a href="https://x.com/openclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Twitter ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/commands" className="text-sm text-gray-500 hover:text-white transition-colors">
                  命令列表
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm text-gray-500 hover:text-white transition-colors">
                  实战教程
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2026 OpenClaw. 基于 MIT 许可证开源。
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
