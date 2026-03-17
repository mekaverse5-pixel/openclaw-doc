# 配置指南

本文档详细介绍 OpenClaw 的各项配置选项。

## 配置文件

OpenClaw 使用 `openclaw.yaml` 作为主配置文件：

```yaml
# openclaw.yaml 示例
version: "2026.1"

gateway:
  host: "0.0.0.0"
  port: 8080

telegram:
  botToken: "${TELEGRAM_BOT_TOKEN}"
  allowedUsers:
    - 123456789

plugins:
  enabled:
    - memos-local
    - skills
    - obsidian-sync

memory:
  provider: "memos-local"
  vectorModel: "local-embedding"
```

## 环境变量

| 变量 | 说明 | 必需 |
|------|------|------|
| `TELEGRAM_BOT_TOKEN` | Telegram Bot Token | 是 |
| `OPENCLAW_API_KEY` | API 密钥 | 否 |
| `MEMOS_URL` | Memos 服务地址 | 否 |

## 插件配置

### Skills 插件

```yaml
plugins:
  skills:
    enabled: true
    directory: "./skills"
    autoInstall: true
```

### Memory 插件

```yaml
plugins:
  memory:
    provider: "memos-local"
    model: "qwen3.5-2b"
```

## 安全设置

### 执行审批

```yaml
security:
  execApprovals:
    enabled: true
    approvers:
      - 123456789
```

---

## 下一步

- [工具使用](/tools) - 使用内置工具
- [API 参考](/api) - 开发接口
