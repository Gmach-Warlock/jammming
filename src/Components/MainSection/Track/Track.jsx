import './Track.css'

function Track(props) {
    return (
        <div className="track">
            <h2>{props.Title}</h2>
            <h3>{props.Artist}</h3>
            <h3>{props.Album}</h3>
        </div>
    );
};

export default Track;