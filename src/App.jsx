
import './App.css'
import Login from './components/Login/Login'

import PlaylistsContainer from './Components/PlaylistsContainer/PlaylistsContainer'
import SearchBar from './Components/SearchBar/SearchBar'
import SearchResults from './Components/SearchResults/SearchResults'



function App() {


  return (
    <>
      <Login />
      <h1>Jammming</h1>
      <div className="grid-container">
        <SearchBar />
        <PlaylistsContainer />  
      </div>

    </>
  )
}

export default App
