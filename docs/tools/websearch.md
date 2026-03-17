---
sidebar_position: 5
---

# 网络搜索工具

让 AI 能够搜索互联网信息。

## 启用

默认启用，无需配置：

```json
{
  "tools": {
    "websearch": {
      "enabled": true
    }
  }
}
```

## 使用方式

直接告诉 AI 你想搜索的内容：

```
搜索最新的 BTC 价格
查找 OpenClaw 的使用方法
搜索 Python 教程
```

## 配置

可以配置搜索提供商：

```json
{
  "tools": {
    "websearch": {
      "enabled": true,
      "provider": "brave",
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

## 搜索引擎

- Brave Search（推荐）
- Google
- Bing

## 用途

- 查询最新资讯
- 获取实时数据
- 解决技术问题
- 学习新知识
