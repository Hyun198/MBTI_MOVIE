import React, { useState } from 'react'
import Quiz from './Quiz';
const Home = () => {
    const [istestStart, SetIsTestStart] = useState(false);

    const startTest = () => {
        SetIsTestStart(true);
    }

    return (
        <div>
            <h1>MBTI별 영화 추천!</h1>
            {!istestStart ? (<button onClick={startTest}>테스트 하고 영화 추천 받기!</button>) : (<Quiz />)}

        </div>


    )
}

export default Home