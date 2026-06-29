function Question({ question, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Question {question.id}</h5>
        <p className="fw-semibold">{question.question}</p>

        {question.options.map((option) => (
          <div className="form-check" key={option}>
            <input
              className="form-check-input"
              type="radio"
              name={`question-${question.id}`}
              id={`${question.id}-${option}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(question.id, option)}
            />
            <label className="form-check-label" htmlFor={`${question.id}-${option}`}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
