import * as fs from "fs";

/**
 * Returns all locales with their corresponding file names from `./locales`.
 */
function getLocales(): { code: string; file: string }[] {
  const files = fs.readdirSync("./locales");

  return files.map((file) => {
    return {
      code: file.split(".")[0],
      file,
    };
  });
}

export default defineNuxtConfig({
  extends: "@jojomatik/nuxt-bundle",
  app: {
    head: {
      titleTemplate: "%s - nuxt-3-base",
    },
  },
  i18n: {
    locales: getLocales(),
    defaultLocale: "en",
    langDir: "locales",
  },
});
