import { defineNuxtConfig } from "nuxt3";

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
  buildModules: [
    [
      "@intlify/nuxt3",
      {
        localeDir: "locales", // set the `locales` directory at source directory of your Nuxt application
        vueI18n: {
          locale: process.env.VUE_APP_I18N_LOCALE || "en",
          fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
        },
      },
    ],
  ],
});
