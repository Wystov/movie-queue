<template>
  <search-bar />
  <movie-list
    :movies="search.results"
  />
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import MovieList from '../components/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';

const search = useSearchStore();
</script>
