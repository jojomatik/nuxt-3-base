<template>
  <div class="d-flex align-center justify-center" style="height: 100dvh">
    <v-sheet
      class="ma-auto pa-5 text-center"
      border
      rounded="xl"
      color="success"
      width="300px"
    >
      <h3>{{ i18n.t("logged_in", { user: userName }) }}</h3>

      <v-btn block class="mt-5" rounded variant="tonal" @click="onLogout">
        {{ i18n.t("logout") }}
      </v-btn>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { Composer } from "vue-i18n";
import { getAuthorizedUserID, logout } from "~/lib/auth";

const i18n: Composer = useI18n();
const router = useRouter();
const localePath = useLocalePath();

useHead({
  title: i18n.t("seo_admin_title"),
});

useSeoMeta({
  title: i18n.t("seo_admin_title"),
  ogTitle: i18n.t("seo_admin_title"),
  description: i18n.t("seo_admin_description"),
  ogDescription: i18n.t("seo_admin_description"),
});

const userName = ref<string | null>(null);

onMounted(() => {
  userName.value = getAuthorizedUserID();
});

function onLogout(): void {
  logout();

  router.push(
    localePath({
      name: "auth-login",
    }),
  );
}
</script>

<style lang="scss"></style>
