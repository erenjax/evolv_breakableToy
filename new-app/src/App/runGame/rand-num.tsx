import React, {useState} from 'react';

function RandomNumber(){
  const [num, setNum] = useState(0)

  const handleRandom = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setNum(randNum);
    console.log({num});
  };
  
  return(
    <div>
      <button onClick={(event: React.MouseEvent) => handleRandom(1000, 9999)}>
        Generate Number
      </button>
    </div>
  );
};

export default RandomNumber;
