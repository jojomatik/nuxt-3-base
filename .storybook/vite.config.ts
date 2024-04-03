import path from "path";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-i18n", "vue-router"],
      dirs: ["./composables"],
      vueTemplate: true,
      dts: ".storybook/imports.d.ts",
    }),
  ],
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "..") }],
  },
});
