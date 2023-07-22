import { createVuetify } from "vuetify";
import options from "~/vuetify-options";

export default defineNuxtPlugin((app) => {
  app.vueApp.use(createVuetify(options));
});
