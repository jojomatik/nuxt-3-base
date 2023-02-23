<template>
  <v-app>
    <v-card style="width: 80%; max-width: 400px; margin: auto">
      <v-card-title>{{ i18n.t("user.page") }}</v-card-title>
      <v-card-text>
        <p>{{ i18n.t("user.welcome", { user: $route.params.userId }) }}</p>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import { useHead } from "#head";
import { useI18n, useRoute } from "#imports";

const i18n = useI18n();

useHead({
  title: i18n.t("user.page") + " " + useRoute().params.userId,
});
</script>
