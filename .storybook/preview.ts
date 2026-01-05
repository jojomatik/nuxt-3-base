import "@fontsource/roboto/400.css";

import themeLocaleDecorator, {
  DEFAULT_THEME,
} from "./theme-locale-decorator.decorator";
import { themeLocaleModes } from "./modes";
import type { Preview } from "@nuxtjs/storybook";

const preview: Preview = {
  initialGlobals: {
    locale: "en",
    theme: DEFAULT_THEME,
  },
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "de", title: "Deutsch" },
        ],
      },
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
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
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    viewport: {
      viewports: {
        mobile: { name: "Mobile", styles: { width: "360px", height: "720px" } },
        tablet: {
          name: "Tablet",
          styles: { width: "1024px", height: "768px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1920px", height: "1080px" },
        },
      },
    },
    chromatic: {
      modes: themeLocaleModes,
    },
  },
  decorators: [themeLocaleDecorator],
  tags: ["autodocs"],
};

export default preview;
