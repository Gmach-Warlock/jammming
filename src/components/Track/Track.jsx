

export default function Track(props) {
    return (
        <div className="track">
            <h3>{props.title}</h3>
            <span>{props.artist}</span><br />
            <span>{props.album}</span>
        </div>
    );
}