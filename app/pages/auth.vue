<template>
  <v-container class="ma-auto">
    <v-row>
      <v-col class="d-flex justify-center">
        <!-- Branding -->
        <div class="d-flex justify-center align-center">
          Nuxt 3 Base by
          <a href="https://github.com/jojomatik" class="ml-2">
            <nuxt-img
              src="/assets/jojomatik.png"
              width="120"
              preload
              alt="Jojomatik Logo"
              class="d-flex"
            ></nuxt-img>
          </a>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center">
        <NuxtPage />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
