import React from 'react';
import * as Game from '../../model/game';
import * as Code from '../../model/code';
import ClassNames from 'classnames';

const RenderGuess = ({randomNumber, guess}: {randomNumber: Code.Code, guess: any[]}) => {
  const guessCode = Code.fromString(guess.join(''))
  const hintArray = Game.getHintArray(randomNumber, guessCode)

  const buildDigitStyle = (hint?: string): string => {
    switch (hint) {
      case ("miss"):
        return "box-output border-[#c1292e] text-[#c1292e]"
      case ("key"):
        return "box-output border-hacky-green"
    }
    return "box-output border-gray-600"
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className={ClassNames(buildDigitStyle(hintArray[0]))}>
          <p className='self-center'>{guessCode[0]}</p>
        </div>
        <div className={ClassNames(buildDigitStyle(hintArray[1]))}>
          <p className='self-center'>{guessCode[1]}</p>
        </div>
        <div className={ClassNames(buildDigitStyle(hintArray[2]))}>
          <p className='self-center'>{guessCode[2]}</p>
        </div>
        <div className={ClassNames(buildDigitStyle(hintArray[3]))}>
          <p className='self-center'>{guessCode[3]}</p>
        </div>
      </div>
    </div>
  )
}

export default RenderGuess;
