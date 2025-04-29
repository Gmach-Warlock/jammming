import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist';

function SearchResults() {
    return (
        <div className="search-results">
            <h2>Results</h2>
            <ul>
                <li><Tracklist /></li>
            </ul>
        </div>
    );
};
 

export default SearchResults;