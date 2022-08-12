import React from "react";
import * as Code from "../../model/code";
import * as RandNum from "../../model/generateRandNum";

const RandomNumber = ({
  randomNumber,
  setRandomNumber,
  setShowAlert,
  setTries,
  setGuess,
  setLightArray,
}: {
  randomNumber: Code.Code;
  setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setTries: React.Dispatch<React.SetStateAction<number>>;
  setGuess: React.Dispatch<React.SetStateAction<any[]>>;
  setLightArray: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleOnClickGenerateNumber = () => {
    setShowAlert(true);
    setTries(0);
    setGuess(new Array(4).fill(""));
    setLightArray(["", "", "", ""]);
    setRandomNumber(RandNum.buildRandomNumber());
    console.log({ randomNumber });
  };

  return (
    <div className="pb-8">
      <div className="z-0">
        <p>Generate a code to Start</p>
        <button className="button-1 m-2" onClick={handleOnClickGenerateNumber}>
          Generate Code
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
