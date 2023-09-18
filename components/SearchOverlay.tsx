import React from 'react';
import SearchBar from './SearchBar';

const SearchOverlay = ({ onClose, onSearch }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          Close
        </button>
        <h1 className="text-2xl font-semibold mb-4">Movie Search</h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchOverlay;
