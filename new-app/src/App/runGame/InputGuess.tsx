import React, { useState } from "react";
import * as Code from "../../model/code";

const InputGuess = () => {
  const [guessString, setGuessString] = useState("");
  const [printGuess, setPrintGuess] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleOnClick = () => {
    submitGuess();
  };

  return (
    <body className="App">
      <div className="bg-purple-200">
        <h2>Real Guess Input</h2>
        <div>
          <input
            value={guessString}
            onChange={handleInput}
            placeholder="Enter a 4-digit number"
            className="input"
            maxLength={4}
            onKeyPress={handleOnKeyPress}
          />
          <button
            className="bg-orange-500 border hover:bg-orange-700 text-white font-bold
            py-2 px-4 rounded"
            onClick={handleOnClick}
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
