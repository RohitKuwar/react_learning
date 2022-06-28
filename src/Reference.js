import React, { useRef, useContext } from 'react'
import { useEffect } from 'react';
import { FirstName } from './Home';

function Reference() {
  const myContext = useContext(FirstName)
  const inputRef = useRef();
  const headingRef = useRef();
  const countHandle = () => {
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.focus();
    console.log(headingRef);
    console.log(headingRef.current);
    headingRef.current.style.color = 'red';
  }
  useEffect(() => {
    // countHandle()
  })
  return (
    <div>
      <h1>useRef Hook</h1>
      <input type='text' ref={inputRef} value='rohit' />
      <button onClick={countHandle}>Count</button>
      <h2>##### {myContext}</h2>
      <h1
        ref={headingRef}
        style={{ color: "blue", border: "1px solid black", width: "200px" }}
      >
        I am heading
      </h1>
    </div>
  );
}

export default Reference