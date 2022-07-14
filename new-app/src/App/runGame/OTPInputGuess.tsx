import React, {useState, useEffect} from 'react';
import * as Code from '../../model/code';

const OTPInputGuess = () => {
  const [guess, setGuess] = useState(new Array(4).fill(""));
  const [printGuess, setPrintGuess] = useState("");
  const [activeOTPIndex, setActiveOTPIndex] = useState(0)
  const [currentOTPIndex, setCurrentOTPIndex] = useState(0);
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
    setCurrentOTPIndex(index)
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
      const codeForm: Code.Code = Code.fromString(stringForm);
      setErrorMessage("");
      console.log({codeForm});
      setPrintGuess(stringForm);
    } catch (error) {
      console.error({guess});
      setErrorMessage("invalid guess");
    }
  };

  const handleOnClickSubmit = () => {
    submitGuess();
  };


  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-4 p-8 border w-160 h-40 bg-gray-300 shadow-inner">
          <div className="space-x-4">
            {guess.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    className="w-24 h-24 border-2 rounded bg-transparent shadow-md text-center text-2xl font-semibold"
                    onChange={handleOnChange}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={guess[index]}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div className="m-4">
        <button
          className="bg-purple-300 border hover:bg-purple-500 text-white font-bold
            py-4 px-8 rounded"
          onClick={handleOnClickSubmit}
        >
          Submit
        </button>
      </div>
      <div className="m-4 text-xl">
        <p>Your Guess: {printGuess}</p>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}

export default OTPInputGuess;
