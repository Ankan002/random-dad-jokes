import React from 'react'
import './App.css';
import FetchButton from './components/FetchButton';
import JokeSection from './components/JokeSection';

function App() {
  return (
    <div className="App">
      <JokeSection />
      < FetchButton/>
    </div>
  );
}

export default App;
