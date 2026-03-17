---
sidebar_position: 3
---

# 工具配置

OpenClaw 提供丰富的内置工具，让 AI 能够执行各种操作。

## 启用/禁用工具

```json
{
  "tools": {
    "websearch": {
      "enabled": true
    },
    "files": {
      "enabled": true,
      "allowedPaths": ["/Users/username/projects"]
    },
    "shell": {
      "enabled": false
    }
  }
}
```

## 工具列表

| 工具 | 说明 | 默认 |
|------|------|------|
| websearch | 网络搜索 | 启用 |
| files | 文件操作 | 启用 |
| shell | 终端命令 | 禁用 |
| browser | 浏览器自动化 | 禁用 |

## 文件访问限制

```json
{
  "tools": {
    "files": {
      "enabled": true,
      "allowedPaths": [
        "/Users/username/workspace",
        "/Users/username/projects"
      ],
      "deniedPaths": [
        "/Users/username/.ssh",
        "/Users/username/.aws"
      ]
    }
  }
}
```

## 终端命令限制

```json
{
  "tools": {
    "shell": {
      "enabled": true,
      "allowedCommands": [
        "git",
        "npm",
        "node",
        "python"
      ],
      "deniedCommands": [
        "rm -rf /",
        "curl | sh"
      ]
    }
  }
}
```
