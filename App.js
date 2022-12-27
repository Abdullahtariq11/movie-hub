import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import './App.css'
import MovieCard from './MovieCard'
import searchIcon from './search.svg'
//1cbd86e


const apiUrl='http://www.omdbapi.com/?i=tt3896198&apikey=1cbd86e';



const App = () =>{

    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    
    // useeffect function (hooks)
    useEffect(() => {
        searchMovie('Batman');
    }, [])

    //this will call our API, using asynchronous function
    const searchMovie = async(title) => {
        const response = await fetch (`${apiUrl}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    } ;



    return(
        <div className='App'>
            <h1>Movie Hub</h1>
            <div className='search'>
                <input
                    placeholder='Search for movie'
                    value={searchTerm} //value statically set
                    onChange={(e)=>{setSearchTerm(e.target.value)}} //to change the value
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=>{searchMovie(searchTerm)}}
                />
            </div> 
            {movies?.length>0?(
            <div className='container'>
                {
                    movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))
                }
            </div>
            ):(
            <div className='empty'>
                <h2>No movies Found</h2>
            </div>               
            ) 
            }
        </div>
            
    );
}

export default App;