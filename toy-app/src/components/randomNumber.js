import React, { useState } from "react";

function RandomString() {
  const [randNum, setRandNum] = React.useState("random number");
  function generate(e) {
    console.log("button clicked");
  }
  return (
    <div>
      <p>
        {" "}
        <button onClick={generate}>GenerateNew Secret Number</button>
      </p>
      <div>{randNum}</div>
    </div>
  );
}

export default RandomString;
