import './App.css';
import React from 'react';
import { Router } from "@reach/router";
import PirateList from "./Components/PirateList";
import PirateSingle from "./Components/PirateSingle";
import PirateCreate from './Components/PirateCreate';

function App() {
  return (
    <div className="App">
      <Router>
        <PirateList path="/pirates" />
        <PirateSingle path="/pirate/:id" />
        <PirateCreate path="/pirate/new" />
      </Router>
    </div>
  );
}

export default App;
