<template>
  <v-card-actions class="justify-center">
    <v-btn
      icon="mdi-star"
      @click="handleFavorite"
    >
      <template v-if="isFavourite" #default>
        <v-icon color='warning' />
      </template>
    </v-btn>
    <v-btn
      v-if="isFavourite"
      icon="mdi-history"
      @click="toggleWatched(movie.id)"
    >
      <template v-if="isWatched" #default>
        <v-icon color='success' />
      </template>
    </v-btn>
  </v-card-actions>
</template>

<script setup lang="ts">
import { useQueueStore } from '@/stores/queue';
import type { Movie } from '@/types';
import { computed } from 'vue';

const props = defineProps<{ movie: Movie }>();

const queue = useQueueStore();
const { addMovie, removeMovie, toggleWatched } = useQueueStore();

const isFavourite = computed(() => queue.isInList(props.movie.id));

const handleFavorite = () => {
  const { id } = props.movie;
  isFavourite.value ? removeMovie(id) : addMovie(props.movie);
};

const isWatched = computed(() => props.movie.isWatched
      ?? !!(queue.watched.find((item) => item.id === props.movie.id)));
</script>
