import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Throttle function
  const throttle = (func, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      func.apply(this, args);
    };
  };

  // Debounced search function
  const debouncedSearch = debounce((searchQuery) => {
    fetchData(searchQuery);
  }, 500);

  // Throttled search function
  const throttledSearch = throttle((searchQuery) => {
    fetchData(searchQuery);
  }, 500);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    // Choose either debounce or throttle here
    debouncedSearch(value);
    // throttledSearch(value);
  };

  const fetchData = async (searchQuery) => {
    console.log(searchQuery);
    // Fetch data from API based on search query
    // Update searchResults state
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
