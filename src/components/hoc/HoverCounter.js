import React from 'react'
import HOC from "./HOC";

function HoverCounter({count, incrementCount}) {
  console.log("render hover");
  return (
    <div>
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    </div>
  );
}

export default HOC(HoverCounter);