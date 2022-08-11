import * as Code from './code'

export const getRandomDigit = (): Code.CodeDigit => {
  const dig = Code.allDigits;
  const rand = Math.floor(Math.random() * dig.length) as Code.CodeDigit;
  if (dig.includes(rand)) {
    return rand;
  } else {
    throw new Error("Failed to get random digit");
  }
};

export const buildRandomNumber = (): Code.Code => {
  const randNum: Code.Code = [
    getRandomDigit(),
    getRandomDigit(),
    getRandomDigit(),
    getRandomDigit(),
  ];
  return randNum;
};
