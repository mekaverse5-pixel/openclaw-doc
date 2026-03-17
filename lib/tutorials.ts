export interface Tutorial {
  slug: string
  title: string
  titleEn: string
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  steps: {
    title: string
    content: string
  }[]
}

export const tutorials: Tutorial[] = [
  {
    slug: 'quick-start',
    title: '快速开始',
    titleEn: 'Quick Start',
    description: '5分钟快速上手 OpenClaw',
    category: '入门',
    difficulty: 'easy',
    steps: [
      {
        title: '安装 OpenClaw',
        content: `# 安装 OpenClaw

使用官方安装脚本一键安装：

\`\`\`bash
curl -Ls https://docs.openclaw.ai/install.sh | sh
\`\`\`

或者使用 Homebrew：

\`\`\`bash
brew install openclaw
\`\`\``,
      },
      {
        title: '初始化配置',
        content: `# 初始化配置

运行设置向导：

\`\`\`bash
openclaw onboard --install-daemon
\`\`\`

这将引导你完成：
- 选择认证方式 (API Key, OAuth, 等)
- 配置模型
- 设置工作区目录
- 安装 Gateway 守护进程

或者非交互式安装，参考官方文档：https://docs.openclaw.ai/start/getting-started`,
      },
      {
        title: '启动网关',
        content: `# 启动网关

启动 WebSocket Gateway：

\`\`\`bash
openclaw gateway --port 18789 --verbose
\`\`\`

检查状态：

\`\`\`bash
openclaw status
\`\`\``,
      },
      {
        title: '发送第一条消息',
        content: `# 发送第一条消息

使用 openclaw message 命令：

\`\`\`bash
openclaw message send --to 你的手机号 --message "你好，OpenClaw！"
\`\`\`

或使用 agent 命令与 AI 对话：

\`\`\`bash
openclaw agent --message "你好，请介绍一下你自己" --thinking high
\`\`\``,
      },
    ],
  },
  {
    slug: 'telegram-setup',
    title: 'Telegram 机器人配置',
    titleEn: 'Telegram Bot Setup',
    description: '配置 Telegram 机器人并连接 OpenClaw',
    category: '频道',
    difficulty: 'easy',
    steps: [
      {
        title: '创建 Telegram Bot',
        content: `# 创建 Telegram Bot

1. 打开 Telegram，搜索 @BotFather
2. 发送 /newbot 命令
3. 按照提示输入机器人名称和用户名
4. 复制 Bot Token（格式类似：123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11）`,
      },
      {
        title: '配置 OpenClaw',
        content: `# 配置 OpenClaw

添加 Telegram 频道：

\`\`\`bash
openclaw channels add --channel telegram --token 你的BOT_TOKEN
\`\`\`

或者使用环境变量：

\`\`\`bash
export TELEGRAM_BOT_TOKEN="你的BOT_TOKEN"
openclaw channels add --channel telegram --token $TELEGRAM_BOT_TOKEN
\`\`\``,
      },
      {
        title: '配置私聊策略',
        content: `# 配置私聊策略

编辑配置文件 \`~/.openclaw/openclaw.json\`，添加：

\`\`\`json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "dmPolicy": "allowlist",
      "allowFrom": ["你的用户ID"]
    }
  }
}
\`\`\`

获取你的用户 ID：
- 搜索 @userinfobot
- 发送任意消息获取你的 ID`,
      },
      {
        title: '重启网关',
        content: `# 重启网关

\`\`\`bash
openclaw gateway restart
\`\`\`

现在你可以向机器人发送消息了！`,
      },
    ],
  },
  {
    slug: 'whatsapp-setup',
    title: 'WhatsApp 配置',
    titleEn: 'WhatsApp Setup',
    description: '配置 WhatsApp Web 连接',
    category: '频道',
    difficulty: 'medium',
    steps: [
      {
        title: '添加 WhatsApp 频道',
        content: `# 添加 WhatsApp 频道

\`\`\`bash
openclaw channels add --channel whatsapp
\`\`\`

这将启动交互式登录流程。`,
      },
      {
        title: '扫码登录',
        content: `# 扫码登录

命令执行后会显示二维码，使用 WhatsApp 扫描登录。

登录成功后，配置会自动保存。`,
      },
      {
        title: '配置私聊策略',
        content: `# 配置私聊策略

\`\`\`json
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "dmPolicy": "allowlist",
      "allowFrom": ["你的手机号"]
    }
  }
}
\`\`\``,
      },
    ],
  },
  {
    slug: 'discord-setup',
    title: 'Discord 机器人配置',
    titleEn: 'Discord Bot Setup',
    description: '配置 Discord 机器人服务器',
    category: '频道',
    difficulty: 'medium',
    steps: [
      {
        title: '创建 Discord 应用',
        content: `# 创建 Discord 应用

1. 访问 https://discord.com/developers/applications
2. 点击 "New Application"
3. 填写名称并创建`,
      },
      {
        title: '创建 Bot',
        content: `# 创建 Bot

1. 在应用页面点击 "Bot"
2. 点击 "Reset Token" 获取令牌
3. 启用 "Message Content Intent"`,
      },
      {
        title: '邀请链接',
        content: `# 生成邀请链接

1. 点击 "OAuth2" -> "URL Generator"
2. 选择 scopes: \`bot\`
3. 选择 permissions:
   - Send Messages
   - Read Message History
4. 复制生成的 URL 并在浏览器打开`,
      },
      {
        title: '配置 OpenClaw',
        content: `# 配置 OpenClaw

\`\`\`bash
openclaw channels add --channel discord --token 你的BOT_TOKEN
\`\`\``,
      },
    ],
  },
  {
    slug: 'model-config',
    title: '模型配置',
    titleEn: 'Model Configuration',
    description: '配置使用的 AI 模型和 API',
    category: '模型',
    difficulty: 'easy',
    steps: [
      {
        title: '添加模型认证',
        content: `# 添加模型认证

支持多种认证方式：

**Anthropic (Claude)**
\`\`\`bash
openclaw models auth add --provider anthropic
\`\`\`

**OpenAI**
\`\`\`bash
openclaw models auth add --provider openai
\`\`\`

**使用 setup-token**
\`\`\`bash
openclaw models auth setup-token --provider anthropic
\`\`\``,
      },
      {
        title: '设置默认模型',
        content: `# 设置默认模型

\`\`\`bash
# 设置文本模型
openclaw models set claude-sonnet-4-20250514

# 设置图像模型
openclaw models set-image claude-sonnet-4-20250514
\`\`\`

查看可用模型：
\`\`\`bash
openclaw models list
\`\`\``,
      },
      {
        title: '配置模型回退',
        content: `# 配置模型回退

当主模型不可用时自动切换：

\`\`\`bash
# 添加回退模型
openclaw models fallbacks add claude-3-haiku-20240307

# 查看回退列表
openclaw models fallbacks list

# 清除回退
openclaw models fallbacks clear
\`\`\``,
      },
      {
        title: '扫描可用模型',
        content: `# 扫描可用模型

\`\`\`bash
openclaw models scan --provider openai --set-default
\`\`\`

这会扫描并列出可用的模型，可选择设为默认。`,
      },
    ],
  },
  {
    slug: 'memory-setup',
    title: 'OpenViking 记忆配置',
    titleEn: 'OpenViking Memory Setup',
    description: '配置 OpenViking 实现长期记忆功能',
    category: '记忆',
    difficulty: 'medium',
    steps: [
      {
        title: '安装 OpenViking',
        content: `# 安装 OpenViking

\`\`\`bash
pip install openviking
\`\`\``,
      },
      {
        title: '配置 ov.conf',
        content: `# 配置 ov.conf

创建 \`~/.openviking/ov.conf\`：

\`\`\`json
{
  "embedding": {
    "dense": {
      "provider": "openai",
      "model": "text-embedding-3-small",
      "api_key": "your-api-key",
      "api_base": "http://localhost:1234/v1"
    }
  },
  "vlm": {
    "provider": "openai",
    "model": "qwen/qwen3.5-9b",
    "api_key": "your-api-key",
    "api_base": "http://localhost:1234/v1"
  }
}
\`\`\``,
      },
      {
        title: '启动 OpenViking',
        content: `# 启动 OpenViking

\`\`\`bash
python -m openviking.server.bootstrap --config ~/.openviking/ov.conf --port 1933
\`\`\`

或使用 pm2 管理：

\`\`\`bash
pm2 start openviking -- "python -m openviking.server.bootstrap --config ~/.openviking/ov.conf --port 1933"
\`\`\``,
      },
      {
        title: '配置 OpenClaw 插件',
        content: `# 配置 OpenClaw 插件

在 openclaw.json 中添加：

\`\`\`json
{
  "plugins": {
    "slots": {
      "memory": "memory-openviking"
    },
    "entries": {
      "memory-openviking": {
        "enabled": true,
        "config": {
          "mode": "remote",
          "baseUrl": "http://127.0.0.1:1933",
          "autoCapture": true,
          "autoRecall": true
        }
      }
    }
  }
}
\`\`\``,
      },
      {
        title: '重启网关',
        content: `# 重启网关

\`\`\`bash
openclaw gateway restart
\`\`\`

验证记忆功能：
\`\`\`bash
openclaw agent --message "请记住我叫小明"
\`\`\``,
      },
    ],
  },
  {
    slug: 'cron-job',
    title: '定时任务配置',
    titleEn: 'Cron Job Setup',
    description: '设置定时执行的任务，如每日简报',
    category: '自动化',
    difficulty: 'easy',
    steps: [
      {
        title: '创建定时任务',
        content: `# 创建定时任务

使用 cron 表达式：

\`\`\`bash
openclaw cron add \\
  --name daily-brief \\
  --message "请提供今日简报" \\
  --at "0 9 * * *"
\`\`\`

使用自然语言间隔：

\`\`\`bash
openclaw cron add \\
  --name hourly-check \\
  --message "检查系统状态" \\
  --every "1h"
\`\`\``,
      },
      {
        title: '创建系统事件任务',
        content: `# 创建系统事件任务

\`\`\`bash
openclaw cron add \\
  --name reminder \\
  --name "会议提醒" \\
  --system-event "会议将在30分钟后开始" \\
  --at "0 9 * * *"
\`\`\``,
      },
      {
        title: '管理任务',
        content: `# 管理任务

查看任务列表：
\`\`\`bash
openclaw cron list
\`\`\`

启用/禁用任务：
\`\`\`bash
openclaw cron disable daily-brief
openclaw cron enable daily-brief
\`\`\`

手动运行任务：
\`\`\`bash
openclaw cron run daily-brief
\`\`\``,
      },
    ],
  },
  {
    slug: 'browser-automation',
    title: '浏览器自动化',
    titleEn: 'Browser Automation',
    description: '使用 OpenClaw 控制浏览器',
    category: '自动化',
    difficulty: 'medium',
    steps: [
      {
        title: '启动浏览器',
        content: `# 启动浏览器

\`\`\`bash
openclaw browser start
\`\`\`

检查状态：
\`\`\`bash
openclaw browser status
\`\`\``,
      },
      {
        title: '导航和截图',
        content: `# 导航和截图

打开网页：
\`\`\`bash
openclaw browser open https://www.google.com
\`\`\`

截图：
\`\`\`bash
openclaw browser screenshot
\`\`\`

全页截图：
\`\`\`bash
openclaw browser screenshot --full-page
\`\`\``,
      },
      {
        title: '交互操作',
        content: `# 交互操作

输入文本：
\`\`\`bash
openclaw browser type input#search "Hello World"
openclaw browser press Enter
\`\`\`

点击元素：
\`\`\`bash
openclaw browser click button.submit
\`\`\`

等待元素：
\`\`\`bash
openclaw browser wait --text "结果"
\`\`\``,
      },
    ],
  },
  {
    slug: 'skill-management',
    title: '技能管理',
    titleEn: 'Skill Management',
    description: '安装和管理 OpenClaw 技能',
    category: '技能',
    difficulty: 'easy',
    steps: [
      {
        title: '查看可用技能',
        content: `# 查看可用技能

\`\`\`bash
openclaw skills list
\`\`\`

检查技能状态：
\`\`\`bash
openclaw skills check
\`\`\``,
      },
      {
        title: '查看技能详情',
        content: `# 查看技能详情

\`\`\`bash
openclaw skills info email
\`\`\`

这会显示技能的描述、命令和依赖。`,
      },
      {
        title: '安装新技能',
        content: `# 安装新技能

使用 npx clawhub：

\`\`\`bash
npx clawhub search email
npx clawhub install email
\`\`\``,
      },
    ],
  },
  {
    slug: 'plugin-development',
    title: '插件开发',
    titleEn: 'Plugin Development',
    description: '开发自定义 OpenClaw 插件',
    category: '开发',
    difficulty: 'hard',
    steps: [
      {
        title: '插件结构',
        content: `# 插件结构

OpenClaw 插件是一个包含 index.ts 的目录：

\`\`\`
my-plugin/
└── index.ts
\`\`\``,
      },
      {
        title: '编写插件',
        content: `# 编写插件

\`\`\`typescript
import { Plugin } from '@openclaw/plugin'

export const myPlugin: Plugin = {
  name: 'my-plugin',
  version: '1.0.0',
  
  hooks: {
    'before:message': async (context) => {
      console.log('收到消息:', context.message)
      return context
    }
  }
}
\`\`\``,
      },
      {
        title: '安装插件',
        content: `# 安装插件

\`\`\`bash
openclaw plugins install ./my-plugin
\`\`\`

或安装 npm 包：

\`\`\`bash
openclaw plugins install @myorg/openclaw-plugin
\`\`\``,
      },
    ],
  },
  {
    slug: 'remote-gateway',
    title: '远程网关配置',
    titleEn: 'Remote Gateway Setup',
    description: '配置远程访问 OpenClaw 网关',
    category: '网络',
    difficulty: 'medium',
    steps: [
      {
        title: '本地网关模式',
        content: `# 本地网关模式

默认模式，网关在本地运行：

\`\`\`bash
openclaw gateway --port 18789 --verbose
\`\`\``,
      },
      {
        title: 'Tailscale 远程访问',
        content: `# Tailscale 远程访问

使用 Tailscale 提供远程访问：

\`\`\`bash
openclaw gateway --tailscale serve
\`\`\`

选项：
- \`serve\`: 通过 Tailscale 提供访问
- \`funnel\`: 通过公开域名提供访问`,
      },
      {
        title: '配置远程连接',
        content: `# 配置远程连接

在远程设备上配置连接：

\`\`\`bash
openclaw setup --mode remote --remote-url https://your-tailnet.ts.net --remote-token your-token
\`\`\``,
      },
    ],
  },
  {
    slug: 'security-best-practices',
    title: '安全最佳实践',
    titleEn: 'Security Best Practices',
    description: '保护你的 OpenClaw 安装',
    category: '安全',
    difficulty: 'medium',
    steps: [
      {
        title: '运行安全审计',
        content: `# 运行安全审计

\`\`\`bash
openclaw security audit
\`\`\`

深度扫描：

\`\`\`bash
openclaw security audit --deep
\`\`\``,
      },
      {
        title: '自动修复问题',
        content: `# 自动修复问题

\`\`\`bash
openclaw security audit --fix
\`\`\`

这会：
- 修复文件权限
- 清理敏感数据残留
- 强化安全配置`,
      },
      {
        title: '管理执行审批',
        content: `# 管理执行审批

配置谁可以执行命令：

\`\`\`bash
# 查看当前审批设置
openclaw approvals get

# 添加白名单用户
openclaw approvals allowlist add 551311157
\`\`\``,
      },
    ],
  },
  {
    slug: 'backup-restore',
    title: '备份与恢复',
    titleEn: 'Backup and Restore',
    description: '备份和恢复 OpenClaw 数据',
    category: '维护',
    difficulty: 'easy',
    steps: [
      {
        title: '创建备份',
        content: `# 创建备份

\`\`\`bash
openclaw backup create
\`\`\`

这会在当前目录创建备份文件。`,
      },
      {
        title: '验证备份',
        content: `# 验证备份

\`\`\`bash
openclaw backup verify backup.tar.gz
\`\`\`

检查备份完整性。`,
      },
      {
        title: '恢复数据',
        content: `# 恢复数据

首先停止网关：

\`\`\`bash
openclaw gateway stop
\`\`\`

然后解压备份文件到对应目录。`,
      },
    ],
  },
  {
    slug: 'multi-agent',
    title: '多 Agent 配置',
    titleEn: 'Multi-Agent Setup',
    description: '配置多个独立的 Agent',
    category: 'Agent',
    difficulty: 'medium',
    steps: [
      {
        title: '创建新 Agent',
        content: `# 创建新 Agent

\`\`\`bash
openclaw agents add work-agent --workspace ~/.openclaw/agents/work
\`\`\`

这会创建一个独立的工作 Agent，有自己的：- 工作区目录
- 独立的配置
- 独立的认证`,
      },
      {
        title: '绑定频道',
        content: `# 绑定频道

将频道绑定到特定 Agent：

\`\`\`bash
openclaw agents bind --agent work-agent --bind telegram:work
\`\`\`

查看绑定：

\`\`\`bash
openclaw agents bindings
\`\`\``,
      },
      {
        title: '切换 Agent',
        content: `# 切换 Agent

通过消息路由切换：

\`\`\`bash
openclaw agent --message "你好" --to work
\`\`\`

或者在消息中指定：

\`\`\`
@work 你好
\`\`\``,
      },
    ],
  },
  {
    slug: 'node-management',
    title: '节点管理',
    titleEn: 'Node Management',
    description: '管理远程配对的节点',
    category: '高级',
    difficulty: 'hard',
    steps: [
      {
        title: '安装节点',
        content: `# 安装节点

在远程设备上安装节点：

\`\`\`bash
openclaw node install --host 127.0.0.1 --port 18789
\`\`\``,
      },
      {
        title: '配对节点',
        content: `# 配对节点

在主设备上批准配对请求：

\`\`\`bash
openclaw nodes pending
openclaw nodes approve <request-id>
\`\`\``,
      },
      {
        title: '远程执行命令',
        content: `# 远程执行命令

在节点上运行命令：

\`\`\`bash
openclaw nodes run --node mynode "ls -la"
\`\`\`

查看节点状态：

\`\`\`bash
openclaw nodes status
\`\`\``,
      },
    ],
  },
  {
    slug: 'docker-deployment',
    title: 'Docker 部署',
    titleEn: 'Docker Deployment',
    description: '使用 Docker 部署 OpenClaw',
    category: '部署',
    difficulty: 'hard',
    steps: [
      {
        title: '创建 Dockerfile',
        content: `# 创建 Dockerfile

\`\`\`dockerfile
FROM node:20-alpine

RUN npm install -g openclaw

WORKDIR /app
COPY . .

CMD ["openclaw", "gateway", "start"]
\`\`\``,
      },
      {
        title: '构建镜像',
        content: `# 构建镜像

\`\`\`bash
docker build -t openclaw .
\`\`\``,
      },
      {
        title: '运行容器',
        content: `# 运行容器

\`\`\`bash
docker run -d \\
  --name openclaw \\
  -p 18789:18789 \\
  -v ~/.openclaw:/home/node/.openclaw \\
  openclaw
\`\`\``,
      },
    ],
  },
]

export function getTutorial(slug: string) {
  return tutorials.find(t => t.slug === slug)
}
