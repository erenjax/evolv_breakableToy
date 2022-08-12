import * as Code from "../model/code";
import { hintCount } from "./game";

it("hintCount", () => {
  const randomNumber: Code.Code = [0, 0, 0, 0];
  const guess1: Code.Code = [1, 1, 1, 0];
  const guess2: Code.Code = [1, 1, 0, 0];
  const guess3: Code.Code = [1, 0, 0, 0];
  const guess4: Code.Code = [0, 0, 0, 0];

  const result1 = hintCount(randomNumber, guess1);
  const result2 = hintCount(randomNumber, guess2);
  const result3 = hintCount(randomNumber, guess3);
  const result4 = hintCount(randomNumber, guess4);

  expect(result1).toBe(1);
  expect(result2).toBe(2);
  expect(result3).toBe(3);
  expect(result4).toBe(4);
});
// it(
//   "getUnit", () => {
//     const randomNumber: Code.Code = [1, 2, 3, 4]
//     const guess1: Code.Code = [0, 1, 2, 3]
//     const guess2: Code.Code = [0, 0, 1, 1]
//     const guess3: Code.Code = [0, 0, 0, 1]
//     const guess4: Code.Code = [0, 0, 0, 0]
//     const guess5: Code.Code = [1, 2, 3, 4]
//     const guess6: Code.Code = [1, 0, 0, 2]
//
//     const repeatedDigits: Code.Code = [1, 2, 3, 3]
//     const guess7: Code.Code = [3, 0, 0, 0]
//     const guess8: Code.Code = [0, 0, 3, 0]
//     const guess9: Code.Code = [0, 0, 3, 3]
//     const guess10: Code.Code = [0, 0, 0, 3]
//     const guess11: Code.Code = [0, 3, 3, 3]
//     const guess12: Code.Code = [3, 3, 3, 3]
//
//     const result1 = getUnit(randomNumber, guess1)
//     const result2 = getUnit(randomNumber, guess2)
//     const result3 = getUnit(randomNumber, guess3)
//     const result4 = getUnit(randomNumber, guess4)
//     const result5 = getUnit(randomNumber, guess5)
//     const result6 = getUnit(randomNumber, guess6)
//
//     const result7 = getUnit(repeatedDigits, guess7)
//     const result8 = getUnit(repeatedDigits, guess8)
//     const result9 = getUnit(repeatedDigits, guess9)
//     const result10 = getUnit(repeatedDigits, guess10)
//     const result11 = getUnit(repeatedDigits, guess11)
//     const result12 = getUnit(repeatedDigits, guess12)
//
//     expect(result1).toBe(3)
//     expect(result2).toBe(1)
//     expect(result3).toBe(1)
//     expect(result4).toBe(0)
//     expect(result5).toBe(0)
//     expect(result6).toBe(1)
//
//     expect(result7).toBe(1)
//     expect(result8).toBe(0)
//     expect(result9).toBe(0)
//     expect(result10).toBe(0)
//     expect(result11).toBe(0)
//     expect(result12).toBe(0)
//   }
// )
// it(
//   "gameFunctionality", () => {
//     const randomNumber: Code.Code = [1, 2, 3, 4]
//     const guess1: Code.Code = [0, 1, 2, 3]
//     const guess2: Code.Code = [0, 0, 1, 1]
//     const guess3: Code.Code = [0, 0, 0, 1]
//     const guess4: Code.Code = [0, 0, 0, 0]
//     const guess5: Code.Code = [1, 2, 3, 4]
//     const guess6: Code.Code = [1, 0, 0, 2]
//
//     const repeatedDigits: Code.Code = [1, 2, 3, 3]
//     const guess7: Code.Code = [3, 0, 0, 0]
//     const guess8: Code.Code = [0, 0, 3, 0]
//     const guess9: Code.Code = [0, 0, 3, 3]
//     const guess10: Code.Code = [0, 0, 0, 3]
//     const guess11: Code.Code = [0, 3, 3, 3]
//     const guess12: Code.Code = [3, 3, 3, 3]
//
//     const result1 = gameFunctionality(randomNumber, guess1)
//     const result2 = gameFunctionality(randomNumber, guess2)
//     const result3 = gameFunctionality(randomNumber, guess3)
//     const result4 = gameFunctionality(randomNumber, guess4)
//     const result5 = gameFunctionality(randomNumber, guess5)
//     const result6 = gameFunctionality(randomNumber, guess6)
//
//     const result7 = gameFunctionality(repeatedDigits, guess7)
//     const result8 = gameFunctionality(repeatedDigits, guess8)
//     const result9 = gameFunctionality(repeatedDigits, guess9)
//     const result10 = gameFunctionality(repeatedDigits, guess10)
//     const result11 = gameFunctionality(repeatedDigits, guess11)
//     const result12 = gameFunctionality(repeatedDigits, guess12)
//
//     expect(result1).toStrictEqual(['red', 'yellow', 'yellow', 'yellow'])
//     expect(result2).toBe(['red', 'red', 'yellow', 'yellow'])
//     expect(result3).toBe(['red', 'red', 'red', 'yellow'])
//     expect(result4).toBe(['red', 'red', 'red', 'red'])
//     expect(result5).toBe(['green', 'green', 'green', 'green'])
//     expect(result6).toBe(['green', 'red', 'red', 'yellow'])
//
//     expect(result7).toBe(['yellow', 'red', 'red', 'red'])
//     expect(result8).toBe(['red', 'red', 'green', 'red'])
//     expect(result9).toBe(['red', 'red', 'green', 'green'])
//     expect(result10).toBe(['red', 'red', 'red', 'green'])
//     expect(result11).toBe(['red', 'red', 'green', 'green'])
//     expect(result12).toBe(['red', 'red', 'green', 'green'])
//   }
// )
//
