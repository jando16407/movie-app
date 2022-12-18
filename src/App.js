import { useState,  useEffect } from 'react';

import MovieCard from './MovieCard';

// 233194a0 

import './App.css';
import SearchIcon from './search.svg'; 

const API_URL = 'http://www.omdbapi.com?apikey=233194a0';

const movie1 = {
    'Title': 'movie title',
    'Year': 'movie year',
    'imdbID': 'tt2586634',
    'Type': 'movie',
    'Poster': 'N/A'
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        

        // console.log(data.Search); 
        // console.log(JSON.stringify(data.Search)); 
        // console.log(JSON.stringify(data)); 
        setMovies(data.Search); 
    };

    useEffect(()=>{

        searchMovies('marvel');
    }, []);
    return (
        <div className='app'>
            <h1>Movie App</h1>

            <div className='search'>
                <input 
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange={(e) =>  setSearchTerm (e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))} 
                    </div>
                ) : (
                    <div className='empty'>
                        <span>No movies found</span>
                    </div>
                )}

        </div>

    )
}

export default App;