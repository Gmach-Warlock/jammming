import Track from "../Track/Track";


export default function Playlist(props) {
    return (
        <div className="playlist">
            <h2>{props.playlist.name}</h2>
            <ul>
                <li><Track 
                    title={props.tracks[0].title} 
                    artist={props.tracks[0].artist} 
                    album={props.tracks[0].album} 
                /></li>
            </ul>
        </div>
    );
};