export const tutorials = [
  {
    slug: 'telegram-setup',
    title: 'Telegram 机器人配置',
    description: '如何配置 Telegram 机器人并连接 OpenClaw',
    category: '频道',
    steps: [
      {
        title: '创建 Telegram Bot',
        content: '通过 @BotFather 创建新机器人，获取 API Token',
      },
      {
        title: '配置 OpenClaw',
        content: `\`\`\`bash
openclaw channels add --channel telegram --token YOUR_BOT_TOKEN
\`\`\``,
      },
      {
        title: '设置私聊策略',
        content: `配置允许私聊消息：
\`\`\`json
{
  "channels": {
    "telegram": {
      "dmPolicy": "allowlist",
      "allowFrom": ["YOUR_USER_ID"]
    }
  }
}
\`\`\``,
      },
    ],
  },
  {
    slug: 'memory-setup',
    title: 'OpenViking 记忆配置',
    description: '配置 OpenViking 实现长期记忆功能',
    category: '记忆',
    steps: [
      {
        title: '安装 OpenViking',
        content: `\`\`\`bash
pip install openviking
\`\`\``,
      },
      {
        title: '配置 ov.conf',
        content: '编辑 ~/.openviking/ov.conf 设置 embedding 和 VLM',
      },
      {
        title: '配置 OpenClaw 插件',
        content: `在 openclaw.json 中添加：
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
          "baseUrl": "http://127.0.0.1:1933"
        }
      }
    }
  }
}
\`\`\``,
      },
    ],
  },
  {
    slug: 'cron-job',
    title: '定时任务配置',
    description: '设置定时执行的任务，如每日简报',
    category: '自动化',
    steps: [
      {
        title: '创建定时任务',
        content: `\`\`\`bash
openclaw cron add \\
  --name daily-brief \\
  --message "请提供今日简报" \\
  --at "0 9 * * *"
\`\`\``,
      },
      {
        title: '查看任务列表',
        content: `\`\`\`bash
openclaw cron list
\`\`\``,
      },
    ],
  },
  {
    slug: 'model-config',
    title: '模型配置',
    description: '配置使用的 AI 模型和 API',
    category: '模型',
    steps: [
      {
        title: '添加模型认证',
        content: `\`\`\`bash
openclaw models auth add --provider openai
\`\`\``,
      },
      {
        title: '设置默认模型',
        content: `\`\`\`bash
openclaw models set claude-sonnet-4-20250514
\`\`\``,
      },
    ],
  },
]

export function getTutorial(slug: string) {
  return tutorials.find(t => t.slug === slug)
}
