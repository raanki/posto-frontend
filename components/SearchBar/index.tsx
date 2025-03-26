import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-2 mb-6">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Rechercher..."
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-dark dark:text-white dark:border-gray-700"
      />
      <button
        onClick={handleSearch}
        className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90 transition"
      >
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
