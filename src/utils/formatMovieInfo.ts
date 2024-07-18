import { baseImgPath } from '@/const';
import type { Movie } from '@/types';
import { getFormattedDate } from './getFormattedDate';

export const formatMovieInfo = (movie: Movie): Movie => ({
  id: movie.id,
  title: movie.title,
  tagline: movie.tagline,
  overview: movie.overview,
  backdrop_path: movie.backdrop_path ? `${baseImgPath}${movie.backdrop_path}` : '',
  poster_path: movie.poster_path,
  release_date: getFormattedDate(movie.release_date),
  vote_average: +movie.vote_average.toFixed(1).replace('.0', ''),
  runtime: movie.runtime,
  genres: movie.genres,
});
