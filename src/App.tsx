// useState는 값이 변하는지 변하지 않는지 상태를 관리를 한다.
import React, { useState } from 'react';
// components
import QuestionCard from './components/QuestionCard';

// 총 문제
const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestons] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
  <div className="App">
    <h1>REACT QUIZ</h1>

    {/* 위에서 선언한 startTrivia */}
    <button className="start" onClick={startTrivia}>
      Start
    </button>
    <p className="score">Score:</p>
    <p>Loading Questions ...</p>
    
    {/* Import한 컴포넌트 */}
    <QuestionCard 

      // Quiz문제가 1번부터 시작하기 위해 +1
      questionNr={number +1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
    />

    {/* 위에서 선언한 nextQuestion */}
    <button className="next" onClick={nextQuestion}>
      Next Question
    </button>
  </div>
  )
}

export default App;
