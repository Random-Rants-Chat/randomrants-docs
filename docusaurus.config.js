/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Random Rants Docs",
  url: "https://random-rants-chat.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "Random Rants",
  projectName: "docs",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Random Rants Docs",
      items: [
        {
          href: "https://randomrants-plus.onrender.com/",
          label: "Random Rants +",
          position: "left",
        },
        {
          href: "/about",
          label: "About",
          position: "left",
        },
        {
          href: "https://github.com/random-rants-chat",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    /*prism: {
        theme: require('./code-themes/light'),
        darkTheme: require('./code-themes/dark'),
      },*/
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          breadcrumbs: false,
        },
        /*theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },*/
      },
    ],
  ],
};
