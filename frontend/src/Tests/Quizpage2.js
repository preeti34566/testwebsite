import React, { useState } from 'react';
import './test.css';

const Quizpage2 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(null);
  const userId = 'user1'; // Replace with the actual user ID or retrieve it from the authentication data

  const handleOptionSelect = (questionId, answerId) => {
    const selectedOption = { questionId, answerId };
    const updatedOptions = [...selectedOptions];
    const existingOptionIndex = updatedOptions.findIndex(
      (option) => option.questionId === questionId
    );

    if (existingOptionIndex >= 0) {
      updatedOptions[existingOptionIndex] = selectedOption;
    } else {
      updatedOptions.push(selectedOption);
    }

    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
  const questionsWithResponses = questions.map((question) => {
    const selectedOption = selectedOptions.find(
      (option) => option.questionId === question.id
    );

    if (selectedOption) {
      return {
        questionId: selectedOption.questionId,
        answers: [selectedOption.answerId],
      };
    }

    return {
      questionId: question.id,
      answers: [],
    };
  });

  const requestBody = {
    userId,
    testId: 'oops1', // Replace with the test ID
    questions: questionsWithResponses,
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  };
console.log(requestOptions);
  fetch('http://localhost:8000/api/submit-test', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // Handle response data
      console.log('API Response:', data);
      if (data.error) {
        setError(data.error);
        setScore(null);
      } else {
        setError(null);
        setScore(data.score);
      }
    })
    .catch((error) => {
      // Handle error
      console.error('API Error:', error);
      setError('An error occurred. Please try again.');
      setScore(null);
    });
};


  const questions = [
    {
      id: '60c9671d4569b6390cc8b24a',
      text: 'Which feature of OOPS describes the reusability of code?',
      options: [
        { id: "a1", text: 'Inheritance' },
        { id: 'b2', text: 'Polymorphism' },
        { id: 'c3', text: 'Encapsulation' },
        { id: 'd4', text: 'Abstraction' },
      ],
    },
    {
      id: '60c9671d4569b6390cc8b24b',
      text: 'Which programming language is known for its garbage collection feature?',
      options: [
        { id: 'a', text: 'Java' },
        { id: 'b', text: 'C' },
        { id: 'c', text: 'Python' },
        { id: 'd', text: 'JavaScript' },
      ],
    },
    {
      id: '60c9671d4569b6390cc8b24c',
      text: 'The feature by which one object can interact with another object is _____________',
      options: [
        { id: 'a', text: 'Message reading' },
        { id: 'b', text: 'Message Passing' },
        { id: 'c', text: 'Data transfer' },
        { id: 'd', text: 'Data Binding' },
      ],
    },
    {
      id: '60c9671d4569b6390cc8b24d',
      text: 'Which is the correct syntax of inheritance?',
      options: [
        { id: 'a', text: 'class base_classname :access derived_classname{ /*define class body*/ };' },
        { id: 'b', text: 'class derived_classname : access base_classname{ /*define class body*/ };' },
        { id: 'c', text: 'class derived_classname : base_classname{ /*define class body*/ };' },
        { id: 'd', text: 'class base_classname : derived_classname{ /*define class body*/ };' },
      ],
    },
    {
      id: '60c9671d4569b6390cc8b24e',
      text: 'Which of the following doesn’t come under OOP concept?',
      options: [
        { id: 'a', text: 'Data hiding' },
        { id: 'b', text: 'Message passing' },
        { id: 'c', text: 'Platform independent' },
        { id: 'd', text: 'Data binding' },
      ],
    },
    {
      id: '60c9671d4569b6390cc8b24f',
      text: 'Why is Java considered a partially OOP language?',
      options: [
        { id: 'a', text: 'It allows code to be written outside classes' },
        { id: 'b', text: 'It supports usual declaration of primitive data types' },
        { id: 'c', text: 'It does not support pointers' },
        { id: 'd', text: 'It doesn’t support all types of inheritance' },
      ],
    },
  ]

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {questions.map((question) => (
        <div key={question.id} className="question-container">
          <p className="question">{question.text}</p>
          <ul className="options">
            {question.options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionSelect(question.id, option.id)}
                className={selectedOptions.some(
                  (selectedOption) =>
                    selectedOption.questionId === question.id &&
                    selectedOption.answerId === option.id
                )
                  ? 'selected'
                  : ''}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptions.some(
                      (selectedOption) =>
                        selectedOption.questionId === question.id &&
                        selectedOption.answerId === option.id
                    )}
                    readOnly
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
     {error ? (
  <p className="error-message">{error}</p>
) : (
  score !== null && (
    <div className="score-container">
      <p className="score-message">SCORE:{score}</p>
    </div>
  )
)}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Quizpage2;

