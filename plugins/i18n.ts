import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n";

import en from "../locales/en.json";
import de from "../locales/de.json";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages: {
    en,
    de,
  },
});

export const t = i18n.global.t;

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n);
});
