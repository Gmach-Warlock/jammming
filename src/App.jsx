
import './App.css'
import Login from './components/Login/Login'
import Playlist from './components/Playlist/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'


function App() {


  return (
    <>
      <Login />
      <h1>Jammming</h1>
      <SearchBar />
      <div className="flex-container results-playlist-container">
        <div><SearchResults /></div>
        <div><Playlist /></div>
      </div>
    </>
  )
}

export default App
