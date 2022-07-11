import React, {useState} from "react";
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
    <div>
      <input
        value={guessString}
        onChange={handleInput}
        placeholder="Enter a 4-digit number"
        className="input"
        maxLength={4}
        onKeyPress={handleOnKeyPress}
      />
      <button onClick={handleOnClick}>Submit</button>
      <p>Press Enter to submit a guess</p>
      <p>Your Guess: {printGuess}</p>
    </div>
  );
};

export default InputGuess;
