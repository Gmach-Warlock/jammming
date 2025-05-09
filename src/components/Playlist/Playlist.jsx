import { useState } from "react";
import Track from "../Track/Track";

export default function Playlist() {

    const [playlistName, setPlaylistName] = useState('Playlist');
    const [nameInputIsVisible, setNameInputIsVisible] = useState(false);
    const [newNameData, setNewNameData] = useState('Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([
            {
                title: "Operator",
                artist: "Jim Croce",
                album: "Photographs and memories"
            },
            {
                title: "The Sickness",
                artist: "Disturbed",
                album: "The Sickness"
            },
            {
                title: "The Final Countdown",
                artist: "Europe",
                album: "The Final Countdown"
            }
    ]);

    const callNameForm = () => {
        setNameInputIsVisible(true)
    }


    const renamePlaylistSubmit = () => {
        if (newNameData) {
            setPlaylistName(newNameData);
            console.log(playlistName)
            setNameInputIsVisible(false)
        }

    }


    const playlist = {
        name: playlistName,
        tracks: playlistTracks
    };
    
    return (
        <div className="playlist">
            {!nameInputIsVisible && <h2 onClick={callNameForm}>{playlist.name}</h2>}
            {nameInputIsVisible && <div>
                    <input type="text" id="new-name-input" name="new-name-input" onChange={(e) => setNewNameData(e.target.value)}/>
                    <button onClick={renamePlaylistSubmit}>Rename</button>
                </div>}
            <ul>
                {playlist.tracks.map((track) => <li key={`${track.title}${track.artist}`}><Track 
                    title={track.title} 
                    artist={track.artist} 
                    album={track.album} 
                /></li>)}
            </ul>
        </div>
    );
};