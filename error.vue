<template>
  <v-app>
    <v-sheet class="ma-auto pa-5" border rounded="xl">
      <v-card-title class="text-h4">{{ getTitle() }}</v-card-title>
      <v-card-text class="text-h6">{{ getDescription() }}</v-card-text>
    </v-sheet>
  </v-app>
</template>

<script setup lang="ts">
import { H3Error } from "h3";

const i18n = useI18n();

const props = defineProps({
  error: { type: H3Error, default: null },
});

useHead({
  title: getTitle(),
});

onMounted(() => {
  console.error(props.error.message);
});

/**
 * Returns the title of the error message
 */
function getTitle(): string {
  const key = "error." + props.error.statusCode + ".title";

  return i18n.te(key)
    ? i18n.t(key)
    : i18n.t("error.title", { error: props.error.statusCode });
}

/**
 * Returns the description of the error message
 */
function getDescription(): string {
  const key = "error." + props.error.statusCode + ".description";

  return i18n.te(key)
    ? i18n.t(key)
    : i18n.t("error.description", { error: props.error.statusCode });
}
</script>

<style lang="scss">
@use "assets/style/main";
</style>
