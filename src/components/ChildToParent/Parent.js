import React, { useState } from "react"
import Child from './Child'

function Parent() {
  const [arr, setArr] = useState([]);
  return (
    <div>
      <h1>Parent Component</h1>
      <div>Parent component getting data from Child component</div>
      {arr.map((item) => (
        <h5 key={item.id}>{item.username}</h5>
      ))}
      <Child getDataFromChild={setArr} />
      {console.log("parent:", arr)}
    </div>
  );
}

export default Parent