
import Image from 'next/image';
import type { Movie } from '@/types/movie';

const IMG_BASE = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE ?? 'https://image.tmdb.org/t/p';

export default function HeroBanner({ movie }: { movie: Movie }) {
  const backdrop = movie.backdrop_path ?? movie.poster_path;
  const imgUrl = backdrop ? `${IMG_BASE}/original${backdrop}` : undefined;

  return (
    <section className="relative h-[56vh] md:h-[70vh] rounded-lg overflow-hidden shadow-lg">
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={movie.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className="bg-neutral-700 h-full w-full" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Text */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-2xl px-2 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white">{movie.title}</h2>
        <p className="mt-2 text-sm md:text-lg text-gray-200 line-clamp-3 max-w-lg">{movie.overview}</p>

        {/* Optional buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300 transition">
            Play
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded font-semibold hover:bg-gray-600 transition">
            My List
          </button>
        </div>
      </div>
    </section>
  );
}
