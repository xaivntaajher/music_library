import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [running_time, setRunningTime] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre,
        running_time: running_time
        };
        console.log(newSong)
        props.addNewSongProperty(newSong);

        // setTitle('');
        // setArtist('');
        // setAlbum('');
        // setReleaseDate('');
        // setGenre('');
        // setRunningTime('');
    }

    // const[songs, setSongs] = useState([]);

    // async function getSongs(){
    //     const response = await axios.get('http://127.0.0.1:5000/api/songs');
    //     setSongs(response.data.songs)
    // }

    // useEffect(() => {
    //     getSongs();
    // }, [songs]);



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date</label>
                <input type="text" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div>
                <label>Running Time</label>
                <input type="text" value={running_time} onChange={(event) => setRunningTime(event.target.value)} />
            </div>
            <button type="submit" >Add</button>
        </form>
  );
};

export default AddSong;

