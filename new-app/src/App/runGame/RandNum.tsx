import React, {useState} from "react";
import * as Code from "../../model/code";

const RandomNumber = ({randomNumber, setRandomNumber}: {randomNumber: Code.Code, setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>}) => {
  const [randString, setRandString] = useState("");

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
    setRandString(Code.codeToString(randNum));
    return randomNumber;
  };
  const handleOnClickGenerateNumber = () => {
    buildRandomNumber();
  };

  return (
    <div className="border">
      <button
        className="box-button bg-purple-300 border hover:bg-purple-500 text-white font-bold
            py-2 px-4 rounded"
        onClick={handleOnClickGenerateNumber}
      >
        Generate Number
      </button>
      <p>Random Number: {randString}</p>
    </div>
  );
};

export default RandomNumber;
