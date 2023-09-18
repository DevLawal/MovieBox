import React, { useState } from 'react';
import SearchBar from './SearchBar';

const API_KEY = 'dd08ce6af07a7ab79d86947b6fc80e3f';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

async function fetchMovies(query) {
  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
}

function Search() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [isHidden, setIsHidden] = useState(false); // Initialize as visible

  const handleSearch = async (query) => {
    setLoading(true);
    const movies = await fetchMovies(query);
    setResults(movies);
    setLoading(false);
    setIsHidden(false); // Show the search component when search results are available
  };

  const handleClose = () => {
    setIsHidden(true); // Hide the search component when the "Hide" button is clicked
  };

  return (
    <div>
      {!isHidden && ( // Render the search component only when it's not hidden
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <button
              className="bg-red-600 absolute top-2 right-2 text-white hover:bg-red-700 rounded-md px-3 py-1"
              onClick={handleClose}
            >
              Hide
            </button>
            <h1 className="text-2xl font-semibold mb-4">Movie Search</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <div>Loading...</div>}
            <div className="overflow-y-auto h-96"> {/* Adjust the height as needed */}
              {results.map((movie) => (
                <div key={movie.id}>
                  <img src={`${IMAGE_BASE_URL}/${movie.poster_path}`} alt={movie.title} />
                  <h2 className="text-white">{movie.title}</h2>
                  <p className="text-white">Release Date: {movie.release_date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;

