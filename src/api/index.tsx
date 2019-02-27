import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const apiKey = "00c461e0b7f7ea4457d87643e96b5f27";

export function getMovies(page: number) {
  return axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`);
}

export function searchMovies(searchText: string, page: number) {
  return axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchText}&page=${page}`
  );
}

export function getGenres() {
  return axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
}

export function getMovie(id: string) {
  return axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
}

export function getMovieRecommendations(id: string) {
  return axios.get(`${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}`);
}
