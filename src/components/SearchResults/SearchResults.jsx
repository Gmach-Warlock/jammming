
import Tracklist from "../Tracklist/Tracklist";


export default function SearchResults(props) {
 return (
    <div className="search-results">
        <h2>Results</h2>
        <Tracklist 
            tracksArray={props.tracksArray}
            handleClickAddTrack={props.handleClickAddTrack}
        />
    </div>
 );
};