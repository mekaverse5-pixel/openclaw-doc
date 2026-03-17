'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function ExampleBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code className="text-green-400">{command}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 p-2 rounded bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
      </button>
    </div>
  )
}
