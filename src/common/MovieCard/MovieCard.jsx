import React from 'react'

const MovieCard = ({ movie }) => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    const fetchGenres = async () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        const options = {
            headers: {
                accept: 'application/json',
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
    const fetchMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`; // API 키를 URL에 포함
        const options = {
            headers: {
                accept: 'application/json'
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
        fetchGenres();
        fetchMovies();
    }, [])

    const show_genres = (genreIdList) => {
        /*   console.log("IdList", genreIdList);
          console.log("GenresName", genres); */
        if (genreIdList.length > 0 && genres.length > 0) {
            return genres.filter(genre => genreIdList.includes(genre.id)).map(genre => genre.name).join(", ");
        }
    }

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
            <div className="overlay">
                <h1 className="title">{movie.title}</h1>
                <div className="genre">
                    {show_genres(movie?.genre_ids).map((name) => (
                        <div key={name} className="movie-badge">{name}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MovieCard