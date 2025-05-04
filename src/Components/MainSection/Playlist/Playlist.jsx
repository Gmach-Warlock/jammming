import './Playlist.css'
import { useState } from 'react';

function Playlist() {

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
            <div className="playlist">
                <input type="text" id="playlistNameInput" name="playlistNameInput" onChange={(e) => setPlaylistNameInput(e.target.value)}/>
                <button type='submit' onClick={handleClick}>Change Name</button>
            </div>
        );
    } else {
        return (
            <div className="playlist">
                <h2 onClick={() => setChangingName(true)}>{playlistName}</h2>
            </div>
        );
    }
 
};

export default Playlist;