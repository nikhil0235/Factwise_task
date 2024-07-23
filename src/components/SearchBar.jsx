import React from 'react';
import { LuSearch } from "react-icons/lu";

// Component for a search bar
const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    // Container to center the search bar and add margin at the bottom
    <div className="flex justify-center mb-4">
      {/* Search bar container with border, rounded corners, and padding */}
      <div className="flex items-center border-gray-300 w-4/5 h-15 font-semibold border-2 rounded-2xl pl-4">
        {/* Search icon */}
        <LuSearch className="text-gray-500 text-2xl" />
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search user"
          value={searchTerm}
          onChange={onSearch}
          className="h-full w-4/5 px-4 py-2 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
