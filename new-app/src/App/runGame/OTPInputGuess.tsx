import React, {useState, useEffect} from 'react';


const OTPInputGuess = ({guess, setGuess}: {guess: any[], setGuess: React.Dispatch<React.SetStateAction<any[]>>}) => {
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
      setErrorMessage("");
      setPrintGuess(stringForm);
    } catch (error) {
      setErrorMessage("invalid guess");
    }
  };

  const handleOnClickSubmit = () => {
    submitGuess();
  };


  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-4 p-4 md:p-8 border-terminal-orange border-2 bg-vscode-teal-dark rounded-2xl shadow-inner">
          <div className="space-x-2 md:space-x-4">
            {guess.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    className="box-input"
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
          className="button-1"
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
