<template>
  <v-card class="content-card">
    <v-card-title>{{ i18n.t("user.login") }}</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="username"
        :label="i18n.t('user.name')"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="login">
        {{ i18n.t("user.login") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const i18n = useI18n();
const localePath = useLocalePath();

const router = useRouter();

useHead({
  title: i18n.t("user.login"),
});

const username = ref("");

function login() {
  router.push(
    localePath({ name: "user-userId", params: { userId: username.value } }),
  );
}
</script>
