<template>
  <movie-list
    :movies="watched"
    :error-text="textContent.error"
    :header="textContent.title" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useQueueStore } from '../stores/queue';
import MovieList from '../components/MovieList.vue';

const textContent = {
  title: 'Watched',
  error: 'No movies watched from queue',
};

const { watched } = storeToRefs(useQueueStore());
</script>
