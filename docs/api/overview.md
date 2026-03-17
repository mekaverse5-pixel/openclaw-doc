---
sidebar_position: 1
---

# API 概述

OpenClaw 提供 REST API 用于程序化访问。

## 基本信息

| 项目 | 值 |
|------|-----|
| 基础 URL | http://localhost:18789 |
| 认证方式 | API Key |
| 格式 | JSON |

## 认证

在请求头中添加 API Key：

```
Authorization: Bearer YOUR_API_KEY
```

## 端点

### 健康检查

```
GET /health
```

响应：
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

### 发送消息

```
POST /api/message
```

请求体：
```json
{
  "channel": "telegram",
  "userId": "123456789",
  "message": "你好"
}
```

### 获取配置

```
GET /api/config
```

### 更新配置

```
PUT /api/config
```

请求体：
```json
{
  "providers": {
    "anthropic": {
      "apiKey": "..."
    }
  }
}
```

## 错误处理

错误响应格式：

```json
{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "API Key 无效"
  }
}
```
