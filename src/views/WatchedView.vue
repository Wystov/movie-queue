<template>
  <movie-list :movies="watched" :error-text="textContent.error" header="watched movies" />
</template>

<script lang="ts">
import { mapState } from 'pinia';
import { useQueueStore } from '../stores/queue';
import MovieList from '../components/MovieList.vue';

export default {
  components: {
    MovieList,
  },
  data: () => ({
    textContent: {
      title: 'Watched',
      error: 'No movies watched from queue',
    },
  }),
  computed: {
    ...mapState(useQueueStore, ['watched']),
  },
};
</script>
