import Playlist from "../Playlist/Playlist";


export default function PlaylistsContainer(props) {
    return (
        <div className="playlists-container">
            {props.playlists.map((playlist) => <Playlist 
                name={playlist.name}
                playlist={playlist}
                tracks={playlist.tracks}
                tracksArray={playlist.tracks}
            />)}
            <button className="button-create-playlist">Create New Playlist</button>
        </div>
    );
};

