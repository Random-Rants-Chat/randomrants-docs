/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Random Rants Documentation",
  url: "https://random-rants-chat.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "Random Rants",
  projectName: "docs",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Random Rants Documentation",
      items: [
        {
          href: "https://randomrants-plus.onrender.com/about",
          label: "About",
          position: "left",
        },
        {
          href: "https://randomrants-plus.onrender.com/about",
          label: "Random Rants +",
          position: "left",
        },
        {
          href: "https://github.com/random-rants-chat",
          label: "GitHub",
          position: "left",
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
