import React from 'react'

type Props = {
    question: string;
    
    // array타입 
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

// QuestionCard에 대한 타입작성 React.FC<Props>
const QuestionCard: React.FC<Props> =({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>

            {/* map = 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것 */}
            {answers.map((answer) => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                    </button>
                </div>
            ))}
        </div>
    
    </div>
);

export default QuestionCard
