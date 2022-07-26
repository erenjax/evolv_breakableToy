import React, {useState} from "react";
import * as Code from '../../model/code';
import RandomNumber from "./RandNum";
import OtpInputGuess from "./OTPInputGuess";

const RunGame = () => {
  const [guess, setGuess] = useState(new Array(4).fill(""))
  const defaultCode: Code.Code = [0, 0, 0, 0]
  const [randomNumber, setRandomNumber] = useState(defaultCode)
  const RandomNumberProps = {
    randomNumber: randomNumber,
    setRandomNumber: setRandomNumber
  }

  return (
    <div className="app-runGame">
      <div className="flex flex-col justify-center bg-charcoal border-8 border-hacky-green rounded-3xl h-full w-full p-6 md:p-16">
        <h1>Nordle</h1>
        <RandomNumber  {...RandomNumberProps} />
        <OtpInputGuess guess={guess} setGuess={setGuess} randomNumber={randomNumber} />
      </div>
    </div>
  );
}

export default RunGame;
