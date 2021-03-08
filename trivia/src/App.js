import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import CategorySelector from './components/CategorySelector'
import Scoreboard from './components/Scoreboard'
import Question from './components/Question'
import ResultModal from './components/ResultModal'
import UseTrivia from './UseTrivia'

function App() {
  const { question, getQuestion, category, setCategory } = UseTrivia();
  // const [question, setQuestion] = useState(null);
  // const [category, setCategory] = useState('any');
  const [isCorrect, setIsCorrect] = useState(null);



  // const getQuestion = useCallback(() => {
  //   setIsCorrect(null);
  //   let apiUrl = 'https://opentdb.com/api.php?amount=1';
  //   if (category !== 'any') apiUrl += `&category=${category}`
  //   // console.log(apiUrl)
  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       //console.log(data.results[0]);
  //       setQuestion(data.results[0]);

  //     })

  // }, [category])

  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setIsCorrect(true)

    }



    else {
      setIsCorrect(false)

    };

  }

  const handleNextQuestion = () => {
    setIsCorrect(null);
    getQuestion();
  }
  // useEffect(() => {
  //   getQuestion()
  // }, [getQuestion, category])


  return (
    <div className="App">

      {isCorrect !== null && <ResultModal isCorrect={isCorrect} question={question} nextQuestion={handleNextQuestion} />}


      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />

      </div>
      <div className="question-body">
        {question && <Question question={question} answerQuestion={handleAnswer} />}

      </div>
      <div className="question-footer">
        <button onClick={handleNextQuestion}>
          <h3>Go to next question</h3>
        </button>
      </div>

    </div>
  );
}

export default App;
