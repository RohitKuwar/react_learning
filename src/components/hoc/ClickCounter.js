import React from 'react'
import HOC from './HOC'

function ClickCounter({count, incrementCount}) {
  console.log('render click')
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
}

export default HOC(ClickCounter);