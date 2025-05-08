import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import './SearchBar.css'


export default function SearchBar() {

    const [searchInputData, setSearchInputData] = useState('');
    const [searchTerms, setSearchTerms] = useState('');

    const handleClick = () => { 
        setSearchTerms(searchInputData)
    }

    return (
        <>
            <div className="search-bar">
                <input type="text" name="searchbar" id="searchbar" onChange={(e) => setSearchInputData(e.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>
            <div className="search-results">
                <SearchResults searchTerms={searchTerms}/>
            </div>
        </>
    );
}