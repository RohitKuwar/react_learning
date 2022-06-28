import React, { useState, useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const counterHander = () => {
    setCounter(counter + 1);
  };
  function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }

  return (
    <div>
      <h1>useMemo Hook</h1>
      <input type="number" placeholder="Enter a number" 
        value={number} onChange={onChangeHandler}>
      </input>
      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  )
}

export default Memo