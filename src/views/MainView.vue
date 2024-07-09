<template>
  <search-bar />
  <movie-list
    :movies="results"
  />
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import MovieList from '../components/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';

const { results } = storeToRefs(useSearchStore());
</script>
