import React, { useState } from 'react';

function TextInput(props){
  const [ ball, setBall ] = React.useState(0);
  const newBall = event => setBall(ball+1);
  return(
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => console.log("value changed")}
      />
        <p>^Text Input Box^</p>
      <div>
        <p> Balls: {ball}</p>
        <p> <button onClick={newBall}>New Ball</button></p>
      </div>
    </div>
  );
 };

export default TextInput;
