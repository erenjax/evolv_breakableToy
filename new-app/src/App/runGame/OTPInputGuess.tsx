import React, {useState, useEffect} from 'react';
import * as Code from '../../model/code';
import * as Game from '../../model/game';
import * as Result from '../../model/result';
import ClassNames from 'classnames';
import WinModal from './modals/winModal';

const OTPInputGuess = ({guess, setGuess, randomNumber, setRandomNumber, tries, setTries, setShowAlert, lightArray, setLightArray, setShowWeedle, setFadeWeedle}: {guess: any[], setGuess: React.Dispatch<React.SetStateAction<any[]>>, randomNumber: Code.Code, setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>, tries: number, setTries: React.Dispatch<React.SetStateAction<number>>, setShowAlert: React.Dispatch<React.SetStateAction<boolean>>, lightArray: string[], setLightArray: React.Dispatch<React.SetStateAction<string[]>>, setShowWeedle: React.Dispatch<React.SetStateAction<boolean>>, setFadeWeedle: React.Dispatch<React.SetStateAction<boolean>>}) => {
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

    if (!value) setActiveOTPIndex(currentOTPIndex);
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
    } else if (key === "ArrowLeft") {
      setActiveOTPIndex(activeOTPIndex - 1)
    } else if (key === "ArrowRight") {
      setActiveOTPIndex(activeOTPIndex + 1)
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const setFade = () => {
    setFadeWeedle(false)
    setTimeout(setFadeWeedle, 500, true)
  }

  const submitGuess = (): void => {
    try {
      const codeForm: Code.Code = Code.fromString(guess.join(''))
      const stringForm: string = guess.join('')
      if (stringForm === "0420") {
        setShowWeedle(true)
        setFade()
      } else {
        setShowWeedle(false)
        setFade()
      }
      setLightArray(['', '', '', ''])
      setErrorMessage("");
      setTries(Game.getTriesCount(tries))
      setTimeout(setLightArray, 500, Result.checkResultLight(randomNumber, codeForm));
      if (Game.hintCount(randomNumber, codeForm) === 4) {
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
  const handleOnClickClear = () => {
    setGuess(new Array(4).fill(""))
    setActiveOTPIndex(0)
  }

  const buildDigitStyle = (light?: string): string => {
    switch (light) {
      case ("red"):
        return "box-output bg-output-wrong-red shadow-indicator-red"
      case ("green"):
        return "box-output bg-hacky-green shadow-indicator-green"
      case ("yellow"):
        return "box-output bg-indicator-yellow shadow-indicator-yellow"
    }
    return "box-output bg-charcoal"
  }

  return (
    <div>
      <div className="flex place-content-end text-xl md:text-2xl">
        <p className="pr-12">Tries: {tries}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="m-2 p-2 md:p-4 border-light-charcoal border-2 bg-black rounded-2xl shadow-inner">
          <p className="text-white">Enter Your Guess</p>
          <div className="p-2 space-x-2 md:space-x-4 text-white">
            {guess.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    ref={index === activeOTPIndex ? inputRef : null}
                    type="number"
                    className="box-input bg-light-charcoal"
                    onChange={handleOnChange}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={guess[index]}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            {lightArray.map((element, index) => {
              return (
                <div
                  key={index}
                  className={ClassNames(buildDigitStyle(element))}>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="button-1 m-4"
          onClick={handleOnClickClear}
        >
          Clear
        </button>
        <button
          className="button-1 m-4"
          onClick={handleOnClickSubmit}
        >
          Submit
        </button>
      </div>
      <div className="m-4 text-xl text-output-wrong-red">
        <p>{errorMessage}</p>
      </div>
      <WinModal showWinModal={showWinModal} setShowWinModal={setShowWinModal} setGuess={setGuess} setRandomNumber={setRandomNumber} tries={tries} setTries={setTries} setLightArray={setLightArray} setShowAlert={setShowAlert} setShowWeedle={setShowWeedle} />
    </div>
  );
}

export default OTPInputGuess;
