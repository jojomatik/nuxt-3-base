<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <div style="display: flex; align-items: center">
          Nuxt 3 Base by
          <a href="https://github.com/jojomatik" class="pl-1">
            <v-img
              :src="jojomatikLogo"
              width="120"
              alt="Jojomatik Logo"
            ></v-img>
          </a>
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <NuxtPage />
  </v-app>
</template>

<script setup lang="ts">
import jojomatikLogo from "assets/jojomatik.png";
</script>

<style lang="scss">
@use "assets/main";
</style>
