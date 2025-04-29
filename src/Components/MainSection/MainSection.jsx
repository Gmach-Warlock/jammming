import './MainSection.css'
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Title from "./Title/Title";


function MainSection() {
    return (
        <main>
            <div className="background">
                <div className="overlay">
                    <Title />
                    <SearchBar />
                    <div className="flex-container">
                        <div><SearchResults /></div>
                        <div><Playlist /></div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default MainSection;