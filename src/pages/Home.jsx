import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";

function Home() {
    const movies = []

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("");
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for the movies..." className="search-input" value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="searchbutton">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    );
}

export default Home;