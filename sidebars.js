module.exports = {
  sidebar: [
    "intro",
    "about",
    {
      type: "category",
      label: "Compiling & Running",
      collapsed: true,
      items: ["compiling/original"],
    },
    {
      type: "category",
      label: "Old sites",
      collapsed: true,
      items: ["sites/gvbvdxxchat", "sites/macreschat", "sites/randomrants"],
    },
    {
      type: "category",
      label: "Message Commands",
      collapsed: true,
      items: ["commands/command_index", "commands/help"],
    },
  ],
};
