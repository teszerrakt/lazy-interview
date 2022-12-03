export const BASE_URL = import.meta.env.VITE_BASE_URL
export const API_KEY = import.meta.env.VITE_API_KEY

export const DISCOVER_API = `${BASE_URL}/discover/movie`
export const POSTER_PATH = (id?: string) =>
  `https://image.tmdb.org/t/p/original/${id}`
