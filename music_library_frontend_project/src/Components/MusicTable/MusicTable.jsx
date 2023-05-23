import React from "react";
import './MusicTable.css'

const MusicTable = ({ searchInput, parentSongs }) => {

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
    <table className="table">
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
        {songFilter.map((song) => (
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
  );
};

export default MusicTable;
