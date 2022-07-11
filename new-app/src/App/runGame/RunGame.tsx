import React from "react";
import InputGuess from "./InputGuess";
import RandomNumber from "./RandNum";
import OtpInput from "./OTPInput";

function RunGame() {
  return (
    <div>
      <h1>Nordle</h1>
      <RandomNumber />
      <InputGuess />
      <OtpInput />
    </div>
  );
}

export default RunGame;
