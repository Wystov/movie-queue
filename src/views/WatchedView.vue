<template>
  <movie-list
    :movies="watched"
    :error-text="textContent.error"
    :header="textContent.title" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MovieList from '@/components/MovieList/MovieList.vue';
import { useQueueStore } from '../stores/queue';

const textContent = {
  title: 'Watched',
  error: 'No movies watched from queue',
};

const { watched } = storeToRefs(useQueueStore());
</script>
