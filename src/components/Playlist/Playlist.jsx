import Track from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist(props) {
    return (
        <div className="playlist">
            <h2>{props.playlist.name}</h2>
            <Tracklist 
                tracksArray={props.tracksArray}
            />
        </div>
    );
};