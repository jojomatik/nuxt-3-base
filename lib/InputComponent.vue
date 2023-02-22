<template>
  <div>
    <v-text-field :value="input" @input="onUpdate($event.target.value)">
    </v-text-field>
    <p>{{ input }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

/**
 * A wrapper component for {@link VTextField}.
 */
const props = defineProps({
  /**
   * The text that is currently in the input field.
   */
  input: { type: String, required: true },
});

const emit = defineEmits<{
  /**
   * An event that is called if the input is updated.
   * @param e the event
   * @param value the new value of the input
   */
  (e: "update:input", value: string): void;
}>();

function onUpdate(value: string) {
  emit("update:input", value);
}

onMounted(() => {
  console.log("Initial input: " + props.input);
});
</script>
