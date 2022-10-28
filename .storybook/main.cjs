const { config } = require("@storybook/addon-actions");

module.exports = {
  "stories": [
    "../src/info/Developer.stories.tsx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "buildStoriesJson": true,
    "interactionsDebugger": true
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: (config, { configType }) => {
    // Solução provisória para exibir imagens corretamente no GitHub
    // if (configType == 'PRODUCTION') {
      config.base = '/design-system-react/'
    // }

    return config
  }
}