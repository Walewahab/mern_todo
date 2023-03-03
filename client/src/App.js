import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";

function App() {
  const[todo, setTodo] = useState([]);
  const[text, setText] = useState("");
  const[isUpdating, setIsUpdating] = useState(false);
  const[todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo)
  },[])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
  
      <div className="parent">

        <div class="top">
          <h1>To-Do List</h1>
        </div>

        <div className="todo-body">
          {todo.map((item) => (
            <Todo
              text={item.text}
              key={item._id}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>

            <div class="form" >
            <input className="ibox" type="text" placeholder="Type in a new task!" value={text}
              onChange={(e) => setText(e.target.value)} />

            <button className="btn" onClick={isUpdating ? () => updateTodo(todoId, text, setTodo, setText, setIsUpdating) : () => addTodo(text, setText,setTodo)}>
              {isUpdating ? "Update" : "Add"}
            </button>
            </div>

      </div>
  );
}

export default App;
