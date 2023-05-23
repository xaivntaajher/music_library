import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchSong = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchSongs() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/songs', {
        params: {
          title: searchTerm,
          artist: searchTerm,
          album: searchTerm,
          genre: searchTerm
        }
      });
      setSongs(response.data.songs);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchSongs();
  }, [searchTerm]);

  const titles = songs.map((song) => <p>{song.title}</p>);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title, artist, album, or genre"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={fetchSongs}>Search</button>
      <div>{titles}</div>
    </div>
  );
};

export default FetchSong;

