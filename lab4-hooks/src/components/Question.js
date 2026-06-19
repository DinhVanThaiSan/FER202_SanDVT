import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

function Question({ question }) {
  const { score, setScore } = useContext(QuizContext);

  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState("");

  const handleAnswer = (answer) => {
    if (answered) return;

    if (answer === question.correctAnswer) {
      setScore(score + 1);
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }

    setAnswered(true);
  };

  return (
    <div className="question-card">
      <h3>{question.question}</h3>

      {question.answers.map((answer, index) => (
        <button
          key={index}
          className="answer-btn"
          onClick={() => handleAnswer(answer)}
        >
          {answer}
        </button>
      ))}

      <p>{result}</p>
    </div>
  );
}

export default Question;