const path = require("path")

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: async (config) => {
    // `@`でのインポート
    config.resolve.alias['@'] = path.resolve(__dirname, "..");
    return config
  },
}