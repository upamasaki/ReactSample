import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'wijmo/styles/wijmo.css';
import * as wjGrid from 'wijmo/wijmo.react.grid';
import 'wijmo/cultures/wijmo.culture.ja.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
