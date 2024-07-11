<template>
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
</template>

<script setup lang="ts">
import { useQueueStore } from '@/stores/queue';
import type { Movie } from '@/types';

defineProps<{ movie: Movie }>();

const queue = useQueueStore();
const { addMovie, removeMovie, toggleWatched } = useQueueStore();

const isWatched = (movie: Movie): boolean => movie.isWatched
      ?? !!(queue.watched.find((item) => item.id === movie.id));
</script>
