<template>
  <v-btn :text="text" :size="size" :color="color" @click="onClick"> </v-btn>
</template>

<script setup lang="ts">
defineProps({
  /**
   * The text to display.
   */
  text: { type: String, required: true },
  /**
   * The size of the button.
   */
  size: { type: String, default: "default" },
  /**
   * The color of the button.
   */
  color: { type: String, default: "primary" },
});

const emit = defineEmits<{
  /**
   * An event that is called if the button is clicked.
   * @param e the event
   * @param value the click event
   */
  (e: "click", value: Event): void;
}>();

/**
 * A function that is called if the button is clicked.
 * @param e the event
 */
function onClick(e: Event): void {
  emit("click", e);
}
</script>
