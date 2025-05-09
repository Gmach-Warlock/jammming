import './Track.css'

export default function Track(props) {
    return (
        <div className="track">
            <h3>{props.title}</h3>
            <span className="marker-text">Artist: </span><span>{props.artist}</span><br />
            <span className="marker-text">Album: </span><span>{props.album}</span>sp
        </div>
    );
};