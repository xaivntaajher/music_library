import React, { useState } from 'react';


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title, artist, album, or genre"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      
    </div>
  );
};

export default SearchBar;

