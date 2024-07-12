<template>
  <div v-if="isLoading">Loading...</div>
  <template v-else>
    <v-card
      color="surface-variant"
      class="dark-bg"
      height="100%"
      :image='bgImg'>
      <v-card-title class="text-h2 text-center">{{ title }}</v-card-title>
      <v-card-subtitle class="text-h6 text-center">{{ subtitle }}</v-card-subtitle>
    </v-card>
  </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import { baseImgPath } from '@/const';

const route = useRoute();
const { getMovie } = useSearchStore();
const { isLoading } = storeToRefs(useSearchStore());
const movie = await getMovie(route.params.id as string);
console.log(movie);
const title = movie?.data.title;
const subtitle = movie?.data.tagline;
const bgImg = baseImgPath + (movie?.data.backdrop_path ?? '');
</script>

<style scoped>
.dark-bg ::v-deep img {
    filter: brightness(25%);
}
</style>
