<template>
  <div>
    <v-text-field
      :value="input"
      @input="$emit('update:input', $event.target.value)"
    >
    </v-text-field>
    <p>{{ input }}</p>
  </div>
</template>

<script setup lang="ts">
/**
 * A wrapper component for {@link VTextField}.
 */
const props = defineProps({
  /**
   * The text that is currently in the input field.
   */
  input: { type: String, required: true },
});

const emits = defineEmits<{
  /**
   * An event that is called if the input is updated.
   * @param e the event
   * @param value the new value of the input
   */
  (e: "update:input", value: string): void;
}>();
</script>
