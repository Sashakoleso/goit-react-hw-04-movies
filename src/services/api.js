/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=1608e39e330c64cb921ad8bb1f6cfd98
// https://api.themoviedb.org/3/trending/movie/week?api_key=1608e39e330c64cb921ad8bb1f6cfd98
// https://api.themoviedb.org/3/search/movie?api_key=1608e39e330c64cb921ad8bb1f6cfd98&language=en-US&query=1
// https://api.themoviedb.org/3/movie/123/credits?api_key=1608e39e330c64cb921ad8bb1f6cfd98
// https://api.themoviedb.org/3/movie/123/reviews?api_key=1608e39e330c64cb921ad8bb1f6cfd98&language=en-US&page=1

const basicUrl = 'https://api.themoviedb.org/3';
const key = '1608e39e330c64cb921ad8bb1f6cfd98';

export const trendingFilms = () =>
  axios.get(`${basicUrl}/trending/movie/week?api_key=${key}`);

export const detailFilms = id =>
  axios.get(`${basicUrl}/movie/${id}?api_key=${key}`);

export const SearchFilm = (query = '') =>
  axios.get(`${basicUrl}/search/movie?api_key=${key}&query=${query}`);

export const Credits = id =>
  axios.get(`${basicUrl}/movie/${id}/credits?api_key=${key}`);

export const Reviews = id =>
  axios.get(
    `${basicUrl}/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
