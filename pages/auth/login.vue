<template>
  <div>
    <v-sheet min-width="300px">
      <h3 class="text-center">{{ i18n.t("login") }}</h3>

      <v-text-field
        v-model="name"
        :label="i18n.t('name')"
        variant="underlined"
        color="primary"
      ></v-text-field>

      <password-input-field
        v-model="password"
        :label="i18n.t('password')"
      ></password-input-field>

      <v-btn
        variant="tonal"
        rounded
        block
        color="primary"
        :disabled="!name || !password"
        @click="onLogin"
      >
        {{ i18n.t("login") }}
      </v-btn>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { Composer } from "vue-i18n";
import { login } from "~/lib/auth";
import PasswordInputField from "~/components/ui/PasswordInputField.vue";

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

const name = ref<string | null>(null);
const password = ref<string | null>(null);

function onLogin(): void {
  if (!name.value) return;

  login(name.value);

  router.push(
    localePath({
      name: "admin",
    }),
  );
}
</script>

<style lang="scss"></style>
