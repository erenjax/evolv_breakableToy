import React from 'react';
import * as Number from '../../model/number';

const RandomNumber = () => {

  const getRandomDigit = (): Number.NumberDigit => {
    const rand = Math.floor((Math.random() * 10)) 
    const dig = Number.allDigits
    const randomDigit = dig[rand]
    if (randomDigit){
      return randomDigit 
    } 
    else {
      throw new Error(`Failed to get random digit`)
    }
  }

  const buildRandomNumber = (): Number.Number => {
    const randomNumber: Number.Number = [getRandomDigit(), getRandomDigit(), getRandomDigit(), getRandomDigit(),]
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
