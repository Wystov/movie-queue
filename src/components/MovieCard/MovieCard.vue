<template>
  <v-card
    class="ma-4"
    width="100%"
    height="100%"
  >
    <movie-card-image :path="movie.poster_path" />
    <v-card-title style="white-space: normal; height: 4em;">
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle class="d-flex justify-space-between">
      <div class="d-flex align-center">
        <v-icon icon="mdi-star" class="mr-1" />
        {{ rating }}
      </div>
      <div class="d-flex align-center">
        <v-icon icon="mdi-calendar-month" class="mr-1" />
        {{ date }}
      </div>
    </v-card-subtitle>
    <movie-card-actions :movie="movie" />
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Movie } from '@/types';
import { getFormattedDate } from '@/utils/getFormattedDate';
import MovieCardActions from './MovieCardActions.vue';
import MovieCardImage from './MovieCardImage.vue';

const props = defineProps<{
  movie: Movie;
}>();

const rating = computed(() => props.movie.vote_average.toFixed(1).replace('.0', ''));

const date = computed(() => getFormattedDate(props.movie.release_date));

</script>
