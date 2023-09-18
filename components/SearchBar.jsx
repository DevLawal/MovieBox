// components/SearchBar.js
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
     <button className="
    bg-red-600
    rounded-md 
    py-1 md:py-2  // Adjust the py value here for the height
    px-2 md:px-4
    w-auto 
    mt-2  // Add margin-top here
     mb-2  
    text-xs lg:text-lg 
    font-semibold
    flex
    flex-row
    items-center
    hover:bg-neutral-300
    transition
    " onClick={handleSearch}
>
  Search
</button>

    </div>
  );
}

export default SearchBar;
