import React from "react";
import './Track.css';

function Track(props) {
    return (
        <div className="Track">
            <div className="card">
                <h2>{props.Title}</h2>
                <h3>{props.Artist}</h3>
                <h3>{props.Album}</h3>
            </div>
        </div>
    );
};

export default Track;