// app/page.tsx
import HeroBanner from '@/app/components/HeroBanner';
import MovieRow from '@/app/components/MovieRow';
import { fetchPopular, fetchNowPlaying, fetchTopRated } from '@/lib/tmdb';

export default async function HomePage() {
  const [popularData, nowPlayingData, topRatedData] = await Promise.all([
    fetchPopular(),
    fetchNowPlaying(),
    fetchTopRated(),
  ]);

  const popular = popularData?.results ?? [];
  const nowPlaying = nowPlayingData?.results ?? [];
  const topRated = topRatedData?.results ?? [];

  const hasData = popular.length || nowPlaying.length || topRated.length;
  if (!hasData) {
    return (
      <div className="text-white text-center mt-20">
        Unable to load movies. Please try again later.
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      {popular.length > 0 && <HeroBanner movie={popular[0]} />}
      {popular.length > 0 && <MovieRow movies={popular} categoryTitle="Popular" />}
      {nowPlaying.length > 0 && <MovieRow movies={nowPlaying} categoryTitle="Now Playing" />}
      {topRated.length > 0 && <MovieRow movies={topRated} categoryTitle="Top Rated" />}
    </main>
  );
}
