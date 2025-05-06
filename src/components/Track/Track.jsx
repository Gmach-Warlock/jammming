

export default function Track(props) {
    return (
        <div className="track">
            <span>{props.title}</span><br />
            <span>{props.artist}</span><br />
            <span>{props.album}</span>
        </div>
    );
}