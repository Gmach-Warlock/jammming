import React from "react";
import './SearchResults.css';
import Track from "../Track/Track";

function SearchResults() {
    return (
        <>
            <h2>Results</h2>
            <ul>
                <li><Track Title="When I come Around" Artist="Green Day" Album="Dookie" /></li>
                <li><Track Title="Away from the Sun" Artist="3 Doors Down" Album="3 Doors Down" /></li>
                <li><Track Title="Cruel Summer" Artist="Banarama" Album="Banarama" /></li>
            </ul>
        </>
    );
};

export default SearchResults;