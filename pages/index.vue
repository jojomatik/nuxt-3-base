<template>
  <v-card theme="dark">
    <v-card-title>Nuxt 3 Base</v-card-title>
    <v-card-text>
      <p>{{ t("hello", { name: name }) }}</p>
      <InputComponent
        v-model:input="text"
        @update:input="onChange"
      ></InputComponent>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="changeLanguage">{{ t("change") }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import InputComponent from "~/lib/InputComponent.vue";
import { i18n, t } from "~/plugins/i18n";
import { ref, onMounted } from "vue";
import { useHead } from "#head";

useHead({ title: "Home", titleTemplate: "%s - nuxt-3-base" });

const name = "world";

/**
 * The text that is currently in the input field.
 */
const text = ref("default input");

onMounted(() => {
  console.log("Large breakpoint:", useDisplay().thresholds.value.lg);
});

/**
 * A function that is called if the input {@link #text} changes.
 */
function onChange() {
  console.log("Change event fired:", text);
}

function changeLanguage() {
  const currentLocale = i18n.global.locale.value;
  let index = i18n.global.availableLocales.indexOf(currentLocale);
  if (i18n.global.availableLocales.length - 1 === index) index = -1;
  i18n.global.locale.value = i18n.global.availableLocales[index + 1];
}
</script>
