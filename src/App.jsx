import './App.css'
import Playlist from './Components/Playlist/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './Components/SearchResults/SearchResults'




function App() {

  const playlist = {
    name: "Name",
    tracks: [
      {
        title: "Operator",
        artist: "Jim Croce",
        album: "Photographs and memories"
      },
      {
        title: "The Sickness",
        artist: "Disturbed",
        album: "The Sickness"
      },
    {
        title: "The Final Countdown",
        artist: "Europe",
        album: "The Final Countdown"
      }
    ]
  }

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="grid-container"> 
        <SearchResults />
        <Playlist 
          name={playlist.name} 
          tracks={playlist.tracks}
        />
      </div>

    </>
  )
}

export default App
