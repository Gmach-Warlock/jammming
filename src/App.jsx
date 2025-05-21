import './App.css'

import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import { tracksArray } from './tracksArray'
import Playlist from './components/Playlist/Playlist'
import styles from './App.module.css'




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
    setSearchTracksArray(tracksArray.filter((track) => track.title.includes(searchData) || track.artist.includes(searchData) || track.album.includes(searchData)))
    

    console.log(searchData)
    console.log(searchTracksArray)
  }

  // Playlists state variables

  const [isRenamingPlaylist, setIsRenamingPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("Playlist")
  const [playlistNameData, setPlaylistNameData] = useState('');
  const [playlistTracksArray, setPlaylistTracksArray] = useState([]);

  // Playlists functions 

  const togglePlaylistForm = () => {
    setIsRenamingPlaylist(true)
  };

  const getPlaylistRenameData = (e) => setPlaylistNameData(e.target.value)

  const addTrack = (e) => {
    setPlaylistTracksArray((prev) => [...prev, {
      title: "Dude",
      artist: "Man",
      album: "Car"
    }])
    console.log(playlistTracksArray)
    console.log(e.target.name)
  }

  const renamePlaylist = () => {
    console.log(playlistNameData)
    setPlaylistName(playlistNameData);
    setIsRenamingPlaylist(false)
  }



  // JSX return 

  return (
    <div className={styles.app}>
      <div className={styles.overlay}>
  
        <h1>Jammming</h1>
        <SearchBar 
          handleChangeSearchBar={handleChangeSearchBar} 
          handleClickSearchBar={handleClickSearchBar}
        />
        <div className="grid-container"> 
          <SearchResults 
            searchData={searchData}
            tracksArray={searchTracksArray} 
            handleClickAddTrack={addTrack} 
          />
          <Playlist 
            name={playlistName} 
            tracksArray={playlistTracksArray}
            handleClickRenamePlaylist={togglePlaylistForm} 
            isRenamingPlaylist={isRenamingPlaylist}
            handleChangePlaylistNameData={getPlaylistRenameData}
            handleClickSubmitRename={renamePlaylist}
            handleClickAddTrack={addTrack}
          />
        </div>

      </div>

    </div>
  )
}

export default App
