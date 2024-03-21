import React from 'react';
import { Link } from 'react-router-dom';
import './arrowbutton.css';

const ArrowButton = () => {
  return (
    <div className="arrow-container">
      <Link to="/work" className="arrow-link">
      <p className="arrow-text">Check out my work!</p>
      <div class="handwrittenCircle"><p className="arrow-right">→</p></div>
      </Link>
    </div>
  );
}

export default ArrowButton;
