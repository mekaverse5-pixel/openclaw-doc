---
sidebar_position: 3
---

# 消息通道配置

OpenClaw 支持多种消息通道。

## 支持的通道

| 通道 | 状态 |
|------|------|
| Telegram | ✅ |
| Discord | ✅ |
| WhatsApp | ✅ |
| Slack | ✅ |

## Telegram 配置

### 1. 创建机器人

1. 搜索 @BotFather
2. 发送 `/newbot`
3. 获取 Bot Token

### 2. 配置 OpenClaw

```bash
openclaw channels login telegram
```

### 3. 设置权限

编辑 `~/.openclaw/openclaw.json`：

```json
{
  "channels": {
    "telegram": {
      "token": "YOUR_BOT_TOKEN",
      "allowFrom": ["YOUR_USER_ID"]
    }
  }
}
```

## Discord 配置

### 1. 创建应用

1. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
2. 创建新应用
3. 添加机器人

### 2. 配置 OpenClaw

```bash
openclaw channels login discord
```

输入机器人令牌即可。
