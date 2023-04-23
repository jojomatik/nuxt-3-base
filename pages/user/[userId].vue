<template>
  <v-card class="content-card">
    <v-card-title>
      <div class="d-flex">
        {{ i18n.t("user.page") }}
        <v-spacer></v-spacer>
        <v-icon :icon="mdiAccountCircle" />
      </div>
    </v-card-title>
    <v-card-text>
      <p>{{ i18n.t("user.welcome", { user: $route.params.userId }) }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { mdiAccountCircle } from "@mdi/js";

const i18n = useI18n();

useHead({
  title: i18n.t("user.page") + " " + useRoute().params.userId,
});
</script>
