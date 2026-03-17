---
sidebar_position: 4
---

# 安全配置

OpenClaw 提供多层次的安全控制。

## 访问控制

### 白名单模式

```json
{
  "security": {
    "mode": "whitelist",
    "allowFrom": ["USER_ID_1", "USER_ID_2"]
  }
}
```

### 黑名单模式

```json
{
  "security": {
    "mode": "blacklist",
    "denyFrom": ["USER_ID_1"]
  }
}
```

## 通道特定权限

```json
{
  "channels": {
    "telegram": {
      "allowFrom": ["123456789"],
      "tools": {
        "files": {
          "enabled": true,
          "allowedPaths": ["/workspace"]
        },
        "shell": {
          "enabled": false
        }
      }
    }
  }
}
```

## 用户级别权限

为不同用户设置不同权限：

```json
{
  "users": {
    "123456789": {
      "name": "Admin",
      "role": "admin",
      "tools": ["*"]
    },
    "987654321": {
      "name": "User",
      "role": "user",
      "tools": ["websearch", "files"]
    }
  }
}
```

## 敏感操作确认

对于危险操作需要确认：

```json
{
  "security": {
    "confirmCommands": [
      "rm",
      "del",
      "format"
    ]
  }
}
```

## 审计日志

记录所有操作：

```json
{
  "security": {
    "auditLog": {
      "enabled": true,
      "path": "~/.openclaw/logs/audit.log"
    }
  }
}
```
