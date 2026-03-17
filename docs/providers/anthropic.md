---
sidebar_position: 2
---

# Anthropic Claude 配置

Claude 在编程任务上表现出色，是推荐的模型。

## 获取 API Key

1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 登录账户
3. 点击 **API Keys** → **Create Key**
4. 复制 API Key

## 配置 OpenClaw

```bash
# 设置 API Key
openclaw config set providers.anthropic.apiKey YOUR_API_KEY
```

或编辑配置文件：

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-api03-...",
      "model": "claude-3-5-sonnet-20241022"
    }
  }
}
```

## 推荐模型

| 模型 | 用途 | 价格 |
|------|------|------|
| Claude 3.5 Sonnet | 日常编程首选 | $3/百万输入 |
| Claude 3 Opus | 复杂任务 | $15/百万输入 |
| Claude 3 Haiku | 快速响应 | $0.25/百万输入 |

## 环境变量

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```
