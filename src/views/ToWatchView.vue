<template>
  <h1 class="text-center">to watch</h1>
  <div v-if="!queueStore.toWatch.length">No saved movies</div>
  <div v-else>
    <h1 class="text-center">{{ queueStore.toWatch.length }} movies in your watch list</h1>
    <div class="d-flex flex-wrap justify-center">
      <movie-card
        v-for="movie in queueStore.toWatch"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useQueueStore } from '../stores/queue';
import MovieCard from '../components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  computed: {
    ...mapStores(useQueueStore),
  },
};
</script>
