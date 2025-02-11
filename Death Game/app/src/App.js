import './App.css';
import React from "react";
import Game from "./components/game";

function App() {
  return (
    <div>
      <h1 className='mt-4 text-center text-white'>Welcome to The Death Game</h1>
      <Game />
    </div>
  );
}

export default App;
