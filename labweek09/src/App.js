import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [textLines] = useState([
    { text: "Welcome to Fullstack Development - I", size: 24 },
    { text: "React JS Programming Week09 Lab exercise", size: 20 },
    { text: "101472085", size: 16 },
    { text: "Diego Tsukayama", size: 12 },
    { text: "George Brown College, Toronto", size: 10 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {textLines.map((line, index) => (
          <p key={index} style={{ fontSize: `${line.size}px`, fontWeight: 'bold', margin: '5px 0' }}>
            {line.text}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
