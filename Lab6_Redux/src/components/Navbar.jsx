// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../redux/quizSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSubmitted } = useSelector((state) => state.quiz);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.confirm("Do you want to leave the current quiz and return to Home? Your progress will not be saved.")) {
      dispatch(resetQuiz());
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <span className="logo-icon">⚡</span> Redux Quiz
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item" onClick={handleLogoClick}>Home</Link>
          <Link to="/quiz" className="navbar-item">Quiz</Link>
          {isSubmitted && (
            <>
              <Link to="/result" className="navbar-item">Result</Link>
              <Link to="/review" className="navbar-item">Review</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
