<template>
  <div>
    <p>Hello {{ name }}!</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  name = "world";
}
</script>
