import React from 'react';
import InputGuess from './InputGuess';
import RandomNumber from './RandNum';

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


