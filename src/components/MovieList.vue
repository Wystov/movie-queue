<template>
  <div v-if="!search.results.length" class="text-center">No movies found</div>
  <div v-else>
    <h2 class="text-center">{{ search.total }} results found for "{{ search.requestString }}"</h2>
    <v-row class="mr-5">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        xxl="1"
        v-for="movie in search.results"
        :key="movie.id"
      >
        <movie-card :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { useSearchStore } from '../stores/search';

const search = useSearchStore();

</script>
