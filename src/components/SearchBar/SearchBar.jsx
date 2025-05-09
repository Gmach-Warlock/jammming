

export default function SearchBar(props) {
    return (
        <div className="searchbar">
            <input type="text" id="searchbar-input" name="searchbar-input" onChange={props.handleChangeSearchBar}/>
            <button className="searchbar-button-search" onClick={props.handleClickSearchBar}>Search</button>
        </div>
    );
}