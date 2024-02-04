type Viewport = "mobile" | "tablet" | "desktop";
type Theme = "dark" | "light";
type Locale = "en" | "de";

const viewports: Viewport[] = ["mobile", "tablet", "desktop"];
const themes: Theme[] = ["dark", "light"];
const locales: Locale[] = ["en", "de"];

/**
 * All modes with different viewports
 */
export const allModes: { viewport: Viewport; theme: Theme; locale: Locale }[] =
  [];

/**
 * Modes for different themes and locales
 */
export const themeLocaleModes: { theme: Theme; locale: Locale }[] = [];

for (const theme of themes) {
  for (const locale of locales) {
    themeLocaleModes.push({ theme, locale });
    for (const viewport of viewports) {
      allModes.push({ viewport, theme, locale });
    }
  }
}
