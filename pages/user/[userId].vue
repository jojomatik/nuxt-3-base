<template>
  <v-app>
    <v-card style="width: 80%; max-width: 400px; margin: auto">
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
      <v-card-actions>
        <v-btn @click="logout">
          {{ i18n.t("user.logout") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import { mdiAccountCircle } from "@mdi/js";

const i18n = useI18n();
const localePath = useLocalePath();

const router = useRouter();

useHead({
  title: i18n.t("user.page") + " " + useRoute().params.userId,
});

function logout() {
  router.push(localePath({ name: "user" }));
}
</script>
