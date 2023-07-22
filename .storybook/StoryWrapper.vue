<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { VApp, VMain } from "vuetify/components";

defineProps({
  themeName: { type: String, required: true },
});
</script>
