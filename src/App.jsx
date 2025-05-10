import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import { tracksArray } from './tracksArray'
import Playlist from './Components/Playlist/Playlist'


// Main App

function App() {
  // Search state variables

  const [searchTracksArray, setSearchTracksArray] = useState(tracksArray);
  const [searchData, setSearchData] = useState('');


  // Search functions

  const handleChangeSearchBar = (e) => {
    setSearchData(e.target.value)

  }

  const handleClickSearchBar = () => {
    setSearchTracksArray(tracksArray.filter((track) => track.title.includes(searchData) || track.artist.includes(searchData)))
    

    console.log(searchData)
    console.log(searchTracksArray)
  }

  // Playlists state variables


  const [playlistTracksArray, setPlaylistTracksArray] = useState([]);

  // Playlists functions 

  


  // JSX return 

  return (
    <>

      <h1>Jammming</h1>
      <SearchBar 
        handleChangeSearchBar={handleChangeSearchBar} 
        handleClickSearchBar={handleClickSearchBar}
      />
      <div className="grid-container"> 
        <SearchResults 
          searchData={searchData}
          tracksArray={searchTracksArray}
        />
        <Playlist 
          name="Playlist" 
          playlistTracksArray={playlistTracksArray}
        />
      </div>

    </>
  )
}

export default App
