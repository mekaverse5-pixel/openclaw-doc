import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenClaw 中文文档',
  tagline: '开源 AI 助手框架',
  favicon: 'img/favicon.ico',

  url: 'https://openclaw-doc.vercel.app',
  baseUrl: '/',

  organizationName: 'mekaverse5-pixel',
  projectName: 'openclaw-doc',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/mekaverse5-pixel/openclaw-doc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/openclaw-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenClaw 中文文档',
      logo: {
        alt: 'OpenClaw Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/openclaw/openclaw',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.com/invite/clawd',
          label: '社区',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',
            },
            {
              label: '安装指南',
              to: '/docs/install',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/clawd',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openclaw/openclaw',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenClaw. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
