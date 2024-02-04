import { setup } from "@storybook/vue3";
import "vuetify/lib/styles/main.css";
import "@fontsource/roboto/400.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import {
  createI18n,
  type DefaultLocaleMessageSchema,
  type LocaleMessages,
} from "vue-i18n";
import { addons } from "@storybook/preview-api";
import { h } from "vue";
import options from "../vuetify-options";
import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";
import { themeLocaleModes } from "./modes";

function loadLocaleMessages(): LocaleMessages<DefaultLocaleMessageSchema> {
  const locales = import.meta.glob("../locales/*.json", {
    as: "raw",
    eager: true,
  });

  const messages: LocaleMessages<DefaultLocaleMessageSchema> = {};

  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = JSON.parse(locales[path]);
    }
  }
  return messages;
}

const i18n = createI18n({
  legacy: false,
  messages: loadLocaleMessages(),
});

setup((app) => {
  app.use(createVuetify({ ...options, components }));
  app.use(i18n);
});

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", icon: "circlehollow" },
        { value: "dark", title: "Dark", icon: "circle" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  viewport: {
    viewports: {
      mobile: { name: "Mobile", styles: { width: "360px", height: "720px" } },
      tablet: { name: "Tablet", styles: { width: "1024px", height: "768px" } },
      desktop: {
        name: "Desktop",
        styles: { width: "1920px", height: "1080px" },
      },
    },
  },
  chromatic: {
    modes: themeLocaleModes,
  },
};

export const globals = {
  locales: {
    en: "English",
    de: "Deutsch",
  },
};

const DEFAULT_LOCALE = "en";

const withLocale = (
  storyFn: () => any,
  context: { globals: { locale: string }; args: {} },
) => {
  i18n.global.locale.value = context.globals.locale || DEFAULT_LOCALE;

  return () => {
    return h(storyFn(), { ...context.args });
  };
};

export const decorators = [withVuetifyTheme, withLocale];

addons.getChannel().on("LOCALE_CHANGED", (newLocale) => {
  i18n.global.locale.value = newLocale;
});
