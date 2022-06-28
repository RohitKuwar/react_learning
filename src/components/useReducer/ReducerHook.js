import React, { useReducer }  from 'react';

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>ReducerHook</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
}

export default ReducerHook