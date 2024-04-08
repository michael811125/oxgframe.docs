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
  baseUrl: '/build/',

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
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-cn',
      },
      en: {
        htmlLang: 'en-us',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
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
          alt: 'My Site Logo',
          src: 'img/oxgframe_logo_v2.png',
        },
        items: [
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
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'TVWYJQXF42',

        // Public API key: it is safe to commit it
        apiKey: '9592d1a88af12dcad7835b9cb4c991cf',

        indexName: 'oxgframe',

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
