<template>
  <v-card theme="dark">
    <v-card-title>Nuxt 3 Base</v-card-title>
    <v-card-text>
      <p>{{ i18n.t("hello", { name: name }) }}</p>
      <InputComponent
        v-model:input="text"
        @update:input="onChange"
      ></InputComponent>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="switchLocalePath(getNextLanguage())" nuxt>
        {{ i18n.t("change") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useHead } from "#head";
import { ref, onMounted } from "vue";
import InputComponent from "~/lib/InputComponent.vue";
import { useI18n } from "#imports";

const i18n = useI18n();

useHead({
  title: "Home",
  titleTemplate: "%s - nuxt-3-base",
});

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

function getNextLanguage(): string {
  const currentLocale = i18n.locale.value;
  let index = i18n.availableLocales.indexOf(currentLocale);
  if (i18n.availableLocales.length - 1 === index) index = -1;
  return i18n.availableLocales[index + 1];
}
</script>
