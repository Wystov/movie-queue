<template>
  <search-bar />
  <h2 v-if="mode === 'popular'" class="text-center">Trending movies</h2>
  <app-spinner v-if="isLoading" />
  <movie-list
    v-else
    :movies="results"
  />
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import AppSpinner from '@/components/shared/AppSpinner.vue';
import MovieList from '../components/MovieList/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';

const { results, mode, isLoading } = storeToRefs(useSearchStore());
</script>
