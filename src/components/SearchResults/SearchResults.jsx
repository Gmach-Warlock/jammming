import Tracklist from "../Tracklist/Tracklist";
import Track from "../Track/Track";


export default function SearchResults() {
    return (
        <>
            <h2>Results</h2>
            <ul>
                <li><Track 
                    title="one"
                    artist="u2"
                    album="achtung baby"
                /></li>
            </ul>
        </>
    );
}