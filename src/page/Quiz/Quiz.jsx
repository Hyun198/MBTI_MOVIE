import React, { useState } from 'react'
import questions from '../../questions'
import './Quiz.style.css'
import Movies from '../Movie/Movies'


const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 문제의 인덱스
    const [selectedChoice, setSelectedChoice] = useState({}); // 각 문제에 대한 선택된 답 저장
    const [counts, setCounts] = useState({
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
    });

    const [isFinished, setIsFinished] = useState(false);

    const [mbti, setMbti] = useState('');

    const currentQuestion = questions[currentQuestionIndex];

    // 답변을 선택할 때 실행되는 함수
    const handle_Choice_Change = (event) => {
        const selectedType = currentQuestion.choices[event.target.value].type;

        // 선택한 답을 저장하고, 이전에 선택한 답을 수정
        setSelectedChoice(prevChoices => ({
            ...prevChoices,
            [currentQuestionIndex]: selectedType,
        }));
    };

    // 다음 버튼 클릭 시 실행되는 함수
    const handle_Next_Question = () => {
        const currentSelectedChoice = selectedChoice[currentQuestionIndex]; // 현재 선택된 답

        if (currentSelectedChoice) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [currentSelectedChoice]: prevCounts[currentSelectedChoice] + 1,
            }));

            // 마지막 문제인지 체크
            if (currentQuestionIndex === questions.length - 1) {
                const mbti =
                    `${counts.E >= counts.I ? 'E' : 'I'}
                ${counts.S >= counts.N ? 'S' : 'N'}
                ${counts.T >= counts.F ? 'T' : 'F'}
                ${counts.J >= counts.P ? 'J' : 'P'}`;
                setMbti(mbti)
                setIsFinished(true)

            } else {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1); // 다음 문제로 이동
            }
        } else {
            alert("답변을 하나 선택해주세요!"); // 답변을 선택하지 않았으면 경고
        }
    };



    // 이전 버튼 클릭 시 실행되는 함수
    const handle_Previous_Question = () => {
        const currentSelectedChoice = selectedChoice[currentQuestionIndex]; // 현재 선택된 답

        if (currentSelectedChoice) {
            // 선택된 타입의 카운트를 1 감소
            setCounts(prevCounts => ({
                ...prevCounts,
                [currentSelectedChoice]: prevCounts[currentSelectedChoice] - 1,
            }));
        }
        // 이전 문제로 이동
        setCurrentQuestionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    if (isFinished) {
        return (
            <>
                <div className="quiz-result">
                    <h2>당신의 MBTI는 {mbti} 입니다!</h2>
                    <a href="/">테스트 다시 하기</a>
                </div>
                <Movies mbti={mbti} />
            </>

        );
    }



    return (
        <div className="quiz-container">
            <h2>{currentQuestion.question}</h2>
            <form>
                {Object.entries(currentQuestion.choices).map(([key, choice]) => (
                    <div className="form-input" key={key}>
                        <label>
                            <input

                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                value={key} // choice의 key 값
                                onChange={handle_Choice_Change} // 답변 선택 시 함수 호출
                                checked={selectedChoice[currentQuestionIndex] === choice.type} // 선택된 값 유지
                            />
                            {choice.label}
                        </label>
                    </div>
                ))}
            </form>
            <div className="handling_button">
                <button onClick={handle_Previous_Question} disabled={currentQuestionIndex === 0}>이전</button>
                <button onClick={handle_Next_Question}>다음</button>
            </div>
        </div>
    );
};

export default Quiz