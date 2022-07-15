import * as Code from '../model/code'

export const hintCount = (randomNumber: Code.Code, guess: Code.Code): number => {
  let keyCount: number = 0

  const iterateCode = (value: number, index: number): string => {
    if (randomNumber[index] === value) {
      return "key"
    }
    else {return "miss"}
  }
  const hintArray: string[] = guess.map(iterateCode)

  const count = (value: string) => {
    if (value === "key") {
      keyCount += 1
    }
  }
  hintArray.forEach(count)

  return keyCount
}
// export const getUnit = (randomNumber: Code.Code, guess: Code.Code): number => {
//   let keyCount: number = 0
//   let unitCount: number = 0
//   let seen: number[] = []
//
//   const iterateCode = (value: number, index: number): string => {
//     if (randomNumber[index] === value) {
//       seen.push(value)
//       return "key"
//     }
//     else {return "miss"}
//     // } if (randomNumber[0] === value && 0 != index) {
//     //   if (seen.includes(value)) {
//     //     return "repeat"
//     //   } else {
//     //     seen.push(value)
//     //     return "unit"
//     //   }
//     // } if (randomNumber[1] === value && 1 != index) {
//     //   if (seen.includes(value)) {
//     //     return "repeat"
//     //   } else {
//     //     seen.push(value)
//     //     return "unit"
//     //   }
//     // } if (randomNumber[2] === value && 2 != index) {
//     //   if (seen.includes(value)) {
//     //     return "repeat"
//     //   } else {
//     //     seen.push(value)
//     //     return "unit"
//     //   }
//     // } if (randomNumber[3] === value && 3 != index) {
//     //   if (seen.includes(value)) {
//     //     return "repeat"
//     //   } else {
//     //     seen.push(value)
//     //     return "unit"
//     //   }
//     // }
//   }
//   const hintArray: string[] = guess.map(iterateCode)
//   console.log({hintArray})
//
//   const count = (value: string, index: number) => {
//     if (value === "key") {
//       keyCount += 1
//     } if (value === "unit") {
//       const guessKey: Code.CodeDigit | undefined = guess[index]
//       if (guessKey) {
//         if (randomNumber[index] != guessKey) {
//           unitCount += 1
//         }
//       }
//     }
//   }
//
//   hintArray.forEach(count)
//
//   return keyCount
// }


