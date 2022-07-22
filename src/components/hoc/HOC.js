import React, { useState } from "react";

// function HOC() {
//   const [count, setCount] = useState(0)
//   const incrementCount = () => setCount(count + 1)

//   return (
//     <div>HOC</div>
//   )
// }

const HOC = OriginalComponent => {
  function NewComponent() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);

    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  }
  return NewComponent
}

export default HOC;