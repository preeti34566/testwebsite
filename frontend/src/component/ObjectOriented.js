import React from 'react';
import { Link } from 'react-router-dom';
import './ConceptBrushUpPage.css';

const ObjectOriented= () => {
  const options = [
    'Test1',
    'Test2',
    'Test3',
  ];

  return (
    <div className="concept-brush-up-page">
      <h1>OBJECT-ORIENTED PROGRAMMING</h1>
      <h2>Please Select the test.</h2>

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

export default ObjectOriented;



