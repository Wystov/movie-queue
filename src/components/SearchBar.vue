<template>
  <v-text-field
    v-model="searchInput"
    :loading="search.isLoading"
    class="w-50 ma-auto mt-5"
    clearable
    label="Let's find a movie"
    prepend-inner-icon="mdi-magnify"
    variant="underlined"
    @keyup.enter="searchMovies"
    @click:prepend-inner="searchMovies"
  />
  <h2 v-if="search.isInitiated" class="text-center">{{ search.total }} results found for "{{ search.requestString }}"</h2>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore } from '../stores/search';

const search = useSearchStore();

const searchInput = ref('');

const searchMovies = (e: Event) => {
  if (searchInput.value.length < 1) return;

  const inputEl = e.target;
  if (inputEl instanceof HTMLInputElement) inputEl.blur();

  search.searchMovies(searchInput.value);
  searchInput.value = '';
};

</script>
