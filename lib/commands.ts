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
    description: 'Initialize ~/.openclaw/openclaw.json configuration file and agent workspace. Creates essential config and directory structure. For full setup with guided wizard, use onboard command instead.',
    descriptionZh: '初始化 ~/.openclaw/openclaw.json 配置文件和 Agent 工作区。创建必要的配置和目录结构。如需完整引导式设置，请使用 onboard 命令。',
    category: '入门',
    options: [
      { name: '--workspace <dir>', description: 'Agent workspace path where config, skills, and agent files are stored (default: ~/.openclaw/workspace)', descriptionZh: 'Agent 工作区路径，用于存储配置、技能和 Agent 文件（默认：~/.openclaw/workspace）', required: false },
      { name: '--wizard', description: 'Run interactive onboarding wizard after setup for guided configuration', descriptionZh: '设置后运行交互式入门向导进行引导配置', required: false },
      { name: '--non-interactive', description: 'Run in non-interactive mode without prompting for any input', descriptionZh: '非交互模式运行，无需任何用户输入', required: false },
      { name: '--mode <local|remote>', description: 'Onboarding mode: local runs gateway on this machine, remote connects to existing gateway', descriptionZh: '入门模式：local 在本机运行网关，remote 连接到已有网关', required: false },
      { name: '--remote-url <url>', description: 'Remote Gateway WebSocket URL for remote mode (e.g., ws://example.com:18789)', descriptionZh: '远程模式下的网关 WebSocket URL（例如：ws://example.com:18789）', required: false },
      { name: '--remote-token <token>', description: 'Authentication token for connecting to remote gateway', descriptionZh: '连接远程网关的认证令牌', required: false },
    ],
    examples: [
      'openclaw setup - 初始化基本配置',
      'openclaw setup --workspace ~/.openclaw/workspace - 指定工作区路径',
      'openclaw setup --wizard - 初始化后运行入门向导',
      'openclaw setup --non-interactive --mode local - 非交互模式本地运行',
      'openclaw setup --mode remote --remote-url ws://example.com:18789 --remote-token xxx - 连接到远程网关',
    ],
  },
  {
    name: 'onboard',
    description: 'Interactive onboarding wizard - guides users through gateway setup, workspace initialization, channel configuration, and skill installation. Recommended for first-time users.',
    descriptionZh: '交互式入门向导，引导用户完成网关配置、工作区初始化、频道连接和技能安装。首次使用推荐运行此命令。',
    category: '入门',
    options: [
      { name: '--workspace <dir>', description: 'Workspace directory path for agent configuration and files (default: ~/.openclaw/workspace)', descriptionZh: '工作区目录路径，用于存储 Agent 配置和文件（默认：~/.openclaw/workspace）', required: false },
      { name: '--reset', description: 'Reset existing configuration before starting onboarding - clears previous settings and starts fresh', descriptionZh: '在开始入门前重置现有配置 - 清除之前的设置并重新开始', required: false },
      { name: '--non-interactive', description: 'Run in non-interactive mode - uses default values or provided flags without prompting for input', descriptionZh: '非交互模式运行 - 使用默认值或提供的标志，无需用户输入', required: false },
      { name: '--mode <local|remote>', description: 'Onboarding mode: local runs gateway on this machine, remote connects to an existing gateway elsewhere', descriptionZh: '入门模式：local 在本机运行网关，remote 连接到其他位置已有的网关', required: false },
      { name: '--auth-choice <provider>', description: 'Authentication provider choice: openai, anthropic, google, azure, or other supported model providers', descriptionZh: '认证提供商选择：openai、anthropic、google、azure 或其他支持的模型提供商', required: false },
      { name: '--install-daemon', description: 'Install gateway as a system service (launchd on macOS, systemd on Linux) to keep it running in background', descriptionZh: '将网关安装为系统服务（在 macOS 上为 launchd，在 Linux 上为 systemd）使其在后台持续运行', required: false },
    ],
    examples: [
      'openclaw onboard - 交互式入门向导（推荐首次使用）',
      'openclaw onboard --workspace ~/.openclaw/workspace - 指定工作区目录',
      'openclaw onboard --reset - 重置配置后重新入门',
      'openclaw onboard --non-interactive --mode local - 非交互模式本地运行',
      'openclaw onboard --mode remote --remote-url ws://example.com:18789 - 连接到远程网关',
      'openclaw onboard --install-daemon - 入门并安装后台服务',
    ],
  },
  {
    name: 'configure',
    description: 'Interactive configuration wizard - configure models, channels, skills, and gateway settings through a guided menu. Allows detailed customization after initial setup.',
    descriptionZh: '交互式配置向导，通过引导菜单配置模型、频道、技能和网关设置。允许在初始设置后进行详细自定义。',
    category: '入门',
    options: [
      { name: '--model', description: 'Configure AI model settings and authentication', descriptionZh: '配置 AI 模型设置和认证', required: false },
      { name: '--channel', description: 'Configure messaging channels (Telegram, Discord, WhatsApp, etc.)', descriptionZh: '配置消息频道（Telegram、Discord、WhatsApp 等）', required: false },
      { name: '--skill', description: 'Configure and manage skills', descriptionZh: '配置和管理技能', required: false },
      { name: '--gateway', description: 'Configure gateway settings (port, auth, Tailscale, etc.)', descriptionZh: '配置网关设置（端口、认证、Tailscale 等）', required: false },
      { name: '--agent', description: 'Configure agent defaults and behavior', descriptionZh: '配置 Agent 默认值和行为', required: false },
    ],
    examples: [
      'openclaw configure - 打开交互式配置菜单',
      'openclaw configure --model - 配置 AI 模型',
      'openclaw configure --channel - 配置消息频道',
      'openclaw configure --skill - 管理技能',
      'openclaw configure --gateway - 配置网关设置',
    ],
  },
  {
    name: 'doctor',
    description: 'Health checks and quick fixes - diagnose configuration issues, verify gateway connectivity, check channel status, and automatically fix common problems. Run this when experiencing issues.',
    descriptionZh: '健康检查和快速修复 - 诊断配置问题、验证网关连接、检查频道状态，并自动修复常见问题。遇到问题时运行此命令。',
    category: '维护',
    options: [
      { name: '--fix', description: 'Automatically fix detected issues where possible', descriptionZh: '自动修复检测到的问题（如果可能）', required: false },
      { name: '--no-workspace-suggestions', description: 'Disable workspace-related hints and suggestions', descriptionZh: '禁用工作区相关的提示和建议', required: false },
      { name: '--yes', description: 'Accept all default suggestions without prompting', descriptionZh: '接受所有默认建议，无需确认', required: false },
      { name: '--non-interactive', description: 'Run in non-interactive mode, skip all prompts', descriptionZh: '非交互模式运行，跳过所有提示', required: false },
      { name: '--deep', description: 'Perform deep scan including system services and dependencies', descriptionZh: '执行深度扫描，包括系统服务和依赖项', required: false },
    ],
    examples: [
      'openclaw doctor - 运行健康检查',
      'openclaw doctor --fix - 检查并自动修复问题',
      'openclaw doctor --deep - 深度扫描系统服务',
      'openclaw doctor --yes --fix - 自动修复所有问题',
    ],
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
    description: 'Show channel health status and recent session receivers - displays the current state of all configured channels, gateway health, and active conversations. Essential for troubleshooting.',
    descriptionZh: '显示频道健康状态和最近的会话接收者 - 展示所有已配置频道的当前状态、网关健康状况和活跃对话。故障排除的必备命令。',
    category: '状态',
    options: [
      { name: '--json', description: 'Output status in JSON format for scripting and programmatic parsing', descriptionZh: '以 JSON 格式输出状态，便于脚本处理和程序解析', required: false },
      { name: '--all', description: 'Show full diagnosis including all channel details and connection metrics', descriptionZh: '显示完整诊断信息，包括所有频道详情和连接指标', required: false },
      { name: '--deep', description: 'Probe all channels actively to check real-time connectivity and response', descriptionZh: '主动探测所有频道，检查实时连接性和响应状态', required: false },
      { name: '--usage', description: 'Show model usage statistics including token count and cost estimates', descriptionZh: '显示模型使用统计数据，包括 Token 数量和费用估算', required: false },
      { name: '--verbose', description: 'Show detailed output including debug information and connection logs', descriptionZh: '显示详细输出，包括调试信息和连接日志', required: false },
    ],
    examples: [
      'openclaw status - 查看基本状态',
      'openclaw status --json - JSON 格式输出',
      'openclaw status --deep - 深度探测所有频道',
      'openclaw status --usage - 显示模型使用情况',
      'openclaw status --all - 显示完整诊断信息',
      'openclaw status --verbose - 详细输出模式',
    ],
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
    description: 'Run and manage WebSocket Gateway - the central control plane that connects channels, agents, and tools. Handles message routing, session management, and exposes WebSocket API.',
    descriptionZh: '运行和管理 WebSocket 网关 - 连接频道、Agent 和工具的中心控制平面。处理消息路由、会话管理，并暴露 WebSocket API。',
    category: '网关',
    subcommands: [
      { name: 'start', description: 'Start gateway as a background service', descriptionZh: '作为后台服务启动网关', category: '网关' },
      { name: 'stop', description: 'Stop running gateway service', descriptionZh: '停止运行中的网关服务', category: '网关' },
      { name: 'restart', description: 'Restart gateway service', descriptionZh: '重启网关服务', category: '网关' },
      { name: 'status', description: 'Show gateway running status and connection info', descriptionZh: '显示网关运行状态和连接信息', category: '网关' },
      { name: 'run', description: 'Run gateway in foreground (useful for debugging)', descriptionZh: '在前台运行网关（用于调试）', category: '网关' },
      { name: 'install', description: 'Install gateway as system service (launchd/systemd)', descriptionZh: '将网关安装为系统服务（launchd/systemd）', category: '网关' },
      { name: 'uninstall', description: 'Remove gateway service from system', descriptionZh: '从系统移除网关服务', category: '网关' },
      { name: 'call', description: 'Call gateway RPC method directly', descriptionZh: '直接调用网关 RPC 方法', category: '网关' },
      { name: 'health', description: 'Check gateway health status', descriptionZh: '检查网关健康状态', category: '网关' },
      { name: 'probe', description: 'Probe gateway WebSocket connectivity', descriptionZh: '探测网关 WebSocket 连接', category: '网关' },
      { name: 'discover', description: 'Discover available gateways on network', descriptionZh: '在网络上发现可用的网关', category: '网关' },
    ],
    options: [
      { name: '--port <port>', description: 'Gateway WebSocket port number (default: 18789)', descriptionZh: '网关 WebSocket 端口号（默认：18789）', required: false },
      { name: '--bind <address>', description: 'Bind address for gateway (default: loopback)', descriptionZh: '网关绑定地址（默认：loopback）', required: false },
      { name: '--token <token>', description: 'Authentication token for gateway access', descriptionZh: '网关访问认证令牌', required: false },
      { name: '--auth <method>', description: 'Authentication method: none, password, or token', descriptionZh: '认证方式：none、password 或 token', required: false },
      { name: '--tailscale', description: 'Enable Tailscale Serve/Funnel for remote access', descriptionZh: '启用 Tailscale Serve/Funnel 用于远程访问', required: false },
      { name: '--force', description: 'Force start gateway even if already running', descriptionZh: '即使已运行也强制启动网关', required: false },
      { name: '--dev', description: 'Run in development mode with extra logging', descriptionZh: '以开发模式运行，增加日志输出', required: false },
    ],
    examples: [
      'openclaw gateway start - 启动网关服务',
      'openclaw gateway stop - 停止网关',
      'openclaw gateway restart - 重启网关',
      'openclaw gateway status - 查看网关状态',
      'openclaw gateway run - 前台运行网关',
      'openclaw gateway install - 安装网关服务',
      'openclaw gateway run --port 18789 --dev - 开发模式运行',
    ],
  },

  // 频道命令
  {
    name: 'channels',
    description: 'Manage chat channels - configure and manage messaging platforms like Telegram, Discord, WhatsApp, Slack, Signal, and many others. Essential for receiving and sending messages.',
    descriptionZh: '管理聊天频道 - 配置和管理消息平台，如 Telegram、Discord、WhatsApp、Slack、Signal 等。用于接收和发送消息的必备命令。',
    category: '频道',
    subcommands: [
      { name: 'list', description: 'List all configured channels and their status', descriptionZh: '列出所有已配置的频道及其状态', category: '频道' },
      { name: 'status', description: 'Show detailed status of specific channel', descriptionZh: '显示特定频道的详细状态', category: '频道' },
      { name: 'logs', description: 'View recent logs for a specific channel', descriptionZh: '查看特定频道的最近日志', category: '频道' },
      { name: 'add', description: 'Add a new channel configuration', descriptionZh: '添加新频道配置', category: '频道' },
      { name: 'remove', description: 'Remove a channel configuration', descriptionZh: '移除频道配置', category: '频道' },
      { name: 'login', description: 'Authenticate/authorize a channel (e.g., WhatsApp QR code)', descriptionZh: '验证/授权频道（例如：WhatsApp 二维码）', category: '频道' },
      { name: 'logout', description: 'Logout from a channel and clear credentials', descriptionZh: '登出频道并清除凭证', category: '频道' },
      { name: 'capabilities', description: 'Show capabilities of a channel type', descriptionZh: '显示频道类型的功能', category: '频道' },
      { name: 'resolve', description: 'Resolve usernames to channel-specific IDs', descriptionZh: '将用户名解析为频道特定的 ID', category: '频道' },
    ],
    options: [
      { name: '--channel <name>', description: 'Channel name/type (telegram, discord, whatsapp, etc.)', descriptionZh: '频道名称/类型（telegram、discord、whatsapp 等）', required: false },
      { name: '--account <id>', description: 'Account ID for multi-account channels', descriptionZh: '多账户频道的账户 ID', required: false },
      { name: '--name <display>', description: 'Display name for the channel', descriptionZh: '频道的显示名称', required: false },
      { name: '--token <token>', description: 'Bot token or API token for authentication', descriptionZh: '机器人令牌或 API 令牌用于认证', required: false },
      { name: '--probe', description: 'Actively probe channel connection status', descriptionZh: '主动探测频道连接状态', required: false },
    ],
    examples: [
      'openclaw channels list - 列出所有频道',
      'openclaw channels add --channel telegram --token $TELEGRAM_BOT_TOKEN - 添加 Telegram 频道',
      'openclaw channels status --channel discord - 查看 Discord 频道状态',
      'openclaw channels logs --channel telegram - 查看 Telegram 日志',
      'openclaw channels login --channel whatsapp - WhatsApp 登录',
      'openclaw channels resolve --channel telegram @username - 解析用户名',
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
    description: 'Run a single agent turn through the gateway - send a message to the AI and receive a response. The primary way to interact with the assistant via CLI.',
    descriptionZh: '通过网关运行单次 Agent 对话 - 发送消息给 AI 并接收响应。通过 CLI 与助手交互的主要方式。',
    category: 'Agent',
    options: [
      { name: '--message <text>', description: 'Message content to send to the agent (required)', descriptionZh: '发送给 Agent 的消息内容（必填）', required: true },
      { name: '--to <target>', description: 'Destination identifier (phone number, chat ID, etc.) for response delivery', descriptionZh: '响应投递目标标识符（电话号码、聊天 ID 等）', required: false },
      { name: '--session-id <id>', description: 'Existing session ID to continue conversation', descriptionZh: '用于继续对话的现有会话 ID', required: false },
      { name: '--thinking <level>', description: 'Thinking level: off, minimal, low, medium, high, xhigh (affects reasoning depth)', descriptionZh: '思考级别：off、minimal、low、medium、high、xhigh（影响推理深度）', required: false },
      { name: '--channel <name>', description: 'Channel to deliver response to (telegram, discord, whatsapp, etc.)', descriptionZh: '投递响应的频道（telegram、discord、whatsapp 等）', required: false },
      { name: '--local', description: 'Run agent locally without going through gateway', descriptionZh: '不通过网关在本地运行 Agent', required: false },
      { name: '--deliver', description: 'Deliver response back to the originating channel', descriptionZh: '将响应投递回原始频道', required: false },
      { name: '--json', description: 'Output response in JSON format', descriptionZh: '以 JSON 格式输出响应', required: false },
      { name: '--timeout <seconds>', description: 'Timeout for agent response in seconds (default: 120)', descriptionZh: 'Agent 响应超时秒数（默认：120）', required: false },
    ],
    examples: [
      'openclaw agent --message "Hello" - 发送简单消息',
      'openclaw agent --message "What is the weather?" - 询问天气',
      'openclaw agent --message "Run summary" --deliver - 发送并投递响应',
      'openclaw agent --message "Help" --to +15555550123 - 发送到特定目标',
      'openclaw agent --message "Debug" --thinking high - 高思考级别',
      'openclaw agent --message "Status" --json - JSON 格式输出',
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
    description: 'Manage AI models - configure authentication, set default models, manage fallbacks, and monitor model usage. Supports OpenAI, Anthropic, Google, Azure, and many more providers.',
    descriptionZh: '管理 AI 模型 - 配置认证、设置默认模型、管理备用模型和监控模型使用情况。支持 OpenAI、Anthropic、Google、Azure 等众多提供商。',
    category: '模型',
    subcommands: [
      { name: 'list', description: 'List all available models from configured providers', descriptionZh: '列出已配置提供商的所有可用模型', category: '模型' },
      { name: 'status', description: 'Show status of configured models including availability', descriptionZh: '显示已配置模型的状态，包括可用性', category: '模型' },
      { name: 'set <model>', description: 'Set default model for agent conversations', descriptionZh: '设置 Agent 对话的默认模型', category: '模型' },
      { name: 'set-image <model>', description: 'Set default image generation model', descriptionZh: '设置默认图像生成模型', category: '模型' },
      { name: 'aliases', description: 'Manage model aliases for easy switching', descriptionZh: '管理模型别名以便轻松切换', category: '模型' },
      { name: 'fallbacks', description: 'Configure fallback models when primary fails', descriptionZh: '配置主模型失败时的备用模型', category: '模型' },
      { name: 'scan', description: 'Scan and refresh available models from providers', descriptionZh: '扫描并刷新提供商提供的可用模型', category: '模型' },
      { name: 'auth', description: 'Manage authentication credentials for model providers', descriptionZh: '管理模型提供商的认证凭证', category: '模型' },
    ],
    options: [
      { name: '--all', description: 'Show all models including unsupported ones', descriptionZh: '显示所有模型，包括不支持的', required: false },
      { name: '--local', description: 'Show only locally configured models', descriptionZh: '仅显示本地配置的模型', required: false },
      { name: '--provider <name>', description: 'Filter by provider name (openai, anthropic, google, etc.)', descriptionZh: '按提供商名称筛选（openai、anthropic、google 等）', required: false },
      { name: '--json', description: 'Output in JSON format for scripting', descriptionZh: '以 JSON 格式输出，便于脚本处理', required: false },
      { name: '--probe', description: 'Live probe each model for availability', descriptionZh: '实时探测每个模型的可用性', required: false },
    ],
    examples: [
      'openclaw models list - 列出所有可用模型',
      'openclaw models status - 查看模型状态',
      'openclaw models set claude-sonnet-4-20250514 - 设置默认模型',
      'openclaw models auth add --provider openai - 添加 OpenAI 认证',
      'openclaw models list --provider anthropic - 筛选 Anthropic 模型',
      'openclaw models list --probe - 探测模型可用性',
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
    description: 'Manage paired nodes - control remote devices (macOS, iOS, Android) that are connected to the gateway. Execute commands like camera capture, screen recording, and notifications.',
    descriptionZh: '管理已配对的节点 - 控制连接到网关的远程设备（macOS、iOS、Android）。执行相机捕获、屏幕录制和通知等命令。',
    category: '高级',
    subcommands: [
      { name: 'status', description: 'Show status of all connected nodes', descriptionZh: '显示所有已连接节点的状态', category: '高级' },
      { name: 'list', description: 'List all paired nodes', descriptionZh: '列出所有已配对的节点', category: '高级' },
      { name: 'describe <node>', description: 'Show detailed information about a specific node', descriptionZh: '显示特定节点的详细信息', category: '高级' },
      { name: 'pending', description: 'Show pending pairing requests from devices', descriptionZh: '显示设备的待处理配对请求', category: '高级' },
      { name: 'approve <request>', description: 'Approve a pending pairing request', descriptionZh: '批准待处理的配对请求', category: '高级' },
      { name: 'reject <request>', description: 'Reject a pending pairing request', descriptionZh: '拒绝待处理的配对请求', category: '高级' },
      { name: 'invoke', description: 'Invoke a command on a specific node', descriptionZh: '在特定节点上调用命令', category: '高级' },
      { name: 'run <node> <cmd>', description: 'Run a shell command on a remote node', descriptionZh: '在远程节点上运行 Shell 命令', category: '高级' },
      { name: 'notify', description: 'Send notification to a node', descriptionZh: '向节点发送通知', category: '高级' },
      { name: 'camera', description: 'Camera operations (snap, clip) on a node', descriptionZh: '节点的相机操作（拍照、录像）', category: '高级' },
      { name: 'canvas', description: 'Canvas operations on a node', descriptionZh: '节点的画布操作', category: '高级' },
      { name: 'location', description: 'Get location from a node', descriptionZh: '从节点获取位置', category: '高级' },
      { name: 'screen', description: 'Screen operations (capture, record) on a node', descriptionZh: '节点的屏幕操作（捕获、录制）', category: '高级' },
    ],
    options: [
      { name: '--node <id>', description: 'Node ID to target for operations', descriptionZh: '操作目标节点 ID', required: false },
      { name: '--connected', description: 'Show only connected nodes', descriptionZh: '仅显示已连接的节点', required: false },
    ],
    examples: [
      'openclaw nodes list - 列出所有节点',
      'openclaw nodes status - 查看节点状态',
      'openclaw nodes status --connected - 仅显示已连接节点',
      'openclaw nodes run --node mynode "ls -la" - 在节点上运行命令',
      'openclaw nodes pending - 查看待处理请求',
      'openclaw nodes approve request123 - 批准配对请求',
      'openclaw nodes camera --node mynode snap - 节点拍照',
    ],
  },
  {
    name: 'node',
    description: 'Run or manage node host service - controls the local node that exposes device capabilities (camera, screen, location, notifications) to the gateway. Used for device pairing and control.',
    descriptionZh: '运行或管理节点主机服务 - 控制本地节点，将设备能力（相机、屏幕、位置、通知）暴露给网关。用于设备配对和控制。',
    category: '高级',
    subcommands: [
      { name: 'run', description: 'Start node in foreground for testing or debugging', descriptionZh: '在前台启动节点，用于测试或调试', category: '高级' },
      { name: 'status', description: 'Show current node connection status and capabilities', descriptionZh: '显示当前节点连接状态和能力', category: '高级' },
      { name: 'install', description: 'Install node as a system service for auto-start', descriptionZh: '安装节点为系统服务以实现自动启动', category: '高级' },
      { name: 'uninstall', description: 'Remove node service from system', descriptionZh: '从系统移除节点服务', category: '高级' },
      { name: 'start', description: 'Start installed node service', descriptionZh: '启动已安装的节点服务', category: '高级' },
      { name: 'stop', description: 'Stop running node service', descriptionZh: '停止运行中的节点服务', category: '高级' },
      { name: 'restart', description: 'Restart node service', descriptionZh: '重启节点服务', category: '高级' },
    ],
    options: [
      { name: '--host <address>', description: 'Gateway host address to connect to (default: 127.0.0.1)', descriptionZh: '要连接的网关主机地址（默认：127.0.0.1）', required: false },
      { name: '--port <port>', description: 'Gateway WebSocket port number (default: 18789)', descriptionZh: '网关 WebSocket 端口号（默认：18789）', required: false },
      { name: '--runtime <runtime>', description: 'JavaScript runtime: node or bun (default: node)', descriptionZh: 'JavaScript 运行时：node 或 bun（默认：node）', required: false },
      { name: '--token <token>', description: 'Authentication token for gateway connection', descriptionZh: '网关连接的认证令牌', required: false },
      { name: '--name <name>', description: 'Node display name in the gateway', descriptionZh: '网关中显示的节点名称', required: false },
    ],
    examples: [
      'openclaw node run - 前台运行节点',
      'openclaw node status - 查看节点状态',
      'openclaw node run --host 127.0.0.1 --port 18789 - 指定网关地址',
      'openclaw node install - 安装节点服务',
      'openclaw node start - 启动节点服务',
      'openclaw node stop - 停止节点服务',
      'openclaw node restart - 重启节点服务',
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
