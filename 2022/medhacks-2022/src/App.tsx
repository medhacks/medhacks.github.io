import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
