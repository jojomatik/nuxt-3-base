import * as fs from "fs";
import chalk from "chalk";
import vuetify from "vite-plugin-vuetify";
import license from "rollup-plugin-license";

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

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - nuxt-3-base",
      link: [
        {
          as: "font",
          rel: "preload",
          href: "/assets/fonts/roboto/files/roboto-latin-400-normal.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "/assets/fonts/roboto/index.css",
        },
      ],
    },
  },
  css: ["vuetify/styles"],
  modules: ["@nuxtjs/i18n"],
  hooks: {
    "nitro:build:before": () => {
      const fontsDir = "public/assets/fonts/";

      fs.cpSync("node_modules/@fontsource/", fontsDir, {
        recursive: true,
      });
      console.log(chalk.green("√"), "Copied fonts");
    },
  },
  i18n: {
    locales: getLocales(),
    defaultLocale: "en",
    langDir: "locales",
  },
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
    ssr: {
      noExternal: ["vuetify"],
    },
    plugins: [
      vuetify(),
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
  nitro: {
    compressPublicAssets: true,
  },
});
