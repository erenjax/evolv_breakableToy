import React from "react";

const HelpModal = ({
  showHelpModal,
  setShowHelpModal,
}: {
  showHelpModal: boolean;
  setShowHelpModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleOnClick = () => {
    setShowHelpModal(false);
  };

  return (
    <div>
      {showHelpModal ? (
        <div
          className="transition ease-in-out duration-200 justify-center items-center flex m-2 p-4 md:p-8 bg-opacity-25 bg-hacky-green text-black rounded-2xl shadow-inner fixed inset-0 z-50"
          onClick={handleOnClick}
        >
          <div className="flex flex-col p-12 bg-black text-white rounded-2xl w-144 h-144 border-4 border-hacky-green">
            <p className="text-2xl md:text-4xl">How to Play</p>
            <p className="text-xs md:text-lg text-left p-0 pt-8 md:p-8 md:pl-16">
              <li>Generate a Code</li>
              <li>Enter a 4-digit guess in the purple terminal squares</li>
              <li>Press Submit or hit the Enter key to submit your guess</li>
              <li>
                Indicators will signify if a digit is correct or incorrect
              </li>
              <li>
                A red light means the digit is not in the code, a yellow light
                means the digit exists in a different spot in the code, and a
                green light means the digit is the correct number in the correct
                spot in the code
              </li>
              <li>Press clear to clear the terminal squares</li>
              <li>Continue guessing until you have cracked the code</li>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HelpModal;
