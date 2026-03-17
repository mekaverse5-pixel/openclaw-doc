---
sidebar_position: 2
---

# 安装指南

本指南将帮助你完成 OpenClaw 的安装和初始配置。

## 系统要求

| 要求 | 最低配置 |
|------|---------|
| Node.js | v18.0.0+ |
| 操作系统 | macOS / Linux / Windows |
| 内存 | 建议 4GB+ |

## 安装步骤

### 1. 安装 Node.js

```bash
# 使用 nvm 安装
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

### 2. 安装 OpenClaw

```bash
npm install -g openclaw@latest
```

验证安装：

```bash
openclaw --version
```

### 3. 初始化配置

```bash
openclaw onboard
```

### 4. 启动 Gateway

```bash
openclaw gateway
```

默认端口：18789

## 常见问题

### 端口被占用

```bash
lsof -i :18789
```

### 配置检查

```bash
openclaw doctor
```
