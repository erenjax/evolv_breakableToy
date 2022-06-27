export type NumberDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
export type Number = [NumberDigit, NumberDigit, NumberDigit, NumberDigit]

export const allDigits:NumberDigit[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export const numToString = (num: Number) : string => {
  return num.join("")
}

export const charToNum = (char: string): number => {
  return Number(char)
}

export const numToNumberModel = (number: number): Number => {
  const chars = String(number).split('',4)
  let numberArray = chars.map(charToNum) as Number
  return numberArray
}
export const fromString = (str: string): Number => {
  const characters: string[] = str.split('')
  const numbers: number[] = characters.map(Number)
  const numberDigits = numbers.map(toNumberDigit)
  const number = toNumber(numberDigits)
  return number
  
}
const isNumberDigit = (num: number): num is NumberDigit => {
  return allDigits.includes(num as NumberDigit)
}
const toNumberDigit = (num: number): NumberDigit => {
  if (isNumberDigit(num)) {
    return num
}
else{
  throw new Error(`Cannot convert ${num} to NumberDigit`)
  }}

const toNumber = (numberDigits: NumberDigit[]): Number => {
  if (numberDigits[0] && numberDigits[1] && numberDigits[2] && numberDigits[3]){
    return [numberDigits[0] , numberDigits[1] , numberDigits[2] , numberDigits[3]]
  }
  else {
    throw new Error(`Array numberDigits ${numberDigits} cannot be converted to Number`)
  }
}
