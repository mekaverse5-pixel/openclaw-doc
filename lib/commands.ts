export interface Command {
  name: string
  description: string
  descriptionZh: string
  category: string
  options?: {
    name: string
    description: string
    descriptionZh: string
    required?: boolean
  }[]
  examples?: string[]
  subcommands?: Command[]
}

export const commands: Command[] = [
  // 入门命令
  {
    name: 'setup',
    description: 'Initialize ~/.openclaw/openclaw.json and the agent workspace',
    descriptionZh: '初始化配置文件 ~/.openclaw/openclaw.json 和 Agent 工作区，设置 OpenClaw 的基本配置（首次运行推荐使用 onboard 命令进行完整配置）',
    category: '入门',
    options: [
      { name: '--workspace <dir>', description: 'Agent workspace path (default: ~/.openclaw/workspace)', descriptionZh: 'Agent 工作区路径（默认：~/.openclaw/workspace）', required: false },
      { name: '--wizard', description: 'Run onboarding wizard', descriptionZh: '运行交互式入门向导', required: false },
      { name: '--non-interactive', description: 'Run without prompts', descriptionZh: '无交互模式运行（跳过所有提示）', required: false },
      { name: '--mode <local|remote>', description: 'Onboard mode: local or remote', descriptionZh: '入门模式：local（本地）或 remote（远程）', required: false },
      { name: '--remote-url <url>', description: 'Remote Gateway URL', descriptionZh: '远程网关 URL 地址', required: false },
      { name: '--remote-token <token>', description: 'Remote Gateway token', descriptionZh: '远程网关认证令牌', required: false },
    ],
    examples: [
      'openclaw setup',
      'openclaw setup --workspace ~/.openclaw/workspace',
      'openclaw setup --wizard',
      'openclaw setup --non-interactive --mode local',
      'openclaw setup --mode remote --remote-url ws://example.com:18789 --remote-token xxx',
    ],
  },
  {
    name: 'onboard',
    description: 'Interactive onboarding wizard',
    descriptionZh: '交互式入门向导，帮助配置网关、工作区和技能',
    category: '入门',
    options: [
      { name: '--workspace', description: 'Workspace directory', descriptionZh: '工作区目录', required: false },
      { name: '--reset', description: 'Reset before onboarding', descriptionZh: '重置后再入门', required: false },
      { name: '--non-interactive', description: 'Run without prompts', descriptionZh: '无交互模式运行', required: false },
      { name: '--mode', description: 'local or remote', descriptionZh: '本地或远程模式', required: false },
      { name: '--auth-choice', description: 'Auth provider choice', descriptionZh: '认证提供商选择', required: false },
    ],
    examples: ['openclaw onboard', 'openclaw onboard --non-interactive --mode local'],
  },
  {
    name: 'configure',
    description: 'Interactive configuration wizard',
    descriptionZh: '交互式配置向导，可配置模型、频道、技能和网关',
    category: '入门',
    examples: ['openclaw configure'],
  },
  {
    name: 'doctor',
    description: 'Health checks and quick fixes',
    descriptionZh: '健康检查和快速修复，检查配置、网关和频道状态',
    category: '维护',
    options: [
      { name: '--no-workspace-suggestions', description: 'Disable workspace hints', descriptionZh: '禁用工作区建议', required: false },
      { name: '--yes', description: 'Accept defaults', descriptionZh: '接受默认值', required: false },
      { name: '--non-interactive', description: 'Skip prompts', descriptionZh: '跳过提示', required: false },
      { name: '--deep', description: 'Scan system services', descriptionZh: '扫描系统服务', required: false },
    ],
    examples: ['openclaw doctor', 'openclaw doctor --fix', 'openclaw doctor --deep'],
  },

  // 配置命令
  {
    name: 'config',
    description: 'Non-interactive config helpers',
    descriptionZh: '非交互式配置助手，用于获取、设置、验证配置',
    category: '配置',
    subcommands: [
      { name: 'get', description: 'Print config value', descriptionZh: '打印配置值', category: '配置' },
      { name: 'set', description: 'Set config value', descriptionZh: '设置配置值', category: '配置' },
      { name: 'unset', description: 'Remove config value', descriptionZh: '删除配置值', category: '配置' },
      { name: 'validate', description: 'Validate config', descriptionZh: '验证配置', category: '配置' },
      { name: 'file', description: 'Print config file path', descriptionZh: '打印配置文件路径', category: '配置' },
    ],
    examples: ['openclaw config get agents.defaults.model.primary', 'openclaw config set agents.defaults.model.primary claude-sonnet-4-20250514'],
  },
  {
    name: 'secrets',
    description: 'Manage secrets and credentials',
    descriptionZh: '管理敏感凭证，如 API 密钥、令牌等',
    category: '配置',
    subcommands: [
      { name: 'reload', description: 'Reload secrets', descriptionZh: '重新加载凭证', category: '配置' },
      { name: 'audit', description: 'Audit secrets', descriptionZh: '审计凭证', category: '配置' },
      { name: 'configure', description: 'Configure secrets', descriptionZh: '配置凭证', category: '配置' },
    ],
    examples: ['openclaw secrets reload', 'openclaw secrets audit'],
  },
  {
    name: 'security',
    description: 'Security audit and fixes',
    descriptionZh: '安全审计，检查配置中的常见安全问题',
    category: '配置',
    subcommands: [
      { name: 'audit', description: 'Audit security', descriptionZh: '安全审计', category: '配置' },
    ],
    examples: ['openclaw security audit', 'openclaw security audit --deep --fix'],
  },

  // 状态命令
  {
    name: 'status',
    description: 'Show channel health and sessions',
    descriptionZh: '显示频道健康状态和最近的会话接收者',
    category: '状态',
    options: [
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '--all', description: 'Full diagnosis', descriptionZh: '完整诊断', required: false },
      { name: '--deep', description: 'Probe channels', descriptionZh: '探测频道', required: false },
      { name: '--usage', description: 'Show model usage', descriptionZh: '显示模型使用情况', required: false },
      { name: '--verbose', description: 'Verbose output', descriptionZh: '详细输出', required: false },
    ],
    examples: ['openclaw status', 'openclaw status --deep', 'openclaw status --usage'],
  },
  {
    name: 'health',
    description: 'Fetch gateway health',
    descriptionZh: '获取网关健康状态',
    category: '状态',
    options: [
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '--timeout', description: 'Timeout in ms', descriptionZh: '超时时间(毫秒)', required: false },
      { name: '--verbose', description: 'Verbose output', descriptionZh: '详细输出', required: false },
    ],
    examples: ['openclaw health', 'openclaw health --json'],
  },
  {
    name: 'sessions',
    description: 'List conversation sessions',
    descriptionZh: '列出已存储的对话会话',
    category: '状态',
    options: [
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '--verbose', description: 'Verbose output', descriptionZh: '详细输出', required: false },
      { name: '--active', description: 'Active in minutes', descriptionZh: '活跃时间(分钟)', required: false },
    ],
    examples: ['openclaw sessions', 'openclaw sessions --active 60'],
  },

  // 网关命令
  {
    name: 'gateway',
    description: 'Run and manage WebSocket Gateway',
    descriptionZh: '运行和管理 WebSocket 网关',
    category: '网关',
    subcommands: [
      { name: 'start', description: 'Start gateway', descriptionZh: '启动网关', category: '网关' },
      { name: 'stop', description: 'Stop gateway', descriptionZh: '停止网关', category: '网关' },
      { name: 'restart', description: 'Restart gateway', descriptionZh: '重启网关', category: '网关' },
      { name: 'status', description: 'Gateway status', descriptionZh: '网关状态', category: '网关' },
      { name: 'run', description: 'Run gateway', descriptionZh: '运行网关', category: '网关' },
      { name: 'install', description: 'Install gateway service', descriptionZh: '安装网关服务', category: '网关' },
      { name: 'uninstall', description: 'Uninstall gateway service', descriptionZh: '卸载网关服务', category: '网关' },
      { name: 'call', description: 'Call RPC method', descriptionZh: '调用 RPC 方法', category: '网关' },
      { name: 'health', description: 'Gateway health', descriptionZh: '网关健康', category: '网关' },
      { name: 'probe', description: 'Probe gateway', descriptionZh: '探测网关', category: '网关' },
      { name: 'discover', description: 'Discover gateways', descriptionZh: '发现网关', category: '网关' },
    ],
    options: [
      { name: '--port', description: 'Gateway port', descriptionZh: '网关端口', required: false },
      { name: '--bind', description: 'Bind address', descriptionZh: '绑定地址', required: false },
      { name: '--token', description: 'Auth token', descriptionZh: '认证令牌', required: false },
      { name: '--auth', description: 'Auth method', descriptionZh: '认证方式', required: false },
      { name: '--tailscale', description: 'Tailscale mode', descriptionZh: 'Tailscale 模式', required: false },
      { name: '--force', description: 'Force start', descriptionZh: '强制启动', required: false },
      { name: '--dev', description: 'Dev mode', descriptionZh: '开发模式', required: false },
    ],
    examples: ['openclaw gateway start', 'openclaw gateway stop', 'openclaw gateway restart', 'openclaw gateway status'],
  },

  // 频道命令
  {
    name: 'channels',
    description: 'Manage chat channels',
    descriptionZh: '管理聊天频道，包括 Telegram、Discord、WhatsApp 等',
    category: '频道',
    subcommands: [
      { name: 'list', description: 'List channels', descriptionZh: '列出频道', category: '频道' },
      { name: 'status', description: 'Channel status', descriptionZh: '频道状态', category: '频道' },
      { name: 'logs', description: 'Channel logs', descriptionZh: '频道日志', category: '频道' },
      { name: 'add', description: 'Add channel', descriptionZh: '添加频道', category: '频道' },
      { name: 'remove', description: 'Remove channel', descriptionZh: '删除频道', category: '频道' },
      { name: 'login', description: 'Channel login', descriptionZh: '频道登录', category: '频道' },
      { name: 'logout', description: 'Channel logout', descriptionZh: '频道登出', category: '频道' },
      { name: 'capabilities', description: 'Channel capabilities', descriptionZh: '频道功能', category: '频道' },
      { name: 'resolve', description: 'Resolve names to IDs', descriptionZh: '名称解析为 ID', category: '频道' },
    ],
    options: [
      { name: '--channel', description: 'Channel name', descriptionZh: '频道名称', required: false },
      { name: '--account', description: 'Account ID', descriptionZh: '账户 ID', required: false },
      { name: '--name', description: 'Display name', descriptionZh: '显示名称', required: false },
      { name: '--token', description: 'Bot token', descriptionZh: '机器人令牌', required: false },
    ],
    examples: [
      'openclaw channels list',
      'openclaw channels add --channel telegram --token $TELEGRAM_BOT_TOKEN',
      'openclaw channels status --probe',
      'openclaw channels logs --channel telegram',
    ],
  },

  // 消息命令
  {
    name: 'message',
    description: 'Send and manage messages',
    descriptionZh: '发送和管理消息，支持多种频道',
    category: '消息',
    subcommands: [
      { name: 'send', description: 'Send message', descriptionZh: '发送消息', category: '消息' },
      { name: 'poll', description: 'Poll for messages', descriptionZh: '轮询消息', category: '消息' },
      { name: 'react', description: 'Add reaction', descriptionZh: '添加反应', category: '消息' },
      { name: 'read', description: 'Read messages', descriptionZh: '读取消息', category: '消息' },
      { name: 'edit', description: 'Edit message', descriptionZh: '编辑消息', category: '消息' },
      { name: 'delete', description: 'Delete message', descriptionZh: '删除消息', category: '消息' },
      { name: 'search', description: 'Search messages', descriptionZh: '搜索消息', category: '消息' },
      { name: 'thread', description: 'Thread operations', descriptionZh: '话题操作', category: '消息' },
    ],
    options: [
      { name: '--channel', description: 'Channel name', descriptionZh: '频道名称', required: false },
      { name: '--target', description: 'Target identifier', descriptionZh: '目标标识符', required: false },
      { name: '--message', description: 'Message content', descriptionZh: '消息内容', required: false },
    ],
    examples: [
      'openclaw message send --target +15555550123 --message "Hi"',
      'openclaw message send --channel telegram --target @mychat --message "Hello"',
      'openclaw message poll --channel discord --target channel:123',
    ],
  },

  // Agent 命令
  {
    name: 'agent',
    description: 'Run one agent turn',
    descriptionZh: '通过网关运行一次 Agent 对话',
    category: 'Agent',
    options: [
      { name: '--message', description: 'Message content', descriptionZh: '消息内容', required: true },
      { name: '--to', description: 'Destination', descriptionZh: '目标', required: false },
      { name: '--session-id', description: 'Session ID', descriptionZh: '会话 ID', required: false },
      { name: '--thinking', description: 'Thinking level', descriptionZh: '思考级别', required: false },
      { name: '--channel', description: 'Channel name', descriptionZh: '频道名称', required: false },
      { name: '--local', description: 'Run locally', descriptionZh: '本地运行', required: false },
      { name: '--deliver', description: 'Deliver response', descriptionZh: '投递响应', required: false },
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '--timeout', description: 'Timeout seconds', descriptionZh: '超时秒数', required: false },
    ],
    examples: [
      'openclaw agent --message "Hello"',
      'openclaw agent --message "Run summary" --to +15555550123 --deliver',
    ],
  },
  {
    name: 'agents',
    description: 'Manage isolated agents',
    descriptionZh: '管理独立的 Agent，支持多工作区和认证隔离',
    category: 'Agent',
    subcommands: [
      { name: 'list', description: 'List agents', descriptionZh: '列出 Agent', category: 'Agent' },
      { name: 'add', description: 'Add agent', descriptionZh: '添加 Agent', category: 'Agent' },
      { name: 'delete', description: 'Delete agent', descriptionZh: '删除 Agent', category: 'Agent' },
      { name: 'bindings', description: 'List bindings', descriptionZh: '列出绑定', category: 'Agent' },
      { name: 'bind', description: 'Add binding', descriptionZh: '添加绑定', category: 'Agent' },
      { name: 'unbind', description: 'Remove binding', descriptionZh: '移除绑定', category: 'Agent' },
    ],
    options: [
      { name: '--workspace', description: 'Workspace directory', descriptionZh: '工作区目录', required: false },
      { name: '--model', description: 'Model ID', descriptionZh: '模型 ID', required: false },
      { name: '--bind', description: 'Channel binding', descriptionZh: '频道绑定', required: false },
      { name: '--agent', description: 'Agent ID', descriptionZh: 'Agent ID', required: false },
    ],
    examples: [
      'openclaw agents list',
      'openclaw agents add myagent --workspace ~/.openclaw/agents/myagent',
      'openclaw agents bind --agent myagent --bind telegram:alerts',
    ],
  },
  {
    name: 'acp',
    description: 'Agent Control Protocol bridge',
    descriptionZh: 'ACP 桥接器，连接 IDE 到网关',
    category: 'Agent',
    options: [
      { name: '--url', description: 'Gateway URL', descriptionZh: '网关 URL', required: false },
      { name: '--token', description: 'Auth token', descriptionZh: '认证令牌', required: false },
    ],
    examples: ['openclaw acp --url ws://127.0.0.1:18789 --token xxx'],
  },

  // 模型命令
  {
    name: 'models',
    description: 'Manage AI models',
    descriptionZh: '管理 AI 模型，配置认证和模型优先级',
    category: '模型',
    subcommands: [
      { name: 'list', description: 'List models', descriptionZh: '列出模型', category: '模型' },
      { name: 'status', description: 'Model status', descriptionZh: '模型状态', category: '模型' },
      { name: 'set', description: 'Set default model', descriptionZh: '设置默认模型', category: '模型' },
      { name: 'set-image', description: 'Set image model', descriptionZh: '设置图像模型', category: '模型' },
      { name: 'aliases', description: 'Manage aliases', descriptionZh: '管理别名', category: '模型' },
      { name: 'fallbacks', description: 'Manage fallbacks', descriptionZh: '管理备用模型', category: '模型' },
      { name: 'scan', description: 'Scan models', descriptionZh: '扫描模型', category: '模型' },
      { name: 'auth', description: 'Manage auth', descriptionZh: '管理认证', category: '模型' },
    ],
    options: [
      { name: '--all', description: 'Show all', descriptionZh: '显示全部', required: false },
      { name: '--local', description: 'Local only', descriptionZh: '仅本地', required: false },
      { name: '--provider', description: 'Provider name', descriptionZh: '提供商名称', required: false },
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '--probe', description: 'Live probe', descriptionZh: '实时探测', required: false },
    ],
    examples: [
      'openclaw models list',
      'openclaw models status',
      'openclaw models set claude-sonnet-4-20250514',
      'openclaw models auth add --provider openai',
    ],
  },

  // 记忆命令
  {
    name: 'memory',
    description: 'Search and reindex memory',
    descriptionZh: '搜索和重建记忆索引，管理长期记忆',
    category: '记忆',
    subcommands: [
      { name: 'status', description: 'Memory status', descriptionZh: '记忆状态', category: '记忆' },
      { name: 'index', description: 'Reindex memory', descriptionZh: '重建索引', category: '记忆' },
      { name: 'search', description: 'Search memory', descriptionZh: '搜索记忆', category: '记忆' },
    ],
    options: [
      { name: '--query', description: 'Search query', descriptionZh: '搜索查询', required: false },
    ],
    examples: [
      'openclaw memory status',
      'openclaw memory index',
      'openclaw memory search "what did I learn"',
    ],
  },

  // 技能命令
  {
    name: 'skills',
    description: 'List and inspect skills',
    descriptionZh: '列出和管理技能，检查技能准备状态',
    category: '技能',
    subcommands: [
      { name: 'list', description: 'List skills', descriptionZh: '列出技能', category: '技能' },
      { name: 'info', description: 'Skill info', descriptionZh: '技能详情', category: '技能' },
      { name: 'check', description: 'Check readiness', descriptionZh: '检查准备状态', category: '技能' },
    ],
    options: [
      { name: '--eligible', description: 'Show eligible only', descriptionZh: '仅显示可用的', required: false },
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '-v', description: 'Verbose', descriptionZh: '详细', required: false },
    ],
    examples: [
      'openclaw skills list',
      'openclaw skills info email',
      'openclaw skills check',
    ],
  },

  // 插件命令
  {
    name: 'plugins',
    description: 'Manage plugins and extensions',
    descriptionZh: '管理插件和扩展，安装、启用、禁用插件',
    category: '插件',
    subcommands: [
      { name: 'list', description: 'List plugins', descriptionZh: '列出插件', category: '插件' },
      { name: 'info', description: 'Plugin info', descriptionZh: '插件详情', category: '插件' },
      { name: 'install', description: 'Install plugin', descriptionZh: '安装插件', category: '插件' },
      { name: 'enable', description: 'Enable plugin', descriptionZh: '启用插件', category: '插件' },
      { name: 'disable', description: 'Disable plugin', descriptionZh: '禁用插件', category: '插件' },
      { name: 'doctor', description: 'Plugin doctor', descriptionZh: '插件医生', category: '插件' },
    ],
    options: [
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
    ],
    examples: [
      'openclaw plugins list',
      'openclaw plugins install memory-openviking',
      'openclaw plugins enable memory-openviking',
    ],
  },

  // 浏览器自动化
  {
    name: 'browser',
    description: 'Manage browser automation',
    descriptionZh: '管理浏览器自动化，控制 Chrome/Chromium 浏览器',
    category: '自动化',
    subcommands: [
      { name: 'start', description: 'Start browser', descriptionZh: '启动浏览器', category: '自动化' },
      { name: 'stop', description: 'Stop browser', descriptionZh: '停止浏览器', category: '自动化' },
      { name: 'status', description: 'Browser status', descriptionZh: '浏览器状态', category: '自动化' },
      { name: 'screenshot', description: 'Take screenshot', descriptionZh: '截图', category: '自动化' },
      { name: 'navigate', description: 'Navigate to URL', descriptionZh: '导航到 URL', category: '自动化' },
      { name: 'click', description: 'Click element', descriptionZh: '点击元素', category: '自动化' },
      { name: 'type', description: 'Type text', descriptionZh: '输入文本', category: '自动化' },
      { name: 'press', description: 'Press key', descriptionZh: '按键', category: '自动化' },
      { name: 'tabs', description: 'Manage tabs', descriptionZh: '管理标签页', category: '自动化' },
      { name: 'profiles', description: 'Manage profiles', descriptionZh: '管理配置文件', category: '自动化' },
      { name: 'reset-profile', description: 'Reset profile', descriptionZh: '重置配置', category: '自动化' },
    ],
    options: [
      { name: '--browser-profile', description: 'Profile name', descriptionZh: '配置文件名', required: false },
      { name: '--target-id', description: 'Target ID', descriptionZh: '目标 ID', required: false },
    ],
    examples: [
      'openclaw browser start',
      'openclaw browser open https://example.com',
      'openclaw browser screenshot',
    ],
  },

  // 定时任务
  {
    name: 'cron',
    description: 'Manage scheduled jobs',
    descriptionZh: '管理定时任务，设置周期性执行的任务',
    category: '自动化',
    subcommands: [
      { name: 'status', description: 'Cron status', descriptionZh: '任务状态', category: '自动化' },
      { name: 'list', description: 'List jobs', descriptionZh: '列出任务', category: '自动化' },
      { name: 'add', description: 'Add job', descriptionZh: '添加任务', category: '自动化' },
      { name: 'edit', description: 'Edit job', descriptionZh: '编辑任务', category: '自动化' },
      { name: 'rm', description: 'Remove job', descriptionZh: '删除任务', category: '自动化' },
      { name: 'enable', description: 'Enable job', descriptionZh: '启用任务', category: '自动化' },
      { name: 'disable', description: 'Disable job', descriptionZh: '禁用任务', category: '自动化' },
      { name: 'runs', description: 'List runs', descriptionZh: '列出运行记录', category: '自动化' },
      { name: 'run', description: 'Run job now', descriptionZh: '立即运行任务', category: '自动化' },
    ],
    options: [
      { name: '--name', description: 'Job name', descriptionZh: '任务名称', required: false },
      { name: '--at', description: 'Cron expression', descriptionZh: 'Cron 表达式', required: false },
      { name: '--every', description: 'Every interval', descriptionZh: '间隔时间', required: false },
      { name: '--message', description: 'Message content', descriptionZh: '消息内容', required: false },
      { name: '--system-event', description: 'System event', descriptionZh: '系统事件', required: false },
    ],
    examples: [
      'openclaw cron list',
      'openclaw cron add --name daily-briefing --message "请提供今日简报" --at "0 9 * * *"',
      'openclaw cron enable myjob',
    ],
  },

  // 节点管理
  {
    name: 'nodes',
    description: 'Manage paired nodes',
    descriptionZh: '管理已配对的节点，远程控制其他设备',
    category: '高级',
    subcommands: [
      { name: 'status', description: 'Node status', descriptionZh: '节点状态', category: '高级' },
      { name: 'list', description: 'List nodes', descriptionZh: '列出节点', category: '高级' },
      { name: 'describe', description: 'Describe node', descriptionZh: '节点描述', category: '高级' },
      { name: 'pending', description: 'Pending requests', descriptionZh: '待处理请求', category: '高级' },
      { name: 'approve', description: 'Approve node', descriptionZh: '批准节点', category: '高级' },
      { name: 'reject', description: 'Reject node', descriptionZh: '拒绝节点', category: '高级' },
      { name: 'invoke', description: 'Invoke command', descriptionZh: '调用命令', category: '高级' },
      { name: 'run', description: 'Run command', descriptionZh: '运行命令', category: '高级' },
      { name: 'notify', description: 'Send notification', descriptionZh: '发送通知', category: '高级' },
      { name: 'camera', description: 'Camera operations', descriptionZh: '相机操作', category: '高级' },
      { name: 'canvas', description: 'Canvas operations', descriptionZh: '画布操作', category: '高级' },
      { name: 'location', description: 'Location operations', descriptionZh: '位置操作', category: '高级' },
      { name: 'screen', description: 'Screen operations', descriptionZh: '屏幕操作', category: '高级' },
    ],
    options: [
      { name: '--node', description: 'Node ID', descriptionZh: '节点 ID', required: false },
      { name: '--connected', description: 'Show connected', descriptionZh: '显示已连接', required: false },
    ],
    examples: [
      'openclaw nodes list',
      'openclaw nodes status --connected',
      'openclaw nodes run --node mynode "ls -la"',
    ],
  },
  {
    name: 'node',
    description: 'Run or manage node host',
    descriptionZh: '运行或管理节点主机服务',
    category: '高级',
    subcommands: [
      { name: 'run', description: 'Run node', descriptionZh: '运行节点', category: '高级' },
      { name: 'status', description: 'Node status', descriptionZh: '节点状态', category: '高级' },
      { name: 'install', description: 'Install node', descriptionZh: '安装节点', category: '高级' },
      { name: 'uninstall', description: 'Uninstall node', descriptionZh: '卸载节点', category: '高级' },
      { name: 'start', description: 'Start node', descriptionZh: '启动节点', category: '高级' },
      { name: 'stop', description: 'Stop node', descriptionZh: '停止节点', category: '高级' },
      { name: 'restart', description: 'Restart node', descriptionZh: '重启节点', category: '高级' },
    ],
    options: [
      { name: '--host', description: 'Gateway host', descriptionZh: '网关主机', required: false },
      { name: '--port', description: 'Gateway port', descriptionZh: '网关端口', required: false },
      { name: '--runtime', description: 'Runtime (node/bun)', descriptionZh: '运行时', required: false },
    ],
    examples: [
      'openclaw node run --host 127.0.0.1 --port 18789',
      'openclaw node status',
    ],
  },
  {
    name: 'devices',
    description: 'Manage device pairing',
    descriptionZh: '管理设备配对和令牌',
    category: '高级',
    subcommands: [
      { name: 'list', description: 'List devices', descriptionZh: '列出设备', category: '高级' },
      { name: 'approve', description: 'Approve device', descriptionZh: '批准设备', category: '高级' },
      { name: 'reject', description: 'Reject device', descriptionZh: '拒绝设备', category: '高级' },
      { name: 'remove', description: 'Remove device', descriptionZh: '移除设备', category: '高级' },
      { name: 'clear', description: 'Clear devices', descriptionZh: '清除设备', category: '高级' },
      { name: 'rotate', description: 'Rotate token', descriptionZh: '轮换令牌', category: '高级' },
      { name: 'revoke', description: 'Revoke access', descriptionZh: '撤销访问', category: '高级' },
    ],
    examples: ['openclaw devices list', 'openclaw devices approve request123'],
  },

  // 钩子命令
  {
    name: 'hooks',
    description: 'Manage internal hooks',
    descriptionZh: '管理内部钩子，用于扩展 Agent 行为',
    category: '高级',
    subcommands: [
      { name: 'list', description: 'List hooks', descriptionZh: '列出钩子', category: '高级' },
      { name: 'info', description: 'Hook info', descriptionZh: '钩子详情', category: '高级' },
      { name: 'check', description: 'Check hooks', descriptionZh: '检查钩子', category: '高级' },
      { name: 'enable', description: 'Enable hook', descriptionZh: '启用钩子', category: '高级' },
      { name: 'disable', description: 'Disable hook', descriptionZh: '禁用钩子', category: '高级' },
      { name: 'install', description: 'Install hook', descriptionZh: '安装钩子', category: '高级' },
      { name: 'update', description: 'Update hook', descriptionZh: '更新钩子', category: '高级' },
    ],
    examples: ['openclaw hooks list', 'openclaw hooks info session-memory'],
  },

  // Webhook 命令
  {
    name: 'webhooks',
    description: 'Manage webhooks',
    descriptionZh: '管理 Webhook 集成',
    category: '高级',
    subcommands: [
      { name: 'gmail', description: 'Gmail webhook', descriptionZh: 'Gmail Webhook', category: '高级' },
    ],
    examples: ['openclaw webhooks gmail setup --account user@gmail.com'],
  },

  // 配对命令
  {
    name: 'pairing',
    description: 'Manage DM pairing requests',
    descriptionZh: '管理跨频道的 DM 配对请求',
    category: '高级',
    subcommands: [
      { name: 'list', description: 'List requests', descriptionZh: '列出请求', category: '高级' },
      { name: 'approve', description: 'Approve request', descriptionZh: '批准请求', category: '高级' },
    ],
    examples: ['openclaw pairing list', 'openclaw pairing approve telegram ABC123'],
  },

  // 系统命令
  {
    name: 'system',
    description: 'System events and presence',
    descriptionZh: '系统事件和在线状态管理',
    category: '状态',
    subcommands: [
      { name: 'event', description: 'Enqueue event', descriptionZh: '队列事件', category: '状态' },
      { name: 'heartbeat', description: 'Heartbeat control', descriptionZh: '心跳控制', category: '状态' },
      { name: 'presence', description: 'Presence list', descriptionZh: '在线列表', category: '状态' },
    ],
    examples: [
      'openclaw system event --text "Hello"',
      'openclaw system heartbeat enable',
    ],
  },

  // 日志命令
  {
    name: 'logs',
    description: 'Tail gateway logs',
    descriptionZh: '查看网关日志，实时追踪日志输出',
    category: '调试',
    options: [
      { name: '--follow', description: 'Follow logs', descriptionZh: '跟踪日志', required: false },
      { name: '--limit', description: 'Line limit', descriptionZh: '行数限制', required: false },
      { name: '--json', description: 'JSON output', descriptionZh: 'JSON 输出', required: false },
      { name: '--plain', description: 'Plain output', descriptionZh: '纯文本输出', required: false },
    ],
    examples: ['openclaw logs --follow', 'openclaw logs --limit 200 --json'],
  },

  // DNS 命令
  {
    name: 'dns',
    description: 'DNS helpers for discovery',
    descriptionZh: 'DNS 辅助工具，用于广域网发现（Tailscale + CoreDNS）',
    category: '网络',
    subcommands: [
      { name: 'setup', description: 'Setup DNS', descriptionZh: '设置 DNS', category: '网络' },
    ],
    options: [
      { name: '--apply', description: 'Apply config', descriptionZh: '应用配置', required: false },
    ],
    examples: ['openclaw dns setup --apply'],
  },

  // 沙盒命令
  {
    name: 'sandbox',
    description: 'Manage sandbox environments',
    descriptionZh: '管理沙盒环境',
    category: '开发',
    subcommands: [
      { name: 'list', description: 'List sandboxes', descriptionZh: '列出沙盒', category: '开发' },
      { name: 'recreate', description: 'Recreate sandbox', descriptionZh: '重建沙盒', category: '开发' },
      { name: 'explain', description: 'Explain sandbox', descriptionZh: '解释沙盒', category: '开发' },
    ],
    examples: ['openclaw sandbox list', 'openclaw sandbox recreate mybox'],
  },

  // 备份命令
  {
    name: 'backup',
    description: 'Create and verify backups',
    descriptionZh: '创建和验证本地备份',
    category: '维护',
    subcommands: [
      { name: 'create', description: 'Create backup', descriptionZh: '创建备份', category: '维护' },
      { name: 'verify', description: 'Verify backup', descriptionZh: '验证备份', category: '维护' },
    ],
    examples: ['openclaw backup create', 'openclaw backup verify backup.tar.gz'],
  },

  // 更新命令
  {
    name: 'update',
    description: 'Update OpenClaw',
    descriptionZh: '更新 OpenClaw 到最新版本',
    category: '维护',
    options: [
      { name: '--channel', description: 'Update channel', descriptionZh: '更新渠道', required: false },
    ],
    examples: ['openclaw update', 'openclaw update --channel stable'],
  },

  // 重置命令
  {
    name: 'reset',
    description: 'Reset local config/state',
    descriptionZh: '重置本地配置或状态',
    category: '维护',
    options: [
      { name: '--scope', description: 'Reset scope', descriptionZh: '重置范围', required: false },
      { name: '--yes', description: 'Confirm', descriptionZh: '确认', required: false },
      { name: '--non-interactive', description: 'Skip prompts', descriptionZh: '跳过提示', required: false },
    ],
    examples: ['openclaw reset --scope config', 'openclaw reset --scope full --yes'],
  },

  // 卸载命令
  {
    name: 'uninstall',
    description: 'Uninstall gateway and data',
    descriptionZh: '卸载网关服务和本地数据',
    category: '维护',
    options: [
      { name: '--service', description: 'Uninstall service', descriptionZh: '卸载服务', required: false },
      { name: '--state', description: 'Uninstall state', descriptionZh: '卸载状态', required: false },
      { name: '--workspace', description: 'Uninstall workspace', descriptionZh: '卸载工作区', required: false },
      { name: '--all', description: 'Uninstall all', descriptionZh: '全部卸载', required: false },
      { name: '--yes', description: 'Confirm', descriptionZh: '确认', required: false },
    ],
    examples: ['openclaw uninstall --all --yes'],
  },

  // TUI 命令
  {
    name: 'tui',
    description: 'Open terminal UI',
    descriptionZh: '打开终端 UI，交互式对话界面',
    category: '工具',
    options: [
      { name: '--url', description: 'Gateway URL', descriptionZh: '网关 URL', required: false },
      { name: '--token', description: 'Auth token', descriptionZh: '认证令牌', required: false },
      { name: '--message', description: 'Initial message', descriptionZh: '初始消息', required: false },
      { name: '--session', description: 'Session key', descriptionZh: '会话密钥', required: false },
      { name: '--deliver', description: 'Deliver response', descriptionZh: '投递响应', required: false },
    ],
    examples: ['openclaw tui', 'openclaw tui --message "Hello"'],
  },

  // Dashboard 命令
  {
    name: 'dashboard',
    description: 'Open Control UI',
    descriptionZh: '打开网页控制面板',
    category: '工具',
    examples: ['openclaw dashboard'],
  },

  // Docs 命令
  {
    name: 'docs',
    description: 'Search documentation',
    descriptionZh: '搜索在线文档',
    category: '工具',
    examples: ['openclaw docs memory', 'openclaw docs channels telegram'],
  },

  // QR 命令
  {
    name: 'qr',
    description: 'Generate pairing QR code',
    descriptionZh: '生成配对二维码，用于 iOS 设备配对',
    category: '工具',
    examples: ['openclaw qr'],
  },

  // 目录命令
  {
    name: 'directory',
    description: 'Lookup contact and group IDs',
    descriptionZh: '查询联系人和群组 ID',
    category: '工具',
    examples: ['openclaw directory --channel telegram @username'],
  },

  // Approvals 命令
  {
    name: 'approvals',
    description: 'Manage exec approvals',
    descriptionZh: '管理执行审批',
    category: '安全',
    subcommands: [
      { name: 'get', description: 'Get approval', descriptionZh: '获取审批', category: '安全' },
      { name: 'set', description: 'Set approval', descriptionZh: '设置审批', category: '安全' },
      { name: 'allowlist', description: 'Manage allowlist', descriptionZh: '管理白名单', category: '安全' },
    ],
    examples: [
      'openclaw approvals get',
      'openclaw approvals allowlist add 551311157',
    ],
  },

  // Completion 命令
  {
    name: 'completion',
    description: 'Generate shell completion',
    descriptionZh: '生成 Shell 补全脚本',
    category: '工具',
    examples: ['openclaw completion bash', 'openclaw completion zsh'],
  },

  // Clawbot 命令 (legacy)
  {
    name: 'clawbot',
    description: 'Legacy clawbot aliases',
    descriptionZh: '传统 clawbot 命令别名',
    category: '工具',
    examples: ['openclaw clawbot qr'],
  },

  // Daemon 命令 (legacy)
  {
    name: 'daemon',
    description: 'Gateway service (legacy alias)',
    descriptionZh: '网关服务（旧别名）',
    category: '网关',
    examples: ['openclaw daemon status'],
  },
]

export const categories = [
  { name: '入门', color: 'text-green-400' },
  { name: '配置', color: 'text-blue-400' },
  { name: '状态', color: 'text-purple-400' },
  { name: '网关', color: 'text-orange-400' },
  { name: '频道', color: 'text-cyan-400' },
  { name: '消息', color: 'text-pink-400' },
  { name: 'Agent', color: 'text-yellow-400' },
  { name: '模型', color: 'text-indigo-400' },
  { name: '记忆', color: 'text-teal-400' },
  { name: '技能', color: 'text-lime-400' },
  { name: '插件', color: 'text-rose-400' },
  { name: '自动化', color: 'text-amber-400' },
  { name: '高级', color: 'text-violet-400' },
  { name: '调试', color: 'text-slate-400' },
  { name: '网络', color: 'text-sky-400' },
  { name: '开发', color: 'text-emerald-400' },
  { name: '维护', color: 'text-red-400' },
  { name: '工具', color: 'text-gray-400' },
  { name: '安全', color: 'text-red-300' },
]
