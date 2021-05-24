/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Moldy Community',
  tagline: 'The best project starter of the world',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Moldy-Community', // Usually your GitHub org/user name.
  projectName: 'CLI', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Moldy Community',
      logo: {
        alt: 'Moldy Community Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation 🤓',
        },
        {to: '/blog', label: 'Blog 😃', position: 'left'},
        {
          href: 'https://github.com/Moldy-Community/',
          label: 'GitHub 🐙',
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
              label: 'Tutorial',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community 💬',
          items: [
            {
              label: 'Discord 🛰️',
              href: 'https://discord.gg/2uwzhmJdfw',
            },
            {
              label: 'Twitter 🐦',
              href: 'https://twitter.com/CommunityMoldy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog 😃',
              to: '/blog',
            },
            {
              label: 'GitHub 🐙',
              href: 'https://github.com/Moldy-Community',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Moldy Community, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Moldy-Community/Book/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Moldy-Community/Book/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  url: 'https://moldybook.netlify.app', // Your website URL
  baseUrl: '/',
};
