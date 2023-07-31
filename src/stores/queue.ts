import { defineStore } from 'pinia';
import type { Movie } from '../types';

export const useToWatchStore = defineStore('queue', {
  state: () => ({
    movies: [] as Movie[],
  }),
  getters: {
    isInList: (state) => (id: number) => state.movies.find((movie) => movie.id === id),
    toWatch: (state) => state.movies.filter((movie) => !movie.isWatched),
    totalToWatch(): number {
      return this.toWatch.length;
    },
    watched: (state) => state.movies.filter((movie) => movie.isWatched),
    totalWatched(): number {
      return this.watched.length;
    },
  },
  actions: {
    addMovie(item: Movie) {
      const movie: Movie = item;
      movie.isWatched = false;
      this.movies.push(movie);
    },
    removeMovie(id: number) {
      this.movies.splice(this.movies.findIndex((movie) => movie.id === id), 1);
    },
    toggleWatched(id: number) {
      const movie = this.movies.find((el) => el.id === id);
      if (movie !== undefined) movie.isWatched = !movie.isWatched;
    },
  },
});
