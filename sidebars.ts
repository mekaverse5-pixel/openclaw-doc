import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 快速开始',
      collapsed: false,
      items: [
        'start/getting-started',
        'start/installation',
        'start/showcase',
      ],
    },
    {
      type: 'category',
      label: '💬 消息通道',
      items: [
        'channels/overview',
        'channels/telegram',
        'channels/discord',
        'channels/whatsapp',
        'channels/slack',
      ],
    },
    {
      type: 'category',
      label: '🤖 AI 模型',
      items: [
        'providers/overview',
        'providers/anthropic',
        'providers/openai',
        'providers/google',
        'providers/local',
      ],
    },
    {
      type: 'category',
      label: '⚙️ 配置指南',
      items: [
        'configuration/gateway',
        'configuration/tools',
        'configuration/security',
      ],
    },
    {
      type: 'category',
      label: '🔧 工具使用',
      items: [
        'tools/files',
        'tools/shell',
        'tools/browser',
        'tools/websearch',
      ],
    },
    {
      type: 'category',
      label: '📚 API 参考',
      items: [
        'api/overview',
      ],
    },
  ],
};

export default sidebars;
