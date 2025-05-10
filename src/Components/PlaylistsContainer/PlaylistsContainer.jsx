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
            <button className="button-create-playlist" onClick={props.handleClickButtonCreatePlaylist}>Create New Playlist</button>
            {props.addingNewPlaylist && <div>
                <input 
                    type="text" 
                    name="new-playlist-name-data" 
                    id="new-playlist-name-data" 
                    onChange={props.handleChangeNewPlaylistNameData} placeholder="New Playlist"
                />
                <button 
                    className="button-create-playlist" 
                    onClick={props.handleClickButtonSubmitNewPlaylist}
                >Create</button>
            </div>}
        </div>
    );
};

