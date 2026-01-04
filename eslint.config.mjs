import withNuxt from "./.nuxt/eslint.config.mjs";
import storybook from "eslint-plugin-storybook";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt([
  eslintPluginPrettierRecommended,
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["!.storybook"],
    rules: {
      "storybook/no-uninstalled-addons": [
        "error",
        {
          packageJsonLocation:
            "./node_modules/@jojomatik/nuxt-bundle/package.json",
        },
      ],
    },
  },
  {
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  },
  {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
  },
]);
