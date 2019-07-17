module.exports = {
  title: "JavaScript",
  description: "🚀 精通 JavaScript",
  base: "/notebook-js/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    repo: "Jolylai/notebook",
    nav: require("./nav/zh"),
    sidebar: require("./siderbar/index"),
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
