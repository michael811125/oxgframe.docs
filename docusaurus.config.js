// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const translateTexts = [
  {
    desc: "doc label",
    text: "文檔"
  },
  {
    desc: "blog label",
    text: "博客"
  }
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OxGFrame',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/oxgframe_logo_v2.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/build/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hans', 'zh-Hant', 'en'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-cn', // 簡體中文
      },
      'zh-Hant': {
        htmlLang: 'zh-tw', // 繁體中文
      },
      en: {
        htmlLang: 'en-us', // 英文
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v3',
            },
            v2: {
              label: 'v2 (Deprecated)',
            },
          }
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OxGFrame',
        logo: {
          alt: 'OxGFrame Logo_v2',
          src: 'img/oxgframe_logo_v2.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: translateTexts[0].text,
          },
          {
            to: '/blog',
            label: translateTexts[1].text,
            position: 'left'
          },
          {
            href: 'https://github.com/michael811125/OxGFrame',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: translateTexts[0].text,
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'FlappyBird with OxGFrame',
                href: 'https://github.com/michael811125/FlappyBird_OxGFrame',
              },
              {
                label: 'OxGKit',
                href: 'https://github.com/michael811125/OxGKit',
              },
              {
                label: 'LWMyBox',
                href: 'https://github.com/michael811125/LWMyBox',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/jyJmWhRAv7',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: translateTexts[1].text,
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/michael811125/OxGFrame',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/michael811125">MichaelO</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'cpp'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'GBB2CENIEL',

        // Public API key: it is safe to commit it
        apiKey: '14a679ebe0a2b400c1b24c05b05a187c',

        indexName: 'oxgframe-ouhiyo',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),

  // Custom scripts
  // scripts: [
  //   {
  //     src: './js/global.js',
  //     async: true,
  //   },
  // ],
};

export default config;
