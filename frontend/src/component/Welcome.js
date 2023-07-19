import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'
const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to KnowledgeBase</h1>
      <p>
"Embrace exams as opportunities for growth. With preparation and belief in yourself, let each test become a stepping stone towards your success and personal development."</p>
      <div className="button-container">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
      </div>
    </div>
  );
};

export default Welcome;
