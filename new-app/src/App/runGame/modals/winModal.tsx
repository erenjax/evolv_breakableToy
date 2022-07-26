import React from 'react';
import * as Code from '../../../model/code';

const WinModal = ({showWinModal, setShowWinModal, setGuess, setRandomNumber}: {showWinModal: boolean, setShowWinModal: React.Dispatch<React.SetStateAction<boolean>>, setGuess: React.Dispatch<React.SetStateAction<any[]>>, setRandomNumber: React.Dispatch<React.SetStateAction<Code.Code>>}) => {

  const handleOnClick = () => {
    setShowWinModal(false)
    setGuess(new Array(4).fill(""))
    setRandomNumber([0, 0, 0, 0])
  }

  return (
    <div>
      {showWinModal ? (
        <div
          className="transition ease-in-out justify-center items-center flex m-2 p-4 md:p-8 bg-opacity-25 bg-hacky-green text-black rounded-2xl shadow-inner fixed inset-0 z-50"
          onClick={handleOnClick}>
          <div className="animate-bounce flex flex-col p-12 bg-black text-white rounded-2xl w-144 h-144 border-4 border-hacky-green">
            <p className="text-4xl">You Win!</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default WinModal;
