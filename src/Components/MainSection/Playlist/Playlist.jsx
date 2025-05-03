import './Playlist.css'
import { useState } from 'react';

function Playlist() {

    let playlistName = 'Playlist Name';
    let changingName = true;

    const [name, setName] = useState();

    const toggleChangingName = () => {
        if (changingName) {
            changingName = false;
        } else {
            changingName = true;
        }
    }
    
    const handleSubmit = () => {
        changeName();
    }

    const changeName = () => {
        setName(({target}) => {
            playlistName = target.value;
            changingName = false;
        })
    }

    if(changingName) {
        return (
            <div className="playlist">
                <input type="text" id="playlistNameInput" name="playlistNameInput" />
                <button type='submit' onSubmit={handleSubmit}>Change Name</button>
            </div>
        );
    }
        return (
            <div className="playlist">
                <h2 onClick={toggleChangingName}>{playlistName}</h2>
            </div>
        );
};

export default Playlist;