import React, {useState, useEffect} from 'react';
import * as Code from '../../model/code';
import * as Game from '../../model/game';
import ClassNames from 'classnames';
import WinModal from './modals/winModal';

const OTPInputGuess = ({guess, setGuess, randomNumber, setRandomNumber}: {guess: any[], setGuess: React.Dispatch<React.SetStateAction<any[]>>, randomNumber: Code.Code, setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>}) => {
  const [codeGuess, setCodeGuess] = useState([0, 0, 0, 0])
  const [hintArray, setHintArray] = useState(['', '', '', ''])
  const [activeOTPIndex, setActiveOTPIndex] = useState(0)
  const [currentOTPIndex, setCurrentOTPIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [showWinModal, setShowWinModal] = useState(false);

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
      const codeForm: Code.Code = Code.fromString(guess.join(''))
      setErrorMessage("");
      setCodeGuess(codeForm);
      setHintArray(Game.getHintArray(randomNumber, codeForm));
      setGuess(new Array(4).fill(""))
      setActiveOTPIndex(0)
      if (Game.hintCount(randomNumber, codeForm) === 4) {
        setCodeGuess([0, 0, 0, 0])
        setHintArray(['', '', '', ''])
        setShowWinModal(true)
      }
    } catch (error) {
      setErrorMessage("invalid guess");
    }
    console.log({guess, randomNumber})
  };

  const handleOnClickSubmit = () => {
    submitGuess();
  };

  const buildDigitStyle = (hint?: string): string => {
    switch (hint) {
      case ("miss"):
        return "box-output border-output-wrong-red text-output-wrong-red"
      case ("key"):
        return "box-output border-hacky-green"
    }
    return "box-output border-gray-600"
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        {hintArray.map((element, index) => {
          return (
            <div
              key={index}
              className={ClassNames(buildDigitStyle(element))}>
              <p className='self-center'>{codeGuess[index]}</p>
            </div>
          )
        })
        }
      </div>
      <div className="flex items-center justify-center">
        <div className="m-2 p-2 md:p-4 border-terminal-orange border-2 bg-black rounded-2xl shadow-inner">
          <p className="text-white">Enter Your Guess</p>
          <div className="p-2 space-x-2 md:space-x-4 text-white">
            {guess.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    className="box-input bg-ubuntu-purple"
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
      <div className="m-4 text-xl text-output-wrong-red">
        <p>{errorMessage}</p>
      </div>
      <WinModal showWinModal={showWinModal} setShowWinModal={setShowWinModal} setGuess={setGuess} setRandomNumber={setRandomNumber} />
    </div>
  );
}

export default OTPInputGuess;
