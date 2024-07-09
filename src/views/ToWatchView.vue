<template>
  <movie-list
    :movies="toWatch"
    :error-text="textContent.error"
    :header="textContent.title" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useQueueStore } from '../stores/queue';
import MovieList from '../components/MovieList.vue';

const textContent = {
  title: 'To watch',
  error: 'No movies saved',
};

const { toWatch } = storeToRefs(useQueueStore());
</script>
