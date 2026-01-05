<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { VApp, VMain } from "vuetify/components";
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const i18n = useI18n();

const props = defineProps({
  themeName: { type: String, required: true },
  locale: { type: String, required: true },
});

watch(
  () => props.locale,
  (newLocale) => {
    i18n.setLocale(newLocale);
  },
  { immediate: true },
);
</script>

<style>
.docs-story {
  .v-application__wrap {
    min-height: fit-content;
  }
}
</style>
