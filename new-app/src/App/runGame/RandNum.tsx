import React from 'react';
import * as Code from '../../model/number';

const RandomNumber = () => {

  const getRandomDigit = (): Code.CodeDigit => {
    const rand = Math.floor((Math.random() * 10)) 
    const dig = Code.allDigits
    const randomDigit = dig[rand]
    if (randomDigit){
      return randomDigit 
    } 
    else {
      throw new Error(`Failed to get random digit`)
    }
  }

  const buildRandomNumber = (): Code.Code => {
    const randomNumber: Code.Code = [getRandomDigit(), getRandomDigit(), getRandomDigit(), getRandomDigit(),]
    console.log({randomNumber})
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
    </div>
  );
};

export default RandomNumber;
