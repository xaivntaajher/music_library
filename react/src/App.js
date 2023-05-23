import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';

function App() {
  const [songs, setSongs] = useState([]);

  function addNewSong(newSong) {
    
    let tempSongs = [newSong, ...songs]
    
    setSongs(tempSongs);

  }

  useEffect(() => {
    async function searchSongs() {
      const response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data.songs);
    }

    searchSongs();
  }, []);

  

  return (
    <div>
      <div>
        <div><NavBar /></div>
        <div><SearchBar /></div>
      </div>
      <div><AddSong addNewSongProperty={addNewSong} /></div>
      <div><MusicTable parentSongs={songs} /></div>
    </div>
  );
}

export default App;

