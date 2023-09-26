import { setup } from "@storybook/vue3";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import options from "../vuetify-options";
import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";

setup((app) => {
  app.use(createVuetify({ ...options, components }));
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
