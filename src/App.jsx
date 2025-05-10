import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'
import { tracksArray } from './tracksArray'
import PlaylistsContainer from './Components/PlaylistsContainer/PlaylistsContainer'



function App() {

  const [playlists, setPlaylists] = useState([]);

  // search functions and states

  const [searchResultsData, setSearchResultsData] = useState(tracksArray);
  const [searchData, setSearchData] = useState('');

  const handleChangeSearchBar = (e) => {
    setSearchData(e.target.value)

  }

  const handleClickSearchBar = () => {
    setSearchResultsData(() => tracksArray.filter((track) => track.title == searchData))

    console.log(searchData)
    console.log(searchResultsData)
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
        />
      </div>

    </>
  )
}

export default App
