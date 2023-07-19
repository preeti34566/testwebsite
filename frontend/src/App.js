import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './component/Welcome';
import Register from './component/Register';
import Login from './component/Login';
import ConceptBrushUpPage from './component/ConceptBrushUpPage';
import ObjectOriented from './component/ObjectOriented';
import DBMS from './component/DBMS';
import DataStructuresAlgorithm from './component/DataStructuresAlgorithm';
import OperatingSystem from './component/OperatingSystem';
import ComputerNetworking from './component/ComputerNetworking';
import FunctionalProgramming from './component/FunctionalProgramming';
import Test1 from './Tests/QuizPage.js'
import Test2 from './Tests/Quizpage1.js'
import Test3 from './Tests/Quizpage2.js'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/brushupconcept" replace />
            ) : (
              isRegistered ? (
                <Navigate to="/brushupconcept" replace />
              ) : (
                <Register onRegistration={handleRegistration} />
              )
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/brushupconcept" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
                <Navigate to="/brushupconcept" replace />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/brushupconcept" element={<ConceptBrushUpPage />} />
        <Route path="/concept/OOPS" element={<ObjectOriented />} />
        <Route path="/concept/dbms" element={<DBMS />} />
        <Route path="/concept/DSA" element={<DataStructuresAlgorithm />} />
        <Route path="/concept/OS" element={<OperatingSystem />} />
        <Route path="/concept/CN" element={<ComputerNetworking />} />
        <Route path="/concept/fP" element={<FunctionalProgramming />} />
        <Route path="/concept/Test1" element={<Test1 />} />
        <Route path="/concept/Test2" element={<Test2 />} />
        <Route path="/concept/Test3" element={<Test3 />} />
    
      </Routes>
    </Router>
  );
};

export default App;
