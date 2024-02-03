import path from "path";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue", "vue-i18n", "vue-router"],
      dirs: ["./composables"],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "..") }],
  },
});
