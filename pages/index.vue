<template>
  <div>
    <p>Hello {{ name }}!</p>
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
}
</script>
