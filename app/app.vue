<template>
  <v-app>
    <v-app-bar color="transparent" flat>
      <div class="flex-grow-1" />
      <v-btn
        :to="localePath('license-information')"
        :icon="mdiFileDocumentCheckOutline"
        :title="i18n.t('nuxt-bundle.license-information.title')"
        nuxt
      />
      <v-btn
        :to="switchLocalePath(getNextLanguage())"
        :icon="mdiTranslate"
        :title="i18n.t('change')"
        nuxt
      />
    </v-app-bar>

    <NuxtPage />
  </v-app>
</template>

<script setup lang="ts">
import { mdiTranslate, mdiFileDocumentCheckOutline } from "@mdi/js";
import type { GeneratedLocale } from "@intlify/core-base";

const i18n = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

useHead({ htmlAttrs: { lang: i18n.locale.value } });

useSeoMeta({
  ogImage: "/assets/jojomatik.png",
});

/**
 * Returns the next language available.
 */
function getNextLanguage() {
  const currentLocale = i18n.locale.value;
  let index = i18n.availableLocales.indexOf(currentLocale);
  if (i18n.availableLocales.length - 1 === index) index = -1;
  return i18n.availableLocales[index + 1] as GeneratedLocale;
}
</script>

<style lang="scss">
@use "assets/style/main";
</style>
