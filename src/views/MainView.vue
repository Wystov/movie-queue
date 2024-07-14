<template>
  <search-bar />
  <h2 v-if="mode === 'popular'" class="text-center">Trending movies</h2>
  <app-spinner v-if="isLoading" />
  <movie-list
    v-else
    :movies="results"
  />
  <movie-pagination
    :length="pagesTotal"
    @update:model-value="handlePagination" />
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import AppSpinner from '@/components/shared/AppSpinner.vue';
import MoviePagination from '@/components/shared/MoviePagination.vue';
import MovieList from '../components/MovieList/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';

const {
  results, mode, isLoading, pagesTotal, requestString,
} = storeToRefs(useSearchStore());

const { changePage, getMovieList } = useSearchStore();

const handlePagination = (page: number) => {
  changePage(page);
  getMovieList(requestString.value);
};

</script>
