import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import { tracksArray } from './tracksArray'
import PlaylistsContainer from './Components/PlaylistsContainer/PlaylistsContainer'



function App() {

  const [playlists, setPlaylists] = useState([]);
  const [searchResultsData, setSearchResultsData] = useState(tracksArray);
  const [searchData, setSearchData] = useState('');
  const [newplaylist, setNewPlaylist] = useState({});
  const [addingNewPlaylist, setAddingNewPlaylist] = useState(false);
  const [newPlaylistNameData, setNewPlaylistNameData] = useState('New Playlist');

  // Search functions

  const handleChangeSearchBar = (e) => {
    setSearchData(e.target.value)

  }

  const handleClickSearchBar = () => {
    setSearchResultsData(() => tracksArray.filter((track) => track.title == searchData))

    console.log(searchData)
    console.log(searchResultsData)
  }

  // Playlist functions 

  const addNewPlaylistForm = () => {
    setAddingNewPlaylist(true);
  };

  const handleChangeNewPlaylistNameData = (e) => {
    setNewPlaylistNameData(e.target.value)
  };

  const createNewPlaylist = (newPlaylistNameData) => {
    setPlaylists((prev) => [...prev, {
      name: newPlaylistNameData,
      tracksArray: []
    }])
    setAddingNewPlaylist(false);
    console.log(newPlaylistNameData)
  }


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
          searchResultsData={searchResultsData}
          searchData={searchData}
          tracksArray={tracksArray}
        />
        <PlaylistsContainer 
          playlists={playlists} 
          handleClickButtonCreatePlaylist={addNewPlaylistForm} 
          addingNewPlaylist={addingNewPlaylist} 
          handleChangeNewPlaylistNameData={handleChangeNewPlaylistNameData} 
          handleClickButtonSubmitNewPlaylist={createNewPlaylist}
        />
      </div>

    </>
  )
}

export default App
