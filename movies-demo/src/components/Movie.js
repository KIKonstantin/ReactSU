import { useEffect } from "react";

export default function Movie({
    imdbID,
    Title,
    Year,
    Rated,
    Plot,
    Poster,
    Director,
    onMovieDelete
 }){

    useEffect(() => {
        
    })

  return(
      <article className='movieCard'>
            <img src={Poster} alt={Title} />
        <main className='movie-content'>
            <h3 className='movie-title'>{Title}, {Year}</h3>
            <p>{Plot}</p>
        </main>
        <footer className='movie-director'>
            <p>Director: {Director}</p>
            <button onClick={() => onMovieDelete()}>Delete</button>
        </footer>
    </article>
  );
}