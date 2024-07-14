<template>
  <movie-list
    :movies="pageMovies"
    :error-text="textContent.error"
    :header="textContent.title" />
  <movie-pagination
    :length="Math.ceil(watched.length / 20)"
    @update:model-value="handlePagination" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MovieList from '@/components/MovieList/MovieList.vue';
import MoviePagination from '@/components/shared/MoviePagination.vue';
import { ref, watch } from 'vue';
import { useQueueStore } from '../stores/queue';

const textContent = {
  title: 'Watched',
  error: 'No movies watched from queue',
};

const { getDataForPage, changePage } = useQueueStore();
const { watched } = storeToRefs(useQueueStore());

const pageMovies = ref(getDataForPage('watched'));

watch(watched, () => {
  pageMovies.value = getDataForPage('watched');
});

const handlePagination = (page: number) => {
  changePage('watched', page);
  pageMovies.value = getDataForPage('watched');
};
</script>
