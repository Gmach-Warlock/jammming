import PlaylistName from "./PlaylistName/PlaylistName";
import PlaylistSongsContainer from "./PlaylistSongsContainer/PlaylistSongsContainer";
import SaveToSpotifyButton from "./SaveToSpotifyButton/SaveToSpotifyButton";


export default function Playlist() {
    return (

        <>
            <PlaylistName />
            <PlaylistSongsContainer />
            <SaveToSpotifyButton />
        </>    

    );
};