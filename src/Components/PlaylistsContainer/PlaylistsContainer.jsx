import Playlist from "../Playlist/Playlist";


export default function PlaylistsContainer() {
    return (
        <div className="flex-container flex-column">
            <Playlist />
            <button  className="button button-create-playlist">Create a Playlist</button>
        </div>
    );
};