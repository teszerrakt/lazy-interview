export const BASE_URL = import.meta.env.VITE_BASE_URL
export const API_KEY = import.meta.env.VITE_API_KEY

export const DISCOVER_API = `${BASE_URL}/discover/movie`
export const DETAIL_API = `${BASE_URL}/movie`

export const POSTER_PATH = (id?: string, size = 'original') =>
  `https://image.tmdb.org/t/p/${size}/${id}`
