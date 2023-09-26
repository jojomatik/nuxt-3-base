<template>
  <div style="display: flex">
    <v-app :theme="themeName === 'side-by-side' ? 'light' : themeName">
      <v-main>
        <slot name="story"></slot>
      </v-main>
    </v-app>
    <v-app v-if="themeName === 'side-by-side'" theme="dark">
      <v-main>
        <slot name="story"></slot>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import { VApp, VMain } from "vuetify/components";

defineProps({
  themeName: { type: String, required: true },
});
</script>

<style>
.docs-story {
  .v-application__wrap {
    min-height: fit-content;
  }
}
</style>
