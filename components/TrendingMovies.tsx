// pages/index.js

import React, { useEffect } from 'react';
import { fetchTrendingMovies } from '../libs/helper';
import { useState } from 'react';
const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);





  export default const TrendingMovies = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
      // Fetch trending movies when the component mounts
      async function fetchMovies() {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      }

      fetchMovies();
    }, []);

    return (
      <div>
        <h2>Trending Movies</h2>
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              {/* Display movie information here */}
              <p>{movie.title}</p>
              <img src={movie.thumbnailUrl} alt={movie.title} />
              {/* Add more movie details as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  };




