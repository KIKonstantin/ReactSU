import './App.css';
import {movies as movieData} from './movies';
import MovieList from './components/MovieList';
import { useState } from 'react';


function App() {
  const [movies, setMovies] = useState(movieData);
  console.log(movies);
  const onMovieDelete = (id) => {
    setMovies(state => 
      state.filter(x => x.imdbID !== id)
    );
  }
  return (
    <div className="App">
      <h1 className="movie-container-title">Movie Collection</h1>
      <MovieList movies={ movies } onMovieDelete={onMovieDelete}/>
    </div>
  );
}

export default App;
