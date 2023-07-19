import React from 'react';
import { Link } from 'react-router-dom';
import './ConceptBrushUpPage.css';

const ConceptBrushUpPage = () => {
  const options = [
    'OOPS',
    'DSA',
    'DBMS',
    'OS',
    'CN',
    'FP',
  ];

  return (
    <div className="concept-brush-up-page">
      <h1>Brush Up Your Concepts</h1>
      <h2>Please select an option to brush up your concept.</h2>

      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={`/concept/${encodeURIComponent(option)}`}>{option}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConceptBrushUpPage;

