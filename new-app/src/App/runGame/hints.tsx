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
        className="bg-purple-300 border hover:bg-purple-500 text-white font-bold py-4 px-8 rounded"
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
