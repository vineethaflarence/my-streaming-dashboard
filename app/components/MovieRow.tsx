
// components/MovieRow.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Movie } from "@/types/movie";

const IMG_BASE =
  process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE ??
  "https://image.tmdb.org/t/p";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling effect
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let scrollAmount = 0;
    const cardWidth = 170; // card width + gap

    const interval = setInterval(() => {
      scrollAmount += cardWidth;

      row.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      // When reaching the end, reset to start
      if (scrollAmount >= row.scrollWidth - row.clientWidth) {
        scrollAmount = 0;
      }
    }, 2500); // Slide every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2 px-1">{categoryTitle}</h3>

      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-hidden pb-2"
      >
        {movies.map((m) => {
          const poster = m.poster_path
            ? `${IMG_BASE}/w342${m.poster_path}`
            : null;

          return (
            <Link
              key={m.id}
              href={`/movie/${m.id}`}
              className="min-w-[150px]"
            >
              <div className="w-[150px]">
                {poster ? (
                  <Image
                    src={poster}
                    alt={m.title}
                    width={150}
                    height={225}
                    className="rounded-md"
                  />
                ) : (
                  <div className="bg-neutral-700 h-[225px] rounded-md" />
                )}

                <p className="mt-1 text-sm line-clamp-2">{m.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
