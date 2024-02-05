import { getLocales } from "@jojomatik/nuxt-bundle";

export default defineNuxtConfig({
  extends: "@jojomatik/nuxt-bundle",
  app: {
    head: {
      titleTemplate: "%s - nuxt-3-base",
    },
  },
  i18n: {
    locales: getLocales(),
    defaultLocale: "en",
    langDir: "locales",
  },
});
