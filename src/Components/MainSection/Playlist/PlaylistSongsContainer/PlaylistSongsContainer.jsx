import { useState } from "react";


export default function PlaylistSongsContainer() {
    const [currentPlaylistTrackArray, setCurrentPlaylistTrackArray] = useState([{string: 'Track One'}, {string: 'Track Two'}]);

    return (
        <>
            <ul className="playlist-songs-container">
                {currentPlaylistTrackArray.map((track) => <li key={`${track.string}`}>{track.string}</li>)}
            </ul>
        </>

    );
};