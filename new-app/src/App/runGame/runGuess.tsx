import React from 'react';
import InputGuess from './input-guess';
import RandomNumber from './rand-num';

function RunGuess() {
  return(
    <div>
      <p>Run Guess</p>
      <RandomNumber />
      <InputGuess /> 
    </div>
  );
}

export default RunGuess; 
