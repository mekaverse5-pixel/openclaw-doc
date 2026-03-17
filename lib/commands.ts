export interface Command {
  name: string
  description: string
  descriptionZh: string
  category: string
  options?: {
    name: string
    description: string
    required?: boolean
  }[]
  examples?: string[]
  subcommands?: Command[]
}

export const commands: Command[] = [
  {
    name: 'setup',
    description: 'Initialize config and workspace',
    descriptionZh: '初始化配置和工作区',
    category: '入门',
    examples: ['openclaw setup', 'openclaw setup --wizard'],
  },
  {
    name: 'onboard',
    description: 'Interactive onboarding wizard',
    descriptionZh: '交互式入门向导',
    category: '入门',
    examples: ['openclaw onboard', 'openclaw onboard --non-interactive'],
  },
  {
    name: 'configure',
    description: 'Interactive configuration wizard',
    descriptionZh: '交互式配置向导',
    category: '配置',
  },
  {
    name: 'config',
    description: 'Non-interactive config helpers',
    descriptionZh: '非交互式配置助手',
    category: '配置',
    subcommands: [
      { name: 'get', description: 'Print config value', descriptionZh: '打印配置值', category: '配置' },
      { name: 'set', description: 'Set config value', descriptionZh: '设置配置值', category: '配置' },
      { name: 'unset', description: 'Remove config value', descriptionZh: '删除配置值', category: '配置' },
      { name: 'validate', description: 'Validate config', descriptionZh: '验证配置', category: '配置' },
    ],
  },
  {
    name: 'doctor',
    description: 'Health checks and quick fixes',
    descriptionZh: '健康检查和快速修复',
    category: '维护',
  },
  {
    name: 'dashboard',
    description: 'Open Control UI',
    descriptionZh: '打开控制面板',
    category: '工具',
  },
  {
    name: 'status',
    description: 'Show channel health and sessions',
    descriptionZh: '显示频道状态和会话',
    category: '状态',
    examples: ['openclaw status', 'openclaw status --deep'],
  },
  {
    name: 'health',
    description: 'Fetch gateway health',
    descriptionZh: '获取网关健康状态',
    category: '状态',
  },
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
    ],
  },
  {
    name: 'channels',
    description: 'Manage chat channels',
    descriptionZh: '管理聊天频道',
    category: '频道',
    subcommands: [
      { name: 'list', description: 'List channels', descriptionZh: '列出频道', category: '频道' },
      { name: 'add', description: 'Add channel', descriptionZh: '添加频道', category: '频道' },
      { name: 'remove', description: 'Remove channel', descriptionZh: '删除频道', category: '频道' },
      { name: 'login', description: 'Channel login', descriptionZh: '频道登录', category: '频道' },
      { name: 'status', description: 'Channel status', descriptionZh: '频道状态', category: '频道' },
    ],
  },
  {
    name: 'message',
    description: 'Send and manage messages',
    descriptionZh: '发送和管理消息',
    category: '消息',
    examples: [
      'openclaw message send --target +15555550123 --message "Hi"',
      'openclaw message send --channel telegram --target @mychat --message "Hi"',
    ],
  },
  {
    name: 'agent',
    description: 'Run one agent turn',
    descriptionZh: '运行一次 Agent 对话',
    category: 'Agent',
    examples: ['openclaw agent --message "Hello" --to +15555550123'],
  },
  {
    name: 'agents',
    description: 'Manage isolated agents',
    descriptionZh: '管理独立 Agent',
    category: 'Agent',
    subcommands: [
      { name: 'list', description: 'List agents', descriptionZh: '列出 Agent', category: 'Agent' },
      { name: 'add', description: 'Add agent', descriptionZh: '添加 Agent', category: 'Agent' },
      { name: 'delete', description: 'Delete agent', descriptionZh: '删除 Agent', category: 'Agent' },
    ],
  },
  {
    name: 'models',
    description: 'Manage AI models',
    descriptionZh: '管理 AI 模型',
    category: '模型',
    subcommands: [
      { name: 'list', description: 'List models', descriptionZh: '列出模型', category: '模型' },
      { name: 'status', description: 'Model status', descriptionZh: '模型状态', category: '模型' },
      { name: 'set', description: 'Set default model', descriptionZh: '设置默认模型', category: '模型' },
    ],
  },
  {
    name: 'memory',
    description: 'Search and reindex memory',
    descriptionZh: '搜索和重建记忆索引',
    category: '记忆',
    examples: ['openclaw memory search "query"'],
  },
  {
    name: 'skills',
    description: 'List and inspect skills',
    descriptionZh: '列出和管理技能',
    category: '技能',
    examples: ['openclaw skills list'],
  },
  {
    name: 'plugins',
    description: 'Manage plugins and extensions',
    descriptionZh: '管理插件和扩展',
    category: '插件',
    examples: ['openclaw plugins list', 'openclaw plugins install <spec>'],
  },
  {
    name: 'browser',
    description: 'Manage browser automation',
    descriptionZh: '管理浏览器自动化',
    category: '自动化',
    subcommands: [
      { name: 'start', description: 'Start browser', descriptionZh: '启动浏览器', category: '自动化' },
      { name: 'stop', description: 'Stop browser', descriptionZh: '停止浏览器', category: '自动化' },
      { name: 'screenshot', description: 'Take screenshot', descriptionZh: '截图', category: '自动化' },
    ],
  },
  {
    name: 'cron',
    description: 'Manage scheduled jobs',
    descriptionZh: '管理定时任务',
    category: '自动化',
    examples: ['openclaw cron list', 'openclaw cron add --name test --message --at "0 9 * * *"'],
  },
  {
    name: 'hooks',
    description: 'Manage internal hooks',
    descriptionZh: '管理内部钩子',
    category: '高级',
    examples: ['openclaw hooks list'],
  },
  {
    name: 'logs',
    description: 'Tail gateway logs',
    descriptionZh: '查看网关日志',
    category: '调试',
    examples: ['openclaw logs --follow'],
  },
  {
    name: 'backup',
    description: 'Create and verify backups',
    descriptionZh: '创建和验证备份',
    category: '维护',
  },
  {
    name: 'update',
    description: 'Update OpenClaw',
    descriptionZh: '更新 OpenClaw',
    category: '维护',
  },
  {
    name: 'reset',
    description: 'Reset local config/state',
    descriptionZh: '重置本地配置/状态',
    category: '维护',
  },
  {
    name: 'uninstall',
    description: 'Uninstall gateway and data',
    descriptionZh: '卸载网关和数据',
    category: '维护',
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
  { name: '维护', color: 'text-red-400' },
]
