// utils/tmdb.js

import axios from 'axios';

const TMDB_API_KEY = 'dd08ce6af07a7ab79d86947b6fc80e3f';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
