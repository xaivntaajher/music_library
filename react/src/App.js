import React, { useState } from 'react';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {

  const[entries, setEntries] = useState ([])

  return (
    <div>
      <div><NavBar/></div>
      <div><SearchBar/></div>
      <div><MusicTable parentEntries={entries}/></div>
    </div>
  );
}

export default App;
