<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <div style="display: flex; align-items: center">
          Nuxt 3 Base by
          <a href="https://github.com/jojomatik" class="pl-1">
            <nuxt-img
              src="/assets/jojomatik.png"
              width="120"
              preload
              alt="Jojomatik Logo"
            ></nuxt-img>
          </a>
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <NuxtPage />
  </v-app>
</template>

<script setup lang="ts">
const i18n = useI18n();

useHead({ htmlAttrs: { lang: i18n.locale.value } });

useSeoMeta({
  title: i18n.t("title"),
  ogTitle: i18n.t("title"),
  description: i18n.t("description"),
  ogDescription: i18n.t("description"),
  ogImage: "/assets/jojomatik.png",
});
</script>

<style lang="scss">
@use "assets/main";
</style>
