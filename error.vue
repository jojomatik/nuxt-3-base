<template>
  <v-app>
    <v-card class="ma-auto">
      <v-card-title>{{ title() }}</v-card-title>
      <v-card-text>{{ description() }}</v-card-text>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import { H3Error } from "h3";

const i18n = useI18n();

const props = defineProps({
  error: { type: H3Error, default: null },
});

useHead({
  title: title(),
});

/**
 * Returns the title of the error message
 */
function title(): string {
  const key = "error." + props.error.statusCode + ".title";

  return i18n.te(key)
    ? i18n.t(key)
    : i18n.t("error.title", { error: props.error.statusCode });
}

/**
 * Returns the description of the error message
 */
function description(): string {
  const key = "error." + props.error.statusCode + ".description";

  return i18n.te(key)
    ? i18n.t(key)
    : i18n.t("error.description", { error: props.error.statusCode });
}
</script>

<style lang="scss">
@use "assets/main";
</style>
