import path from "path";
import type { StorybookConfig } from "@storybook/vue3-vite";
import { ConfigEnv, loadConfigFromFile, mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(baseConfig) {
    const loaded = await loadConfigFromFile(
      path.resolve(__dirname, "vite.config.ts") as unknown as ConfigEnv,
    );
    if (!loaded) return baseConfig;
    const userConfig = loaded.config;
    return mergeConfig(baseConfig, userConfig);
  },
};

export default config;
