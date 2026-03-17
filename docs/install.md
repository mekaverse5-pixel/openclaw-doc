# 安装指南

本指南将帮助你完成 OpenClaw 的安装和初始配置。

## 系统要求

| 要求 | 最低配置 |
|------|---------|
| Node.js | v18.0.0 或更高版本 |
| 操作系统 | macOS / Linux / Windows |
| 内存 | 建议 4GB+ |

## 安装步骤

### 1. 安装 Node.js

如果还没有安装 Node.js，推荐使用 nvm 安装：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 安装 Node.js LTS
nvm install --lts
nvm use --lts
```

### 2. 安装 OpenClaw

使用 npm 全局安装：

```bash
npm install -g openclaw@latest
```

验证安装：

```bash
openclaw --version
```

### 3. 初始化配置

运行初始化向导：

```bash
openclaw onboard
```

这将引导你完成：
- 安装系统服务（可选）
- 登录消息通道
- 配置 AI 模型
- 启动 Gateway

### 4. 手动启动 Gateway

如果你已经完成配置，可以直接启动：

```bash
# 启动 Gateway（默认端口 18789）
openclaw gateway

# 指定端口
openclaw gateway --port 8080
```

## 常见问题

### 安装失败

如果 `npm install` 失败，尝试：
```bash
sudo npm install -g openclaw@latest
```

### 端口被占用

查看占用端口的进程：
```bash
lsof -i :18789
```

### 无法启动

检查配置是否正确：
```bash
openclaw doctor
```

## 下一步

- [配置消息通道](/channels) - 连接 WhatsApp、Telegram、Discord
- [配置 AI 模型](/providers) - 设置 OpenAI、Anthropic 等
- [工具使用](/tools) - 了解可用工具
