import React, { useState, useEffect } from 'react';
import './AddSong.css'

const AddSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [runningTime, setRunningTime] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: releaseDate,
        genre: genre,
        running_time: runningTime
        };
        console.log(newSong)
        props.addNewSongProperty(newSong);

        setTitle('');
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');
        setRunningTime('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className='align'>
                    <label className='label'>Title</label>
                    <label className='label'>Artist</label>
                    <label className='label'>Album</label>
                    <label className='label'>Release Date</label>
                    <label className='label'>Genre</label>
                    <label className='label'>Running Time</label>
                </div>
                <div className='align'>
                    <input className='input' type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <input className='input' type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
                    <input className='input' type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
                    <input className='input' type="text" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
                    <input className='input' type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
                    <input className='input' type="text" value={runningTime} onChange={(event) => setRunningTime(event.target.value)} />
                </div>
                <div className='button'>
                    <button type="submit" >Add</button>
                </div>
            </div>
        </form>
  );
};

export default AddSong;

