import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosMovieApi from '../api/movie-db';
import type { MainPageMode, Movie } from '../types';

export const useSearchStore = defineStore('search', () => {
  const results = ref([] as Movie[]);
  const total = ref(0);
  const requestString = ref('');
  const isInitiated = ref(false);
  const isLoading = ref(false);
  const mode = ref<MainPageMode>('popular');

  const getMovies = async (value?: string) => {
    if (value) {
      requestString.value = value;
      isInitiated.value = true;
      mode.value = 'search';
    } else {
      mode.value = 'popular';
      requestString.value = '';
      isInitiated.value = false;
    }

    isLoading.value = true;
    const query = value ? `search/movie?query=${value}` : 'movie/popular';
    const response = await axiosMovieApi.get(query);
    isLoading.value = false;
    results.value = response.data.results;
    total.value = response.data.total_results;
  };

  return {
    mode,
    results,
    total,
    requestString,
    isInitiated,
    isLoading,
    getMovies,
  };
});
