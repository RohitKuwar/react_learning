import React from 'react';

class ApiClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.getData()
  }
  async getData() {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();
          this.setState({
            users: data
          })
        } catch(e) {
          console.log(e)
        }
      }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>API Integration with Class Component</h2>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h4>
                {index + 1}. {user.name}
              </h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ApiClass;;