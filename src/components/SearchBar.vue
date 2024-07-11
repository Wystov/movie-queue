<template>
  <v-text-field
    ref="inputEl"
    v-model="inputValue"
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

const inputEl = ref<HTMLInputElement | null>(null);
const inputValue = ref('');

const handleSubmit = () => {
  inputEl.value?.blur();
  if (!inputValue.value && mode.value === 'popular') return;

  getMovies(inputValue.value);
  inputValue.value = '';
};

</script>
