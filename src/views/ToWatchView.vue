<template>
  <movie-list
    :movies="queue.toWatch"
    :error-text="textContent.error"
    :header="textContent.title" />
</template>

<script setup lang="ts">
import { useQueueStore } from '../stores/queue';
import MovieList from '../components/MovieList.vue';

const textContent = {
  title: 'To watch',
  error: 'No movies saved',
};

const queue = useQueueStore();
</script>
