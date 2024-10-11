import React, { useState, useEffect } from 'react'
import questions from '../questions'


const Quiz = () => {

    /* questions.forEach(question => (
        console.log(question.choices)
    )) */

    const [counts, setCounts] = useState({
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    })
    const [selectedChoice, setSelectedChoice] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];



    const handle_Choice_Change = (event) => {
        const selectedType = currentQuestion.choices[event.target.value].type;
        setSelectedChoice(prevChoices => ({
            ...prevChoices,
            [currentQuestionIndex]: selectedType
        }));

        /* console.log(selectedType) */
    }



    const handle_Next_Question = () => {
        const selectedType = selectedChoice[currentQuestionIndex];
        if (selectedType) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [selectedType]: prevCounts[selectedType] + 1,
            }));
        }
        setCurrentQuestionIndex(prevIndex =>
            prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
        );
    }

    useEffect(() => {
        console.log(counts);
    }, [counts])
    return (
        <div>
            <h1>{currentQuestion?.question}</h1>
            {Object.keys(currentQuestion.choices).map(choiceKey => {
                const choice = currentQuestion.choices[choiceKey];
                return (
                    <div key={choiceKey}>
                        <input
                            type="radio"
                            value={choiceKey}
                            name={`${currentQuestionIndex}`}
                            onChange={handle_Choice_Change}
                        />
                        <label htmlFor={choiceKey}>{choice.label}</label>
                    </div>
                );
            })}
            <button onClick={handle_Next_Question}>다음</button>
        </div>
    )
}

export default Quiz