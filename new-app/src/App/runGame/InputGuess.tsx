import React, {useState} from "react";
import * as Code from "../../model/code";

const InputGuess = () => {
  const [guessString, setGuessString] = useState("");
  const [printGuess, setPrintGuess] = useState("");
  const GUESS_MAX_LENGTH = 4;

  const handleOnChangeGuessString = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newGuess = event.target.value;
    setGuessString(newGuess);
  };

  const submitGuess = (): void => {
    const codeForm: Code.Code = Code.fromString(guessString);
    const stringForm: string = Code.codeToString(codeForm);
    setPrintGuess(stringForm);
  };

  const handleOnKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      submitGuess();
    }
  };
  const handleOnClickSubmit = () => {
    submitGuess();
  };

  return (
    <body>
      <div className="bg-purple-200">
        <h2>Real Guess Input</h2>
        <div>
          <input
            value={guessString}
            onChange={handleOnChangeGuessString}
            placeholder="Enter a 4-digit number"
            className="input"
            maxLength={GUESS_MAX_LENGTH}
            onKeyPress={handleOnKeyPress}
          />
          <button
            className="bg-purple-300 border hover:bg-purple-500 text-white font-bold
            py-2 px-4 rounded"
            onClick={handleOnClickSubmit}
          >
            Submit
          </button>
          <p>Your Guess: {printGuess}</p>
        </div>
      </div>
    </body>
  );
};

export default InputGuess;
