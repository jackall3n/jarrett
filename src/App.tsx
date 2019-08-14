import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="App">
      <br />
      <h1>Is this guy a cunt?</h1>
      <br />

      <div
        className="face"
      />
      
      <br />
      <button className="button" onClick={() => setShowAnswer(true)}>Click here to find out</button>

      {showAnswer && (
        <h2>yes.</h2>
      )}
    </div>
  );
}

export default App;
