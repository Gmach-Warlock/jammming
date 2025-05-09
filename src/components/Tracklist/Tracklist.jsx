import { tracksArray } from "../../tracksArray";
import Track from "../Track/Track";

export default function Tracklist() {
    return (
        <div className="tracklist">
            <ul>
                {tracksArray.map((track) => <li key={track.title}><Track 
                    title={track.title} 
                    artist={track.artist} 
                    album={track.album} 
                /></li>)}
            </ul>
        </div>
    );
}