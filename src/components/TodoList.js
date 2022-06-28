import { useState } from "react";

export default function TodoList() {
  const [text, setText] = useState('');
  const [todoArr, setTodoArr] = useState([]);

  const submitTodo = () => {
    if (text !== "") {
      const newToDos = [...todoArr];
      newToDos.push(text);
      setTodoArr(newToDos)
      setText('');
    }
  };
  const deleteTodo = (id) => {
    const newTodos = todoArr.filter((ele, ind) => {
      return id !== ind
    });
    setTodoArr(newTodos)
  }
  return (
    <div className='App'>
      <h1>To Do List App</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={submitTodo}>Submit</button>
      <div>
        {todoArr.length > 0 &&
          todoArr.map((todo, index) => {
            return (
              <div key={index}>
                <h4>{todo}</h4>
                <button onClick={() => deleteTodo(index)}>DELETE</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
