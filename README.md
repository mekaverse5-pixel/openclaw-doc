# OpenClaw 中文文档

OpenClaw 中文配置指南网站，基于 Mintlify 构建。

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动本地服务器
npm start
```

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project)

## 项目结构

```
openclaw-docs/
├── docs/                  # 文档目录
│   ├── getting-started.md
│   ├── configuration.md
│   ├── tools.md
│   └── api.md
├── mint.json              # Mintlify 配置
└── README.md
```

## 自动同步

本项目使用 GitHub Actions 自动同步官方文档：

- 定时任务：每天 0 点
- 手动触发：在 Actions 页面点击 "Run workflow"

## 许可证

MIT License
