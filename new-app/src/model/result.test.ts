import * as Code from "./code";
import * as Result from "./result";

it("", () => {
  const code0000: Code.Code = [0, 0, 0, 0];
  const guess1: Code.Code = [1, 1, 1, 0];
  const guess2: Code.Code = [1, 1, 0, 0];
  const guess3: Code.Code = [1, 0, 0, 0];
  const guess4: Code.Code = [0, 0, 0, 0];

  const result1 = Result.checkResultLight(code0000, guess1);
  const result2 = Result.checkResultLight(code0000, guess2);
  const result3 = Result.checkResultLight(code0000, guess3);
  const result4 = Result.checkResultLight(code0000, guess4);

  expect(result1).toStrictEqual(["red", "red", "red", "green"]);
  expect(result2).toStrictEqual(["red", "red", "green", "green"]);
  expect(result3).toStrictEqual(["red", "green", "green", "green"]);
  expect(result4).toStrictEqual(["green", "green", "green", "green"]);
});

it("", () => {
  const code1234: Code.Code = [1, 2, 3, 4];
  const guess1: Code.Code = [0, 1, 2, 3];
  const guess2: Code.Code = [0, 0, 1, 1];
  const guess3: Code.Code = [0, 0, 0, 1];
  const guess4: Code.Code = [0, 0, 0, 0];
  const guess5: Code.Code = [1, 2, 3, 4];
  const guess6: Code.Code = [1, 0, 0, 2];

  const code1233: Code.Code = [1, 2, 3, 3];
  const guess7: Code.Code = [3, 0, 0, 0];
  const guess8: Code.Code = [0, 0, 3, 0];
  const guess9: Code.Code = [0, 0, 3, 3];
  const guess10: Code.Code = [0, 0, 0, 3];
  const guess11: Code.Code = [0, 3, 3, 3];
  const guess12: Code.Code = [3, 3, 3, 3];

  const result1 = Result.checkResultLight(code1234, guess1);
  const result2 = Result.checkResultLight(code1234, guess2);
  const result3 = Result.checkResultLight(code1234, guess3);
  const result4 = Result.checkResultLight(code1234, guess4);
  const result5 = Result.checkResultLight(code1234, guess5);
  const result6 = Result.checkResultLight(code1234, guess6);

  const result7 = Result.checkResultLight(code1233, guess7);
  const result8 = Result.checkResultLight(code1233, guess8);
  const result9 = Result.checkResultLight(code1233, guess9);
  const result10 = Result.checkResultLight(code1233, guess10);
  const result11 = Result.checkResultLight(code1233, guess11);
  const result12 = Result.checkResultLight(code1233, guess12);

  expect(result1).toStrictEqual(["red", "yellow", "yellow", "yellow"]);
  expect(result2).toStrictEqual(["red", "red", "yellow", "red"]);
  expect(result3).toStrictEqual(["red", "red", "red", "yellow"]);
  expect(result4).toStrictEqual(["red", "red", "red", "red"]);
  expect(result5).toStrictEqual(["green", "green", "green", "green"]);
  expect(result6).toStrictEqual(["green", "red", "red", "yellow"]);

  expect(result7).toStrictEqual(["yellow", "red", "red", "red"]);
  expect(result8).toStrictEqual(["red", "red", "green", "red"]);
  expect(result9).toStrictEqual(["red", "red", "green", "green"]);
  expect(result10).toStrictEqual(["red", "red", "red", "green"]);
  expect(result11).toStrictEqual(["red", "red", "green", "green"]);
  expect(result12).toStrictEqual(["red", "red", "green", "green"]);
});
