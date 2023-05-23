import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css'

const SearchBar = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/songs');
        setSongs(response.data.songs);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchSongs();
  }, []);

  useEffect(() => {
    const filtered = songs.filter((song) => {
      const { title, artist, album, genre, release_date, running_time } = song;
      const lowerSearchTerm = searchTerm.toLowerCase();

      return (
        title.toLowerCase().includes(lowerSearchTerm) ||
        artist.toLowerCase().includes(lowerSearchTerm) ||
        album.toLowerCase().includes(lowerSearchTerm) ||
        genre.toLowerCase().includes(lowerSearchTerm) ||
        release_date.toLowerCase().includes(lowerSearchTerm) ||
        String(running_time).toLowerCase().includes(lowerSearchTerm)
      );
    });

    setFilteredSongs(filtered);
  }, [searchTerm, songs]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className='button' >
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
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Running Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredSongs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
              <td>{song.running_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;




