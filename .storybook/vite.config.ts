import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue", "vue-router"],
      dirs: ["./composables"],
      vueTemplate: true,
    }),
    Components({
      dirs: [
        "./components/",
        // Component folders that should be auto-imported
      ],
      dts: true,
      directoryAsNamespace: true,
    }),
  ],
});
