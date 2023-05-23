import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicTable = ({ searchInput, parentSongs }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function getSongs() {
      const response = await axios.get("http://127.0.0.1:5000/api/songs");
      setSongs(response.data.songs);
    }

    getSongs();
  }, []);

  let songFilter = parentSongs.filter((song) => {
    const lowerSearchInput = searchInput ? searchInput.toLowerCase() : "";
    const lowerTitle = song.title ? song.title.toLowerCase() : "";
    const lowerAlbum = song.album ? song.album.toLowerCase() : "";
    const lowerArtist = song.artist ? song.artist.toLowerCase() : "";
    const lowerGenre = song.genre ? song.genre.toLowerCase() : "";

    let songMatch = false;

    if (lowerTitle.includes(lowerSearchInput)) {
      songMatch = true;
    } else if (lowerAlbum.includes(lowerSearchInput)) {
      songMatch = true;
    } else if (lowerArtist.includes(lowerSearchInput)) {
      songMatch = true;
    } else if (song.release_date && song.release_date.includes(searchInput)) {
      songMatch = true;
    } else if (lowerGenre.includes(lowerSearchInput)) {
      songMatch = true;
    }

    return songMatch;
  });

  return (
    <table>
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
        {songFilter.map((song) => {
          return (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
              <td>{song.running_time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;
