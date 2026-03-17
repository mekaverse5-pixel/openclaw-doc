# 工具使用

OpenClaw 提供多种内置工具，扩展 AI 能力。

## 可用工具

| 工具 | 功能 | 使用场景 |
|------|------|----------|
| **Browser** | 网页浏览 | 获取网页内容、截图 |
| **Exec** | 命令执行 | 运行 Shell 命令 |
| **Skills** | 技能系统 | 扩展 AI 能力 |
| **Memory** | 记忆系统 | 存储和检索信息 |

## Browser 工具

### 导航

```python
# 打开网页
browser.navigate("https://example.com")

# 获取页面内容
content = browser.get_content()
```

### 交互

```python
# 点击按钮
browser.click("#submit-button")

# 输入文字
browser.type("#search-input", "关键词")
```

## Exec 工具

### 执行命令

```bash
# 执行 Shell 命令
openclaw exec "ls -la"

# 执行 Python
openclaw exec "python3 script.py"
```

## Skills 工具

### 安装 Skill

```bash
openclaw skill install <skill-name>
```

### 使用 Skill

安装后的技能会自动出现在对话上下文中。

---

## 下一步

- [API 参考](/api) - 开发接口
