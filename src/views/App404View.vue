<template>
  <v-container class="fill-height flex-column justify-center">
    <h1>404</h1>
    <p class="mb-4">Page not found :(</p>
    <v-btn @click="$router.push({ name: 'main' })">Home page</v-btn>
  </v-container>
</template>
