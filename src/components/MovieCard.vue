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
    <v-card-actions>
      <v-btn
        v-if="!queue.isInList(movie.id)"
        color="success"
        variant="text"
        @click="addMovie(movie)"
      >
        + queue
      </v-btn>
      <template v-else>
        <v-btn
          color="red"
          variant="text"
          @click="removeMovie(movie.id)"
        >
          - queue
        </v-btn>
        <v-btn
          v-if="isWatched(movie)"
          color="red"
          variant="text"
          @click="toggleWatched(movie.id)"
        >
          watched
        </v-btn>
        <v-btn
          v-else
          color="success"
          variant="text"
          @click="toggleWatched(movie.id)"
        >
          not watched
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Movie } from '@/types';
import { useQueueStore } from '../stores/queue';
import thumbnail from '../assets/img/thumbnail.jpg';

const { addMovie, removeMovie, toggleWatched } = useQueueStore();
const queue = useQueueStore();

const props = defineProps<{
  movie: Movie;
}>();

const baseImgPath = 'https://image.tmdb.org/t/p/original/';

const path = computed(
  () => (props.movie.poster_path ? baseImgPath + props.movie.poster_path : thumbnail),
);

const isWatched = (movie: Movie): boolean => movie.isWatched
      ?? !!(queue.watched.find((item) => item.id === movie.id));

</script>
