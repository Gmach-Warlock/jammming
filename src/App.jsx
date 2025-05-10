import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import { tracksArray } from './tracksArray'
import PlaylistsContainer from './Components/PlaylistsContainer/PlaylistsContainer'
import Login from './components/Login/Login'

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

  const [playlists, setPlaylists] = useState([]);
  const [newplaylist, setNewPlaylist] = useState({});
  const [addingNewPlaylist, setAddingNewPlaylist] = useState(false);
  const [newPlaylistNameData, setNewPlaylistNameData] = useState('New Playlist');

  // Playlists functions 

  const addNewPlaylistForm = () => {
    setAddingNewPlaylist(true);
  };

  const handleChangeNewPlaylistNameData = (e) => {
    setNewPlaylistNameData(e.target.value)
  };

  const createNewPlaylist = (newPlaylistNameData) => {

    setAddingNewPlaylist(false);
    console.log(newPlaylistNameData)
  }


  // JSX return 

  return (
    <>
      <Login />
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
        <PlaylistsContainer 
          playlists={playlists} 
          handleClickButtonCreatePlaylist={addNewPlaylistForm} 
          addingNewPlaylist={addingNewPlaylist} 
          handleChangeNewPlaylistNameData={handleChangeNewPlaylistNameData} 
          handleClickButtonSubmitNewPlaylist={createNewPlaylist}
          newPlaylistNameData={newPlaylistNameData}
        />
      </div>

    </>
  )
}

export default App
