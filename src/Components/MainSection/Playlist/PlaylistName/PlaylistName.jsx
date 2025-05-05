import './PlaylistName.css'
import { useState } from 'react';

export default function PlaylistName() {

    const [changingName, setChangingName] = useState(false);

    const [playlistNameInput, setPlaylistNameInput] = useState('');
    const [playlistName, setPlaylistName] = useState('Playlist')
    const handleClick = (e) => {
        if (playlistNameInput) {
            setPlaylistName(playlistNameInput);
            setChangingName(false);
        } else {
            setPlaylistName('Playlist');
            setChangingName(false);
        }

    }

    if(changingName) {
        return (
            <div className="playlist-name">
                <input type="text" id="playlistNameInput" name="playlistNameInput" onChange={(e) => setPlaylistNameInput(e.target.value)}/>
                <button type='submit' onClick={handleClick}>Change Name</button>
            </div>
        );
    } else {
        return (
            <div className="playlist-name">
                <h2 onClick={() => setChangingName(true)}>{playlistName}</h2>
            </div>
        );
    }
 
};

