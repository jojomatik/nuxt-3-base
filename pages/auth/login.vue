<template>
  <login-sheet @login="onLogin"></login-sheet>
</template>

<script setup lang="ts">
import { type Composer } from "vue-i18n";
import LoginSheet from "~/components/ui/LoginSheet.vue";

const i18n: Composer = useI18n();
const router = useRouter();
const localePath = useLocalePath();

useHead({
  title: i18n.t("seo_auth_login_title"),
});

useSeoMeta({
  title: i18n.t("seo_auth_login_title"),
  ogTitle: i18n.t("seo_auth_login_title"),
  description: i18n.t("seo_auth_login_description"),
  ogDescription: i18n.t("seo_auth_login_description"),
});

function onLogin(): void {
  router.push(
    localePath({
      name: "admin",
    }),
  );
}
</script>

<style lang="scss"></style>
