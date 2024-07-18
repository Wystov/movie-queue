export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  isWatched?: boolean;
  tagline?: string;
  backdrop_path?: string;
  runtime?: number;
  genres?: Genre[];
}

export type MainPageMode = 'search' | 'popular';
