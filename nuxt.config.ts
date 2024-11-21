import { getLocales } from "@jojomatik/nuxt-bundle";

export default defineNuxtConfig({
  extends: "@jojomatik/nuxt-bundle",
  app: {
    head: {
      titleTemplate: "%s - nuxt-3-base"
    }
  },
  i18n: {
    locales: getLocales(),
    defaultLocale: "en",
    langDir: "locales"
  },
  modules: ["nuxt-vue3-google-signin", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID
  },
  css: ["~/assets/style/main.scss"]
});
