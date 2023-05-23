import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSearch(searchTerm);

    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." value={searchTerm}onChange={(event) => setSearchTerm(event.target.value)}/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
