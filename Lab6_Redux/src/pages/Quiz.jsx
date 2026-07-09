// src/pages/Quiz.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import {
  setCurrentQuestion,
  selectAnswer,
  submitQuiz
} from '../redux/quizSlice';

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    questions,
    currentQuestion,
    selectedAnswers,
    loading
  } = useSelector((state) => state.quiz);

  // Hiển thị màn hình Loading trong khi fetch câu hỏi từ API giả lập
  if (loading || questions.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading Questions...</h2>
        <p>Please wait a moment while we retrieve the quiz data.</p>
      </div>
    );
  }

  const currentQObj = questions[currentQuestion];

  // Callback khi chọn đáp án
  const handleSelectAnswer = (answer) => {
    dispatch(selectAnswer({ questionId: currentQObj.id, answer }));
  };

  // Điều hướng câu hỏi
  const handleFirst = () => dispatch(setCurrentQuestion(0));
  const handlePrev = () => {
    if (currentQuestion > 0) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
    }
  };
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };
  const handleLast = () => dispatch(setCurrentQuestion(questions.length - 1));

  // Khi click nút Submit
  const handleSubmit = () => {
    // Xác nhận trước khi nộp bài
    const answeredCount = Object.keys(selectedAnswers).length;
    const unansweredCount = questions.length - answeredCount;
    
    let confirmMsg = "Are you sure you want to submit your quiz?";
    if (unansweredCount > 0) {
      confirmMsg = `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`;
    }

    if (window.confirm(confirmMsg)) {
      dispatch(submitQuiz());
      // Di chuyển sang trang hiển thị kết quả (hoặc Review theo đề yêu cầu)
      // Để logic mạch lạc, ta chuyển sang trang Result trước để xem điểm, từ đó có nút Review chi tiết
      navigate('/review');
    }
  };

  return (
    <div className="quiz-layout-container">
      {/* Cột bên trái: Hiển thị nội dung câu hỏi và các nút điều hướng */}
      <div className="quiz-main-content">
        <div className="card">
          <div className="quiz-header-info">
            <span className="question-index-badge">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <QuestionCard
            question={currentQObj}
            selectedAnswer={selectedAnswers[currentQObj.id]}
            onSelectAnswer={handleSelectAnswer}
            reviewMode={false}
          />

          <div className="navigation-buttons">
            <button
              className="btn btn-secondary"
              onClick={handleFirst}
              disabled={currentQuestion === 0}
            >
              « First
            </button>
            <button
              className="btn btn-secondary"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              ‹ Prev
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next ›
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleLast}
              disabled={currentQuestion === questions.length - 1}
            >
              Last »
            </button>
          </div>

          <div className="submit-section">
            <button className="btn btn-danger submit-btn" onClick={handleSubmit}>
              Submit Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Cột bên phải: Quiz Review (Bảng theo dõi tiến độ câu hỏi) */}
      <div className="quiz-sidebar">
        <div className="card sidebar-card">
          <h3 className="sidebar-title">Quiz Progress</h3>
          <p className="sidebar-subtitle">Click a box to jump to that question</p>
          
          <div className="progress-grid">
            {questions.map((q, index) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isActive = index === currentQuestion;
              
              let boxClass = "progress-box";
              if (isAnswered) {
                boxClass += " progress-box-answered"; // Màu xanh lá
              } else {
                boxClass += " progress-box-unanswered"; // Màu vàng
              }
              if (isActive) {
                boxClass += " progress-box-active"; // Viền highlight
              }

              return (
                <button
                  key={q.id}
                  className={boxClass}
                  onClick={() => dispatch(setCurrentQuestion(index))}
                >
                  <span className="box-num">{index + 1}</span>
                  <span className="box-status">
                    {isAnswered ? "Answered" : "Not Answered"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="legend-container">
            <div className="legend-item">
              <span className="legend-color bg-success"></span>
              <span>Answered</span>
            </div>
            <div className="legend-item">
              <span className="legend-color bg-warning"></span>
              <span>Not Answered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
