<template>
  <div
    style="height: 100dvh"
    class="d-flex justify-center align-center flex-column"
  >
    <!-- Branding -->
    <div class="d-flex justify-center align-center mb-10 text-h4">
      Nuxt 3 Base by
      <a href="https://github.com/jojomatik" class="ml-2">
        <nuxt-img
          src="/assets/jojomatik.png"
          width="200"
          preload
          alt="Jojomatik Logo"
          class="d-flex"
        ></nuxt-img>
      </a>
    </div>

    <v-btn
      color="primary"
      variant="tonal"
      :to="localeRoute({ name: 'auth-login' })"
      rounded
      size="large"
    >
      {{ i18n.t("to_login") }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { type Composer } from "vue-i18n";

const i18n: Composer = useI18n();
const localeRoute = useLocaleRoute();

useSeoMeta({
  title: i18n.t("seo_home_title"),
  ogTitle: i18n.t("seo_home_title"),
  description: i18n.t("seo_home_description"),
  ogDescription: i18n.t("seo_home_description"),
});
</script>

<style lang="scss"></style>
