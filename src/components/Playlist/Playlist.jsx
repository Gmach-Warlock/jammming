import Track from "../Track/Track";

export default function Playlist(props) {
    return (
        <div className="playlist">
            <h2 onClick={props.handleClickRenamePlaylist}>{props.name}</h2>
            {props.isRenamingPlaylist && <div>
                <input 
                    type="text" 
                    name="rename-playlist-input" 
                    id="rename-playlist-input" 
                    onChange={props.handleChangePlaylistNameData}
                />
                <button 
                    className="button-rename-playlist" 
                    onClick={props.handleClickSubmitRename}
                >Rename</button>
            </div>}
            <ul>
                {props.tracksArray.map((track) => <li key={`${track.title}${track.artist}`}>
                    <Track 
                        title={track.title} 
                        artist={track.artist} 
                        album={track.album} 
                    />
                </li>)}
            </ul>
            <button className="save-to-spotify" onClick={() => console.log(import.meta.env.REACT_APP_SPOTIFY_API_BASE_URL)}>Save</button>
        </div>
    );
}