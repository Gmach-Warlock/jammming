import './Track.css'

export default function Track({ artist, title, album}) {
    return (
        <div className="track">
            
            <div className="flex-container space-between">
                <div className="track-info">
                    <h3>{artist}</h3>
                    <h3>{title}</h3>
                    <h3>{album}</h3>
                </div>
            </div>
            
        </div>
    );
};