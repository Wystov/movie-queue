import axios from 'axios';

const axiosMovieApi = axios.create();

const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

axiosMovieApi.interceptors.request.use((config) => {
  const movieConfig = config;
  movieConfig.baseURL = baseUrl;
  movieConfig.headers.authorization = `Bearer ${apiKey}`;
  return movieConfig;
});

export default axiosMovieApi;
