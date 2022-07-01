import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./actions"

export default function TodoAppRedux() {
  const [text, setText] = useState("");
  const todoArr = useSelector(state => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>To Do List Redux App</h1>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => (text !== '') && dispatch(addTodo(text), setText(''))}>Add Todo</button>
      <div>
        {todoArr.length > 0 &&
          todoArr.map((todo, index) => {
            return (
              <div key={index}>
                <h4>{todo.data}</h4>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
