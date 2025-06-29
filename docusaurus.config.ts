import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Carrycaro',
  tagline: 'Carrycaro',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'master',
  // Set the production url of your site here
  url: 'https://app.carrycaro.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AbdurRehman26', // Usually your GitHub org/user name.
  projectName: 'carrycaro-landing', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          includeCurrentVersion: true,
        },
        blog: {
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Carrycaro',
      logo: {
        alt: 'Carrycaro Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.facebook.com/groups/1258084189005838',
          position: 'right',
          className: 'header-fb-link',
        },
        {
          href: 'https://youtube.com/@carrycaro-app',
          position: 'right',
          className: 'header-youtube-link',
        },
        {
          href: 'https://x.com/carrycaro',
          position: 'right',
          className: 'header-x-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright ©️ ${new Date().getFullYear()} Carrycaro.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plugins: [
      ['./src/plugins/tailwind-config.js', {}],
    ]
  } satisfies Preset.ThemeConfig,
};

export default config;