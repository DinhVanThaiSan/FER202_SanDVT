// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../redux/quizThunk';
import { resetQuiz } from '../redux/quizSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartQuiz = () => {
    // Reset lại trạng thái bài quiz trước khi bắt đầu
    dispatch(resetQuiz());
    // Dispatch thunk để tải câu hỏi (giả lập 1s)
    dispatch(fetchQuestions());
    // Chuyển sang trang Quiz ngay lập tức, màn hình Quiz sẽ hiển thị Loading trong lúc tải
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <div className="card home-card">
        <div className="home-icon">🧠</div>
        <h1 className="home-title">Redux Toolkit Quiz App</h1>
        <p className="home-subtitle">
          Test your knowledge of HTML, Javascript, ReactJS, and Redux with our interactive quiz challenge!
        </p>
        
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-bullet">✓</span> Redux Toolkit & Thunk State Management
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span> Real-time navigation between questions
          </div>
          <div className="feature-item">
            <span className="feature-bullet">✓</span> Progress grid & Review Mode indicators
          </div>
        </div>

        <button className="btn btn-primary start-btn" onClick={handleStartQuiz}>
          Start Quiz Now
        </button>
      </div>
    </div>
  );
};

export default Home;
