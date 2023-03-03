import './App.css';
import Timer from './components/Clock';
import Counter from './components/Counter';
import MovieList from './components/MovieList';


function App() {
    const movies = [
        { title: "Man of Steel", year: 2013, cast: ["Hanry Cavil", "Russell Crowe"]},
        { title: "Harry Potter", year: 2002, cast: ["Daniel Redcliff", "Emma Watson"]},
        { title: "Lord of the Rings", year: 2005, cast: ["Orlando Bloom", "Gandalf the Grey"]},
        { title: "Cars", year: 2008, cast: ["Red Car", "Blue Car"]},
    ]


    return ( 
    <div className = "App" >
        <h1>REACT DEMO STUFF</h1>
        <Counter canReset/>
        <MovieList movies={movies}/>
        </div>
    );
}

export default App;