export type CodeDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Code = [CodeDigit, CodeDigit, CodeDigit, CodeDigit];

export const allDigits: CodeDigit[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const codeToString = (code: Code): string => {
  return code.join("");
};

export const charToNum = (char: string): number => {
  return Number(char);
};

export const numToNumberModel = (number: number): Code => {
  const chars = String(number).split("", 4);
  let numberArray = chars.map(charToNum) as Code;
  return numberArray;
};
export const fromString = (str: string): Code => {
  const characters: string[] = str.split("");
  const numbers: number[] = characters.map(Number);
  const codeDigits = numbers.map(toCodeDigit);
  const code = toCode(codeDigits);
  return code;
};
const isCodeDigit = (num: number): num is CodeDigit => {
  return allDigits.includes(num as CodeDigit);
};
const toCodeDigit = (num: number): CodeDigit => {
  if (isCodeDigit(num)) {
    return num;
  } else {
    throw new Error(`Cannot convert ${num} to NumberDigit`);
  }
};

const toCode = (codeDigits: CodeDigit[]): Code => {
  if (codeDigits.length >= 4) {
    const zero: CodeDigit = codeDigits[0] as CodeDigit;
    const one: CodeDigit = codeDigits[1] as CodeDigit;
    const two: CodeDigit = codeDigits[2] as CodeDigit;
    const three: CodeDigit = codeDigits[3] as CodeDigit;
    return [zero, one, two, three];
  } else {
    throw new Error(
      `Array codeDigits ${codeDigits} cannot be converted to Code`
    );
  }
};
