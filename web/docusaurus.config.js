const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Wasp',
  tagline: 'A simple language for developing full-stack web apps with less code.',
  // url, baseUrl, organizationName, projectName and trailingSlash are set according to the
  // instructions in https://docusaurus.io/docs/deployment#deploying-to-github-pages .
  url: 'https://wasp-lang.dev',
  baseUrl: '/', // Should be name of repo if hosted on Github Pages, but can be just '/' if custom domain is used.
  organizationName: 'wasp-lang', // Should be GitHub org/user name if hosted on Github Pages.
  projectName: 'wasp', // Should be repo name if hosted on Github Pages.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
  ],
  themeConfig: {
    announcementBar: {
      id: 'Beta_is_here',
      content: 'Wasp Hackathon #1 is underway! 🚀 <a href="https://betathon.wasp-lang.dev/">Join now</a>',
      backgroundColor: '#eab307',
      textColor: '#fff',
      isCloseable: false,
    },
    navbar: {
      title: '.wasp (beta)',
      logo: {
        alt: 'Wasp logo',
        src: 'img/wasp-logo-eqpar-circle.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          className: 'navbar-item-docs navbar-item-outside'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/wasp-lang/wasp',
          className: 'navbar-item-github',
          position: 'right',
        },
        {
          href: 'https://twitter.com/WaspLang',
          className: 'navbar-item-twitter',
          position: 'right',
        },
        {
          href: 'https://discord.gg/rzdnErX',
          className: 'navbar-item-discord',
          position: 'right',
        },
      ],
    },
    prism: {
      additionalLanguages: ['shell-session', 'haskell']
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs'
            },
            {
              label: 'Todo app tutorial',
              to: 'docs/tutorials/todo-app'
            },
            {
              label: 'Reference',
              to: 'docs/language/features'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rzdnErX'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wasp-lang/wasp'
            },
            {
              label: 'Contact',
              to: 'docs/contact'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wasp.`,
    },
    algolia: {
      appId: 'RG0JSZOWH4',
      apiKey: 'feaa2a25dc596d40418c82cd040e2cbe',
      indexName: 'wasp-lang',
      // TODO: contextualSearch is useful when you are doing versioning,
      //   it searches only in v1 docs if you are searching from v1 docs.
      //   We should enable it if we start doing versioning.
      // contextualSearch: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-3ZEDH3BVGE',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wasp-lang/wasp/edit/main/web',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          editUrl:
            'https://github.com/wasp-lang/wasp/edit/main/web/blog',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ]
        },
      },
    ],
  ],
  scripts: [
    '/scripts/posthog.js',
    '/js/fix-multiple-trailing-slashes.js'
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
