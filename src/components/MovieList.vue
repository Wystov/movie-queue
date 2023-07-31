<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="text-center">{{ textContent.title }}</h1>
    <slot name="search" />
    <div v-if="!movies.length">{{ textContent.error }}</div>
    <div v-else>
      <h2 class="text-center">{{ total }} <slot name="subheader" /></h2>
      <div class="d-flex flex-wrap justify-center">
        <movie-card
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
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
