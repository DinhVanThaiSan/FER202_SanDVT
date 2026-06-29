import { useState } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../data/questions.js';
import Question from '../components/Question.jsx';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const score = questions.reduce((total, question) => {
    return answers[question.id] === question.answer ? total + 1 : total;
  }, 0);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section>
      <h2 className="text-danger mb-4">Quiz Page</h2>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id]}
          onSelectAnswer={handleSelectAnswer}
        />
      ))}

      <button className="btn btn-success me-2" onClick={handleSubmit}>Submit Quiz</button>
      <button className="btn btn-secondary me-2" onClick={handleReset}>Reset</button>
      <Link className="btn btn-outline-primary" to="/news">Go to News</Link>

      {submitted && (
        <div className="alert alert-info mt-4">
          Your score: <strong>{score}/{questions.length}</strong>
        </div>
      )}
    </section>
  );
}

export default Quiz;
