# OpenClaw 中文文档

> 本网站是 OpenClaw 官方文档的中文翻译版本

## 什么是 OpenClaw？

OpenClaw 是一个**自托管网关 (self-hosted gateway)**，它连接你喜欢的聊天应用——WhatsApp、Telegram Discord、iMessage 等——到 AI 编程助手如 Pi。你只需在自己的电脑或服务器上运行一个 Gateway 进程，它就成为你的消息应用和随时可用的 AI 助手之间的桥梁。

## 谁适合使用？

**适合人群**：想要拥有个人 AI 助手、但又不想放弃数据控制权或依赖托管服务的开发者和高级用户。

## 核心特点

| 特点 | 说明 |
|------|------|
| **自托管** | 在你自己的硬件上运行，你做主 |
| **多通道** | 一个 Gateway 同时服务 WhatsApp、Telegram、Discord 等 |
| **Agent 原生** | 为编程 Agent 构建，支持工具使用、会话、记忆和多 Agent 路由 |
| **开源** | MIT 许可证，社区驱动 |

## 快速开始

### 1. 安装 OpenClaw

```bash
npm install -g openclaw@latest
```

### 2. 初始化并安装服务

```bash
openclaw onboard --install-daemon
```

### 3. 登录通道并启动 Gateway

```bash
openclaw channels login
openclaw gateway --port 18789
```

## 控制面板

Gateway 启动后，打开浏览器控制面板：

| 地址 | 说明 |
|------|------|
| http://127.0.0.1:18789/ | 本地默认 |
| 远程访问 | 参考 [远程访问](/gateway/remote) |

## 配置 (可选)

配置文件位于 `~/.openclaw/openclaw.json`。

### 示例配置

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"]
    }
  }
}
```

## 文档导航

| 分类 | 说明 |
|------|------|
| [安装指南](/install) | 安装和初始设置 |
| [通道配置](/channels) | WhatsApp、Telegram、Discord 配置 |
| [工具使用](/tools) | 内置工具介绍 |
| [模型配置](/providers) | AI 模型提供商的配置 |
| [节点配置](/nodes) | iOS 和 Android 节点配对 |
| [网关运维](/gateway) | Gateway 配置和运维 |
| [帮助](/help) | 常见问题解答 |

## 许可证

MIT License
