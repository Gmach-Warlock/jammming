

export default function SearchBar() {
    return (
        <div className="searchbar">
            <input type="text" id="searchbar-input" name="searchbar-input" />
            <label htmlFor="searchbar-input">Search</label>
        </div>
    );
}