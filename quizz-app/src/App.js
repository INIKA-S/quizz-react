// src/App.js
import React, { useState } from 'react';
import './App.css';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    answer: 'Jupiter'
  },
  {
    question: 'Who wrote "To be, or not to be"?',
    options: ['Shakespeare', 'Hemingway', 'Tolstoy', 'Dickens'],
    answer: 'Shakespeare'
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: e.target.value
    });
  };

  const handleNext = () => {
    if (selectedOptions[currentQuestion] === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    if (selectedOptions[currentQuestion] === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <div className="App"><h1>Your score is {score}/{quizData.length}</h1></div>;
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="question-section">
        <h2>{quizData[currentQuestion].question}</h2>
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOptions[currentQuestion] === option}
              onChange={handleOptionChange}
            />
            {option}
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        {currentQuestion > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentQuestion < quizData.length - 1 && <button onClick={handleNext}>Next</button>}
        {currentQuestion === quizData.length - 1 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default App;
