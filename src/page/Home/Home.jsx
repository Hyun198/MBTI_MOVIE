import React, { useState } from 'react'
import Quiz from '../Quiz/Quiz'
import './Home.style.css';
import Movies from "../Movie/Movies";
const Home = () => {
    const [istestStart, SetIsTestStart] = useState(false);

    const startTest = () => {
        SetIsTestStart(true);
    }

    return (
        <div className="Test-Start">
            <h1>MBTI별 영화 추천!</h1>
            {!istestStart ? (
                <div>
                    <button onClick={startTest}>테스트 하고 영화 추천 받기!</button>
                </div>

            ) : (<Quiz />)}

        </div>


    )
}

export default Home