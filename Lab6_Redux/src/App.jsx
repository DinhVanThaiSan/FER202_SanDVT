// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Review from './pages/Review';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar hiển thị cố định ở đầu trang */}
        <Navbar />
        
        {/* Khu vực nội dung chính của ứng dụng thay đổi tùy theo Route */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
