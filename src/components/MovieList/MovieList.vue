<template>
  <h1 v-if="header" class="text-center text-uppercase">{{ header }}</h1>
  <div v-if="!movies.length" class="text-center">{{ errorText }}</div>
  <div v-else>
    <v-row class="mr-5">
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        xxl="1"
      >
        <movie-card :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/types';
import MovieCard from './MovieCard/MovieCard.vue';

defineProps<{
  movies: Movie[],
  header?: string,
  errorText?: string,
}>();

</script>
