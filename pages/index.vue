<template>
  <div>
    <!-- warning: Invalid number of arguments, expected 1 -->
    <p>{{ $t("hello", { name: name }) }}</p>
    <button @click="changeLanguage">{{ $t("change") }}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getTitle } from "~/lib/utils";

@Options({
  head() {
    return { title: getTitle("Home") };
  },
})
export default class Home extends Vue {
  name = "world";

  changeLanguage() {
    const currentLocale = this.$i18n.locale;
    let index = this.$i18n.availableLocales.indexOf(currentLocale);
    if (this.$i18n.availableLocales.length - 1 === index) index = -1;
    this.$i18n.locale = this.$i18n.availableLocales[index + 1];
  }
}
</script>
