import React, {useState, useEffect} from 'react';

function Api() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getListData = (e, data) => {
    console.log(data);
  };
  // https://randomuser.me/api
  // https://randomuser.me/api/?results=10
  // https://api.agify.io/?name=meelad

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setLoading(false);
        setUsers(data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h2>API Integration with Function Component</h2>
      {console.log("child", users)}
      {loading && <span>...loading</span>}
      {users.length > 0 &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <h4 onClick={(e) => getListData(e, user.name)}>
                {index + 1}. {user.name}
              </h4>
            </div>
          );
        })}
    </div>
  );
}

export default Api;