import Movie from "./Movie";
import React from 'react'

export default function MovieList({movies, onMovieDelete}){
  return (
    <ul className="movie-container">
        {movies.map(m => (
            <li key={m.imdbID}>
            <Movie {...m} onMovieDelete={onMovieDelete} /> 
            </li>
        ))}
    </ul>
  );
}