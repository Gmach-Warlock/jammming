
import Track from "../Track/Track";


export default function Tracklist(props) {
    return (
        <div className="tracklist">
            <ul>
                {props.tracksArray.map((track) => <li key={`${track.title}${track.artist}`}><Track 
                    title={track.title} 
                    artist={track.artist} 
                    album={track.album} 
                    handleClickAddTrack={props.handleClickAddTrack}
                /></li>)}
            </ul>
        </div>
    );
};