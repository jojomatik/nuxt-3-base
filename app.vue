<template>
  <v-app>
    <v-app-bar color="transparent" flat>
      <div class="flex-grow-1"></div>
      <v-btn
        :to="switchLocalePath(getNextLanguage())"
        :icon="mdiTranslate"
        :title="i18n.t('change')"
        nuxt
      >
      </v-btn>
    </v-app-bar>

    <NuxtPage />
  </v-app>
</template>

<script setup lang="ts">
import { mdiTranslate } from "@mdi/js";

const i18n = useI18n();

useHead({ htmlAttrs: { lang: i18n.locale.value } });

useSeoMeta({
  ogImage: "/assets/jojomatik.png",
});

/**
 * Returns the next language available.
 */
function getNextLanguage(): string {
  const currentLocale = i18n.locale.value;
  let index = i18n.availableLocales.indexOf(currentLocale);
  if (i18n.availableLocales.length - 1 === index) index = -1;
  return i18n.availableLocales[index + 1];
}
</script>

<style lang="scss">
@use "assets/style/main";
</style>
