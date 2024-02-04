type Viewport = "mobile" | "tablet" | "desktop";
type Theme = "light" | "dark";
type Locale = "en" | "de";

const viewports: Viewport[] = ["mobile", "tablet", "desktop"];
const themes: Theme[] = ["light", "dark"];
const locales: Locale[] = ["en", "de"];

/**
 * All modes with different viewports
 */
export const allModes: Record<
  string,
  { viewport: Viewport; theme: Theme; locale: Locale }
> = {};

/**
 * Modes for different themes and locales
 */
export const themeLocaleModes: Record<
  string,
  { theme: Theme; locale: Locale }
> = {};

let i = 1;
let j = 1;

for (const theme of themes) {
  for (const locale of locales) {
    themeLocaleModes[i++ + "-" + theme + "-" + locale] = { theme, locale };
    for (const viewport of viewports) {
      allModes[j++ + "-" + viewport + "-" + theme + "-" + locale] = {
        viewport,
        theme,
        locale,
      };
    }
  }
}
