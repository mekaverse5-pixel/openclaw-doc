---
sidebar_position: 5
---

# 工具使用

OpenClaw 提供丰富的内置工具。

## 内置工具

### 🔍 网络搜索

让 AI 能够搜索互联网信息。

### 📂 文件操作

- 读取文件
- 写入文件
- 列出目录

### 🖥️ 终端命令

执行 shell 命令。

### 🌐 浏览器自动化

控制浏览器进行操作。

## 工具配置

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
      "enabled": true,
      "allowedCommands": ["git", "npm", "node"]
    }
  }
}
```

## 安全建议

1. **最小权限原则** - 只启用必要的工具
2. **限制范围** - 设置文件访问边界
3. **启用审计** - 记录所有工具调用
