import React from 'react';
import InputGuess from './InputGuess';
import RandomNumber from './RandNum';

function RunGame() {
  return(
    <div>
      <p>Run Game</p>
      <RandomNumber />
      <InputGuess /> 
    </div>
  );
}

export default RunGame; 


