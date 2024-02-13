import { useEffect,useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=81bc5dbe';
// const movie1 ={
  
//     "Title": "The Matrix Revolutions",
//     "Year": "2003",
//     "imdbID": "tt0242653",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"

// }
const App = () => {
  const [searchTerm,setSearcTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    
    
  }

  useEffect(() => {
    searchMovies('Matrix');
  }, []);

  return (
    <div className="app">
      <h1>MovieHouse</h1>
      <div className="search">
        <input type="text" placeholder='Search Movie...' 
        value={searchTerm} 
        onChange={ (e)=> setSearcTerm(e.target.value)} />
        <img src={SearchIcon} alt='Search Icon'
        onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
        
          ) )}
          </div>
        ) :(
          <div className="empty">
            <h2>Movie Not Found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
