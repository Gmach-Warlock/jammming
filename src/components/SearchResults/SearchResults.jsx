import Track from "../Track/Track";


export default function SearchResults(props) {
 return (
    <div className="search-results">
        <h2>Results</h2>
        <ul>
            {props.searchResultsData.map((track) => <li key={`${track.title}${track.artist}`}><Track 
                title={track.title} 
                artist={track.artist} 
                album={track.album} 
            /></li>)}
        </ul>
    </div>
 );
};