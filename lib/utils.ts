
export function imageUrl(path?: string | null, size = 'w500') {
  if (!path) return '/placeholder.png'
  const base = process.env.NEXT_PUBLIC_IMAGE_BASE ?? 'https://image.tmdb.org/t/p'
  return `${base}/${size}${path}`
}
