<template>
  <v-text-field v-model="value"> </v-text-field>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Model } from "vue-property-decorator";

/**
 * A wrapper component for {@link VTextField}.
 */
@Options({})
export default class InputComponent extends Vue {
  /**
   * The text that is currently in the input field.
   */
  @Model("change", { required: false, type: String }) value?: string;
}
</script>
