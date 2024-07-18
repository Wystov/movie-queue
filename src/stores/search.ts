import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { formatMovieInfo } from '@/utils/formatMovieInfo';
import axiosMovieApi from '../api/movie-db';
import type { MainPageMode, Movie } from '../types';

type MoviesRespType = {
  results: Movie[];
  total_results: number;
};

const cache = new Map<string, MoviesRespType>();

export const useSearchStore = defineStore('search', () => {
  const results = ref([] as Movie[]);
  const total = ref(0);
  const requestString = ref('');
  const isInitiated = ref(false);
  const isLoading = ref(false);
  const mode = ref<MainPageMode>('popular');
  const movie = ref({} as Movie);
  const currentPage = ref(1);

  const setData = (data: MoviesRespType, query: string) => {
    results.value = data.results;
    total.value = mode.value === 'popular' ? 2000 : data.total_results;
    cache.set(query, data);
  };

  const pagesTotal = computed(() => Math.ceil(total.value / 20));

  const getMovieList = async (value?: string) => {
    requestString.value = value ?? '';
    isInitiated.value = !!value;
    mode.value = value ? 'search' : 'popular';
    isLoading.value = true;

    const query = value
      ? `search/movie?query=${value}&page=${currentPage.value}`
      : `movie/popular?page=${currentPage.value}`;

    const cachedResults = cache.get(query);
    if (cachedResults) {
      setData(cachedResults, query);
      isLoading.value = false;
      return;
    }

    try {
      const response = await axiosMovieApi.get<MoviesRespType>(query);
      setData(response.data, query);
    } catch {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch data');
    } finally {
      isLoading.value = false;
    }
  };

  const getMovie = async (id: string) => {
    isLoading.value = true;
    const query = `movie/${id}`;

    try {
      const response = await axiosMovieApi.get<Movie>(query);
      movie.value = formatMovieInfo(response.data);
    } catch {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch data');
    } finally {
      isLoading.value = false;
    }
  };

  const changePage = (page: number) => {
    currentPage.value = page;
  };

  return {
    mode,
    results,
    total,
    pagesTotal,
    requestString,
    isInitiated,
    isLoading,
    movie,
    currentPage,
    getMovieList,
    getMovie,
    changePage,
  };
});
