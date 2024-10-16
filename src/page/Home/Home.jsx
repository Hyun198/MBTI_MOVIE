import React, { useState } from 'react'
import Quiz from '../Quiz/Quiz'
import './Home.style.css';
const Home = () => {
    const [istestStart, SetIsTestStart] = useState(false);

    const startTest = () => {
        SetIsTestStart(true);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>MBTI별 영화 추천!</h1>
            {!istestStart ? (
                <div className="Test-Start">
                    <button onClick={startTest}>테스트 하고 영화 추천 받기!</button>
                    <img src="./mbti.jpg" alt="mbti" />
                </div>

            ) : (<Quiz />)}

        </div>


    )
}

export default Home