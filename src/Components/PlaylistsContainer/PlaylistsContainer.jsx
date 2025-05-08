import Playlist from "../Playlist/Playlist";
import { useState } from "react";


export default function PlaylistsContainer() {

    const [playlists, setPlaylists] = useState([]);

    return (
        <>
            <div className="flex-container flex-column">
                <Playlist playlistName='Playlist One' />
                <button  className="button button-create-playlist">Create a Playlist</button>
            </div>
            
        </>
    );
};