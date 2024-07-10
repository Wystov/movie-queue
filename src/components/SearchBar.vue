<template>
  <v-text-field
    v-model="searchInput"
    :loading="isLoading"
    class="w-50 ma-auto mt-5"
    clearable
    label="Let's find a movie"
    prepend-inner-icon="mdi-magnify"
    variant="underlined"
    @keyup.enter="handleSubmit"
    @click:prepend-inner="handleSubmit"
  />
  <h2 v-if="isInitiated && !isLoading" class="text-center">
    {{ total }} results found for "{{ requestString }}"
  </h2>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '../stores/search';

const { getMovies } = useSearchStore();
const {
  isLoading, isInitiated, total, requestString, mode,
} = storeToRefs(useSearchStore());

const searchInput = ref('');

const handleSubmit = (e: Event) => {
  if (!searchInput.value && mode.value === 'popular') return;

  const inputEl = e.target;
  if (inputEl instanceof HTMLInputElement) inputEl.blur();

  getMovies(searchInput.value);
  searchInput.value = '';
};

</script>
