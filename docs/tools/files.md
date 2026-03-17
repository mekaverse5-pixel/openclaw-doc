---
sidebar_position: 2
---

# 文件操作工具

AI 可以读取和操作本地文件。

## 功能

- 读取文件内容
- 写入/创建新文件
- 列出目录内容
- 创建/删除目录
- 复制/移动文件

## 使用示例

```
读取 /path/to/file.txt
写入 /path/to/newfile.md 内容：# Hello
列出 /path/to/directory
```

## 安全限制

只能访问配置的工作目录：

```json
{
  "tools": {
    "files": {
      "enabled": true,
      "allowedPaths": ["/Users/username/workspace"]
    }
  }
}
```

## 禁止的操作

- ❌ 删除系统文件
- ❌ 访问其他用户目录
- ❌ 修改配置文件（除非明确允许）
