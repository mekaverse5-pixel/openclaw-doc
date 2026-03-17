---
sidebar_position: 3
---

# OpenAI GPT 配置

GPT 模型通用能力强，适合各种任务。

## 获取 API Key

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 登录账户
3. 进入 **API Keys**
4. 创建新密钥

## 配置 OpenClaw

```bash
openclaw config set providers.openai.apiKey YOUR_API_KEY
```

配置示例：

```json
{
  "providers": {
    "openai": {
      "apiKey": "sk-...",
      "model": "gpt-4o"
    }
  }
}
```

## 推荐模型

| 模型 | 用途 | 价格 |
|------|------|------|
| GPT-4o | 多模态首选 | $5/百万输入 |
| GPT-4 Turbo | 编程推荐 | $10/百万输入 |
| GPT-3.5 Turbo | 快速响应 | $0.5/百万输入 |

## 环境变量

```bash
export OPENAI_API_KEY="sk-..."
```
