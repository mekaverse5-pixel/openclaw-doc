---
sidebar_position: 3
---

# Discord 配置

Discord 适合社区使用，可以同时管理多个服务器。

## 创建 Discord 机器人

### 步骤 1：创建应用

1. 打开 [Discord Developer Portal](https://discord.com/developers/applications)
2. 点击 "New Application"
3. 设置应用名称

### 步骤 2：创建机器人

1. 在应用页面，点击 **Bot**
2. 点击 "Reset Token" 获取机器人令牌
3. 启用 **Message Content Intent**

### 步骤 3：邀请机器人

1. 进入 **OAuth2** → **URL Generator**
2. 选择 `bot` 权限
3. 复制生成的 URL
4. 在浏览器中打开并选择服务器

### 步骤 4：配置 OpenClaw

```bash
# 登录 Discord 通道
openclaw channels login discord
```

输入机器人令牌。

### 步骤 5：设置权限

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

## 获取服务器 ID

1. 打开 Discord 设置
2. 高级选项 → 启用开发者模式
3. 右键服务器名称 → 复制 ID
