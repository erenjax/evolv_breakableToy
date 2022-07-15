import React, {useState} from "react";
import * as Code from '../../model/code';
import RandomNumber from "./RandNum";
import OtpInputGuess from "./OTPInputGuess";
import Hints from "./hints";

const RunGame = () => {
  const [guess, setGuess] = useState(new Array(4).fill(""))

  const defaultCode: Code.Code = [0, 0, 0, 0]
  const [randomNumber, setRandomNumber] = useState(defaultCode)
  const RandomNumberProps = {
    randomNumber: randomNumber,
    setRandomNumber: setRandomNumber
  }

  return (
    <div>
      <h1>Nordle</h1>
      <RandomNumber  {...RandomNumberProps} />
      <OtpInputGuess guess={guess} setGuess={setGuess} />
      <Hints guess={guess} randomNumber={randomNumber} />
    </div>
  );
}

export default RunGame;
