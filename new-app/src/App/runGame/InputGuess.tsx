import React, {useState} from 'react';
import * as Number from '../../model/number';

const InputGuess = () => {
  const [guess, setGuess] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = event.target.value;
    setGuess(newGuess);
  };


  const handleSubmit = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter'){
      console.log({guess})
    try {
      console.log({number: Number.fromString(guess)})
    } catch(e){
      console.log(e)
    }
    }
  };
   
  return(
    <div>
       <input
        value={guess}
        onChange={handleInput}
        placeholder="Enter a 4-digit number"
        className="input"
        onKeyPress={handleSubmit}
      />
      <p>Press Enter to submit a guess</p>
      <p>Your Guess: {guess}</p>
    </div>
  );
}

export default InputGuess; 
