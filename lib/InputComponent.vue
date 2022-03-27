<template>
  <div>
    <v-text-field v-model="propValue"> </v-text-field>
    <p>{{ propValue }}</p>
  </div>
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
  @Model("input", { required: false, type: String }) propValue?: string;
}
</script>
