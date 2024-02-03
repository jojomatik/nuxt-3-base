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
import options from "../vuetify-options";
import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";

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

setup((app) => {
  app.use(createVuetify({ ...options, components }));
  app.use(
    createI18n({
      legacy: false,
      locale: "en",
      messages: loadLocaleMessages(),
    }),
  );
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
        { value: "side-by-side", title: "Side by Side", icon: "sidebar" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const decorators = [withVuetifyTheme];
