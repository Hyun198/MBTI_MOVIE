import React, { useState, useEffect } from "react";
import questions from "../../questions";
import "./Quiz.style.css";
import Movies from "../Movie/Movies";
import ProgressBar from "@ramonak/react-progress-bar";

const shuffle_questions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 문제의 인덱스
    const [selectedChoice, setSelectedChoice] = useState({}); // 각 문제에 대한 선택된 답 저장
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

    const [mbti, setMbti] = useState("");
    const [shuffled_questions, setShuffled_questions] = useState([]);

    useEffect(() => {

        const shuffled = shuffle_questions([...questions]);
        setShuffled_questions(shuffled);
    }, []);

    const progressPercentage = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
    const currentQuestion = shuffled_questions[currentQuestionIndex];

    const handle_Choice_Change = (event) => {
        const selectedType = currentQuestion.choices[event.target.value].type;
        setSelectedChoice((prevChoices) => ({
            ...prevChoices,
            [currentQuestionIndex]: selectedType,
        }));
    };

    const handle_Next_Question = () => {
        const currentSelectedChoice = selectedChoice[currentQuestionIndex]; // 현재 선택된 답

        if (currentSelectedChoice) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [currentSelectedChoice]: prevCounts[currentSelectedChoice] + 1,
            }));

            // 마지막 문제인지 체크
            if (currentQuestionIndex === questions.length - 1) {
                const mbti = `${counts.E >= counts.I ? "E" : "I"}
                ${counts.S >= counts.N ? "S" : "N"}
                ${counts.T >= counts.F ? "T" : "F"}
                ${counts.J >= counts.P ? "J" : "P"}`;
                setMbti(mbti);
                setIsFinished(true);
            } else {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // 다음 문제로 이동
            }
        } else {
            alert("답변을 하나 선택해주세요!"); // 답변을 선택하지 않았으면 경고
        }
    };

    // 이전 버튼 클릭 시 실행되는 함수
    const handle_Previous_Question = () => {
        const currentSelectedChoice = selectedChoice[currentQuestionIndex]; // 현재 선택된 답

        if (currentSelectedChoice) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [currentSelectedChoice]: prevCounts[currentSelectedChoice] - 1,
            }));
        }
        // 이전 문제로 이동
        setCurrentQuestionIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    return (
        <div>
            {isFinished ? (
                <div>
                    <div className="quiz-result">
                        <h2>당신의 MBTI는 {mbti} 입니다!</h2>
                        <a href="/">테스트 다시 하기</a>
                    </div>
                    <Movies mbti={mbti} />
                </div>
            ) : (
                <>
                    <div className="quiz-container">
                        {currentQuestion ? ( // currentQuestion이 존재할 때만 렌더링
                            <>
                                <ProgressBar
                                    completed={progressPercentage}
                                    bgColor="#326ccd"
                                    height="20px"
                                    labelAlignment="center"
                                    labelSize="12px"
                                    transitionDuration="0.3s"
                                />
                                <h2>{currentQuestion.question}</h2>
                                <form>
                                    {Object.entries(currentQuestion.choices).map(([key, choice]) => (
                                        <div className={`form-input ${selectedChoice[currentQuestionIndex] === choice.type ? 'selected' : ''}`} key={key}>
                                            <input
                                                type="radio"
                                                name={`question-${currentQuestionIndex}`}
                                                value={key} // choice의 key 값
                                                onChange={handle_Choice_Change} // 답변 선택 시 함수 호출
                                                checked={selectedChoice[currentQuestionIndex] === choice.type} // 선택된 값 유지
                                            />
                                            {choice.label}
                                        </div>
                                    ))}
                                </form>
                                <div className="handling_button">
                                    <button onClick={handle_Previous_Question} disabled={currentQuestionIndex === 0}>이전</button>
                                    <button onClick={handle_Next_Question}>다음</button>
                                </div>

                            </>
                        ) : (
                            <h2>문제가 없습니다.</h2> // 문제가 없을 때 대체 텍스트
                        )}
                    </div>
                    <div className="go-back">
                        <a href="/">테스트 다시 하기</a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
