<template>
  <movie-list :movies="toWatch" :error-text="textContent.error" header="Movies to watch" />
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
      title: 'To watch',
      error: 'No movies saved',
    },
  }),
  computed: {
    ...mapState(useQueueStore, ['toWatch']),
  },
};
</script>
