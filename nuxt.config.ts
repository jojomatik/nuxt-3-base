import { defineNuxtConfig } from "nuxt";

import fs from "fs";
const locales = fs.readdirSync("locales").map((file) => {
  return { code: file.replace(".json", ""), file: file };
});

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
  },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: locales,
        defaultLocale: "en",
        langDir: "locales", // set the `locales` directory at source directory of your Nuxt application
        vueI18n: {
          locale: process.env.VUE_APP_I18N_LOCALE || "en",
          fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
        },
      },
    ],
  ],
});
