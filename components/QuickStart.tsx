export function QuickStart() {
  return (
    <section className="bg-gradient-to-r from-lobster-accent/10 to-transparent rounded-xl p-6 border border-lobster-accent/20">
      <h2 className="text-xl font-bold mb-4">🚀 快速开始</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-white mb-2">1. 安装 OpenClaw</h3>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-green-400">curl -Ls https://docs.openclaw.ai/install.sh | sh</code>
          </pre>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">2. 初始化配置</h3>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-green-400">openclaw setup</code>
          </pre>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">3. 启动网关</h3>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-green-400">openclaw gateway start</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
