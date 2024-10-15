import React, { useState } from "react";
import './Movies.style.css'
import MovieCard from '../../common/MovieCard/MovieCard'


const Movies = ({ mbti }) => {
    const SearchMbti = mbti.replace(/\s+/g, '');
    const [movies, setMovies] = useState([]);

    const mbtiGenres = {
        INFP: [14, 10749], // 판타지, 로맨스
        ENFP: [35, 10749], // 코미디, 로맨스
        INFJ: [14, 16], // 판타지, 애니메이션
        ENFJ: [10749], // 로맨스
        INTJ: [27, 53], // 공포, 스릴러
        INTP: [878], // SF
        ENTP: [28, 35], // 액션, 코미디
        ENTJ: [878], // SF
        ISFJ: [14, 12], // 판타지, 어드벤처
        ESFJ: [35, 10751], // 코미디, 패밀리
        ISTJ: [18, 53], // 드라마, 스릴러
        ISFP: [14, 16], // 판타지, 애니메이션
        ESFP: [10402, 10751], // 뮤지컬, 패밀리
        ISTP: [28, 53], // 액션, 스릴러
        ESTP: [28, 35], // 액션, 코미디
        ESTJ: [18], // 드라마
    };

    const fetchMovies = async (genreIds) => {
        const url = `https://api.themoviedb.org/3/discover/movie?&with_genres=${genreIds}&language=ko-KR&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmRmOTBiMjk1NDQ4YWIyNDJmNzcyMTY2MzVjZjRjMSIsIm5iZiI6MTcyODkwODI1Mi40NTQ5MDksInN1YiI6IjY0OTEzYWEzYzJmZjNkMDBlMmUxZWY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gKUX8OsjvWElvecJspSk6Mhe1vugV7RZeQHZYMJkUE'
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);

    }


    if (SearchMbti) {
        const genreIds = mbtiGenres[SearchMbti].join(',');
        fetchMovies(genreIds);
    }


    return (
        <div className="movie-container">

            {movies?.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
            ))}

        </div>
    );
};

export default Movies;
