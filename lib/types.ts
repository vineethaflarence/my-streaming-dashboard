
export interface Movie {
   id: number;
  title?: string;        // for movies
  name?: string;         // for TV shows (TMDB uses "name" instead of "title")
  overview?: string;
  poster_path?: string;
  backdrop_path?: string
  release_date?: string;
  vote_average?: number;
}

export interface TMDBListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  genres?: { id: number; name: string }[];
  runtime?: number;
  homepage?: string | null;
  status?: string | null;
}
