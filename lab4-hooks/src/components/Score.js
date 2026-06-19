import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Score() {
  const { score } = useContext(QuizContext);

  return (
    <>
      <h1>Quiz Completed!</h1>
      <p>Your score: {score}</p>
    </>
  );
}

export default Score;