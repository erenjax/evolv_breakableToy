import React from "react";
import * as Code from "../../model/code";

const RandomNumber = ({randomNumber, setRandomNumber, setShowAlert, setTries}: {randomNumber: Code.Code, setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>, setShowAlert: React.Dispatch<React.SetStateAction<boolean>>, setTries: React.Dispatch<React.SetStateAction<number>>}) => {

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
    setShowAlert(true)
    setTries(0)
    buildRandomNumber();
    console.log({randomNumber})

  }

  return (
    <div className="pb-8">
      <div className="z-0">
        <p>Generate a code to Start</p>
        <button
          className="button-1 m-2"
          onClick={handleOnClickGenerateNumber}
        >
          Generate Code
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
