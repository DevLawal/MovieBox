import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie', // Use an endpoint that provides movie details
          {
            params: {
              api_key: 'dd08ce6af07a7ab79d86947b6fc80e3f', // Replace with your TMDb API key
              language: 'en-US',
              sort_by: 'popularity.desc',
            },
          }
        );

        // Assuming the API response contains a `results` array of movies
        const movieList = response.data.results;

        // Set the movie list in the state
        setMovies(movieList);
      } catch (error) {
        console.error('Error fetching movie list:', error);
      }
    };

    // Call the fetchMovies function when the component mounts
    fetchMovies();
  }, []);

  return (
    <div className="text-white font">
      <h1>Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
