---
sidebar_position: 2
---

# Gateway 配置

Gateway 是 OpenClaw 的核心服务，负责处理所有请求。

## 基本配置

```json
{
  "gateway": {
    "port": 18789,
    "host": "0.0.0.0"
  }
}
```

## 启动命令

```bash
# 默认端口
openclaw gateway

# 指定端口
openclaw gateway --port 8080

# 指定配置目录
openclaw gateway --config /path/to/config
```

## 环境变量

```bash
export OC_PORT=18789
export OC_HOST=0.0.0.0
```

## 高级选项

```json
{
  "gateway": {
    "port": 18789,
    "host": "0.0.0.0",
    "cors": {
      "enabled": true,
      "origins": ["https://your-domain.com"]
    },
    "rateLimit": {
      "enabled": true,
      "maxRequests": 100,
      "windowMs": 60000
    }
  }
}
```

## 查看状态

```bash
openclaw gateway status
```
