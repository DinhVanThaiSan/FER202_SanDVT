import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Question({ question }) {

  const { score, setScore } =
    useContext(QuizContext);

  const [answered, setAnswered] =
    useState(false);

  const [result, setResult] =
    useState("");

  const checkAnswer = (selectedAnswer) => {

    if (answered) return;

    if (
      selectedAnswer ===
      question.correctAnswer
    ) {
      setScore(score + 1);
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }

    setAnswered(true);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px"
      }}
    >
      <h3>{question.question}</h3>

      {question.answers.map(
        (answer, index) => (
          <button
            key={index}
            onClick={() =>
              checkAnswer(answer)
            }
          >
            {answer}
          </button>
        )
      )}

      <p>{result}</p>
    </div>
  );
}