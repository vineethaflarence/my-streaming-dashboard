'use client';
import Image from 'next/image';
import type { Movie } from '@/types/movie';
import { imageUrl } from '@/lib/utils';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-lg overflow-hidden shadow-md transform group-hover:scale-105 transition-transform duration-300 w-[150px] h-[225px] sm:w-[180px] sm:h-[270px] md:w-[200px] md:h-[300px]">
        <Image
          src={imageUrl(movie.poster_path, 'w342')}
          alt={movie.title}
          width={200}      // intrinsic width
          height={300}     // intrinsic height
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="rounded-lg"
        />
      </div>
      <p className="mt-2 text-sm font-medium text-white line-clamp-2">{movie.title}</p>
    </div>
  );
}