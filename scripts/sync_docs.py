#!/usr/bin/env python3
"""
OpenClaw 文档同步脚本
自动抓取 docs.openclaw.ai 的文档内容
"""

import os
import re
import hashlib
import json
from pathlib import Path
from datetime import datetime

# 文档 URL 列表
DOCS_URLS = [
    "https://docs.openclaw.ai",
    "https://docs.openclaw.ai/install",
    "https://docs.openclaw.ai/channels",
    "https://docs.openclaw.ai/agents",
    "https://docs.openclaw.ai/tools",
    "https://docs.openclaw.ai/providers",
    "https://docs.openclaw.ai/platforms",
    "https://docs.openclaw.ai/gateway",
    "https://docs.openclaw.ai/cli",
    "https://docs.openclaw.ai/help",
    "https://docs.openclaw.ai/start/getting-started",
    "https://docs.openclaw.ai/start/onboarding-overview",
    "https://docs.openclaw.ai/start/wizard",
    "https://docs.openclaw.ai/start/onboarding",
    "https://docs.openclaw.ai/start/openclaw",
    "https://docs.openclaw.ai/gateway/configuration",
    "https://docs.openclaw.ai/gateway/remote",
    "https://docs.openclaw.ai/channels/telegram",
    "https://docs.openclaw.ai/nodes",
    "https://docs.openclaw.ai/concepts/features",
    "https://docs.openclaw.ai/gateway/security",
    "https://docs.openclaw.ai/gateway/troubleshooting",
]

# 指纹库文件
FINGERPRINT_FILE = ".doc_fingerprints.json"

def get_content_hash(content):
    """生成内容哈希"""
    return hashlib.sha256(content.encode('utf-8')).hexdigest()

def load_fingerprints():
    """加载指纹库"""
    if os.path.exists(FINGERPRINT_FILE):
        with open(FINGERPRINT_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_fingerprints(fingerprints):
    """保存指纹库"""
    with open(FINGERPRINT_FILE, 'w') as f:
        json.dump(fingerprints, f, indent=2)

def url_to_path(url):
    """URL 转换为文件路径"""
    # 移除域名和开头的 /
    path = url.replace("https://docs.openclaw.ai", "")
    if path == "":
        path = "/index"
    
    # 转换为文件路径
    if path.endswith("/"):
        path = path + "index"
    
    # 确保以 .md 结尾
    if not path.endswith(".md"):
        path = path + ".md"
    
    # 规范化路径
    path = path.replace("-", "_").replace("/", "_").strip("_")
    
    return f"docs/{path}.md"

def extract_title_and_content(html):
    """从 HTML 提取标题和内容"""
    # 简化实现 - 实际需要解析 HTML
    # 这里返回原始 HTML，实际使用 beautifulsoup4 解析
    return {
        "title": "Document",
        "content": html[:5000]  # 限制内容长度
    }

def sync_docs():
    """同步文档"""
    print("开始同步 OpenClaw 官方文档...")
    
    fingerprints = load_fingerprints()
    changes = []
    
    for url in DOCS_URLS:
        print(f"处理: {url}")
        
        # 实际抓取逻辑在这里
        # 使用 requests + beautifulsoup4
        # content = fetch_url(url)
        
        file_path = url_to_path(url)
        content_hash = get_content_hash(url)  # 简化示例
        
        if file_path not in fingerprints or fingerprints[file_path] != content_hash:
            changes.append({
                "url": url,
                "file": file_path,
                "action": "new" if file_path not in fingerprints else "updated"
            })
            fingerprints[file_path] = content_hash
    
    save_fingerprints(fingerprints)
    
    print(f"\n同步完成! 发现 {len(changes)} 处变更:")
    for change in changes:
        print(f"  [{change['action']}] {change['file']}")

if __name__ == "__main__":
    sync_docs()
