import { tracksArray } from "../../tracksArray";
import Track from "../Track/Track";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function SearchResults(props) {

    const searchArray = tracksArray.filter((track) => track.title.includes(props.searchTerms));

    return (
        <>
            <h2>Results</h2>
            <ul>
                {searchArray.map((track) => <li key={`${track.title}${track.artist}`}><Track 
                    title={track.title} 
                    artist={track.artist} 
                    album={track.album} 
                />{<i className="fa-solid fa-plus"></i>}</li>)}
            </ul>
        </>
    );
}