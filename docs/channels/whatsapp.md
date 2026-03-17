---
sidebar_position: 4
---

# WhatsApp 配置

WhatsApp 需要手机保持在线才能使用。

## 配置步骤

### 步骤 1：登录 WhatsApp

```bash
openclaw channels login whatsapp
```

### 步骤 2：扫描二维码

1. 打开 WhatsApp
2. 设置 → 已连接的设备 → 链接桌面设备
3. 用手机扫描终端显示的二维码

### 步骤 3：配置访问权限

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+1234567890"]
    }
  }
}
```

## 注意事项

- ⚠️ 保持手机在线才能使用
- 会话可能在手机断开时结束
- 建议保持 WhatsApp 后台运行
