import React, { Component } from "react";
import Question from "./Question";
import Score from "./Score";
import "./QuizApp.css";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleAnswer(isCorrect) {
    const { currentQuestion, questions, score } = this.state;
    const newScore = isCorrect ? score + 1 : score;
    const isLast = currentQuestion + 1 >= questions.length;

    this.setState({
      score: newScore,
      currentQuestion: isLast ? currentQuestion : currentQuestion + 1,
      quizEnd: isLast,
    });
  }

  handleRestart() {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  }

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div className="quiz-app">
        {/* Decorative background shapes */}
        <div className="bg-shape shape-1" />
        <div className="bg-shape shape-2" />
        <div className="bg-shape shape-3" />

        <div className="quiz-wrapper">
          <header className="quiz-header">
            <div className="header-badge">QUIZ</div>
            <h1 className="quiz-title">Brain Check</h1>
            <p className="quiz-subtitle">Test your knowledge</p>
          </header>

          <main className="quiz-main">
            {quizEnd ? (
              <Score
                score={score}
                total={questions.length}
                onRestart={this.handleRestart}
              />
            ) : (
              <Question
                key={questions[currentQuestion].id}
                question={questions[currentQuestion]}
                currentIndex={currentQuestion}
                total={questions.length}
                onAnswer={this.handleAnswer}
              />
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default QuizApp;