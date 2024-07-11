<template>
  <v-card
    class="ma-4"
    width="100%"
    height="100%"
  >
    <v-img
      :src="path"
      height="70%"
      cover
    >
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
          :src="thumbnail"
          height="80%"
          aspect-ratio="3/4"
          cover
        />
      </template>
    </v-img>
    <v-card-title style="white-space: normal; height: 4em;">
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ date }}
    </v-card-subtitle>
    <movie-card-actions :movie="movie" />
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Movie } from '@/types';
import { getFormattedDate } from '@/utils/getFormattedDate';
import thumbnail from '../assets/img/thumbnail.jpg';
import MovieCardActions from './MovieCardActions.vue';

const props = defineProps<{
  movie: Movie;
}>();

const baseImgPath = 'https://image.tmdb.org/t/p/original/';

const path = computed(
  () => (props.movie.poster_path ? baseImgPath + props.movie.poster_path : thumbnail),
);

const date = computed(() => getFormattedDate(props.movie.release_date));

</script>
