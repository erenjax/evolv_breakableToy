import React, {useState} from 'react';
import * as Code from '../../model/code';
import * as Game from '../../model/game';

const Hints = ({guess, randomNumber}: {guess: any[], randomNumber: Code.Code}) => {
  const [key, setKey] = useState(0)

  const handleOnClickGame = () => {
    const guessCode: Code.Code = Code.fromString(guess.join(''))
    setKey(Game.hintCount(randomNumber, guessCode))
  }

  return (
    <div>
      <button
        className="button-1"
        onClick={handleOnClickGame}
      >
        Run Game
      </button>
      <div>
        <p>Correct Digit: {key}</p>
      </div>
    </div >
  )
}

export default Hints;
