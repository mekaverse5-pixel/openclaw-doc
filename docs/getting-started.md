# 快速开始

欢迎使用 OpenClaw！本指南将帮助你快速上手。

## 环境要求

| 要求 | 说明 |
|------|------|
| Node.js | 18.0 或更高版本 |
| npm | 9.0 或更高版本 |

## 安装

```bash
# 安装 OpenClaw
npm install -g openclaw

# 验证安装
openclaw --version
```

## 首次配置

### 1. 初始化配置

```bash
openclaw init
```

### 2. 配置 Telegram Bot

在 Telegram 中：
1. 搜索 @BotFather
2. 创建新机器人，获取 API Token
3. 配置 bot token 到 OpenClaw

### 3. 启动服务

```bash
openclaw start
```

## 验证

服务启动后，在 Telegram 中发送 `/status` 验证连接。

---

## 下一步

- [配置指南](/configuration) - 了解更多配置选项
- [工具使用](/tools) - 使用内置工具
