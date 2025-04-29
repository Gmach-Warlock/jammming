import './SearchBar.css'
import SearchButton from './SearchButton/SearchButton';


function SearchBar() {
    return (
        <div className='searchbar-section'>
            <label htmlFor="searchbar">Find a Track</label><br />
            <input type="text" name='searchbar' id='searchbar' /><br />
            <SearchButton />
        </div>
    );
};

export default SearchBar;