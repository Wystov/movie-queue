<template>
  <v-text-field
    v-model="searchInput"
    @keyup.enter="searchMovies"
    @click:prepend-inner="searchMovies"
    class="w-50 ma-auto"
    clearable
    label="Let's find a movie"
    prepend-inner-icon="mdi-magnify"
    variant="underlined"
  />
  <v-btn icon="$vuetify" />
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
