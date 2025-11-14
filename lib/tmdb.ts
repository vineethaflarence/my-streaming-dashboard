// lib/tmdb.ts
const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  console.warn('Warning: TMDB_API_KEY not set in env');
}

async function tmdbFetch<T>(path: string, params?: URLSearchParams): Promise<T | null> {
  try {
    const url = new URL(`${BASE}${path}`);
    const search = params ?? new URLSearchParams();
    if (API_KEY) search.set('api_key', API_KEY as string);
    url.search = search.toString();

    const res = await fetch(url.toString(), { next: { revalidate: 60 * 5 } });
    if (!res.ok) throw new Error(`TMDB fetch failed: ${res.status}`);
    return (await res.json()) as T;
  } catch (err) {
    console.error('Network error fetching TMDB:', err);
    return null;
  }
}

// Fetch functions
export async function fetchPopular() {
  return tmdbFetch<{ results: any[] }>('/movie/popular');
}

export async function fetchNowPlaying() {
  return tmdbFetch<{ results: any[] }>('/movie/now_playing');
}

export async function fetchTopRated() {
  return tmdbFetch<{ results: any[] }>('/movie/top_rated');
}

export async function fetchMovieById(id: string) {
  return tmdbFetch<any>(`/movie/${id}`, new URLSearchParams({ append_to_response: 'credits' }));
}
