import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosMovieApi from '../api/movie-db';
import type { Movie } from '../types';

export const useSearchStore = defineStore('search', () => {
  const results = ref([] as Movie[]);
  const total = ref(0);
  const requestString = ref('');
  const isInitiated = ref(false);
  const isLoading = ref(false);

  const searchMovies = async (value: string) => {
    requestString.value = value;
    isLoading.value = true;
    const response = await axiosMovieApi.get(`search/movie?query=${value}`);
    isLoading.value = false;
    isInitiated.value = true;
    results.value = response.data.results;
    total.value = response.data.total_results;
  };

  return {
    results,
    total,
    requestString,
    isInitiated,
    isLoading,
    searchMovies,
  };
});
