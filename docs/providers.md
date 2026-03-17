# AI 模型配置

OpenClaw 支持多种 AI 模型提供商，你可以根据需求选择合适的模型。

## 支持的模型提供商

| 提供商 | 状态 | 说明 |
|--------|------|------|
| Anthropic (Claude) | ✅ | 推荐用于编程 |
| OpenAI (GPT) | ✅ | 通用能力强 |
| Google (Gemini) | ✅ | 多模态支持 |
| MiniMax | ✅ | 中文优化 |
| 本地模型 (LM Studio) | ✅ | 隐私保护 |

---

## Anthropic Claude 配置

### 获取 API Key

1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 登录账户
3. 点击 "API Keys" → "Create Key"
4. 复制 API Key

### 配置 OpenClaw

```bash
# 设置 API Key
openclaw config set providers.anthropic.apiKey YOUR_API_KEY
```

或编辑配置文件：

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-api03-...",
      "model": "claude-3-opus-20240229"
    }
  }
}
```

### 推荐模型

| 模型 | 用途 | 价格 |
|------|------|------|
| Claude 3.5 Sonnet | 日常编程首选 | $3/百万输入 |
| Claude 3 Opus | 复杂任务 | $15/百万输入 |
| Claude 3 Haiku | 快速响应 | $0.25/百万输入 |

---

## OpenAI GPT 配置

### 获取 API Key

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 登录账户
3. 进入 "API Keys"
4. 创建新密钥

### 配置 OpenClaw

```bash
openclaw config set providers.openai.apiKey YOUR_API_KEY
```

配置示例：

```json
{
  "providers": {
    "openai": {
      "apiKey": "sk-...",
      "model": "gpt-4-turbo"
    }
  }
}
```

### 推荐模型

| 模型 | 用途 | 价格 |
|------|------|------|
| GPT-4o | 多模态首选 | $5/百万输入 |
| GPT-4 Turbo | 编程推荐 | $10/百万输入 |
| GPT-3.5 Turbo | 快速响应 | $0.5/百万输入 |

---

## MiniMax 配置（中文优化）

### 获取 API Key

1. 访问 [MiniMax Platform](https://platform.minimaxi.com/)
2. 注册账户
3. 创建 API Key

### 配置 OpenClaw

```json
{
  "providers": {
    "minimax": {
      "apiKey": "YOUR_API_KEY",
      "model": "MiniMax-M2.5"
    }
  }
}
```

**优势**：
- 中文能力优秀
- 免费额度充足
- 响应速度快

---

## 本地模型配置（LM Studio）

如果你想使用本地模型，可以使用 LM Studio。

### 步骤 1：安装 LM Studio

从 [lmstudio.ai](https://lmstudio.ai/) 下载安装。

### 步骤 2：下载模型

在 LM Studio 中搜索并下载喜欢的模型，推荐：
- Qwen2.5-Coder
- Llama 3
- Phi-3

### 步骤 3：启动本地服务器

在 LM Studio 中：
1. 选择模型
2. 点击 "Start Server"
3. 默认地址：`http://localhost:1234/v1`

### 步骤 4：配置 OpenClaw

```json
{
  "providers": {
    "local": {
      "baseUrl": "http://localhost:1234/v1",
      "model": "local-model-name"
    }
  }
}
```

---

## 多模型配置

可以同时配置多个模型，根据任务自动选择：

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "...",
      "model": "claude-3-5-sonnet-20241022"
    },
    "openai": {
      "apiKey": "...",
      "model": "gpt-4o"
    },
    "minimax": {
      "apiKey": "..."
    }
  },
  "defaultModel": "anthropic"
}
```

### 模型优先级

设置默认使用的模型：

```bash
openclaw config set defaultModel anthropic
```

---

## 费用管理

### 查看使用量

```bash
openclaw stats
```

### 设置预算限制

```json
{
  "limits": {
    "dailySpend": 10,
    "monthlySpend": 100
  }
}
```

### 成本优化建议

1. **日常任务**：使用 Haiku 或 MiniMax
2. **编程任务**：使用 Claude 3.5 Sonnet
3. **复杂推理**：使用 GPT-4 或 Claude 3 Opus
