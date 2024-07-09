<template>
  <h1 class="text-center">{{ textContent.title }}</h1>
  <div v-if="!movies.length" class="text-center">{{ textContent.error }}</div>
  <div v-else>
    <h2 class="text-center">{{ total }} <slot name="subheader" /></h2>
    <v-row class="mr-5">
      <v-col cols="12" sm="6" md="4" lg="3" xl="2" xxl="1" v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { Movie } from '../types';
import MovieCard from './MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  props: {
    movies: { type: Array as PropType<Movie[]>, required: true },
    textContent: { type: Object, required: true },
    total: { type: Number, default: (props: { movies: Movie[] }) => props.movies.length },
  },
};
</script>
