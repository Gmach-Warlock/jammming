import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'
import { tracksArray } from './tracksArray'



function App() {

  const [playlist, setPlaylist] = useState({
    name: 'Playlist',
    tracks: [
      {
        title: "One",
        artist: "U2",
        album: "Achtung Baby"
      }
    ]
  });

  let searchResults = tracksArray;

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar 
      />
      <div className="grid-container"> 
        <SearchResults 
          searchResults={searchResults}
        />
        <Playlist 
          playlist={playlist}
          tracks={playlist.tracks}
        />
      </div>

    </>
  )
}

export default App
