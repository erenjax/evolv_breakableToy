import React, {useState} from 'react';

function InputGuess() {
  const [guess, setGuess] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = event.target.value;
    setGuess(newGuess);
  };

  const handleSubmit = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter'){
      console.log({guess});
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
