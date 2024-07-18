import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Movie } from '../types';

const queueFromLs = localStorage.getItem('movie-queue: queue');

const ITEMS_PER_PAGE = 20;

export const useQueueStore = defineStore('queue', () => {
  const movies = ref((queueFromLs ? JSON.parse(queueFromLs) : []) as Movie[]);
  const currentPage = ref({
    toWatch: 1,
    watched: 1,
  });

  const isInList = computed(() => (id: number) => movies.value.find((movie) => movie.id === id));
  const toWatch = computed(() => movies.value.filter((movie) => !movie.isWatched));
  const totalToWatch = computed(() => toWatch.value.length);
  const watched = computed(() => movies.value.filter((movie) => movie.isWatched));
  const totalWatched = computed(() => watched.value.length);

  const getDataForPage = (data: 'toWatch' | 'watched') => {
    const start = (currentPage.value[data] - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const list = data === 'toWatch' ? toWatch.value : watched.value;
    return list.slice(start, end);
  };

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

  const changePage = (list: 'toWatch' | 'watched', page: number) => {
    currentPage.value[list] = page;
  };

  return {
    movies,
    isInList,
    toWatch,
    totalToWatch,
    watched,
    totalWatched,
    currentPage,
    addMovie,
    removeMovie,
    toggleWatched,
    getDataForPage,
    changePage,
  };
});
