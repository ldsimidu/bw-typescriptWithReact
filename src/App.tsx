import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text='abc' onClick={() => console.log("Hellow World")} />
      </header>
    </div>
  );
}

export default App;
