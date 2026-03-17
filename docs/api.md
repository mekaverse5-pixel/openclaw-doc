# API 参考

OpenClaw 提供 REST API 供外部调用。

## 认证

所有 API 请求需要携带 API Key：

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.openclaw.ai/v1/status
```

## 端点

### 健康检查

```http
GET /v1/health
```

响应：
```json
{
  "status": "ok",
  "version": "2026.1"
}
```

### 发送消息

```http
POST /v1/chat
Content-Type: application/json

{
  "message": "分析 BTC 行情",
  "chat_id": "123456789"
}
```

### 创建 Task

```http
POST /v1/tasks
Content-Type: application/json

{
  "type": "analysis",
  "symbol": "BTCUSDT",
  "timeframe": "1h"
}
```

## 错误码

| 错误码 | 说明 |
|--------|------|
| 400 | 请求参数错误 |
| 401 | API Key 无效 |
| 429 | 请求频率超限 |
| 500 | 服务器内部错误 |

---

## 下一步

- 返回 [快速开始](/getting-started)
