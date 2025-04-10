import './global.css';
import './App.css';
import Login from './Components/Login/Login';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>

        </div>

        <div>
          <h1>Jammming</h1>
        </div>

        <div className='Login'>
          <Login />
        </div>

      </header>

      <div className='SearchBar'>
        <div>
          <SearchBar />
        </div>
      </div>

      <div className='main-container'>
        <div className='SearchResults'>

          <div>
            <SearchResults />
          </div>
          
        </div>

        <div className='Playlist'>

          <div>
            <Playlist />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
