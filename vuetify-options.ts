import type { VOptions } from "vuetify-nuxt-module";

const vuetifyOptions: VOptions = {
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#004c6d",
          "primary-darken-1": "#3700B3",
          secondary: "#037a7a",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-variant": "#BDBDBD",
          "on-surface-variant": "#424242",
          primary: "#0074a5",
          secondary: "#039e9e",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
};

export default vuetifyOptions;
