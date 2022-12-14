import './App.css';

import { useState } from 'react';

import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>vite + typescript + eslint + prettier Last Version</h1>
    </div>
  );
}

export default App;
