<template>
  <v-container class="ma-auto">
    <v-row>
      <v-col class="d-flex justify-center">
        <!-- Branding -->
        <div class="d-flex justify-center align-center">
          <h2 class="text-green-800 font-bold text-4xl">Welcome to my app</h2>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex flex-col justify-center">
        <NuxtPage />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
