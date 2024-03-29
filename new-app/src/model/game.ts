import * as Code from '../model/code'

export const getHintArray = (randomNumber: Code.Code, guess: Code.Code): string[] => {
  const iterateCode = (value: number, index: number): string => {
    if (randomNumber[index] === value) {
      return "key"
    }
    else {return "miss"}
  }
  const hintArray: string[] = guess.map(iterateCode)

  return hintArray
}

export const hintCount = (randomNumber: Code.Code, guess: Code.Code): number => {
  let keyCount: number = 0

  const hintArray: string[] = getHintArray(randomNumber, guess)

  const count = (value: string) => {
    if (value === "key") {
      keyCount += 1
    }
  }
  hintArray.forEach(count)

  return keyCount
}

export const getTriesCount = (tries: number): number => {
  const addTry: number = tries += 1
  return addTry
}
export const getUnit = (randomNumber: Code.Code, guess: Code.Code): number => {
  let unitCount: number = 0
  let seen: number[] = []

  const iterateCode = (value: number, index: number): string => {
    if (randomNumber[index] === value) {
      seen.push(value)
      return "key"
    } if (randomNumber[0] === value && 0 !== index) {
      if (seen.includes(value)) {
        return "repeat"
      } else {
        seen.push(value)
        return "unit"
      }
    } if (randomNumber[1] === value && 1 !== index) {
      if (seen.includes(value)) {
        return "repeat"
      } else {
        seen.push(value)
        return "unit"
      }
    } if (randomNumber[2] === value && 2 !== index) {
      if (seen.includes(value)) {
        return "repeat"
      } else {
        seen.push(value)
        return "unit"
      }
    } if (randomNumber[3] === value && 3 !== index) {
      if (seen.includes(value)) {
        return "repeat"
      } else {
        seen.push(value)
        return "unit"
      }
    }
    else {return "miss"}
  }
  const hintArray: string[] = guess.map(iterateCode)

  const count = (value: string, index: number) => {
    if (value === "key") {
    } if (value === "unit") {
      const guessKey: Code.CodeDigit | undefined = guess[index]
      if (guessKey) {
        if (randomNumber[index] !== guessKey) {
          unitCount += 1
        }
      }
    }
  }

  hintArray.forEach(count)

  return unitCount
}

export const gameFunctionality = (randomNumber: Code.Code, guess: Code.Code): string[] => {
  const getHintColor = (value: Code.CodeDigit, index: number): string => {
    let digitIndex: number = randomNumber.indexOf(value)

    if (digitIndex === -1) {
      return 'red'
    } else {
      if (guess[index] === randomNumber[index]) {
        return 'green'
      } else {
        return 'yellow'
      }
    }
  }
  const hintColors: string[] = guess.map(getHintColor)
  console.log({hintColors})

  return hintColors
}
