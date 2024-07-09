<template>
  <v-text-field
    v-model="searchInput"
    @keyup.enter="searchMovies"
    class="w-50 ma-auto"
    clearable
    label="Let's find a movie"
    prepend-icon="mdi-magnify"
    variant="underlined"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore } from '../stores/search';

const search = useSearchStore();

const searchInput = ref('');

const searchMovies = (e) => {
  if (searchInput.value.length < 1) return;
  e.target?.blur();
  search.searchMovies(searchInput.value);
  searchInput.value = '';
};

</script>
