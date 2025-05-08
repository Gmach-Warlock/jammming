import { useState } from "react";



export default function SearchBar() {

    const [searchInputData, setSearchInputData] = useState('');

    const handleClick = () => {
        SearchBar.searchTerms = searchInputData;
    }

    return (
        <>
            <input type="text" name="searchbar" id="searchbar" onChange={(e) => setSearchInputData(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
        </>
    );
}