import React, { useState, useEffect } from "react";
import MovieSlider from "../../common/MovieSlider/MovieSlider";
const Movies = ({ mbti }) => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
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
        const url = genreIds
            ? `https://api.themoviedb.org/3/discover/movie?with_genres=${genreIds.join(",")}&language=ko-KR`
            : "https://api.themoviedb.org/3/movie/popular?&language=ko-KR";

        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            /* console.log("movies: ", data.results); */
            setMovies(data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
            return;
        }
    };

    useEffect(() => {
        if (mbti) {
            const genreIds = mbtiGenres[mbti]; // MBTI에 해당하는 장르 ID 가져오기
            //console.log("genreIds: ", genreIds);
            fetchMovies(genreIds); // MBTI에 해당하는 영화 가져오기
        } else {
            fetchMovies(); // 기본 영화 가져오기
        }
    }, [mbti]);

    return (
        <div>
            <h1>추천 영화</h1>
            <MovieSlider movies={movies} />
        </div>
    );
};

export default Movies;
