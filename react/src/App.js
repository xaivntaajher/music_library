import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';

function App() {

  const[entries, setEntries] = useState ([])
  const[songs, setSongs] = useState([]);

  async function searchSongs(){
      const response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data.songs)
    }
  
    useEffect(() => {
      searchSongs();
    }, []);

  return (
    <div>
      <div><NavBar/></div>
      <div><SearchBar/></div>
      <div><AddSong parentEntries={entries}/></div>
      <div><MusicTable parentSongs={songs}/></div>

    </div>
  );
}

export default App;
