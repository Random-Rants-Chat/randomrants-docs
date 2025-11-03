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
    prism: {
      theme: require("prism-react-renderer").themes.dracula,
      darkTheme: require("prism-react-renderer").themes.dracula,
      // Add your language here
      additionalLanguages: ["javascript"],
    },
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
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/theme/prism.js")],
};
