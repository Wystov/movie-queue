<template>
  <movie-list
    :movies="pageMovies"
    :error-text="textContent.error"
    :header="textContent.title" />
  <movie-pagination
    :length="Math.ceil(toWatch.length / 20)"
    :current-page="currentPage.toWatch"
    @update:current-page="handlePagination" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MoviePagination from '@/components/shared/MoviePagination.vue';
import { ref, watch } from 'vue';
import { useQueueStore } from '../stores/queue';
import MovieList from '../components/MovieList/MovieList.vue';

const textContent = {
  title: 'To watch',
  error: 'No movies saved',
};

const { getDataForPage, changePage } = useQueueStore();
const { toWatch, currentPage } = storeToRefs(useQueueStore());

const pageMovies = ref(getDataForPage('toWatch'));

watch(toWatch, () => {
  pageMovies.value = getDataForPage('toWatch');
});

const handlePagination = (page: number) => {
  changePage('toWatch', page);
  pageMovies.value = getDataForPage('toWatch');
};
</script>
