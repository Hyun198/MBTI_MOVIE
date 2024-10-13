import API_KEY from 'REACT_APP_API_KEY';

const fetchMovies = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list"
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

console.log(fetchMovies());