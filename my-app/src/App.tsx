import logo from './logo.svg';
import './App.css';
import {Timer} from './Timer';
import React from 'react';

function App() {
  console.log(`this is APP {${Date.now()}}`)
  return (
    <div className="App">
      <header className="App-header">
        <Timer></Timer>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> k k knd save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
