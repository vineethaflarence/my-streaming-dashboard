// app/movie/[id]/page.tsx
import Image from 'next/image';
import { fetchMovieById } from '@/lib/tmdb';
import type { MovieDetails } from '@/types/movie';

interface Props {
  params: { id: string };
}

export default async function MoviePage({ params }: Props) {
  const { id } = params;

  if (!id) return <div className="text-white text-center mt-20">Movie ID missing.</div>;

  const movie: MovieDetails | null = await fetchMovieById(id);

  if (!movie) {
    return <div className="text-white text-center mt-20">Unable to load movie details.</div>;
  }

  const IMG_BASE = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE ?? 'https://image.tmdb.org/t/p';

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {movie.backdrop_path && (
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={`${IMG_BASE}/w1280${movie.backdrop_path}`}
              alt={movie.title}
              width={1280}
              height={720}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-gray-300 text-lg">
          {movie.release_date?.slice(0, 4)} • {movie.runtime ?? 'N/A'} min
        </p>
        {movie.genres?.length && (
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((g) => (
              <span key={g.id} className="px-3 py-1 text-sm bg-red-600 rounded-full">
                {g.name}
              </span>
            ))}
          </div>
        )}
        {movie.overview && <p className="text-gray-300 leading-relaxed">{movie.overview}</p>}
      </div>
    </main>
  );
}
