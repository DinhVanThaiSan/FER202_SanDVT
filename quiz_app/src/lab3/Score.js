import React, { Component } from "react";

class Score extends Component {
  getResultData() {
    const { score, total } = this.props;
    const percentage = Math.round((score / total) * 100);

    if (percentage === 100) return { label: "Perfect!", emoji: "🏆", color: "#00e5a0" };
    if (percentage >= 70) return { label: "Great Job!", emoji: "🎉", color: "#4fc3f7" };
    if (percentage >= 50) return { label: "Not Bad!", emoji: "👍", color: "#ffb74d" };
    return { label: "Keep Practicing!", emoji: "💪", color: "#ff7043" };
  }

  render() {
    const { score, total, onRestart } = this.props;
    const percentage = Math.round((score / total) * 100);
    const { label, emoji, color } = this.getResultData();

    return (
      <div className="score-container">
        <div className="score-card">
          <div className="score-emoji">{emoji}</div>
          <h2 className="score-label" style={{ color }}>{label}</h2>
          <p className="score-subtitle">Quiz Complete</p>

          <div className="score-ring-wrapper">
            <svg className="score-ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#1a1a2e" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="50"
                fill="none"
                stroke={color}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - percentage / 100)}`}
                transform="rotate(-90 60 60)"
                style={{ transition: "stroke-dashoffset 1s ease" }}
              />
              <text x="60" y="55" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="'Playfair Display', serif">
                {percentage}%
              </text>
              <text x="60" y="75" textAnchor="middle" fill="#888" fontSize="10" fontFamily="monospace">
                score
              </text>
            </svg>
          </div>

          <div className="score-breakdown">
            <div className="score-stat">
              <span className="stat-value" style={{ color: "#00e5a0" }}>{score}</span>
              <span className="stat-label">Correct</span>
            </div>
            <div className="score-divider" />
            <div className="score-stat">
              <span className="stat-value" style={{ color: "#ff7043" }}>{total - score}</span>
              <span className="stat-label">Wrong</span>
            </div>
            <div className="score-divider" />
            <div className="score-stat">
              <span className="stat-value">{total}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>

          <button className="restart-btn" onClick={onRestart}>
            <span>Play Again</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Score;