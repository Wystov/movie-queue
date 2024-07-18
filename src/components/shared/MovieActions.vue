<template>
  <v-card-actions>
    <v-btn
      icon
      @click="handleFavorite"
    >
      <v-icon :color="isFavourite ? 'warning' : ''">
        {{ isFavourite ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
      </v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
      >
        {{ isFavourite ? 'Remove from watchlist' : 'Add to watchlist' }}
      </v-tooltip>
    </v-btn>
    <Transition>
      <v-btn
        v-if="isFavourite"
        icon
        @click="toggleWatched(movie.id)"
      >
        <v-icon :color="isWatched ? 'success' : ''">mdi-history</v-icon>
        <v-tooltip
          activator="parent"
          location="bottom"
        >
          {{ isWatched ? 'Mark as unwatched' : 'Mark as watched' }}
        </v-tooltip>
      </v-btn>
    </Transition>
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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
