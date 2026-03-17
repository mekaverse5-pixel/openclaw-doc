# 工具使用

OpenClaw 提供了丰富的内置工具，让 AI 助手能够执行各种任务。

## 内置工具

### 🔍 网络搜索

让 AI 能够搜索互联网信息。

```bash
# 无需配置，自动启用
```

**用途**：
- 查询最新资讯
- 获取实时数据
- 解决技术问题

---

### 📂 文件操作

AI 可以读取和操作本地文件。

**可用操作**：
- 读取文件内容
- 写入/创建新文件
- 列出目录内容
- 创建目录

**安全限制**：
- 只能访问配置的工作目录
- 无法删除系统文件

---

### 🖥️ 终端命令

AI 可以执行终端命令。

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

**安全建议**：
- 只允许安全的命令
- 限制根目录访问
- 启用命令审计

---

### 📝 代码执行

运行代码并返回结果。

**支持语言**：
- Python
- JavaScript
- Bash

```python
# 示例：计算
result = 2 + 2
print(result)  # 输出: 4
```

---

### 🌐 浏览器自动化

AI 可以控制浏览器进行操作。

**功能**：
- 打开网页
- 截图
- 填写表单
- 点击元素

```bash
# 启用浏览器工具
openclaw config set tools.browser.enabled true
```

---

## 工具配置

### 启用/禁用工具

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

### 设置工作目录

```json
{
  "tools": {
    "files": {
      "workspace": "/Users/username/workspace"
    }
  }
}
```

---

## 自定义工具

### 添加自定义工具

创建自定义工具脚本：

```bash
# 创建工具目录
mkdir -p ~/.openclaw/tools/mytool
```

编写工具脚本：

```python
#!/usr/bin/env python3
import json
import sys

def main():
    data = json.loads(sys.stdin.read())
    # 处理请求
    result = {"status": "success", "data": "..."}
    print(json.dumps(result))

if __name__ == "__main__":
    main()
```

注册工具：

```bash
openclaw tools register mytool
```

---

## 工具权限

### 用户级别权限

为不同用户设置不同工具权限：

```json
{
  "channels": {
    "telegram": {
      "userPermissions": {
        "123456789": {
          "tools": ["websearch", "files"]
        }
      }
    }
  }
}
```

### 敏感操作确认

对于危险操作，需要用户确认：

```json
{
  "tools": {
    "shell": {
      "requireConfirmation": true
    },
    "files": {
      "delete": {
        "requireConfirmation": true
      }
    }
  }
}
```

---

## 工具日志

### 查看工具使用记录

```bash
# 查看最近的工具调用
openclaw logs tools --limit 50
```

### 审计日志

工具调用会记录到日志文件：

```bash
# 实时查看日志
tail -f ~/.openclaw/logs/openclaw.log
```

---

## 最佳实践

1. **最小权限原则**：只启用必要的工具
2. **定期审查**：检查工具使用日志
3. **限制范围**：设置文件访问边界
4. **启用审计**：记录所有工具调用
5. **保持更新**：及时更新工具版本
