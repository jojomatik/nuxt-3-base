module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": "true",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "storybook/no-uninstalled-addons": [
      "error",
      {
        packageJsonLocation: "node_modules/@jojomatik/nuxt-bundle/package.json",
      },
    ],
    "prettier/prettier": ["error", { endOfLine: "off" }],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
