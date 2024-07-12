<template>
  <div v-if="isLoading">Loading...</div>
  <template v-else>
    <v-card
      color="surface-variant"
      class="dark-bg"
      height="100%"
      :title='title'
      :subtitle="subtitle"
      :image='bgImg' />
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
    filter: brightness(40%);
}
</style>
