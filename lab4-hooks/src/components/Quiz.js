import React, { useState } from "react";
import "../App.css";

const quizData = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-box">
        {!isCompleted && (
          <>
            <hr />
            <h2>Question {currentQuestion + 1}</h2>

            <p>{quizData[currentQuestion].question}</p>

            <div className="answer-list">
              {quizData[currentQuestion].answers.map((answer, index) => (
                <label className="answer-item" key={index}>
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={() => setSelectedAnswer(answer)}
                  />
                  {answer}
                </label>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={selectedAnswer === ""}
            >
              Next
            </button>
          </>
        )}
      </div>

      <div className="result-box">
        <hr />
        {isCompleted && (
          <>
            <h1>Quiz Completed!</h1>
            <p>Your score: {score}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;