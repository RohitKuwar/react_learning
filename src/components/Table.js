import React, {useState, useEffect} from 'react';

function Table() {
  const [data, setData] = useState([]);
  // const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const res = await data.json();
      setData(res);
    }
    catch(e) {
      console.log(e)
    }
  }

  // const getTodos = async () => {
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const res = await data.json();
  //     setTodos(res);
  //   }
  //   catch(e) {
  //     console.log(e)
  //   }
  // }

  useEffect(() => {
    getData();
    // getTodos();
  }, [])

  return (
    <>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {
          data.length > 0 && 
          data.map(user => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })
        }
      </table>
    </>
  );
}

export default Table;