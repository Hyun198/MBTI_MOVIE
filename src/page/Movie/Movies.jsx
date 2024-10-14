import React, { useState, useEffect } from 'react'
import MovieSlider from '../../common/MovieSlider/MovieSlider';
const Movies = () => {

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?&language=ko-KR&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            /* console.log("movies: ", data.results); */
            setMovies(data.results);
            return data;

        } catch (error) {
            console.error('Error fetching movies:', error);
            return;
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [])



    return (
        <div>
            <h1>추천 영화</h1>
            <MovieSlider movies={movies} />
        </div>

    )
}

export default Movies