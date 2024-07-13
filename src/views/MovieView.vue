<template>
  <div v-if="isLoading">Loading...</div>
  <template v-else>
    <v-card
      color="surface-variant"
      class="dark-bg fill-height"
      :image="bgImg"
    >
      <v-container class="fill-height d-flex" fluid>
        <v-row>
          <v-col cols="auto">
            <v-img width="400px" height="600px" :src="posterImg" />
          </v-col>
          <v-col>
            <v-card-title class="text-h2 pa-0">{{ title }}</v-card-title>
            <v-card-subtitle class="text-h6 pa-0">{{ subtitle }}</v-card-subtitle>
            <p class="mt-6 text-body-1">{{ description }}</p>
          </v-col>
        </v-row>
      </v-container>
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
const posterImg = baseImgPath + (movie?.data.poster_path ?? '');
const description = movie?.data.overview;
</script>

<style scoped>
.dark-bg ::v-deep img {
    filter: brightness(20%);
}
</style>
