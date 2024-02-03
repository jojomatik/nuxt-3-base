<template>
  <v-sheet class="mx-auto" min-width="300px" width="300px">
    <h3 class="text-center">{{ i18n.t("login") }}</h3>

    <v-text-field
      v-model="name"
      :label="i18n.t('name')"
      color="primary"
      variant="underlined"
    ></v-text-field>

    <password-input-field
      v-model="password"
      :label="i18n.t('password')"
    ></password-input-field>

    <v-btn
      :disabled="!name || !password"
      block
      color="primary"
      rounded
      variant="tonal"
      @click="onLogin"
    >
      {{ i18n.t("login") }}
    </v-btn>
  </v-sheet>
</template>

<script lang="ts" setup>
import { login } from "~/lib/auth";
import PasswordInputField from "~/components/ui/PasswordInputField.vue";

const i18n = useI18n();

const name = ref<string | null>(null);
const password = ref<string | null>(null);

const emit = defineEmits<{
  /**
   * An event that is called if the login button is clicked.
   * @param e the event
   * @param value void
   */
  (e: "login", value: void): void;
}>();

function onLogin(): void {
  if (!name.value) return;

  login(name.value);

  emit("login");
}
</script>

<style lang="scss"></style>
