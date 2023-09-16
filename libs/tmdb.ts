// tmdb.js
import axios from 'axios';

const TMDB_API_KEY = 'dd08ce6af07a7ab79d86947b6fc80e3f'; // Replace with your TMDB API key

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    return response.data.results; // Assuming the movie data is in response.data.results
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}
