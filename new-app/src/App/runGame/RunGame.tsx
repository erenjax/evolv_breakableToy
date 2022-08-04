import React, {useState} from "react";
import * as Code from '../../model/code';
import RandomNumber from "./RandNum";
import OtpInputGuess from "./OTPInputGuess";
import AlertModal from "./modals/alertModal";
import HelpModal from "./modals/helpModal";

const RunGame = () => {
  const [guess, setGuess] = useState(new Array(4).fill(""))
  const [randomNumber, setRandomNumber] = useState([2, 0, 2, 3] as Code.Code)
  const [showAlert, setShowAlert] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [tries, setTries] = useState(0)
  const RandomNumberProps = {
    randomNumber: randomNumber,
    setRandomNumber: setRandomNumber,
    setShowAlert: setShowAlert,
    setTries: setTries
  }
  const OtpInputGuessProps = {
    guess: guess,
    setGuess: setGuess,
    randomNumber: randomNumber,
    setRandomNumber: setRandomNumber,
    tries: tries,
    setTries: setTries,
    setShowAlert: setShowAlert
  }
  const handleOnClickHelp = () => {
    setShowHelpModal(true)
  }

  return (
    <div className="app-runGame">
      <div className="flex flex-col justify-center bg-charcoal border-8 border-hacky-green rounded-3xl h-full w-full p-6 md:p-16 md:pt-0 shadow-box">
        <AlertModal showAlert={showAlert} setShowAlert={setShowAlert} />
        <h1>Nordle</h1>
        <RandomNumber  {...RandomNumberProps} />
        <OtpInputGuess {...OtpInputGuessProps} />
        <div className="flex justify-end">
          <button
            className="help-button"
            onClick={handleOnClickHelp}>
            ?
          </button>
        </div>
        <HelpModal showHelpModal={showHelpModal} setShowHelpModal={setShowHelpModal} />
      </div>
    </div>
  )
}

export default RunGame;
