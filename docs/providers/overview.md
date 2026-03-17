---
sidebar_position: 1
---

# AI 模型概述

OpenClaw 支持多种 AI 模型提供商，你可以根据需求选择合适的模型。

## 支持的模型提供商

| 提供商 | 状态 | 说明 |
|--------|------|------|
| Anthropic (Claude) | ✅ 已支持 | 推荐用于编程 |
| OpenAI (GPT) | ✅ 已支持 | 通用能力强 |
| Google (Gemini) | ✅ 已支持 | 多模态支持 |
| MiniMax | ✅ 已支持 | 中文优化 |
| 本地模型 (LM Studio) | ✅ 已支持 | 隐私保护 |

## 选择建议

| 场景 | 推荐模型 |
|------|---------|
| 日常编程 | Claude 3.5 Sonnet |
| 复杂推理 | GPT-4 / Claude 3 Opus |
| 中文对话 | MiniMax M2.5 |
| 隐私需求 | LM Studio 本地模型 |

## 多模型配置

可以同时配置多个模型：

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "..."
    },
    "openai": {
      "apiKey": "..."
    }
  },
  "defaultModel": "anthropic"
}
```
