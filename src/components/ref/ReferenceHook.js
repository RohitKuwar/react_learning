import React, { useRef } from 'react'

function ReferenceHook() {
  const inputRef = useRef();
  const headingRef = useRef();
  const submit = () => {
    console.log(headingRef);
    inputRef.current.value = 'guddu';
    inputRef.current.style.color = 'red';
    inputRef.current.focus();
    // headingRef.innerText = 'rohit';
  }
  return (
    <div>
      <h1 ref={headingRef}>useRef Hook</h1>
      <input
        type='text'
        onChange={(e) => e.target.value}
        ref={inputRef}
        style={{ color: "blue" }}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default ReferenceHook