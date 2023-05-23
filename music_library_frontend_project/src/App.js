import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [songs, setSongs] = useState([]);
  
  function addNewSong(newSong) {
    
    let tempSongs = [newSong, ...songs]
    
    setSongs(tempSongs);

  }

    async function getSongs() {
    const response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data.songs);
  }
  
  
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div>
      <div>
        <div><NavBar /></div>
      </div>
      <div><AddSong addNewSongProperty={addNewSong} /></div>
      <h1 className='h1'>Filter Songs</h1>
      <div><SearchBar/></div>
      <h1 className='h1'>Song List</h1>
      <div><MusicTable parentSongs={songs} /></div>
    </div>
  );
}

export default App;

