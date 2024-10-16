import React, { useState, useEffect } from 'react'
import './MovieCard.style.css'
const MovieCard = ({ movie }) => {
    const [genres, setGenres] = useState([])
    const fetchGenres = async () => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?&language=ko-KR';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            /* console.log(data); */
            const genreNameList = data.genres;
            setGenres(genreNameList);
        } catch (error) {
            console.error('Error fetching movies:', error);
            return;
        }
    }
    const show_genres = (genreIdList) => {
        /*   console.log("IdList", genreIdList);
          console.log("GenresName", genres); */
        if (genreIdList.length > 0 && genres.length > 0) {
            return genres?.filter(genre => genreIdList.includes(genre.id)).map(genre => genre.name).join(", ");
        }
    }


    useEffect(() => {
        fetchGenres();
    }, [])



    return (

        <div
            style={{
                backgroundImage:
                    "url(" +
                    `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
                    ")",
            }}
            className="movie-card"
        >
            {/* <div className="overlay">
                <div className="genre">
                    {show_genres(movie?.genre_ids)}
                </div>
            </div> */}

        </div>
    )
}

export default MovieCard