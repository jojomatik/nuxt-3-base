import type { StorybookConfig } from "@nuxtjs/storybook";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  core: {
    disableTelemetry: true,
  },
  framework: "@storybook-vue/nuxt",
};

export default config;
