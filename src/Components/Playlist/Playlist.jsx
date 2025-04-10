import React from "react";
import './Playlist.css';

function Playlist() {
    return (
        <>
            <label htmlFor="playlist"></label><br />
            <input type="text" name="playlist" id="playlist" /><br />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <button>Save to Spotify</button>
        </>
    );
};

export default Playlist;