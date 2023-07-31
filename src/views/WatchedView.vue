<template>
  <h1 class="text-center">watched</h1>
  <div v-if="!queueStore.watched.length">No saved movies</div>
  <div v-else>
    <h1 class="text-center">{{ queueStore.watched.length }} movies watched from list</h1>
    <div class="d-flex flex-wrap justify-center">
      <movie-card
        v-for="movie in queueStore.watched"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useToWatchStore } from '../stores/queue';
import MovieCard from '../components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  computed: {
    ...mapStores(useToWatchStore),
  },
};
</script>
