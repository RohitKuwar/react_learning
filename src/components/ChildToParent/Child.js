import React, { useState, useEffect } from "react";

function Child({ getDataFromChild }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={() => getDataFromChild(users)}>Send Data</button>
      {console.log('child:', users)}
    </div>
  );
}

export default Child;
