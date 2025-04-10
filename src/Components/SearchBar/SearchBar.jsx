import React from "react";
import './SearchBar.css';

function SearchBar() {
    return (
        <>
            <label htmlFor="searchbar">Find a track</label><br />
            <input type="text" name="searchbar" id="searchbar" />
        </>
        );
};

export default SearchBar;