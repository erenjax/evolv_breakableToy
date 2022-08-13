import React, {useState} from "react";
import * as Code from '../../model/code';
import * as RandNum from '../../model/generateRandNum'
import RandomNumber from "./RandNum";
import OtpInputGuess from "./OTPInputGuess";
import AlertModal from "./modals/alertModal";
import HelpModal from "./modals/helpModal";
import MusicSettings from "./modals/musicSettings";

const RunGame = () => {
  const [guess, setGuess] = useState(new Array(4).fill(""))
  const defaultCode: Code.Code = RandNum.buildRandomNumber()
  const [randomNumber, setRandomNumber] = useState(defaultCode)

  const [showAlert, setShowAlert] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showMusicSettings, setShowMusicSettings] = useState(false)
  const [tries, setTries] = useState(0)
  const [lightArray, setLightArray] = useState(['', '', '', ''])

  const RandomNumberProps = {
    randomNumber: randomNumber,
    setRandomNumber: setRandomNumber,
    setShowAlert: setShowAlert,
    setTries: setTries,
    setGuess: setGuess,
    setLightArray: setLightArray
  }
  const OtpInputGuessProps = {
    guess: guess,
    setGuess: setGuess,
    randomNumber: randomNumber,
    setRandomNumber: setRandomNumber,
    tries: tries,
    setTries: setTries,
    setShowAlert: setShowAlert,
    lightArray: lightArray,
    setLightArray: setLightArray
  }
  const handleOnClickHelp = () => {
    setShowHelpModal(true)
  }
  const handleOnClickMusicSettings = () => {
    setShowMusicSettings(!showMusicSettings)
  }

  return (
    <div className="app-runGame">
      <div className="flex flex-col justify-center bg-charcoal border-8 border-hacky-green rounded-3xl h-full w-full p-6 md:p-16 md:pt-0 shadow-box">
        <AlertModal showAlert={showAlert} setShowAlert={setShowAlert} />
        <h1>Nordle</h1>
        <RandomNumber  {...RandomNumberProps} />
        <OtpInputGuess {...OtpInputGuessProps} />
        <div className="flex grid grid-rows-1 grid-flow-col flex-row">
          <div className="justify-self-start">
            <button
              className="help-button justify-self-end"
              onClick={handleOnClickMusicSettings}>
              Music Settings
            </button>
            <MusicSettings showMusicSettings={showMusicSettings} setShowMusicSettings={setShowMusicSettings} />
          </div>
          <button
            className="help-button justify-self-end"
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
