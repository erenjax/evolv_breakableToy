import React from "react";
import * as Code from "../../model/code";

const RandomNumber = ({randomNumber, setRandomNumber}: {randomNumber: Code.Code, setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>}) => {

  const getRandomDigit = (): Code.CodeDigit => {
    const dig = Code.allDigits;
    const rand = Math.floor(Math.random() * dig.length) as Code.CodeDigit;
    if (dig.includes(rand)) {
      return rand;
    } else {
      throw new Error("Failed to get random digit");
    }
  };

  const buildRandomNumber = (): Code.Code => {
    const randNum: Code.Code = [
      getRandomDigit(),
      getRandomDigit(),
      getRandomDigit(),
      getRandomDigit(),
    ];
    setRandomNumber(randNum)
    return randomNumber;
  };
  const handleOnClickGenerateNumber = () => {
    buildRandomNumber();
    console.log({randomNumber})

  };

  return (
    <div className="my-4">
      <button
        className="button-1 m-2"
        onClick={handleOnClickGenerateNumber}
      >
        Generate Code
      </button>
    </div>
  );
};

export default RandomNumber;
