import React, { useState } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Import your MagnifyingGlassIcon component

const Search = () => {
  const [movieId, setMovieId] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      // Make a GET request to fetch the movie details by its ID
      const response = await axios.get(
        `https://api.themoviedb.org/3/find/${movieId}?external_source=`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDA4Y2U2YWYwN2E3YWI3OWQ4Njk0N2I2ZmM4MGUzZiIsInN1YiI6IjY1MDJiZThiNTU0NWNhMDBhYjVlMzQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DulmSbcTWjQXZvEe8CBheAVARYSAMBt80FWEZ4_PZuc', // Replace with your TMDb API key
            Accept: 'application/json',
          },
        }
      );

      const movieData = response.data;

      // Check if the response contains movie details
      if (movieData.movie_results && movieData.movie_results.length > 0) {
        setMovieDetails(movieData.movie_results[0]);
        setError(null);
      } else {
        setMovieDetails(null);
        setError('Movie not found');
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setMovieDetails(null);
      setError('Error fetching movie details');
    }
  };

  return (
    <div>
      <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
        <MagnifyingGlassIcon className="w-6" onClick={handleSearch} />
      </div>

      <input
        type="text"
        placeholder="Enter Movie ID"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
      />
      
      {error && <p>{error}</p>}

      {movieDetails && (
        <div>
          <h3>Movie Details</h3>
          <pre>{JSON.stringify(movieDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Search;
