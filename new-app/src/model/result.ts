import * as Code from "./code";

export type DigitResult = {
  kind:
    | "NotChecked"
    | "CheckedRightDigit"
    | "CheckedWrongDigit"
    | "RightDigitWrongPlace";
  usedByOtherDigit: boolean;
  codeValue: Code.CodeDigit;
  guessValue: Code.CodeDigit;
};

export type Result = [DigitResult, DigitResult, DigitResult, DigitResult];

export const buildResult = (code: Code.Code, guess: Code.Code): Result => {
  return [
    {
      kind: "NotChecked",
      usedByOtherDigit: false,
      codeValue: code[0],
      guessValue: guess[0],
    },
    {
      kind: "NotChecked",
      usedByOtherDigit: false,
      codeValue: code[1],
      guessValue: guess[1],
    },
    {
      kind: "NotChecked",
      usedByOtherDigit: false,
      codeValue: code[2],
      guessValue: guess[2],
    },
    {
      kind: "NotChecked",
      usedByOtherDigit: false,
      codeValue: code[3],
      guessValue: guess[3],
    },
  ];
};

const checkDigitIsRight = (digitResult: DigitResult): DigitResult => {
  if (digitResult.codeValue === digitResult.guessValue) {
    return { ...digitResult, kind: "CheckedRightDigit" };
  } else {
    return { ...digitResult, kind: "CheckedWrongDigit" };
  }
};

export const checkRightDigits = (result: Result): Result => {
  return result.map(checkDigitIsRight) as Result;
};

const checkRightDigitWrongPlace1 =
  (result: Result) =>
  (digitResult: DigitResult, index: number): DigitResult => {
    let foundWRDP = false;
    const nextDigitResult: DigitResult = { ...digitResult };
    if (
      digitResult.kind === "CheckedRightDigit" ||
      digitResult.kind === "RightDigitWrongPlace"
    ) {
      return nextDigitResult;
    }
    result.forEach((digitResult1: DigitResult, index1: number) => {
      if (index === index1 || foundWRDP) {
        return;
      }
      switch (digitResult1.kind) {
        case "NotChecked":
        case "CheckedRightDigit":
          return;
        case "CheckedWrongDigit":
        case "RightDigitWrongPlace":
          if (digitResult1.usedByOtherDigit) {
            return;
          } else if (digitResult1.codeValue === digitResult.guessValue) {
            digitResult1.usedByOtherDigit = true;
            nextDigitResult.kind = "RightDigitWrongPlace";
            foundWRDP = true;
            return;
          }
      }
    });
    return nextDigitResult;
  };

export const checkRightDigitWrongPlace = (result: Result): Result => {
  return result.map(checkRightDigitWrongPlace1(result)) as Result;
};

export const checkResult = (code: Code.Code, guess: Code.Code): Result => {
  const initialResult = buildResult(code, guess);
  const checkedForRightDigits = checkRightDigits(initialResult);
  const checkedForRightDigitWrongPlace = checkRightDigitWrongPlace(
    checkedForRightDigits
  );
  return checkedForRightDigitWrongPlace;
};

export const resultToKind = (result: Result): string[] => {
  return result.map((digitResult: DigitResult) => {
    return digitResult.kind;
  });
};

export const checkResultLight = (
  code: Code.Code,
  guess: Code.Code
): string[] => {
  const result: Result = checkResult(code, guess);
  const lightResult: string[] = resultToLight(result);
  return lightResult;
};

const buildLightArray = (digitResult: DigitResult): string => {
  switch (digitResult.kind) {
    case "NotChecked":
    case "CheckedWrongDigit":
      return "red";
    case "CheckedRightDigit":
      return "green";
    case "RightDigitWrongPlace":
      return "yellow";
  }
};

export const resultToLight = (result: Result): string[] => {
  return result.map(buildLightArray);
};
