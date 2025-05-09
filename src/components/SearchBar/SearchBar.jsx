

export default function SearchBar(props) {
    return (
        <div className="searchbar">
            <input type="text" id="searchbar-input" name="searchbar-input" />
            <button className="searchbar-button-search">Search</button>
        </div>
    );
}