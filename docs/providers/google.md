---
sidebar_position: 4
---

# Google Gemini 配置

Gemini 是 Google 的多模态模型。

## 获取 API Key

1. 访问 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 创建 API Key

## 配置 OpenClaw

```json
{
  "providers": {
    "google": {
      "apiKey": "YOUR_API_KEY",
      "model": "gemini-pro"
    }
  }
}
```

## 推荐模型

| 模型 | 用途 |
|------|------|
| Gemini Pro | 通用对话 |
| Gemini Pro Vision | 多模态（图片） |

## 环境变量

```bash
export GOOGLE_API_KEY="..."
```
