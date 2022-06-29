export type CodeDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
export type Code = [ CodeDigit, CodeDigit, CodeDigit, CodeDigit  ]

export const allDigits:CodeDigit[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export const numToString = (num: Code) : string => {
  return num.join("")
}

export const charToNum = (char: string): number => {
  return Number(char)
}

export const numToNumberModel = (number: number): Code => {
  const chars = String(number).split('',4)
  let numberArray = chars.map(charToNum) as Code
  return numberArray
}
export const fromString = (str: string): Code => {
  const characters: string[] = str.split('')
  const numbers: number[] = characters.map(Number)
  const codeDigits = numbers.map(toCodeDigit)
  const code = toCode(codeDigits)
  return code
  
}
const isCodeDigit = (num: number): num is CodeDigit => {
  return allDigits.includes(num as CodeDigit)
}
const toCodeDigit = (num: number): CodeDigit => {
  if (isCodeDigit(num)) {
    return num
}
else{
  throw new Error(`Cannot convert ${num} to NumberDigit`)
  }}

const toCode = (codeDigits: CodeDigit[]): Code => {
  if (codeDigits[0] && codeDigits[1] && codeDigits[2] && codeDigits[3]){
    return [codeDigits[0] , codeDigits[1] , codeDigits[2] , codeDigits[3]]
  }
  else {
    throw new Error(`Array numberDigits ${codeDigits} cannot be converted to Number`)
  }
}
