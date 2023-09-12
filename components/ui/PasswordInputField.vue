<!--
A simple password input field.
-->

<template>
  <v-text-field
    :model-value="modelValue"
    variant="underlined"
    color="primary"
    type="password"
    :label="label"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
  </v-text-field>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * The model of this component.
   */
  modelValue: string | null;
  /**
   * An optional label for this field.
   */
  label?: string;
}>();

defineEmits<{
  /**
   * Event emitted when the component's model changes.
   */
  (e: "update:modelValue", modelValue: string | null): void;
}>();
</script>
