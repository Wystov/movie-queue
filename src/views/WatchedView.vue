<template>
  <movie-list :movies="watched" :text-content="textContent">
    <template #subheader>watched movies</template>
  </movie-list>
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
