---
sidebar_position: 5
---

# Slack 配置

Slack 适合团队协作使用。

## 配置步骤

### 步骤 1：创建 Slack 应用

1. 打开 [Slack API](https://api.slack.com/apps)
2. 点击 "Create New App"
3. 选择 "From scratch"
4. 设置应用名称和 workspace

### 步骤 2：添加权限

1. 进入 **OAuth & Permissions**
2. 添加以下 scopes：
   - `chat:write`
   - `channels:read`
   - `groups:read`
   - `im:read`
   - `mpim:read`

### 步骤 3：安装应用到 Workspace

1. 点击 "Install to Workspace"
2. 授权权限

### 步骤 4：配置 OpenClaw

```bash
openclaw channels login slack
```

### 步骤 5：设置权限

```json
{
  "channels": {
    "slack": {
      "token": "xoxb-...",
      "allowFrom": ["CHANNEL_ID"]
    }
  }
}
```

## 在 Slack 中使用

- 在频道中 @机器人 即可对话
- 也可以直接发私信给机器人
