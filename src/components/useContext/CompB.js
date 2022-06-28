import React, { useContext } from 'react'
import { MyContext } from "../Home";

function CompB() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <h2>CompB {contextValue}</h2>
    </div>
  );
}

export default CompB