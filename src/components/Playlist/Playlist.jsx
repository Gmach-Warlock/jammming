

export default function Playlist(props) {

    return (
        <div className="flex-container flex-column">
            <h2>{props.playlistName}</h2>
            <ul>
                <li>one</li>
                <li>two</li>
            </ul>
        </div>
    );

    
}