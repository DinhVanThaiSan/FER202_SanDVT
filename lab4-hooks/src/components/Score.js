import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Score() {

  const { score } =
    useContext(QuizContext);

  return (
    <h2>
      Score: {score}
    </h2>
  );
}