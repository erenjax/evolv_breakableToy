import React, {useState, useEffect} from 'react';

let currentOTPIndex: number = 0;
const OTPInputGuess = () => {
  const [guess, setGuess] = useState(new Array(4).fill(""));
  const [printGuess, setPrintGuess] = useState("");
  const [activeOTPIndex, setActiveOTPIndex] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = target;
    const newGuess: string[] = [...guess];
    newGuess[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setGuess(newGuess);
  };

  const handleOnKeyDown = (
    {key}: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else if (key === "Enter") {
      submitGuess();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const submitGuess = (): void => {
    try {
      const stringForm: string = guess.join('');
      setErrorMessage("");
      setPrintGuess(stringForm);
    } catch (error) {
      console.error(error);
      setErrorMessage("invalid guess");
    }
  };

  const handleOnClickSubmit = () => {
    submitGuess();
  };


  return (
    <div>
      {guess.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent text-center font-semibold"
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={guess[index]}
            />
            {index === guess.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </React.Fragment>
        );
      })}
      <button
        className="bg-purple-300 border hover:bg-purple-500 text-white font-bold
            py-2 px-4 rounded"
        onClick={handleOnClickSubmit}
      >
        Submit
      </button>
      <p>Your Guess: {printGuess}</p>
      <p>{errorMessage}</p>
    </div>
  );
}

export default OTPInputGuess;
