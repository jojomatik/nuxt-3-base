import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import "@fontsource/roboto";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#E1E1E1",
            text: "#000000",
            secondary: "#004c6d",
            accent: "#037a7a",
            background: "#FFF",
            surface: "#FFF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
          variables: {},
        },
        dark: {
          dark: true,
          colors: {
            primary: "#1E1E1E",
            text: "#FFFFFF",
            secondary: "#0074a5",
            accent: "#039e9e",
            background: "#000",
            surface: "#000",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
          variables: {},
        },
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    ssr: true,
  });

  app.vueApp.use(vuetify);
});
