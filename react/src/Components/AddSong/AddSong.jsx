import React, { useState, useEffect } from 'react';

import axios from 'axios';

const AddSong = (props) => {
    
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
                {props.parentEntries.map((entry) => {
                    return (
                        <tr>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.releaseDate}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.runningTime}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default AddSong;