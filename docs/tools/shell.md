---
sidebar_position: 3
---

# 终端命令工具

AI 可以执行终端命令。

## 启用

默认禁用，需手动启用：

```json
{
  "tools": {
    "shell": {
      "enabled": true,
      "allowedCommands": ["git", "npm", "node", "python"]
    }
  }
}
```

## 安全建议

1. **限制命令** - 只允许安全的命令
2. **限制目录** - 设置工作目录
3. **禁用危险命令** - 如 `rm -rf`

## 允许的命令示例

```json
{
  "tools": {
    "shell": {
      "enabled": true,
      "allowedCommands": [
        "git",
        "npm",
        "node",
        "python",
        "python3",
        "curl"
      ],
      "deniedCommands": [
        "rm -rf /",
        "dd",
        ":(){:|:&};:"
      ]
    }
  }
}
```

## 确认执行

危险命令需要确认：

```json
{
  "tools": {
    "shell": {
      "requireConfirmation": true
    }
  }
}
```
