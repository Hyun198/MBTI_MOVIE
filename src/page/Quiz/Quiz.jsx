import React, { useState, useEffect } from 'react'
import questions from '../../questions'
import './Quiz.style.css'

const Quiz = () => {

    //이전, 다음 버튼을 눌렀을 때 전에 선택해놓은게 남아 있게 만들기
    //이전에 선택했던 문제에 대해 답을 바꿨을때 count가 그거에 맞춰서 변경되게 하기


    /* questions.forEach(question => (
        console.log(question.choices)
    )) */
    const shuffleArray = (array) => {
        return array
            .map((item) => ({ item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ item }) => item);
    };



    const [selectedChoice, setSelectedChoice] = useState({});

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [counts, setCounts] = useState({
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    });

    const [isFinished, setIsFinished] = useState(false);
    const [Mbti, setMbti] = useState("");



    const handle_Choice_Change = (event) => {
        const selectedType = currentQuestion.choices[event.target.value].type;
        setSelectedChoice(selectedType);
        /* console.log(selectedType) */
    }

    const handle_Prev_Question = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex =>
                prevIndex - 1
            );
        }
    }


    const handle_Next_Question = () => {
        if (selectedChoice) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [selectedChoice]: prevCounts[selectedChoice] + 1,
            }));


            if (currentQuestionIndex === shuffledQuestions.length - 1) {
                setIsFinished(true);
                show_mbti();
            } else {
                setCurrentQuestionIndex(prevIndex =>
                    prevIndex + 1
                );
            }
        }
    };

    const show_mbti = () => {
        const mbti = [
            counts.E >= counts.I ? "E" : "I",
            counts.S >= counts.N ? "S" : "N",
            counts.T >= counts.F ? "T" : "F",
            counts.J >= counts.P ? "J" : "P",
        ].join("");

        setMbti(mbti);
    }

    const GoTo_Home = () => {
        window.location.href = "/";
    }


    useEffect(() => {
        const shuffled = shuffleArray(questions);
        setShuffledQuestions(shuffled);

    }, [])

    const currentQuestion = shuffledQuestions[currentQuestionIndex];


    useEffect(() => {
    }, [counts])


    return (
        <div>
            {isFinished ? (
                <div>
                    테스트가 끝났습니다!
                    <ul>
                        {Object.entries(counts).map(([key, value]) => (
                            <li key={key}>
                                {key}: {value}
                            </li>
                        ))}
                        <p>{Mbti}</p>
                    </ul>
                    <button onClick={GoTo_Home}>처음으로</button>

                </div>
            ) : (

                currentQuestion ? (
                    <div className="quiz-container" >
                        <h2>{currentQuestion.question}</h2>
                        {Object.entries(currentQuestion.choices).map(([key, choice]) => (
                            <div className="quiz-radio" key={key}>
                                <label>
                                    <input
                                        type="radio"
                                        name="choice"
                                        value={key}
                                        checked={selectedChoice === choice.type}
                                        onChange={handle_Choice_Change}
                                    />
                                    {choice.label}
                                </label>
                            </div>
                        ))
                        }
                        <div className="buttons">
                            <button onClick={handle_Prev_Question}>이전</button>
                            <button onClick={handle_Next_Question}>다음</button>
                        </div>


                    </div >
                ) : (
                    <p>로딩중...</p> // 아직 질문이 준비되지 않았을 때 로딩 메시지 출력
                )
            )
            }

        </div>
    )
}

export default Quiz