---
sidebar_position: 2
---

# Telegram 配置

Telegram 是最推荐的通道，功能完整且易于配置。

## 创建 Telegram Bot

### 步骤 1：创建机器人

1. 打开 Telegram，搜索 **@BotFather**
2. 发送 `/newbot` 创建新机器人
3. 按照指示设置机器人名称和用户名
4. 复制 Bot Token

### 步骤 2：获取你的 User ID

1. 搜索 **@userinfobot**
2. 发送 `/start`
3. 复制数字 ID

### 步骤 3：配置 OpenClaw

```bash
# 登录 Telegram 通道
openclaw channels login telegram
```

按照提示输入 Bot Token。

### 步骤 4：设置访问权限

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

### 步骤 5：启动

```bash
openclaw gateway
```

现在可以开始和机器人聊天了！发送消息即可获得 AI 回复。

## 高级配置

### 群组中使用

1. 将机器人添加到群组
2. 设置群组权限为管理员（可选）
3. 在 `allowFrom` 中添加群组 ID

### 多用户支持

```json
{
  "channels": {
    "telegram": {
      "token": "YOUR_BOT_TOKEN",
      "allowFrom": ["USER_ID_1", "USER_ID_2", "GROUP_ID"]
    }
  }
}
```
