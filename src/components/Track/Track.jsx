import './Track.css'

export default function Track(props) {
    return (
        <div className="track">
            
            <div className="flex-container space-between">
                <div className="track-info">
                    <h3>{props.artist}</h3>
                    <h3>{props.title}</h3>
                    <h3>{props.album}</h3>
                </div>

                <div className="button-add-to-playlist align-content-center">
                    <button><i className="fa-solid fa-plus" onClick={props.handleClickAddTrack}></i></button>
                </div>
            </div>
            
        </div>
    );
};