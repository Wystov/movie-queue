import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Movie } from '../types';

const queueFromLs = localStorage.getItem('movie-queue: queue');

export const useQueueStore = defineStore('queue', () => {
  const movies = ref((queueFromLs ? JSON.parse(queueFromLs) : []) as Movie[]);

  const isInList = computed(() => (id: number) => movies.value.find((movie) => movie.id === id));
  const toWatch = computed(() => movies.value.filter((movie) => !movie.isWatched));
  const totalToWatch = computed(() => toWatch.value.length);
  const watched = computed(() => movies.value.filter((movie) => movie.isWatched));
  const totalWatched = computed(() => watched.value.length);

  const addMovie = (item: Movie) => {
    const movie: Movie = item;
    movie.isWatched = false;
    movies.value.push(movie);
  };

  const removeMovie = (id: number) => {
    movies.value.splice(
      movies.value.findIndex((movie) => movie.id === id),
      1,
    );
  };

  const toggleWatched = (id: number) => {
    const movie = movies.value.find((el) => el.id === id);
    if (movie !== undefined) movie.isWatched = !movie.isWatched;
  };

  return {
    movies,
    isInList,
    toWatch,
    totalToWatch,
    watched,
    totalWatched,
    addMovie,
    removeMovie,
    toggleWatched,
  };
});
