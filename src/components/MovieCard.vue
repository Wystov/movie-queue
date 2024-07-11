<template>
  <v-card
    class="ma-4"
    width="100%">
    <v-img
      :src="path"
      aspect-ratio="3/4"
      cover>
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          />
        </div>
      </template>
      <template #error>
        <v-img
          height="76%"
          aspect-ratio="3/4"
          cover
          :src="thumbnail"
        />
      </template>
    </v-img>
    <v-card-title>
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ movie.release_date.length ? movie.release_date : 'no date info' }}
    </v-card-subtitle>
    <movie-card-actions :movie="movie" />
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Movie } from '@/types';
import thumbnail from '../assets/img/thumbnail.jpg';
import MovieCardActions from './MovieCardActions.vue';

const props = defineProps<{
  movie: Movie;
}>();

const baseImgPath = 'https://image.tmdb.org/t/p/original/';

const path = computed(
  () => (props.movie.poster_path ? baseImgPath + props.movie.poster_path : thumbnail),
);

</script>
