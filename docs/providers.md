---
sidebar_position: 4
---

# AI 模型配置

OpenClaw 支持多种 AI 模型提供商。

## 支持的模型

| 提供商 | 模型 |
|--------|------|
| Anthropic | Claude 3.5 Sonnet, Claude 3 Opus |
| OpenAI | GPT-4o, GPT-4 Turbo |
| MiniMax | M2.5 |

## Anthropic Claude 配置

### 获取 API Key

1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 创建 API Key

### 配置

```bash
openclaw config set providers.anthropic.apiKey YOUR_API_KEY
```

## OpenAI GPT 配置

```bash
openclaw config set providers.openai.apiKey YOUR_API_KEY
```

## MiniMax 配置（推荐中文）

```json
{
  "providers": {
    "minimax": {
      "apiKey": "YOUR_API_KEY",
      "model": "MiniMax-M2.5"
    }
  }
}
```

## 本地模型（LM Studio）

```json
{
  "providers": {
    "local": {
      "baseUrl": "http://localhost:1234/v1",
      "model": "local-model"
    }
  }
}
```
