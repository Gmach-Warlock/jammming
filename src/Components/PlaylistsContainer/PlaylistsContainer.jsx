
import { useState } from "react";


export default function PlaylistsContainer() {

    const [playlists, setPlaylists] = useState([
        {
            name: "Playlist One",
            tracks: [
                        {
                            title: "Crazy Train",
                            artist: "Ozzy Osbourne",
                            album: "Blizzard of Oz"
                        },
                        {
                            title: "Bad Bad Leroy Brown",
                            artist: "Jim Croce",
                            album: "Photographs and memories"
                        },
                        {
                            title: "Shout",
                            artist: "Disturbed",
                            album: "The Sickness"
                        }
                    ]
        }
    ]);

    const [displayForm, setDisplayForm] = useState(false);
    const [nameInputData, setNameInputData] = useState('');
    const [changingName, setChangingName] = useState(false)

    const displayNameChangeForm = () => {
        setDisplayForm(true);
    }

    const createNewPlaylist = () => {
        console.log(nameInputData);
        setDisplayForm(false);
        setPlaylists((prev) => [...prev, {
            name: nameInputData,
            tracks: []
        }])
    }

    const [newNameInputData, setNewNameInputData] = useState('');
    const [newNameInput, setNewNameInput] = useState('');


    const changeName = () => {
        setNewNameInput(newNameInputData);
        playlists.playlist.name = newNameInput;
        setChangingName(false);
    }


    return (
        <>
            <div className="flex-container flex-column">
                {playlists.map((playlist) => <div key={`${playlist.name}${playlist.tracks}`}>
                    {!changingName? <h3 onClick={() => {
                        setChangingName(true);
                        console.log(changingName)
                    }}>{playlist.name}</h3> : <div>
                            <input type="text" name="playlist-name-change-input" id="playlist-name-change-input" onChange={(e) => setNewNameInputData(e.target.value)} />
                            <button onClick={changeName}>Change Name</button>
                        </div>}
                    <ul>
                        {playlist.tracks.map((track) => <li key={`${track.title}${track.artist}`}>
                            <span>{track.title}</span><br />
                            <span>{track.artist}</span><br />
                            <span>{track.album}</span>
                        </li>)}
                    </ul>
                </div>)}
                <button  className="button button-create-playlist" onClick={displayNameChangeForm}>Create a Playlist</button>
                {displayForm && <div className="new-playlist-form">
                        <input type="text" id="new-playlist-name-input" name="new-playlist-name-input" onChange={(e) => setNameInputData(e.target.value)} />
                        <button onClick={createNewPlaylist}>Create</button>
                    </div>}
            </div>
            
        </>
    );
};