import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      revealed: false,
    };
  }

  handleOptionClick(option) {
    if (this.state.revealed) return;

    const isCorrect = option === this.props.question.answer;
    this.setState({ selected: option, revealed: true });

    setTimeout(() => {
      this.props.onAnswer(isCorrect);
      this.setState({ selected: null, revealed: false });
    }, 900);
  }

  getOptionClass(option) {
    const { selected, revealed } = this.state;
    const { answer } = this.props.question;
    if (!revealed) return "option-btn";
    if (option === answer) return "option-btn correct";
    if (option === selected && option !== answer) return "option-btn wrong";
    return "option-btn dimmed";
  }

  render() {
    const { question, currentIndex, total } = this.props;
    const { revealed } = this.state;

    return (
      <div className="question-container">
        <div className="question-meta">
          <span className="question-counter">
            <span className="counter-current">{currentIndex + 1}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{total}</span>
          </span>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex) / total) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="question-text">{question.question}</h2>

        <div className="options-grid">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={this.getOptionClass(option)}
              onClick={() => this.handleOptionClick(option)}
              disabled={revealed}
            >
              <span className="option-index">{String.fromCharCode(65 + idx)}</span>
              <span className="option-label">{option}</span>
              {revealed && option === question.answer && (
                <span className="option-icon">✓</span>
              )}
              {revealed && option === this.state.selected && option !== question.answer && (
                <span className="option-icon">✗</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;