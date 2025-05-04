import Track from "../Track/Track";
import { tracksArray } from "../tracksArray";

function Tracklist() {

    return (
        <div className="tracklist">
            <ul>
                {tracksArray.map((track) => 
                    <li key={track.key}><Track Title={track.Title} Artist={track.Artist} Album={track.Album}/></li>
                )}
            </ul>
        </div>
    );
};

export default Tracklist;   