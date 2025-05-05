import Track from "../Track/Track";
import { tracksArray } from "../tracksArray";
import ButtonAddToPlaylist from "./ButtonAddToPlaylist/ButtonAddToPlaylist";
import './Tracklist.css'


function Tracklist() {


    return (
        <div className="tracklist">
            <ul>
                {tracksArray.map((track) => 
                    <li key={track.key}><Track Title={track.Title} Artist={track.Artist} Album={track.Album}/><ButtonAddToPlaylist />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Tracklist;   