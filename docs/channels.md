# 消息通道配置

OpenClaw 支持多种消息通道，让你可以使用自己喜欢的聊天应用与 AI 助手交互。

## 支持的通道

| 通道 | 状态 | 说明 |
|------|------|------|
| Telegram | ✅ 已支持 | 最推荐的通道 |
| Discord | ✅ 已支持 | 适合社区使用 |
| WhatsApp | ✅ 已支持 | 需要手机在线 |
| Slack | ✅ 已支持 | 适合团队协作 |
| iMessage | ✅ 已支持 | 仅 macOS |
| WebChat | ✅ 已支持 | 网页聊天 |

---

## Telegram 配置

### 步骤 1：创建 Telegram Bot

1. 打开 Telegram，搜索 `@BotFather`
2. 发送 `/newbot` 创建新机器人
3. 按照指示设置机器人名称和用户名
4. 复制 Bot Token

### 步骤 2：配置 OpenClaw

```bash
# 登录 Telegram 通道
openclaw channels login telegram
```

按照提示输入 Bot Token。

### 步骤 3：设置访问权限

编辑配置文件 `~/.openclaw/openclaw.json`：

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

获取你的 User ID：
1. 搜索 `@userinfobot`
2. 发送 `/start`
3. 复制 ID 号

### 步骤 4：启动通道

```bash
openclaw gateway
```

现在可以开始和机器人聊天了！

---

## Discord 配置

### 步骤 1：创建 Discord 应用

1. 打开 [Discord Developer Portal](https://discord.com/developers/applications)
2. 点击 "New Application"
3. 设置应用名称

### 步骤 2：创建机器人

1. 在应用页面，点击 "Bot"
2. 点击 "Reset Token" 获取机器人令牌
3. 启用 "Message Content Intent"

### 步骤 3：邀请机器人到服务器

1. 进入 "OAuth2" → "URL Generator"
2. 选择 `bot` 和 `messages.read` 权限
3. 复制生成的 URL 并在浏览器中打开
4. 选择要添加机器人的服务器

### 步骤 4：配置 OpenClaw

```bash
# 登录 Discord 通道
openclaw channels login discord
```

输入机器人令牌。

### 步骤 5：设置访问权限

```json
{
  "channels": {
    "discord": {
      "token": "YOUR_BOT_TOKEN",
      "allowFrom": ["YOUR_GUILD_ID"]
    }
  }
}
```

---

## WhatsApp 配置

### 步骤 1：登录 WhatsApp

```bash
openclaw channels login whatsapp
```

### 步骤 2：扫描二维码

1. 打开 WhatsApp，设置 → 已连接的设备 → 链接桌面设备
2. 用手机扫描终端显示的二维码

### 步骤 3：配置访问权限

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["YOUR_PHONE_NUMBER"]
    }
  }
}
```

**注意**：保持手机在线才能使用 WhatsApp 通道。

---

## 通道配置示例

完整的通道配置：

```json
{
  "channels": {
    "telegram": {
      "token": "1234567890:ABCdefGHIjklMNOpqrsTUVwxyz",
      "allowFrom": ["123456789"]
    },
    "discord": {
      "token": "YOUR_DISCORD_TOKEN",
      "allowFrom": ["123456789012345678"]
    },
    "whatsapp": {
      "allowFrom": ["+1234567890"]
    }
  }
}
```

## 高级配置

### 多个通道同时使用

可以同时运行多个通道：

```json
{
  "channels": {
    "telegram": {
      "token": "...",
      "allowFrom": ["123", "456"]
    },
    "discord": {
      "token": "..."
    }
  }
}
```

### 通道特定设置

每个通道可以有独立的 AI 模型配置：

```json
{
  "channels": {
    "telegram": {
      "model": "claude-3-opus-20240229"
    },
    "discord": {
      "model": "gpt-4-turbo"
    }
  }
}
```
