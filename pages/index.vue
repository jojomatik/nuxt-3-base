<template>
  <v-card theme="dark">
    <v-card-title>Nuxt 3 Base</v-card-title>
    <v-card-text>
      <!-- warning: Invalid number of arguments, expected 1 -->
      <p>{{ $t("hello", { name: name }) }}</p>
      <InputComponent v-model:input="text" @change="onChange"></InputComponent>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="changeLanguage">{{ $t("change") }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getTitle } from "~/lib/utils";
import { useDisplay } from "vuetify";
import InputComponent from "~/lib/InputComponent.vue";

@Options({
  components: { InputComponent },
  head() {
    return { title: getTitle("Home") };
  },
})
export default class Home extends Vue {
  name = "world";

  /**
   * The text that is currently in the input field.
   */
  text = "default input";

  mounted() {
    console.log("Large breakpoint:", useDisplay().thresholds.value.lg);
  }

  /**
   * A function that is called if the input {@link #text} changes.
   */
  onChange() {
    console.log("Change event fired:", this.text);
  }

  changeLanguage() {
    const currentLocale = this.$i18n.locale;
    let index = this.$i18n.availableLocales.indexOf(currentLocale);
    if (this.$i18n.availableLocales.length - 1 === index) index = -1;
    this.$i18n.locale = this.$i18n.availableLocales[index + 1];
  }
}
</script>
