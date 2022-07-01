import React, {useState} from 'react';
import * as Code from '../../model/code';

const RandomNumber = () => {
  const [randString, setRandString] = useState('')

  const getRandomDigit = (): Code.CodeDigit => {
    const dig = Code.allDigits
    const rand = Math.floor((Math.random() * dig.length)) as Code.CodeDigit 
    if (dig.includes(rand)){
      return rand 
    } 
    else {
      throw new Error(`Failed to get random digit`)
    }
  }

  const buildRandomNumber = (): Code.Code => {
    const randomNumber: Code.Code = [getRandomDigit(), getRandomDigit(), getRandomDigit(), getRandomDigit(),]
    setRandString(Code.codeToString(randomNumber))
    return randomNumber 
  }
  const handleOnClickGenerateNumber = () => {
    buildRandomNumber()
  }

  return(
    <div className="border">
      <button onClick={handleOnClickGenerateNumber}>
        Generate Number
      </button> 
      <p>Random Number: {randString}</p>
    </div>
  );
};

export default RandomNumber;
