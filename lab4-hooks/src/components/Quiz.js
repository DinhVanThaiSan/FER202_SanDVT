import React, { useEffect, useState } from "react";
import Question from "./Question";
import Score from "./Score";
import { QuizContext } from "../context/QuizContext";
import "../App.css";

function Quiz() {

  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState([]);

  const [question, setQuestion] = useState("");

  const [answer1, setAnswer1] = useState("");

  const [answer2, setAnswer2] = useState("");

  const [answer3, setAnswer3] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {

    const defaultQuestions = [
      {
        question: "What is ReactJS?",
        answers: [
          "A JavaScript library for building user interfaces",
          "A programming language",
          "A database management system"
        ],
        correctAnswer:
          "A JavaScript library for building user interfaces"
      },
      {
        question: "What is JSX?",
        answers: [
          "A programming language",
          "A file format",
          "A syntax extension for JavaScript"
        ],
        correctAnswer:
          "A syntax extension for JavaScript"
      }
    ];

    setQuestions(defaultQuestions);

  }, []);

  const addQuestion = () => {

    const newQuestion = {
      question,
      answers: [answer1, answer2, answer3],
      correctAnswer
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setCorrectAnswer("");
  };

  return (
    <QuizContext.Provider value={{ score, setScore }}>

      <div className="quiz-container">

        <div className="left">

          <h2>Add New Question</h2>

          <input
            placeholder="Question"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />

          <input
            placeholder="Answer 1"
            value={answer1}
            onChange={(e) =>
              setAnswer1(e.target.value)
            }
          />

          <input
            placeholder="Answer 2"
            value={answer2}
            onChange={(e) =>
              setAnswer2(e.target.value)
            }
          />

          <input
            placeholder="Answer 3"
            value={answer3}
            onChange={(e) =>
              setAnswer3(e.target.value)
            }
          />

          <input
            placeholder="Correct Answer"
            value={correctAnswer}
            onChange={(e) =>
              setCorrectAnswer(e.target.value)
            }
          />

          <button onClick={addQuestion}>
            Add Question
          </button>

          <hr />

          <h2>Quiz Questions</h2>

          {questions.map((q, index) => (
            <Question
              key={index}
              question={q}
            />
          ))}
        </div>

        <div className="right">
          <Score />
        </div>

      </div>

    </QuizContext.Provider>
  );
}

export default Quiz;