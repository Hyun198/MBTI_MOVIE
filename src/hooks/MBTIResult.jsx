import React, { useEffect, useState } from 'react'

const MBTIResult = ({ mbtiType }) => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

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
    }

    return (
        <div>MBTIResult</div>
    )
}

export default MBTIResult