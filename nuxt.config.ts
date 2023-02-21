import license from "rollup-plugin-license";
import * as fs from "fs";

/**
 * Returns all locales with their corresponding file names from `./locales`.
 */
function getLocales(): { code: string; file: string }[] {
  const files = fs.readdirSync("./locales");

  return files.map((file) => {
    return { code: file.split(".")[0], file: file };
  });
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: getLocales(),
    defaultLocale: "en",
    langDir: "locales",
    vueI18n: {
      legacy: false,
      globalInjection: true,
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
    plugins: [
      license({
        thirdParty: {
          includePrivate: false,
          allow: {
            test: (dependency) => {
              // Return false for unlicensed dependencies.
              if (!dependency.license) return false;

              // Special case for `@nuxt/ui-templates` which publishes design resources under `CC-BY-ND-4.0`.
              if (
                dependency.name === "@nuxt/ui-templates" &&
                dependency.license === "CC-BY-ND-4.0"
              )
                return true;

              // Allow MIT and Apache-2.0 licenses.
              return ["MIT", "Apache-2.0"].includes(dependency.license);
            },
            failOnUnlicensed: true,
            failOnViolation: true,
          },
          output: {
            // Output file into public directory which is included in the build output.
            file: "public/dependencies.json",
            template(dependencies) {
              return JSON.stringify(dependencies);
            },
          },
        },
      }),
    ],
  },
});
