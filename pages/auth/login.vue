<template>
  <login-sheet @login="onLogin" />
  <p class="text-center mt-5 mb-5">or</p>
  <div class="d-flex justify-center">
    <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
  </div>
</template>

<script setup lang="ts">
import { type Composer } from "vue-i18n";
import LoginSheet from "~/components/ui/LoginSheet.vue";
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

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

// handle success event
const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
  let user;

  if (credential) {
    user = await $fetch("/api/google-login", {
      method: "POST",
      body: {
        token: credential,
      }
    })

    console.log('====================================');
    console.log(user);
    console.log('====================================');
  }
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<style lang="scss"></style>
