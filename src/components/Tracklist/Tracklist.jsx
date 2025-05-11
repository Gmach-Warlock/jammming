import './Tracklist.css'
import Track from "../Track/Track";


export default function Tracklist(props) {
    return (
        <div className="tracklist">
            <ul>
                {props.tracksArray.map((track) => <li 
                    key={`${track.title}${track.artist}`} 
                    className='flex-container space-between trackCard'
                >
                    <div>
                        <Track 
                            title={track.title} 
                            artist={track.artist} 
                            album={track.album} 
                            handleClickAddTrack={props.handleClickAddTrack}
                        />
                    </div>

                    <div className='align-content-center'>
                        <button 
                            className="add-track"
                        ><i 
                            className="fa-solid fa-plus" 
                            onClick={props.handleClickAddTrack}
                        ></i>
                        </button>
                    </div>

                </li>)}
            </ul>
        </div>
    );
};