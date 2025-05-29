import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";
import "../css/Home.css";

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2022"},
        {id: 2, title: "Terminator", release_date: "2021"},
        {id: 3, title: "Terrifier", release_date: "2020"},
        {id: 4, title: "The Saw", release_date: "2019"},
        {id: 5, title: "Shining", release_date: "2018"}
    ]

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