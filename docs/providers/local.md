---
sidebar_position: 5
---

# 本地模型配置

使用 LM Studio 在本地运行模型，保护隐私。

## 安装 LM Studio

从 [lmstudio.ai](https://lmstudio.ai/) 下载安装。

## 配置步骤

### 步骤 1：下载模型

在 LM Studio 中搜索并下载喜欢的模型，推荐：
- Qwen2.5-Coder
- Llama 3
- Phi-3

### 步骤 2：启动本地服务器

在 LM Studio 中：
1. 选择模型
2. 点击 **Start Server**
3. 默认地址：`http://localhost:1234/v1`

### 步骤 3：配置 OpenClaw

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

## 注意事项

- 需要 GPU 才能流畅运行大模型
- 模型文件通常几 GB 到几十 GB
- 首次使用需要下载模型
