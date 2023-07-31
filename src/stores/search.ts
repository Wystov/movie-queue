import { defineStore } from 'pinia';
import axiosMovieApi from '../api/movie-db';
import type { Movie } from '../types';

export const useSearchStore = defineStore('search', {
  state: () => ({
    results: [] as Movie[],
    total: 0,
    requestString: '',
  }),
  actions: {
    async searchMovies(value: string) {
      this.requestString = value;
      const response = await axiosMovieApi.get(`search/movie?query=${value}`);
      this.results = response.data.results;
      this.total = response.data.total_results;
    },
  },
});
