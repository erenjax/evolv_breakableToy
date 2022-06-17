import React, { useState } from 'react';

function MakeGuess(props){
  const [guess, setGuess ] = React.useState('');
return(
  <div>
    <input
      type="text"
      value={guess}
      placeholder="Enter a 4-digit number"
      onChange={e => setGuess(e.target.value)}
      onKeyDown={e => {
        if(e.key ==='Enter'){
          setGuess(e.target.value)
          console.log({guess})
        }
      }}
    />
    <p>Make a Guess!</p>
  </div>
  );
};

export default MakeGuess;
