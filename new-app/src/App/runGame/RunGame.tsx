import React from "react";
import RandomNumber from "./RandNum";
import OtpInputGuess from "./OTPInputGuess";

function RunGame() {
  return (
    <div>
      <h1>Nordle</h1>
      <RandomNumber />
      <OtpInputGuess />
    </div>
  );
}

export default RunGame;
